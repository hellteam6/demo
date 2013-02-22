/**
 * 
 */
//> public 
vjo.ctype('org.nodejs._linklist')

.props({
	
})
.protos({
	/**
	 * 
	 */
	//> public void init(Object list)
	init: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Object peek(Object list)
	peek: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Object shift(Object list)
	shift: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public void remove(Object item)
	remove: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public void append(Object list, Object item)
	append: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public void isEmpty(Object list)
	isEmpty: vjo.NEEDS_IMPL
})
.options({
	metatype: true
})
.endType();