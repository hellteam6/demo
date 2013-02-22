/**
 * 
 */
//> public
vjo.ctype('org.nodejs.crypto')
//> needs(org.nodejs.assert.AssertionError)
.props({
	// vvvvvvvvvvvvvvvvvvvv NESTED TYPES vvvvvvvvvvvvvvvvvvvvvvvvv
	/**
	 * 
	 */
	//> public 
	Credentials: vjo.ctype()
		.protos({
			/**
			 * 
			 */
			//> public Credentials constructs(Object secureProtocol)
			constructs: function() {}
		})
	.endType(),
	
	/**
	 * 
	 */
	//> public 
	Hash: vjo.ctype()
		.protos({
			/**
			 * Updates the hash content with the given data. This can be called many 
			 * times with new data as it is streamed.
			 */
			//> public crypto.Hash update(Object data)
			update: vjo.NEEDS_IMPL,
			
			/**
			 * Calculates the digest of all of the passed data to be hashed. The encoding 
			 * can be 'hex', 'binary' or 'base64'.
			 */
			//> public crypto.Hash digest(String? encoding)
			digest: vjo.NEEDS_IMPL
		})
	.endType(),
	
	/**
	 * 
	 */
	//> public
	Hmac: vjo.ctype()
		.protos({
			/**
			 * Updates the hmac content with the given data. This can be called many 
			 * times with new data as it is streamed.
			 */
			//> public crypto.Hmac update(Object data)
			update: vjo.NEEDS_IMPL,
			
			/**
			 * Calculates the digest of all of the passed data to be hashed. The encoding 
			 * can be 'hex', 'binary' or 'base64'.
			 */
			//> public crypto.Hmac digest(String? encoding)
			digest: vjo.NEEDS_IMPL
		})
	.endType(),
		
	/**
	 * 
	 */
	//> public
	Cipher: vjo.ctype()
		.protos({
			/**
			 * cipher.update(data, input_encoding='binary', output_encoding='binary')
			 * <p>Updates the cipher with data, the encoding of which is given in 
			 * input_encoding and can be 'utf8', 'ascii' or 'binary'. The output_encoding 
			 * specifies the output format of the enciphered data, and can be 'binary', 
			 * 'base64' or 'hex'.
			 */
			//> public crypto.Cipher update(String data, String? inputEncoding, String? outputEncoding)
			update: vjo.NEEDS_IMPL,
			
			/**
			 * cipher.final(output_encoding='binary')
			 * <p>Returns any remaining enciphered contents, with output_encoding being 
			 * one of: 'binary', 'ascii' or 'utf8'.
			 */
		// MrP - keyword collision
			//> public void final_(String? outputEncoding)
			final_: vjo.NEEDS_IMPL
		})
	.endType(),
	
	/**
	 * 
	 */
	//> public
	Decipher: vjo.ctype()
		.protos({
			/**
			 * decipher.update(data, input_encoding='binary', output_encoding='binary')
			 * <p>Updates the cipher with data, the encoding of which is given in 
			 * input_encoding and can be 'utf8', 'ascii' or 'binary'. The output_encoding 
			 * specifies the output format of the enciphered data, and can be 'binary', 
			 * 'base64' or 'hex'.
			 */
			//> public crypto.Decipher update(String data, String? inputEncoding, String? outputEncoding)
			update: vjo.NEEDS_IMPL,
			
			/**
			 * decipher.final(output_encoding='binary')
			 * <p>Returns any remaining enciphered contents, with output_encoding being 
			 * one of: 'binary', 'ascii' or 'utf8'.
			 */
			//> public void final_(String? outputEncoding) ;		// MrP - keyword collision
			final_: vjo.NEEDS_IMPL
		})
	.endType(),
	
	/**
	 * 
	 */
	//> public
	Signer: vjo.ctype()
		.protos({
			/**
			 * Updates the signer object with data. This can be called many times with 
			 * new data as it is streamed.
			 */
			//> public crypto.Signer update(String data)
			update: vjo.NEEDS_IMPL,
			
			/**
			 * Calculates the signature on all the updated data passed through the 
			 * signer. privateKey is a string containing the PEM encoded private key 
			 * for signing.
			 * <p>Returns the signature in outputFormat which can be 'binary', 'hex' 
			 * or 'base64'
			 */
			//> public crypto.Signer sign(String privateKey, String? outputFormat)
			sign: vjo.NEEDS_IMPL
		})
	.endType(),
	
	/**
	 * 
	 */
	//> public
	Verifier: vjo.ctype()
		.protos({
			/**
			 * Updates the verifier object with data. This can be called many times with 
			 * new data as it is streamed.
			 */
			//> public crypto.Verifier update(String data)
			update: vjo.NEEDS_IMPL,
			
			/**
			 * Verifies the signed data by using the cert which is a string containing 
			 * the PEM encoded public key, and signature, which is the previously 
			 * calculates signature for the data, in the signature_format which can be 
			 * 'binary', 'hex' or 'base64'.
			 * <p>Returns true or false depending on the validity of the signature for 
			 * the data and public key.
			 */
			//> public crypto.Verifier verify(Object cert, String signature, String? signatureFormat)
			verify: vjo.NEEDS_IMPL
		})
	.endType(),
	
	// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
	
	/**
	 * 
	 */
	//> public
	data: vjo.otype().defs({
		/**
		 * 
		 */
		//> public
		createCredentialsDetails: {	 
			/**
			 * 
			 */
			//> public String?
			secureProtocol: null,	
			
			/**
			 * 
			 */
			//> public String?
			key: null,		
			
			/**
			 * 
			 */
			//> public String?
			cert: null,		
			
			
			/**
			 * 
			 */
			//> public Object? ; MrP - should be {Array | Object}
			ca: null,
			
			/**
			 * 
			 */
			//> public Object? ; MrP - should be {Array | Object}
			crl: null
	}
	}).endType()
})
.protos({
	// vvvvvvvvvvvvvv  Exported Types  vvvvvvvvvvvvvvv
	/**
	 * 
	 */
	//> public type::crypto.Credentials
	Credentials: null,	
	
	/**
	 * 
	 */
	//> public type::crypto.Hash
	Hash: null,		 	
	
	/**
	 * 
	 */
	//> public type::crypto.Hmac
	Hmac: null,			
	
	/**
	 * 
	 */
	//> public type::crypto.Cipher
	Cipher: null,		
	
	/**
	 * 
	 */
	//> public type::crypto.Decipher
	Decipher: null,		
	
	/**
	 * 
	 */
	//> public type::crypto.Signer
	Signer: null,		
	
	/**
	 * 
	 */
	//> public type::crypto.Verifier
	Verifier: null,		
	// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^	
	
	
	/**
	 * 
	 */
	//> public crypto.Credentials createCredentials(crypto.data.createCredentialsDetails cred)
	// cred has {method, key, cert, ca[]}
	createCredentials: vjo.NEEDS_IMPL,
	
	/**
	 * Creates and returns a hash object, a cryptographic hash with the given 
	 * algorithm which can be used to generate hash digests.
	 * <p>algorithm is dependent on the available algorithms supported by the 
	 * version of OpenSSL on the platform. Examples are 'sha1', 'md5', 'sha256', 
	 * 'sha512', etc. On recent releases, openssl list-message-digest-algorithms 
	 * will display the available digest algorithms.
	 */
	//> public crypto.Hash createHash(String algorithm)
	createHash: vjo.NEEDS_IMPL,
	
	/**
	 * Creates and returns a hmac object, a cryptographic hmac with the given 
	 * algorithm and key.
	 * <p>algorithm is dependent on the available algorithms supported by OpenSSL 
	 * - see createHash. key is the hmac key to be used.
	 */
	//> public crypto.Hmac createHmac(String algorithm, String key)
	createHmac: vjo.NEEDS_IMPL,
	
	/**
	 * Creates and returns a cipher object, with the given algorithm and key.
	 * algorithm is dependent on OpenSSL, examples are 'aes192', etc. On recent 
	 * releases, openssl list-cipher-algorithms will display the available cipher 
	 * algorithms
	 */
	//> public crypto.Cipher createCipher(String algorithm, String key)
	createCipher: vjo.NEEDS_IMPL,
	
	//> public crypto.Cipher createCipheriv(Object cipher, String key, Object iv)
	createCipheriv: vjo.NEEDS_IMPL,
	
	/**
	 * Creates and returns a decipher object, with the given algorithm and key. 
	 * This is the mirror of the cipher object above.
	 */
	//> public crypt.Decipher createDecipher(String algorithm, String key)
	createDecipher: vjo.NEEDS_IMPL,
	
	//> public crypt.Decipher createDecipheriv(String algorithm, String key)
	createDecipheriv: vjo.NEEDS_IMPL,
	
	/**
	 * Creates and returns a signing object, with the given algorithm. On recent 
	 * OpenSSL releases, openssl list-public-key-algorithms will display the 
	 * available signing algorithms. Examples are 'RSA-SHA256'.
	 */
	//> public crypto.Signer createSign(String algorithm)
	createSign: vjo.NEEDS_IMPL,
	
	/**
	 * Creates and returns a verification object, with the given algorithm. This 
	 * is the mirror of the signing object above.
	 */
	//> public crypto.Verifier createVerify(String algorithm)
	createVerify: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public final String[] ; should be able to use null value (MrP)
	RootCaCerts: []
})
.options({
	metatype: true
})
.endType();