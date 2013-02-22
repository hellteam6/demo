/**
 * This module is used for writing unit tests for your applications, you can 
 * access it with require('assert').
 * 
 * <br>Exports:
 * <ul>
 * <li>AssertionError</li>
 * </ul>
 */
//> public
vjo.ctype('org.nodejs.assert')  
.props({	
	// vvvvvvvvvvvvvvvvvvv NESTED TYPES vvvvvvvvvvvvvvvvvvv
	/**
	 * 
	 */
	//> public 
	AssertionError: vjo.ctype()
		.props({
			//.inherits('js.native.Error') // Where is the vjo type for native JS Error type?
			/**
			 * 
			 */
			//> public
			data: vjo.otype().defs({
				/**
				 * 
				 */
				//> public
				Options: {	
					/**
					 * 
					 */
					//> public String?
					name: null,
					
					/**
					 * 
					 */
					//> public String?
					message: null,
					
					/**
					 * 
					 */
					//> public Object				 
					actual: null,		
					/**
					 * 
					 */
					//> public Object?
					expected: null,		
					
					/**
					 * 
					 */
					//> public String?
					operator: null,
					
					/**
					 * 
					 */
					//> public Function?
					stackStartFunction: null	
				}
			}).endType()
		})
		.protos({
			/**
			 * Options contains:
			 * <ul>
			 * <li>name : String?</li>
			 * <li>message : String</li>
			 * <li>actual : Object</li>
			 * <li>expected : Object</li>
			 * <li>operator : String?</li>
			 * <li>stackStartFunction : Function?</li>
			 * </ul>
			 */
			//> public AssertionError constructs(AssertionError.data.Options options)
			constructs: null,
			
			/**
			 * 
			 */
			//> public String
			name:     null,	
			
			/**
			 * 
			 */
			//> public String
			message:  null, 
			
			/**
			 * 
			 */
			//> public Object ; options.actual
			actual:   null,	
			
			/**
			 * 
			 */
			//> public Object ; options.expected
			expected: null,	
			
			/**
			 * 
			 */
			//> public Object ; options.
			operator: null 	
			
	//		toString: vjo.NEEDS_IMPL	// public String ; no need to define since always in JS
	
		})
		.options({
			metatype: true
		})
	.endType()
	// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
})
.protos({		
	// vvvvvvvvvvvvvv  Exported Types  vvvvvvvvvvvvvvv
	/**
	 * 
	 */
	//> public type::assert.AssertionError
	AssertionError: null, 
	// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
	
	/**
	 * assert.fail(actual, expected, message, operator)
	 * <p>Tests if actual is equal to expected using the operator provided.</p>
	 */
	//> public void fail(Object actual, Object? expected, String? message, Object? operator, Function? stackStartFunction) ; throws AssertionError
	fail: vjo.NEEDS_IMPL,
	
	/**
	 * assert.ok(value, [message])
	 * <p>Tests if value is a true value, it is equivalent to 
	 * assert.equal(true, value, message);</p>
	 */
	//> public boolean ok(Object value, String? message) ; throws AssertionError
	ok: vjo.NEEDS_IMPL,
	
	/**
	 * assert.equal(actual, expected, [message])
	 * <p>Tests shallow, coercive equality with the equal comparison operator 
	 * ( == ). </p>
	 */
	//> public void equal(Object actual, Object expected, String? message)
	equal: vjo.NEEDS_IMPL,
	
	/**
	 * assert.notEqual(actual, expected, [message])
	 * <p>Tests shallow, coercive non-equality with the not equal comparison 
	 * operator ( != ).</p>
	 */
	//> public void notEqual(Object actual, Object expected, String? message)
	notEqual: vjo.NEEDS_IMPL,
	
	/**
	 * Tests for deep inequality.
	 */
	//> public void inequality(Object actual, Object expected, String? message)
	notDeepEqual: vjo.NEEDS_IMPL,
	
	/**
	 * Tests for deep equality.
	 */
	//> public void deepEqual(Object actual, Object expected, String? message)
	deepEqual: vjo.NEEDS_IMPL,
	
	/**
	 * Tests strict equality, as determined by the strict equality operator ( === ) 
	 */
	//> public void strictEqual(Object actual, Object expected, String? message)
	strictEqual: vjo.NEEDS_IMPL,
	
	/**
	 * Tests strict inequality, as determined by the strict equality operator ( !=== ) 
	 */
	//> public void notStrictEqual(Object actual, Object expected, String? message)
	notStrictEqual: vjo.NEEDS_IMPL,
	
	/**
	 * assert.throws(block, [error], [message])
	 * <p>Expects block to throw an error.</p>
	 */
	//> public void throws(Function block, {Function | RegExp}? error, String? message) ;	// MrP - is defined as "throws"" but that is reserved JavaScript word
	throws_: vjo.NEEDS_IMPL,
	
	/**
	 * assert.doesNotThrow(block, [error], [message])
	 * <p>Expects block to throw an error.</p>
	 */
	//> public void throws(Function block, {Function | RegExp}? error, String? message) ;	// MrP - is defined as "throws"" but that is reserved JavaScript word
	doesNotThrow: vjo.NEEDS_IMPL,
	
	/**
	 * assert.ifError(value)
	 * <p>Tests if value is not a false value, throws if it is a true value. 
	 * Useful when testing the first argument, error in callbacks.</p>
	 */
	//> public void ifError(Object? value)
	ifError: vjo.NEEDS_IMPL
	
//	//> public void native()
//	native_: vjo.NEEDS_IMPL
})
.options({
	metatype: true
})
.endType();