Handlebars.registerHelper('Hours', function() {
    var ret = [];

    for (var i = 0; i < 24; i++) {
        var hour = (i < 10) ? '0' + (i + '') : (i + ''),
        	option = '<option ';
        if (hour == '10') option += 'selected ';
        option += 'value="' + i +'">'
        option += hour
        option += '</option>';
        ret.push(option)
    }

    return ret.join('');
});

Handlebars.registerHelper('Minutes', function() {
    var ret = [];

    for (var j = 0; j < 4; j++) {
        var minute = (j === 0) ? '00' : (j * 15 + ''),
            value = j * 15,
        	option = '<option ';
        if (minute == '30') option += 'selected ';
        option += 'value="' + value +'">'
        option += minute
        option += '</option>';
        ret.push(option)
    }

    return ret.join('');
});

var context = {
    title: "Search for Car Hire",
    country: "Country",
    city: "City",
    location: "Location",
    submit: "Search",
    countries: [
	    {
	    	name: "Country1",
	    	value: "country1"
	    },
	    {
	    	name: "Country2",
	    	value: "country2"
	    }
    ]
}

var html = Handlebars.templates.app(context);

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