define([], function () {

	return [
		'<table class="table-hover table table-striped">',
			'<thead>',
				'<tr>',
					'<th data-sort="title">Title</th>',
					'<th data-sort="author">Author</th>',
					'<th data-sort="date">Date</th>',
					'<th>Delete</th>',
				'</tr>',
			'</thead>',
			'<tbody>',
				'{{#each this}}',
				'<tr data-id="{{id}}">',
					'<td>{{title}}</td>',
					'<td>{{author}}</td>',
					'<td>{{date}}</td>',
					'<td>X</td>',
				'</tr>',
				'{{/each}}',
			'</tbody>',
		'</table>'
	].join('')
})