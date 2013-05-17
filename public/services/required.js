angular.module('requirement',['comparisons']).
	factory('Required',function(comparisons){
		return{
			check:function(conditions,type,values){
				var required = true;
				for(var i=0;i<conditions.length;i++){
					if(type=="all"){
						required = true;
						if(!comparisons[conditions[i].operator](conditions[i],values)){
							required = false;
							break;
						}
					}else{//type=="any"
						required = false
						if(comparisons[conditions[i].operator](conditions[i],values)){
							required = true;
							break;
						}
					}
				}
				return required			
			}
		}
	})