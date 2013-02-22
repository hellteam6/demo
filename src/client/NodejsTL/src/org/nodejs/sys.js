/**
 * 
 */
//> public ;  // exported from module sys.js
vjo.ctype('org.nodejs.sys') 
//> needs(org.nodejs.fs.ReadableStream)
//> needs(org.nodejs.fs.WriteableStream)
.protos({
	/**
	 * Like console.log() but without the trailing newline.
	 * <pre>
	 * require('sys').print('String with no newline');
	 * </pre>
	 */
	//> public void print(Object... args)
	print: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public void puts(Object... args)
	puts: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public void puts(Object... args) ; deprecated - use puts(...)
	p: vjo.NEEDS_IMPL,	// MrP: deprecated - use puts(...)
	
	/**
	 * A synchronous output function. Will block the process and output 
	 * string immediately to stderr.
	 */
	//> public void debug(Object x)
	debug: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public void error(Object... args)
	error: vjo.NEEDS_IMPL,
	
	/**
	 * Return a string representation of object, which is useful for debugging.
	 * <p>If showHidden is true, then the object's non-enumerable properties will be shown too.
	 * <p>If depth is provided, it tells inspect how many times to recurse while formatting the object. 
	 * This is useful for inspecting large complicated objects.
	 * The default is to only recurse twice. To make it recurse indefinitely, pass in null for depth.
	 * <p>colors Flag turns on ANSI escape codes to color the output. Default is false (no coloring).
	 * <p>Example of inspecting all properties of the sys object:
	 * <pre>
	 * var sys = require('sys');
	 * console.log(sys.inspect(sys, true, null));
	 * </pre>
	 */
	//> public void inspect(Object obj, boolean? showHidden, int? depth, boolean? colors)
	inspect: vjo.NEEDS_IMPL,
	
	/**
	 * Output with timestamp on stdout.
	 * <pre>
	 * require('sys').log('Timestmaped message.');
	 * </pre>
	 */
	//> public void log(Object msg)
	log: vjo.NEEDS_IMPL,
	
	/**
	 * @deprecated
	 * sys.exec has moved to the "child_process" module. 
	 */
	//> public Object exec()
	exec: vjo.NEEDS_IMPL,  // MrP: deprecated, moved to child_process module
	
	/**
	 * Experimental
	 * <p>Read the data from readableStream and send it to the writableStream. 
	 * When writeableStream.write(data) returns false readableStream will be 
	 * paused until the drain event occurs on the writableStream. callback gets 
	 * an error as its only argument and is called when writableStream is closed 
	 * or when an error occurs.
	 */
	//> public void pump(ReadableStream rs, WriteableStream ws, Function? callback)
	pump: vjo.NEEDS_IMPL,
	
	/**
	 * Inherit the prototype methods from one constructor into another.
	 * <p>
	 * The Function.prototype.inherits from lang.js rewritten as a standalone
	 * function (not on Function.prototype). NOTE: If this file is to be loaded
	 * during bootstrapping this function needs to be revritten using some native
	 * functions as prototype setup using normal JavaScript does not work as
	 * expected during bootstrapping (see mirror.js in r114903).
	 * <p>ctor is the Constructor function which needs to inherit the prototype
	 * <p>superCtor is the Constructor function to inherit prototype from
	 */
	//> public void inherits(Function ctor, Function superCtor)
	inherits: vjo.NEEDS_IMPL
})
.options({
	metatype: true
})
.endType();