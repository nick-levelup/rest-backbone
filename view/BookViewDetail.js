define(
  [
    'backbone',
    'handlebars'
  ],
  function (
    Backbone,
    Handlebars
  ) {

    var BookView = Backbone.View.extend({

      initialize: function () {
        this.listenTo(this.model, 'sync', this.render);
      },

      template: Handlebars.compile($('#bookFullTpl').html()),

      render: function () {
        this.$el.html(this.template(this.model.toJSON()));

        return this;
      }

    });

    return BookView;
  }
);