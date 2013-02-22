/**
 * Pure Javascript is Unicode friendly but not nice to binary data. When dealing 
 * with TCP streams or the file system, it's necessary to handle octet streams. 
 * Node has several strategies for manipulating, creating, and consuming octet 
 * streams.
 * <p>Raw data is stored in instances of the Buffer class. A Buffer is similar 
 * to an array of integers but corresponds to a raw memory allocation outside 
 * the V8 heap. A Buffer cannot be resized.
 * <p>The Buffer object is global.
 * <p>Converting between Buffers and JavaScript string objects requires an 
 * explicit encoding method. Here are the different string encodings;
 * <ul>
 * <li>'ascii' - for 7 bit ASCII data only. This encoding method is very fast, 
 * and will strip the high bit if set.</li>
 * <li>'utf8' - Unicode characters. Many web pages and other document formats use UTF-8</li>
 * <li>'base64' - Base64 string encoding.</li>
 * <li>'binary' - A way of encoding raw binary data into strings by using only 
 * the first 8 bits of each character. This encoding method is depreciated and 
 * should be avoided in favor of Buffer objects where possible. This encoding 
 * will be removed in future versions of Node.</li>
 * <ul>
 */
//> public
vjo.ctype('org.nodejs.buffer') 
.props({
	// vvvvvvvvvvvvvvvvvvvvvv NESTED TYPES vvvvvvvvvvvvvvvvvvv
	/**
	 * 
	 */
	//> public
	SlowBuffer: vjo.ctype()
	.props({
		
	})
	.protos({
		/**
		 * 
		 */
		//> public String inspect()
		inspect: vjo.NEEDS_IMPL,

		/**
		 * buffer.toString(encoding, start=0, end=buffer.length)
		 * <p>Decodes and returns a string from buffer data encoded with encoding 
		 * beginning at start and ending at end.
		 * <p>See buffer.write() example, above.
		 * The encoding is something toString() should work on</p>
		 */
		//> public String toString({String | Object}? encoding, int? start, int? end)
		toString: vjo.NEEDS_IMPL,
		
		/**
		 * buffer.write(string, offset=0, encoding='utf8')
		 * <p>Writes string to the buffer at offset using the given encoding. 
		 * Returns number of octets written. If buffer did not contain enough space 
		 * to fit the entire string it will write a partial amount of the string. In 
		 * the case of 'utf8' encoding, the method will not write partial characters.
		 * <p>Example: write a utf8 string into a buffer, then print it</p>
		 * <p>
		 * <pre>
		 * buf = new Buffer(256);
		 * len = buf.write('\u00bd + \u00bc = \u00be', 0);
		 * console.log(len + " bytes: " + buf.toString('utf8', 0, len));
		 * // 12 bytes: ½ + ¼ = ¾
		 * </pre>
		 * <p>
		 * Supports both (string, offset, encoding) and the legacy (string, encoding, offset)</p>
		 */
		//> public int write(String string, String offset, String encoding) ; yes offset can be String
		//> public int write(String string, int? offset, String? encoding)
		//> public int write(String string, String encoding, int? offset) ; yes internally there is a swap
		write: vjo.NEEDS_IMPL,
		
		/**
		 * *** NOTE: This returns Buffer NOT SlowBuffer ***
		 */
		//> public buffer.Buffer slice(int start, int? end)
		slice: vjo.NEEDS_IMPL
	})
	.endType(),
	
	/**
	 * 
	 */
	//> public 
	Buffer: vjo.ctype()
	.props({
		
		/**
		 * 
		 */
		//> public int ; MrP - from code
		poolSize: null, 
		
		/**
		 * Buffer.byteLength(string, encoding='utf8')
		 * <p>Gives the actual byte length of a string. This is not the same as 
		 * String.prototype.length since that returns the number of characters in a 
		 * string.
		 * <p>Example:</p>
		 * <pre>
		 * str = '\u00bd + \u00bc = \u00be';
		 * console.log(str + ": " + str.length + " characters, " +
		 *   Buffer.byteLength(str, 'utf8') + " bytes");
		 * // ½ + ¼ = ¾: 9 characters, 12 bytes
		 * </pre>
		 */
		//> public int byteLength(String str, String? encoding)
		byteLength: vjo.NEEDS_IMPL,
		
		/**
		 * Tests if obj is a Buffer
		 */
		//> public boolean isBuffer(Object obj)
		isBuffer: vjo.NEEDS_IMPL
	})
	.protos({
		/**
		 * buffer.length
		 * <p>The size of the buffer in bytes. Note that this is not necessarily the 
		 * size of the contents. length refers to the amount of memory allocated for 
		 * the buffer object. It does not change when the contents of the buffer are 
		 * changed.
		 * <p>
		 * <pre>
		 * buf = new Buffer(1234);
		 * console.log(buf.length);
		 * buf.write("some string", "ascii", 0);
		 * console.log(buf.length);
		 * // 1234
		 * // 1234
		 * </pre>
		 * 
		 */
		//> public int
		length: 0,		
				
		/**
		 * 
		 */
		//> public String inspect()
		inspect: vjo.NEEDS_IMPL,
		
		/**
		 * new Buffer(size)
		 * <p>Allocates a new buffer of size octets.
		 * <p>
		 * new Buffer(array)
		 * <p>Allocates a new buffer using an array of octets.
		 * <p>
		 * new Buffer(str, encoding='utf8')
		 * <p>Allocates a new buffer containing the given str.
		 */
		//> public  constructs(int size)
		//> public  constructs(int[] octets)
		//> public  constructs(String str, String? encoding)
		constructs: function() {},
		
		/**
		 * buffer.write(string, offset=0, encoding='utf8')
		 * <p>Writes string to the buffer at offset using the given encoding. 
		 * Returns number of octets written. If buffer did not contain enough space 
		 * to fit the entire string it will write a partial amount of the string. In 
		 * the case of 'utf8' encoding, the method will not write partial characters.
		 * <p>Example: write a utf8 string into a buffer, then print it
		 * <p>
		 * <pre>
		 * buf = new Buffer(256);
		 * len = buf.write('\u00bd + \u00bc = \u00be', 0);
		 * console.log(len + " bytes: " + buf.toString('utf8', 0, len));
		 * // 12 bytes: ½ + ¼ = ¾
		 * </pre>
		 * <p>
		 * Supports both (string, offset, encoding) and the legacy (string, encoding, offset)
		 */
		//> public int write(String string, String offset, String encoding) ; yes offset can be String
		//> public int write(String string, int? offset, String? encoding)
		//> public int write(String string, String encoding, int? offset) ; yes internally there is a swap
		write: vjo.NEEDS_IMPL,
		
		/**
		 * buffer.toString(encoding, start=0, end=buffer.length)
		 * <p>Decodes and returns a string from buffer data encoded with encoding 
		 * beginning at start and ending at end.
		 * <p>See buffer.write() example, above.
		 * The encoding is something toString() should work on
		 */
		//> public String toString({String | Object}? encoding, int? start, int? end)
		toString: vjo.NEEDS_IMPL,
		
		/**
		 * buffer[index]
		 * <p>Get and set the octet at index. The values refer to individual bytes, 
		 * so the legal range is between 0x00 and 0xFF hex or 0 and 255.
		 * <p>Example: copy an ASCII string into a buffer, one byte at a time:
		 * <p>
		 * <pre>
		 * str = "node.js";
		 * buf = new Buffer(str.length);
		 * for (var i = 0; i < str.length ; i++) {
		 *   buf[i] = str.charCodeAt(i);
		 * }
		 * console.log(buf);
		 * // node.js
		 * </pre>
		 * </p>
		 */
			
		/**
		 * buffer.copy(targetBuffer, targetStart, sourceStart, sourceEnd=buffer.length)
		 * <p>Does a memcpy() between buffers.
		 * <p>Example: build two Buffers, then copy buf1 from byte 16 through byte 
		 * 19 into buf2, starting at the 8th byte in buf2.
		 * <pre>
		 * buf1 = new Buffer(26);
		 * buf2 = new Buffer(26);
		 * for (var i = 0 ; i < 26 ; i++) {
		 *   buf1[i] = i + 97; // 97 is ASCII a
		 *   buf2[i] = 33; // ASCII !
		 * }
		 * buf1.copy(buf2, 8, 16, 20);
		 * console.log(buf2.toString('ascii', 0, 25));
		 * // !!!!!!!!qrst!!!!!!!!!!!!!
		 * </pre>
		 */
		//> public void copy(buffer.Buffer target, int? targetStart, int? sourceStart, int? sourceEnd)
		copy: vjo.NEEDS_IMPL,
		
		/**
		 * buffer.slice(start, end=buffer.length)
		 * <p>Returns a new buffer which references the same memory as the old, but 
		 * offset and cropped by the start and end indexes.
		 * <p>Modifying the new buffer slice will modify memory in the original buffer!
		 * <p>Example: build a Buffer with the ASCII alphabet, take a slice, then 
		 * modify one byte from the original Buffer.
		 * <pre>
		 * var buf1 = new Buffer(26);
		 * for (var i = 0 ; i < 26 ; i++) {
		 *   buf1[i] = i + 97; // 97 is ASCII a
		 * }
		 * var buf2 = buf1.slice(0, 3);
		 * console.log(buf2.toString('ascii', 0, buf2.length));
		 * buf1[0] = 33;
		 * console.log(buf2.toString('ascii', 0, buf2.length));
		 * // abc
		 * // !bc
		 * </pre>
		 */
		//> public buffer.Buffer slice(int start, int? end)
		slice: vjo.NEEDS_IMPL,
		
		/**
		 * 
		 */
		//> public String utf8Slice(int start, int? end)
		utf8Slice: vjo.NEEDS_IMPL,
		
		/**
		 * 
		 */
		//> public String binarySlice(int start, int? end)
		binarySlice: vjo.NEEDS_IMPL,
		
		/**
		 * 
		 */
		//> public String asciiSlice(int start, int? end)
		asciiSlice: vjo.NEEDS_IMPL,
		
		/**
		 * 
		 */
		//> public int utf8Write({String | Buffer} data, int? offset)
		utf8Write: vjo.NEEDS_IMPL,
		
		/**
		 * 
		 */
		//> public int binaryWrite({String | Buffer} data, int? offset)
		binaryWrite: vjo.NEEDS_IMPL,
		
		/**
		 * 
		 */
		//> public int asciiWrite({String | Buffer} data, int? offset)
		asciiWrite: vjo.NEEDS_IMPL,
		
		//
		// ------- From actual code review - not in docs
		//
		/**
		 * 
		 */
		//> public Object get(int index)
		get: vjo.NEEDS_IMPL,
		
		/**
		 * 
		 */
		//> public void set(int index, Object value)
		set: vjo.NEEDS_IMPL
	})
	.endType()
	// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
})
.protos({
	// vvvvvvvvvvvvvv  Exported Types  vvvvvvvvvvvvvvv
	/**
	 * 
	 */
	//> public type::org.nodejs.buffer.Buffer
	Buffer: null,
	
	/**
	 * 
	 */
	//> public type::org.nodejs.buffer.SlowBuffer
	SlowBuffer: null 
	// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
})
.options({
	metatype: true
})
.endType();