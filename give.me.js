/** 
  * @autor: @pazguille
  */
//http://dailyjs.com/2011/10/13/framework/
(function (window, undefined) {

	var giveme = (function() {

		var callback = function (call) {
				// Do something here.
					call();
				},
				createScript = function (url, call, data) {
						var script = document.createElement("script");
						script.type = "text/javascript";

						if (script.readyState) {  // IE sucks!
							script.onreadystatechange = function () {
								if (script.readyState == "loaded" || script.readyState == "complete") {
									script.onreadystatechange = null;
									if (url == data[data.length-1]) {
										callback(call);
									}
								}
							};
						} else {  // Others browsers
							script.onload = function() {
								if (url == data[data.length-1]) {
									console.log("termine!");
									callback(call);
								}
							};
						}

						script.src = url;
						document.body.appendChild(script);	
				},
				
				core = {
					version: "0.1",
					css: function () {},
					js: function (urls, call) {
						var data = urls;
						if (typeof urls === "string") {
								data = [urls]; // force an array
						}

						var i = 0, len = data.length;
						for (i; i < len; i += 1) {
							(function () {
								createScript(data[i], call, data);
							}(i, call));
						}

						return giveme;
					}
				};

		return core;

	}());

	window.giveme = giveme;

}(window));