define([
  'pages/AbstractPage',

  'handlebars'
], function (
  AbstractPage,
  Handlebars
) {

  return AbstractPage.extend({

    title: 'Book Page',

    template: Handlebars.compile($('#notFoundTpl').html())

  })
});