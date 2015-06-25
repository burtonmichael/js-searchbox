({
    baseUrl: "./",
    out: "../dist/app.js",
    name: "../node_modules/almond/almond",
    include: "main",
    wrap: true,
    paths: {
        "jquery": "libs/jquery/dist/jquery.min",
        'moment': 'libs/moment/min/moment.min',
        'handlebars.runtime': 'libs/handlebars/handlebars.runtime.amd.min',
        'jquery-cascading-dropdown': 'libs/jquery-cascading-dropdown/jquery.cascadingdropdown.min',
        'pikaday': 'libs/pikaday/pikaday',
        'template': 'templates/compiled/app.tpl',
        'translations': 'js/data/translations/es'
    },
    shim: {
        'pikaday': {
            deps: ['moment']
        },
        'jquery.cascadingdropdown.min': {
            deps: ['jquery']
        }
    },
    preserveLicenseComments: false
})
