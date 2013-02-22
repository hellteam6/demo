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
		_APP_ID:50003,
		_events: {
			EVT_NAV : 1, 1 : { name : "EVT_NAV", handler: "_onNav" }
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
		
			$("#btnNav").on("click",lang.hitch(this,"_btnNav_click"));
			$("#btnNavLimpiar").on("click",lang.hitch(this,"_btnNavLimpiar_click"));
			$("#txtNavInput").on("keypress",lang.hitch(this,"_txtNavInput_keypress"));
		},
/////// Events
		_txtNavInput_keypress: function(evt) {
			if(evt.keyCode == keys.ENTER) {
				this._sendEvent(this._events.EVT_NAV,$("#txtNavInput")[0].value);
			} 
		},
		_btnNav_click: function(evt) {
			this._sendEvent(this._events.EVT_NAV,$("#txtNavInput")[0].value);
		},
		_btnNavLimpiar_click: function(evt) {
			$("#txtNavInput")[0].value = "";
		},
		_onNav: function(evt) {
			$("#iframeBrowser")[0].src = evt.data;
		}
	});
});
