/**
 * Use require('dns') to access this module.
 * <p>Here is an example which resolves 'www.google.com' then reverse resolves 
 * the IP addresses which are returned.
 * <pre>
 * var dns = require('dns');
 * dns.resolve4('www.google.com', function (err, addresses) {
 * if (err) throw err;
 *   console.log('addresses: ' + JSON.stringify(addresses));
 *   addresses.forEach(function (a) {
 *     dns.reverse(a, function (err, domains) {
 *       if (err) {
 *         console.log('reverse for ' + a + ' failed: ' + err.message);
 *       } 
 *       else {
 *         console.log('reverse for ' + a + ': ' + JSON.stringify(domains));
 *       }
 *     });
 *   });
 * });
 * </pre>
 */
//> public
vjo.ctype('org.nodejs.dns') 
.props({ 	
	/**
	 * 
	 */
	//> public
	callback: vjo.otype().defs({
		/**
		 * 
		 */
		//> public void lookup(Error? err, String? address, int? family)
		lookup: vjo.NEEDS_IMPL,
		
		/**
		 * 
		 */
		//> public void resolve(Error? err, Array? addresses)
		resolve: vjo.NEEDS_IMPL,
		
		/**
		 * Addresses of format: ['74.125.79.104', '74.125.79.105']
		 */
		//> public void resolve4(Error? err, String[]? addresses)
		resolve4: function() {}, 
		
		/**
		 * Addresses of format: ['74.125.79.104.01.02', '74.125.79.105.01.02']
		 */
		//> public void resolve6(Error? err, String[]? addresses)
		resolve6: function() {},
		
		/**
		 * Addresses of format: [{'priority': 10, 'exchange': 'mx.example.com'},...]
		 */
		//> public void resolveMx(Error? err, DnsResolveMxAddress[]? addresses)
		resolveMx: vjo.NEEDS_IMPL,
		
		/**
		 * ex: ['v=spf1 ip4:0.0.0.0 ~all']
		 */
		//> public void resolveTxt(Error? err, String[]? addresses)
		resolveTxt: vjo.NEEDS_IMPL,
		
		/**
		 * 
		 */
		//> public void resolveSrv(Error? err, DnsResolveSrvAddress[]? addresses)
		resolveSrv: vjo.NEEDS_IMPL,
		
		
		/**
		 * 
		 */
		//> public void reverse(Error? err, String[]? domainNames)
		reverse: vjo.NEEDS_IMPL
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
		resolveMxAddress: {	 
			/**
			 * 
			 */
			//> public int
			priority: null,	
			
			/**
			 * 
			 */
			//> public String
			exchange: null	
		},
	
		/**
		 * [{'priority': 10, 'weight': 5, 'port': 21223, 'name': 'service.example.com'}, ...]
		 */
		//> public
		resolveSrvAddress: {	
			
			/**
			 * 
			 */
			//> public int
			priority: null,		
			
			/**
			 * 
			 */
			//> public int
			weight: null,		
			
			/**
			 * 
			 */
			//> public int
			port: null,			
			
			/**
			 * 
			 */
			//> public String
			name: null			
		}
	}).endType()
})
.protos({
	/** Default: 1 */
	//> public final int
	NODATA: 0,		
	
	/** Default: 2 */
	//> public final int
	FORMERR: 0,		
	
	/** Default: 10 */
	//> public final int
	BADRESP: 0,		
	
	/** Default: 4 */
	//> public final int
	NOTFOUND: 0,		
	
	/** Default: 8 */
	//> public final int
	BADNAME: 0,		
	
	/** Default: 12 */
	//> public final int
	TIMEOUT: 0,		
	
	/** Default: 11 */
	//> public final int
	CONNREFUSED: 0,		
	
	/** Default: 15 */
	//> public final int
	NOMEM: 0,		
	
	/** Default: 16 */
	//> public final int
	DESTRUCTION: 0,		
	
	/** Default: 5 */
	//> public final int
	NOTIMP: 0,		
	
	/** Default: 6 */
	//> public final int
	EREFUSED: 0,		
	
	/** Default: 3 */
	//> public final int
	SERVFAIL: 0,		
	
	// vvvvvvvvvvvv  from dns.js   vvvvvvvvvvvvvv
	/**
	 * 
	 */
	//> public void getHostByName(String domain, Function callback)
	//> public void getHostByName(String domain, int family, Function callback)
	getHostByName: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public void getHostByAddr(String address, Function callback)
	//> public void getHostByAddr(String address, int family, Function callback)
	getHostByAddr: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public boolean isIP()
	isIP: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public void resolveNS(String domain, Function callback)
	resolveNS: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public void resolveCname(String domain, Function callback)
	resolveCname: vjo.NEEDS_IMPL,
	
	// ^^^^^^^^^^^^  from dns.js   ^^^^^^^^^^^^^^
	
	/**
	 * dns.lookup(domain, family=null, callback)
	 * <p>Resolves a domain (e.g. 'google.com') into the first found A (IPv4) or 
	 * AAAA (IPv6) record.
	 * <p>The callback has arguments (err, address, family). The address argument 
	 * is a string representation of a IP v4 or v6 address. The family argument 
	 * is either the integer 4 or 6 and denotes the family of address (not 
	 * neccessarily the value initially passed to lookup).
	 */
	//> public void lookup(String domain, dns.callback.lookup? callback)
	//> public void lookup(String domain, String family, dns.callback.lookup? callback)
	 lookup: vjo.NEEDS_IMPL,
	 
	/**
	 * dns.resolve(domain, rrtype='A', callback)
	 * <p>Resolves a domain (e.g. 'google.com') into an array of the record 
	 * types specified by rrtype. Valid rrtypes are A (IPV4 addresses), AAAA 
	 * (IPV6 addresses), MX (mail exchange records), TXT (text records), SRV 
	 * (SRV records), and PTR (used for reverse IP lookups).
	 * <p>
	 * The callback has arguments (err, addresses). The type of each item in 
	 * addresses is determined by the record type, and described in the 
	 * documentation for the corresponding lookup methods below.
	 * <p>
	 * On error, err would be an instanceof Error object, where err.errno is one 
	 * of the error codes listed below and err.message is a string describing 
	 * the error in English.
	 */
	 //> public void resolve(String domain, dns.callback.resolve callback)
	 //> public void resolve(String domain, String rrtype, dns.callback.resolve? callback)
	 resolve: vjo.NEEDS_IMPL,
	 
	 /**
	  * dns.resolve4(domain, callback)
	  * <p>The same as dns.resolve(), but only for IPv4 queries (A records). 
	  * addresses is an array of IPv4 addresses 
	  * (e.g.['74.125.79.104', '74.125.79.105', '74.125.79.106']).
	  */
	 //> public void resolve4(String domain, dns.callback.resolve4 callback)
	 resolve4: function() {},
	 
	 //> public void resolve4a(String domain, (void f(Error? err, String[]? addresses)) callback)
	 resolve4a: vjo.NEEDS_IMPL,
	 
	 /**
	  * The same as dns.resolve4() except for IPv6 queries (an AAAA query).
	  */
	 //> public void resolve6(String domain, dns.callback.resolve6 callback)
	 resolve6: vjo.NEEDS_IMPL,
	 
	 /**
	  * dns.resolveMx(domain, callback)
	  * <p>The same as dns.resolve(), but only for mail exchange queries 
	  * (MX records).addresses is an array of MX records, each with a priority 
	  * and an exchange attribute 
	  * <pre>
	  * [{'priority': 10, 'exchange': 'mx.example.com'},...]
	  * </pre>
	  */
	 //> public void resolveMx(String domain, dns.callback.resolveMx callback)
	 resolveMx: vjo.NEEDS_IMPL,
	 
	 /**
	  * dns.resolveTxt(domain, callback)
	  * <p>The same as dns.resolve(), but only for text queries (TXT records). 
	  * addresses is an array of the text records available for domain
	  * <pre>
	  * ['v=spf1 ip4:0.0.0.0 ~all']
	  * </pre>
	  */
	 //> public void resolveTxt(String domain, dns.callback.resolveTxt callback)
	 resolveTxt: vjo.NEEDS_IMPL,
	 
	 /**
	  * dns.resolveSrv(domain, callback)
	  * <p>The same as dns.resolve(), but only for service records (SRV records). 
	  * addresses is an array of the SRV records available for domain. Properties 
	  * of SRV records are priority, weight, port, and name:
	  * <pre>
	  * [{'priority': 10, {'weight': 5, 'port': 21223, 'name': 'service.example.com'}, ...]
	  * </pre>
	  */
	 //> public void resolveSrv(String domain, dns.callback.resolveSrv callback)
	 resolveSrv: vjo.NEEDS_IMPL,
	 
	 /**
	  * dns.reverse(ip, callback)
	  * <p>Reverse resolves an ip address to an array of domain names.
	  * The callback has arguments (err, domains).  If there an an error, err 
	  * will be non-null and an instanceof the Error object.
	  */
	 //> public void reverse(String ip, dns.callback.reverse callback)
	 reverse: vjo.NEEDS_IMPL
})
.options({
	metatype: true
})
.endType();