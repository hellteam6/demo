/**
 * 
 */
//> public
vjo.ctype('org.nodejs.console')
.props({
	
})
.protos({
	/**
	 * 
	 */
	//> public void log(Object... args)
	log: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public void info(Object... args)
	info: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public void warn(Object... args)
	warn: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public void error(Object... args)
	error: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public void dir(Object object)
	dir: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public void time(String label)
	time: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public void timeEnd(String label)
	timeEnd: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public void trace(String label)
	trace: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public void assert(Object expression)
	assert: vjo.NEEDS_IMPL
})
.options({
	metatype: true
})
.endType();