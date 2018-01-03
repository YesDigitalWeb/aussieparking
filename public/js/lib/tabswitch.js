/*
 * jQuery tabSwitch
 *
 * Light weight tab switch
 *
 * Copyright (c) 2012, lancee LY
 *
 * http://xrhy.me/
 *
 * Dual licensed under the MIT or GPL Version 2 licenses.
 */
!(function($) {

  "use strict"

  $.tabSwitch = function(options, scope) {

    // Initialization
    var init = function() {
      options = $.extend({}, $.tabSwitch.defaults, options);
      var tabs = scope ? $(scope).find(options.tabSelector) : $(options.tabSelector),
          page = scope ? $(scope).find(options.tabPageSelector) : $(options.tabPageSelector);

      if (options.isIdMode) {
        page = page.each(function(i) {
          var id = $(this).attr('id');
          page[id] = this;
        });
      }

      page.each(function(i) {
        $(this).data('tab-page', i);
        if (!$(this).hasClass('cur')) {
          $(this).addClass('invisible');
        }
      });
      tabs.each(function(i) {
        $(this).data('tab', i);
      });

      tabs.on(options.event, function(e) {
        tabs.removeClass('cur');//.parent().removeClass('cur');
        page.addClass('invisible').removeClass('cur');
        var k = options.isIdMode ? $(this).attr('href').replace('#','') : $(this).data('tab');
        $(this).addClass('cur');//.parent().addClass('cur');
        $(page[k]).removeClass('invisible').addClass('cur');
        (e.preventDefault)?e.preventDefault():e.returnValue = false;
        if (options.click)
          options.click.call(this, e, k, options);
      });

    };

    init();

  };

  $.tabSwitch.defaults = {
    tabSelector : '.tab',
    tabPageSelector : '.tab-page',
    isIdMode : false,
    click: '',
    event: 'click'
  };

  $.fn.tabSwitch = function(options, callback) {
    return this.each(function(i) {
      if( (typeof(options) ).match('object|undefined')) {
        $.tabSwitch(options, this);
        if ( callback ) {
          callback.call(this, i);
        }
      }
    });
  };

})(jQuery);