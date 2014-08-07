var myApp = angular.module('myApp',['ngRoute'])

.controller('NavigationCtrl', ['$scope', function($scope) {
	
	$scope.menus = [{name:'User', template:'/user'},
	                  {name:'Account', template:'/account'},
	                  {name:'Loan', template:'/loan'},
	                  {name:'Logout', template:'/logout'},
	                ];
}])

.controller('UserController', ['$scope', function($scope) {
	$scope.firstName = 'sethuraman';
	$scope.lastName = 'bose';
}])

.controller('AccountController', ['$scope', function($scope) {
	$scope.accountName ="HDFC";
	$scope.accountId ="01249873471233";
}])

.controller('LoanController', ['$scope', function($scope) {
	$scope.firstName = 'sethuraman';
	$scope.lastName = 'bose';
}])

.controller('LogoutController', ['$scope', function($scope) {
	$scope.firstName = 'sethuraman';
	$scope.lastName = 'bose';
}])

.config(['$routeProvider', function($routeProvider) {
	  $routeProvider.when('/user', {templateUrl: 'views/user.html', controller: 'UserController'});
	  $routeProvider.when('/account', {templateUrl: 'views/account.html',controller: 'AccountController'});
	  $routeProvider.when('/loan', {templateUrl: 'views/loan.html',controller: 'LoanController'});
	  $routeProvider.when('/logout', {templateUrl: 'views/logout.html',controller: 'LogoutController'});
	  $routeProvider.otherwise({redirectTo: '/user'});
}]);