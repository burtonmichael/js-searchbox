({
	baseUrl: "./",
	dir: "../dist",
	name: "main",
	paths: {
		'moment': '../bower_components/moment/min/moment.min',
		'handlebars.runtime': '../bower_components/handlebars/handlebars.runtime.amd.min',
		'pikaday': '../bower_components/pikaday/pikaday',
		'template': 'templates/compiled/app.tpl',
		'translations': 'js/data/translations/es'
	},
	shim: {
		'pikaday': {
			deps: ['moment']
		}
	},
	optimizeCss: 'default'
})