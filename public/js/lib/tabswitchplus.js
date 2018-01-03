/*
 * jQuery tabSwitchPlus
 *
 * Tab Switch Plus
 *
 * Copyright (c) 2015, lancee LY
 *
 * http://xrhy.me/
 *
 * Dual licensed under the MIT or GPL Version 2 licenses.
 */

!(function() {
  (function($, Export) {
    "use strict";

    $.tabSwitch = function(options, scope) {

      var tabSwitch = function() {
        this.init();
      };

      tabSwitch.prototype = {
        constructor: tabSwitch,

        init: function() {

          var self = this;

          options = $.extend({}, $.tabSwitch.defaults, options);

          this.$el = $(scope);
          this.id = 0;

          this.tabs = scope ? this.$el.find(options.tabSelector) : $(options.tabSelector),
          this.page = scope ? this.$el.find(options.tabPageSelector) : $(options.tabPageSelector);

          if (options.isIdMode) {
            this.ids = {};
            page = page.each(function(i) {
              var id = $(this).attr('id');
              page[id] = this;
              self.ids[i] = id;
            });
          }

          this.page.each(function(i) {
            $(this).data('tab-page', i);
            if (!$(this).hasClass('cur')) {
              $(this).addClass('invisible');
            }
          });

          this.tabs.each(function(i) {
            $(this).data('tab', i);
          });

          this.tabs.on(options.event, function(e) {
            this.reset();
            var k = this.id =  options.isIdMode ? $(this).attr('href').replace('#','') : $(this).data('tab');
            $(this).addClass('cur');
            $(page[k]).removeClass('invisible').addClass('cur');
            (e.preventDefault)?e.preventDefault():e.returnValue = false;
            if (options.click)
              options.click.call(this, e, k, options);
          });
          return this;
        },
        to: function(i) {// i can be number and string id
          this.reset();

          i = i || 0;

          var k = 0;

          if ($.isNumeric(i)) {
            k = i;
            this.id = i;
          } else {
            k = options.isIdMode ? i : 0;
            this.id = options.isIdMode ? this.ids[i] : 0;
          }

          $(this.tabs[i]).addClass('cur');
          $(this.page[k]).removeClass('invisible').addClass('cur');

          options && options.after && $.isFunction(options.after) && options.after.call(this, k);

          return this;
        },
        next: function() {
          var i = this.id,
              d = this.id,
              me = this;

          setTimeout(function() {
            me.page.eq(d).addClass('prev');
          }, 0);

          i = i > (this.tabs.length - 2) ? 0 : ++i;

          setTimeout(function() {
            me.page.eq(i + 1).addClass('next');
          }, 0);

          this.to(i);
          return this;
        },
        prev: function() {
          var i = this.id,
              d = this.id,
              me = this;
  
          setTimeout(function() {
            me.page.eq(d).addClass('next');
          }, 0);

          i = i < 1 ? this.tabs.length - 1 : --i;

          setTimeout(function() {
            me.page.eq(i - 1).addClass('prev');
          }, 0);

          this.to(i);
          return this;
        },
        reset: function() {
          this.tabs.removeClass('cur');
          this.page.addClass('invisible').removeClass('cur prev next');
          return this;
        }
      }

      return new tabSwitch();

    }

    $.tabSwitch.defaults = {
      tabSelector : '.tab',
      tabPageSelector : '.tab-page',
      isIdMode : false,
      click: '',
      event: 'click',
      after: function() {}
    };

    $.fn.tabSwitch = function(options) {
      var tabSwitch = $(this).data('tabSwitch');

      if((typeof(options)).match('object|undefined')) {
        this.each(function(i) {
          if(!tabSwitch) {
            tabSwitch = $.tabSwitch(options, this);
          }
        });
      } else {
        throw new Error('arguments[0] is not a instance of Object');
      }

      return tabSwitch;
    }

  })(jQuery, window);

}).call(this);