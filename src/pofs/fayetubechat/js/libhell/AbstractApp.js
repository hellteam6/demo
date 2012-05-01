//AbstractApp
define([ 
	"dojo/_base/declare",
	"dojo/_base/connect",
	"dojo/_base/lang",
], function(declare, connect, lang) {
	return dojo.declare(null, {
////// Attributes
		_channel:"",
		_userId:"",
		_dispatcher:undefined,
////// Constructor
		constructor: function(properties) {
			this._channel = properties.channel;			
			this._dispatcher = properties.dispatcher;
		},
/////// Methods
		start: function() {
			console.info("AbstractApp.start() : waiting for messages from \""+this._channel+this._APP_ID+"\"");
			connect.subscribe(this._channel+this._APP_ID,lang.hitch(this,function(evt) {
				console.info("AbstractApp: Event "+this._events[evt.evtType].name+" received from \""+this._channel+this._APP_ID+"\":");
				this[this._events[evt.evtType].handler](evt);
			}));
		},
		_sendEvent: function(evtType, data) {
	        var netevt = {
                appId: this._APP_ID,
                evtType: evtType,
                data: data 
            };

            this._dispatcher.sendToChannel(this._channel, netevt);
		}
	});
});
