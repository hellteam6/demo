//Destroyer
define([ "dojo/_base/declare", "carlib/Destructible" ], 
function(declare, Destructible){
	return dojo.declare(null, {
		//@Override (Destructible in obj)
		crush: function(obj) {
			console.assert(obj instanceof Destructible);
			
			console.log("Destroyer crushing..");
			obj.destroy();
		}
	});
});
