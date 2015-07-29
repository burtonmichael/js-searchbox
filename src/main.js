require(['jquery', 'moment', 'pikaday', 'template'], function(jq, moment, Pikaday, template) {

	jq.noConflict( true );

	var app = window.rcApp || {}

	var defaults = {
		preflang: 'en',
		containerId: 'app'
	}

	app = jq.extend(true, {}, defaults, app.options);

	app.getLocations = function(parameters, callback) {
		jq.getJSON('http://www.rentalcars.com/InPathAjaxAction.do', parameters, function(data) {
			callback(data);
		});
	}

	app.localeChanged = function(event) {
		var level = event.name;
		var selected = e.options[e.selectedIndex].value;
	}

	app.setHiddenDateFields = function(date, fieldset) {
		jq(app.form[fieldset + 'Day']).val(date.date());
		jq(app.form[fieldset + 'Month']).val(date.month() + 1);
		jq(app.form[fieldset + 'Year']).val(date.year());
	}

	app.cssLoader = function(url) {
        var css = document.createElement('link');
        css.rel = 'stylesheet';
        css.href = url;

        document.head.appendChild(css);
    };

	switch(typeof app.css) {
		case "undefined":
			app.cssLoader('src/css/base.css')
			break;
		case "string":
			app.cssLoader(app.css)
			break;
		default:
			break;
	}

	jq.getJSON('/stand-alone-locale/translations/' + app.preflang + '.json', function(data) {

		jq('#' + app.containerId).html(template(data));

		app.form = rcAppForm;

		moment.defineLocale("app", data.moment);
		moment.locale("app");

        var i18n = {
            previousMonth: data.previousMonth,
            nextMonth: data.nextMonth,
            months: data.moment.months,
            monthsShort: data.moment.monthsShort,
            weekdays: data.moment.weekdays,
            weekdaysShort: data.moment.weekdaysShort
        };

		var startDate = moment();

		var endDate = moment();
		endDate.add(3, 'days');

		app.setHiddenDateFields(startDate, 'pu');
		app.setHiddenDateFields(endDate, 'do');

		app.pickupDate = new Pikaday({
			defaultDate: startDate.toDate(),
			minDate: startDate.toDate(),
			setDefaultDate: true,
		    field: document.getElementById('rc-datepicker--pickup'),
		    format: 'L',
		    i18n: i18n,
		    theme: 'rc-app',
		    onSelect: function(date) {
		    	var dateMoment = this.getMoment();
		    	app.dropoffDate.setMinDate(date);
		    	if (dateMoment > app.dropoffDate.getMoment()) {
		    		app.dropoffDate.setMoment(dateMoment);
		    		app.setHiddenDateFields(dateMoment, 'do')
		    	}
		    	app.setHiddenDateFields(dateMoment, 'pu')
		    }
		});

		app.dropoffDate = new Pikaday({
			defaultDate: endDate.toDate(),
			minDate: startDate.toDate(),
			setDefaultDate: true,
		    field: document.getElementById('rc-datepicker--dropoff'),
		    format: 'L',
		    i18n: i18n,
		    theme: 'rc-app',
		    onSelect: function(date) {
		    	app.setHiddenDateFields(this.getMoment(), 'do')
		    }
		});

		window.rcApp = app
	});

});