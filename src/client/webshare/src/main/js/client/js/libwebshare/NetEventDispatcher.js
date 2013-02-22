//NetEventDispatcher
define([ 
	"dojo/_base/declare", 
	"dojo/_base/connect",
	"faye/client"
], function(declare, connect, client) {
	return dojo.declare(null, {
////// Attributes
	
		_url:"",
		_identity:"",
		_client:undefined,
		_subscriptions:undefined,
		
////// Constructor

		constructor: function(url) {
			this._url = url;	
			this._subscriptions = {};
		},
		
/////// Methods
		
		connect: function(identity) {
			console.info("NetEventDispatcher.connect : connecting to \""+this._url+"\"");
			this._identity = identity;
			this._client = new Faye.Client(this._url);	
		},
		
		joinChannel: function(channel, onSuccess, onError) {
			var subscription = this._client.subscribe(channel, function(evt) {
				console.info('NetEventDispatcher: Event received from server, channel: "'+channel+'", publishing to topic "'+channel+evt.appId+'":');
				console.log(evt);
				connect.publish(channel+evt.appId,evt);
			});
			subscription.callback(onSuccess);
			subscription.errback(onError);
			this._subscriptions[channel] = subscription;			
		},
		
		sendToChannel: function(channel, evt) {
			console.info('NetEventDispatcher: Sending event to server, channel: "'+channel+'"');
			console.log(evt);
			evt.identity = this._identity;
			this._client.publish(channel, evt);
		},
		
		exitChannel: function(channel) {
			console.info('NetEventDispatcher.exitChannel(): exiting channel: "'+channel+'"');
			this._subscriptions[channel].cancel();
		},
		
		disconnect: function() {
			console.info('NetEventDispatcher.disconnect(): disconnecting from server.');
			this._client.disconnect();
		},
		
		getIdentity: function() {
			return this._identity;	
		}
	});
});
