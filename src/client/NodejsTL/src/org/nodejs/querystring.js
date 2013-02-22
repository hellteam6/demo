/**
 * 
 */
//> public
vjo.ctype('org.nodejs.querystring') 
.props({
	// vvvvvvvvv   from querystring.js    vvvvvvvvvvv
	
//	var urlDecode = process.binding("http_parser").urlDecode;
//	QueryString.unescape = urlDecode;
	/**
	 * 
	 */
	//> public String urlDecode(String s)
	urlDecode: vjo.NEEDS_IMPL,  // MrP: need to get signature from http_parser's urlDecode'
	
	// ^^^^^^^^^   from querystring.js    ^^^^^^^^^^^
	
	/**
	 * <pre>
	 * querystring.stringify(obj, sep='&', eq='=')
	 * </pre>
	 * <p>Serialize an object to a query string. Optionally override the default 
	 * separator and assignment characters.
	 * <p>Example:
	 * <pre>
	 * querystring.stringify({foo: 'bar'})
	 * // returns
	 * 'foo=bar'
	 * querystring.stringify({foo: 'bar', baz: 'bob'}, ';', ':')
	 * // returns
	 * 'foo:bar;baz:bob'
	 * </pre>
	 * Munge indicates whether array/object params should be munged PHP/Rails-style.
	 * The default for munge is true.
	 * <p>Name is the name of the current key, used for handling children recursively
	 */
	//> public String stringify(Object obj, String? sep, String? eq, boolean? munge, String? name)
	stringify: vjo.NEEDS_IMPL,
	
	/**
	 * Same as stringify(...)
	 */
	//> public String stringify(Object obj, String? sep, String? eq, boolean? munge, String? name) ; //gets SAME assignment in module as stringify
	encode: vjo.NEEDS_IMPL,
	
	/**
	 * <pre>querystring.parse(str, sep='&', eq='=')</pre>
	 * <p>Deserialize a query string to an object. Optionally override the 
	 * default separator and assignment characters.
	 * <p>Example:
	 * <pre>
	 * querystring.parse('a=b&b=c')
	 * // returns
	 * { 'a': 'b'
	 * , 'b': 'c'
	 * }
	 * </pre>
	 * Note that querystring.parse() with no args returns {}
	 */
	//> public Object parse(String? str, String? sep, String? eq)
	parse: vjo.NEEDS_IMPL,
	
	/**
	 * Same as parse(...)
	 */
	//> public Object decode(String? str, String? sep, String? eq) ; // gets SAME assignment in module as parse(...)
	decode: vjo.NEEDS_IMPL,
	
	/**
	 * querystring.escape
	 * <p>The escape function used by querystring.stringify, provided so that it 
	 * could be overridden if necessary.
	 */
	//> public String escapse(String str)
	escape: vjo.NEEDS_IMPL,
	
	/**
	 * querystring.unescape
	 * <p>The unescape function used by querystring.parse, provided so that it 
	 * could be overridden if necessary.
	 */
	//> public String unescapse(String str, boolean? decodeSpaces)
	unescape: vjo.NEEDS_IMPL,
	
	/**
	 * A safe, fast alternative to decodeURIComponent
	 */
	//> public String unescapeBuffer(String s, boolean? decodeSpaces)
	unescapeBuffer: vjo.NEEDS_IMPL
})
.options({
	metatype: true
})
.endType();