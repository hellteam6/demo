// Exports:
// IncomingMessage
// OutgoingMessage
// ServerResponse
// ClientRequest
// Client <- net.Stream
// Server
// createServer(listenerFunc)
// createClient(port, host, https, credentials)
/**
 * 
 */
//> public
vjo.ctype('org.nodejs.http') 
//> needs(org.nodejs.crypto.Credentials)
.props({
	/**
	 * 
	 */
	//> public
	event: vjo.otype().defs({
		/**
		 * 
		 */
		//> public void createServer(http.ServerRequest, http.ServerResponse)
		createServer: vjo.NEEDS_IMPL
	}).endType(),
	
	// vvvvvvvvvvvvvvv NESTED TYPES vvvvvvvvvvvvvvvvvv
	/**
	 * 
	 */
	//> public
	STATUS_CODES: vjo.ctype() 
		.protos({
			/**
			 * 
			 */
			//> public int
			 Continue: 100, 			
			 
			/**
			 * 
			 */
			//> public int
			 Switching_Protocols: 101, 	
			 
			/**
			 * RFC 2518, obsoleted by RFC 4918
			 */
			//> public int
			 Processing: 102,			  
			 
			/**
			 * 
			 */
			//> public int
			 OK: 200,					
			 
			/**
			 * 
			 */
			//> public int
			 Created: 201, 				
			 
			/**
			 * 
			 */
			//> public int
			 Accepted: 202, 			
			 
			 /**
			 * 
			 */
			//> public int
			 Non_Authoritative_Information: 203,	
			 
			/**
			 * 
			 */
			//> public int
			 No_Content: 204,			
			 
			/**
			 * 
			 */
			//> public int
			 Reset_Content: 205,		
			 
			/**
			 * 
			 */
			//> public int
			 Partial_Content: 206,		
			 
			/**
			 * RFC 4918
			 */
			//> public int
			 Multi_Status: 207, 		     
			 
			/**
			 * 
			 */
			//> public int
			 Multiple_Choices: 300, 	
			 
			/**
			 * 
			 */
			//> public int
			 Moved_Permanently: 301, 	
			 
			 /**
			 * 
			 */
			//> public int
			 Moved_Temporarily: 302,	
			 
			/**
			 * 
			 */
			//> public int
			 See_Other: 303,			
			 
			/**
			 * 
			 */
			//> public int
			 Not_Modified: 304,			
			 
			/**
			 * 
			 */
			//> public int
			 Use_Proxy: 305,			
			 
			/**
			 * 
			 */
			//> public int
			 Temporary_Redirect: 307,	
			 
			/**
			 * 
			 */
			//> public int
			 Bad_Request: 400,			
			 
			/**
			 * 
			 */
			//> public int
			 Unauthorized: 401,			
			 
			/**
			 * 
			 */
			//> public int
			 Payment_Required: 402,		
			 
			/**
			 * 
			 */
			//> public int
			 Forbidden: 403,			
			 
			/**
			 * 
			 */
			//> public int
			 Not_Found: 404,			
			 
			/**
			 * 
			 */
			//> public int
			 Method_Not_Allowed: 405,	
			 
			/**
			 * 
			 */
			//> public int
			 Not_Acceptable: 406,		
			 
			/**
			 * 
			 */
			//> public int
			 Proxy_Authentication_Required: 407, 
			 
			/**
			 * 
			 */
			//> public int
			 Request_Time_out: 408,		
			 
			/**
			 * 
			 */
			//> public int
			 Conflict: 409,				
			 
			/**
			 * 
			 */
			//> public int
			 Gone: 410,					
			 
			/**
			 * 
			 */
			//> public int
			 Length_Required: 411,		
			 
			/**
			 * 
			 */
			//> public int
			 Precondition_Failed: 412,	
			 
			/**
			 * 
			 */
			//> public int
			 Request_Entity_Too_Large: 413,	
			 
			/**
			 * 
			 */
			//> public int
			 Request_URI_Too_Large: 414,	
			 
			/**
			 * 
			 */
			//> public int
			 Unsupported_Media_Type: 415,	
			 
			/**
			 * 
			 */
			//> public int
			 Requested_Range_Not_Satisfiable: 416,	
			 
			/**
			 * 
			 */
			//> public int
			 Expectation_Failed: 417,	
			 

	//		  418 : 'I\'m a teapot: 418, //< public int	 ; // RFC 2324
			
			/**
			 * RFC 4918
			 */
			//> public int
			 Unprocessable_Entity: 422,	
			 
			/**
			 *  RFC 4918
			 */
			//> public int
			 Locked: 423,				
			 
			/**
			 * RFC 4918
			 */
			//> public int
			 Failed_Dependency: 424,	
			 
			/**
			 *  RFC 4918
			 */
			//> public int
			 Unordered_Collection: 425,	
			 
			/**
			 *  RFC 2817
			 */
			//> public int
			 Upgrade_Required: 426,		
			 
			/**
			 * 
			 */
			//> public int
			 Internal_Server_Error: 500,
			 
			/**
			 * 
			 */
			//> public int
			 Not_Implemented: 501,		
			 
			/**
			 * 
			 */
			//> public int
			 Bad_Gateway: 502,			
			 
			/**
			 * 
			 */
			//> public int
			 Service_Unavailable: 503,	
			 
			/**
			 * 
			 */
			//> public int
			 Gateway_Time_out: 504,		
			 
			/**
			 * 
			 */
			//> public int
			 HTTP_Version_not_supported: 505,	
			 
			/**
			 * RFC 2295
			 */
			//> public int
			 Variant_Also_Negotiates: 506,		
			 
			/**
			 *  RFC 4918
			 */
			//> public int
			 Insufficient_Storage: 507,			
			 
			/**
			 * 
			 */
			//> public int
			 Bandwidth_Limit_Exceeded: 509,		
			 
			/**
			 * RFC 2774
			 */
			//> public int
			 Not_Extended: 510			
			 
		})
	.endType(),
	
	/**
	 * This object is created internally by a HTTP server--not by the user. It is passed 
	 * as the second parameter to the 'request' event. It is a Writable Stream.
	 */
	//> public
	ServerResponse:vjo.ctype()
	 	//> needs(org.nodejs.buffer.Buffer)
		//> needs(org.nodejs.net.Socket)
		.inherits('org.nodejs.http.OutgoingMessage<ServerResponse>')
		.protos({
			/**
			 * 
			 */
			//> public http.OutgoingMessage constructs(Socket socket)
			constructs: function() {},
			
			/**
			 * 
			 */
			//> public int
			statusCode: null, 
			
			/**
			 * 
			 */
			//> public void writeContinue()
			writeContinue: vjo.NEEDS_IMPL,
			
			/**
			 * response.writeHead(statusCode, [reasonPhrase], [headers])
			 * <p>Sends a response header to the request. The status code is a 3-digit HTTP 
			 * status code, like 404. The last argument, headers, are the response headers. 
			 * Optionally one can give a human-readable reasonPhrase as the second argument.
			 * <p>Example:
			 * <pre>
			 * var body = 'hello world';
			 * response.writeHead(200, {
			 *   'Content-Length': body.length,
			 *   'Content-Type': 'text/plain'
			 * });
			 * </pre>
			 * <p>This method must only be called once on a message and it must be called 
			 * before response.end() is called.
			 */
		    //> public void writeHead(int statusCode, Object headers)
			//> public void writeHead(int statusCode, String? reasonPhrase, Object? headers)
			writeHead: vjo.NEEDS_IMPL,
			
			/**
			 * 
			 */
			//> public void writeHeader()
			writeHeader: vjo.NEEDS_IMPL // renamed - use writeHead() instead
			
//			/**
//			 * response.write(chunk, encoding='utf8')
//			 * <p>This method must be called after writeHead was called. It sends a chunk of 
//			 * the response body. This method may be called multiple times to provide 
//			 * successive parts of the body.
//			 * <p>chunk can be a string or a buffer. If chunk is a string, the second parameter
//			 * specifies how to encode it into a byte stream. By default the encoding is 'utf8'.
//			 * <p>Note: This is the raw HTTP body and has nothing to do with higher-level 
//			 * multi-part body encodings that may be used.
//			 * <p>The first time response.write() is called, it will send the buffered header 
//			 * information and the first body to the client. The second time response.write() 
//			 * is called, Node assumes you're going to be streaming data, and sends that 
//			 * separately. That is, the response is buffered up to the first chunk of body.
//			 */
//			//> public boolean write({String | Buffer}, String? encoding)
//			write: vjo.NEEDS_IMPL,
			
//			//> public void sendHeader() 
//			sendHeader: vjo.NEEDS_IMPL // renamed - use writeHead() instead
		})
	.endType(),
	
	/**
	 * This object is created internally by a HTTP server--not by the user--and passed 
	 * as the first argument to a 'request' listener.
	 * <p>This is an EventEmitter with the following events:
	 * <p>
	 * Event: 'data'
	 * <p>
	 * function(chunk) { }
	 * Emitted when a piece of the message body is received.
	 * <p>
	 * Example: A chunk of the body is given as the single argument. The transfer-encoding 
	 * has been decoded. The body chunk is a string. The body encoding is set with 
	 * request.setBodyEncoding().
	 * <p>
	 * Event: 'end'
	 * <p>
	 * function() { }
	 * Emitted exactly once for each message. No arguments. After emitted no other events 
	 * will be emitted on the request.
	 */
	//> public
	ServerRequest: vjo.ctype()
		//> needs(org.nodejs.stream.Stream)
		.inherits('org.nodejs.http.IncomingMessage<ServerRequest>')
		.props({
			/**
			 * 
			 */
			//> public
			event: vjo.otype().defs({
				/**
				 * function (chunk) { }
				 * <p>Emitted when a piece of the message body is received.
				 * <p>Example: A chunk of the body is given as the single argument. The 
				 * transfer-encoding has been decoded. The body chunk is a string. The 
				 * body encoding is set with request.setBodyEncoding().
				 */
				//> public void data(String? chunk)
				data: vjo.NEEDS_IMPL,
				
				/**
				 * function () { }
				 * <p>Emitted exactly once for each message. No arguments. After emitted 
				 * no other events will be emitted on the request.
				 */
				//> public void end()
				end: vjo.NEEDS_IMPL
			}).endType()
		})
		.protos({
//			/**
//			 * The request method as a string. Read only. Example: 'GET', 'DELETE'.
//			 */
//			method: '',	//< public final String ; 'GET', 'POST', 'DELETE' etc...
			
//			/**
//			 * Request URL string. This contains only the URL that is present in the actual 
//			 * HTTP request. If the request is:
//			 * <pre>
//			 * GET /status?name=ryan HTTP/1.1\r\n
//			 * Accept: text/plain\r\n
//			 * \r\n
//			 * </pre>
//			 * Then request.url will be: '/status?name=ryan'
//			 */
//			url: null,		//< public String
			
//			/**
//			 * Readonly request headers
//			 */
//			headers: {},	//< public final Object ; name/value pairs?
//			
//			/**
//			 * The HTTP protocol version as a string. Read only. Examples: '1.1', '1.0'.
//			 * Also request.httpVersionMajor is the first integer and 
//			 * request.httpVersionMinor is the second.
//			 */
//			httpVersion: '',	//< public final String 
			
			/**
			 * Set the encoding for the request body. Either 'utf8' or 'binary'. 
			 * Defaults to null, which means that the 'data' event will emit a 
			 * Buffer object..
			 */
			//> public void setEncoding(String? encoding)
			setEncoding: null,
			
			/**
			 * Pauses request from emitting events. Useful to throttle back an upload.
			 */
			//> public void pause()
			pause: null,
			
			/**
			 * Resumes a paused request.
			 */
			//> public void resume()
			resume: null
			
//			/**
//			 * The stream.Stream object associated with the connection.
//			 * With HTTPS support, use request.connection.verifyPeer() and 
//			 * request.connection.getPeerCertificate() to obtain the client's 
//			 * authentication details.
//			 */
//			//> public Stream
//			connection: null
		})
	.endType(),
	
	/**
	 * This is an EventEmitter with the following events:
	 * <p>
	 * Event: 'request'<p>
	 * function (request, response) { }
	 * request is an instance of http.ServerRequest and response is an instance of 
	 * http.ServerResponse
	 * <p>
	 * Event: 'connection'<p>
	 * function (stream) { }
	 * When a new TCP stream is established. stream is an object of type stream.Stream. 
	 * Usually users will not want to access this event. The stream can also be 
	 * accessed at request.connection.
	 * <p>
	 * Event: 'close'<p>
	 * function (errno) { }
	 * Emitted when the server closes.
	 * <p>
	 * Event: 'request'<p>
	 * function (request, response) {}
	 * Emitted each time there is request. Note that there may be multiple requests per 
	 * connection (in the case of keep-alive connections).
	 * <p>
	 * Event: 'upgrade'<p>
	 * function (request, socket, head)
	 * Emitted each time a client requests a http upgrade. If this event isn't listened 
	 * for, then clients requesting an upgrade will have their connections closed.
	 * request is the arguments for the http request, as it is in the request event.
	 * socket is the network socket between the server and client.
	 * head is an instance of Buffer, the first packet of the upgraded stream, this may 
	 * be empty.
	 * After this event is emitted, the request's socket will not have a data event listener, 
	 * meaning you will need to bind to it in order to handle data sent to the server on 
	 * that socket.
	 * <p>
	 * Event: 'clientError'<p>
	 * function (exception) {}
	 * If a client connection emits an 'error' event - it will forwarded here.
	 */
	//> public
	Server: vjo.ctype()
		//> needs(org.nodejs.stream.Stream)
		//> needs(org.nodejs.net.Server)
		//> needs(org.nodejs.crypto.Credentials)
		.inherits('org.nodejs.net.Server')
		.props({
			/**
			 * 
			 */
			//> public
			event: vjo.otype().defs({
				/**
				 * Emitted each time there is request. Note that there may be multiple 
				 * requests per connection (in the case of keep-alive connections).
				 */
				//> public void request(http.ServerRequest? request, http.ServerResponse? response)
				request: vjo.NEEDS_IMPL,
				
				/**
				 * function (stream) { }
				 * <p>When a new TCP stream is established. stream is an object of type 
				 * stream.Stream. Usually users will not want to access this event. The 
				 * stream can also be accessed at request.connection.
				 */
				//> public void connection(Stream? stream)
				connection: vjo.NEEDS_IMPL,
				
				/**
				 * function (errno) { }
				 * <p>Emitted when the server closes. 
				 */
				//> public void close(int? errorNo)
				close: vjo.NEEDS_IMPL,
				
				/**
				 * Emitted each time a client requests a http upgrade. If this event isn't 
				 * listened for, then clients requesting an upgrade will have their connections closed.
				 * request is the arguments for the http request, as it is in the request event.
				 * socket is the network socket between the server and client.
				 * head is an instance of Buffer, the first packet of the upgraded stream, this may 
				 * be empty.
				 * <p>After this event is emitted, the request's socket will not have a data event 
				 * listener, meaning you will need to bind to it in order to handle data sent to the 
				 * server on that socket.
				 */
				//> public void upgrade(http.ServerRequest? request, Socket? socket, Buffer? head)
				upgrade: vjo.NEEDS_IMPL,
				
				/**
				 * If a client connection emits an 'error' event - it will forwarded here
				 */
				//> public void clientError(Object exception)
				clientError: vjo.NEEDS_IMPL	
			}).endType()
		})
		.protos({
			/**
			 * 
			 */
			//> public Server constructs(Function? requestListener)
			constructs: function() {}
			
//			//> public void setSecure(Credentials? credentials)
//			setSecure: vjo.NEEDS_IMPL
		})
	.endType(),
	
	/**
	 * 
	 */
	//> public
	OutgoingMessage: vjo.ctype()
		//> needs(org.nodejs.net.Socket)
		//> needs(org.nodejs.buffer.Buffer)
		.inherits('org.nodejs.stream.Stream<OutgoingMessage>')
		.protos({
			/**
			 * 
			 */
			//> public OutgoingMessage constructs(Socket socket)
			constructs: function() {},
			
			/**
			 * 
			 */
			//> public Object
			output: null,  
			
			/**
			 * 
			 */
			//> public Object
			outputEncodings: null, 
			
			/**
			 * 
			 */
			//> public boolean
			writable: null, 
			
			/**
			 * 
			 */
			//> public boolean
			chunkedEncoding: null, 
			
			/**
			 * 
			 */
			//> public boolean
			shouldKeepAlive: null, 
			
			/**
			 * 
			 */
			//> public boolean
			useChunkedEncodingByDefault: null,
			
			/**
			 * 
			 */
			//> public boolean
			finished: null, 
			
			/**
			 * 
			 */
			//> public void assignSocket(Socket socket)
			assignSocket: vjo.NEEDS_IMPL,
			
			/**
			 * 
			 */
			//> public void detachSocket(Socket socket)
			detachSocket: vjo.NEEDS_IMPL,
			
			/**
			 * 
			 */
			//> public void destroy(Error? error)
			destroy: vjo.NEEDS_IMPL,
			
//			/**
//			 * This abstract either writing directly to the socket or buffering it.
//			 * Rename to _writeRaw() ?
//			 */
//			//> public boolean _writeRaw({Object | String} data, String encoding)
//			_writeRaw: vjo.NEEDS_IMPL,
//			
//			//> public boolean _buffer({Object | String} data, String encoding)
//			_buffer: vjo.NEEDS_IMPL,
//			
//			//> public void _storeHeader(String firstLine, {Object | Array} headers) ; headers is associative array
//			_storeHeader: vjo.NEEDS_IMPL,
			
			/**
			 * 
			 */
			//> public void setHeader(String name, Object? value)
			setHeader: vjo.NEEDS_IMPL,
			
			/**
			 * 
			 */
			//> public Object getHeader(String name)
			getHeader: vjo.NEEDS_IMPL,
			
			/**
			 * 
			 */
			//> public void removeHeader(String name)
			removeHeader: vjo.NEEDS_IMPL,
			
			/**
			 * response.write(chunk, encoding='utf8')
			 * <p>This method must be called after writeHead was called. It sends a chunk of 
			 * the response body. This method may be called multiple times to provide 
			 * successive parts of the body.
			 * <p>chunk can be a string or a buffer. If chunk is a string, the second parameter
			 * specifies how to encode it into a byte stream. By default the encoding is 'utf8'.
			 * <p>Note: This is the raw HTTP body and has nothing to do with higher-level 
			 * multi-part body encodings that may be used.
			 * <p>The first time response.write() is called, it will send the buffered header 
			 * information and the first body to the client. The second time response.write() 
			 * is called, Node assumes you're going to be streaming data, and sends that 
			 * separately. That is, the response is buffered up to the first chunk of body.
			 */
			//> public boolean write(Array data)
			//> public boolean write(Buffer data)
			//> public boolean write(String data, String? encoding); throws Error
			write: vjo.NEEDS_IMPL,
			
			/**
			 * 
			 */
			//> public void addTrailers(Object headers)
			addTrailers: vjo.NEEDS_IMPL,
			
			/**
			 * response.end([data], [encoding])
			 * <p>This method signals to the server that all of the response headers and body 
			 * has been sent; that server should consider this message complete. The method, 
			 * response.end(), MUST be called on each response.
			 * <p>If data is specified, it is equivalent to calling 
			 * response.write(data, encoding) followed by response.end().
			 */
			//> public boolean end(Buffer chunk)
			//> public boolean end(String? chunk, String? encoding)
			end: vjo.NEEDS_IMPL
				
//			//> public void sendBody(); just throws a new Error(...)
//			sendBody: vjo.NEEDS_IMPL, // MrP: renamed to write(..)
//			
//			//> public void finish() ; just throws a new Error(...)
//			finish: vjo.NEEDS_IMPL,  // MrP: renamed to close()
//			
//			//> public boolean close(String? data, String? encoding)
//			close: vjo.NEEDS_IMPL
		})
	.endType(),
	
	/**
	 * abstract base class for ServerRequest and ClientResponse
	 */
	//> public
	IncomingMessage: vjo.ctype()
		//> needs(org.nodejs.net.Socket)
		.inherits('org.nodejs.stream.Stream<IncomingMessage>')
		.protos({
			/**
			 * 
			 */
			//> public Socket
			socket: null, 
			
			/**
			 * 
			 */
			//> public Socket
			connection: null, 
			
			/**
			 * 
			 */
			//> public String
			httpVersion: null, 
			
			/**
			 * 
			 */
			//> public boolean
			complete: null,	
			
			/**
			 * 
			 */
			//> public boolean
			readable: null, 
			
			/**
			 * 
			 */
			//> public Object
			headers: null,	
			
			/**
			 * 
			 */
			//> public Object
			trailers: null, 
			
			/**
			 * Request URL string. This contains only the URL that is present in the actual 
			 * HTTP request. If the request is:
			 * <pre>
			 * GET /status?name=ryan HTTP/1.1\r\n
			 * Accept: text/plain\r\n
			 * \r\n
			 * </pre>
			 * Then request.url will be: '/status?name=ryan'
			 */
			//> public String
			url: null, 
			/**
			 * The request method as a string. Read only. Example: 'GET', 'DELETE'.
			 */
			//> public String
			method: null, 
			
			/**
			 * 
			 */
			//> public IncomingMessage constructs(Socket socket)
			constructs: function() {},
			
			/**
			 * 
			 */
			//> public void destroy(Error? error)
			destroy: vjo.NEEDS_IMPL,
			
			/**
			 * 
			 */
			//> public void _parseQueryString()
			_parseQueryString: vjo.NEEDS_IMPL,	// MrP: deprecated
			
			/**
			 * 
			 */
			//> public void setBodyEncoding(String encoding)
			setBodyEncoding: vjo.NEEDS_IMPL,	// MrP: deprecated, use setEncoding
			
			/**
			 * 
			 */
			//> public void setEncoding(String encoding)
			setEncoding: vjo.NEEDS_IMPL,

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
			 * Add the given (field, value) pair to the message.
			 * <p>
			 * Per RFC2616, section 4.2 it is acceptable to join multiple instances of the
			 * same header with a ', ' if the header in question supports specification of
			 * multiple values this way. If not, we declare the first instance the winner
			 * and drop the second. Extended header fields (those beginning with 'x-') are
			 * always joined.
			 */
			//> public void _addHeaderLine(String field, Object value) 
			_addHeaderLine: vjo.NEEDS_IMPL
		})
	.endType(),
	
	/**
	 * The response implements the Readable Stream interface.
	 * <p>Event: 'data'
	 * <p>
	 * function (chunk) {}
	 * Emitted when a piece of the message body is received.
	 * <p>Example: A chunk of the body is given as the single argument. The 
	 * transfer-encoding has been decoded.  The body chunk a String.  The body encoding is 
	 * set with `response.setBodyEncoding()`.
	 */
	//> public
	ClientResponse: vjo.ctype()
		//> needs(org.nodejs.fs.ReadableStream)
		.inherits('org.nodejs.fs.ReadableStream<ClientResponse>')
		.props({ 
			/**
			 * 
			 */
			//> public
			event: vjo.otype().defs({
				/**
				 * function (chunk) {}
				 * <p>Emitted when a piece of the message body is received.
				 * <p>Example: A chunk of the body is given as the single argument. The 
				 * transfer-encoding has been decoded.  The body chunk a String.  The 
				 * body encoding is set with response.setBodyEncoding()
				 */
				//> public void data(String? chunk)
				data: vjo.NEEDS_IMPL,
				
				/**
				 * function () {}
				 * <p>Emitted exactly once for each message. No arguments. After emitted 
				 * no other events will be emitted on the response.
				 */
				//> public void end()
				end: vjo.NEEDS_IMPL
			}).endType()
		})
		.protos({
			/**
			 * The 3-digit HTTP response status code. E.G. 404.
			 */
			//> public int
			statusCode: null,
			
			/**
			 * The HTTP version of the connected-to server. Probably either '1.1' or '1.0'. 
			 * Also response.httpVersionMajor is the first integer and 
			 * response.httpVersionMinor is the second.
			 */
			//> public String
			httpVersion: null,
			
			/**
			 * The response headers object
			 */
			//> public Object
			headers: null,
			
			/**
			 * 
			 */
			//> public Object
			trailers: null,
			
			/**
			 * response.setEncoding(encoding=null)
			 * <p>Set the encoding for the response body. Either 'utf8', 'ascii', or 'base64'. 
			 * Defaults to null, which means that the 'data' event will emit a Buffer object..
			 */
			//> public void setEncoding(String? encoding)
			setEncoding: vjo.NEEDS_IMPL,
			
			/**
			 * Pauses response from emitting events. Useful to throttle back a download.
			 */
			//> public void pause()
			pause: vjo.NEEDS_IMPL,
			
			/**
			 * Resumes a paused response.
			 */
			//> public void resume()
			resume: vjo.NEEDS_IMPL,
			
			/**
			 * A reference to the http.Client that this response belongs to.
			 */
			//> public http.Client
			client: null
		})
	.endType(),
	
	/**
	 * This object is created internally and returned from the request() method of a 
	 * http.Client. It represents an in-progress request whose header has already been 
	 * sent.
	 * <p>To get the response, add a listener for 'response' to the request object. 
	 * 'response' will be emitted from the request object when the response headers have 
	 * been received. The 'response' event is executed with one argument which is an 
	 * instance of http.ClientResponse.
	 * <p>During the 'response' event, one can add listeners to the response object; 
	 * particularly to listen for the 'data' event. Note that the 'response' event is 
	 * called before any part of the response body is received, so there is no need to 
	 * worry about racing to catch the first part of the body. As long as a listener for 
	 * 'data' is added during the 'response' event, the entire body will be caught.
	 * <pre>
	 * // Good
	 * request.on('response', function (response) {
	 *   response.on('data', function (chunk) {
	 *     console.log('BODY: ' + chunk);
	 *   });
	 * });
	 * </pre>
	 * <p>
	 * <pre>
	 * // Bad - misses all or part of the body
	 * request.on('response', function (response) {
	 *   setTimeout(function () {
	 *     response.on('data', function (chunk) {
	 *       console.log('BODY: ' + chunk);
	 *     });
	 *   }, 10);
	 * });
	 * </pre>
	 * <p>This is a Writable Stream.
	 * <p>This is an EventEmitter with the following events:
	 * <p>Event 'response'
	 * function (response) { }<p>
	 * Emitted when a response is received to this request. This event is emitted only once. 
	 * The response argument will be an instance of http.ClientResponse.
	 */
	//> public
	ClientRequest: vjo.ctype()
		//> needs(org.nodejs.net.Socket)
		.inherits('org.nodejs.http.OutgoingMessage<ClientRequest>')
		.props({
			/**
			 * 
			 */
			//> public
			event: vjo.otype().defs({
				/**
				 * function (response) { }
				 * <p>Emitted when a response is received to this request. This event is 
				 * emitted only once. The response argument will be an instance of 
				 * http.ClientResponse.
				 */
				//> public void response(http.ClientResponse response)
				response: vjo.NEEDS_IMPL
			}).endType()
		})
		.protos({
			/**
			 * 
			 */
			//> public http.ClientRequest constructs(Socket socket, String method, String url, Object headers)
			constructs: function() {},
			
			/**
			 * 
			 */
			//> public void abort()
			abort: vjo.NEEDS_IMPL		
			
//			//> public void finish()
//			finish: vjo.NEEDS_IMPL	// MrP: renamed to end()
//	
// These are already in OutgoingMessage
//			//> public void end(Object? data, String? encoding)
//			end: vjo.NEEDS_IMPL,
//			
//			/**
//			 * request.write(chunk, encoding='utf8')
//			 * Sends a chunk of the body. By calling this method many times, the user can 
//			 * stream a request body to a server--in that case it is suggested to use the 
//			 * ['Transfer-Encoding', 'chunked'] header line when creating the request.
//			 * <p>The chunk argument should be an array of integers or a string.
//			 * The encoding argument is optional and only applies when chunk is a string.
//			 */
//			//> public void write({String | Number[]}chunk, String? encoding)
//			write: vjo.NEEDS_IMPL
	
		// MrP: These are already defined in OutgoingMessage
	//		//> public boolean close()
	//		close: vjo.NEEDS_IMPL,
		//	
	//		//> public void end()
	//		end: vjo.NEEDS_IMPL
		})
	.endType(),
	
	/**
	 * 
	 */
	//> public
	Client: vjo.ctype()
		//> needs(org.nodejs.stream.Stream)
		//> needs(org.nodejs.net.Socket)
		//> needs(org.nodejs.buffer.Buffer)
		.inherits('org.nodejs.net.Socket')
		.props({
			/**
			 * 
			 */
			//> public
			event: vjo.otype().defs({
				/**
				 * Emitted each time a client requests a http upgrade. If this event isn't 
				 * listened for, then clients requesting an upgrade will have their connections closed.
				 */
				//> public void upgrade(http.ServerRequest? request, Socket? socket, Buffer? head)
				upgrade: vjo.NEEDS_IMPL
			}).endType()
		})
		.protos({
			/**
			 * 
			 */
			//> public http.ClientRequest request(String url ,Object? headers)
			//> public http.ClientRequest request(String method, String url, Object? headers)
			request: vjo.NEEDS_IMPL,
			
			/**
			 * 
			 */
			//> public void cat(String url, String encoding, Function? cb)
			//> public void cat(String url, Object headers, Function cb)
			cat: vjo.NEEDS_IMPL,
			
			
			/**
			 * 
			 */
			//> public void get()
			get: vjo.NEEDS_IMPL,	// MrP: use client.request('GET', ...)
			
			/**
			 * 
			 */
			//> public void head()
			head: vjo.NEEDS_IMPL,	// MrP: use client.request('HEAD', ...)
			
			/**
			 * 
			 */
			//> public void post()
			post: vjo.NEEDS_IMPL,	// MrP: use client.request('POST', ...)
			
			/**
			 * 
			 */
			//> public void del()
			del: vjo.NEEDS_IMPL,	// MrP: use client.request('DELETE', ...)
			
			/**
			 * 
			 */
			//> public void put()
			put: vjo.NEEDS_IMPL	// MrP: use client.request('GET', ...)

		})
	.endType(),
	
	/**
	 * 
	 */
	//> public
	Agent: vjo.ctype()
		//> needs(org.nodejs.events.EventEmitter)
		//> needs(org.nodejs.net.Socket)
		.inherits('org.nodejs.events.EventEmitter<Agent>')
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
				options: {		
					/**
					 * 
					 */
					//> public String
					host: null,	
					/**
					 * 
					 */
					//> public int
					port: null	
				}
			}).endType(),
			
			event: vjo.otype().defs({
				/**
				 * 
				 */
				//> public void response(http.ClientResponse)
				response: vjo.NEEDS_IMPL
			}).endType(),
			
			/**
			 * 
			 */
			//> public int
			defaultMaxSockets: null	
		})
		.protos({
			/**
			 * 
			 */
			//> public int
			maxSockets: null,  // MrP from code
			
			/**
			 * 
			 */
			//> public String 
			host: null,	// MrP from code
			
			/**
			 * 
			 */
			//> public int
			port: null, // MrP from code
			
			/**
			 * 
			 */
			//> public Agent getAgent(String host, int? port)
			//> public Agent getAgent(Object options) ; MrP for subclass in https.Agent
			getAgent: vjo.NEEDS_IMPL,
			
			/**
			 * 
			 */
			//> public Object request(Object options, Function? callback)
			request: vjo.NEEDS_IMPL,
			
			/**
			 * 
			 */
			//> public Object get(Object options, Function? callback)
			get: vjo.NEEDS_IMPL
//			/**
//			 * 
//			 */
//			//> public http.ClientRequest appendMessage(Object options)
//			appendMessage: vjo.NEEDS_IMPL,
//			
//			/**
//			 * 
//			 */
//			//> public void _removeSocket(Socket socket)
//			_removeSocket: vjo.NEEDS_IMPL,
//			
//			/**
//			 * 
//			 */
//			//> public void _establishNewConnection()
//			_establishNewConnection: vjo.NEEDS_IMPL
		})
	.endType()
	// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
})
.protos({	
	// vvvvvvvvvvvvvv  Exported Types  vvvvvvvvvvvvvvv
	/**
	 * 
	 */
	//> public type::http.Agent
	Agent: null,			
	
	/**
	 * 
	 */
	//> public type::http.IncomingMessage
	IncomingMessage: null,	
	
	/**
	 * 
	 */
	//> public type::http.OutgoingMessage
	OutgoingMessage: null,	
	
	/**
	 * 
	 */
	//> public type::http.ClientRequest
	ClientRequest: null,
	
	/**
	 * 
	 */
	//> public type::http.ServerResponse
	ServerResponse: null,	
	
	/**
	 * 
	 */
	//> public type::http.Client
	Client: null,			
	
	/**
	 * 
	 */
	//> public type::http.Server
	Server: null,			
	
	/**
	 * 
	 */
	//> public type::http.STATUS_CODES
	STATUS_CODES: null,		
	
	// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^	
	/**
	 * 
	 */
	//> public http.Server createServer(http.Server.event.request? requestListener)
	createServer: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public http.Client createClient(int port, String? host) ;, boolean? https, Credentials? creds)
	createClient: vjo.NEEDS_IMPL,
		
	/**
	 * 
	 */
	//> public String cat(String url, String encoding, Object headers)
	cat: vjo.NEEDS_IMPL,
	
	/**
	 * Answer the agent for the given host/port
	 */
	//> public http.Agent getAgent(String host, int port)
	getAgent: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public http.ClientRequest get(Object options, Function? cb)
	get: vjo.NEEDS_IMPL,	// MrP: use client.request('GET', ...)
	
	/**
	 * 
	 */
	//> public http.ClientRequest request(Object options, Function? cb)
	request: vjo.NEEDS_IMPL	
})
.options({
	metatype: true
})
.endType();