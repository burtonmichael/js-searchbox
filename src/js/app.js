var rcApp = rcApp || {};

var defaults = {
	preflang: 'en',
	translations: {
	    title: "Search for Car Hire",
	    country: "Country",
	    city: "City",
	    location: "Location",
	    submit: "Search"
    },
    countries: []
}

$.extend(true, rcApp, defaults);

var html = Handlebars.templates.app(rcApp.translations);

document.getElementById('app').innerHTML = html;

var startDate = new Date();

var endDate = new Date();
endDate.setDate(startDate.getDate() + 3);

var pickupDate = new Pikaday({
	defaultDate: startDate,
	minDate: startDate,
	setDefaultDate: true,
    field: document.getElementById('rc-datepicker--pickup'),
    format: 'D MMM YYYY',
    onSelect: function() {
    	var date = this.getMoment();
    	dropoffDate.setMinDate(date);
    	if (date > dropoffDate.getMoment()) dropoffDate.setMoment(date);
    }
});

var dropoffDate = new Pikaday({
	defaultDate: endDate,
	minDate: startDate,
	setDefaultDate: true,
    field: document.getElementById('rc-datepicker--dropoff'),
    format: 'D MMM YYYY',
    onSelect: function() {
    }
});