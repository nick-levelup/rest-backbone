define([], function () {

	return [
		'<table>',
			'<thead>',
				'<tr>',
					'<th>Title</th>',
					'<th>Author</th>',
					'<th>Date</th>',
					'<th>Delete</th>',
				'</tr>',
			'</thead>',
			'<tbody>',
				'{{#each this}}',
				'<tr>',
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