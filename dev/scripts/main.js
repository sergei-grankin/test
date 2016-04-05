'use strict';

var charts = require('./svg-chart');

document.addEventListener('DOMContentLoaded', function() {
	initSvgChart();
});

function initSvgChart() {
	var holder = document.querySelectorAll('.svg-chart');

	[].slice.call(holder).forEach(function(item) {
		new charts(item);
	});
}
