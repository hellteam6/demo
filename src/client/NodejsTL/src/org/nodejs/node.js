// top-level module is node.js.  We expose built-in global entities that 
// node.js provides out-of-the-box.  
/**
 * 
 */
//> public
vjo.ctype('org.nodejs.node') 
//> needs(org.nodejs.buffer.Buffer)
.globals({ 
	/**
	 * The global namespace object.
	 */
	//> public Object
	global: null,	
	//> public Object
	GLOBAL: null,
	//> public Object
	root: null,
	
	/**
	 * The process object.
	 */
	//> public node.Process
	process: null,		
	
	/**
	 * Common.js implementation of require
	 */
	//> public type::node.require
	require: null,		
	
	/**
	 * The filename of the script being executed. This is the absolute path, and not 
	 * necessarily the same filename passed in as a command line argument.
	 * <p>
	 * Example: running node example.js from /Users/mjr
	 * <pre>
	 * console.log(__filename);
	 * // /Users/mjr/example.js
	 * </pre>
	 */
	//> public String
	__filename: null,	
	
	/**
	 * The dirname of the script being executed.
	 * <p>Example: running node example.js from /Users/mjr
	 * <pre>
	 * console.log(__dirname);
	 * // /Users/mjr
	 * </pre>
	 */
	//> public String
	__dirname: null,	
	
	/**
	 * A reference to the current module (of type process.Module). In particular 
	 * module.exports is the same as the exports object. 
	 */
	//> public node.Module
	module: null,		
	
	/**
	 * 
	 */
	//> public void addTimerListener(Function callback)
	addTimerListener: vjo.NEEDS_IMPL,

	/**
	 * 
	 */
	//> public Timer setTimeout(Function callback, Object... args)
	setTimeout: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Timer setInterval(Function callback, int? repeat)
	setInterval: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public void clearTimeout(Timer timer)
	clearTimeout: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public void clearInterval(Timer timer) ; same func as clearTimeout
	clearInterval: vjo.NEEDS_IMPL,
	
	// More from node.js..
	/**
	 * 
	 */
	//> public org.nodejs.console
	console: null,	
	
	/**
	 * 
	 */
	//> public type::Buffer
	Buffer: null,	
	
	/**
	 * 
	 */
	//> public Object
	exports: null,	
	
	/**
	 * 
	 */
	//> public node.Timer
	Timer: null	
})
.props({
	// vvvvvvvvvvvvvvvvvvvvvvvv NESTED TYPES vvvvvvvvvvvvvvvvvvvvvvv
	/**
	 * 
	 */
	//> public
	Timer: vjo.ctype()
		.props({

		})
		.protos({	
			/**
			 * Does not start the time, just sets up the members needed.
			 */
			//> public void enroll(Object item, int msecs)
			enroll: vjo.NEEDS_IMPL,
			
			/**
			 * 
			 */
			//> public void unenroll(Object item)
			unenroll: vjo.NEEDS_IMPL,
			
			/**
			 * Call this whenever the item is active (not idle) it will reset 
			 * its timeout.
			 */
			//> public void active(Object item)
			active: vjo.NEEDS_IMPL,
			
			/**
			 * 
			 */
			//> public void active(Object item)
			item: vjo.NEEDS_IMPL,
			
			/**
			 * setTimeout(callback, delay, [arg], [...])
			 * <p>To schedule execution of callback after delay milliseconds. Returns a 
			 * timeoutId for possible use with clearTimeout(). Optionally, you can also 
			 * pass arguments to the callback.
			 */
			//> public Timer setTimeout(Function callback, int delay, Object... arguments)
			setTimeout: vjo.NEEDS_IMPL,
			
			/**
			 * clearTimeout(timeoutId)
			 * <p>Prevents a timeout from triggering.
			 */
			//> public void clearTimeout(Timer timeoutId)
			clearTimeout: vjo.NEEDS_IMPL,
			
			/**
			 * setInterval(callback, delay, [arg], [...])
			 * <p>To schedule the repeated execution of callback every delay milliseconds. 
			 * Returns a intervalId for possible use with clearInterval(). Optionally, 
			 * you can also pass arguments to the callback.
			 */
			//> public Timer setInterval(Function callback, int delay, Object... arguments)
			setInterval: vjo.NEEDS_IMPL,
			
			/**
			 * clearInterval(intervalId)
			 * <p>Stops a interval from triggering.
			 */
			//> public void clearInterval(Timer intervalId)
			clearInterval: vjo.NEEDS_IMPL
		})
		.options({
			metatype: true
		})
	.endType(),
	
	/**
	 * 
	 */
	//> public
	require: vjo.ftype()
		.props({
			/**
			 * The "require" function accepts a module identifier.
			 * "require" returns the exported API of the foreign module.
			 * If there is a dependency cycle, the foreign module may not have finished 
			 * executing at the time it is required by one of its transitive dependencies;
			 * in this case, the object returned by "require" must contain at least the exports
			 * that the foreign module has prepared before the call to require that led to the 
			 * current module's execution.
			 * <p>
			 * If the requested module cannot be returned, "require" must throw an error. 
			 */
			//> public ^Object _invoke_(String moduleIdentifier)
			_invoke_: vjo.NEEDS_IMPL,
			
			/**
			 * "paths" attribute is a prioritized Array of path Strings, from high to low, of 
			 * paths to top-level module directories.
			 * <p>
			 * <ol>
			 * <li>The "paths" property must not exist in "sandbox" (a secured module system).
			 * <li>The "paths" attribute must be referentially identical in all modules.
			 * <li>Replacing the "paths" object with an alternate object may have no effect.
			 * <li>If the "paths" attribute exists, in-place modification of the contents of "paths" 
			 *   must be reflected by corresponding module search behavior.
			 * <li>If the "paths" attribute exists, it may not be an exhaustive list of search paths,
			 *   as the loader may internally look in other locations before or after the mentioned paths.
			 * <li>If the "paths" attribute exists, it is the loader's prorogative to resolve, normalize, 
			 *   or canonicalize the paths provided. 
			 * </ol>
			 */
			//> public String[]
			paths: null,	
			
			/**
			 * Answer the path that contains the passed in Module Indentifier or return null.
			 */
			//> public String resolve(String moduleIdentifier)
			resolve: vjo.NEEDS_IMPL ,
			
			/**
			 * 
			 */
			//> public void async(String url, Function callback)
			async: vjo.NEEDS_IMPL,
			
			/**
			 *    { id: '.'
			 *    , exports: {}
			 *    , parent: undefined
			 *    , moduleCache: { '/home/mrp/Desktop/vjo/src/vjob.js': [Object] }
			 *    , filename: '/home/mrp/Desktop/vjo/src/ex/hello.js'
			 *    , loaded: false
			 *    , exited: false
			 *    , children: []
			 *    }
			 */
			//> public Object
			main: null,		
			
			/**
			 * This function allows the user to register file extensions to custom
			 * Javascript 'compilers'.  It accepts 2 arguments, where ext is a file
			 * extension as a string. E.g. '.coffee' for coffee-script files.  compiler
			 * is the second argument, which is a function that gets called when the
			 * specified file extension is found. The compiler is passed a single
			 * argument, which is, the file contents, which need to be compiled.
			 * <p>
			 * The function needs to return the compiled source, or an non-string
			 * variable that will get attached directly to the module exports. Example:
			 * <pre>
			 * require.registerExtension('.coffee', function(content) {
			 *   return doCompileMagic(content);
			 * });
			 * </pre>
			 */
			//> public void registerExtension(String name, Function compiler) ; throws Error
			registerExtension: vjo.NEEDS_IMPL
		})
		.options({
			metatype: true
		})
	.endType(),
		
	/**
	 * 
	 */
	//> public
	Module: vjo.ctype()
		.props({
			/**
			 * For backwards compatibility
			 */
			//> public type::Module
			Module: null,
			
			/**
			 * 
			 */
			//> public void runMain(Object...)
			runMain: vjo.NEEDS_IMPL
		})
		.protos({
			// From Module spec
			/**
			 * 
			 */
			//> public String
			id: null,			
			/**
			 * 
			 */
			//> public String
			uri: null,		
			
			
			// From code...
			/**
			 * 
			 */
			//> public boolean
			loaded: false,		
			/**
			 * 
			 */
			//> public String
			filename: null,		
			/**
			 * 
			 */
			//> public boolean
			exited: false,		
			/**
			 * 
			 */
			//> public Module
			parent: null,		
			/**
			 * 
			 */
			//> public Module[]
			children: null,		
			/**
			 * 
			 */
			//> public Object
			exports: null,		
			
			/**
			 * 
			 */
			//> public boolean statPath(String path)
			 statPath: vjo.NEEDS_IMPL,
			 
			/**
			 * { '/home/mrp/Desktop/vjo/src/vjob.js': 
			 *   { id: '../vjob'
			 *     , exports: [Object]
			 *     , parent: [Circular]
			 *     , moduleCache: [Circular]
			 *     , filename: '/home/mrp/Desktop/vjo/src/vjob.js'
			 *     , loaded: true
			 *     , exited: false
			 *     , children: []
			 *   }
			 * }
			 */
			 //> public Object
			moduleCache: null,	
			
			/**
			 * Calls the callback when the Module has loaded.
			 */
			//> public void load(String filename, Function callback)
			load: vjo.NEEDS_IMPL, 	
			
			/**
			 * Loads the module synchronously 
			 */
			//> public void loadSync(String filename)
			loadSync: vjo.NEEDS_IMPL,
			
	//		//> public void _loadObjectSync(String filename)
	//		_loadObjectSync: vjo.NEEDS_IMPL,	
			
	//		//> public void _loadObject(String filename, Function callback)
	//		_loadObject: vjo.NEEDS_IMPL, 
			
	//		//> public void cat(String id, Function callback)
	//		cat: function(id, callback) {},		
			
			/**
			 * 
			 */
			//> public void _compile(String content, String filename)
			_compile: vjo.NEEDS_IMPL 
			
	//		//> public void _loadScriptSync(String filename)
	//		_loadScriptSync: vjo.NEEDS_IMPL,	
			
	//		//> public void _waitChildrenLoad(Function callback)
	//		_waitChildrenLoad: vjo.NEEDS_IMPL
		})
	.endType(),
	

	
	/**
	 * 
	 */
	//> public
	Process: vjo.ctype()
		//> needs(org.nodejs.fs.ReadableStream)
		//> needs(org.nodejs.fs.WriteableStream)
		//> needs(org.nodejs.events.EventEmitter)
		.inherits('org.nodejs.events.EventEmitter<Process>')
		.props({
			/**
			 * 
			 */
			//> public
			data: vjo.otype().defs({	
				/**
				 * 
				 */
				//> public
				memoryUsage: {	
					/**
					 * 
					 */
					//> public Number
					rss: null,			
					/**
					 * 
					 */
					//> public Number
					vsize: null,		
					/**
					 * 
					 */
					//> public Number
					heapTotal: null,	
					/**
					 * 
					 */
					//> public Number
					heapUsed: null		
				}
			}).endType(),
			
			event: vjo.otype().defs({
				/**
				 * function () {}
				 * <p>Emitted when the process is about to exit. This is a good hook to 
				 * perform constant time checks of the module's state (like for unit 
				 * tests). The main event loop will no longer be run after the 'exit' 
				 * callback finishes, so timers may not be scheduled.
				 * <p>Example of listening for exit:
				 * <pre>
				 * process.on('exit', function () {
				 *   process.nextTick(function () {
				 *     console.log('This will not run');
				 *   });
				 *   console.log('About to exit.');
				 * });
				 * </pre>
				 */
				//> public void exit()
				exit: vjo.NEEDS_IMPL,
				
				/**
				 * function (err) { }
				 * <p>Emitted when an exception bubbles all the way back to the event 
				 * loop. If a listener is added for this exception, the default action 
				 * (which is to print a stack trace and exit) will not occur.
				 * <p>Example of listening for uncaughtException:
				 * <pre>
				 * process.on('uncaughtException', function (err) {
				 *   console.log('Caught exception: ' + err);
				 * });
				 * setTimeout(
				 *   function () { 
				 *     console.log('This will still run.'); 
				 *   }, 500
				 * );
				 * 
				 * // Intentionally cause an exception, but don't catch it.
				 * nonexistentFunc();
				 * console.log('This will not run.');
				 * </pre>
				 * Note that uncaughtException is a very crude mechanism for exception 
				 * handling. Using try / catch in your program will give you more control 
				 * over your program's flow. Especially for server programs that are 
				 * designed to stay running forever, uncaughtException can be a useful 
				 * safety mechanism.
				 */
				//> public void uncaughtException(Error? err)
				uncaughtException: vjo.NEEDS_IMPL,
				
				/**
				 * function () {}
				 * <p>Emitted when the processes receives a signal. See sigaction(2) 
				 * for a list of standard POSIX signal names such as SIGINT, SIGUSR1, etc.
				 * <p>Example of listening for SIGINT:
				 * <pre>
				 * var stdin = process.openStdin();
				 * process.on('SIGINT', function () {
				 *   console.log('Got SIGINT.  Press Control-D to exit.');
				 * });
				 * </pre>
				 * An easy way to send the SIGINT signal is with Control-C in most 
				 * terminal programs
				 */
				//> public void signal()
				signal: vjo.NEEDS_IMPL
			}).endType()
		})
		.protos({
			/**
			 * process.stdout
			 * <p>A Writable Stream to stdout.
			 * <p>Example: the definition of console.log
			 * <pre>
			 * console.log = function (d) {
			 *   process.stdout.write(d + '\n');
			 * };
			 * </pre>
			 */
			//> public WriteableStream
			stdout: null,	
			
			/**
			 * A writable stream to stderr. Writes on this stream are blocking
			 */
			//> public WriteableStream
			stderr: null,
			
			/**
			 * A Readable Stream for stdin. The stdin stream is paused by 
			 * default, so one must call process.stdin.resume() to read from it.
			 * <p>Example of opening standard input and listening for both events:
			 * <pre>
			 * process.stdin.resume();
			 * process.stdin.setEncoding('utf8');
			 * process.stdin.on('data', function (chunk) {
			 *   process.stdout.write('data: ' + chunk);
			 * });
			 * 
			 * process.stdin.on('end', function () {
			 *   process.stdout.write('end');
			 * });
			 * </pre>
			 */
			//> public ReadableStream
			stdin: null,	
			
			/**
			 * process.openStdin()
			 * <p>Opens the standard input stream, returns a Readable Stream.
			 * <p>Example of opening standard input and listening for both events:
			 * <pre>
			 * var stdin = process.openStdin();
			 * stdin.setEncoding('utf8');
			 * stdin.on('data', function (chunk) {
			 *   process.stdout.write('data: ' + chunk);
			 * });
			 * stdin.on('end', function () {
			 *   process.stdout.write('end');
			 * });
			 */
			//> public ReadableStream openStdin()
			openStdin: vjo.NEEDS_IMPL,
			
			/**
			 * process.argv
			 * <p>An array containing the command line arguments. The first element will 
			 * be 'node', the second element will be the name of the JavaScript file. 
			 * The next elements will be any additional command line arguments.
			 * // print process.argv
			 * <pre>
			 * process.argv.forEach(function (val, index, array) {
			 *   console.log(index + ': ' + val);
			 * });
			 * </pre>
			 * <p>
			 * This will generate:
			 * <pre>
			 * $ node process-2.js one two=three four
			 * 0: node
			 * 1: /Users/mjr/work/node/process-2.js
			 * 2: one
			 * 3: two=three
			 * 4: four
			 * </pre>
			 */
			//> public String[]
			argv: null,		
			/**
			 * 
			 */
			//> public String[]
			ARGV: null,		
			
			/**
			 * process.execPath
			 * <p>This is the absolute pathname of the executable that started the 
			 * process.
			 * <p>Example: /usr/local/bin/node
			 *
			 */
			//> public String
			execPath: null,	
			
			/**
			 * process.chdir(directory)
			 * <p>Changes the current working directory of the process or throws an 
			 * exception if that fails.
			 * <pre>
			 * console.log('Starting directory: ' + process.cwd());
			 * try {
			 *   process.chdir('/tmp');
			 *   console.log('New directory: ' + process.cwd());
			 * }
			 * catch (err) {
			 *   console.log('chdir: ' + err);
			 * }
			 * </pre>
			 */
			//> public void chdir(String directory)
			chdir: vjo.NEEDS_IMPL,
			
			/**
			 * process.compile(code, filename)
			 * <p>Similar to eval except that you can specify a filename for better 
			 * error reporting and the code cannot see the local scope. The value of 
			 * filename will be used as a filename if a stack trace is generated by the 
			 * compiled code.
			 * <p>Example of using process.compile and eval to run the same code:
			 * <pre>
			 * var localVar = 123, compiled, evaled;
			 * compiled = process.compile('localVar = 1;', 'myfile.js');
			 * console.log('localVar: ' + localVar + ', compiled: ' + compiled);
			 * evaled = eval('localVar = 1;');
			 * console.log('localVar: ' + localVar + ', evaled: ' + evaled);
			 * // localVar: 123, compiled: 1
			 * // localVar: 1, evaled: 1
			 * </pre>
			 * <p>process.compile does not have access to the local scope, so localVar 
			 * is unchanged. eval does have access to the local scope, so localVar is 
			 * changed.
			 * <p>In case of syntax error in code, process.compile exits node.
			 * <p>See also: Script
			 */
			//> public Object compile(String code, String filename)
			compile: vjo.NEEDS_IMPL,
			
			/**
			 * process.cwd()
			 * <p>Returns the current working directory of the process.
			 * <pre>
			 * console.log('Current directory: ' + process.cwd());
			 * </pre>
			 */
			//> public String cwd()
			cwd: vjo.NEEDS_IMPL,
			
			/**
			 * process.env
			 * <p>An object containing the user environment. See environ(7).
			 */
			//> public Object ; // MrP: what is this struct look like...?
			env: null,		
			
			/**
			 * process.exit(code=0)
			 * <p>Ends the process with the specified code. If omitted, exit uses the 
			 * 'success' code 0.
			 * <p>To exit with a 'failure' code:
			 * <pre>
			 * process.exit(1);
			 * </pre>
			 * <p>The shell that executed node should see the exit code as 1.
			 */
			//> public void exit(int? code)
			exit: vjo.NEEDS_IMPL,
			
			/**
			 * From internal code...
			 */
			//> public void reallyExit(int? code)
			reallyExit: vjo.NEEDS_IMPL,
			
			/**
			 * process.getgid()
			 * <p>Gets the group identity of the process. (See getgid(2).) This is the 
			 * numerical group id, not the group name.
			 * <pre>
			 * console.log('Current gid: ' + process.getgid());
			 * </pre>
			 */
			//> public int getgid()
			getgid: vjo.NEEDS_IMPL,
			
			/**
			 * process.setgid(id)
			 * <p>Sets the group identity of the process. (See setgid(2).) This accepts 
			 * either a numerical ID or a groupname string. If a groupname is specified, 
			 * this method blocks while resolving it to a numerical ID.
			 * <pre>
			 * console.log('Current gid: ' + process.getgid());
			 * try {
			 *   process.setgid(501);
			 *   console.log('New gid: ' + process.getgid());
			 * }
			 * catch (err) {
			 *   console.log('Failed to set gid: ' + err);
			 * }
			 * </pre>
			 */
			//> public void setgid({String | int} id)
			setgid: vjo.NEEDS_IMPL,
			
			/**
			 * process.getuid()
			 * <p>Gets the user identity of the process. (See getuid(2).) This is the 
			 * numerical userid, not the username.
			 * <pre>
			 * console.log('Current uid: ' + process.getuid());
			 * </pre>
			 */
			//> public int getuid()
			getuid: vjo.NEEDS_IMPL,
			
			/**
			 * process.setuid(id)
			 * <p>Sets the user identity of the process. (See setuid(2).) This accepts 
			 * either a numerical ID or a username string. If a username is specified, 
			 * this method blocks while resolving it to a numerical ID.
			 * <pre>
			 * console.log('Current uid: ' + process.getuid());
			 * try {
			 *   process.setuid(501);
			 *   console.log('New uid: ' + process.getuid());
			 * }
			 * catch (err) {
			 *   console.log('Failed to set uid: ' + err);
			 * }
			 * </pre>
			 */
			//> public void setuid({String | int} id)
			setuid: vjo.NEEDS_IMPL,
			
			/**
			 * process.version
			 * <p>A compiled-in property that exposes NODE_VERSION.
			 * <pre>
			 * console.log('Version: ' + process.version);
			 * </pre>
			 */
			//> public String
			version: null,	
			
			/**
			 * 
			 */
			//> public Object 
			versions: null,	
			
			/**
			 * process.installPrefix
			 * <p>A compiled-in property that exposes NODE_PREFIX.
			 * <pre>
			 * console.log('Prefix: ' + process.installPrefix);
			 * </pre>
			 */
			//> public String
			installPrefix: null,	
			
			/**
			 * process.kill(pid, signal='SIGINT')
			 * <p>Send a signal to a process. pid is the process id and signal is the 
			 * string describing the signal to send. Signal names are strings like 
			 * 'SIGINT' or 'SIGUSR1'. If omitted, the signal will be 'SIGINT'. See 
			 * kill(2) for more information.
			 * <p>Note that just because the name of this function is process.kill, it 
			 * is really just a signal sender, like the kill system call. The signal 
			 * sent may do something other than kill the target process.
			 * <p>Example of sending a signal to yourself:
			 * <pre>
			 * process.on('SIGHUP', function () {
			 *   console.log('Got SIGHUP signal.');
			 * });
			 * setTimeout(function () {
			 *   console.log('Exiting.');
			 *   process.exit(0);
			 * }, 100);
			 * process.kill(process.pid, 'SIGHUP');
			 * </pre>
			 */
			//> public void kill(String pid, String? signal)
			kill: vjo.NEEDS_IMPL,
			
			/**
			 * process.pid
			 * <p>The PID of the process.
			 * <pre>
			 * console.log('This process is pid ' + process.pid);
			 * </pre>
			 */
			//> public String
			pid: null,	
			
			/**
			 * process.title
			 * <p>Getter/setter to set what is displayed in 'ps'.
			 */
			//> public String
			title: null,	
			
			/**
			 * process.platform
			 * <p>What platform you're running on. 'linux2', 'darwin', etc.
			 * <pre>
			 * console.log('This platform is ' + process.platform);
			 * </pre>
			 */
			//> public String
			platform: null,	
			
			/**
			 * process.memoryUsage()
			 * <p>Returns an object describing the memory usage of the Node process.
			 * <pre>
			 * var util = require('util');
			 * console.log(util.inspect(process.memoryUsage()));
			 * </pre>
			 * <p>This will generate:
			 * <pre>
			 * { rss: 4935680
			 * , vsize: 41893888
			 * , heapTotal: 1826816
			 * , heapUsed: 650472
			 * }
			 * </pre>
			 * <p>heapTotal and heapUsed refer to V8's memory usage.
			 */
			//> public node.Process.data.memoryUsage memoryUsage() ; MrP??? Should define Object Literal
			memoryUsage: vjo.NEEDS_IMPL,
			
			/**
			 * process.nextTick(callback)
			 * <p>On the next loop around the event loop call this callback. This is not 
			 * a simple alias to setTimeout(fn, 0), it's much more efficient.
			 * <pre>
			 * process.nextTick(function () {
			 *   console.log('nextTick callback');
			 * });
			 * </pre>
			 */
			//> public void nextTick(Function callback)
			nextTick: vjo.NEEDS_IMPL,
			
			/**
			 * process.umask([mask])
			 * <p>Sets or reads the process's file mode creation mask. Child processes 
			 * inherit the mask from the parent process. Returns the old mask if mask 
			 * argument is given, otherwise returns the current mask.
			 * <pre>
			 * var oldmask, newmask = 0644;
			 * oldmask = process.umask(newmask);
			 * console.log('Changed umask from: ' + oldmask.toString(8) +
			 *    ' to ' + newmask.toString(8));
			 * </pre>
			 */
			//> public int umask(int? mask) ;	//MrP: define mask as OL?
			umask: vjo.NEEDS_IMPL,
			
			/**
			 * 
			 */
			//> type::node.Timer ; // others from console.log(process)...
			Timer: null,			
			
			/**
			 * 
			 */
			//> public void dlopen(String filename, Object exports)
			dlopen: vjo.NEEDS_IMPL,
			
			/**
			 * 
			 */
			//> public Object binding(String module)
			binding: vjo.NEEDS_IMPL,
			
			/**
			 * 
			 */
			//> public Object ; {id:'.', parent:undefined, loaded:false, ...}
			mainModule: null,	
			
			// These are deprecated functions...
			/** process.debug() has moved. Use require('sys') to bring it back. */ 
			//> public void debug()
			debug: vjo.NEEDS_IMPL,				
			
			/** process.error() has moved. Use require('sys') to bring it back. */
			//> public void error()
			error: vjo.NEEDS_IMPL,				
			
			/** process.watchFile() has moved to fs.watchFile() */
			//> public void watchFile()
			watchFile: vjo.NEEDS_IMPL,			
			
			/** process.unwatchFile() has moved to fs.unwatchFile() */
			//> public void unwatchFile()
			unwatchFile: vjo.NEEDS_IMPL,		
			
			/** process.mixin() has been removed. */
			//> public void mixin()
			mixin: vjo.NEEDS_IMPL,				
			
			/** childProcess API has changed. See doc/api.txt. */
			//> public void createChildProcess()
			createChildProcess: vjo.NEEDS_IMPL, 
			
			/** process.inherits() has moved to sys.inherits. */
			//> public void inherits()
			inherits: vjo.NEEDS_IMPL			
			
			// There is a large number of constants defined as well when you do a
			// console.log(process).  These constants though are not part of any
			// of the source module .js's.
			
		})
	.endType()
	// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
})
.options({
	metatype: true
})
.endType();