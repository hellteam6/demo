/**
 * Node provides a tri-directional popen(3) facility through the ChildProcess 
 * class.
 * <p>It is possible to stream data through the child's stdin, stdout, and 
 * stderr in a fully non-blocking way.
 * <p>To create a child process use require('child_process').spawn().
 * <p>Child processes always have three streams associated with them. 
 * child.stdin, child.stdout, and child.stderr.
 * <p>
 * ChildProcess is an EventEmitter.
 * <p>
 * Event: 'exit' function (code, signal) {}
 * <p>
 * This event is emitted after the child process ends. If the process terminated 
 * normally, code is the final exit code of the process, otherwise null. If the 
 * process terminated due to receipt of a signal, signal is the string name of 
 * the signal, otherwise null.
 */
//> public
vjo.ctype('org.nodejs.child_process') 
//> needs(org.nodejs.fs.ReadableStream)
//> needs(org.nodejs.fs.WriteableStream)
.props({
	// vvvvvvvvvvvvvvvvvvvvvvv NESTED TYPES vvvvvvvvvvvvvvvvvvvvvvvv
	/**
	 * Node provides a tri-directional popen(3) facility through the ChildProcess 
	 * class.
	 * <p>It is possible to stream data through the child's stdin, stdout, and 
	 * stderr in a fully non-blocking way.
	 * <p>To create a child process use require('child_process').spawn().
	 * <p>Child processes always have three streams associated with them. 
	 * child.stdin, child.stdout, and child.stderr.
	 * <p>
	 * ChildProcess is an EventEmitter.
	 * <p>
	 * Event: 'exit' function (code, signal) {}
	 * <p>
	 * This event is emitted after the child process ends. If the process terminated 
	 * normally, code is the final exit code of the process, otherwise null. If the 
	 * process terminated due to receipt of a signal, signal is the string name of 
	 * the signal, otherwise null.
	 */
	//> public
	ChildProcess: vjo.ctype() 
		//> needs(org.nodejs.fs.WriteableStream)
		//> needs(org.nodejs.fs.ReadableStream)
		//> needs(org.nodejs.events.EventEmitter)
		.inherits('org.nodejs.events.EventEmitter<ChildProcess>')
		.protos({
			/*
			 * 
			 */
			//> public ChildProcess constructs()
			constructs: function() {},
			
			/**
			 * child.stdin
			 * <p>A Writable Stream that represents the child process's stdin. Closing 
			 * this stream via end() often causes the child process to terminate.
			 */
			//> public WriteableStream
			stdin: null,	
			
			/**
			 * child.stdout
			 * <p>A Readable Stream that represents the child process's stdout.
			 */
			//> public ReadableStream
			stdout: null,	
			
			/**
			 * child.stderr
			 * <p>A Readable Stream that represents the child process's stderr.
			 */
			//> public ReadableStream
			stderr: null,	
			
			/**
			 * child.pid
			 * <p>The PID of the child process.
			 * <p>Example:
			 * <pre>
			 * var spawn = require('child_process').spawn,grep  
			 *   = spawn('grep', ['ssh']);
			 * console.log('Spawned child pid: ' + grep.pid);
			 * grep.stdin.end();
			 * </pre>
			 */
			//> public String
			pid: null,	
			
			/**
			 * child.kill(signal='SIGTERM')
			 * Send a signal to the child process. If no argument is given, the process will be sent 'SIGTERM'. 
			 * See signal(7) for a list of available signals.
			 * <pre>
			 * var spawn = require('child_process').spawn, grep  = spawn('grep', ['ssh']);
			 * grep.on('exit', function (code, signal) {
			 *   console.log('child process terminated due to receipt of signal '+signal);
			 * });
			 * // send SIGHUP to process
			 * grep.kill('SIGHUP');
			 * <pre>
			 * Note that while the function is called kill, the signal delivered to the child process may not actually 
			 * kill it. kill really just sends a signal to a process.
			 * <p>See kill(2)
			 */
			//> public void kill(String? signal)
			kill: vjo.NEEDS_IMPL,
			
			/**
			 * child_process.spawn(command, args=[], [options])
			 * <p>Launches a new process with the given command, with command line 
			 * arguments in args. If omitted, args defaults to an empty Array.
			 * <p>The third argument is used to specify additional options, which 
			 * defaults to:
			 * <pre>
			 * { cwd: undefined
			 * , env: process.env,
			 * , customFds: [-1, -1, -1]
			 * }
			 * </pre>
			 * <p>cwd allows you to specify the working directory from which the process 
			 * is spawned. Use env to specify environment variables that will be visible 
			 * to the new process. With customFds it is possible to hook up the new 
			 * process' [stdin, stout, stderr] to existing streams; -1 means that a new 
			 * stream should be created.
			 * <p>Example of running ls -lh /usr, capturing stdout, stderr, and the 
			 * exit code:
			 * <pre>
			 * var util   = require('util'),
			 *     spawn = require('child_process').spawn,
			 *     ls    = spawn('ls', ['-lh', '/usr']);
			 * ls.stdout.on('data', function (data) {
			 *   util.print('stdout: ' + data);
			 * });
			 * ls.stderr.on('data', function (data) {
			 *   util.print('stderr: ' + data);
			 * });
			 * ls.on('exit', function (code) {
			 *   console.log('child process exited with code ' + code);
			 * });
			 * <p>
			 * Example: A very elaborate way to run 'ps ax | grep ssh'
			 * <pre>
			 * var util   = require('util'),
			 *     spawn = require('child_process').spawn,
			 *     ps    = spawn('ps', ['ax']),
			 *     grep  = spawn('grep', ['ssh']);
			 *     
			 * ps.stdout.on('data', function (data) {
			 *   grep.stdin.write(data);
			 * });
			 * 
			 * ps.stderr.on('data', function (data) {
			 *   util.print('ps stderr: ' + data);
			 * });
			 * 
			 * ps.on('exit', function (code) {
			 *   if (code !== 0) {
			 *     console.log('ps process exited with code ' + code);
			 * }
			 * grep.stdin.end();
			 *});
			 *
			 * grep.stdout.on('data', function (data) {
			 *   util.print(data);
			 * });
			 * grep.stderr.on('data', function (data) {
			 *   util.print('grep stderr: ' + data);
			 * });
			 * 
			 * grep.on('exit', function (code) {
			 *   if (code !== 0) {
			 *     console.log('grep process exited with code ' + code);
			 *   }
			 * });
			 * <p>
			 * Example of checking for failed exec:
			 * <pre>
			 * var spawn = require('child_process').spawn,
			 *     child = spawn('bad_command');
			 *     
			 * child.stderr.on('data', function (data) {
			 *   if (/^execvp\(\)/.test(data.asciiSlice(0,data.length))) {
			 *     console.log('Failed to start child process.');
			 *   }
			 * });
			 * </pre>
			 * <p>See also: child_process.exec()
			 */
			//> public ChildProcess spawn(String command, Object[]? args, Object? options, Function? callback)
			spawn: vjo.NEEDS_IMPL,
			
	//		// From child_process.js code itself...
			/**
			 * 
			 */
			//> public boolean
			killed: null,
			
			/**
			 * 
			 */
			//> public String
			termSignal: null	
	//		fds: null	//< public Object[]
		})
	.endType(),
	
	// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
	/**
	 * 
	 */
	//> public
	data: vjo.otype().defs({
		/**
		 * 
		 */
		//> public dynamic
		execFileOptions: {
			
			/**
			 * Default: utf8
			 */
			//> public String?
			encoding: null,
			
			/**
			 * Default: 0
			 */
			//> public int?
			timeout: null,
			
			/**
			 * Default: 200 * 1024
			 */
			//> public int?
			maxBuffer: null,
			
			/**
			 * Default: SIGTERM
			 */
			//> public XXXX?
			killSignal: null,
			
			/**
			 * Default: false
			 */
			//> public XXXX?
			setsid: null,
			
			/**
			 * Default: null
			 */
			//> public String?
			cwd: null,
			
			/**
			 * Default: null
			 */
			//> public Object?
			env: null
		},
		
		/**
		 * 
		 */
		//> public
		execOptions: {
			/**
			 * 
			 */
			//> public String?
			encoding: null,
			
			/**
			 * If timeout is greater than 0, then it will kill the child process 
			 * if it runs longer than timeout milliseconds
			 */
			//> public int?
			timeout: null,
			
			/**
			 * 
			 */
			//> public int?
			maxBuffer: null,	
			
			/**
			 * 
			 */
			//> public String? ; 'SIGTERM'
			killSignal: null,	
			
			/**
			 * 
			 */
			//> public String?
			cwd: null,			
			
			/**
			 * 
			 */
			//> public Object?
			env: null			
		},
	
		/**
		 * 
		 */
		//> public dynamic
		spawnOptions: { 
			/**
			 * cwd allows you to specify the working directory from which the 
			 * process is spawned
			 */
			//> public String?
			cwd: null,
			
			/**
			 * Use env to specify environment variables that will be visible to 
			 * the new process
			 */
			//> public Object?
			env: null,
			
			/**
			 * With customFds it is possible to hook up the new process' 
			 * [stdin, stout, stderr] to existing streams; -1 means that a new 
			 * stream should be created
			 */
			//> public int[]? ; [-1, -1, -1]
			customFds: null,
			
			/**
			 * setsid, if set true, will cause the subprocess to be run in a 
			 * new session
			 */
			//> public boolean?
			setsid: null,
			
			/**
			 * 
			 */
			//> public int?
			gid: null,
			
			/**
			 * 
			 */
			//> public int?
			uid: null
		}		
	}).endType(),
	
	/**
	 * These are callbacks used by child_process
	 */
	//> public
	callback: vjo.otype().defs({
		
		/**
		 * 
		 */
		//> public void exec(Error error, String stdout, String stderr)
		exec: vjo.NEEDS_IMPL
	}).endType(),
	
	/**
	 * These are events generated by child_process
	 */
	//> public 
	event: vjo.otype().defs({
		/**
		 * function (code, signal) {}
		 * <p>This event is emitted after the child process ends. If the process 
		 * terminated normally, code is the final exit code of the process, 
		 * otherwise null. If the process terminated due to receipt of a signal, 
		 * signal is the string name of the signal, otherwise null.
		 */
		//> public void exit(int? code, String? signal)
		exit: vjo.NEEDS_IMPL
	}).endType()
})
.protos({	
	// vvvvvvvvvvvvvv  Exported Types  vvvvvvvvvvvvvvv
	/**
	 * 
	 */
	//> public type::child_process.ChildProcess
	ChildProcess: null,
	
	// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
		/**
	 * child_process.spawn(command, args=[], [options])
	 * <p>Launches a new process with the given command, with command line 
	 * arguments in args. If omitted, args defaults to an empty Array.
	 * <p>The third argument is used to specify additional options, which 
	 * defaults to:
	 * <pre>
	 * { cwd: undefined
	 * , env: process.env,
	 * , customFds: [-1, -1, -1]
	 * }
	 * </pre>
	 * <p>cwd allows you to specify the working directory from which the process 
	 * is spawned. Use env to specify environment variables that will be visible 
	 * to the new process. With customFds it is possible to hook up the new 
	 * process' [stdin, stout, stderr] to existing streams; -1 means that a new 
	 * stream should be created.
	 * <p>Example of running ls -lh /usr, capturing stdout, stderr, and the 
	 * exit code:
	 * <pre>
	 * var util   = require('util'),
	 *     spawn = require('child_process').spawn,
	 *     ls    = spawn('ls', ['-lh', '/usr']);
	 * ls.stdout.on('data', function (data) {
	 *   util.print('stdout: ' + data);
	 * });
	 * ls.stderr.on('data', function (data) {
	 *   util.print('stderr: ' + data);
	 * });
	 * ls.on('exit', function (code) {
	 *   console.log('child process exited with code ' + code);
	 * });
	 * <p>
	 * Example: A very elaborate way to run 'ps ax | grep ssh'
	 * <pre>
	 * var util   = require('util'),
	 *     spawn = require('child_process').spawn,
	 *     ps    = spawn('ps', ['ax']),
	 *     grep  = spawn('grep', ['ssh']);
	 *     
	 * ps.stdout.on('data', function (data) {
	 *   grep.stdin.write(data);
	 * });
	 * 
	 * ps.stderr.on('data', function (data) {
	 *   util.print('ps stderr: ' + data);
	 * });
	 * 
	 * ps.on('exit', function (code) {
	 *   if (code !== 0) {
	 *     console.log('ps process exited with code ' + code);
	 * }
	 * grep.stdin.end();
	 *});
	 *
	 * grep.stdout.on('data', function (data) {
	 *   util.print(data);
	 * });
	 * grep.stderr.on('data', function (data) {
	 *   util.print('grep stderr: ' + data);
	 * });
	 * 
	 * grep.on('exit', function (code) {
	 *   if (code !== 0) {
	 *     console.log('grep process exited with code ' + code);
	 *   }
	 * });
	 * <p>
	 * Example of checking for failed exec:
	 * <pre>
	 * var spawn = require('child_process').spawn,
	 *     child = spawn('bad_command');
	 *     
	 * child.stderr.on('data', function (data) {
	 *   if (/^execvp\(\)/.test(data.asciiSlice(0,data.length))) {
	 *     console.log('Failed to start child process.');
	 *   }
	 * });
	 * </pre>
	 * <p>See also: child_process.exec()
	 * <p>The last optional arg customFDs is a deprecated argument
	 */
	//> public child_process.ChildProcess spawn(String command, Array? args, child_process.data.spawnOptions? options, Array? customFDs)
	spawn: vjo.NEEDS_IMPL,
	
	/**
	 * child_process.exec(command, [options], callback)
	 * <p>High-level way to execute a command as a child process, buffer the 
	 * output, and return it all in a callback.
	 * <pre>
	 * var util   = require('util'),
	 *    exec  = require('child_process').exec, child;
	 * child = exec('cat *.js bad_file | wc -l', 
	 * function (error, stdout, stderr) {
	 *   util.print('stdout: ' + stdout);
	 *   util.print('stderr: ' + stderr);
	 *   if (error !== null) {
	 *     console.log('exec error: ' + error);
	 *   }
	 * });
	 * </pre>
	 * <p>
	 * The callback gets the arguments (error, stdout, stderr). On success, 
	 * error will be null. On error, error will be an instance of Error and 
	 * err.code will be the exit code of the child process, and err.signal will 
	 * be set to the signal that terminated the process.
	 * <p>There is a second optional argument to specify several options. The 
	 * default options are
	 * <pre>
	 * { encoding: 'utf8'
	 * , timeout: 0
	 * , maxBuffer: 200*1024
	 * , killSignal: 'SIGTERM'
	 * , cwd: null
	 * , env: null
	 * }
	 * </pre>
	 * If timeout is greater than 0, then it will kill the child process if it 
	 * runs longer than timeout milliseconds. The child process is killed with 
	 * killSignal (default: 'SIGTERM'). maxBuffer specifies the largest amount 
	 * of data allowed on stdout or stderr - if this value is exceeded then the 
	 * child process is killed.
	 */
	//> public child_process.ChildProcess exec(String command, child_process.callback.exec callback)
	//> public child_process.ChildProcess exec(String command, child_process.data.execOptions? options, child_process.callback.exec? callback)
	exec: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public void execFile(String file, Object? args, child_process.data.execFileOptions? options, Function? callback)
	execFile: vjo.NEEDS_IMPL
})
.options({
	metatype: true
})
.endType();