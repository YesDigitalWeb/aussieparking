AU.Klass.AjaxForm = Qor.View.extend({
  AjaxForm: function(options) {
    var self = this;

    options = $.extend({
      beforeSerialize: function() {
        self.beforeSerialize(this);
      },
      beforeSubmit: function() {
        if (!this.cancel) {
          self._disableButton();
        }
        self.beforeSubmit(this);
        this.options.data = JSON.stringify(this.options.data);
      },
      success: function(data) {},
      done: function(data, textStatus, jqXHR) {
        self._enableButton();
        self.done(data, textStatus, jqXHR);
      },
      fail: function(jqXHR, textStatus, errorThrown) {
        self._enableButton();
        self.fail(jqXHR, textStatus, errorThrown);
      },
      reset: function(data, textStatus, jqXHR) {
        self.resetForm();
      },
      processData: false
    }, options);

    return this.$("form").length ? this.$("form").fugue(options) : this.$el.fugue(options);
  },

  _disableButton: function() {
    var $submit = this.$('[type="submit"]'),
        processingText = $submit.data('processing-text').replace(/\\/g, '');

    $submit.attr("disabled", true).html(processingText);
  },

  _enableButton: function() {
    var $submit = this.$('[type="submit"]'),
        originalText = $submit.data('original-text').replace(/\\/g, '');

    $submit.attr("disabled", false).html(originalText);
  },

  beforeSerialize: function(that) {},
  beforeSubmit: function(that) {},
  done: function(data, textStatus, jqXHR) {},
  fail: function(jqXHR, textStatus, errorThrown) {},
  resetForm: function(data) {}
});

