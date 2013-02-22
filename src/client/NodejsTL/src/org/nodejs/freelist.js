/**
 * 
 */
//> public
vjo.ctype('org.nodejs.freelist') 
.props({
	/**
	 * 
	 */
	//> public
	FreeList: vjo.ctype()
		.protos({
			/**
			 * 
			 */
			//> public FreeList constructs(String name, int max, Function constructor)
			constructs: function() {},
			
			/**
			 * 
			 */
			//> public String
			name: null,			
			
			/**
			 * 
			 */
			//> public int
			max: 0,				
			
			
			/**
			 * 
			 */
			//> Array
			list: null,			
			
			/**
			 * 
			 */
			//> public Object alloc()
			alloc: vjo.NEEDS_IMPL,
			
			/**
			 * 
			 */
			//> public void free(Object obj)
			free: vjo.NEEDS_IMPL
		})
	.endType()
})
.protos({
	// vvvvvvvvvvvvvv  Exported Types  vvvvvvvvvvvvvvv
	/**
	 * 
	 */
	//> public type::freelist.FreeList
	FreeList: null 
	// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^	
})
.options({
	metatype: true
})
.endType();