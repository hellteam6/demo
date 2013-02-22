/**
 * 
 */
//> public ; // Exports: StringDecoder
vjo.ctype('org.nodejs.string_decoder') 
.props({
	// vvvvvvvvvvvvvvvvvvv NESTED TYPES vvvvvvvvvvvvvvvvvvvv
	/**
	 * 
	 */
	//> public
	StringDecoder: vjo.ctype()
		//> needs(org.nodejs.buffer.Buffer)
		.protos({
			/**
			 * 
			 */
			//> public constructs(String? encoding)
			constructs: function() {},
			
			/**
			 * 
			 */
			//> public String write({String | Buffer} buffer)
			write: vjo.NEEDS_IMPL
		})
	.endType()
	
	// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
})
.protos({
	// vvvvvvvvvvvvvv  Exported Types  vvvvvvvvvvvvvvv
	/**
	 * 
	 */
	//> public type::string_decoder.StringDecoder
	StringDecoder: null 
	// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^	
})
.options({
	metatype: true
})
.endType();