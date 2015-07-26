define([
  'view/AbstractPage',

  'handlebars'
], function (
  AbstractPage,
  Handlebars
) {

  return AbstractPage.extend({

    title: 'Not Found!',

    template: Handlebars.compile($('#notFoundTpl').html())

  })
});