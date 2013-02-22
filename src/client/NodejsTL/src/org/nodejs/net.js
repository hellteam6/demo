/**
 * 
 */
//> public
vjo.ctype('org.nodejs.net') 
//> needs(org.nodejs.buffer.Buffer)
.props({
	//vvvvvvvvvvvvvvvvvvvv NESTED TYPES vvvvvvvvvvvvvvvvvvvv
	// exported from module net.js. 
	// DON'T get confused on the other Server type exported from module http.js
	/**
	 * 
	 */
	//> public
	Server: vjo.ctype()
		//> needs(org.nodejs.stream.Stream)
		//> needs(org.nodejs.fs.FileDescriptor)
		//> needs(org.nodejs.events.EventEmitter)
		.inherits('org.nodejs.events.EventEmitter<Server>')
		.props({
			/**
			 * 
			 */
			//> public
			data: vjo.otype().defs({
				/**
				 * 
				 */
				//> public dynamic
				create: {	
					/**
					 * 
					 */
					//> public int?
					fd: null,			
					
					/**
					 * 
					 */
					//> public String?
					type: null,			
					
					/**
					 * 
					 */
					//> public boolean?
					allowHalfOpen: null	
				},
					
				/**
				 * 
				 */
				//> public
				address: {				
					/**
					 * 
					 */
					 //> public String
					 address: null,		
					 /**
					  * 
					  */
					 //> public int
					 port: null			
				}
			}).endType(),
			
			/**
			 * 
			 */
			//> public
			event: vjo.otype().defs({
				/**
				 * function (socket) {}
				 * <p>Emitted when a new connection is made. socket is an instance of 
				 * net.Socket.
				 */
				//> public void connection(org.nodejs.net.Socket? socket)
				connection: vjo.NEEDS_IMPL,
				
				/**
				 * function () {}
				 * <p>Emitted when the server closes.
				 */
				//> public void close()
				close: vjo.NEEDS_IMPL
			}).endType()
		})
		.protos({
			/**
			 * 
			 */
			//> public Server constructs(Object options, net.Server.event.connection? listener)
			//> public Server constructs(net.Server.event.connection? listener)
			constructs: function() {},
			
			/**
			 * Set this property to reject connections when the server's connection count 
			 * gets high.
			 */
			//> public int
			maxConnections: null,
			
			/**
			 * The number of concurrent connections on the server.
			 */
			//> public int ; from code
			connections: null, 		
			
			/**
			 * 
			 */
			//> public boolean ; from code
			allowHalfOpen: null,	
			
			/**
			 * 
			 */
			//> public void pause(int? msecs)
			pause: vjo.NEEDS_IMPL,
			
			/**
			 * Begin accepting connections on the specified port and host. If the host 
			 * is omitted, the server will accept connections directed to any IPv4 
			 * address (INADDR_ANY).
			 * <p>
			 * This function is asynchronous. The last parameter callback will be called 
			 * when the server has been bound.
			 * <p>
			 * See net.Server for more information.
			 */
			//> public void listen(Function? callback) ; // from net.js - not in docs
			//> public void listen(int port, Function callback)
			//> public void listen(int port, String? host, Function? callback)
			//> public void listen(String host, Function? callback)
			listen: vjo.NEEDS_IMPL,
			
			
//			//> public void listen(int port, net.Server.event.connection? listener)
//			//> public void listen(int port, String hostAddr, net.Server.event.connection? listener)
//			//> public void listen(String hostAddr, net.Server.event.connection? listener)
//			listen: vjo.NEEDS_IMPL,	
			
			/**
			 * 
			 */
			//> public void listenFD({int | FileDescriptor} fd, String? type) ; throws Error
			listenFD: vjo.NEEDS_IMPL,
			
			/**
			 * 
			 */
			//> public net.Server.data.address address()
			address: vjo.NEEDS_IMPL,
			
			/**
			 * 
			 */
			//> public void close() ; throws Error
			close: vjo.NEEDS_IMPL
		})
	.endType(),

	/**
	 * This object is an abstraction of of a TCP or UNIX socket. net.Stream instance 
	 * implement a duplex stream interface. They can be created by the user and used as a 
	 * client (with connect()) or they can be created by Node and passed to the user 
	 * through the 'connection' event of a server.
	 * <p>net.Stream instances are EventEmitters with the following events:
	 * <p>
	 * Event: 'connect'<p>
	 * function () { }
	 * Emitted when a stream connection successfully is established. See connect().
	 * <p>
	 * Event: 'secure'<p>
	 * function () { }
	 * Emitted when a stream connection successfully establishes an SSL handshake with 
	 * its peer.
	 * <p>
	 * Event: 'data'<p>
	 * function (data) { }
	 * Emitted when data is received. The argument data will be a Buffer or String. 
	 * Encoding of data is set by stream.setEncoding(). (See the section on Readable 
	 * Stream for more information.)
	 * <p>
	 * Event: 'end'<p>
	 * function () { }
	 * Emitted when the other end of the stream sends a FIN packet. After this is emitted 
	 * the readyState will be 'writeOnly'. One should probably just call stream.end() 
	 * when this event is emitted.
	 * <p>
	 * Event: 'timeout'<p>
	 * function () { }
	 * Emitted if the stream times out from inactivity. This is only to notify that the 
	 * stream has been idle. The user must manually close the connection.
	 * See also: stream.setTimeout()
	 * <p>
	 * Event: 'drain'<p>
	 * function () { }
	 * Emitted when the write buffer becomes empty. Can be used to throttle uploads.
	 * <p>
	 * Event: 'error'<p>
	 * function (exception) { }
	 * Emitted when an error occurs. The 'close' event will be called directly following 
	 * this event.
	 * <p>
	 * Event: 'close'<p>
	 * function (had_error) { }
	 * Emitted once the stream is fully closed. The argument had_error is a boolean which 
	 * says if the stream was closed due to a transmission error.
	 */
	// definition from module net.js
	//> public
	Socket: vjo.ctype()
		//> needs(org.nodejs.fs.FileDescriptor)
		//> needs(org.nodejs.crypto.Credentials)
		//> needs(org.nodejs.crypto.Cipher)
		//> needs(org.nodejs.buffer.Buffer)
		//> needs(org.nodejs.events.EventEmitter)
		//> needs(org.nodejs.stream.Stream)
		.inherits('org.nodejs.stream.Stream<Socket>')
		.props({
//			//'closed', 'open', 'opening', 'readOnly', or 'writeOnly'.
//			READY_STATE_CLOSED: 'closed',		//< public final String
//			READY_STATE_OPEN: 'open',			//< public final String
//			READY_STATE_OPENING: 'opening',		//< public final String
//			READY_STATE_READ_ONLY: 'readOnly', 	//< public final String
//			READY_STATE_WRITE_ONLY: 'writeOnly',//< public final String
//				
//			// 'ascii', 'utf8', or 'base64'
//			ENCODING_ASCII: 'ascii',			//< public final String
//			ENCODING_UTF8: 'utf8',				//< public final String
//			ENCODING_BASE64: 'base64',			//< public final String
			
			/**
			 * 
			 */
			//> public
			data: vjo.otype().defs({
				/**
				 * 
				 */
				//> public dynamic
				create: {	
					/**
					 * 
					 */
					//> public int?
					fd: null,			
					
					/**
					 * 
					 */
					//> public String?
					type: null,			
					
					/**
					 * 
					 */
					//> public boolean?
					allowHalfOpen: null	
				}
			}).endType(),
			
			/**
			 * 
			 */
			//> public
			event: vjo.otype().defs({
				/**
				 * function () { }
				 * <p>Emitted when a stream connection successfully is established. See 
				 * connect().
				 */
				//> public void connect()
				connect: vjo.NEEDS_IMPL,
				
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
				 * function () { }
				 * <p>Emitted if the stream times out from inactivity. This is only to 
				 * notify that the stream has been idle. The user must manually close 
				 * the connection.
				 * <p>See also: stream.setTimeout()
				 */
				//> public void timeout()
				timeout: vjo.NEEDS_IMPL,
				
				/**
				 * function () { }
				 * <p>Emitted when the write buffer becomes empty. Can be used to 
				 * throttle uploads.
				 */
				//> public void drain()
				drain: vjo.NEEDS_IMPL
				
	//			/**
	//			 * function () { }
	//			 * <p>Emitted when a stream connection successfully establishes an SSL 
	//			 * handshake with its peer.
	//			 */
	//			//> public void secure()
	//			secure: vjo.NEEDS_IMPL,
	//			
	//			/**
	//			 * Emitted when a file descriptor is received on the stream. Only UNIX 
	//			 * streams support this functionality; all others will simply never emit 
	//			 * this event.
	//			 */
	//			//> public void fd({int | fs.FileDescriptor}? fd)
	//			fd: vjo.NEEDS_IMPL
			}).endType()
		})
		.protos({
			/**
			 * 
			 */
			//> public boolean
			writable: null,
			
			/**
			 * 
			 */
			//> public boolean
			readable: null,		
			
			/**
			 * 
			 */
			//> public int ; // MrP - should be {int | FileDescriptor}
			fd: null,			
			
			/**
			 * 
			 */
			//> public String
			type: null,		
						
			/**
			 * 
			 */
			//> public String
			readyState: null,	
			
			/**
			 * net.Socket has the property that socket.write() always works. This is to 
			 * help users get up an running quickly. The computer cannot necessarily 
			 * keep up with the amount of data that is written to a socket - the network 
			 * connection simply might be too slow. Node will internally queue up the 
			 * data written to a socket and send it out over the wire when it is possible. 
			 * (Internally it is polling on the socket's file descriptor for being writable).
			 * <p>
			 * The consequence of this internal buffering is that memory may grow. This 
			 * property shows the number of characters currently buffered to be written. 
			 * (Number of characters is approximately equal to the number of bytes to be 
			 * written, but the buffer may contain strings, and the strings are lazily 
			 * encoded, so the exact number of bytes is not known.)
			 * <p>
			 * Users who experience large or growing bufferSize should attempt to 
			 * "throttle" the data flows in their program with pause() and resume()`.
			 */
			//> public int
			bufferSize: null,	
			
			/**
			 * 
			 */
			//> public net.Server
			server: null,
			
			/**
			 * 
			 */
			//> public Socket constructs(int? port, String? host)
			//> public Socket constructs(net.Socket.data.create options)
			constructs: function() {},
					
			/**
			 * stream.remoteAddress
			 * <p>The string representation of the remote IP address. For example, 
			 * '74.125.127.100' or '2001:4860:a005::68'.
			 * <p>This member is only present in server-side connections.
			 */
			//> public String
			remoteAddress: null,	
			
			/**
			 * 
			 */
			//> public int
			remotePort: null,
					
			/**
			 * stream.write(data, encoding='ascii')
			 * <p>Sends data on the stream. The second parameter specifies the encoding 
			 * in the case of a string--it defaults to ASCII because encoding to UTF8 is 
			 * rather slow.
			 * <p>Returns true if the entire data was flushed successfully to the kernel 
			 * buffer. Returns false if all or part of the data was queued in user memory. 
			 * 'drain' will be emitted when the buffer is again free.
			 */
			//> public boolean write(String data, String encoding) ; throws Error
			//> public boolean write(String data, String encoding, Function cb)
			//> public boolean write(String data, String encoding, {int | FileDescriptor}, Function? cb)
			//> public boolean write(String data, {int | FileDescriptor} fd, Function? cb)
			//> public boolean write(String data, Function? cb)
			write: vjo.NEEDS_IMPL,	
			
			/**
			 * 
			 */
			//> public boolean flush()
			flush: vjo.NEEDS_IMPL,			
					
			/**
			 * stream.setEncoding(encoding=null)
			 * <p>Sets the encoding (either 'ascii', 'utf8', or 'base64') for data that 
			 * is received.
			 */
			//> public void setEncoding(String? encoding)
			setEncoding: vjo.NEEDS_IMPL, 			
			
			/**
			 * socket.connect(port, host='127.0.0.1')
			 * <p>Opens a socket to the specified port and host. createConnection() also 
			 * opens a socket; normally this method is not needed. Use this only if a 
			 * stream is closed and you want to reuse the object to connect to another 
			 * server.
			 * <p>This function is asynchronous. When the 'connect' event is emitted the 
			 * stream is established. If there is a problem connecting, the 'connect' 
			 * event will not be emitted, the 'error' event will be emitted with the 
			 * exception.
			 */
			//> public Stream connect(String path, Function? callback) ; throws Error
			//> public Stream connect(int port, String? host, Function? callback) ; throws Error
			connect: vjo.NEEDS_IMPL,			
			
			/**
			 * 
			 */
			//> public String address()
			address: vjo.NEEDS_IMPL,
			
			/**
			 * socket.setNoDelay(noDelay=true)
			 * <p>Disables the Nagle algorithm. By default TCP connections use the Nagle 
			 * algorithm, they buffer data before sending it off. Setting noDelay will 
			 * immediately fire off data each time stream.write() is called.
			 */
			//> public void setNoDelay(boolean? noDelay)
			setNoDelay: vjo.NEEDS_IMPL,
		
			/**
			 * socket.setTimeout(timeout)
			 * <p>Sets the socket to timeout after timeout milliseconds of inactivity on 
			 * the stream. By default net.Socket do not have a timeout.
			 * <p>When an idle timeout is triggered the stream will receive a 'timeout' 
			 * event but the connection will not be severed. The user must manually 
			 * end() or destroy() the stream.
			 * <p>If timeout is 0, then the existing idle timeout is disabled.
			 */
			//> public void setTimeout(int timeoutMillis, Function? callback)
			setTimeout: vjo.NEEDS_IMPL,
			
			/**
			 * socket.setKeepAlive(enable=false, [initialDelay])
			 * <p>Enable/disable keep-alive functionality, and optionally set the initial 
			 * delay before the first keepalive probe is sent on an idle stream. Set 
			 * initialDelay (in milliseconds) to set the delay between the last data 
			 * packet received and the first keepalive probe. Setting 0 for initialDelay 
			 * will leave the value unchanged from the default (or previous) setting.
			 */
			//> public void setKeepAlive(boolean? enable, int? initialDelayMillis)
			setKeepAlive: vjo.NEEDS_IMPL,	
					
			/**
			 * stream.pause()
			 * <p>Pauses the reading of data. That is, 'data' events will not be emitted. 
			 * Useful to throttle back an upload.
			 */
			//> public void pause()
			pause: vjo.NEEDS_IMPL,
			
			/**
			 * stream.resume()
			 * <p>Resumes reading after a call to pause().
			 */
			//> public void resume()
			resume: vjo.NEEDS_IMPL,
			
			/**
			 * 
			 */
			//> public void destroySoon()
			destroySoon: vjo.NEEDS_IMPL,				
			
			/**
			 * stream.destroy()
			 * <p>Ensures that no more I/O activity happens on this stream. Only 
			 * necessary in case of errors (parse error or so).
			 */
			//> public void destroy(Object? exception)
			destroy: vjo.NEEDS_IMPL,		

			/**
			 * stream.end([data], [encoding])
			 * <p>Half-closes the stream. I.E., it sends a FIN packet. It is possible 
			 * the server will still send some data. After calling this readyState will 
			 * be 'readOnly'.
			 * <p>If data is specified, it is equivalent to calling 
			 * stream.write(data, encoding) followed by stream.end().
			 */
			//> public void end(String? data, String? encoding)
			end: vjo.NEEDS_IMPL,
			
			/**
			 * 
			 */
			//> public void open({int | FileDescriptor} fd, String? type)
			open: vjo.NEEDS_IMPL
		})
	.endType()
	//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
})
.protos({
	// vvvvvvvvvvvvvv  Exported Types  vvvvvvvvvvvvvvv
	/**
	 * 
	 */
	//> public type::net.Socket
	Socket: null,	
	
	/**
	 * 
	 */
	//> public type::net.Socket
	Stream: null,	// MrP - maintain old name
	
	/**
	 * 
	 */
	//> public type::net.Server
	Server: null,	 
	// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
	
	/**
	 * 
	 */
	//> public net.Socket createConnection(int? port, String? host)
	createConnection: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public net.Server createServer(net.Server.data.create, net.Server.event.connection? listener)
	//> public net.Server createServer(net.Server.event.connection? listener)
	createServer: vjo.NEEDS_IMPL,
	
	//
	// isIP functions
	//
	/**
	 * net.isIP(input)
	 * <p>Tests if input is an IP address. Returns 0 for invalid strings, 
	 * returns 4 for IP version 4 addresses, and returns 6 for IP version 6 
	 * addresses.
	 */
	//> public int isIP(String input)
	isIP: vjo.NEEDS_IMPL,
	
	/**
	 * net.isIPv4(input)
	 * <p>Returns true if input is a version 4 IP address, otherwise returns false.
	 */
	//> public boolean isIPv4(String input)
	isIPv4: vjo.NEEDS_IMPL,
	
	/**
	 * net.isIPv46(input)
	 * <p>Returns true if input is a version 6 IP address, otherwise returns false.
	 */	//> public boolean isIPv6(String input)
	isIPv6: vjo.NEEDS_IMPL
})
.options({
	metatype: true
})
.endType();