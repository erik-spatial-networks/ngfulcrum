angualar.module('controllers',[]).
	controller('SettingsController',function($scope,$location,Authentication){
		$scope.back = function(){
			$location.path('/')
		}
		$scope.logout = function(){
			if(Authentication.logOut()){
				$location.path('/login');
			};
		}
	})