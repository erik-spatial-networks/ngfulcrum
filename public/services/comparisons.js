angular.module('comparisons',[]).
	factory('comparisons',function(){
		return{
			greater_than:function(condition,values){
				return values[condition.field_key]>condition.value
			},
			less_than:function(condition,values){
				return values[condition.field_key]<condition.value
			},
			equal_to:function(condition,values){
				var result;
				if(typeof values[condition.field_key] === 'string'){
					result = values[condition.field_key].toLowerCase() === condition.value.toLowerCase();
				}else{
					result = values[condition.field_key] === condition.value;
				}
				return result
			},
			not_equal_to:function(condition,values){
				var result;
				if(typeof values[condition.field_key] === 'string'){
					result = values[condition.field_key].toLowerCase() !== condition.value.toLowerCase();
				}else{
					result = values[condition.field_key] !== condition.value;
				}
				return result
			},
			is_empty:function(condition,values){
				return values[condition.field_key] === ''
			},
			is_not_empty:function(condition,values){
				return values[condition.field_key] !== ''
			},
			contains:function(condition,values){
				return values[condition.field_key].toLowerCase().indexOf(condition.values.toLowerCase()) !== -1
			},
			starts_with:function(condition,values){
				return values[condition.field_key].toLowerCase().indexOf(condition.values.toLowerCase()) === 0
			}
		}
	});
