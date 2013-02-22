/**
 * These are the type extensions used by Mozilla/V8 for Node.js
 * https://github.com/joyent/node/wiki/ECMA-5-Mozilla-Features-Implemented-in-V8
 */
var typeExtensions = {
	'Array':    'org.nodejs.ext.ArrayExt',
	'Date':     'org.nodejs.ext.DateExt',
	'Function': 'org.nodejs.ext.FunctionExt', 
	'Object':   'org.nodejs.ext.ObjectExt',
	'String':   'org.nodejs.ext.StringExt'
}

var functionArgMappings = {
    // child_process.ChildProcess
    'org.nodejs.child_process.ChildProcess:on' : {
	   'exit' : 'org.nodejs.child_process.event.exit'  
	},
    'org.nodejs.child_process.ChildProcess:once' : {
		  'exit' : 'org.nodejs.child_process.event.exit'  
	},
    'org.nodejs.child_process.ChildProcess:addListener' : {
		  'exit' : 'org.nodejs.child_process.event.exit'  
	},
		
	// fs.ReadableStream
	'org.nodejs.fs.ReadableStream:on' : {
		'data'  : 'org.nodejs.fs.ReadableStream.event.data',
		'error' : 'org.nodejs.fs.ReadableStream.event.error',
		'fd'    : 'org.nodejs.fs.ReadableStream.event.fd'
	},
	'org.nodejs.fs.ReadableStream:once' : {
		'data'  : 'org.nodejs.fs.ReadableStream.event.data',
		'error' : 'org.nodejs.fs.ReadableStream.event.error',
		'fd'    : 'org.nodejs.fs.ReadableStream.event.fd'
	},
	'org.nodejs.fs.ReadableStream:addListener' : {
		'data'  : 'org.nodejs.fs.ReadableStream.event.data',
		'error' : 'org.nodejs.fs.ReadableStream.event.error',
		'fd'    : 'org.nodejs.fs.ReadableStream.event.fd'
	},
	
	// fs.WritableStream
	'org.nodejs.fs.WritableStream:on' : {
		'error' : 'org.nodejs.fs.WritableStream.event.error',
		'pipe'  : 'org.nodejs.fs.WritableStream.event.pipe',
		'open'  : 'org.nodejs.fs.WritableStream.event.open'
	},
	'org.nodejs.fs.WritableStream:once' : {
		'error' : 'org.nodejs.fs.WritableStream.event.error',
		'pipe'  : 'org.nodejs.fs.WritableStream.event.pipe',
		'open'  : 'org.nodejs.fs.WritableStream.event.open'
	},	
	'org.nodejs.fs.WritableStream:addListener' : {
		'error' : 'org.nodejs.fs.WritableStream.event.error',
		'pipe'  : 'org.nodejs.fs.WritableStream.event.pipe',
		'open'  : 'org.nodejs.fs.WritableStream.event.open'
	},
	
	// tls.Server
	'org.nodejs.tls.Server:on' : {
		'secureConnection' : 'org.nodejs.tls.Server.event.secureConnection'
	},
	'org.nodejs.tls.Server:once' : {
		'secureConnection' : 'org.nodejs.tls.Server.event.secureConnection'
	},
	'org.nodejs.tls.Server:addListener' : {
		'secureConnection' : 'org.nodejs.tls.Server.event.secureConnection'
	},
	
	// net.Server
	'org.nodejs.net.Server:on' : {
		'connection' : 'org.nodejs.net.Server.event.connection'
	},	
	'org.nodejs.net.Server:once' : {
		'connection' : 'org.nodejs.net.Server.event.connection'
	},		
	'org.nodejs.net.Server:addListener' : {
		'connection' : 'org.nodejs.net.Server.event.connection'
	},		
	
	// net.Socket
	'org.nodejs.net.Socket:on' : {
		'data'  : 'org.nodejs.net.Socket.event.data',
		'error' : 'org.nodejs.net.Socket.event.error',
		'close' : 'org.nodejs.net.Socket.event.close'
	},
	'org.nodejs.net.Socket:once' : {
		'data'  : 'org.nodejs.net.Socket.event.data',
		'error' : 'org.nodejs.net.Socket.event.error',
		'close' : 'org.nodejs.net.Socket.event.close'
	},
	'org.nodejs.net.Socket:addListener' : {
		'data'  : 'org.nodejs.net.Socket.event.data',
		'error' : 'org.nodejs.net.Socket.event.error',
		'close' : 'org.nodejs.net.Socket.event.close'
	},
	
	// dgram.Socket
	'org.nodejs.dgram.Socket:on' : {
		'message' : 'org.nodejs.dgram.Socket.event.message'
	},
	'org.nodejs.dgram.Socket:once' : {
		'message' : 'org.nodejs.dgram.Socket.event.message'
	},
	'org.nodejs.dgram.Socket:addListener' : {
		'message' : 'org.nodejs.dgram.Socket.event.message'
	},

	// http.Server
	'org.nodejs.http.Server:on' : {
		'request' :       'org.nodejs.http.Server.event.request',
		'connection' :    'org.nodejs.http.Server.event.connection',
		'close' :         'org.nodejs.http.Server.event.close',
		'checkContinue' : 'org.nodejs.http.Server.event.checkContinue',
		'upgrade' :       'org.nodejs.http.Server.event.upgrade',
		'clientError' :   'org.nodejs.http.Server.event.clientError'
	},
	'org.nodejs.http.Server:once' : {
		'request' :       'org.nodejs.http.Server.event.request',
		'connection' :    'org.nodejs.http.Server.event.connection',
		'close' :         'org.nodejs.http.Server.event.close',
		'checkContinue' : 'org.nodejs.http.Server.event.checkContinue',
		'upgrade' :       'org.nodejs.http.Server.event.upgrade',
		'clientError' :   'org.nodejs.http.Server.event.clientError'
	},
	'org.nodejs.http.Server:addListener' : {
		'request' :       'org.nodejs.http.Server.event.request',
		'connection' :    'org.nodejs.http.Server.event.connection',
		'close' :         'org.nodejs.http.Server.event.close',
		'checkContinue' : 'org.nodejs.http.Server.event.checkContinue',
		'upgrade' :       'org.nodejs.http.Server.event.upgrade',
		'clientError' :   'org.nodejs.http.Server.event.clientError'
	},
	
	// http.ServerRequest
	'org.nodejs.http.ServerRequest:on' : {
		'data' : 'org.nodejs.http.ServerRequest.event.data'
	},
	
	// http.ServerResponse
// no mappings -	'org.nodejs.http.ServerResponse' : {} 

	// http.Agent
	'org.nodejs.http.Agent:on' : {
		'upgrade'     : 'org.nodejs.http.Agent.event.upgrade',
		'clientError' : 'org.nodejs.http.Agent.event.clientError'
	},
	'org.nodejs.http.Agent:once' : {
		'upgrade'     : 'org.nodejs.http.Agent.event.upgrade',
		'clientError' : 'org.nodejs.http.Agent.event.clientError'
	},
	'org.nodejs.http.Agent:addListener' : {
		'upgrade'     : 'org.nodejs.http.Agent.event.upgrade',
		'clientError' : 'org.nodejs.http.Agent.event.clientError'
	},
	
	// http:ClientRequest
	'org.nodejs.http.ClientRequest:on' : {
		'response' : 'org.nodejs.http.ClientRequest.event.response'
	},
	'org.nodejs.http.ClientRequest:once' : {
		'response' : 'org.nodejs.http.ClientRequest.event.response'
	},
	'org.nodejs.http.ClientRequest:addListener' : {
		'response' : 'org.nodejs.http.ClientRequest.event.response'
	},

	// http:ClientResponse
	'org.nodejs.http.ClientResponse:on' : {
		'data' : 'org.nodejs.http.ClientResponse.event.data'
	},
	'org.nodejs.http.ClientResponse:once' : {
		'data' : 'org.nodejs.http.ClientResponse.event.data'
	},
	'org.nodejs.http.ClientResponse:addListener' : {
		'data' : 'org.nodejs.http.ClientResponse.event.data'
	},
	
	// http:Client
	'org.nodejs.http.Client:on' : {
		'upgrade' : 'org.nodejs.http.Client.event.upgrade'
	},
	'org.nodejs.http.Client:once' : {
		'upgrade' : 'org.nodejs.http.Client.event.upgrade'
	},
	'org.nodejs.http.Client:addListener' : {
		'upgrade' : 'org.nodejs.http.Client.event.upgrade'
	}
}

