AU.Klass.AjaxForm = Qor.View.extend({
  AjaxForm: function(options) {
    var self = this;

    options = $.extend({
      beforeSerialize: function() {
        self.beforeSerialize(this);
      },
      beforeSubmit: function() {
        self.beforeSubmit(this);
        if (!this.cancel) {
          self._disableButton();
        }
        if (this.options.type.toLowerCase() !== 'get') {
          this.options.data = JSON.stringify(this.options.data);
        }
      },
      success: function(data) {
        if (self.success) self.success(data);
      },
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
      }
    }, options);

    return this.$("form").length ? this.$("form").fugue(options) : this.$el.fugue(options);
  },

  _disableButton: function() {
    var $submit = this.$('[type="submit"]');

    if (!$submit.length) {
      return
    }

    $submit.each(function() {
      var processingText = $(this).data('processing-text').replace(/\\/g, '');
      $(this).attr("disabled", true).html(processingText);
    });
  },

  _enableButton: function() {
    var $submit = this.$('[type="submit"]');

    if (!$submit.length) {
      return
    }

    $submit.each(function() {
      var originalText = $(this).data('original-text').replace(/\\/g, '');
      $(this).attr("disabled", false).html(originalText);
    });
  },

  beforeSerialize: function(that) {},

  beforeSubmit: function(that) {},

  done: function(data, textStatus, jqXHR) {},
  fail: function(jqXHR, textStatus, errorThrown) {},
  resetForm: function(data) {}
});

