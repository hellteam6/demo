/** A repl library that you can include in your own code to get a runtime
 * interface to your program.
 * <p>
 * <pre>
 *   var repl = require("/repl.js");
 *   // start repl on stdin
 *   repl.start("prompt> ");
 *
 *   // listen for unix socket connections and start repl on them
 *   net.createServer(function (socket) {
 *     repl.start("node via Unix socket> ", socket);
 *   }).listen("/tmp/node-repl-sock");
 *
 *   // listen for TCP socket connections and start repl on them
 *   net.createServer(function (socket) {
 *     repl.start("node via TCP socket> ", socket);
 *   }).listen(5001);
 *
 *   // expose foo to repl context
 *   repl.start("node > ").context.foo = "stdin is fun";
 *  </pre>
 */
//> public
vjo.ctype('org.nodejs.repl') 
//> needs(org.nodejs.fs.ReadableStream)
.props({
	// vvvvvvvvvvvvvvvvvvvvv NESTED TYPES vvvvvvvvvvvvvvvvvvvv
	/**
	 * A repl library that you can include in your own code to get a runtime
	 * interface to your program.
	 * 
	 * <pre>
	 * var repl = require("/repl.js");
	 * repl.start("prompt> ");  // start repl on stdin
	 * net.createServer(function (socket) { // listen for unix socket connections and start repl on them
	 *   repl.start("node via Unix socket> ", socket);
	 * }).listen("/tmp/node-repl-sock");
	 * net.createServer(function (socket) { // listen for TCP socket connections and start repl on them
	 *   repl.start("node via TCP socket> ", socket);
	 * }).listen(5001);
	 * 
	 * repl.start("node > ").context.foo = "stdin is fun";  // expose foo to repl context
	 */
	//> public 
	REPLServer: vjo.ctype()
		//> needs(org.nodejs.fs.ReadableStream)
		.protos({
			/**
			 * 
			 */
			//> public Object ; MrP internal member from code	
			context: null,	
			
			/**
			 * 
			 */
			//> public REPLServer start(String? prompt, ReadableStream? source)
			constructs: function() {},
			
			/**
			 * 
			 */
			//> public void displayPrompt()
			displayPrompt: vjo.NEEDS_IMPL,
			
			/**
			 * Associate the passed in function with the keyword.
			 */
			//> public void defineCommand(String keyword, Function cmd)
			defineCommand: vjo.NEEDS_IMPL,
			
			/**
			 * Read a line from the stream, then eval it
			 */
			//> public void readline(String cmd)
			readline: vjo.NEEDS_IMPL,
			
			/**
			 * Provide a list of completions for the given leading text. This is
			 * given to the readline interface for handling tab completion.
			 *
			 * @param {line} The text (preceding the cursor) to complete
			 * @returns {Array} Two elements: (1) an array of completions; and
			 *    (2) the leading text completed.
			 *
			 * <pre>
			 *  complete('var foo = sys.')
			 *    -> [['sys.print', 'sys.debug', 'sys.log', 'sys.inspect', 'sys.pump'],
			 *        'sys.' ]
			 * </pre>
			 * Warning: This eval's code like "foo.bar.baz", so it will run property
			 * getter code.
			 */
			//> public void complete(String line)
			complete: vjo.NEEDS_IMPL,
			
			/**
			 * Used to parse and execute the Node REPL commands
			 * <p> cmd - The command entered to check
			 * <p> Returns true to mean don't continue parsing the command
			*/
			//> public boolean parseREPLKeyword(String cmd)
			parseREPLKeyword: vjo.NEEDS_IMPL,
			
			/**
			 * 
			 */
			//> public String trimWhitespace(String cmd)
			trimWhitespace: vjo.NEEDS_IMPL,
			
			/**
			 * 
			 */
			//> public String regexpEscape(String s)
			regexpEscape: vjo.NEEDS_IMPL,
			
			/**
			 * Converts commands that use var and function <name>() to use the local 
			 * exports.context when evaled. This provides a local context on the REPL.
			 * Takes the cmd in to and returns the converted command.
			 */
			//> public String convertToText(String cmd)
			convertToText: vjo.NEEDS_IMPL
		})
	.endType()
	// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
})
.protos({
	// vvvvvvvvvvvvvv  Exported Types  vvvvvvvvvvvvvvv
	/**
	 * 
	 */
	//> public type::repl.REPLServer
	REPLServer: null, 
	// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
	
	/**
	 * prompt is a string to print on each line for the prompt,
	 * source is a stream to use for I/O, defaulting to stdin/stdout.
	 */
	//> public repl.REPLServer start(String? prompt, ReadableStream? source)
	start: vjo.NEEDS_IMPL,
	
	/**
	 * This is the same as util.inspect(...)
	 * <p>
	 * write(object, showHidden=false, depth=2)
	 * <p>Return a string representation of object, which is useful for debugging.
	 * <p>If showHidden is true, then the object's non-enumerable properties 
	 * will be shown too.
	 * <p>If depth is provided, it tells inspect how many times to recurse while f
	 * ormatting the object. This is useful for inspecting large complicated objects.
	 * <p>The default is to only recurse twice. To make it recurse indefinitely, 
	 * pass in null for depth.
	 */
	//> public void write(Object object, boolean? showHidden, int? depth)
	write: vjo.NEEDS_IMPL
})
.options({
	metatype: true
})
.endType();