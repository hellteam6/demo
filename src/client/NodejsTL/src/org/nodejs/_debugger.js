/**
 * 
 */
//> public
vjo.ctype('org.nodejs._debugger')
//> needs(org.nodejs.net.Socket)
.props({
	/**
	 * //
// Parser/Serializer for V8 debugger protocol
// http://code.google.com/p/v8/wiki/DebuggerProtocol
//
// Usage:
//    p = new Protocol();
//
//    p.onResponse = function(res) {
//      // do stuff with response from V8
//    };
//
//    socket.setEncoding('utf8');
//    socket.on('data', function(s) {
//      // Pass strings into the protocol
//      p.execute(s);
//    });
//
//
	 */
	//> public
	Protocol: vjo.ctype()
	.props({
		
	})
	.protos({
		/**
		 * 
		 */
		//> public void execute(Object d)
		execute: vjo.NEEDS_IMPL,
		
		/**
		 * 
		 */
		//> public String serialize(Object obj)
		serialize: vjo.NEEDS_IMPL
	})
	.endType(),
	
	/**
	 * 
	 */
	//> public
	Client: vjo.ctype()
	.inherits('org.nodejs.net.Socket')
	.props({
		
	})
	.protos({
		/**
		 * 
		 */
		//> public int
		currentFrame: null,	
		
		/**
		 * 
		 */
		//> public int
		currentSourceLine: null,	
		
		/**
		 * 
		 */
		//> public String
		currentSource: null,
		
		/**
		 * 
		 */
		//> public void req(Object req, Function callback)
		req: vjo.NEEDS_IMPL,
		
		/**
		 * 
		 */
		//> public void reqVersion( (void f(String version, boolean running)) )
		reqVersion: vjo.NEEDS_IMPL,
		
		/**
		 * 
		 */
		//> public void reqLookup(Object refs, Function? cb)
		reqLookup: vjo.NEEDS_IMPL,
		
		/**
		 * 
		 */
		//> public void reqEval(Object expression, Function callback)
		reqEval: vjo.NEEDS_IMPL,
		
		/**
		 * 
		 */
		//> public void reqFrameEval(Object expression, Object frame, Function callback)
		reqFrameEval: vjo.NEEDS_IMPL,
		
		/**
		 * 
		 */
		//> public void reqBacktrace(Function callback)
		reqBacktrace: vjo.NEEDS_IMPL,
		
		/**
		 * 
		 */
		//> public void reqScripts(Function callback)
		reqScripts: vjo.NEEDS_IMPL,
		
		/**
		 * 
		 */
		//> public void reqContinue(Function? callback)
		reqContinue: vjo.NEEDS_IMPL,
		
		/**
		 * 
		 */
		//> public void listBreakpoints(Function? callback)
		listBreakpoints: vjo.NEEDS_IMPL,
		
		/**
		 * 
		 */
		//> public void reqSource(int from, int to, Function? callback)
		reqSource: vjo.NEEDS_IMPL,
		
		/**
		 * 
		 */
		//> public void step(Object action, int count, Function? callback)
		step: vjo.NEEDS_IMPL,
		
		/**
		 * 
		 */
		//> public void mirrorObject(Object handle, Function? callback)
		mirrorObject: vjo.NEEDS_IMPL,
		
		/**
		 * 
		 */
		//> public void fullTrace(Function? callback)
		fullTrace: vjo.NEEDS_IMPL	
	})
	.endType(),
	
	/**
	 * 
	 */
	//> public
	Interface: vjo.ctype() 
	.props({
		
	})
	.protos({
		/**
		 * 
		 */
		//> public void complete(int line)
		complete: vjo.NEEDS_IMPL,
		
		/**
		 * 
		 */
		//> public void handleSIGINT()
		handleSIGINT: vjo.NEEDS_IMPL,
		
		/**
		 * 
		 */
		//> public void quit()
		quit: vjo.NEEDS_IMPL,
		
		/**
		 * 
		 */
		//> public void tryQuit()
		tryQuit: vjo.NEEDS_IMPL,
		
		/**
		 * 
		 */
		//> public void pause()
		pause: vjo.NEEDS_IMPL,
		
		/**
		 * 
		 */
		//> public void resume()
		resume: vjo.NEEDS_IMPL,
		
		/**
		 * 
		 */
		//> public void handleBreak(Object r)
		handleBreak: vjo.NEEDS_IMPL,
		
		/**
		 * 
		 */
		//> public void handleCommand(String cmd)
		handleCommand: vjo.NEEDS_IMPL,
		
		/**
		 * 
		 */
		//> public void yesNoQuestion(String prompt, (void f(boolean answer)) )
		yesNoQuestion: vjo.NEEDS_IMPL,
		
		/**
		 * 
		 */
		//> public void restartQuestion( (void f(boolean answer)) )
		restartQuestion: vjo.NEEDS_IMPL,
		
		/**
		 * 
		 */
		//> public void killQuestion( (void f(boolean answer)) )
		killQuestion: vjo.NEEDS_IMPL,
		
		/**
		 * 
		 */
		//> public void quitQuestion( (void f(boolean answer)) )
		quitQuestion: vjo.NEEDS_IMPL,
		
		/**
		 * 
		 */
		//> public void killChild()
		killChild: vjo.NEEDS_IMPL,
		
		/**
		 * 
		 */
		//> public void trySpawn(Function? callback) 
		trySpawn: vjo.NEEDS_IMPL,
		
		/**
		 * 
		 */
		//> public void printNotConnected()
		printNotConnected: vjo.NEEDS_IMPL,
		
		/**
		 * 
		 */
		//> public void printScripts(boolean displayNatives)
		printScripts: vjo.NEEDS_IMPL
		
	})
	.endType()
})
.protos({
	/**
	 * 
	 */
	//> public type::_debugger.Protocol
	Protocol: null,
	
	/**
	 * 
	 */
	//> public type::_debugger.Client
	Client: null,
	
	/**
	 * 5858 by default
	 */
	//> public Number
	port: null,
	
	/**
	 * 
	 */
	//> public void start(Object...)	
	start: vjo.NEEDS_IMPL	
})
.options({
	metatype: true
})
.endType();