/**
 * These functions are in the module 'util'. Use require('util') to access them.
 */
//> public
vjo.ctype('org.nodejs.util') 
//> needs(org.nodejs.fs.ReadableStream)
//> needs(org.nodejs.fs.WriteableStream)
.protos({
	/**
	 * util.print(string)
	 * <p>Like console.log() but without the trailing newline.
	 * <pre>
	 * require('util').print('String with no newline');
	 * </pre>
	 */
	//> public void print(Object... values)
	print: vjo.NEEDS_IMPL,
	
	/**
	 * Same as print(...) but adds a newline after each outputted value.
	 */
	//> public void puts(Object... values)
	puts: vjo.NEEDS_IMPL,
	
	/**
	 * Output each value via stdio's writeError(...) followed by a newline.
	 */
	//> public void error(Object... values)
	error: vjo.NEEDS_IMPL,
	
	/**
	 * util.debug(string)
	 * <p>A synchronous output function. Will block the process and output 
	 * string immediately to stderr.
	 * <pre>
	 * require('util').debug('message on stderr');
	 * </pre>
	 */
	//> public void debug(Object obj)
	debug: vjo.NEEDS_IMPL,
	
	/**
	 * util.log(string)
	 * <p>Output with timestamp on stdout.
	 * <pre>
	 * require('util').log('Timestmaped message.');
	 * </pre>
	 */
	//> public void log(Object value)
	log: vjo.NEEDS_IMPL,
	
	/**
	 * Moved to child_process, use that version.
	 */
	//> public Object exec(Object... objs)
	exec: vjo.NEEDS_IMPL,
	
	/**
	 * util.inspect(object, showHidden=false, depth=2)
	 * <p>Return a string representation of object, which is useful for debugging.
	 * <p>If showHidden is true, then the object's non-enumerable properties 
	 * will be shown too.
	 * <p>If depth is provided, it tells inspect how many times to recurse while f
	 * ormatting the object. This is useful for inspecting large complicated objects.
	 * <p>The default is to only recurse twice. To make it recurse indefinitely, 
	 * pass in null for depth.
	 * <p>Example of inspecting all properties of the util object:
	 * <pre>
	 * var util = require('util');
	 * console.log(util.inspect(util, true, null));
	 * </pre>
	 */
	//> public void inspect(Object object, boolean? showHidden, int? depth)
	inspect: vjo.NEEDS_IMPL,
	
	/**
	 * Will be deprecated shortly.  Use util.puts(util.inspected()) instead.
	 */
	//> public void p(Object... objs)
	p: vjo.NEEDS_IMPL,
	
	/**
	 * util.pump(readableStream, writeableStream, [callback])
	 * <p>Experimental
	 * <p>Read the data from readableStream and send it to the writableStream. 
	 * When writeableStream.write(data) returns false readableStream will be 
	 * paused until the drain event occurs on the writableStream. callback gets 
	 * an error as its only argument and is called when writableStream is closed 
	 * or when an error occurs.
	 */
	//> public void pump(ReadableStream rs, WriteableStream ws, Function? callback)
	pump: vjo.NEEDS_IMPL,
	
	/**
	 * Inherit the prototype methods from one constructor into another. The 
	 * prototype of constructor will be set to a new object created from 
	 * superConstructor.
	 * <p>
	 * As an additional convenience, superConstructor will be accessible through 
	 * the constructor.super_ property.
	 * <pre>
	 * var util = require("util") ;
	 * var events = require("events");
	 * 
	 * function MyStream() {
	 *   events.EventEmitter.call(this);
	 * }
	 * 
	 * util.inherits(MyStream, events.EventEmitter);
	 * 
	 * MyStream.prototype.write = function(data) {
	 *   this.emit("data", data);
	 * }
	 * 
	 * var stream = new MyStream();
	 * console.log(stream instanceof events.EventEmitter); // true
	 * console.log(MyStream.super_ === events.EventEmitter); // true
	 * 
	 * stream.on("data", function(data) {
	 *   console.log('Received data: "' + data + '"');
	 * })
	 * stream.write("It works!"); // Received data: "It works!"
	 * </pre>
	 */
	//> public void inherits(Function constructor, Function superConstructor)
	inherits: vjo.NEEDS_IMPL
})
.options({
	metatype: true
})
.endType();