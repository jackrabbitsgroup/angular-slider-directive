/**
*/

'use strict';

angular.module('myApp').controller('HomeCtrl', ['$scope', function($scope) {

	/*
	Note that properties left at their default need not be defined, meaning that
	$scope.opts1 = {};
	would achieve the same result as the fully defined object below.
	*/
	$scope.slider_id1 = 'my-slider1';
	$scope.opts1 = 
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
	
	var evtSetSliderValue = 'evtSliderSetValue' + $scope.slider_id1;
	$scope.$broadcast(evtSetSliderValue, {'handle' : 0, 'value' :10});
	
	$scope.opts2 = 
	{
		'num_handles': 2,
		'slider_min': 0,
		'slider_max': 1,
		'precision': 5,
		'scale_string': '[1, 2]',
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
		'use_ticks': true,
		'ticks_values': [0, .1, .25, .5, .75, 1],
		'ticks_class': 'jrg-slider-directive-ticks',
		'ticks_values_container_class': 'jrg-slider-directive-ticks-values-container',
		'ticks_value_class': 'jrg-slider-directive-ticks-value',
	};
	
	$scope.opts3 = 
	{
		'num_handles': 1,
		'slider_min': 0,
		'slider_max': 30,
		'precision': 0,
		'scale_string': '[1, 1]',
		'zero_method': 'newton',
		'increment': 3,
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
		'use_ticks': true,
		'ticks_values': [0, 30],
		'ticks_class': 'jrg-slider-directive-ticks',
		'ticks_values_container_class': 'jrg-slider-directive-ticks-values-container',
		'ticks_value_class': 'jrg-slider-directive-ticks-value',
	};
	
	$scope.opts4 = 
	{
		'num_handles': 1,
		'slider_min': 100,
		'slider_max': 250,
		'precision': -1,
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
		'use_ticks': true,
		'ticks_values': [100, 250],
		'ticks_class': 'jrg-slider-directive-ticks',
		'ticks_values_container_class': 'jrg-slider-directive-ticks-values-container',
		'ticks_value_class': 'jrg-slider-directive-ticks-value',
	};
	
	$scope.opts5 = 
	{
		'num_handles': 1,
		'slider_min': 0,
		'slider_max': 30,
		'precision': 2,
		'scale_string': '[1, 0]~[-1, 1]',
		'zero_method': 'newton',
		'increment': 0,
		'user_values': '',
		'evt_mouseup': '',
		'slider_moveable': true,
		'use_array': true,
		'rotate': -3,
		'bar_container_class': 'jrg-slider-directive-bar',
		'left_bg_class': 'jrg-slider-directive-bar-active',
		'interior_bg_class': 'jrg-slider-directive-bar-active',
		'right_bg_class': 'jrg-slider-directive-bar-inactive',
		'handle_class': 'jrg-slider-directive-bar-handle',
		'handle_html': '<div class = "jrg-slider-directive-bar-handle-inner"></div>',
		'units_pre': '',
		'units_post': '',
		'use_ticks': true,
		'ticks_values': [0, 30],
		'ticks_class': 'jrg-slider-directive-ticks',
		'ticks_values_container_class': 'jrg-slider-directive-ticks-values-container',
		'ticks_value_class': 'jrg-slider-directive-ticks-value',
	};
	
	$scope.opts6 = 
	{
		'num_handles': 3,
		'user_values': [25, {'val': 1230, 'name':"12:30PM"}, "AngularJS", "blah", "Stephen Colbert", {'val': "Johnny"}, "foo", "bar", "foobar"],
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
		'use_ticks': true,
		'ticks_values': [25, {'val': 1230, 'name':"12:30PM"}, "AngularJS", "foo", "foobar"],
		'ticks_class': 'jrg-slider-directive-ticks',
		'ticks_values_container_class': 'jrg-slider-directive-ticks-values-container',
		'ticks_value_class': 'jrg-slider-directive-ticks-value',
	};
	
	$scope.opts7 = 
	{
		'num_handles': 1,
		'slider_min': 0,
		'slider_max': 99,
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
		'handle_html': '$$value',
		'units_pre': '',
		'units_post': '',
		'use_ticks': true,
		'ticks_values': [0, 99],
		'ticks_class': 'jrg-slider-directive-ticks',
		'ticks_values_container_class': 'jrg-slider-directive-ticks-values-container',
		'ticks_value_class': 'jrg-slider-directive-ticks-value',
	};
	
	// Event interface testing code
	/*
	$scope.$on('evtSliderInitialized' + $scope.slider_id1, function(evt, params)
	{
		$scope.$broadcast('evtSliderSetValue' + $scope.slider_id1, {'handle' : 0, 'value': 50});
		$scope.$broadcast('evtSliderGetValue' + $scope.slider_id1, {'handle' : 0});
	});

	$scope.$on('evtSliderReturnValue' + $scope.slider_id1, function(evt, params)
	{
		console.log(params.value);
		$scope.slider_id1 = 'new_slider_id';
		
		$scope.$on('evtSliderInitialized' + $scope.slider_id1, function(evt, params)
		{
			$scope.$broadcast('evtSliderGetAllValues' + $scope.slider_id1);
			
		});
		
		$scope.$on('evtSliderReturnAllValues' + $scope.slider_id1, function(evt, params)
		{
			console.log(params);
		});
	});
	*/
	
}]);
