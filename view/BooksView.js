define(
  [
    'backbone',
    'handlebars',

    'view/BookView'
  ],
  function (
    Backbone,
    Handlebars,

    BookView
  ) {

    var BooksView = Backbone.View.extend({

      tagName: 'table',
      className: 'table-hover table table-striped',

      events: {
        'click th[data-sort]': 'sortEvent'
      },

      template: Handlebars.compile($('#booksTpl').html()),

      initialize: function () {
        this.collection.fetch();

        this.listenTo(this.collection, 'sort', this.render);
      },

      render: function () {
        var view = this;

        this.$el.html(this.template());

        this.collection.each(function (model) {
          var book = new BookView({
            model: model
          });

          view.$el.find('tbody').append(book.render().el);
        });

        return this;
      },

      sortEvent: function (event) {
        event.preventDefault();

        var $el = $(event.currentTarget),
          sortParam = $el.data('sort');

        this.collection.sortBooks(sortParam);
      }

    });

    return BooksView;
  }
);