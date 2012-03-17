/** 
* @autor: @pazguille
* @version: v0.3.1
*/
(function (exports) {
	"use strict";

	var give = (function () {

		var head = document.head || document.getElementsByTagName("head")[0],
			isIE = navigator.appName.indexOf('Microsoft') === 0,
			index = 0,
			getFile,
			next,
			createTagScript;

		// Creates tag script
		createTagScript = function (url) {
			var tag = document.createElement("script");
			tag.src = url;
			tag.async = "async";

			if (isIE) {
				tag.defer = "defer";
			}

			return tag;
		};

		// u = url | s = sources
		next = function (u, s, fn) {

			// Please, give me the next source
			if (u !== s[s.length - 1]) {
				index += 1;
				getFile(s[index], s, fn);
				return;
			}

			// Callback
			if (fn) { fn(); }
		};

		// 
		getFile = function (url, sources, fn) {
			var script = createTagScript(url);

			if (isIE && script.readyState) {  // IE sucks!
				script.onreadystatechange = function () {
					if (script.readyState === "loaded" || script.readyState === "complete") {
						script.onreadystatechange = null;
						next(url, sources, fn);
					}
				};

			} else {  // Modern browsers
				script.onload = function () { next(url, sources, fn); };
			}

			head.appendChild(script);
		};

		// Core
		return {
			"me": function (src, fn) {

				// force an array
				if (typeof src === "string") {
					src = [src];
				}

				(function (src, fn) {
					getFile(src[index], src, fn);
				}(src, fn));

				// arguments.callee or this are the function itself = me(). Strict Mode doesn't support it :(
				return this;
			}
		};

	}());

	exports.give = give;

}(window));