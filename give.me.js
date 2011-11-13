/** 
  * @autor: @pazguille
  */
//http://dailyjs.com/2011/10/13/framework/
(function (window, undefined) {

	var giveme = (function() {

		if (!document.head) {
			document.head = document.getElementsByTagName("head")[0];
		}

		var sources = [],
		
			index = 0,

			static = {
				"js": {
					"tag": "script",
					"type": "text/javascript",
					"src": "src"
				},
				"css": {
					"tag": "link",
					"type": "text/css",
					"src": "href",
					"rel": "stylesheet"
				}
			},

			configSource = function (src, sources, fn, type) {
				if (typeof src === "string") {
					src = [src]; // force an array
				}
				sources = src;
				(function () {
					getSource(src[index], sources, fn, type);
				}(sources, fn));
			},
		
			getSource = function (src, sources, fn, type) {
				var tag = document.createElement(static[type].tag);
				tag.type = static[type].type;
				if (type === "css") {
					tag.rel = static[type].rel;
				}

				if (tag.readyState) {  // IE sucks!
					tag.onreadystatechange = function () {
						if (tag.readyState == "loaded" || tag.readyState == "complete") {
							tag.onreadystatechange = null;
							if (src == sources[sources.length-1]) {
								fn();
							} else {
								index += 1;
								getSource(sources[index], sources, fn, type);
							}

						}
					};

				} else {  // Others browsers
					tag.onload = function() {
						if (src == sources[sources.length-1]) {
							fn();
						} else {
							index += 1;
							getSource(sources[index], sources, fn, type);
						}
					};
				}

				tag[static[type]["src"]] = src;
				document.head.appendChild(tag);
			},
		
			core = {
				version: "0.1",
				js: function (src, fn) {
					configSource(src, sources, fn, "js")
					return this;
				},
				css: function (src, fn) {
					configSource(src, sources, fn, "css")
					return this;
				}
			};

		return core;

	}());

	window.giveme = giveme;

}(window));