/**
*/

'use strict';

angular.module('myApp').controller('HomeCtrl', ['$scope', function($scope) {
	$scope.opts = 
	{
		'num_handles': 1,
		'slider_min': 0,
		'slider_max': 100,
		'precision': 0,
		'scale_string': '[1, 1]',
		'zero_method': 'newton',
		'increment': 0,
		'user_values': '',
		'evt_mouseup': '',
		'slider_moveable': true,
		'use_array': true,
		'rotate': 0,
		'bar_container_class': 'jrg-slider-directive-bar',
		'left_bg_class': 'jrg-slider-directive-bar-active',
		'interior_bg_class': 'jrg-slider-directive-bar-active',
		'right_bg_class': 'jrg-slider-directive-bar-inactive',
		'handle_class': 'jrg-slider-directive-bar-handle',
		'handle_html': '<div class = "jrg-slider-directive-bar-handle-inner"></div>',
		'units_pre': '',
		'units_post': '',
		'use_ticks': false,
		'ticks_values': [0, 100],
		'ticks_class': 'jrg-slider-directive-ticks',
		'ticks_values_container_class': 'jrg-slider-directive-ticks-values-container',
		'ticks_value_class': 'jrg-slider-directive-ticks-value',
	};
}]);