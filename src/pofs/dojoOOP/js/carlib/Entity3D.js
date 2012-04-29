//Entity3D
define([ "dojo/_base/declare" ], function(declare){
	return dojo.declare(null, {
		
		//Attributes
		position: [0,0,0],
	
		//Constructor	
		constructor: function(properties) {
			//Genera un mixin de this y properties copiando automaticamente
			//todos los miembros (incluidos metodos) de properties
			declare.safeMixin(this, properties);
		}
	});
});
