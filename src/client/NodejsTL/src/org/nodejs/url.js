/**
 * This module has utilities for URL resolution and parsing. Call require('url') 
 * to use it.
 * <p>Parsed URL objects have some or all of the following fields, depending on 
 * whether or not they exist in the URL string. Any parts that are not in the 
 * URL string will not be in the parsed object. Examples are shown for the URL
 * <p>'http://user:pass@host.com:8080/p/a/t/h?query=string#hash'
 * <p>href - The full URL that was originally parsed. Example: 
 * 'http://user:pass@host.com:8080/p/a/t/h?query=string#hash'
 * <p>protocol - The request protocol. Example: 'http:'
 * <p>host - The full host portion of the URL, including port and authentication 
 * information. Example: 'user:pass@host.com:8080'
 * <p>auth - The authentication information portion of a URL. Example: 'user:pass'
 * <p>hostname - Just the hostname portion of the host. Example: 'host.com'
 * <p>port - The port number portion of the host. Example: '8080'
 * <p>pathname - The path section of the URL, that comes after the host and 
 * before the query, including the initial slash if present. Example: '/p/a/t/h'
 * <p>search -The 'query string' portion of the URL, including the leading 
 * question mark. Example: '?query=string'
 * <p>query - Either the 'params' portion of the query string, or a 
 * querystring-parsed object. Example: 'query=string' or {'query':'string'}
 * <p>hash - The 'fragment' portion of the URL including the pound-sign. 
 * Example: '#hash'
 */
//> public
vjo.ctype('org.nodejs.url') 
.props({
	/**
	 * Definitions of options and other Object Literals used by url module.
	 */
	//> public
	data: vjo.otype().defs({
		
		/**
		 * 
		 */
		//> public ; // assume url - http://user:pass@host.com:8080/p/a/t/h?query=string#hash
		UrlObject: {		 
			/**
			 * 
			 */
			//> public String ; http://user:pass@host.com:8080/p/a/t/h?query=string#hash
			href: null,		
			
			/**
			 * 
			 */
			//> public String? ; http:
			protocol: null,	
			
			/**
			 * 
			 */
			//> public String? ; user:pass@host.com:8080
			host: null,		
			
			/**
			 * 
			 */
			//> public String? ; user:pass
			auth: null,		
			
			/**
			 * 
			 */
			//> public String? ; host.com
			hostname: null,	
			
			/**
			 * 
			 */
			//> public String? ; 8080
			port: null,		
			
			/**
			 * 
			 */
			//> public String? ; /p/a/t/h
			pathname: null,	
			
			/**
			 * 
			 */
			//> public String? ; ?query=string
			search: null,	
			
			/**
			 * 
			 */
			//> public String? ; query=string
			query: null,	
			
			/**
			 * 
			 */
			//> public String? ; #hash	
			hash: null		
		}
	}).endType()
})
.protos({
	/**
	 * url.parse(urlStr, parseQueryString=false)
	 * <p>Take a URL string, and return an object. Pass true as the second 
	 * argument to also parse the query string using the querystring module.
	 */
	//> public url.data.UrlObject parse(String urlStr, boolean? parseQueryString, boolean? slashesDenoteHost)
	parse: vjo.NEEDS_IMPL,
	
	/**
	 * Take a parsed URL object, and return a formatted URL string.
	 */
	//> public String format(url.data.UrlObject obj)
	//> public String format(String obj)
	format: vjo.NEEDS_IMPL,
	
	/**
	 * Take a base URL, and a href URL, and resolve them as a browser would for 
	 * an anchor tag.
	 */
	//> public String resolve(String from, String to)
	//> public String resolve(url.data.UrlObject from, url.data.UrlObject to)
	resolve: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public url.data.UrlObject resolveObject(String source, String relative)
	resolveObject: vjo.NEEDS_IMPL	
})
.options({
	metatype: true
})
.endType();