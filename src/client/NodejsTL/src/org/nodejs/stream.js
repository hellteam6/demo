/**
 * 
 */
//> public
vjo.ctype('org.nodejs.stream<T>') 
.props({
	/**
	 * 
	 */
	//> public
	Stream: vjo.ctype('<T>')
		//> needs(org.nodejs.events.EventEmitter)
		.inherits('org.nodejs.events.EventEmitter<T>')
		.protos({
			/**
			 * 
			 */
			//> public void pipe(Stream dest, Object? options)
			pipe: vjo.NEEDS_IMPL
		})
	.endType()
})
.protos({
	// vvvvvvvvvvvvvv  Exported Types  vvvvvvvvvvvvvvv
	/**
	 * 
	 */
	//> public type::stream.Stream
	Stream: null	
	// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^	
})
.options({
	metatype: true
})
.endType();