angular.module('controllers',[]).
	controller('IndexController',function($scope,$location,App){
		$scope.apps = App.getAll();
		$scope.refresh = App.sync();
		$scope.open = function(app){
			$location.path('/app/'+app._id);
		};
		$scope.settings = function(){
			$location.path('/settings');
		};
	})