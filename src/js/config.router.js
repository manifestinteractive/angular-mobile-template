'use strict';

/**
 * Config for the router
 */
angular.module('app').run([
	'$rootScope', '$state', '$stateParams',
	function($rootScope, $state, $stateParams)
	{
		$rootScope.$state = $state;
		$rootScope.$stateParams = $stateParams;
	}
])
.config(
[
	'$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider)
	{
		$urlRouterProvider.otherwise('/app/dashboard');
		$stateProvider.state('app', {
			abstract: true,
			url: '/app',
			templateUrl: 'tpl/app.html'
		})
		.state('app.dashboard', {
			url: '/dashboard',
			templateUrl: 'tpl/app_dashboard.html'
		})
	}
]);