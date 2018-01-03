;(function($, w) {
  $(function() {
    $('#menu .nav-item a').each(function() {
      if ($(this).attr('href') === location.pathname) {
        $(this).addClass('cur');
      }
    });

    $('textarea.js-auto-size').textareaAutoSize();

    var windowWidth = $(window).width();

    au.view.tabSwitch = $('#order-frame-wrapper').tabSwitch({
      event: '',
      after: function(index) {
        var page = this.page[index],
            height = $(page).height();

        $('.article.main').height(height > 698 ? height + 100 : 'auto');

        if (windowWidth <= 736) {
          var tabWidthSum = 0;
          $('#order-frame-wrapper .tab-headers li').each(function(index, item) {
            tabWidthSum += $(item).width();
          });

          var paymentTabWidth = $('#payment-tab').width();
          $('#payment-tab').width(paymentTabWidth + windowWidth - tabWidthSum - 1);
        }

      }
    });

    var orderFrameWrapperHeight = $('#order-frame-wrapper').height();
    $('.article.main').height(orderFrameWrapperHeight > 764 ? orderFrameWrapperHeight + 50 : 'auto');

    // $('.time-select').timeEntry({
    //   show24Hours: true,
    //   timeSteps: [1, 1, 0],
    //   defaultTime: '00:00'
    // });

    $('.booking-online').click(function() {
      $("#book-rates").addClass("hidden");
      $("#order-frame-wrapper").removeClass("hidden");
    });

    $('#menu-trigger').on('click', function() {
      $('#menu').toggleClass('invisi open');
    });
    $('#menu').on('click', function() {
      var self = this;
      $(this).removeClass('open');
      setTimeout(function() {
        $(self).addClass('invisi');
      }, 300);
    });

    $('#menu a').on('click', function(e) {
      e.stopPropagation ? e.stopPropagation() : event.cancelBubble = true;
    });

    $('.field-wrap [name]').on('focus', function() {
      $(this).parent().addClass('focus');
    }).on('blur', function() {
      $(this).parent().removeClass('focus');
    });

    if (windowWidth <= 736 && !$('#order-frame-wrapper').hasClass('hidden')) {
      $('.article.main > .section').addClass('hide');
    } else {
      $('.article.main > .section').removeClass('hide');
    }

  });

})(jQuery, Window, undefined);
