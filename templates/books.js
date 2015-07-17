define([], function () {
	
	return [
	    '<ul>',
	      '{{#each this}}',
	      '<li data-id="{{_id}}">{{title}} {{author}} <span class="js-del">X</span>',
	        '<input value="{{title}}"><span class="js-save">SAVE</span>',
	      '</li>',
	      '{{/each}}',
	    '</ul>'
	 ].join('')
})