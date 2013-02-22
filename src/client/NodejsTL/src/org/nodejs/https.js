/**
 * HTTPS is the HTTP protocol over TLS/SSL. In Node this is implemented as a 
 * separate module.
 */
//> public
vjo.ctype('org.nodejs.https') 
//> needs(org.nodejs.http.ServerRequest)
//> needs(org.nodejs.http.ServerResponse)
.props({
	//vvvvvvvvvvvvvvvvv NESTED TYPES vvvvvvvvvvvvvvv
	/**
	 * 
	 */
	//> public
	Agent: vjo.ctype()
		//> needs(org.nodejs.http.Agent)
		.inherits('org.nodejs.http.Agent')
		.props({
			
		})
		.protos({
//			/**
//			 * MrP - add Object options to base class to get around this for now
//			 */
//			//> public Agent getAgent(Object options)
//			getAgent: vjo.NEEDS_IMPL
			
//			/**
//			 * Already in base
//			 */
//			request: vjo.NEEDS_IMPL
			
//			/**
//			 * Already in base
//			 */
//			get: vjo.NEEDS_IMPL
		})
	.endType(),
	
	/**
	 * 
	 */
	//> public
	Server: vjo.ctype()
		//> needs(org.nodejs.tls.Server)
		.inherits('org.nodejs.tls.Server')
		.protos({
			/**
			 * 
			 */
			//> public Server constructs(Function listener)
			//> public Server constructs(Object? options, Function? listener)
			constructs: function() {}
		})
	.endType(),
	//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
	
	/**
	 * 
	 */
	//> public
	data: vjo.otype().defs({
		/**
		 * 
		 */
		//> public
		requestOptions: {
			/**
			 * 
			 */
			//> public String? 
			host: null,		
			
			/**
			 * 
			 */
			//> public int?
			port: null,		
			
			/**
			 * 
			 */
			//> public String?
			path: null,		
			
			/**
			 * 
			 */
			//> public String? 
			method: null	
		},
		
		/**
		 * 
		 */
		//> public
		getOptions: {
			/**
			 * 
			 */
			//> public String?
			host: null,		
			
			/**
			 * 
			 */
			//> public int?
			 
			port: null		
		},
		
		/**
		 * 
		 */
		//> public
		getAgentOptions: {
			/**
			 * 
			 */
			//> public String? 
			host: null,		
			
			/**
			 * 
			 */
			//> public int? 
			port: null		
		},
		
		/**
		 * 
		 */
		//> public
		createServerOptions: {
			/**
			 * 
			 */
			//> public Object
			key: null,			// MrP: should be: {String | Buffer}
			
			/**
			 * 
			 */
			//> public Object
			cert: null			// MrP: should be: {String | Buffer}
		}
	}).endType(),
	
	/**
	 * 
	 */
	//> public
	callback: vjo.otype().defs({
		//> needs(org.nodejs.http.ServerRequest)
		//> needs(org.nodejs.http.ServerResponse)
		/**
		 * 
		 */
		//> public void createServer(ServerRequest? req, ServerResponse? res)
		createServer: vjo.NEEDS_IMPL
	}).endType()
})
.protos({
	// vvvvvvvvvvvvvv  Exported Types  vvvvvvvvvvvvvvv
	/**
	 * 
	 */
	//> public type::https.Server
	Server: null,	
	
	/**
	 * 
	 */
	//> public type::https.Agent
	Agent: null,	
	// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
	
	/**
	 * <pre>
	 * // curl -k https://localhost:8000/
	 * var https = require('https');
	 * var fs = require('fs');
	 * 
	 * var options = {
	 *   key: fs.readFileSync('test/fixtures/keys/agent2-key.pem'),
	 *   cert: fs.readFileSync('test/fixtures/keys/agent2-cert.pem')
	 * };
	 * 
	 * https.createServer(options, function (req, res) {
	 *   res.writeHead(200);
	 *   res.end("hello world\n");
	 * }).listen(8000);
	 * </pre>
	 */
	//> public https.Server createServer(https.data.createServerOptions opts, https.callback.createServer callback)
	createServer: vjo.NEEDS_IMPL,
	
	/**
	 * Makes a request to a secure web server. Similar options to http.request().
	 * <p>Example:
	 * <pre>
	 * var https = require('https');
	 * var options = {
	 *   host: 'encrypted.google.com',
	 *   port: 443,
	 *   path: '/',
	 *   method: 'GET'
	 * };
	 * 
	 * var req = https.request(options, function(res) {
	 *   console.log("statusCode: ", res.statusCode);
	 *   console.log("headers: ", res.headers);
	 *   
	 *   res.on('data', function(d) {
	 *     process.stdout.write(d);
	 *   });
	 * });
	 * req.end();
	 * 
	 * req.on('error', function(e) {
	 *   console.error(e);
	 * });
	 * </pre>
	 */
	//> public org.nodejs.http.ClientRequest request(https.data.requestOptions? options, Function? callback)
	request: vjo.NEEDS_IMPL,
	
	/**
	 * Like http.get() but for HTTPS.
	 * <p>Example:
	 * <pre>
	 * var https = require('https');
	 * https.get({ host: 'encrypted.google.com', path: '/' }, function(res) {
	 *   console.log("statusCode: ", res.statusCode);
	 *   console.log("headers: ", res.headers);
	 *   
	 *   res.on('data', function(d) {
	 *     process.stdout.write(d);
	 *   });
	 * }).on('error', function(e) {
	 *   console.error(e);
	 * });
	 * </pre>
	 */
	//> public org.nodejs.http.ClientRequest request(https.data.getOptions? options, Function? callback)
	get: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public https.Agent getAgent(Object options)
	getAgent: vjo.NEEDS_IMPL
})
.options({
	metatype: true
})
.endType();