AU.Klass.Order = AU.Klass.AjaxForm.extend({
  monitDatepickers: function() {
    var self = this,
        today = new Date();

    this.isMoblie = !!new MobileDetect(window.navigator.userAgent).mobile();

    if (this.isMoblie) {
      this.$('.datepicker').each(function(index, item) {
        var $date = $(item),
            value = $date.val();
        if (value) {
          value = self.formatDateForSubmit(value);
          $date.val(value);
        }
        $date.prop('type', 'date').on('change', function() {
          self.rate();
        });
      })

      return;
    }

    this.$('.datepicker').datepicker({
      autoclose: true,
      todayHighlight: true,
      format: 'dd/mm/yyyy',
      startDate: today
    }).on("changeDate", function(e) {
      self.rate();
    });
  },
  rate: function() {
    if (!this.validate(true, true)) return;

    // Note: submitting the whole form here because in some cases, a rate
    // request could come after a book request (most likely in Enter Info
    // panel) and therefore override data set in book request.
    // Submit the whoel form here to bypass the overriding problem because in this way,
    // both rating and booking are basically the same request. It's not an
    // elegant solution, but it should work. (I am victim here too. :()
    var data = {};
    _.each(this.$fugue.serializeArray(), function(elem) {
      data[elem.name] = elem.value;
    });
    data.From = this.formatDateForSubmit(data.CheckInDate) + ' ' + data.ArrivalTime;
    data.To   = this.formatDateForSubmit(data.CheckOutDate) + ' ' + data.ReturnTime;
    data.SubscribeToMailChimp = this.$('input[name="SubscribeToMailChimp"]').is(':checked');

    var loading = this.$('.loading');
    if (loading.length == 0) { loading = $('.j-frame-loading'); }

    loading.toggleClass('hidden');
    var self = this;
    $.ajax({
      url: '/order',
      method: 'POST',
      data: JSON.stringify(data),
      dataType: 'json',
      contentType: 'application/json'
    }).done(function(data) {
      loading.toggleClass('hidden');

      self.$('.j-order-amount').text('$' + data.Amount.toFixed(2));
    }).fail(function(jqXHR, textStatus, errorThrown) {
      loading.toggleClass('hidden');

      if (errorThrown) {
        alert(errorThrown);
        return;
      }

      self.errAlert(jqXHR);
    });
  },
  errAlert: function(data) {
    if (data && data.responseJSON) {
      var errors = data.responseJSON;
      var msg = '';

      for (var name in errors) {
        this.$('[name="'+name+'"]').parent().addClass('error');
        msg += errors[name] + '\n\n';
      }

      alert(msg);
    }
  },
  validate: function(indicate, noProfile) {
    this.$('.error').removeClass('error');

    var now = moment(),
        dateNow = now.format('YYYY-MM-DD'),
        timeNow = now.format('HH:mm');

    var $checkIn = this.$el.find('[name="CheckInDate"]');
    var cancel = false;
    var checkInDate = this.formatDateForSubmit($checkIn.val());
    if (checkInDate == '' || checkInDate < dateNow) {
      indicate && $checkIn.parent().addClass('error');
      cancel = true;
    }

    var $checkOut = this.$el.find('[name="CheckOutDate"]');
    var checkOutDate = this.formatDateForSubmit($checkOut.val());
    if (checkOutDate == '') {
      indicate && $checkOut.parent().addClass('error');
      cancel = true;
    }

    if (checkInDate) {
      this.isMoblie ?
      $checkOut.attr('min', $checkIn.val()) :
      $checkOut.datepicker && $checkOut.datepicker('setStartDate', $checkIn.val());
    }

    var $arrivalTime = this.$el.find('[name="ArrivalTime"]');
    if ($arrivalTime.val() == '' || (checkInDate == dateNow && $arrivalTime.val() < timeNow) ) {
      indicate && $arrivalTime.parent().addClass('error');
      cancel = true;
    }

    var $returnTime = this.$el.find('[name="ReturnTime"]');
    if ($returnTime.val() == '' || (checkOutDate == checkInDate && $returnTime.val() <= $arrivalTime.val()) ) {
      indicate && $returnTime.parent().addClass('error');
      cancel = true;
    }

    var checkInTime = checkInDate + ' ' + $arrivalTime.val(),
        checkOutTime = checkOutDate + ' ' + $returnTime.val();
    if (checkInTime > checkOutTime) {
      if (indicate) {
        if (checkInDate > checkOutDate) {
          $checkOut.parent().addClass('error');
        } else {
          $returnTime.parent().addClass('error');
        }
      }
      cancel = true;
    }

    if (!noProfile) {
      _.each(['Profile.FirstName', 'Profile.LastName', 'Profile.Phone', 'User.Email'], function(name) {
        var $field = this.$el.find('[name="'+name+'"]');
        if ($field.val() != '') return;

        indicate && $field.parent().addClass('error');
        cancel = true;
      }, this);
    }

    this.$fugue.data('fugue').cancel = cancel;
    return !cancel;
  },
  formatDateForSubmit: function(dateStr) {
    if (!dateStr) return '';
    var date = moment(dateStr, "DD/MM/YYYY").format('YYYY-MM-DD');
    return date === 'Invalid date' ? moment(dateStr).format('YYYY-MM-DD') : date;
  }
});

AU.View.BookRates = AU.Klass.Order.extend({
  events: {
    'change .check-kind input': 'rate',
    'change .time-select': 'rate'
  },
  initialize: function() {
    this.$fugue = this.AjaxForm({
      reset: null
    });

    this.monitDatepickers();
  },
  beforeSerialize: function() {
    this.validate(true);
  },
  beforeSubmit: function(that) {
    var data = that.options.data;
    data['From'] = this.formatDateForSubmit(data.CheckInDate) + ' ' + data.ArrivalTime;
    data['To']   = this.formatDateForSubmit(data.CheckOutDate) + ' ' + data.ReturnTime;
    that.options.data = data;

    this.data = that.options.data;
    au.view.BookInfo.load(this.data);
  },
  done: function(data) {
    var val = data.Amount.toFixed(2);

    this.$el.addClass('hidden');
    $('#order-frame-wrapper').removeClass('hidden');
    $('#order-frame-wrapper .tab-page.cur .j-order-amount').text('$'+val);
    $('.article.main > .section').addClass('hide');

    var height = $('#order-frame-wrapper').height();
    $('.article.main').height(height > 764 ? height + 50 : 'auto');

    setTimeout(function() {
      window.scrollTo(0, 1);
    }, 0);
  },
  fail: function(data) {
    this.errAlert(data);
  }
});

