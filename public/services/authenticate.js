angular.module('authentication',[]).
	factory('Authentication',function($http,$httpProvider,$cookieStore){
		return{
			logIn:function(username,password){
				var auth_api_url = '/api/v2/users';
				var auth_header = {Authorization:'Basic ' + window.btoa(username + ':' + password)};
				$http.
					get(auth_api_url,{headers:auth_header}).
					success(function(response){
						var api_token = response.user.api_token;
						$httpProvider.defaults.headers.common.X-ApiToken = api_token;
						$cookieStore.put('api-token',api_token);
						return true
					}).
					error(function(response,status){
						return false
					});
			},
			logOut:function(){
				$cookieStore.remove('api-token');
				return true
			}
		}
	})