AU.View.OrderForm = AU.Klass.AjaxForm.extend({
  events: {
    'click .cancel, .close': 'cancel',
    'click .j-action-btn': 'doAction',
    'click .collapse': 'collapse',
    'click .edit-status': 'showStatusSelector',
    'click .cancel-edit-states': 'hideStatusSelector',

    'change select[name="CleanProductId"], select[name="ParkingProductName"]': 'rate',
    'change .time-select': 'rate',
    'change input, select': 'dirty'
  },
  dirty: function() {
    this.$el.addClass('dirty');
  },
  initialize: function() {
    this.$fugue = this.AjaxForm({
      reset: null
    });

    this.monitDatepickers();

    this.$editStatusButton = this.$('.edit-status');
  },
  load: function(data, scope) {
    var self = this;
    var checkin = this.$('.checkin');
    var checkout = this.$('.checkout');
    checkin.attr('disabled', !_.contains(['pay_on_site', 'paypal_paid', 'confirmed'], data.State));
    checkout.attr('disabled', data.State != 'check-in');

    if (_.contains(['pay_on_site', 'ready', 'new'], data.State)) {
      this.$('.confirm').show();
    } else {
      this.$('.confirm').hide();
    }

    setTimeout(function() {
      self.$el.removeClass('dirty');
    }, 0);

    this.hideStatusSelector();
    var isPaypalPaid = !!data.PaypalRef;
    this.$('option[value="unconfirmed"]').attr('hidden', isPaypalPaid);
    this.$('option[value="confirmed"]').attr('hidden', isPaypalPaid);

    this.$('.confirm-wrapper .j-action-btn.red').attr('disabled', data.State == 'cancelled');

    var dateFrom = moment(data.From).zone(AUGloabl.ServerTimeZone).format("DD/MM/YYYY HH:mm"),
        dateTo = moment(data.To).zone(AUGloabl.ServerTimeZone).format("DD/MM/YYYY HH:mm");

    data.CheckInDate = dateFrom.split(' ')[0];
    data.ArrivalTime = dateFrom.split(' ')[1];

    data.CheckOutDate = dateTo.split(' ')[0];
    data.ReturnTime = dateTo.split(' ')[1];

    this.$('.paypal-ref').toggle(!!data.PaypalRef);

    for (var key in data) {
      var value = data[key],
          $field = this.$el.find('[name="'+ key +'"]');
      if ($field.is(':input')) {
        $field.val(value);
      } else if (key == 'Amount') {
        $field.text(value.toFixed(2));
      } else {
        $field.text(value);
      }
    }

    this.$('.datepicker').datepicker('update');

    this.loadPriceBreakdown(data);
    scope && this.switchActionButtons(data, scope);
  },
  done: function(data) {
    var self = this,
        orderId = data.Id || this.$el.data('order-id'),
        $curRow, $noteCell, originalNotes, x = 0, y = 0;

    if (this._notNewState()) {
      $curRow = $('.order-item[data-id="' + orderId + '"].cur');
      $curRow = $curRow.length ? $curRow : $('#order-' + orderId);
      $noteCell = $curRow.find('[name="Notes"] .data');
      originalNotes = $noteCell.find('textarea').text();
      originalNotes = JSON.parse(originalNotes || '[]') || [];
      y = $noteCell.offset().top;
      x = $noteCell.offset().left; //evaluate before update!

      // au.view.Orders.update(data);
      Backbone.Events.trigger('orders:update', data);

      if (data.Notes.length - (originalNotes.length || 0)) {
        au.view.NoteForm.load(data.Notes)//.pos(x, y).show(orderId).editNote();
      }

    } else {

      var deferred = $.Deferred();

      // au.view.Orders.add(data);
      Backbone.Events.trigger('orders:add', data, deferred);

      deferred.progress(function() {
        $curRow = $('.order-item[data-id="' + orderId + '"].cur');
        $curRow = $curRow.length ? $curRow : $('#order-' + orderId);

        if (!$curRow.length) return;

        $noteCell = $curRow.find('[name="Notes"] .data');
        originalNotes = $noteCell.find('textarea').text();
        originalNotes = JSON.parse(originalNotes || '[]') || [];
        y = $noteCell.offset().top;
        x = $noteCell.offset().left; //evaluate after added!

        // if (x*y) {
        //   au.view.NoteForm.pos(x, y).show(orderId);
        // }
      });
    }

    this.$el.removeClass('dirty');

    AU.closeForm(function() {
      self.resetForm();
    });
  },
  fail: function(data) {
    if (!data.responseJSON) {
      alert('error: can not save!');
    } else if (data.responseJSON.error) {
      alert(data.responseJSON.error);
    } else if (data.responseJSON.errors) {
      var msg = '';
      _.each(data.responseJSON.errors, function(error) {
        if (error.Message) msg += error.Message + '; ';
      });
      alert(msg ? msg : 'error: can not save!');
    };
  },
  cancel: function(e) {
    if (!$(e.target).hasClass('close')) {
      this.$el.removeClass('dirty');
    }
    AU.closeForm(this.resetForm.bind(this));
  },
  resetForm: function() {
    this.$('form')[0].reset();
    this.$('.datepicker').datepicker('update');
    this.$('.breakdown').hide();

    this.$('strong[name="Days"]').text('0');
    this.$('strong[name="PaymentType"]').text('On Site');
    this.$('strong[name="Amount"]').text('--.--');
    $('.orders .order-item').removeClass('cur');

    this.hideStatusSelector();
    this.$el.removeClass('dirty');

    this.$('.error').removeClass('error');
  },
  beforeSubmit: function(that) {
    if (!this.validate(true, true)) return;

    var data = that.options.data;
    data['From'] = AU.Helpers.formatDateForSubmit(data.CheckInDate) + ' ' + data.ArrivalTime;
    data['To']   = AU.Helpers.formatDateForSubmit(data.CheckOutDate) + ' ' + data.ReturnTime;

    if (!this._notNewState()) {
      data.State = "confirmed";
      data.PaymentType = "On Site";
    }

    that.options.data = data;

    if (this._notNewState()) {
      var currentDate = $('#date-start input').val();
      if (currentDate !== '') currentDate = moment(currentDate, "DD/MM/YYYY").format("YYYY-MM-DD");
      that.options.url = this.$('form').attr('action') + '/' + this.$el.data('order-id') + '?current_date=' + currentDate;
    }
  },
  _notNewState: function() {
    return this.$el.attr('state') !== 'new';
  },
  doAction: function(e) {
    var id = this.$el.data('order-id');

    if (!id) return;

    var self = this,
        btn = $(e.currentTarget),
        url = btn.data('url'),
        action = url.split('/').reverse()[0].toLowerCase(),
        $orderItem = $('#order-' + id);

    if (action === 'cancel') {
      var r = confirm("Are you sure you want to cancel this booking?");
      if (r == false) {
        return false;
      }
    }

    $.ajax({
      url: url,
      method: 'PUT',
      dataType: 'json',
      data: {'primary_values[]': id}
    }).success(function() {
      var originalText = btn.data('original-text'),
          processingText = btn.data('processing-text'),
          finishText = btn.data('finish-text');

      btn.addClass('finished').text(finishText);

      switch(action) {
        case 'confirm':
          $orderItem.attr('state', 'confirmed').find('[name="State"]').text('confirmed');
          break;
        case 'check_in':
          $orderItem.find('[name="State"]').text('check-in');
          break;
        case 'check_out':
          $orderItem.find('[name="State"]').text('check-out');
          break;
        case 'cancel':
          $orderItem.attr('state', 'cancelled').find('[name="State"]').text('cancelled');
          break;
      }

      AU.closeForm(function() {
        self.resetForm();
        btn.removeClass('finished').text(originalText);
      });

      // reload all tables in dashboard page
      if ($('#dashboard').length) Backbone.Events.trigger('suborders:update');
    });
  },
  loadPriceBreakdown: function(order) {
    if (!order.PriceBreakdown) return;

    var tmpl = "<% _.each(Items, function(item) { %> " +
                  "<tr>" +
                    "<td><%= item.Date %></td>" +
                    "<td>$<%= item.Rate.toFixed(2) %></td>" +
                    "<td><%= item.Description %></td>" +
                    "<td>$<%= item.DayTotal.toFixed(2) %></td>" +
                  "</tr>" +
                "<% }); %>";
    this.$('.j-breakdown-body').html(_.template(tmpl)(order.PriceBreakdown));
    this.$('.j-breakdown-total').text(order.PriceBreakdown.Total.toFixed(2));
    this.$('.breakdown').show();
  },
  collapse: function(e) {
    $(e.target).toggleClass('open').parent().find('.collapse-body').toggleClass('hidden');
  },
  monitDatepickers: function() {
    var self = this;

    this.$('.datepicker').datepicker({
      autoclose: true,
      todayHighlight: true,
      format: 'dd/mm/yyyy'
    }).on("changeDate", function(e) {
      self.rate();
    });

    this.validate();
  },
  validate: function(toIndicate, fullValidation) {
    // reset cancel state
    var fugue = this.$fugue.data('fugue');
    fugue && (fugue.cancel = false);

    if (fullValidation) {
      var $emailWrapper = this.$('.email'),
          email = $emailWrapper.find('input').val();
      this.showOrCleanError($emailWrapper, !this.isEmail(email), toIndicate);
    }

    var $datepickerWrapper = this.$('.datepicker-wrapper'),
        $from = $datepickerWrapper.find('.from'),
        $to = $datepickerWrapper.find('.to'),
        startDate = $from.val(),
        endDate = $to.val(),
        $arrival = $datepickerWrapper.find('[name="ArrivalTime"]'),
        $back = $datepickerWrapper.find('[name="ReturnTime"]'),
        startTime = $arrival.val(),
        endTime = $back.val();

    $to.datepicker('setStartDate', startDate);

    this.showOrCleanError($from.parent(), !startDate, toIndicate);
    this.showOrCleanError($to.parent(), !endDate, toIndicate);
    this.showOrCleanError($arrival.parent(), !startTime, toIndicate);
    this.showOrCleanError($back.parent(), !endTime, toIndicate);

    // stop validation if one of the date value is empty
    if (fugue && fugue.cancel) return false;

    this.showOrCleanError($to.parent(), AU.Helpers.formatDateForSubmit(startDate) > AU.Helpers.formatDateForSubmit(endDate), toIndicate);

    if (startDate == endDate && startTime && endTime) {
      var self = this;
      setTimeout(function () {
        self.showOrCleanError($back.parent(), startTime >= endTime, toIndicate)
      }, 0);
    }

    return (fugue && !fugue.cancel);
  },
  showOrCleanError: function($elem, hasError, toIndicate) {
    if (hasError) {
      if (toIndicate) $elem.addClass('error');
      var fugue = this.$fugue.data('fugue');
      fugue && (fugue.cancel = true);
    } else {
      $elem.removeClass('error');
    }
  },
  // isEmail: function(text) { return /^([\w-\+]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test(text); },
  // isEmail is made for Safari for it doesn't support HTML5 email input!
  isEmail: function(text) { return /\S+@\S+/.test(text); },
  isPhone: function(text) { return /[0-9 -()+]+$/.test(text); },
  rate: function() {
    if (this._notNewState() || !this.validate(true)) return;

    var dateFormator = AU.Helpers.formatDateForSubmit,
        checkInDate = dateFormator(this.$('input[name="CheckInDate"]').val()),
        arrivalTime = this.$('select[name="ArrivalTime"]').val(),
        checkOutDate = dateFormator(this.$('input[name="CheckOutDate"]').val()),
        returnTime = this.$('select[name="ReturnTime"]').val();

    var data = {
      From: checkInDate + ' ' + arrivalTime,
      To: checkOutDate + ' ' + returnTime,
      ParkingProductName: this.$('select[name="ParkingProductName"]').val(),
      CleanProductId: this.$('select[name="CleanProductId"]').val()
    };

    var self = this;
    $.ajax({
      url: '/order',
      method: 'POST',
      data: JSON.stringify(data),
      dataType: 'json',
      contentType: 'application/json'
    }).done(function(data) {
      var amount = data.PaymentType == "Paypal" ? data.Amount : data.OnSiteAmount;
      self.$('strong[name="Amount"]').text(amount.toFixed(2));
      self.$('[name="Days"]').text(data.Days);
    });
  },
  showStatusSelector: function(e) {
    this.$('.edit-status').parent().addClass('hidden');
    var $selector = this.$('.state-wrap').removeClass('hidden').find('select'),
        status = $selector.removeAttr('disabled').val();

    this.$editStatusButton = $(e.target);

    $selector.data('status', status);
  },
  hideStatusSelector: function() {
    this.$editStatusButton.parent().removeClass('hidden');
    var $selector = this.$('.state-wrap').addClass('hidden').find('select').attr('disabled', 'disabled'),
        status = $selector.data('status');

    $selector.val(status);
  },
  switchActionButtons: function(data, scope) {
    this.$('.j-button-panel').addClass('hidden');
    switch (scope) {
      case 'Checkins & Checkouts Today':
        this.$('#confirm-check').removeClass('hidden');
        break;
      case 'Car Detailing (Internal) For Checkout Due Tomorrow':
        if (data.Cleaning == 'pending') this.$('#clean-order').removeClass('hidden');
        break;
      case 'Car Detailing (Outsourced)':
        if (data.Cleaning == 'pending') this.$('#outsource-clean').removeClass('hidden');
        else if (data.Cleaning == 'ordered') this.$('#clean-order').removeClass('hidden');
        break;
      case 'Calling List (Unconfirmed Bookings)':
        this.$('#confirm-order').removeClass('hidden');
        break;
    }
  }
});

