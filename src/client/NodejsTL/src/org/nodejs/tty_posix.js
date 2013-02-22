/**
 * This type is dynamically added to tty.js at runtime based on the platform
 */
//> public
vjo.ctype('org.nodejs.tty_posix') 
.props({
	//> needs(org.nodejs.stream.Stream)
	//> needs(org.nodejs.child_process.ChildProcess)
	/**
	 * 
	 */
	//> public
	data: vjo.otype().defs({
		/**
		 * 
		 */
		//>  public
		openResult: {			
			/**
			 * 
			 */
			//> public String
			stream: null,
			
			/**
			 * 
			 */
			//> public ChildProcess
			child: null			
		}
	}).endType(),
	
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
			isTTY: null,	
			
			/**
			 * 
			 */
			//> public ReadStream constructs({int | FileDescriptor} fd)
			constructs: function() {}
		})
	.endType(),
	
	/**
	 * 
	 */
	//> public
	WriteStream: vjo.ctype()
		//> needs(org.nodejs.fs.FileDescriptor)
		.protos({
			/**
			 * 
			 */
			//> public int ; MrP: Should be int | FileDescriptor
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
	//> public type::tty_posix.ReadStream
	ReadStream: null,	
	
	/**
	 * 
	 */
	//> public type::tty_posix.WriteStream
	WriteStream: null, 	
	// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
	
	/**
	 * 
	 */
	//> public tty_posix.data.openResults open(String path, Object... args)
	open: vjo.NEEDS_IMPL
})
.options({
	metatype: true
})
.endType();