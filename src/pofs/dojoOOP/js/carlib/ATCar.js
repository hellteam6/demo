//ATCar
define([ "dojo/_base/declare", "carlib/Car" ], function(declare, Car){
	return dojo.declare(Car, {
		
		//@Override
		accelerate: function(increment) {
			this.inherited(arguments);
			if(increment >= 10) {
				this.increaseGear();
			}
    	},
		
		//@Override
    	decelerate: function(decrement) {
			this.inherited(arguments);
			if(decrement >= 10) {
				this.decreaseGear();
			}
    	}
	});
});
