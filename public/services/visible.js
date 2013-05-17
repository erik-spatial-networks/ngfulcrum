angular.module('visibility',['comparisons']).
	factory('Visibile',function(comparisons){
		return{
			check:function(conditions,type,values){
				var visible = true;
				for(var i=0;i<conditions.length;i++){
					if(type=="all"){
						visible = true;
						if(!comparisons[conditions[i].operator](conditions[i],values)){
							visible = false;
							break;
						}
					}else{//type=="any"
						visible = false
						if(comparisons[conditions[i].operator](conditions[i],values)){
							visible = true;
							break;
						}
					}
				}
				return visible				
			}
		}
	})