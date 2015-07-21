define(['collections/BooksCollection'], function (Books) {
  var books;

  function getBooks () {
    if (!books) {
      books = new Books;
    };

    return books;
  }

  return getBooks;
});