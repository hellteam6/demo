/*
AppChat 

Aplicacion de chat sencilla 
*/
define([ 
	"require",
	"dojo/_base/declare", 
	"dojo/_base/lang",
	"dojo/on",
	"dojo/keys",
	"dojo/query",
	"libwebshare/AbstractJQueryWindowedApp" ], 
function(require, declare, lang, on, keys, $, AbstractJQueryWindowedApp) {
	return dojo.declare([AbstractJQueryWindowedApp], {
////// Constants
		_APP_ID:50001,
		_events: {
			EVT_SEND : 1, 1 : { name : "EVT_SEND", handler: "_onSend" }
		},
////// Attributes
////// Constructor
		constructor: function(properties) {

		},
/////// Methods
		// @Override
		_getPath: function() {
			return require.toUrl('./');
		},
		// @Override
		_onUIReady: function() {
			this.inherited(arguments);
		
			//TODO: Esto podria ser automatico..
			$("#btnChatSend").on("click",lang.hitch(this,"_btnChatSend_click"));
			$("#txtChatInput").on("keypress",lang.hitch(this,"_txtChatInput_keypress"));
			$("#btnLimpiar").on("click",lang.hitch(this,"_btnLimpiar_click"));
			//...
		},
		_sendMessage: function() {
			var netevt = {
				appId: this._APP_ID, 
				evtType: this._events.EVT_SEND,
				data: $("#txtChatInput")[0].value
			};

			$("#txtChatInput").value = "";

			console.info('AppChat: Sending event '+this._events[this._events.EVT_SEND].name+' to dispatcher');

			this._dispatcher.sendToChannel(this._channel, netevt);
		},	
/////// Events
		_txtChatInput_keypress: function(evt) {
			if(evt.keyCode == keys.ENTER) {
				this._sendMessage();
				$("#txtChatInput")[0].value = "";
			} 
		},
		_btnChatSend_click: function(evt) {
			this._sendMessage();
			$("#txtChatInput")[0].value = "";
		},
		_btnLimpiar_click: function(evt) {
			$("#txtaChat")[0].innerHTML = "";
		},
		_onSend: function(evt) {
			console.info('AppChat: Event '+this._events[evt.evtType].name+' received from dispatcher');
			$("#txtaChat")[0].innerHTML = $("#txtaChat")[0].innerHTML + "&lt;"+evt.identity+"&gt; " + evt.data + '\n';
			$("#txtaChat")[0].scrollTop = 9999;	
		}
	});
});
