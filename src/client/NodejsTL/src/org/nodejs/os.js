/**
 * 
 */
//> public
vjo.ctype('org.nodejs.os') 
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
		cpu: {				
			/**
			 * 
			 */
			//> public String
			model: null,	
			
			/**
			 * 
			 */
			//> public Number
			speed: null,	
			
			/**
			 * 
			 */
			//> public 
			times: { 		
				/**
				 * 
				 */
				//> public Number
				user: null,	
				
				/**
				 * 
				 */
				//> public Number
				nice: null,	
				
				/**
				 * 
				 */
				//> public Number
				sys: null,
				
				/**
				 * 
				 */
				//> public Number
				idle: null, 
				
				/**
				 * 
				 */
				//> public Number
				irq: null 	
			}
		}
	}).endType(),
	
	/**
	 * Return the hostname of the operating system
	 */
	//> public final String
	hostname: '',
	
	/**
	 * Returns the operating system name
	 */
	//> public final String
	type: '',
	
	/**
	 * Returns the operating system release
	 */
	//> public final String
	release: '',
	
	/**
	 * Returns the system uptime in seconds
	 */
	//> public Number
	uptime: 0,
	
	/**
	 * Returns an Array containing the 1, 5 and 15 minute load averages
	 */
	//> public Number[]
	loadavg: null,
	
	/**
	 * Returns the total amount of system memory in bytes
	 */
	//> public Number
	totalmem: null,
	
	/**
	 * Returns the amount of free system member in bytes
	 */
	//> public Number
	freemem: null,
	
	/**
	 * Returns an array of objects containing information about each CPU/core 
	 * installed: model, speed (in MHz), and times (an object containing the 
	 * number of CPU ticks spent in: user, nice, sys, idle, and irq).
	 */
	//> public os.data.cpu[]
	cpus: null
})
.protos({

})
.options({
	metatype: true
})
.endType();