/**
 * This type is dynamically added to tty.js at runtime based on the platform
 */
//> public
vjo.ctype('org.nodejs.tty_win32') 
.props({
	/**
	 * 
	 */
	//> public
	ReadStream: vjo.ctype()
		//> needs(org.nodejs.stream.Stream)
		//> needs(org.nodejs.fs.FileDescriptor)
		.inherits('org.nodejs.stream.Stream<ReadStream>')
		.protos({
			/**
			 * 
			 */
			//> public boolean
			paused: null,	
			
			/**
			 * 
			 */
			//> public boolean
			readable: null,	
			
			/**
			 * 
			 */
			//> public boolean
			isTTY: null,	
			
			/**
			 * 
			 */
			//> public ReadStream constructs({int | FileDescriptor} fd)
			constructs: function() {},
			
// Already in stream.Stream
//			pause: vjo.NEEDS_IMPL,
//			
//			resume: vjo.NEEDS_IMPL,
//			
//			destroy: vjo.NEEDS_IMPL,
			
			/**
			 * 
			 */
			//> public void destroySoon()
			destroySoon: vjo.NEEDS_IMPL
		})
	.endType(),
	
	/**
	 * 
	 */
	//> public
	WriteStream: vjo.ctype()	
		//> needs(org.nodejs.stream.Stream)
		//> needs(org.nodejs.fs.FileDescriptor)
		.inherits('org.nodejs.stream.Stream<WriteStream>')
		.protos({
			/**
			 * 
			 */
			//> public int ; MrP should be int | FileDescriptor
			fd: null,		
			
			/**
			 * 
			 */
			//> public boolean
			writable: null,	
			
			/**
			 * 
			 */
			//> public boolean
			isTTY: null,	
			
			/**
			 * 
			 */
			//> public WriteStream constructs({int | FileDescriptor} fd)
			constructs: function() {},
	
// Already in stream.Stream
//			write: vjo.NEEDS_IMPL,
//			
//			end: vjo.NEEDS_IMPL,
//			
//			destroy: vjo.NEEDS_IMPL,
			
			/**
			 * 
			 */
			//> public void moveCursor(Number dx, Number dy)
			moveCursor: vjo.NEEDS_IMPL,
			
			/**
			 * 
			 */
			//> public void moveCursor(Number x, Number y)
			cursorTo: vjo.NEEDS_IMPL,
			
			/**
			 * 
			 */
			//> public void clearLine(Number direction)
			clearLine: vjo.NEEDS_IMPL
		})
	.endType()
})
.protos({
	// vvvvvvvvvvvvvv  Exported Types  vvvvvvvvvvvvvvv
	/**
	 * 
	 */
	//> public type::tty_win32.ReadStream
	ReadStream: null,	
	
	/**
	 * 
	 */
	//> public type::tty_win32.WriteStream
	WriteStream: null	
	// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
})
.options({
	metatype: true
})
.endType();