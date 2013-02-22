/**
 * 
 */
//> public ; // exports Interface
vjo.ctype('org.nodejs.readline') 
.props({
	// vvvvvvvvvvvvvvvvvvv NESTED TYPES vvvvvvvvvvvvvvvvvvvvv
	/**
	 * 
	 */
	//> public
	Interface: vjo.ctype()
		//> needs(org.nodejs.events.EventEmitter)
		.inherits('org.nodejs.events.EventEmitter<Interface>')
		.protos({
			/**
			 * 
			 */
			//> public Interface constructs(Object input, Object output, Object completer)
			constructs: function() {},
			
			/**
			 * from tty.getWindowSize(fd)[1]
			 */
			//> public Number
			columns: null,
			
			/**
			 *
			 */
			//> public void setPrompt(String prompt, int? length)
			setPrompt: vjo.NEEDS_IMPL,
			
			/**
			 *
			 */
			//> public void prompt()
			prompt: vjo.NEEDS_IMPL,
			
			/**
			 *
			 */
			//> public void close()
			close: vjo.NEEDS_IMPL,
			
			/**
			 *
			 */
			//> public void write({Object | String} data, String key)
			write: vjo.NEEDS_IMPL,
			
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
			//> public void question(String query, Function? callback)
			question: vjo.NEEDS_IMPL
			
//			/**
//			 *
//			 */
//			 //> public String _addHistory()
//			_addHistory: vjo.NEEDS_IMPL,
//			
//			/**
//			 *
//			 */
//			//> public void _refreshLine()
//			_refreshLine: vjo.NEEDS_IMPL,
//			
//			/**
//			 *
//			 */
//			//> public void _normalWrite({Object | String} data)
//			_write: vjo.NEEDS_IMPL,
//			
//			/**
//			 *
//			 */
//			//> public void _insertString(String s)
//			_insertString: vjo.NEEDS_IMPL,
//			
//			/**
//			 *
//			 */
//			//> public void _tabComplete()
//			_tabComplete: vjo.NEEDS_IMPL,
//			
//			/**
//			 *
//			 */
//			//> public void _historyNext()
//			_historyNext: vjo.NEEDS_IMPL,
//			
//			/**
//			 *
//			 */
//			//> public void _historyPrev()
//			_historyPrev: vjo.NEEDS_IMPL,
//			
//			/**
//			 *
//			 */
//			//> public void _ttyWrite(String b) ; maybe Buffer or Array as well?
//			_ttyWrite: vjo.NEEDS_IMPL
			
		})
		.options({
			metatype: true
		})
	.endType()
	// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
})
.protos({
	// vvvvvvvvvvvvvv  Exported Types  vvvvvvvvvvvvvvv
	/**
	 * 
	 */
	//> public type::readline.Interface
	Interface: null, 
	// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
	
	/**
	 * 
	 */
	//> public readline.Interface createInterface(Object input, Object output, Function completer)
	createInterface: vjo.NEEDS_IMPL
})
.options({
	metatype: true
})
.endType();