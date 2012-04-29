//Destructible
define([ "dojo/_base/declare" ], function(declare){
	return dojo.declare(null, {
		//(Optional String in name)
		destroy: function(name) {
			if(name == undefined) {
				console.info('destroyed');
			} else {
				console.info(name + ' destroyed');
			}
		}
	});
});
