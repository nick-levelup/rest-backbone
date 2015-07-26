define([
  'backbone',
  'handlebars'
], function (Backbone, Handlebars) {

  return Backbone.View.extend({

    template: Handlebars.compile($('#titleTpl').html()),

    initialize: function (options) {
      window.title = window.title || {};
      window.title[this.cid] = this;

      this.data = options.data;
    },

    render: function () {
      this.$el.html(this.template(this.data));

      return this;
    }
  })
});