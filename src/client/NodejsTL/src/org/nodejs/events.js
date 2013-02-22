/**
 * 
 */
//> public
vjo.ctype('org.nodejs.events') 
.props({
	/**
	 * Many objects in Node emit events: a TCP server emits an event each time there 
	 * is a stream, a child process emits an event when it exits. All objects which 
	 * emit events are instances of events.EventEmitter.
	 * <p>Events are represented by a camel-cased string. Here are some examples: 
	 * 'connection', 'data', 'messageBegin'.
	 * <p>Functions can be then be attached to objects, to be executed when an event 
	 * is emitted. These functions are called listeners.
	 * <p>require('events').EventEmitter to access the EventEmitter class.
	 * <p>All EventEmitters emit the event 'newListener' when new listeners are added.
	 * <p> When an EventEmitter experiences an error, the typical action is to emit 
	 * an 'error' event. Error events are special--if there is no handler for them 
	 * they will print a stack trace and exit the program.
	 * <p>
	 * Event: 'newListener'
	 * <pre>
	 * function (event, listener) { }
	 * </pre>
	 * This event is emitted any time someone adds a new listener.
	 * <p>
	 * Event: 'error'
	 * <pre>
	 * function (exception) { }
	 * </pre>
	 * <p>
	 * If an error was encountered, then this event is emitted. This event is special - 
	 * when there are no listeners to receive the error Node will terminate execution 
	 * and display the exception's stack trace.</p>
	 */ 
	//> public
	EventEmitter: vjo.ctype('<T>') 
		.props({ 
			/**
			 * 
			 */
			//> public
			event: vjo.otype().defs({ 
				/**
				 * This event is emitted any time someone adds a new listener.
				 */
				//> public void newListener(String? event, Function? listener)
				newListener: vjo.NEEDS_IMPL,
				
				/**
				 * function (exception) { }
				 * <p>If an error was encountered, then this event is emitted. This 
				 * event is special - when there are no listeners to receive the error 
				 * Node will terminate execution and display the exception's stack trace.
				 */
				//> public void error(Object? exception)
				error: vjo.NEEDS_IMPL
			}).endType()
		})
		.protos({
			/**
			 *
			 * emitter.on(event, listener)
			 * <p>Adds a listener to the end of the listeners array for the specified event.
			 * <pre>
			 * server.on('connection', function (stream) {
			 *   console.log('someone connected!');
			 * });
			 * </pre>
			 */
			//> public T ^on(String type, Function listener) ; //throws Error,  MrP - is assigned addListener() in the code
			on: vjo.NEEDS_IMPL,
			
			//> public T ^addListener(String type, Function listener) ; throws Error
			addListener: vjo.NEEDS_IMPL,
			
			/**
			 * emitter.once(event, listener)
			 * <p>Adds a one time listener for the event. The listener is invoked only 
			 * the first time the event is fired, after which it is removed.
			 * <pre>
			 * server.once('connection', function (stream) {
			 *   console.log('Ah, we have our first user!');
			 * });
			 * </pre>
			 */
			//> public T ^once(String event, Function listener) ; throws Error
			once: vjo.NEEDS_IMPL,
			
			/**
			 * emitter.removeListener(event, listener)
			 * <p>Remove a listener from the listener array for the specified event. 
			 * Caution: changes array indices in the listener array behind the listener.
			 * <pre>
			 * var callback = function(stream) {
			 *   console.log('someone connected!');
			 * };
			 * server.on('connection', callback);
			 * // ...
			 * server.removeListener('connection', callback);
			 * </pre>
			 */
			//> public T removeListener(String type, Function listener)
			removeListener: vjo.NEEDS_IMPL,
			
			/**
			 * emitter.removeAllListeners(event)
			 * <p>Removes all listeners from the listener array for the specified event.
			 * <pre>
			 * emitter.listeners(event)
			 * </pre>
			 * Returns an array of listeners for the specified event. This array can be 
			 * manipulated, e.g. to remove listeners.
			 * <pre>
			 * server.on('connection', function (stream) {
			 *   console.log('someone connected!');
			 * });
			 * console.log(util.inspect(server.listeners('connection'));
			 * // [ [Function] ]
			 * </pre>
			 */
			//> public T removeAllListeners(String type)
			removeAllListeners: vjo.NEEDS_IMPL,
			
			/**
			 * By default EventEmitters will print a warning if more than 10 listeners 
			 * are added to it. This is a useful default which helps finding memory leaks. 
			 * Obviously not all Emitters should be limited to 10. This function allows 
			 * that to be increased. Set to zero for unlimited.
			 */
			//> public void setMaxListeners(int n)
			setMaxListeners: vjo.NEEDS_IMPL,
			
			/**
			 * emitter.listeners(event)
			 * <p>Returns an array of listeners for the specified event. This array can 
			 * be manipulated, e.g. to remove listeners.
			 * <pre>
			 * server.on('connection', function (stream) {
			 *   console.log('someone connected!');
			 * });
			 * console.log(util.inspect(server.listeners('connection'));
			 * // [ [Function] ]
			 * </pre>
			 */
			//> public Function[] listeners(String event)
			listeners: vjo.NEEDS_IMPL,
			
			/**
			 * emitter.emit(event, [arg1], [arg2], [...])
			 * <p>Execute each of the listeners in order with the supplied arguments.
			 */
			//> public boolean emit(String event, Object... args)
			emit: vjo.NEEDS_IMPL
		})
	.endType()
})
.protos({
	// vvvvvvvvvvvvvv  Exported Types  vvvvvvvvvvvvvvv
	/**
	 * 
	 */
	//> public type::events.EventEmitter
	EventEmitter: null 
	// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^	
})
.options({
	metatype: true
})
.endType();