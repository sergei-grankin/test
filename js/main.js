document.addEventListener('DOMContentLoaded', function() {
	initSvgChart();
});

function initSvgChart() {
	var holder = document.querySelectorAll('.svg-chart');

	[].slice.call(holder).forEach(function(item) {
		new SvgChart(item);
	});
}