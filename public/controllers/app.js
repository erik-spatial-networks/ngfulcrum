angular.module('controllers',[]).
	controller('AppController',function($scope,$location,$routeParams,App){
		$scope.records = App.get($routeParams.appId).records;
		$scope.name = App.get($routeParams.appId).name;
		$scope.refresh = App.sync();
		$scope.newRecord = function(){
			$location.path('/app/'+$routeParams.appId+'/new');
		}
		$scope.editRecord = function(record){
			$location.path('/record/'+record._id);
		};
	})