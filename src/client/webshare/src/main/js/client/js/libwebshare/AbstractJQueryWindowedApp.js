/*
AbstractJQueryWindowedApp

Utiliza JQuery y JQuery UI
http://jqueryui.com/demos/dialog/
http://jqueryui.com/demos/draggable/
*/
define([ 
	"dojo/_base/declare", 
	"dojo/_base/window",
	"dojo/_base/xhr",
	"dojo/_base/lang",
	"dojo/dom-construct", 
	"libwebshare/AbstractApp" ], 
function(declare, win, xhr, lang, domConstruct, AbstractApp) {
	return dojo.declare([AbstractApp], {
		
////// Constants
	
		_UI_FILE: "ui.html",
		
////// Attributes

		_container: undefined,
		_title:"",
		_width:400,
		_height:600,
		_resizable:false,
		_position:0,
		
////// Constructor

		constructor: function(properties) {
			this._width = properties.width;
			this._height = properties.height;
			this._resizable = properties.resizable;
			this._position = properties.position;
			this._title = properties.title;

			this._container = domConstruct.create("div", null, win.body());			

			//Cargamos la interfaz
			if(this._getPath() != null) {
            	xhr.get({
                	url:this._getPath()+this._UI_FILE,
                	load: lang.hitch(this, "_onUIAvailable")
            	});
			}
		},

/////// Methods

		//@Abstract
		_getPath: function() {
			return null;
		},
		
		//@Abstract

		_onUIReady: function() {},
		
		_onUIAvailable: function(data) {
			$(this._container).dialog({
				title: this._title,
				width: this._width,
				height: this._height,
				resizable: this._resizable,
				position: this._position,
				autoOpen: false
			});	
			$(this._container).dialog("widget").draggable(
				"option", { opacity: 0.50, snap: false});

			this._container.innerHTML = data;
		
			this._onUIReady();
	
			this.onAppReady();
		},
		
		//@Abstract
		onAppReady: function() {},
		
		open: function() {
			$(this._container).dialog('open');
		},
		
		close: function() {
			$(this._container).dialog('close');
		},
		
		destroy: function() {
			$(this._container).dialog('destroy');
		}
	});
});
