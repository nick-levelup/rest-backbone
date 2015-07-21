define([
  'handlebars',
  'jquery',
  'jqueryui',

  'collections/books',

  'templates/books'
], function (
  Handlebars,
  $,
  jqueryUI,

  getBooks,

  booksTpl
) {

  var books = getBooks();

  // activate datepicker
  (function () {
    $('input[name="releaseDate"]').datepicker();
  })();

  function renderBooks (data) {
    $('.js-books').html(Handlebars.compile(booksTpl)(data));
  }

  function bind () {
    $('.js-books').on('click', 'tr td:last-child', deleteBookEvent);
    $('.js-form').on('submit', createBookEvent);
    $('.js-books').on('click', 'th[data-sort]', sortEventClick);
  }

  function sortEventClick (event) {
    event.preventDefault();

    var $el = $(this),
      sortParam = $el.data('sort');

    sortBooks(sortParam);
  }

  function sortBooks (sortParam) {
    // change comparator
    books.comparator = sortParam
    // cort collection with new comporator
    books.sort();
  }


  function deleteBookEvent () {
    var me = this,
      book = books.get($(me).closest('tr').data('id'));

    book.destroy({
      success: function () {
        renderBooks(getBooks().toJSON())
      }
    });
  }

  function createBookEvent (event) {
    event.preventDefault();

    var me = this,
      $form = $(me),
      data = {};

    _.each($form.serializeArray(), function (item) {
      data[item.name] = item.value;
    });

    books.add(data).save();
  }

  bind();


  return {
    renderBooks: renderBooks
  }
});