AU.View.BookInfo = AU.Klass.Order.extend({
  events: {
    'click .back': 'back',
    'change .check-kind input': 'rate',
    'change .time-select': 'rate'
  },
  initialize: function() {
    this.$fugue = this.AjaxForm({
      reset: null
    });

    this.monitDatepickers();
  },
  beforeSerialize: function() {
    var me = this,
        fugue = this.$fugue.data('fugue'),
        agreed = this.$('#terms-conditions-checkbox').is(':checked');

    this.validate(true);

    if (!fugue.cancel) {
      this.$('#terms-conditions-checkbox').parent().removeClass('error');

      if (!agreed) {
        alert('Please agree to Aussie Parking’s terms and conditions before proceeding.');
        setTimeout(function() {
          me.$('#terms-conditions-checkbox').parent().addClass('error');
        }, 250);

        this.$fugue.data('fugue').cancel = true;
      }

    } else {
      var ordinates = this.$('.error:first').offset().top;
      setTimeout(function() {
        window.scrollTo(0, ordinates);
      }, 0);
    }
  },
  beforeSubmit: function(that) {
    var data = that.options.data;
    data['CheckInDate'] = this.formatDateForSubmit(data.CheckInDate);
    data['CheckOutDate'] = this.formatDateForSubmit(data.CheckOutDate);
    data['From'] = data.CheckInDate + ' ' + data.ArrivalTime;
    data['To']   = data.CheckOutDate + ' ' + data.ReturnTime;
    that.options.data = data;

    // data. = this.$('#terms-conditions-checkbox').is(':checked');
    data.SubscribeToMailChimp = this.$('input[name="SubscribeToMailChimp"]').is(':checked');

    this.data = data;
    this.data.CheckInDate = moment(data.CheckInDate).format('DD/MM/YYYY');
    this.data.CheckOutDate = moment(data.CheckOutDate).format('DD/MM/YYYY');
  },
  back: function() {
    this.$('.error').removeClass('error');

    $('#order-frame-wrapper').addClass('hidden');
    $('#book-rates').removeClass('hidden');

    $('.article.main > .section').removeClass('hide');

    $('.article.main').height('auto');

    setTimeout(function() {
      window.scrollTo(0, 1);
    }, 0);
  },
  done: function(order) {
    var val = order.Amount.toFixed(2);

    var checkOutDate = this.formatDateForSubmit(this.$('[name="CheckOutDate"]').val());
    $.getJSON('/clean_range_products/'+checkOutDate).success(function(rangeProducts) {
      var amount = au.view.tabSwitch.next().$el.find('.tab-page.cur .j-order-amount');
      amount.text('$'+val);
      au.view.BookClean.refreshOptions(rangeProducts, order);
    });

    setTimeout(function() {
      window.scrollTo(0, 1);
    }, 0);
  },
  fail: function(jqXHR, textStatus, errorThrown) {
    this.errAlert(jqXHR);
  },
  load: function(data) {
    for (var key in data) {
      if (key == 'ParkingProductName') {
        this.$('[name="ParkingProductName"]').prop('checked', false);
        this.$('[name="ParkingProductName"][value="'+data[key]+'"]').prop('checked', true);
      } else {
        this.$('[name="'+ key +'"]').val(data[key] || '–');
      }
    }
  }
});

