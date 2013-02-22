/**
 * 
 */
//> public
vjo.mtype('org.nodejs.ext.DateExt')
.props({
	// now() is already supported
})
.protos({
	/**
	 * 
	 */
	//> public String toISOString()
	toISOString: vjo.NEEDS_IMPL
})
.options({
	metatype: true
})
.endType();