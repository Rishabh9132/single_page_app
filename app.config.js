myapp.config(function($urlRouterProvider,$stateProvider)
{


	 $urlRouterProvider.otherwise('/home');

	 $stateProvider

	 .state('home',{
	 	url : '/home',
	 	 templateUrl: 'assets/templates/single.html'

	 })







});