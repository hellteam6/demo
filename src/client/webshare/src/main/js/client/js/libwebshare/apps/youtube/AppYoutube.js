/*
AppYoutube

Aplicacion que sirve para compartir colaborativamente una ventana de youtube

Context dependent require:
http://livedocs.dojotoolkit.org/loader/amd#context-sensitive-require
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
		_APP_ID:50002,
		_events: { 
			EVT_LOAD : 1, 1 : { name : "EVT_LOAD", handler: "_onLoad" },
			EVT_PLAY : 2, 2 : { name : "EVT_PLAY", handler: "_onPlay" },
			EVT_PAUSE : 3, 3 : { name : "EVT_PAUSE", handler: "_onPause" },
			EVT_STOP : 4, 4 : { name : "EVT_STOP", handler: "_onStop" },
			EVT_MUTE : 5, 5 : { name : "EVT_MUTE", handler: "_onMute" },
			EVT_UNMUTE : 6, 6 : { name : "EVT_UNMUTE", handler: "_onUnmute" },
			EVT_SEEK : 7, 7 : { name : "EVT_SEEK", handler: "_onSeek" }
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

			var params = { allowScriptAccess: "always" };
        	var atts = { id: "myytplayer" };
        	swfobject.embedSWF("http://www.youtube.com/v/VhHdT9zlZxc?enablejsapi=1&playerapiid=ytplayer&version=3",
            	"ytapiplayer", "560", "315", "8", null, null, params, atts);  

			$("#txtVideoId").on("keypress",lang.hitch(this,"_txtVideoId_keypress"));
			$("#btnLoad").on("click",lang.hitch(this,"_btnLoad_click"));
			$("#btnPlay").on("click",lang.hitch(this,"_btnPlay_click"));
			$("#btnPause").on("click",lang.hitch(this,"_btnPause_click"));
			$("#btnStop").on("click",lang.hitch(this,"_btnStop_click"));
			$("#btnMute").on("click",lang.hitch(this,"_btnMute_click"));
			$("#btnUnmute").on("click",lang.hitch(this,"_btnUnmute_click"));
			$("#txtSeek").on("keypress",lang.hitch(this,"_txtSeek_keypress"));
			$("#btnSeek").on("click",lang.hitch(this,"_btnSeek_click"));

		},
/////// Events
		_txtVideoId_keypress : function(evt) {
			if(evt.keyCode == keys.ENTER) {
				this._sendEvent(this._events.EVT_LOAD, $("#txtVideoId")[0].value);
			}	
		},
		_btnLoad_click : function(evt) {
			this._sendEvent(this._events.EVT_LOAD, $("#txtVideoId")[0].value);
		},
		_btnPlay_click : function(evt) {
			this._sendEvent(this._events.EVT_PLAY, null);
		},
		_btnPause_click : function(evt) {
			this._sendEvent(this._events.EVT_PAUSE, null);
		},
		_btnStop_click : function(evt) {
			this._sendEvent(this._events.EVT_STOP, null);
		},
		_btnMute_click : function(evt) {
			this._sendEvent(this._events.EVT_MUTE, null);
		},
		_btnUnmute_click : function(evt) {
			this._sendEvent(this._events.EVT_UNMUTE, null);
		},
		_txtSeek_keypress : function(evt) {
			if(evt.keyCode == keys.ENTER) {
				this._sendEvent(this._events.EVT_SEEK, $("#txtSeek")[0].value);
			}
		},
		_btnSeek_click : function(evt) {
			this._sendEvent(this._events.EVT_SEEK, $("#txtSeek")[0].value);
		},
		_onLoad: function(evt) {
			$("#myytplayer")[0].loadVideoById(evt.data);	
		},
		_onPlay: function(evt) {
			$("#myytplayer")[0].playVideo();	
		},
		_onPause: function(evt) {
			$("#myytplayer")[0].pauseVideo();	
		},
		_onStop: function(evt) {
			$("#myytplayer")[0].stopVideo();	
		},
		_onMute: function(evt) {
			$("#myytplayer")[0].mute();	
		},
		_onUnmute: function(evt) {
			$("#myytplayer")[0].unMute();	
		},
		_onSeek: function(evt) {
			$("#myytplayer")[0].seekTo(evt.data, true);
		}	
	});
});
