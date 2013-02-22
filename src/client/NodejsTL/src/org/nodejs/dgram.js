/**
 * Datagram sockets are available through require('dgram'). Datagrams are most 
 * commonly handled as IP/UDP messages, but they can also be used over Unix 
 * domain sockets.
 * <p>
 * Event: 'message'
 * function (msg, rinfo) { }
 *
 * Emitted when a new datagram is available on a socket. msg is a Buffer and 
 * rinfo is an object with the sender's address information and the number of 
 * bytes in the datagram.
 * <p>
 * Event: 'listening'
 * function () { }
 * Emitted when a socket starts listening for datagrams. This happens as soon 
 * as UDP sockets are created. Unix domain sockets do not start listening until 
 * calling bind() on them.
 * <p>
 * Event: 'close'
 * function () { }
 * Emitted when a socket is closed with close(). No new message events will be 
 * emitted on this socket.
 */
//> public
vjo.ctype('org.nodejs.dgram') 
//> needs(org.nodejs.dgram.Socket)
.props({
	// vvvvvvvvvvvvvvvvv NESTED TYPES vvvvvvvvvvvvvvvvvv
	/**
	 * 
	 */
	//> public
	Socket: vjo.ctype()
		//> needs(org.nodejs.events.EventEmitter)
		//> needs(org.nodejs.buffer.Buffer)
		.inherits('org.nodejs.events.EventEmitter<Socket>')
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
				rinfo: {
					/**
					 * 
					 */
					//> public String
					senderAddr: null,	
					
					/**
					 * 
					 */
					//> public int
					numBytes:	null	
				},
				
				/**
				 * object containing the address information for a socket. For UDP 
				 * sockets, this object will contain address and port. For Unix domain 
				 * sockets, it will contain only address.
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
					//> public int?
					port: null		
				
				}
			}).endType(),
			
			/**
			 * 
			 */
			//> public
			event: vjo.otype().defs({
				/**
				 * function (msg, rinfo) { }
				 * <p>Emitted when a new datagram is available on a socket. msg is a 
				 * Buffer and rinfo is an object with the sender's address information 
				 * and the number of bytes in the datagram.
				 */
				//> public void message(Buffer? msg, dgram.Socket.data.rinfo? rinfo)
				message: vjo.NEEDS_IMPL,
				
				/**
				 * function () { }
				 * <p>Emitted when a socket starts listening for datagrams. This happens 
				 * as soon as UDP sockets are created. Unix domain sockets do not start 
				 * listening until calling bind() on them.
				 */
				//> public void listening()
				listening: vjo.NEEDS_IMPL,
				
				/**
				 * function () { }
				 * <p>Emitted when a socket is closed with close(). No new message 
				 * events will be emitted on this socket.
				 */
				//> public void close()
				close: vjo.NEEDS_IMPL
			}).endType() 	
		})
		.protos({
			//> public constructs(String type, Function? callback)
			constructs: function() {},
			
			/**
			 * dgram.send(buf, offset, length, path, [callback])
			 * <p>For Unix domain datagram sockets, the destination address is a pathname 
			 * in the filesystem. An optional callback may be supplied that is invoked 
			 * after the sendto call is completed by the OS. It is not safe to re-use buf 
			 * until the callback is invoked. Note that unless the socket is bound to a 
			 * pathname with bind() there is no way to receive messages on this socket.
			 * <p>Example of sending a message to syslogd on OSX via Unix domain socket 
			 * /var/run/syslog:
			 * <pre>var dgram = require('dgram');
			 * var message = new Buffer("A message to log.");
			 * var client = dgram.createSocket("unix_dgram");
			 * client.send(message, 0, message.length, "/var/run/syslog",
			 *   function (err, bytes) {
			 *     if (err) {
			 *       throw err;
			 *     }
			 *     console.log("Wrote " + bytes + " bytes to socket.");
			 *   });
			 *   
			 *   <p>
			 *   dgram.send(buf, offset, length, port, address, [callback])
			 *   For UDP sockets, the destination port and IP address must be specified. 
			 *   A string may be supplied for the address parameter, and it will be 
			 *   resolved with DNS. An optional callback may be specified to detect any 
			 *   DNS errors and when buf may be re-used. Note that DNS lookups will 
			 *   delay the time that a send takes place, at least until the next tick. 
			 *   The only way to know for sure that a send has taken place is to use the 
			 *   callback.
			 *   <p>Example of sending a UDP packet to a random port on localhost;
			 *   <pre>
			 *   var dgram = require('dgram');
			 *   var message = new Buffer("Some bytes");
			 *   var client = dgram.createSocket("udp4");
			 *   client.send(message, 0, message.length, 41234, "localhost");
			 *   client.close();
			 *   </pre>
			 */
			//> public void send(Buffer buf, int offset, int length, String path, Function? callback)
			//> public void send(Buffer buf, int offset, int length, int port, String address, Function? callback)
			send: vjo.NEEDS_IMPL,
			
			/**
			 * 
			 */
			//> public void sendTo(Buffer buf, int offset, int length, String path, Function? callback)
			//> public void sendTo(Buffer buf, int offset, int length, int port, String address, Function? callback)
			sendTo: vjo.NEEDS_IMPL,
			
			/**
			 * dgram.bind(path)
			 * <p>For Unix domain datagram sockets, start listening for incoming datagrams 
			 * on a socket specified by path. Note that clients may send() without bind(), 
			 * but no datagrams will be received without a bind().
			 * <p>Example of a Unix domain datagram server that echoes back all messages 
			 * it receives:
			 * <pre>
			 * var dgram = require("dgram");
			 * var serverPath = "/tmp/dgram_server_sock";
			 * var server = dgram.createSocket("unix_dgram");
			 * server.on("message", function (msg, rinfo) {
			 *   console.log("got: " + msg + " from " + rinfo.address);
			 *   server.send(msg, 0, msg.length, rinfo.address);
			 * });
			 * server.on("listening", function () {
			 *   console.log("server listening " + server.address().address);
			 * })
			 * </pre>
			 * <p>
			 * server.bind(serverPath);
			 * <p>Example of a Unix domain datagram client that talks to this server:
			 * var dgram = require("dgram");
			 * var serverPath = "/tmp/dgram_server_sock";
			 * var clientPath = "/tmp/dgram_client_sock";
			 * var message = new Buffer("A message at " + (new Date()));
			 * var client = dgram.createSocket("unix_dgram");
			 * client.on("message", function (msg, rinfo) {
			 *   console.log("got: " + msg + " from " + rinfo.address);
			 * });
			 * client.on("listening", function () {
			 *   console.log("client listening " + client.address().address);
			 *   client.send(message, 0, message.length, serverPath);
			 * });
			 * <p>
			 * client.bind(clientPath);
			 * dgram.bind(port, [address])
			 * <p> For UDP sockets, listen for datagrams on a named port and optional 
			 * address. If address is not specified, the OS will try to listen on all 
			 * addresses.
			 * <p>Example of a UDP server listening on port 41234:
			 * <pre>
			 * var dgram = require("dgram");
			 * var server = dgram.createSocket("udp4");
			 * var messageToSend = new Buffer("A message to send");
			 * server.on("message", function (msg, rinfo) {
			 *   console.log("server got: " + msg + " from " + rinfo.address + ":" + rinfo.port);
			 * });
			 * server.on("listening", function () {
			 *   var address = server.address();
			 *   console.log("server listening " + address.address + ":" + address.port);
			 * });
			 * server.bind(41234);
			 * // server listening 0.0.0.0:41234
			 */
			//> public void bind(String path)
			//> public void bind(int port, String? address)
			bind: vjo.NEEDS_IMPL,
			
			/**
			 * dgram.close()
			 * <p>Close the underlying socket and stop listening for data on it. UDP 
			 * sockets automatically listen for messages, even if they did not call bind().
			 */
			//> public void close()
			close: vjo.NEEDS_IMPL,
			
			/**
			 * dgram.address()
			 * <p>Returns an object containing the address information for a socket. For 
			 * UDP sockets, this object will contain address and port. For Unix domain 
			 * sockets, it will contain only address.
			 */
			//> public dgram.Socket.data.address address()
			address: vjo.NEEDS_IMPL,
			
			/**
			 * dgram.setBroadcast(flag)
			 * <p>Sets or clears the SO_BROADCAST socket option. When this option is set,
			 * UDP packets may be sent to a local interface's broadcast address.
			 */
			//> public void setBroadcast(boolean flag)
			setBroadcast: vjo.NEEDS_IMPL,
			
			/**
			 * dgram.setTTL(ttl)
			 * <p>Sets the IP_TTL socket option. TTL stands for "Time to Live," but in 
			 * this context it specifies the number of IP hops that a packet is allowed 
			 * to go through. Each router or gateway that forwards a packet decrements 
			 * the TTL. If the TTL is decremented to 0 by a router, it will not be 
			 * forwarded. Changing TTL values is typically done for network probes or 
			 * when multicasting.
			 * <p>The argument to setTTL() is a number of hops between 1 and 255. The 
			 * default on most systems is 64.
			 */
			//> public void setTTL(int ttl)
			setTTL: vjo.NEEDS_IMPL,
			
			/**
			 * Sets the IP_MULTICAST_TTL socket option. TTL stands for "Time to Live," 
			 * but in this context it specifies the number of IP hops that a packet is 
			 * allowed to go through, specifically for multicast traffic. Each router or 
			 * gateway that forwards a packet decrements the TTL. If the TTL is 
			 * decremented to 0 by a router, it will not be forwarded.
			 * <p>
			 * The argument to setMulticastTTL() is a number of hops between 0 and 255. 
			 * The default on most systems is 64.
			 */
			//> public void setMulticastTTL(int? ttl)
			setMulticastTTL: vjo.NEEDS_IMPL,
			
			/**
			 * Sets or clears the IP_MULTICAST_LOOP socket option. When this option is 
			 * set, multicast packets will also be received on the local interface
			 */
			//> public void setMulticastLoopback(boolean flag)
			setMulticastLoopback: vjo.NEEDS_IMPL,
			
			/**
			 * Tells the kernel to join a multicast group with IP_ADD_MEMBERSHIP socket 
			 * option.
			 * <p>
			 * If multicastAddress is not specified, the OS will try to add membership 
			 * to all valid interfaces.
			 */
			//> public void addMembership(Object multicastAddress, Object? multicastInterface)
			addMembership: vjo.NEEDS_IMPL,
			
			/**
			 * Opposite of addMembership - tells the kernel to leave a multicast group 
			 * with IP_DROP_MEMBERSHIP socket option. This is automatically called by 
			 * the kernel when the socket is closed or process terminates, so most apps 
			 * will never need to call this.
			 * <p>
			 * If multicastAddress is not specified, the OS will try to drop membership 
			 * to all valid interfaces.
			 */
			//> public void dropMembership(Object multicastAddress, Object? multicastInterface)
			dropMembership: vjo.NEEDS_IMPL	
		})
		.options({
			metatype: true
		})
	.endType(),
	// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
	
	/**
	 * 
	 */
	//> public final String
	CREATE_SOCKET_TYPE_UDP4: 'udp4',	
	
	/**
	 * 
	 */
	//> public final String
	CREATE_SOCKET_TYPE_UDP6: 'udp6'		
})
.protos({
	// vvvvvvvvvvvvvv  Exported Types  vvvvvvvvvvvvvvv
	/**
	 * 
	 */
	//> public type::dgram.Socket
	Socket: null, 
	// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^	
	
	/**
	 * dgram.createSocket(type, [callback])
	 * <p>Creates a datagram socket of the specified types. Valid types are: 
	 * udp4, udp6, and unix_dgram.
	 * <p>Takes an optional callback which is added as a listener for message 
	 * events.
	 * <pre>
	 * dgram.send(buf, offset, length, path, [callback])
	 * </pre>
	 * For Unix domain datagram sockets, the destination address is a pathname 
	 * in the filesystem. An optional callback may be supplied that is invoked 
	 * after the sendto call is completed by the OS. It is not safe to re-use 
	 * buf until the callback is invoked. Note that unless the socket is bound 
	 * to a pathname with bind() there is no way to receive messages on this socket.
	 * <p>
	 * Example of sending a message to syslogd on OSX via Unix domain socket 
	 * /var/run/syslog:
	 * <pre>
	 * var dgram = require('dgram');
	 * var message = new Buffer("A message to log.");
	 * var client = dgram.createSocket("unix_dgram");
	 * client.send(
	 *   message, 0, message.length, "/var/run/syslog",
	 *   function (err, bytes) {
	 *       if (err) {
	 *             throw err;
	 *       }
	 *       console.log("Wrote " + bytes + " bytes to socket.");
	 *    });
	 *  </pre>
	 */
	//> public dgram.Socket createSocket(String type, Function? callback)
	createSocket: vjo.NEEDS_IMPL
})
.options({
	metatype: true
})
.endType();