AU.View.Orders = Qor.View.extend({
  events: {
    'click .order-item': 'edit',
    'click .add-note': 'addNote',
    'click .has-note': 'hasNote'
  },
  el: '#container .orders',
  initialize: function() {
    Backbone.Events.on('orders:add', this.add, this);
    Backbone.Events.on('orders:update', this.update, this);
  },
  _build: function(row) {
    var tmpl = this.$el.parent().find('.order-template').html(),
        id = 'order-' + row.Id,
        $tmpl = $(tmpl);

      $tmpl.attr('id', id);
      $tmpl.attr('data-id', id);
      $tmpl.attr('state', row.State);

      for (var key in row) {
        if (key === 'Notes') {
          var notes = row[key],
              $cell = $tmpl.find('[name="'+ key +'"] .data');

          if (notes.length) {
            notes = JSON.stringify(notes);
            $cell.addClass('has-note').find('textarea').text(notes);
          } else {
            $cell.addClass('add-note');
          }
        } else {
          var text = row[key];

          if (['From', 'To'].indexOf(key) !== -1) {
            text = moment(text).zone(AUGloabl.ServerTimeZone).format("HH:mm DD MMM");
          }

          $tmpl.find('[name="'+ key +'"] a').attr('title', row[key]).text(text);
        }
      }

      return $tmpl;
  },
  load: function(data) {
    var container = document.createDocumentFragment();

    for (var i = 0; i < data.length; ++i) {
      var $row = this._build(data[i]);

      container.appendChild($row[0]);
    }

    this.$el.html(container);
  },
  add: function(data) {
    var $row = this._build(data);
    this.$el.prepend($row.attr('state', 'confirmed').addClass('cur'));
  },
  update: function(data) {
    var $row = this._build(data);

    $('#order-' + data.Id).replaceWith($row.addClass('cur'));
  },
  edit: function(e) {
    this.$('.order-item').removeClass('cur');

    var $order = $(e.target).closest('.order-item').addClass('cur'),
        id = $order.attr('id').replace('order-', ''),
        data = {};

    $order.find('.data').each(function() {
      var name = $(this).parent().attr('name'),
          value = $(this).attr('title');

      data[name] = value;
    });

    var $form = $('#order-form');
    function switchForm() {
      var state = $('body').hasClass('admin') ? 'confirm' : 'edit',
          newText = $form.find('h1').data('edit-text');

      $form.attr('state', state);
      $form.find('h1').text(newText);
      $form.data('order-id', id);

      au.view.OrderForm.load(data);

      AU.openForm(function() {
        $.ajax({
          url: '/admin/orders/' + id + '.json',
          dataType: 'json',
          success: function(data) {
            au.view.OrderForm.load(data);
          }
        });
      });
    }

    if ($form.hasClass('hidden')) {
      switchForm();
    } else if ($form.attr('state') === 'new' || $form.data('order-id') !== id) {
      AU.closeForm(function() {
        switchForm();
      });
    } else {
      AU.closeForm(function() {
        $('.order-item').removeClass('cur');
      });
    }
  },
  addNote: function(e) {
    e.stopPropagation ? e.stopPropagation() : event.cancelBubble = true;

    var x = e.pageX - (e.offsetX || 18) + $(e.target).width()/2 + 2,
        y = e.pageY - (e.offsetY || 12) + $(e.target).height()/2 - 2,
        $order = $(e.target).closest('.order-item'),
        id = $order.attr('id').replace('order-', '');

    au.view.NoteForm.$el.attr('state', 'new');
    au.view.NoteForm.resetForm().pos(x, y).toggle(id);
  },
  hasNote: function(e) {
    e.stopPropagation ? e.stopPropagation() : event.cancelBubble = true;

    var x = e.pageX - (e.offsetX || 0) + $(e.target).width()/2,
        y = e.pageY - (e.offsetY || 0) + $(e.target).height()/2,
        $order = $(e.target).closest('.order-item'),
        id = $order.attr('id').replace('order-', ''),
        notes = $(e.target).find('textarea').text();

    au.view.NoteForm.$el.attr('state', 'add');
    au.view.NoteForm.resetForm().load(notes).pos(x, y).toggle(id);
  }
});