AU.View.BookClean = AU.Klass.AjaxForm.extend({
  events: {
    'click .back': 'back',
    'change select': 'updateCost',
    'change input[type="radio"]': 'updateCost'
  },
  back: function() {
    au.view.tabSwitch.prev();
    setTimeout(function() {
      window.scrollTo(0, 1);
    }, 0);
  },
  initialize: function() {
    this.AjaxForm({
      reset: null
    });
  },
  beforeSubmit: function(that) {
    var data = that.options.data;
    if (data.Clean == "none") that.options.data = {CleanProductId: 0};
    else that.options.data = {CleanProductId: data[data.Clean]};
  },
  updateCost: function(event) {
    var id = this.$('input[type="radio"]:checked').parent().find('option:selected').val(),
        amount = this.$('.j-order-amount');

    $('.j-frame-loading').toggleClass('hidden');
    $.ajax({
      url: '/order',
      method: 'POST',
      data: JSON.stringify({CleanProductId: id ? id : '0'}),
      dataType: 'json',
      contentType: 'application/json'
    }).done(function(data) {
      $('.j-frame-loading').toggleClass('hidden');
      amount.text('$'+data.Amount.toFixed(2));
    }).fail(function(data) {
      $('.j-frame-loading').toggleClass('hidden');
    });
  },
  done: function(data) {
    au.view.BookOrder.$('.j-order-amount').text('$'+data.Amount.toFixed(2));
    au.view.BookOrder.load(au.view.BookInfo.data);

    au.view.tabSwitch.next();

    setTimeout(function() {
      window.scrollTo(0, 1);
    }, 0);
  },
  fail: function(jqXHR, textStatus, errorThrown) {
    alert(errorThrown);
  },
  refreshOptions: function(rangeProducts, order) {
    _.each(rangeProducts, function(rp, key) {
      var option = this.$('option[name="'+key+'"]');
      option.val(rp.Product.Id);
      option.data('price', rp.Price);
      option.text('$' + rp.Price + ' (' + rp.Product.CarType + ')');

      if (rp.ProductId != order.CleanProductId) return;
      option.parent().val(rp.ProductId);
      option.closest('li').find('input[type="radio"]').click();
    }, this);

    if (order.CleanProductId === 0) this.updateCost();
  }
});

// Confirm Input form
AU.View.BookOrder = AU.Klass.AjaxForm.extend({
  events: {
    'click .back': 'back'
  },
  back: function() {
    au.view.tabSwitch.prev();
    setTimeout(function() {
      window.scrollTo(0, 1);
    }, 0);
  },
  done: function(data) {
    au.view.Payment.load(au.view.BookInfo.data);

    var tab = au.view.tabSwitch.next().$el.find('.tab-page.cur');
    tab.find('.j-paypal-total .j-order-amount').text('$'+data.PaypalAmount.toFixed(2));
    tab.find('.j-pay-on-site-total .j-order-amount').text('$'+data.Amount.toFixed(2));

    setTimeout(function() {
      window.scrollTo(0, 1);
    }, 0);
  },
  initialize: function() {
    this.AjaxForm({
      reset: null
    });
  },
  load: function(data) {
    for (var key in data) {
      this.$('[name="'+ key +'"]').text(data[key] || '–');
    }
    this.$('.check-kind label').removeClass('cur');
    this.$('[name="'+data.ParkingProductName+'"]').addClass('cur');

    this.$('[name="ArrivalTime"]').text(moment(data.ArrivalTime, 'HH:mm').format("hh:mm a"));
    this.$('[name="ReturnTime"]').text(moment(data.ReturnTime, 'HH:mm').format("hh:mm a"));
  }
});

AU.View.Payment = Qor.View.extend({
  events: {
    'click .paypal': 'paypal',
    'click #change-booking': 'reBook'
  },
  paypal: function() {
    var price = this.$('.j-paypal-total .j-order-amount').text();
    au.view.PayOnline.show(price);
  },
  reBook: function() {
    $.ajax({
      url: '/order/change_booking',
      method: 'POST'
    }).done(function() {
      au.view.tabSwitch.to(0);
      setTimeout(function() {
        window.scrollTo(0, 1);
      }, 0);
    }).fail(function() {
      alert('Fail to change booking.');
    });
  },
  load: function(data) {
    for (var key in data) {
      this.$('[name="'+ key +'"]').text(data[key] || '–');
    }
    this.$('.check-kind label').removeClass('cur');
    this.$('[name="'+data.ParkingProductName+'"]').addClass('cur');

    this.$('[name="ArrivalTime"]').text(moment(data.ArrivalTime, 'HH:mm').format("hh:mm a"));
    this.$('[name="ReturnTime"]').text(moment(data.ReturnTime, 'HH:mm').format("hh:mm a"));
  }
});

AU.View.PayOnSite = AU.Klass.AjaxForm.extend({
  initialize: function() {
    this.$fugue = this.AjaxForm({
      reset: null
    });
  },
  done: function() {
    location.pathname = '/thank_you';
  },
  fail: function(jqXHR, textStatus, errorThrown) {
    alert(errorThrown);
  }
});

