myapp.config(function($urlRouterProvider,$stateProvider)
{


	 $urlRouterProvider.otherwise('/login');

	 $stateProvider

	 .state('login',{
	 	url : '/login',
	 	 templateUrl: 'assets/templates/single.html'

	 })







});