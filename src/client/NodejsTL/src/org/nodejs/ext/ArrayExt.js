/**
 * 
 */
//> public
vjo.mtype('org.nodejs.ext.ArrayExt')

.props({
	/**
	 * Answer true if passed in object is an Array, else answer false
	 */
	//> public boolean isArray(Object other)
	isArray: vjo.NEEDS_IMPL
})
.protos({
	/**
	 * Returns the first (least) index of an element within the array equal to 
	 * the specified value, or -1 if none is found.
	 */
	//> public Number indexOf(Object value)
	indexOf: vjo.NEEDS_IMPL,
	
	/**
	 * Returns the last (greatest) index of an element within the array equal to 
	 * the specified value, or -1 if none is found.
	 */
	//> public Number lastIndexOf(Object value)
	lastIndexOf: vjo.NEEDS_IMPL,
	
	/**
	 * Creates a new array with all of the elements of this array for which the 
	 * provided filtering function returns true.
	 */
	//> public Array filter(Function callback)
	filter: vjo.NEEDS_IMPL,
	
	/**
	 * Calls a function for each element in the array.
	 */
	//> public void forEach((void function(Object? o)) callback)
	forEach: vjo.NEEDS_IMPL,
	
	/**
	 * Returns true if every element in this array satisfies the provided 
	 * testing function.
	 */
	//> public boolean every((void function(Object? o)) callback)
	every: vjo.NEEDS_IMPL,
	
	/**
	 * Creates a new array with the results of calling a provided function on 
	 * every element in this array.
	 */
	//> public Array map((void function(Object? o)) callback)
	map: vjo.NEEDS_IMPL,
	
	/**
	 * Returns true if at least one element in this array satisfies the provided 
	 * testing function.
	 */
	//> public boolean some((void function(Object? o)) callback)
	some: vjo.NEEDS_IMPL,
	
	/**
	 * Apply a function simultaneously against two values of the array 
	 * (from left-to-right) as to reduce it to a single value.
	 */
	//> public Object reduce((void function(Object o1, Object o2)) callback)
	reduce: vjo.NEEDS_IMPL,

	/**
	 * Apply a function simultaneously against two values of the array 
	 * (from right-to-left) as to reduce it to a single value.
	 */
	//> public Object reduceRight((void function(Object o1, Object o2)) callback)
	reduceRight: vjo.NEEDS_IMPL
})
.options({
	metatype: true
})
.endType();