/**
 * 
 */
//> public
vjo.mtype('org.nodejs.ext.FunctionExt')

.props({

})
.protos({
	/**
	 * Sets the value of ‘this’ inside the function to always be the value of 
	 * thisArg when the function is called. Optionally, function arguments can 
	 * be specified (arg1, arg2, etc) that will automatically be prepended to 
	 * the argument list whenever this function is called.
	 */
	//> public void bind(Object thisArg, Object... otherArgs)
	bind: vjo.NEEDS_IMPL
})
.endType();