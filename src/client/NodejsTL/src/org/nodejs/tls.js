/**
 * Use require('tls') to access this module.
 * <p>The tls module uses OpenSSL to provide Transport Layer Security and/or 
 * Secure Socket Layer: encrypted stream communication.
 * <p>TLS/SSL is a public/private key infrastructure. Each client and each 
 * server must have a private key. A private key is created like this
 * <pre>
 * openssl genrsa -out ryans-key.pem 1024
 * </pre>
 * All severs and some clients need to have a certificate. Certificates are 
 * public keys signed by a Certificate Authority or self-signed. The first step 
 * to getting a certificate is to create a "Certificate Signing Request" (CSR) 
 * file. This is done with:
 * <pre>
 * openssl req -new -key ryans-key.pem -out ryans-csr.pem
 * </pre>
 * To create a self-signed certificate with the CSR, do this:
 * <pre>
 * openssl x509 -req -in ryans-csr.pem -signkey ryans-key.pem -out ryans-cert.pem
 * </pre>
 * Alternatively you can send the CSR to a Certificate Authority for signing.
 */
//> public
vjo.ctype('org.nodejs.tls') 
//> needs(org.nodejs.crypto.Credentials)
.props({
	// vvvvvvvvvvvvvv NESTED TYPES vvvvvvvvvvvvvvvvvvv
	/**
	 * 
	 */
	//> public
	CryptoStream: vjo.ctype()
		//> needs(org.nodejs.stream.Stream)
		//> needs(org.nodejs.buffer.Buffer)
		.inherits('org.nodejs.stream.Stream<CryptoStream>')
		.protos({
			/**
			 * 
			 */
			//> public constructs(tls.SecurePair pair)
			constructs: function() {},
			
			/**
			 * 
			 */
			//> public boolean write(Object data, String? encoding)
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
			//> public void setTimeout(int timeout)
			setTimeout: vjo.NEEDS_IMPL,
			
			/**
			 * 
			 */
			//> public void setNoDelay()
			setNoDelay: vjo.NEEDS_IMPL,
			
			/**
			 * 
			 */
			//> public void setEncoding(String encoding)
			setEncoding: vjo.NEEDS_IMPL,
			
			/**
			 * 
			 */
			//> public Object getPeerCertificate()
			getPeerCertificate: vjo.NEEDS_IMPL,
			
			/**
			 * 
			 */
			//> public Object getCipher()
			getCipher: vjo.NEEDS_IMPL,
			
			/**
			 * 
			 */
			//> public void end(Object d)
			end: vjo.NEEDS_IMPL,
			
			/**
			 * 
			 */
			//> public boolean destroySoon()
			destroySoon: vjo.NEEDS_IMPL,
			
			/**
			 * 
			 */
			//> public boolean destroy()
			destroy: vjo.NEEDS_IMPL,
			
			/**
			 * 
			 */
			//> public int
			fd: null,
	
			/**
			 * 
			 */
			//> public int _pendingBytes()
			_pendingBytes: vjo.NEEDS_IMPL,
			
			/**
			 * 
			 */
			//> public int _puller({String | Buffer} b)
			_puller: vjo.NEEDS_IMPL,
			
			/**
			 * 
			 */
			//> public int _pusher(Object pool, int offset, int length) 
			_pusher: vjo.NEEDS_IMPL
		})
	.endType(),
	
	/**
	 * 
	 */
	//> public
	EncryptedStream: vjo.ctype()
		.inherits('org.nodejs.tls.CryptoStream')
		.protos({
			/**
			 * 
			 */
			//> public EncryptedStream constructs(tls.SecurePair pair)
			constructs: function() {},
			
			/**
			 * 
			 */
			//> public int _pendingBytes()
			_pendingBytes: vjo.NEEDS_IMPL,
			
			/**
			 * 
			 */
			//> public int _puller({String | Buffer} b)
			_puller: vjo.NEEDS_IMPL,
			
			/**
			 * 
			 */
			//> public int _pusher(Object pool, int offset, int length) 
			_pusher: vjo.NEEDS_IMPL
		})
	.endType(),
	
	/**
	 * 
	 */
	//> public
	CleartextStream: vjo.ctype() 
		//> needs(org.nodejs.buffer.Buffer)
		.inherits('org.nodejs.tls.CryptoStream')
		.protos({
			/**
			 * 
			 */
			//> public CleartextStream constructs(Pair pair)
			constructs: vjo.NEEDS_IMPL,
			
			/**
			 * 
			 */
			//> public int _pendingBytes()
			_pendingBytes: vjo.NEEDS_IMPL,
			
			/**
			 * 
			 */
			//> public int _puller({String | Buffer} b)
			_puller: vjo.NEEDS_IMPL,
			
			/**
			 * 
			 */
			//> public int _pusher(Object pool, int offset, int length) 
			_pusher: vjo.NEEDS_IMPL
		})
	.endType(),
	
	/**
	 * 
	 */
	//> public
	SecurePair: vjo.ctype() 
		//> needs(org.nodejs.events.EventEmitter)
		//> needs(org.nodejs.crypto.Credentials)
		.inherits('org.nodejs.events.EventEmitter<SecurePair>')
		.protos({
			/**
			 * 
			 */
			//> public SecurePair constructs(Credentials cred, boolean isServer, Object? requestCert, boolean? rejectUnauthorized)
			constructs: function() {}
		})
	.endType(),
	
	/**
	 * 
	 */
	//> public
	Server: vjo.ctype() 
		//> needs(org.nodejs.net.Server)
		.inherits('org.nodejs.net.Server')
		.props({
			/**
			 * This is a constructor for the tls.Server class. The options object 
			 * has these possibilities:
			 * <p>
			 * key: A string or Buffer containing the private key of the server 
			 * in PEM format. (Required)
			 * <p>
			 * cert: A string or Buffer containing the certificate key of the 
			 * server in PEM format. (Required)
			 * <p>
			 * ca: An array of strings or Buffers of trusted certificates. If 
			 * this is omitted several well known "root" CAs will be used, like 
			 * VeriSign. These are used to authorize connections.
			 * <p>
			 * requestCert: If true the server will request a certificate from 
			 * clients that connect and attempt to verify that certificate. Default: false.
			 * <p>
			 * rejectUnauthorized: If true the server will reject any connection 
			 * which is not authorized with the list of supplied CAs. This option 
			 * only has an effect if requestCert is true. Default: false.
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
					//> public Object? ; {String | Buffer}
					key: null,				 
					
					/**
					 *
					 */
					//> public Object? ; {String | Buffer}
					cert: null,				 
					
					/**
					 *
					 */
					//> public Array? ; {String | Buffer}[]
					ca: null,				 
					
					/**
					 *
					 */
					//> public boolean?
					requestCert: null,		 
					
					/**
					 *
					 */
					//> public boolean? 
					rejectUnauthorized: null
				},
				/**
				 * 
				 */
				//> public void work(String)
				work: vjo.NEEDS_IMPL 
			}).endType(),
			
			/**
			 * 
			 */
			//> public
			event: vjo.otype().defs({
				/**
				 * This event is emitted after a new connection has been successfully handshaked. 
				 * The argument is a duplex instance of stream.Stream. It has all the common 
				 * stream methods and events.
				 * <p>
				 * cleartextStream.authorized is a boolean value which indicates if the client 
				 * has verified by one of the supplied cerificate authorities for the server. 
				 * If cleartextStream.authorized is false, then cleartextStream.authorizationError 
				 * is set to describe how authorization failed. Implied but worth mentioning: 
				 * depending on the settings of the TLS server, you unauthorized connections may 
				 * be accepted.
				 */
				//> public void secureConnection(org.nodejs.stream.Stream? cleartextStream)
				secureConnection: vjo.NEEDS_IMPL
			}).endType()
		})
		.protos({
			/**
			 * 
			 */
			//> public tls.Server constructs(Function listener)
			//> public tls.Server constructs(Object? options, Function? listener)
			constructs: function() {},
			
//			/**
//			 * The number of concurrent connections on the server.
//			 */
//			//> public int
//			connections: null,
			
//			/**
//			 * Set this property to reject connections when the server's connection count 
//			 * gets high.
//			 */
//			//> public int
//			maxConnections: null,
			
//			/**
//			 * Begin accepting connections on the specified port and host. If the host 
//			 * is omitted, the server will accept connections directed to any IPv4 
//			 * address (INADDR_ANY).
//			 * <p>
//			 * This function is asynchronous. The last parameter callback will be called 
//			 * when the server has been bound.
//			 * <p>
//			 * See net.Server for more information.
//			 */
//			//> public void listen(int port, Function callback)
//			//> public void listen(int port, String? host, Function? callback)
//			listen: vjo.NEEDS_IMPL,
			
			/**
			 * Stops the server from accepting new connections. This function is 
			 * asynchronous, the server is finally closed when the server emits a 
			 * 'close' event.
			 */
			//> public void close()
			close: vjo.NEEDS_IMPL,
			
			/**
			 * 
			 */
			//> public void setOptions(Object options)
			setOptions: vjo.NEEDS_IMPL
		})
	.endType()
	
	//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
})
.protos({
	// vvvvvvvvvvvvvv  Exported Types  vvvvvvvvvvvvvvv
	/**
	 * 
	 */
	//> public type::tls.Server
	Server: null,			 
	
	/**
	 * 
	 */
	//> public type::tls.CryptoStream
	CryptoStream: null,		 
	
	/**
	 * 
	 */
	//> public type::tls.CleartextStream
	CleartextStream: null,	 
	
	/**
	 * 
	 */
	//> public type::tls.EncryptedStream
	EncryptedStream: null,	 
	
	/**
	 * 
	 */
	//> public type::tls.SecurePair
	SecurePair: null,	 
	// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
	
	/**
	 * 
	 */
	//> public tls.SecurePair constructs(Credentials cred, boolean isServer, Object? requestCert, boolean? rejectUnauthorized)
	createSecurePair: vjo.NEEDS_IMPL,
	
	/**
	 * <pre>
	 * s = tls.connect(port, [host], [options], callback)
	 * </pre>
	 * <p>Creates a new client connection to the given port and host. (If host 
	 * defaults to localhost.) options should be an object which specifies:
	 * <p>
	 * key: A string or Buffer containing the private key of the server in PEM 
	 * format. (Required)
	 * <p>
	 * cert: A string or Buffer containing the certificate key of the server in 
	 * PEM format.
	 * <p>
	 * ca: An array of strings or Buffers of trusted certificates. If this is 
	 * omitted several well known "root" CAs will be used, like VeriSign. These 
	 * are used to authorize connections.
	 * <p>tls.connect() returns a cleartext CryptoStream object.
	 * <p>After the TLS/SSL handshake the callback is called. The callback will 
	 * be called no matter if the server's certificate was authorized or not. It 
	 * is up to the user to test s.authorized to see if the server certificate 
	 * was signed by one of the specified CAs. If s.authorized === false then 
	 * the error can be found in s.authorizationError.
	 */
	//> public tls.CleartextStream connect(int port, Function callback)
	//> public tls.CleartextStream connect(int prot, String? host, Object? options, Function? callback)
	connect: vjo.NEEDS_IMPL,
	
	/**
	 * <pre>
	 * tls.createServer(options, secureConnectionListener)
	 * </pre>
	 * <p>This is a constructor for the tls.Server class. The options object has 
	 * these possibilities:
	 * <p>
	 * key: A string or Buffer containing the private key of the server in PEM 
	 * format. (Required)
	 * <p>
	 * cert: A string or Buffer containing the certificate key of the server in 
	 * PEM format. (Required)
	 * <p>
	 * ca: An array of strings or Buffers of trusted certificates. If this is 
	 * omitted several well known "root" CAs will be used, like VeriSign. These 
	 * are used to authorize connections.
	 * <p>
	 * requestCert: If true the server will request a certificate from clients 
	 * that connect and attempt to verify that certificate. Default: false.
	 * <p>
	 * rejectUnauthorized: If true the server will reject any connection which 
	 * is not authorized with the list of supplied CAs. This option only has an 
	 * effect if requestCert is true. Default: false.
	 */
	//> public tls.Server createServer(Function secureConnectionListener)
	//> public tls.Server createServer(tls.Server.data.options options, Function? secureConnectionListener)
	createServer: vjo.NEEDS_IMPL
})
.options({
	metatype: true
})
.endType();