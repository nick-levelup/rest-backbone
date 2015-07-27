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

      tagName: 'tr',

      events: {
        'click td:last-child': 'deleteBook'
      },

      template: Handlebars.compile($('#bookTpl').html()),

      render: function () {
        this.$el.html(this.template(this.model.toJSON()));

        return this;
      },

      deleteBook: function () {
        this.model.destroy();

        this.removeEvent();
      },

      removeEvent: function () {
        this.remove();
      }

    });

    return BookView;
  }
);