AU.View.OrderFilters = AU.Klass.AjaxForm.extend({
  events: {
    'click .icon-search': 'openSearch',
    'click .close-icon': 'closeSearch',
    'change .select-type': 'searchOrder',
    'keyup .keyword': 'searchOrder'
  },
  initialize: function() {
    var isDashboard = !!this.$el.parents('#dashboard').length;
    if (isDashboard) return;

    this.lock = true;

    this.$form = this.AjaxForm({
      reset: null
    });

    this.today = moment().format('DD/MM/YYYY');
    this.dateText = 'TODAY';
    this.$('.datepicker').datepicker({
      autoclose: true,
      todayHighlight: true,
      format: 'dd/mm/yyyy',
      clearBtn: true
    });
    this.$('.datepicker').val(this.today).datepicker('update');

    var self = this;
    this.$('.datepicker').on('clearDate', function() {
      self.dateText = 'ANY DAY';
    }).on('changeDate', function() {
      var dateText = $(this).val() || self.dateText;
      self.dateText = self.today === dateText ? 'TODAY' : dateText;

      self.$('.date-text').text(self.dateText);

      var result = '';
      if (self.dateText === 'TODAY') {
        result = self.today;
      } else {
        result = self.dateText === 'ANY DAY' ? '' : self.dateText;
      }

      self.$('.datepicker').val(result).datepicker('update');
      self.searchOrder();
    });

    // TODO: disable this on dashboard page
    if (location.pathname == '/admin/orders') {
      this.$('.j-order-stat').show();
      this.refreshStat(this.today);
    }
  },
  searchOrder: function(e) {
    if (!this.lock) {
      return;
    }

    if((!e) || (!e.keyCode) || (e.keyCode && e.keyCode == '13')) {

      if (e && e.keyCode && e.keyCode == '13') {
        this.$('.datepicker').val('').datepicker('update');
        this.$('.date-text').text('ANY DAY');
      }

      this.$form.submit();

      if (location.pathname == '/admin/orders') {
        this.refreshStat(this.$('.datepicker').val());
      }

      this.lock = false;
    }
  },
  beforeSubmit: function(that) {
    $('#container .orders').addClass('invisible');
    $('#container .table-loader').removeClass('hidden');
    var data = that.options.data;
    data['current_date'] = AU.Helpers.formatDateForSubmit(data['current_date']);
  },
  done: function(data) {
    au.view.Orders.load(data);
    this.lock = true;
    $('#container .orders').removeClass('invisible');
    $('#container .table-loader').addClass('hidden');

    var self = this;
    setTimeout(function() {
      var isSearch = self.$('.date-text').text() === 'ANY DAY',
          isAllBookings = self.$('.today .select-type').val() === 'all';

      $('[name="From"], [name="To"]').toggleClass('show', isSearch);
      $('[name="BookingListInOutTime"]').toggleClass('hide', isSearch);
      $('[name="BookingListIn/Out"]').toggleClass('hide', isSearch || !isAllBookings);
    }, 0);
  },
  refreshStat: function(date) {
    if (!date) return;

    date = AU.Helpers.formatDateForSubmit(date);
    $.get('/order/stat/'+date).done(function(stat) {
      self.$('.j-order-check-in').text(stat.CheckIns);
      self.$('.j-order-check-out').text(stat.CheckOuts);
      self.$('.j-slot-available').text(stat.Availables);
    });
  },
  openSearch: function() {
    if (!this.$('.keyword').hasClass('focus')) {
      this.$('.keyword').addClass('focus').focus();
      this.$('.keyword').parent().addClass('focus');
    }
  },
  closeSearch: function() {
    if (this.$('.keyword').hasClass('focus')) {
      this.$('.keyword').removeClass('focus').val('');
      this.$('.keyword').parent().removeClass('focus');
    }
  }
});

