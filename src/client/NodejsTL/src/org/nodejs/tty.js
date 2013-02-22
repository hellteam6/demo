/**
 * This type dynamically adds in tty_win32.js or tty_posix.js based on
 * what platform is running.
 */
//> public
vjo.ctype('org.nodejs.tty') 
//> needs(org.nodejs.fs.FileDescriptor)
//> needs(org.nodejs.child_process.ChildProcess)
.props({
	/**
	 * 
	 */
	//> public
	openResult: vjo.ctype()		
		.protos({
			/**
			 * 
			 */
			//> public int ; MrP: should be int | FileDescriptor
			slaveFD: null,	
			/**
			 * 
			 */
			//> public ChildProcess
			childProcess: null	
		})
	.endType()
})
.protos({
	/**
	 * Spawns a new process with the executable pointed to by path as the 
	 * session leader to a new pseudo terminal.
	 * <p>Returns an array [slaveFD, childProcess]. slaveFD is the file 
	 * descriptor of the slave end of the pseudo terminal. childProcess is a 
	 * child process object.
	 */
	//> public tty.openResult[] open(String path, Object... args)
	open: vjo.NEEDS_IMPL,
	
	/**
	 * Returns true or false depending on if the fd is associated with a terminal.
	 */
	//> public boolean isatty({int | FileDescriptor} terminalFD)
	isatty: vjo.NEEDS_IMPL,
	
	/**
	 * mode should be true or false. This sets the properies of the current 
	 * process's stdin fd to act either as a raw device or default.
	 */
	//> public void setRawMode(boolean mode)
	setRawMode: vjo.NEEDS_IMPL,
	
	/**
	 * ioctls the window size settings to the file descriptor.
	 */
	//> public void setWindowSize({int | FileDescriptor} fd, int row, int col)
	setWindowSize: vjo.NEEDS_IMPL,
	
	/**
	 * Returns [row, col] for the TTY associated with the file descriptor.
	 */
	//> public int[] getWindowSize({int | FileDescriptor} fd)
	getWindowSize: vjo.NEEDS_IMPL
})
.options({
	metatype: true
})
.endType();