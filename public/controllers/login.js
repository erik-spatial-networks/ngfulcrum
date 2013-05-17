angular.module('controllers',[]).
	controller('LoginController',function($scope,$location,Authentication){
		$scope.username = '';
		$scope.password = '';
		$scope.error = '';
		$scope.submit = function(){
			if(Authentication.logIn($scope.username,$scope.password)){
				$location.path('/');
			}else{
				$scope.username = '';
				$scope.password = '';
				$scope.error = 'Username or password was incorrect';
			};
		};
	})