//
// var net = require('net') ; // Should resolve to org.nodejs.net
//
var factoryFunctionMappings = {
	'org.nodejs.node.require::_invoke_' : {
		'_debugger' :'org.nodejs._debugger',
		'_linklist' :'org.nodejs._linklist',
		'assert' :   'org.nodejs.assert',	
		'buffer' :   'org.nodejs.buffer',
		'child_process' : 'org.nodejs.child_process',
		'console' :  'org.nodejs.console',
		'crypto' :   'org.nodejs.crypto',
		'dgram' :    'org.nodejs.dgram',
		'dns' :      'org.nodejs.dns',
		'events' :   'org.nodejs.events',
		'freelist' : 'org.nodejs.freelist',
		'fs' :       'org.nodejs.fs',
		'http' :     'org.nodejs.http',
		'https' :    'org.nodejs.https',
		'net' :      'org.nodejs.net',
		'node' :     'org.nodejs.node',
		'os' :       'org.nodejs.os',
		'path' :     'org.nodejs.path',
		'querystring' :    'org.nodejs.querystring',
		'readline' :       'org.nodejs.readline',
		'repl' :           'org.nodejs.repl',
		'string_decoder' : 'org.nodejs.string_decoder',
		'sys' :       'org.nodejs.sys',
		'tls' :       'org.nodejs.tls',
		'tty' :       'org.nodejs.tty',
		'tty_posix' : 'org.nodejs.tty_posix',
		'tty_win32' : 'org.nodejs.tty_win32',
		'url' :       'org.nodejs.url',
		'util' :      'org.nodejs.util',
		'vm' :        'org.nodejs.vm'
    }
}