AU.View.PayOnline = AU.Klass.AjaxForm.extend({
  events: {
    'click .back': 'back'
  },
  initialize: function() {
    this.$fugue = this.AjaxForm({
      reset: null
    });
  },
  show: function(price) {
    $('#payment').addClass('hidden');

    this.$el.removeClass('hidden');
    this.$('#price-amount .value').text(price);
  },
  back: function() {
    this.$el.addClass('hidden');
    $('#payment').removeClass('hidden');
  },
  done: function() {
    location.pathname = '/thank_you';
  },
  fail: function(jqXHR, textStatus, errorThrown) {
    this.$('.loading').addClass('hidden');
    if (jqXHR && jqXHR.responseJSON && jqXHR.responseJSON.error) {
      alert(jqXHR.responseJSON.error)
    } else {
      alert(errorThrown);
    }
  },
  beforeSubmit: function() {
    this.$('.loading').toggleClass('hidden', this.$fugue.data('fugue').cancel);
  },
  beforeSerialize: function() {
    this.$fugue.data('fugue').cancel = false;

    var numberField = this.$('[name="Number"]');
    numberField.parent().removeClass('error');
    if (!/^[0-9]{12,19}$/.test(numberField.val())) {
      numberField.parent().addClass('error');
      this.$fugue.data('fugue').cancel = true;
    }

    var cvv2Field = this.$('[name="CVV2"]');
    cvv2Field.parent().removeClass('error');
    if (!/^[0-9]{3}$/.test(cvv2Field.val())) {
      cvv2Field.parent().addClass('error');
      this.$fugue.data('fugue').cancel = true;
    }

    var nameField = this.$('[name="Name"]');
    nameField.parent().removeClass('error');
    if (nameField.val() == '') {
      nameField.parent().addClass('error');
      this.$fugue.data('fugue').cancel = true;
    }
  },
  resetForm: function() {}
});

AU.View.GoogleMap = AU.Klass.AjaxForm.extend({
  initialize: function() {
    if ($('#google-map').length == 0) return;

    this.loadGoogleMap();
    var self = this;
    $('.map-link').click(function() {
      self.traceRoute();
    });
  },
  loadGoogleMap: function() {
    var mapOptions = {
          zoom: 15,
          center: new google.maps.LatLng(-28.176098, 153.522440),
          // center: new google.maps.LatLng(30.316463, 120.131664),
          mapTypeId: google.maps.MapTypeId.ROADMAP
        },
        image = {
          url: '/img/ap_google_marker.png',
          size: new google.maps.Size(33, 50),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(16, 50)
        };

    this.$map = new google.maps.Map(document.getElementById("google-map"), mapOptions);

    var infowindow = new google.maps.InfoWindow({
      content: '<div class="place-desc-large" style="width:100%;height:auto;">'+
                 '<div class="place-name">Aussie Airport Parking</div>' +
                 '<div class="address">56 Ourimbah Rd</div>' +
                 '<div class="phone-number">+61 7 5599 3331</div>' +
               '</div>',
      maxWidth:200
    });

    var self = this,
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(-28.175693,153.523501,17),
          map: this.$map,
          icon: image,
          title: "Aussie Airport Parking",
          zIndex: 10
        });
    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(self.$map,marker);
    });
    infowindow.open(this.$map,marker);
  },
  traceRoute: function() {
    if (!navigator.geolocation) return;

    $('#loading-indicator').show();
    navigator.geolocation.getCurrentPosition(function(position) {
      var directionsService = new google.maps.DirectionsService(),
          directionsDisplay = new google.maps.DirectionsRenderer();

      directionsDisplay.setMap(au.view.GoogleMap.$map);
      // directionsDisplay.setPanel($('#route').get(0));

      var start = position.coords.latitude + ','+ position.coords.longitude,
          end = '-28.175693,153.523501',
          mode = google.maps.DirectionsTravelMode.DRIVING;

      var request = {
          origin : start,
          destination : end,
          travelMode : mode
      };

      directionsService.route(request, function(response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
          directionsDisplay.setDirections(response);
        } else {
          alert('No route found.');
        }
        $('#loading-indicator').hide();
      });
    });
  }
});
