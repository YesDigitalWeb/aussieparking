var AU = {
  Klass: {},
  View: {},
  SubView: {}
},
au = {
  data: {},
  view: {},
  subView: {}
};

Backbone.View.prototype._afterEnsureElement = function (func) {
  if(func && _.isFunction(func)) {
    func.apply(this, arguments);
  }
}

Backbone.View.prototype._ensureElement = function() {
  if (!this.el) {
    var attrs = _.extend({}, _.result(this, 'attributes'));
    if (this.id) attrs.id = _.result(this, 'id');
    if (this.className) attrs['class'] = _.result(this, 'className');
    var $el = Backbone.$('<' + _.result(this, 'tagName') + '>').attr(attrs);
    this.setElement($el, false);
  } else {
    this.setElement(_.result(this, 'el'), false);
  }
  this._afterEnsureElement.call(this);
}

Qor = {};
Qor.View = Backbone.View.extend({
  el: function() {
    var cname = this.reference,
        kluss = cname.replace(/[A-Z]/g, function(s, i) {
          if(i) {
            return '-'+ s.toLowerCase();
          } else {
            return s.toLowerCase();
          }
        });

    var self = this;

    this._afterEnsureElement(function() {
      $(self.ele).addClass(kluss);
    });

    return '#' + kluss;
  },
  ele: '',
  initialize: function() {

  }
});

Qor.SubView = Backbone.View.extend({
  el: function() {
    var cname = this.reference,
        kluss = cname.replace(/[A-Z]/g, function(s, i) {
          if(i) {
            return '-'+ s.toLowerCase();
          } else {
            return 'sub-' + s.toLowerCase();
          }
        });

    var self = this;

    this._afterEnsureElement(function() {
      $(self.ele).not('.' + kluss).addClass(kluss);
    });

    return '.' + kluss;
  },
  ele: '',
  id: function() {

  }
});

$(function() {
  for (var view in AU.View) {
    AU.View[view].prototype.reference = view;
    au.view[view] = new AU.View[view]();
  }
  for (var sub in AU.SubView) {
    AU.SubView[sub].prototype.reference = sub;
  }

  if ($('#dashboard').length) {
    AU.SubView.Orders.prototype.reference = 'orders';
    $('#dashboard .orders').each(function(i, item) {
      new AU.SubView.Orders({
        el: item
      });
    });

    new AU.SubView.CheckinOutToday({
      el: '#dashboard .checkin-out-today'
    });
  }

  Backbone.history.start();
});
