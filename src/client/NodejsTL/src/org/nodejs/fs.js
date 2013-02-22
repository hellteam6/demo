/**
 * 
 */
//> public
vjo.ctype('org.nodejs.fs') 
//> needs(org.nodejs.buffer.Buffer)
//> needs(org.nodejs.fs.FileDescriptor)
.props({
	// vvvvvvvvvvvvvvvvvvvvv NESTED TYPES vvvvvvvvvvvvvvvvvvvvvvv
	/**
	 * Objects returned from fs.stat() and fs.lstat() are of this type.
	 */
	//> public
	Stats: vjo.ctype()
		.protos({
			/**
			 *
			 */
			//> public int
			dev: 0,		
			/**
			 *
			 */
			//> public int
			ino: 0,		
			/**
			 *
			 */
			//> public int
			mode: 0,	
			/**
			 *
			 */
			//> public int
			nlink: 0,	
			/**
			 *
			 */
			//> public int
			uid: 0,		
			/**
			 *
			 */
			//> public int
			gid: 0,		
			/**
			 *
			 */
			//> public int
			rdev: 0,	
			/**
			 *
			 */
			//> public int
			size: 0,	
			/**
			 *
			 */
			//> public int
			blksize: 0,	
			/**
			 *
			 */
			//> public int
			blocks: 0,	
			/**
			 *
			 */
			//> public Object
			atime: null,
			/**
			 *
			 */
			//> public Object
			mtime: null,
			/**
			 *
			 */
			//> public Object
			ctime: null,
			
		//	//> public boolean _checkModeProperty(String property)
		//	_checkModeProperty: vjo.NEEDS_IMPL,
			
			/**
			 * 
			 */
			//> public boolean isDirectory()
			isDirectory: vjo.NEEDS_IMPL,		
			/**
			 * 
			 */
			//> public boolean isFile()
			isFile: vjo.NEEDS_IMPL,				
			/**
			 * 
			 */
			//> public boolean isBlockDevice()
			isBlockDevice: vjo.NEEDS_IMPL,		
			/**
			 * 
			 */
			//> public boolean isCharacterDevice()
			isCharacterDevice: vjo.NEEDS_IMPL,	
			/**
			 * 
			 */
			//> public boolean isSymbolicLink()
			isSymbolicLink: vjo.NEEDS_IMPL,		
			/**
			 * 
			 */
			//> public boolean isFIFO()
			isFIFO: vjo.NEEDS_IMPL,				
			/**
			 * 
			 */
			//> public boolean isSocket()
			isSocket: vjo.NEEDS_IMPL			
		})
	.endType(),
	
	/**
	 * 
	 */
	//> public
	FileDescriptor: vjo.ctype()
		.props({
			
		})
		.protos({
			
		})
	.endType(),
	
	/**
	 * 
	 */
	//> public
	func: vjo.otype().defs({ 
		//> needs(org.nodejs.buffer.Buffer)
		/**
		 * 
		 */
		//> public void stat(Error? err, fs.Stats? stats)
		stat: vjo.NEEDS_IMPL,
		
		/**
		 * Asynchronous fstat(2). The callback gets two arguments (err, stats) 
		 * where stats is a fs.Stats object.
		 */
		//> public void fstat(Error? err, fs.Stats? stats)
		fstat: vjo.NEEDS_IMPL,
		
		/**
		 * Asynchronous lstat(2). The callback gets two arguments (err, stats) 
		 * where stats is a fs.Stats object. lstat() is identical to stat(), 
		 * except that if path is a symbolic link, then the link itself is 
		 * stat-ed, not the file that it refers to.
		 */
		//> public void lstat(Error? err, fs.Stats? stats)
		lstat: vjo.NEEDS_IMPL,
		
		/**
		 * 
		 */
		//> public void linkPath(Error? err, String? resolvedPath)
		linkPath: vjo.NEEDS_IMPL,
		
		/**
		 * 
		 */
		//> public void readFile(Error? err, {String | Buffer}? contents)
		readFile: vjo.NEEDS_IMPL,
	
		/**
		 * 
		 */
		//> public void readdir(Error? err, String[]? fileNames)
		readdir: vjo.NEEDS_IMPL,
		
		/**
		 * Asynchronous readlink(2). 
		 * <p>
		 * The callback gets two arguments (err, resolvedPath). 
		 */
		//> public void readlink(Error? err, String? resolvedPath)
		readlink: vjo.NEEDS_IMPL,
		
		/**
		 * 
		 */
		//> public void realpath(Error? err, String? resolvedPath)
		realpath: vjo.NEEDS_IMPL,
		
		/**
		 * 
		 */
		//> public void open(Error? err, {int | fs.FileDescriptor}? fd)
		open: vjo.NEEDS_IMPL,
		
		/**
		 * 
		 */
		//> public void read(Error? err, int? bytesRead)
		read: vjo.NEEDS_IMPL,
		
		/**
		 * 
		 */
		//> public void write(Error? err, int? bytesWritten)
		write: vjo.NEEDS_IMPL,
		
		/**
		 * 
		 */
		//> public void error(Error? err)
		error: vjo.NEEDS_IMPL,
		
		/**
		 * 
		 */
		//> public void watchFile(fs.Stats? current, fs.Stats? previous)
		watchFile: vjo.NEEDS_IMPL		
	}).endType(),

	/**
	 * 
	 */
	//> public
	data: vjo.otype().defs({	
		/**
		 * 
		 */
		//> public
		watchFileOptions: {
			/**
			 * 
			 */
			//>public boolean
			persistent: null,	
			/**
			 * 
			 */
			//>public boolean ; in milliseconds
			polling: null			
		},
		
		/**
		 * 
		 */
		//> public
		readStreamOptions: {
			/**
			 * 
			 */
			//>public String?
			flags: null,		
			/**
			 * 
			 */
			//>public String?
			encoding: null,		
			/**
			 * 
			 */
			//>public int?
			mode: null,			
			/**
			 * 
			 */
			//>public int?
			bufferSize: null,	
			/**
			 * 
			 */
			//>public int?
			start: null,	
			/**
			 * 
			 */
			//>public int?
			end: null			
		},
	
		/**
		 * 
		 */
		//> public
		writeStreamOptions: {
			/**
			 * 
			 */
			//> public String?
			flags: null,
			/**
			 * 
			 */
			//>public String?
			encoding: null,
			/**
			 * 
			 */
			//>public int?
			mode: null		
		}
	}).endType(),


	// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
	
	/**
	 * A Readable Stream has the following methods, members, and events.
	 * <p>Event: 'data' function (data) { }
	 * The 'data' event emits either a Buffer (by default) or a string if 
	 * setEncoding() was used.
	 * <p>Event: 'end' function () { }
	 * Emitted when the stream has received an EOF (FIN in TCP terminology). 
	 * Indicates that no more 'data' events will happen. If the stream is also 
	 * writable, it may be possible to continue writing.
	 * <p>Event: 'error'function (exception) { }
	 * Emitted if there was an error receiving data.
	 * <p>Event: 'close' function () { }
	 * Emitted when the underlying file descriptor has be closed. Not all streams 
	 * will emit this. (For example, an incoming HTTP request will not emit 'close'.)
	 * <p>Event: 'fd' function (fd) { }
	 * Emitted when a file descriptor is received on the stream. Only UNIX streams 
	 * support this functionality; all others will simply never emit this event.
	 */
	//> public
	ReadableStream: vjo.ctype()
		//> needs(org.nodejs.events.EventEmitter)
		//> needs(org.nodejs.stream.Stream)
		.inherits('org.nodejs.stream.Stream<ReadableStream>')
		.props({
//			ENCODING_UTF8: 'utf8',	//< public final String
//			ENCODING_ASCII:'ascii',	//< public final String
//			ENCODING_BASE64:'base64',//< public final String
			
			/**
			 * 
			 */
			//> public
			event: vjo.otype().defs({
				/**
				 * The 'data' event emits either a Buffer (by default) or a string if 
				 * setEncoding() was used.
				 */
				//> public void data({String | Buffer} data)
				data: vjo.NEEDS_IMPL,
				
				/**
				 * Emitted when the stream has received an EOF (FIN in TCP terminology). 
				 * Indicates that no more 'data' events will happen. If the stream is also 
				 * writable, it may be possible to continue writing.
				 */
				//> public void end()
				end: vjo.NEEDS_IMPL,
				
				/**
				 * function (exception) { }
				 * <p>Emitted if there was an error receiving data.
				 */
				//> public void error(Object exception)
				error: vjo.NEEDS_IMPL,
				
				/**
				 * Emitted when the underlying file descriptor has be closed. Not all 
				 * streams will emit this. (For example, an incoming HTTP request will not 
				 * emit 'close'.)
				 */
				//> public void close()
				close: vjo.NEEDS_IMPL,
				
				/**
				 * Emitted when a file descriptor is received on the stream. Only UNIX 
				 * streams support this functionality; all others will simply never emit 
				 * this event.
				 */
				//> public void fd({int | fs.FileDescriptor} fd)
				fd: vjo.NEEDS_IMPL
			}).endType(),
			
			/**
			 * 
			 */
			//> public
			data: vjo.otype().defs({
				/**
				 * 
				 */
				//>public
				pipeOptions: {
					/**
					 * 
					 */
					//>public boolean?
					end: null		
				}
			}).endType()
		})
		.protos({
			/**
			 * 
			 */
			//> public fs.ReadableStream createReadStream(String path, fs.data.readStreamOptions? options)
			constructs: function() {},
			
			/**
			 * stream.readable
			 * <p>A boolean that is true by default, but turns false after an 'error' 
			 * occured, the stream came to an 'end', or destroy() was called.
			 */
			//> public boolean
			readable: false,	
			
			/**
			 * stream.setEncoding(encoding)
			 * <p>Makes the data event emit a string instead of a Buffer. encoding can 
			 * be 'utf8', 'ascii', or 'base64'.
			 */
			//> public void setEncoding(String encoding)
			setEncoding: vjo.NEEDS_IMPL,
			
			/**
			 * stream.pause()
			 * <p>Pauses the incoming 'data' events.
			 */
			//> public void pause()
			pause: vjo.NEEDS_IMPL,
			
			/**
			 * stream.resume()
			 * <p>Resumes the incoming 'data' events after a pause().
			 */
			//> public void resume()
			resume: vjo.NEEDS_IMPL,
			
			/**
			 * stream.destroy()
			 * <p>Closes the underlying file descriptor. Stream will not emit any more 
			 * events.
			 */
			//> public void destroy(Function? callback)
			destroy: vjo.NEEDS_IMPL,
			
			/**
			 * After the write queue is drained, close the file descriptor.
			 */
			//> public void destroySoon()
			destroySoon: vjo.NEEDS_IMPL,
			
			/**
			 * This is a Stream.prototype method available on all Streams.
			 * <p>Connects this read stream to destination WriteStream. Incoming data on 
			 * this stream gets written to destination. The destination and source 
			 * streams are kept in sync by pausing and resuming as necessary.
			 * <p>Emulating the Unix cat command:
			 * <pre>
			 * process.stdin.resume();
			 * process.stdin.pipe(process.stdout);
			 * </pre>
			 * By default end() is called on the destination when the source stream emits 
			 * end, so that destination is no longer writable. Pass { end: false } as 
			 * options to keep the destination stream open.
			 * <p>This keeps process.stdout open so that "Goodbye" can be written at the 
			 * end.
			 * <pre>
			 * process.stdin.resume();
			 * process.stdin.pipe(process.stdout, { end: false });
			 * process.stdin.on("end", function() {
			 *   process.stdout.write("Goodbye\n");
			 * });
			 * </pre>
			 * NOTE: If the source stream does not support pause() and resume(), this 
			 * function adds simple definitions which simply emit 'pause' and 'resume' 
			 * events on the source stream.
			 */
			//> public void pipe(fs.WriteableStream destination, fs.ReadableStream.data.pipeOptions? options)
			pipe: vjo.NEEDS_IMPL
		})
	.endType(),
	
	/**
	 * A Writable Stream has the following methods, members, and events.
	 * <p>
	 * Event: 'drain'
	 * <p>
	 * function () { }
	 * Emitted after a write() method was called that returned false to indicate that it 
	 * is safe to write again.
	 * <p>
	 * Event: 'error'
	 * <p>
	 * function (exception) { }
	 * Emitted on error with the exception exception.
	 * <p>
	 * Event: 'close'
	 * <p>
	 * function () { }
	 * Emitted when the underlying file descriptor has been closed.
	 */
	//> public
	WriteableStream: vjo.ctype()
		//> needs(org.nodejs.buffer.Buffer)
		//> needs(org.nodejs.events.EventEmitter)
		//> needs(org.nodejs.stream.Stream)
		.inherits('org.nodejs.stream.Stream<WriteableStream>')
		.props({
			/**
			 * 
			 */
			//> public
			event: vjo.otype().defs({
				/**
				 * Event: 'drain'
				 * <p>function () { }
				 * <p>Emitted after a write() method was called that returned false to 
				 * indicate that it is safe to write again.
				 */
				//> public void drain()
				 drain: vjo.NEEDS_IMPL,
				 
				/**
				 * function (exception) { }
				 * <p>Emitted on error with the exception exception.
				 */
				//> public void error(Object? exception)
				error: vjo.NEEDS_IMPL,
				
				/**
				 * function () { }
				 * <p>Emitted when the underlying file descriptor has been closed.
				 */
				//> public void close()
				close: vjo.NEEDS_IMPL,
				
				/**
				 * function (src) { }
				 * <p>Emitted when the stream is passed to a readable stream's pipe method.
				 */
				//> public void pipe(Object? src)
				pipe: vjo.NEEDS_IMPL,
				
				/**
				 * 
				 */
				//> public void open({int | FileDescriptor}? fd)
				open: vjo.NEEDS_IMPL
			}).endType()
		})
		.protos({
			//> public fs.WriteableStream createWriteStream(String path, fs.data.writeStreamOptions? options)
			constructs: function() {},
			
			/**
			 * A boolean that is true by default, but turns false after an 'error' occurred 
			 * or end() / destroy() was called.
			 */
			//> public boolean
			writeable: null,
			
			/**
			 * 
			 */
			//>public String
			path: null,
			
			/**
			 * 
			 */
			//>public String
			encoding: null, 
			
			/**
			 * 
			 */
			//>public String
			flags: null,	
			
			/**
			 * 
			 */
			//>public int
			mode: null,	
			
			/**
			 * 
			 */
			//>public void flush()
			flush: vjo.NEEDS_IMPL, 
			
			
			/**
			 * stream.write(string, encoding='utf8', [fd])
			 * <p>Writes string with the given encoding to the stream. Returns true if the 
			 * string has been flushed to the kernel buffer. Returns false to indicate that 
			 * the kernel buffer is full, and the data will be sent out in the future. The 
			 * 'drain' event will indicate when the kernel buffer is empty again. The encoding 
			 * defaults to 'utf8'.
			 * <p>If the optional fd parameter is specified, it is interpreted as an integral 
			 * file descriptor to be sent over the stream. This is only supported for UNIX 
			 * streams, and is silently ignored otherwise. When writing a file descriptor in 
			 * this manner, closing the descriptor before the stream drains risks sending an 
			 * invalid (closed) FD.
			 */
			//> public boolean write(Buffer data)
			//> public boolean write(String data, String? encoding, {int | fs.FileDescriptor}? fd)
			write: vjo.NEEDS_IMPL,
			
			/**
			 * stream.end()
			 * <p>Terminates the stream with EOF or FIN.
			 * <p>
			 * stream.end(string, encoding)
			 * <p>Sends string with the given encoding and terminates the stream with EOF or FIN. This is useful to reduce the number of packets sent.
			 */
			//> public void end(String data, String? encoding, Function? callback)
			//> public void end(Buffer data, Function? callback)
			//> public void end(Function? callback)
			end: vjo.NEEDS_IMPL,
			
			/**
			 * 
			 */
			//> public void destroy(Function? callback)
			destroy: vjo.NEEDS_IMPL,
			
			/**
			 * 
			 */
			//> public void end(String data, String? encoding, Function? callback) ; //MrP - supposedly same as end(...)
			//> public void end(Buffer data, Function? callback)
			//> public void end(Function? callback)
			destroySoon: vjo.NEEDS_IMPL
		})
	.endType()
})
.protos({
	// vvvvvvvvvvvvvv  Exported Types  vvvvvvvvvvvvvvv
	/**
	 * 
	 */
	//>public type::fs.Stats
	Stats: null,	
	/**
	 * 
	 */
	//>public type::fs.ReadableStream
	ReadStream: null,	
	/**
	 * 
	 */
	//>public type::fs.WriteableStream
	WriteStream: null,	
	/**
	 * 
	 */
	//>public type::fs.WriteableStream ; support legacy name
	FileWriteStream: null, 
	// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
	
	/**
	 * fs.createReadStream(path, [options])
	 * <p>Returns a new ReadStream object (See Readable Stream).
	 * <p>options is an object with the following defaults:
	 * <pre>
	 * { 'flags': 'r'
	 *   , 'encoding': null
	 *   , 'mode': 0666
	 *   , 'bufferSize': 4 * 1024
	 * }
	 *</pre>
	 *<p>options can include start and end values to read a range of bytes from the 
	 * file instead of the entire file. Both start and end are inclusive and start at 0. 
	 * When used, both the limits must be specified always.
	 * <p>
	 * An example to read the last 10 bytes of a file which is 100 bytes long:
	 * <pre>
	 * fs.createReadStream('sample.txt', {start: 90, end: 99});
	 * </pre>
	 * 
	 */
	//> public fs.ReadableStream createReadStream(String path, org.nodejs.fs.data.readStreamOptions? options)
	createReadStream: vjo.NEEDS_IMPL,
	
	/**
	 * fs.createWriteStream(path, [options])
	 * Returns a new WriteStream object (See Writable Stream).
	 * <p>options is an object with the following defaults:
	 * <pre>
	 * { 'flags': 'w'
	 *     , 'encoding': null
	 *     , 'mode': 0666
	 *     , 'bufferSize: 4096
	 * }
	 * </pre>
	 */
	//> public fs.WriteableStream createWriteStream(String path, fs.data.writeStreamOptions? options)
	createWriteStream: vjo.NEEDS_IMPL,
	
	/**
	 * fs.chmod(path, mode, [callback])
	 * <p>Asynchronous chmod(2). No arguments other than a possible exception 
	 * are given to the completion callback.
	 */
	//> public void chmod(String path, {String | int} mode, fs.func.error? callback)
	chmod: vjo.NEEDS_IMPL,
	
	/**
	 * fs.chmodSync(path, mode)
	 * <p>Synchronous chmod(2).
	 */
	//> public void chmod(String path, {String | int} mode)
	chmodSync: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public int chown(String path, int uid, int gid, Function? callback)
	chown: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public int chownSync(String path, int uid, int gid)
	chownSync: vjo.NEEDS_IMPL,
	
	/**
	 * fs.stat(path, [callback])
	 * <p>Asynchronous stat(2). The callback gets two arguments (err, stats) 
	 * where stats is a fs.Stats object. It looks like this:
	 * <pre>
	 * { dev: 204
	 * , ino: 305352
	 * , mode: 16877
	 * , nlink: 12
	 * , uid: 1000
	 * , gid: 1000
	 * , rdev: 0
	 * , size: 4096
	 * , blksize: 4096
	 * , blocks: 8
	 * , atime: '2009-06-29T11:11:55Z'
	 * , mtime: '2009-06-29T11:11:40Z'
	 * , ctime: '2009-06-29T11:11:40Z' 
	 * }
	 * </pre>
	 */
	//> public void stat(String path, fs.func.stat? callback)
	stat: vjo.NEEDS_IMPL,
	
	//> public void stat2()
	stat2: vjo.NEEDS_IMPL,
	
	/**
	 * fs.lstat(path, [callback])
	 * <p>Asynchronous lstat(2). The callback gets two arguments (err, stats) 
	 * where stats is a fs.Stats object.
	 */
	//> public void lstat(String path, fs.func.lstat? callback)
	lstat: vjo.NEEDS_IMPL,
	
	/**
	 * fs.lstatSync(path)
	 * <p>Synchronous lstat(2). Returns an instance of fs.Stats.
	 */
	//> public fs.Stats lstatSync(String path)
	lstatSync: vjo.NEEDS_IMPL,
	
	/**
	 * fs.fstat(fd, [callback])
	 * <p>Asynchronous fstat(2). The callback gets two arguments (err, stats) 
	 * where stats is a fs.Stats object.
	 */
	//> public void fstat({int | fs.FileDescriptor} fd, fs.func.fstat? callback)
	fstat: vjo.NEEDS_IMPL,
	
	/**
	 * fs.fstatSync(fd)
	 * <p>Synchronous fstat(2). Returns an instance of fs.Stats.
	 */
	//> public fs.Stats fstatSync({int | fs.FileDescriptor} fd)
	fstatSync: vjo.NEEDS_IMPL,
	
	/**
	 * fs.statSync(path)
	 * <p>Synchronous stat(2). Returns an instance of fs.Stats.
	 */
	//> public fs.Stats statSync(String path)
	statSync: vjo.NEEDS_IMPL,
	
	/**
	 * fs.link(srcpath, dstpath, [callback])
	 * <p>Asynchronous link(2). No arguments other than a possible exception are 
	 * given to the completion callback
	 */
	//> public void link(String srcpath, String dstpath, fs.func.error? callback)
	link: vjo.NEEDS_IMPL,
	
	/**
	 * fs.linkSync(dstpath, srcpath)
	 * <p>Synchronous link(2).
	 */
	//> public Object linkSync(String srcpath, String dstpath)
	linkSync: vjo.NEEDS_IMPL,
	
	/**
	 * fs.symlink(linkdata, path, [callback])
	 * <p>Asynchronous symlink(2). No arguments other than a possible exception 
	 * are given to the completion callback.
	 */
	//> public void symlink(String oldPath, String newPath, fs.func.error? callback)
	symlink: vjo.NEEDS_IMPL,
	
	/**
	 * fs.symlinkSync(linkdata, path)
	 * <p>Synchronous symlink(2).
	 */
	//> public int symlinkSync(String oldPath, String newPath)
	symlinkSync: vjo.NEEDS_IMPL,
	
	/**
	 * fs.readlink(path, [callback])
	 * <p>Asynchronous readlink(2). The callback gets two arguments (err, resolvedPath). 
	 */
	//> public void readlink(String path, fs.func.readlink? callback)
	readlink: vjo.NEEDS_IMPL,
	
	/**
	 * fs.readlinkSync(path)
	 * <p>Synchronous readlink(2). Returns the resolved path.
	 */
	//> public String readlinkSync(String? path)
	readlinkSync: vjo.NEEDS_IMPL,
	
	/**
	 * fs.realpath(path, [callback])
	 * <p>Asynchronous realpath(2). The callback gets two arguments (err, resolvedPath).
	 */
	//> public void realpath(String? path, boolean? cache, fs.func.realpath? callback)
	realpath: vjo.NEEDS_IMPL,
	
	/**
	 * fs.realpathSync(path)
	 * Synchronous realpath(2). Returns the resolved path.
	 */
	//> public Object realpathSync(String? path, boolean? cache)
	realpathSync: vjo.NEEDS_IMPL,
	
	/**
	 * fs.unlink(path, [callback])
	 * <p>Asynchronous unlink(2). No arguments other than a possible exception 
	 * are given to the completion callback.
	 */
	//> public void unlink(String path, fs.func.error? callback)
	unlink: vjo.NEEDS_IMPL,
	
	/**
	 * fs.unlinkSync(path)
	 * <p>Synchronous unlink(2).
	 */
	//> public Object unlinkSync(String path)
	unlinkSync: vjo.NEEDS_IMPL,
	
	// More from actual code inspections...
	/**
	 * Asynchronous ftruncate(2). No arguments other than a possible exception are given to the completion callback.
	 */
	//> public void truncate({int | fs.FileDescriptor} fd, int len, fs.func.error? callback)
	truncate: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Object truncateSync({int | fs.FileDescriptor} fd, int len)
	truncateSync: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public void rename(String oldPath, String newPath, fs.func.error? callback)
	rename: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Object rename(String oldPath, String newPath)
	renameSync: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public void rmdir(String path, fs.func.error? callback)
	rmdir: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Object rmdirSync(String path)
	rmdirSync: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public void fdatasync({int | fs.FileDescriptor} fd, Function? callback)
	fdatasync: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Object fdatasyncSync({int | fs.FileDescriptor} fd)
	fdatasyncSync: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public void fsync({int | fs.FileDescriptor} fd, Function? callback)
	fsync: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Object fsync({int | fs.FileDescriptor} fd)
	fsyncSync: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public void mkdir(String path, int mode, fs.func.error? callback)
	mkdir: vjo.NEEDS_IMPL,
	
	//> public Object mkdirSync(String path, int mode)
	makedirSync: vjo.NEEDS_IMPL,
	
	/**
	 * fs.readdir(path, [callback])
	 * <p>Asynchronous readdir(3). Reads the contents of a directory. The 
	 * callback gets two arguments (err, files) where files is an array of the 
	 * names of the files in the directory excluding '.' and '..'.
	 */
	//> public void readdir(String path, fs.func.readdir? callback)
	readdir: vjo.NEEDS_IMPL,
	
	/**
	 * fs.readdirSync(path)
	 * <p>Synchronous readdir(3). Returns an array of filenames excluding '.' and '..'.
	 */
	//> public String[] readddirSync(String path)
	readdirSync: vjo.NEEDS_IMPL,
	
	// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
	
	/**
	 * fs.close(fd, [callback])
	 * <p>Asynchronous close(2). No arguments other than a possible exception 
	 * are given to the completion callback.
	 */
	//> public void close({int | fs.FileDescriptor} fd, fs.func.error? callback)
	close: vjo.NEEDS_IMPL,
	
	/**
	 * fs.closeSync(fd)
	 * <p>Synchronous close(2).
	 */
	//> public boolean closeSync({int | fs.FileDescriptor} fd)
	closeSync: vjo.NEEDS_IMPL,
	
	/**
	 * fs.open(path, flags, mode=0666, [callback])
	 * <p>Asynchronous file open. See open(2). Flags can be 'r', 'r+', 'w', 'w+', 
	 * 'a', or 'a+'. The callback gets two arguments (err, fd). 
	 */
	//> public void open(String path, {int | String} flags, fs.func.open callback)
	//> public void open(String path, {int | String} flags, int? mode, fs.func.open? callback)
	open: vjo.NEEDS_IMPL,
	
	/**
	 * fs.openSync(path, flags, mode=0666)
	 * <p>Synchronous open(2). 
	 */
	//> public Object openSync(String path, {int | String} flags, int? mode) ; MrP - should return {int | FileDescriptor}
	openSync: vjo.NEEDS_IMPL,
	
	/**
	 * fs.write(fd, buffer, offset, length, position, [callback])
	 * <p>Write buffer to the file specified by fd.
	 * <p>offset and length determine the part of the buffer to be written.
	 * <p>position refers to the offset from the beginning of the file where 
	 * this data should be written. If position is null, the data will be 
	 * written at the current position. See pwrite(2).
	 * <p>The callback will be given two arguments (err, written) where written 
	 * specifies how many bytes were written.
	 */
	//> public void write({int | fs.FileDescriptor} fd, Buffer buffer, int offset, int length, int position, fs.func.write? callback)
	//> public void write({int | fs.FileDescriptor} fd, String data, int position, String encoding, fs.func.write? callback) ; MrP - legacy API
	 write: vjo.NEEDS_IMPL,
	
	/**
	 * fs.writeSync(fd, buffer, offset, length, position)
	 * <p>Synchronous version of buffer-based fs.write(). Returns the number of 
	 * bytes written.
	 * <p>
	 * fs.writeSync(fd, str, position, encoding='utf8')
	 * <p>Synchronous version of string-based fs.write(). Returns the number of 
	 * bytes written.
	 */
	//> public int writeSync({int | fs.FileDescriptor} fd, Buffer buffer, int? offset, int? length, int? position)
	//> public int writeSync({int | fs.FileDescriptor} fd, String str, int? position, String? encoding)
	 writeSync: vjo.NEEDS_IMPL,
	
	/**
	 * s.read(fd, buffer, offset, length, position, [callback])
	 * <p>Read data from the file specified by fd.
	 * <p>buffer is the buffer that the data will be written to.
	 * <p>offset is offset within the buffer where writing will start.
	 * <p>length is an integer specifying the number of bytes to read.
	 * <p>position is an integer specifying where to begin reading from in the file. If position is null, data will be read from the current file position.
	 * <p>The callback is given the two arguments, (err, bytesRead).
	 */
	//> public void read({int | fs.FileDescriptor} fd, Buffer buf, int offset, int length, int position, fs.func.read? callback)
	//> public void read({int | fs.FileDescriptor} fd, int length, int position, String encoding, fs.func.read? callback)
	read: vjo.NEEDS_IMPL,
	
	/**
	 * fs.readSync(fd, buffer, offset, length, position)
	 * <p>Synchronous version of buffer-based fs.read. Returns the number of 
	 * bytesRead.
	 * <p>fs.readSync(fd, length, position, encoding)
	 * <p>Synchronous version of string-based fs.read. Returns the number of 
	 * bytesRead.
	 */
	//> public int readSync({int | fs.FileDescriptor} fd, Buffer buf, int offset, int length, int position)
	//> public int readSync({int | fs.FileDescriptor} fd, int length, int position, String encoding)
	 readSync: vjo.NEEDS_IMPL,
	
	/**
	 * fs.readFile(filename, [encoding], [callback])
	 * <p>Asynchronously reads the entire contents of a file. Example:
	 * <pre>
	 * fs.readFile('/etc/passwd', function (err, data) {
	 *   if (err) throw err;
	 *   console.log(data);
	 * });
	 * </pre>
	 * The callback is passed two arguments (err, data), where data is the 
	 * contents of the file.
	 * <p>If no encoding is specified, then the raw buffer is returned.
	 */
	//> public void readFile(String filename, fs.func.readFile callback)
	//> public void readFile(String filename, String? encoding, fs.func.readFile? callback)
	readFile: vjo.NEEDS_IMPL,
	
	/**
	 * fs.readFileSync(filename, [encoding])
	 * <p>Synchronous version of fs.readFile. Returns the contents of the filename.
	 * <p>If encoding is specified then this function returns a string. Otherwise 
	 * it returns a buffer.
	 */
	//> public Buffer readFileSync(String filename)
	//> public String readFileSync(String filename, String encoding)	
	readFileSync: vjo.NEEDS_IMPL,
	
	/**
	 * Undocumented 
	 */
	//> public void sendfile({int | FileDescriptor} outFd, {int | FileDescriptor} inFd, int offset, int length, Function? callback)
	sendfile: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Object sendfileSync({int | FileDescriptor} outFd, {int | FileDescriptor} inFd, int offset, int length)
	sendfileSync: vjo.NEEDS_IMPL,
	
	/**
	 * fs.writeFile(filename, data, encoding='utf8', [callback])
	 * <p>Asynchronously writes data to a file. data can be a string or a buffer.
	 * <p>Example:
	 * <pre>
	 * fs.writeFile('message.txt', 'Hello Node', function (err) {
	 *   if (err) throw err;
	 *   console.log('It\'s saved!');
	 * })
	 * </pre>
	 */
	//> public void writeFile(String filename, Buffer data, fs.func.error? callback)
	//> public void writeFile(String filename, String data, String? encoding, fs.func.error? callback)
	//> public void writeFile(String filename, String data, fs.func.error callback)
	writeFile: vjo.NEEDS_IMPL,
	
	/**
	 * fs.writeFileSync(filename, data, encoding='utf8')
	 * <p>The synchronous version of fs.writeFile.
	 */
	//> public void writeFileSync(String filename, {String | Buffer} data, String? encoding)
	writeFileSync: vjo.NEEDS_IMPL,
	
	/**
	 * fs.watchFile(filename, [options], listener)
	 * <p>Watch for changes on filename. The callback listener will be called 
	 * each time the file changes.
	 * <p>The second argument is optional. The options if provided should be an 
	 * object containing two members a boolean, persistent, and interval, a 
	 * polling value in milliseconds. The default is 
	 * {persistent: true, interval: 0}.
	 * <p>The listener gets two arguments the current stat object and the 
	 * previous stat object:
	 * <pre>
	 * fs.watchFile(f, function (curr, prev) {
	 *   console.log('the current mtime is: ' + curr.mtime);
	 *   console.log('the previous mtime was: ' + prev.mtime);
	 * });
	 * </pre>
	 * These stat objects are instances of fs.Stat. 
	 */
	//> public void watchFile(String filename, fs.func.watchFile listener)
	//> public void watchFile(String filename, fs.data.watchFileOptions options, fs.func.watchFile listener)
	watchFile: vjo.NEEDS_IMPL,
	
	/**
	 * fs.unwatchFile(filename)
	 * <p>Stop watching for changes on filename.
	 */
	//> public void unwatchFile(String filename)
	unwatchFile: vjo.NEEDS_IMPL
})
.options({
	metatype: true
})
.endType();