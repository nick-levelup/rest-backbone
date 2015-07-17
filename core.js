requirejs.config({
    paths: {
		jquery :'https://yastatic.net/jquery/2.1.4/jquery',
		underscore :'https://yastatic.net/underscore/1.6.0/underscore',
		backbone :'https://yastatic.net/backbone/1.1.2/backbone',
		handlebars :'https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/3.0.3/handlebars'
    }
});

requirejs([
		'collections/books'
	], function (
		getBooks
	) {
		getBooks().fetch();
})