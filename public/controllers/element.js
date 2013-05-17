angular.module('controllers',[]).
	controller('FormElementController',function($scope,Visible,Required){
		$scope.visible = Visible.check(conditions,type,values);
		$scope.required = Required.check(conditions,type,values);
	})