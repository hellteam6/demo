/**
 * This module contains utilities for dealing with file paths. Use require('path') 
 * to use it.
 */
//> public ;// all exports...
vjo.ctype('org.nodejs.path') 
.props({
	/**
	 * 
	 */
	//> public
	callback: vjo.otype().defs({
		/**
		 * Callback for the path.exists(...) function
		 */
		//> public void exists(boolean? exists)
		exists: vjo.NEEDS_IMPL
	}).endType()
})
.protos({
	/**
	 * <pre>
	 * path.join([path1], [path2], [...])
	 * </pre>
	 * <p>Join all arguments together and resolve the resulting path.
	 * <p>Example:
	 * <pre>
	 * node> require('path').join('/foo', 'bar', 'baz/asdf', 'quux', '..')
	 * '/foo/bar/baz/asdf'
	 * </pre>
	 */
	//> public String join(String... paths)
	join: vjo.NEEDS_IMPL,
	
	/**
	 * <pre>
	 * path.normalizeArray(arr)
	 * </pre>
	 * <p>Normalize an array of path parts, taking care of '..' and '.' parts.
	 * <p>Example:
	 * <pre>
	 * path.normalizeArray(['', 'foo', 'bar', 'baz', 'asdf', 'quux', '..'])
	 * // returns
	 * [ '', 'foo', 'bar', 'baz', 'asdf' ]
	 * </pre>
	 */
	//> public String normalizeArray(String, boolean? keepBlanks)
	//> public String normalizeArray({Array | String[]} parts, boolean? keepBlanks)
	normalizeArray: vjo.NEEDS_IMPL,
	
	/**
	 * Resolves to to an absolute path.
	 * <p>If to isn't already absolute from arguments are prepended in right to 
	 * left order, until an absolute path is found. If after using all from paths 
	 * still no absolute path is found, the current working directory is used as 
	 * well. The resulting path is normalized, and trailing slashes are removed 
	 * unless the path gets resolved to the root directory.
	 * <p>
	 * Another way to think of it is as a sequence of cd commands in a shell.
	 * path.resolve('foo/bar', '/tmp/file/', '..', 'a/../subfile')
	 * Is similar to:
	 * <pre>
	 * cd foo/bar
	 * cd /tmp/file/
	 * cd ..
	 * cd a/../subfile
	 * pwd
	 * </pre>
	 * The difference is that the different paths don't need to exist and 
	 * may also be files.
	 * <p>Examples:
	 * <pre>
	 * path.resolve('/foo/bar', './baz')
	 * // returns 
	 * '/foo/bar/baz'
	 * 
	 * path.resolve('/foo/bar', '/tmp/file/')
	 * // returns
	 * '/tmp/file'
	 * path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif')
	 * // if currently in /home/myself/node, it returns
	 * '/home/myself/node/wwwroot/static_files/gif/image.gif'
	 * </pre>
	 */
	//> public String resolve(String part1, String... parts)
	resolve: vjo.NEEDS_IMPL,
	
	/**
	 * <pre>path.normalize(p)</pre>
	 * <p>Normalize a string path, taking care of '..' and '.' parts.
	 * <p>Example:
	 * <pre>
	 * path.normalize('/foo/bar/baz/asdf/quux/..')
	 * // returns
	 * '/foo/bar/baz/asdf'
	 * </pre>
	 */
	//> public String normalize(String path, boolean? keepBlanks)
	normalize: vjo.NEEDS_IMPL,
	
	/**
	 * <pre>path.dirname(p)</pre>
	 * <p>Return the directory name of a path. Similar to the Unix dirname command.
	 * <p>Example:
	 * <pre>
	 * path.dirname('/foo/bar/baz/asdf/quux')
	 * // returns
	 * '/foo/bar/baz/asdf'
	 * </pre>
	 */
	//> public String dirname(String path)
	dirname: vjo.NEEDS_IMPL,
	
	/**
	 * @deprecated
	 * use path.basename instead
	 */
	//> public String filename(String x)
	filename: vjo.NEEDS_IMPL,
	
	/**
	 * <pre>path.basename(path, [ext])</pre>
	 * <p>Return the last portion of a path. Similar to the Unix basename command.
	 * <p>Example:
	 * <pre>
	 * path.basename('/foo/bar/baz/asdf/quux.html')
	 * // returns
	 * 'quux.html'
	 * 
	 * path.basename('/foo/bar/baz/asdf/quux.html', '.html')
	 * // returns
	 * 'quux'
	 */
	//> public String basename(String path, String? ext)
	basename: vjo.NEEDS_IMPL,
	
	/**
	 * <pre>path.extname(path)</pre>
	 * <p>Return the extension of the path. Everything after the last '.' in the 
	 * last portion of the path. If there is no '.' in the last portion of the 
	 * path or the only '.' is the first character, then it returns an empty 
	 * string. 
	 * <p>Examples:
	 * <pre>
	 * path.extname('index.html')
	 * // returns 
	 * '.html'
	 * 
	 * path.extname('index')
	 * // returns
	 * ''
	 * </pre>
	 */
	//> public String extname(String path)
	extname: vjo.NEEDS_IMPL,
	
	/**
	 * <pre>path.exists(path, [callback])</pre>
	 * <p>Test whether or not the given path exists. Then, call the callback 
	 * argument with either true or false. 
	 * <p>Example:
	 * <pre>
	 * path.exists('/etc/passwd', function (exists) {
	 *   util.debug(exists ? "it's there" : "no passwd!");
	 * });
	 * </pre>
	 * The callback takes a boolean
	 */
	//> public void exists(String path, path.callback.exists? callback)
	exists: vjo.NEEDS_IMPL,
	
	/**
	 * <pre>path.exists(path)</pre>
	 * <p>Answer whether or not the given path exists.
	 * <p>Example:
	 * <pre>
	 * var exists = path.exists('/etc/passwd') ;
	 * console.log(exists ? "it's there" : "no passwd!");
	 * </pre>
	 */
	//> public boolean exists(String path)
	existsSync: vjo.NEEDS_IMPL
})
.options({
	metatype: true
})
.endType();