/** 
  * @autor: @pazguille
  */
//http://dailyjs.com/2011/10/13/framework/
(function (window, undefined) {

	var giveme = (function() {

		if (!document.head) {
			document.head = document.getElementsByTagName("head")[0];
		}
		
		var createScript = function (url, fn, src) {
					var script = document.createElement("script");
					script.type = "text/javascript";

					if (script.readyState) {  // IE sucks!
						script.onreadystatechange = function () {
							if (script.readyState == "loaded" || script.readyState == "complete") {
								script.onreadystatechange = null;
								if (url == src[src.length-1]) {
									fn();
								}
							}
						};
					} else {  // Others browsers
						script.onload = function() {
							if (url == src[src.length-1]) {
								console.log("termine!");
								fn();
							}
						};
					}

					script.src = url;
					document.body.appendChild(script);	
			},
			
			core = {
				version: "0.1",
				css: function () {},
				js: function (urls, fn) {
					var src = urls;
					if (typeof urls === "string") {
							src = [urls]; // force an array
					}

					var i = 0, len = src.length;
					for (i; i < len; i += 1) {
						(function (i) {
							createScript(src[i], fn, src);
						}(i, fn));
					}

					return this;
				}
			};

		return core;

	}());

	window.giveme = giveme;

}(window));