AU.View.CalendarPage = Qor.View.extend({
  events: {
    'click .j-cal-option': 'toggleReportOptions',
    'click .adjust-price': 'showPriceForm',
    'click .adjust-discounts': 'showDiscountForm',
    'click .nav .next': 'next',
    'click .nav .prev': 'prev',
    'click .nav .calendar-today': 'today'
  },
  initialize: function() {
    var self = this;

    this.calendar = $('#calendar').fullCalendar({
      header: {
        right: null
      },
      firstDay: 1,
      displayEventEnd: true,
      editable: false,
      eventLimit: false,
      timeFormat: '',
      eventSources: [function(start, end, timezone, callback) {
        self.loadReports(start, end, timezone, callback);
      }]
    });

    this.$el.tabSwitch({
      click: function() {
        $('#calendar').fullCalendar('removeEventSource', au.view.CalendarPage.loadLastYearReports);

        var checked = self.$('.tab-page.cur input[value="previous-year-data"]').is(':checked');
        if (checked) {
          $('#calendar').fullCalendar('addEventSource', au.view.CalendarPage.loadLastYearReports);
        }

        $('#calendar').fullCalendar('refetchEvents');
      }
    });

    this.drawMonthlyBookingsKPIChart();
  },
  next: function() {
    $('#calendar').fullCalendar('next');
  },
  prev: function() {
    $('#calendar').fullCalendar('prev');
  },
  today: function() {
    $('#calendar').fullCalendar('today');
  },
  toggleReportOptions: function(event) {
    var current = $(event.currentTarget),
        val = current.val(),
        data = $('.j-'+val+'-data');
    if (val != 'previous-year-data') {
      data.toggle();
    } else {
      if (current.is(':checked')) {
        $('#calendar').fullCalendar('addEventSource', au.view.CalendarPage.loadLastYearReports);
      } else {
        $('#calendar').fullCalendar('removeEventSource', au.view.CalendarPage.loadLastYearReports);
        this.refreshData();
      }
    }
  },
  loadLastYearReports: function(start, end, timezone, callback) {
    au.view.CalendarPage.loadReports(start, end, timezone, callback, true);
  },
  loadReports: function(start, end, timezone, callback, isLastYear) {
    var self = this,
        dtype = self.$('.tab.cur').data('type'),
        month = $('#calendar').fullCalendar('getDate');

    if (isLastYear) month = month.subtract(1, 'year');

    $.ajax({
        url: '/calendar/'+dtype+'/'+month.format('YYYY-MM'),
        success: function(result) {
          var events = [];
          _.each(result.Reports, function(report) {
            var day = report.Day;
            // remove trailing timezone, also for out-of-the-country tests
            if (day.indexOf('Z') != -1) day = day.substring(0, day.indexOf('Z'));
            if (day.indexOf(AUGloabl.ServerTimeZone) != -1) day = day.substring(0, day.indexOf(AUGloabl.ServerTimeZone));

            var udtype;
            switch(dtype) {
              case 'indoor':
                udtype = 'Indoor'
                break;
              case 'under cover':
                udtype = 'UnderCover'
                break;
              case 'outdoor':
                udtype = 'Outdoor'
                break;
            }

            var start = moment(day),
                percentage = report[udtype+'Occupancy'] / result[udtype+'SlotAvailablity'] * 100;

            // add 1 year to show data of last year in the current view
            if (isLastYear) start = start.add(1, 'year');

            if (percentage < 1 && percentage > 0) {
              percentage = percentage.toFixed(2);
            } else {
              percentage = percentage.toFixed(0);
            }
            events.push({
              title: '$'+report[udtype+'SetPrice'].toFixed(2)+'',
              color: '#E0E0E0',
              allDay: false,
              className: ['j-set-price-data', 'set-price'],
              start: start.clone().add(10, 's')
            }, {
              title: report[udtype+'Occupancy']+' ('+percentage+'%)',
              color: '#FEDF88',
              allDay: false,
              className: ['j-occupancy-data', 'occupancy'],
              start: start.clone().add(20, 's')
            }, {
              title: '$'+report[udtype+'Billing'].toFixed(2)+'',
              color: '#179588',
              allDay: false,
              className: ['j-billing-data', 'billing'],
              start: start.clone().add(30, 's')
            }, {
              title: report[udtype+'DropOffRate'].toFixed(2)+'%',
              color: '#E0E0E0',
              allDay: false,
              className: ['j-drop-off-rate-data', 'drop-off-rate'],
              start: start.clone().add(40, 's')
            });

            // handle discounts data
            var secondOffset = 50;
            var index = 0.6;
            _.each(report.PromotionBenefit.Discounts, function(discount) {
              _.each(discount.Products, function(product) {
                if (result.Products[dtype].Id != product.ProductId) return;

                events.push({
                  title: discount.Days+'+ $'+product.Discount.toFixed(2),
                  color: 'rgba(241, 69, 61, '+index+')',
                  allDay: false,
                  className: ['j-discounts-data', 'discounts'],
                  start: start.clone().add(secondOffset, 's')
                });
                secondOffset += 10;
                index += 0.15;
                if (index > 1) index = 1;
              })
            });
          });

          if (isLastYear) {
            _.each(events, function(e) {
              e.className.push('cal-last-year');
              e.start = e.start.add(1, 's');
            });
          } else {
            $('.j-daily-average').text(result.DailyAverage.toFixed(2));
            $('.j-total-billing').text(result.TotalBilling.toFixed(2));
          }

          callback(events);

          self.refreshData();
        }
    });
  },
  showPriceForm: function() {
    $('.price-form-wrapper').removeClass('hidden');
    au.view.PriceForm.show();
    au.view.PriceForm.el.reset();
  },
  showDiscountForm: function() {
    $('.discount-form-wrapper').removeClass('hidden');
    au.view.DiscountForm.show();
    au.view.DiscountForm.el.reset();
  },
  refreshData: function() {
    this.$('.tab-page.cur .j-cal-option').each(function() {
      var option = $(this),
          val = option.val();
      if (val != 'previous-year-data' && !option.is(':checked')) {
        $('.j-'+val+'-data').hide();
      }
    });
  },
  drawMonthlyBookingsKPIChart: function() {
    return;
    var elem = document.getElementById('monthly-bookings-chart');
    if (!elem) return;

    $.get('/calendar_monthly_bookings').done(function(resp) {
      var data = {
          labels: ['JAN', 'Feb', 'MAR', 'APR', 'May', 'Jun', 'Jul', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
          datasets: [
              {
                  label: 'This year',
                  fillColor: 'transparent',
                  strokeColor: '#009688',
                  pointColor: '#BFE5E1',
                  pointStrokeColor: '#E6E6E6',
                  pointHighlightFill: '#BFE5E1',
                  pointHighlightStroke: '#009688',
                  data: resp.ThisYear
              },
              {
                  label: 'Last year',
                  fillColor: 'transparent',
                  strokeColor: '#FFC107',
                  pointColor: '#FFF8E1',
                  pointStrokeColor: '#E6E6E6',
                  pointHighlightFill: '#FFF8E1',
                  pointHighlightStroke: '#FFC107',
                  data: resp.LastYear
              }
          ]
      };
      var ctx = elem.getContext("2d");
      new Chart(ctx).Line(data, {
        scaleShowHorizontalLines: true,
        scaleShowVerticalLines: false,
        bezierCurve : false,
        pointDotRadius: 3
      });
    })
  }
});

AU.Helpers = {
  // For Calendar Price Form and Discount Form
  addDatePicker: function(form) {
    form.$('.datepicker').datepicker({
      autoclose: true,
      todayHighlight: true,
      format: 'dd/mm/yyyy',
      startDate: new Date()
    }).on('changeDate', function() {
      AU.Helpers.validateStartAndEnd(form);
    });
  },
  // For Calendar Price Form and Discount Form
  validateStartAndEnd: function(view) {
    var startField = view.$el.find('input[name="Start"]').parent(),
        endField = view.$el.find('input[name="End"]').parent(),
        start = view.$el.find('input[name="Start"]').val(),
        end = view.$el.find('input[name="End"]').val();

    view.$el.find('input[name="End"]').datepicker('setStartDate', start);

    // clean
    startField.removeClass('error');
    endField.removeClass('error');

    // validate
    if (start == "") {
      view.$fugue.data('fugue').cancel = true;
      startField.addClass('error');
    }
    if (end == "") {
      view.$fugue.data('fugue').cancel = true;
      endField.addClass('error');
    }

    if (this.formatDateForSubmit(start) > this.formatDateForSubmit(end)) {
      view.$fugue.data('fugue').cancel = true;
      endField.addClass('error');
    }
  },
  formatDateForSubmit: function(dateStr) {
    if (dateStr == '') return '';
    return moment(dateStr, "DD/MM/YYYY").format("YYYY-MM-DD");
  }
};

AU.View.DiscountForm = AU.Klass.AjaxForm.extend({
  events: {
    'click .cancel, .close': 'hide',
    'click #add-discount-item': 'add',
    'click .discount-item .x': 'remove'
  },
  initialize: function() {
    var self = this;

    AU.Helpers.addDatePicker(this);

    this.resetDiscountListInputNames();

    this.$fugue = this.AjaxForm({
      reset: null,
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      beforeSubmit: function(data) {
        self.$fugue.data('fugue').cancel = false;
        AU.Helpers.validateStartAndEnd(self);
        self.$('.discount-list .discount-inputs .j-non-empty').each(function() {
          var input = $(this);
          input.removeClass('error');
          if (input.val() == "") {
            input.addClass('error');
            self.$fugue.data('fugue').cancel = true;
          }
        })

        var data = this.$el.serializeArray();
        _.each(data, function(item, index) {
          if (item.name == 'Start' || item.name == 'End') {
            item.value = AU.Helpers.formatDateForSubmit(item.value);
            data[index] = item;
          };
        });
        this.options.data = data;
      }
    });
  },
  success: function() {
    $('#calendar').fullCalendar('refetchEvents');
    this.hide();
  },
  add: function() {
    var tpl = $('#discount-item-tpl').html();
    $('.discount-list').append(tpl);
    this.resetDiscountListInputNames();
  },
  remove: function(e) {
    $(e.target).parent().remove();
    this.resetDiscountListInputNames();
  },
  show: function() {
    this.$el.removeClass('hidden');
  },
  hide: function() {
    this.$el.addClass('hidden');
    $('.discount-form-wrapper').addClass('hidden');
  },
  resetDiscountListInputNames: function() {
    this.$('.discount-list .j-discount-item').each(function(index) {
      $(this).find('.j-input').each(function() {
        $(this).attr('name', $(this).data('name').replace("%d", index));
      });
    })
  }
});

AU.View.PriceForm = AU.Klass.AjaxForm.extend({
  events: {
    'click .cancel, .close': 'hide',
    'click .collapse': 'collapse'
  },
  initialize: function() {
    var self = this;

    AU.Helpers.addDatePicker(this);

    this.$fugue = this.AjaxForm({
      reset: null,
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      beforeSubmit: function(data) {
        self.$fugue.data('fugue').cancel = false;
        AU.Helpers.validateStartAndEnd(self);

        var data = this.$el.serializeArray();
        _.each(data, function(item, index) {
          if (item.name == 'Start' || item.name == 'End') {
            item.value = AU.Helpers.formatDateForSubmit(item.value);
            data[index] = item;
          };
        });
        this.options.data = data;
      }
    });
  },
  done: function() {},
  success: function() {
    $('#calendar').fullCalendar('refetchEvents');
    this.hide();
  },
  failed: function() {},
  show: function() {
    this.$el.removeClass('hidden');
  },
  hide: function() {
    this.$el.addClass('hidden');
    $('.price-form-wrapper').addClass('hidden');
  },
  collapse: function(e) {
    $(e.target).toggleClass('open').parent().find('.collapse-body').toggleClass('hidden');
  }
});


AU.View.NoteForm = AU.Klass.AjaxForm.extend({
  events: {
    'click .cancel': 'cancel',
    'click .new-btn': 'toggleNewForm',
    'click .cancel-edit': 'cancelEdit',
    'click .save-edit': 'saveEdit',
    'click .close': 'close'
  },
  initialize: function() {
    this.$form = this.AjaxForm({
      reset: null
    });

    this.tmpl = this.$('.note-tmpl').html();
    this.$('.note-tmpl').html('');
    this.orderId = '';
    this.$('textarea').textareaAutoSize();

    this.$el.on('keydown', 'input[type="number"]', function(e) {
      if (e.keyCode == '13') {
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
        e.stopPropagation ? e.stopPropagation() : event.cancelBubble = true;
      }
    });
  },
  pos: function(x, y) {
    var self = this;

    this.$el.css({
      top: y + 'px',
      left: x - self.$el.outerWidth() + 'px'
    });

    return this;
  },
  show: function(id) {
    this.$el.hide().fadeIn(200);
    this.$('.record-id').val(id);
    this.orderId = id;

    if (this.$el.attr('state') === 'new') {
      this.$('.create-fields').removeClass('hidden');
      this.$('.create-fields textarea').focus();
    } else {
      this.$('.create-fields').addClass('hidden');
    }

    return this;
  },
  hide: function() {
    this.$el.hide();
    this.$('.notes-wrapper').html('');
    return this;
  },
  toggle: function(id) {
    if (this.$el.is(':visible') && id == this.orderId) {
      this.hide();
    } else {
      this.show(id);
    }
    return this;
  },
  cancel: function() {
    this.hide();
    this.resetForm();
  },
  resetForm: function() {
    this.$form[0].reset();
    this.$('.notes-wrapper').html('');
    this.$('.create-fields').addClass('hidden');

    return this;
  },
  done: function(data) {
    this.hide();
    this.resetForm();
    var $order = $('#order-' + data.OrderId),
        $orders = $('[data-id="order-' + data.OrderId + '"]'),
        $note = $order.find('[name="Notes"] .data'),
        notes = $note.find('textarea').text(),
        notes = JSON.parse(notes || "[]") || [];

    notes = JSON.stringify(notes.concat(data));

    $orders.each(function() {
      $(this).find('[name="Notes"] .data').removeClass('add-note').addClass('has-note').find('textarea').text(notes);
    });
  },
  load: function(data) {
    this.$('.notes-wrapper').html('');

    data = $.isArray(data) ? data : JSON.parse(data || '[]') || [];

    var self = this;

    $.each(data, function(i) {
      var $tmpl = $(self.tmpl),
          formattedDate = moment(data[i].CreatedAt).format("MMM DD, YYYY hh:mm");

      $tmpl.attr('note-id', data[i].Id);
      $tmpl.find('.note-date').text(formattedDate);
      $tmpl.find('.note-contents .pre').text(data[i].Note);
      $tmpl.find('.edit-area').text(data[i].Note).attr('disabled', true);
      $tmpl.find('.edit-area').attr('id', data[i].Id);
      $tmpl.find('.change-amount input').val(data[i].ChangedAmount).attr('disabled', true);
      $tmpl.find('.change-amount-text em').text(data[i].ChangedAmount);

      self.$('.notes-wrapper').prepend($tmpl);
      $tmpl.find('textarea').textareaAutoSize();
    });

    return this;
  },
  toggleNewForm: function() {
    this.$('.note-item .note-contents').removeClass('hidden');
    this.$('.note-item .edit-area-wrapper').addClass('hidden');

    this.$('.create-fields').toggleClass('hidden');
    this.$('.create-fields textarea').focus();
  },
  editNote: function(e) {
    this.$('.create-fields').addClass('hidden');

    var $noteItem = this.$('.note-item').first(),
        $contents = $noteItem.find('.note-contents'),
        $editArea = $noteItem.find('.edit-area-wrapper');

    $contents.addClass('hidden');
    $editArea.removeClass('hidden').find('.edit-area').val($contents.find('.pre').text());
    $noteItem.find('.j-explanation-area').focus();

    // if (!e.isTrigger) {
    //   $editArea.find('textarea').focus();
    // }
  },
  cancelEdit: function(e) {
    var $noteItem = $(e.target).parents('.note-item'),
        $contents = $noteItem.find('.note-contents'),
        $editArea = $noteItem.find('.edit-area-wrapper');

    $editArea.addClass('hidden');
    $contents.removeClass('hidden');
  },
  saveEdit: function(e) {
    var self = this,
        $noteItem = $(e.target).parents('.note-item'),
        $contents = $noteItem.find('.note-contents'),
        $editArea = $noteItem.find('.edit-area-wrapper'),
        $textarea = $editArea.find('textarea'),
        id = $textarea.attr('id');

    var $orderItems = $('[data-id="order-' + this.orderId + '"]'),
        changedAmount = $editArea.find('.change-amount input').val();

    $noteItem.find('.change-amount-text em').text(changedAmount);

    $.ajax({
      url: '/admin/notes/' + id + '.json',
      type: 'POST',
      contentType: 'application/json; charset=UTF-8',
      dataType: 'JSON',
      data: JSON.stringify({
        OrderId: self.orderId,
        Explanation: $editArea.find('.j-explanation-area').val()
      }),
      success: function(noteItem) {
        $contents.find('.pre').text(noteItem.Note);
        $editArea.addClass('hidden');
        $contents.removeClass('hidden');

        $orderItems.each(function(index, item) {
          var $noteCell = $(item).find('.has-note'),
              notes = $noteCell.find('textarea').text();

          notes = JSON.parse(notes || '[]') || [];

          for(var i = 0; i < notes.length; ++i) {
            if (notes[i].Id == id) {
              notes.splice(i, 1, noteItem);
            }
          }

          notes = JSON.stringify(notes);
          $noteCell.find('textarea').text(notes);
          self.close();
        });
      }
    });
  },
  close: function() {
    this.hide()
  }
});

AU.View.MaskLayer = Qor.View.extend({
  events: {
    'click .return': 'cancel',
    'click .discard': 'discard'
  },
  init: function(func) {
    this.func = func;
    return this;
  },
  show: function() {
    var self = this;
    this.$el.removeClass('hidden');
    setTimeout(function() {
      self.$el.addClass('show');
    }, 42);
  },
  hide: function() {
    var self = this;
    this.$el.removeClass('show');
    setTimeout(function() {
      self.$el.addClass('hidden');
    }, 233);
  },
  cancel: function() {
    this.hide();
  },
  discard: function() {
    this.hide();
    this.func && this.func();
  }
});

AU.SubView.Orders = Qor.SubView.extend({
  events: {
    'click .order-item': 'edit',
    'click .add-note': 'addNote',
    'click .has-note': 'hasNote'
  },
  initialize: function() {
    Backbone.Events.on('orders:add', this.add, this);
    Backbone.Events.on('orders:update', this.update, this);
    Backbone.Events.on('suborders:update', this.update, this);
  },
  _build: function(row) {
    var tmpl = this.$el.parent().find('.order-template').html(),
        id = 'order-' + row.Id,
        $tmpl = $(tmpl);

    $tmpl.attr('id', id);
    $tmpl.attr('data-id', id);
    $tmpl.attr('state', row.State);
    $tmpl.attr('data-due', row.Due);
    $tmpl.attr('data-inout', row["In/Out"]);
    $tmpl.attr('data-cleaning', row.Cleaning);
    $tmpl.attr('data-is-late-check-in-out', row.IsLateCheckInOut);

    for (var key in row) {
      if (key === 'Notes') {
        var notes = row[key],
            $cell = $tmpl.find('[name="'+ key +'"] .data');

        if (notes.length) {
          notes = JSON.stringify(notes);
          $cell.addClass('has-note').find('textarea').text(notes);
        } else {
          $cell.addClass('add-note');
        }
      } else {
        var text = row[key];

        if (['From', 'To'].indexOf(key) !== -1) {
          text = moment(text).format("HH:mm DD MMM");
        }

        $tmpl.find('[name="'+ key +'"] a').attr('title', row[key]).text(text);
      }
    }

    return $tmpl;
  },
  load: function(data) {
    var container = document.createDocumentFragment();

    for (var i = 0; i < data.length; ++i) {
      var $row = this._build(data[i]);

      container.appendChild($row[0]);
    }

    this.$el.html(container);

    Backbone.Events.trigger('subviewOrders:CURD');
  },
  add: function(data, deferred) {
    var self = this;
    var scope = this.$el.data('scope');
    var url = '/admin/orders.json?scopes=';
    $.get(url + encodeURIComponent(scope), function(datas) {
      datas = $.isArray(datas) ? datas : JSON.parse(datas || '[]') || [];

      if (datas.length) {
        self.load(datas);
        deferred.notify(datas.length);
      }
    });
  },
  update: function() {
    var self = this;
    var scope = this.$el.data('scope');
    var url = '/admin/orders.json?scopes=';
    $.get(url + encodeURIComponent(scope), function(datas) {
      datas = $.isArray(datas) ? datas : JSON.parse(datas || '[]') || [];
      self.load(datas);
    });
  },
  edit: function(e) {
    $('.order-item').removeClass('cur');

    var $order = $(e.target).closest('.order-item').addClass('cur'),
        id = $order.attr('id').replace('order-', ''),
        scope = $order.parent().data('scope'),
        data = {};

    $order.find('.data').each(function() {
      var name = $(this).parent().attr('name'),
          value = $(this).attr('title');

      data[name] = value;
    });

    var $form = $('#order-form');
    var scope = this.$el.data('scope');
    function switchForm() {
      var state = $('body').hasClass('admin') ? 'confirm' : 'edit',
          newText = $form.find('h1').data('edit-text');

      $form.attr('state', state);
      $form.find('h1').text(newText);
      $form.data('order-id', id);
      $form.data('scope', scope);

      au.view.OrderForm.load(data, scope);

      AU.openForm(function() {
        $.ajax({
          url: '/admin/orders/' + id + '.json',
          dataType: 'json',
          success: function(data) {
            au.view.OrderForm.load(data, scope);
          }
        });
      });
    }

    if ($form.hasClass('hidden')) {
      switchForm();
    } else if ($form.attr('state') === 'new' || $form.data('order-id') !== id || $form.data('scope') !== scope) {
      AU.closeForm(function() {
        switchForm();
      });
    } else {
      AU.closeForm(function() {
        $('.order-item').removeClass('cur');
      });
    }
  },
  addNote: function(e) {
    e.stopPropagation ? e.stopPropagation() : event.cancelBubble = true;

    var x = e.pageX - (e.offsetX || 18) + $(e.target).width()/2 + 2,
        y = e.pageY - (e.offsetY || 12) + $(e.target).height()/2 - 2,
        $order = $(e.target).closest('.order-item'),
        id = $order.attr('id').replace('order-', '');

    au.view.NoteForm.$el.attr('state', 'new');
    au.view.NoteForm.resetForm().pos(x, y).toggle(id);
  },
  hasNote: function(e) {
    e.stopPropagation ? e.stopPropagation() : event.cancelBubble = true;

    var x = e.pageX - (e.offsetX || 0) + $(e.target).width()/2,
        y = e.pageY - (e.offsetY || 0) + $(e.target).height()/2,
        $order = $(e.target).closest('.order-item'),
        id = $order.attr('id').replace('order-', ''),
        notes = $(e.target).find('textarea').text();

    au.view.NoteForm.$el.attr('state', 'add');
    au.view.NoteForm.resetForm().load(notes).pos(x, y).toggle(id);
  }
});

AU.View.Drafts = Qor.View.extend({
  events: {
    'change .qor-check-all': 'checkAll',
    'click .record-item': 'check',
    'click .diff a': 'diff',
    'click [type="submit"]': 'comfirm'
  },
  initialize: function() {
    var $modal = $('#diffModal'),
        $content = $modal.find('.modal-content');

    $modal.on('click', function(e) {
      var $target = $(e.target);
      if ($target.hasClass('close') || $target.parents('.modal-content').length === 0) {
        $modal.removeClass('fadeIn').addClass('fadeOut');
        $content.removeClass('slideInDown').addClass('slideOutUp');
        setTimeout(function() {
          $modal.addClass('hidden fadeIn');
          $content.addClass('hidden slideInDown');
        }, 300);
      }
    });
  },
  comfirm: function(e) {
    var notify = $(e.target).data('confirm');
    var r = confirm(notify);
    if (r == false) {
      return false;
    }
  },
  checkAll: function(e) {
    var isChecked = $(e.target).is(':checked');
    this.$('.tbody input[type="checkbox"]').prop('checked', isChecked);
  },
  check: function(e) {
    if ($(e.target)[0].nodeName !== "TD") {
      return;
    }
    var $check = $(e.target).parents('.record-item').find('input[type="checkbox"]'),
        isChecked = $check.prop('checked');

    $check.prop('checked', !isChecked);
  },
  diff: function(e) {
    var remoteURL = $(e.target).data('remote');
    $.ajax({
      url: remoteURL
    }).done(function(html) {
      var $modal = $('#diffModal'),
          $content = $modal.find('.modal-content');

      $content.html(html);
      $modal.removeClass('fadeOut hidden');
      $content.removeClass('slideOutUp hidden');
    });
  }
});

AU.SubView.CheckinOutToday = Qor.SubView.extend({
  events: {
    'change .tomorrow .select-type': 'selectType',
  },
  initialize: function() {
    Backbone.Events.on('subviewOrders:CURD', this.update, this);

    this.refresh();
  },
  update: function() {
    this.refresh();
    this.selectType();
  },
  selectType: function() {
    var $target = this.$('.tomorrow .select-type'),
        value   = $.trim( $target.val() ),
        $table  = this.$('.tbody'),
        $rows   = $table.find('.order-item');

    if ( value === 'all' ) {
      $rows.show();
    } else {
      $rows.each(function(index, row) {
        var inout = $(row).data('inout').replace(/(?:ed)* /gi, '').toLowerCase();
        $(row).toggle(inout === value);
      });
    }
  },
  refresh: function() {
    var self = this,
        date = moment().format('YYYY-MM-DD');

    $.get('/order/stat/'+date).done(function(stat) {
      self.$('.j-order-check-in').text(stat.CheckIns);
      self.$('.j-order-check-out').text(stat.CheckOuts);
      self.$('.j-slot-available').text(stat.Availables);
    });
  }
});

AU.View.Article = Qor.View.extend({
  initialize: function() {
    autosize(this.$('textarea'));
  },
});
