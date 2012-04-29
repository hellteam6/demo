//Car
define([ "dojo/_base/declare", "carlib/Destructible" ], 
function(declare, Destructible){
	return dojo.declare(Destructible, {
		
		//Attributes
		reg_no: '',
		current_speed: 0,
		current_gear: 0,
		
		//Constructor
		constructor: function(properties) {
			this.reg_no = properties.reg_no;	
		},

		//Methods

		//@Override
		destroy: function() {
			console.info("Beggining destruction.");
			this.inherited(arguments, [this.reg_no]);	
			console.info('Destruction ended.');
		},

		accelerate: function(increment) {
        	this.current_speed += increment;
    	},

    	decelerate: function(decrement) {
        	this.current_speed -= decrement;
    	},

    	increaseGear: function() {
        	this.current_gear ++;
    	},

    	decreaseGear: function() {
        	this.current_gear --;
    	},
		
	});
});
