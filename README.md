# Give.me.js

give.me.js a loader JavaScript files

## Examples
``` js
give.me("http://chico-ui.com.ar/versions/latest/chico.js", function () {
	console.log("jQuery + Chico loaded!");
});
```

``` js
give.me(["http://chico-ui.com.ar/versions/latest/jquery.js","http://chico-ui.com.ar/versions/latest/chico.js"], function () {
	console.log("jQuery + Chico loaded!");
});
```

``` js
give.me("http://chico-ui.com.ar/versions/latest/jquery.js", function () {
	give.me("http://chico-ui.com.ar/versions/latest/chico.js");
});
```

``` js
give.me("http://chico-ui.com.ar/versions/latest/jquery.js", function () {
	give.me("http://chico-ui.com.ar/versions/0.7.4/chico-0.7.4.js", function () {
		console.log("0.7.4");
	}).me("http://chico-ui.com.ar/versions/0.9.2/chico-0.9.2.js", function () {
		console.log("0.9.2");
	}).me("http://chico-ui.com.ar/versions/0.9.3/chico-0.9.3.js", function () {
		console.log("0.9.3");
	}).me("http://chico-ui.com.ar/versions/0.10/chico-0.10.js", function () {
		console.log("0.10");
	}).me("http://chico-ui.com.ar/versions/0.10.1/chico-0.10.1.js", function () {
		console.log("0.10.1");
	}).me("http://chico-ui.com.ar/versions/0.10.2/chico-0.10.2.js", function () {
		console.log("0.10.2");
	}).me("http://chico-ui.com.ar/versions/0.10.3/chico-0.10.3.js", function () {
		console.log("0.10.3");
	});
});
```

## Contact
- Guillermo Paz (Frontend developer - JavaScript developer | Web standards lover)
- e-mail: [guille87paz@gmail.com](mailto:guille87paz@gmail.com)
- Twitter: [@pazguille](http://twitter.com/pazguille)
- Web: [http://pazguille.me](http://pazguille.me)


## License (The MIT License)
Copyright (c) 2012 [@pazguille](http://twitter.com/pazguille)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.