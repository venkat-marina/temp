webpackJsonp(["styles"],{

/***/ "../../../../../src/assets/styles/styles.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../sass-loader/lib/loader.js?{\"sourceMap\":false,\"precision\":8,\"includePaths\":[]}!../../../../../src/assets/styles/styles.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--9-1!../../../node_modules/postcss-loader/index.js??postcss!../../../node_modules/sass-loader/lib/loader.js??ref--9-3!./styles.scss", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js??ref--9-1!../../../node_modules/postcss-loader/index.js??postcss!../../../node_modules/sass-loader/lib/loader.js??ref--9-3!./styles.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../sass-loader/lib/loader.js?{\"sourceMap\":false,\"precision\":8,\"includePaths\":[]}!../../../../../src/assets/styles/styles.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\nhtml, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {\n  border: 0;\n  font: inherit;\n  font-size: 100%;\n  margin: 0;\n  padding: 0;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after {\n  content: '';\n  content: none; }\n\nq:before, q:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\n/* Font Directory Variable Declarations */\n/* Font Face Definitions */\n@font-face {\n  font-family: 'Montserrat_SemiBold';\n  font-style: normal;\n  font-weight: normal;\n  src: url(\"/assets/fonts/Montserrat/eot/Montserrat-SemiBold.eot\");\n  src: url(\"/assets/fonts/Montserrat/eot/Montserrat-SemiBold.eot?#iefix\") format(\"embedded-opentype\"), url(\"/assets/fonts/Montserrat/woff2/Montserrat-SemiBold.woff2\") format(\"woff2\"), url(\"/assets/fonts/Montserrat/woff/Montserrat-SemiBold.woff\") format(\"woff\"), url(\"/assets/fonts/Montserrat/ttf/Montserrat-SemiBold.ttf\") format(\"truetype\"); }\n\n@font-face {\n  font-family: 'OpenSans_Bold';\n  font-style: normal;\n  font-weight: normal;\n  src: url(\"/assets/fonts/Open_Sans/eot/OpenSans-Bold.eot\");\n  src: url(\"/assets/fonts/Open_Sans/eot/OpenSans-Bold.eot?#iefix\") format(\"embedded-opentype\"), url(\"/assets/fonts/Open_Sans/woff2/OpenSans-Bold.woff2\") format(\"woff2\"), url(\"/assets/fonts/Open_Sans/woff/OpenSans-Bold.woff\") format(\"woff\"), url(\"/assets/fonts/Open_Sans/ttf/OpenSans-Bold.ttf\") format(\"truetype\"); }\n\n@font-face {\n  font-family: 'OpenSans_BoldItalic';\n  font-style: normal;\n  font-weight: normal;\n  src: url(\"/assets/fonts/Open_Sans/eot/OpenSans-BoldItalic.eot\");\n  src: url(\"/assets/fonts/Open_Sans/eot/OpenSans-BoldItalic.eot?#iefix\") format(\"embedded-opentype\"), url(\"/assets/fonts/Open_Sans/woff2/OpenSans-BoldItalic.woff2\") format(\"woff2\"), url(\"/assets/fonts/Open_Sans/woff/OpenSans-BoldItalic.woff\") format(\"woff\"), url(\"/assets/fonts/Open_Sans/ttf/OpenSans-BoldItalic.ttf\") format(\"truetype\"); }\n\n@font-face {\n  font-family: 'OpenSans_ExtraBold';\n  font-style: normal;\n  font-weight: normal;\n  src: url(\"/assets/fonts/Open_Sans/eot/OpenSans-ExtraBold.eot\");\n  src: url(\"/assets/fonts/Open_Sans/eot/OpenSans-ExtraBold.eot?#iefix\") format(\"embedded-opentype\"), url(\"/assets/fonts/Open_Sans/woff2/OpenSans-ExtraBold.woff2\") format(\"woff2\"), url(\"/assets/fonts/Open_Sans/woff/OpenSans-ExtraBold.woff\") format(\"woff\"), url(\"/assets/fonts/Open_Sans/ttf/OpenSans-ExtraBold.ttf\") format(\"truetype\"); }\n\n@font-face {\n  font-family: 'OpenSans_ExtraBoldItalic';\n  font-style: normal;\n  font-weight: normal;\n  src: url(\"/assets/fonts/Open_Sans/eot/OpenSans-ExtraBoldItalic.eot\");\n  src: url(\"/assets/fonts/Open_Sans/eot/OpenSans-ExtraBoldItalic.eot?#iefix\") format(\"embedded-opentype\"), url(\"/assets/fonts/Open_Sans/woff2/OpenSans-ExtraBoldItalic.woff2\") format(\"woff2\"), url(\"/assets/fonts/Open_Sans/woff/OpenSans-ExtraBoldItalic.woff\") format(\"woff\"), url(\"/assets/fonts/Open_Sans/ttf/OpenSans-ExtraBoldItalic.ttf\") format(\"truetype\"); }\n\n@font-face {\n  font-family: 'OpenSans_Light';\n  font-style: normal;\n  font-weight: normal;\n  src: url(\"/assets/fonts/Open_Sans/eot/OpenSans-Light.eot\");\n  src: url(\"/assets/fonts/Open_Sans/eot/OpenSans-Light.eot?#iefix\") format(\"embedded-opentype\"), url(\"/assets/fonts/Open_Sans/woff2/OpenSans-Light.woff2\") format(\"woff2\"), url(\"/assets/fonts/Open_Sans/woff/OpenSans-Light.woff\") format(\"woff\"), url(\"/assets/fonts/Open_Sans/ttf/OpenSans-Light.ttf\") format(\"truetype\"); }\n\n@font-face {\n  font-family: 'OpenSans_Italic';\n  font-style: normal;\n  font-weight: normal;\n  src: url(\"/assets/fonts/Open_Sans/eot/OpenSans-Italic.eot\");\n  src: url(\"/assets/fonts/Open_Sans/eot/OpenSans-Italic.eot?#iefix\") format(\"embedded-opentype\"), url(\"/assets/fonts/Open_Sans/woff2/OpenSans-Italic.woff2\") format(\"woff2\"), url(\"/assets/fonts/Open_Sans/woff/OpenSans-Italic.woff\") format(\"woff\"), url(\"/assets/fonts/Open_Sans/ttf/OpenSans-Italic.ttf\") format(\"truetype\"); }\n\n@font-face {\n  font-family: 'OpenSans_Light';\n  font-style: normal;\n  font-weight: normal;\n  src: url(\"/assets/fonts/Open_Sans/eot/OpenSans-Light.eot\");\n  src: url(\"/assets/fonts/Open_Sans/eot/OpenSans-Light.eot?#iefix\") format(\"embedded-opentype\"), url(\"/assets/fonts/Open_Sans/woff2/OpenSans-Light.woff2\") format(\"woff2\"), url(\"/assets/fonts/Open_Sans/woff/OpenSans-Light.woff\") format(\"woff\"), url(\"/assets/fonts/Open_Sans/ttf/OpenSans-Light.ttf\") format(\"truetype\"); }\n\n@font-face {\n  font-family: 'OpenSans_LightItalic';\n  font-style: normal;\n  font-weight: normal;\n  src: url(\"/assets/fonts/Open_Sans/eot/OpenSans-LightItalic.eot\");\n  src: url(\"/assets/fonts/Open_Sans/eot/OpenSans-LightItalic.eot?#iefix\") format(\"embedded-opentype\"), url(\"/assets/fonts/Open_Sans/woff2/OpenSans-LightItalic.woff2\") format(\"woff2\"), url(\"/assets/fonts/Open_Sans/woff/OpenSans-LightItalic.woff\") format(\"woff\"), url(\"/assets/fonts/Open_Sans/ttf/OpenSans-LightItalic.ttf\") format(\"truetype\"); }\n\n@font-face {\n  font-family: 'OpenSans_Regular';\n  font-style: normal;\n  font-weight: normal;\n  src: url(\"/assets/fonts/Open_Sans/eot/OpenSans-Regular.eot\");\n  src: url(\"/assets/fonts/Open_Sans/eot/OpenSans-Regular.eot?#iefix\") format(\"embedded-opentype\"), url(\"/assets/fonts/Open_Sans/woff2/OpenSans-Regular.woff2\") format(\"woff2\"), url(\"/assets/fonts/Open_Sans/woff/OpenSans-Regular.woff\") format(\"woff\"), url(\"/assets/fonts/Open_Sans/ttf/OpenSans-Regular.ttf\") format(\"truetype\"); }\n\n@font-face {\n  font-family: 'OpenSans_SemiBold';\n  font-style: normal;\n  font-weight: normal;\n  src: url(\"/assets/fonts/Open_Sans/eot/OpenSans-SemiBold.eot\");\n  src: url(\"/assets/fonts/Open_Sans/eot/OpenSans-SemiBold.eot?#iefix\") format(\"embedded-opentype\"), url(\"/assets/fonts/Open_Sans/woff2/OpenSans-SemiBold.woff2\") format(\"woff2\"), url(\"/assets/fonts/Open_Sans/woff/OpenSans-SemiBold.woff\") format(\"woff\"), url(\"/assets/fonts/Open_Sans/ttf/OpenSans-SemiBold.ttf\") format(\"truetype\"); }\n\n@font-face {\n  font-family: 'OpenSans_SemiBoldItalic';\n  font-style: normal;\n  font-weight: normal;\n  src: url(\"/assets/fonts/Open_Sans/eot/OpenSans-SemiBoldItalic.eot\");\n  src: url(\"/assets/fonts/Open_Sans/eot/OpenSans-SemiBoldItalic.eot?#iefix\") format(\"embedded-opentype\"), url(\"/assets/fonts/Open_Sans/woff2/OpenSans-SemiBoldItalic.woff2\") format(\"woff2\"), url(\"/assets/fonts/Open_Sans/woff/OpenSans-SemiBoldItalic.woff\") format(\"woff\"), url(\"/assets/fonts/Open_Sans/ttf/OpenSans-SemiBoldItalic.ttf\") format(\"truetype\"); }\n\n/* Font Style Variable Definitions */\n/* Style Definitions for Font Display */\n.opensans-bd {\n  font-family: OpenSans_Bold, arial, sans-serif; }\n\n.opensans-bdit {\n  font-family: OpenSans_BoldItalic, arial, sans-serif; }\n\n.opensans-xbd {\n  font-family: OpenSans_ExtraBold, arial, sans-serif; }\n\n.opensans-xbdit {\n  font-family: OpenSans_ExtraBoldItalic, arial, sans-serif; }\n\n.opensans-it {\n  font-family: OpenSans_Italic, arial, sans-serif; }\n\n.opensans-lt {\n  font-family: OpenSans_Light, arial, sans-serif; }\n\n.opensans-ltit {\n  font-family: OpenSans_LightItalic, arial, sans-serif; }\n\n.opensans-rg {\n  font-family: OpenSans_Regular, arial, sans-serif; }\n\n.opensans-sbd {\n  font-family: OpenSans_SemiBold, arial, sans-serif; }\n\n.opensans-sbdit {\n  font-family: OpenSans_SemiBoldItalic, arial, sans-serif; }\n\n.platinum {\n  letter-spacing: 5px;\n  opacity: 0.8;\n  text-transform: uppercase; }\n\n.fs1 {\n  font-size: 1em; }\n\n.fs2 {\n  font-size: 0.75em; }\n\n.lt {\n  font-weight: 300; }\n\n.rg {\n  font-weight: 400; }\n\n.sbd {\n  font-weight: 500; }\n\n.bd {\n  font-weight: 600; }\n\n.opq {\n  opacity: 0.65; }\n\nhtml, body {\n  background-color: #021829;\n  font-family: OpenSans_Light, arial, sans-serif;\n  font-size: 16px;\n  color: #FFFFFF;\n  height: 100%;\n  position: relative; }\n\nh1 {\n  font-family: OpenSans_Light, arial, sans-serif;\n  font-size: 1.5em;\n  opacity: 0.9;\n  padding-top: 40px;\n  padding-bottom: 21px; }\n\n.container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n.divider {\n  border-color: transparent;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1); }\n\n.btn {\n  background-color: #3E505A;\n  border: solid 1px transparent;\n  border-radius: 60px;\n  color: #FFFFFF;\n  cursor: pointer;\n  font-family: OpenSans_Regular, arial, sans-serif;\n  font-size: 14px;\n  font-weight: 300;\n  height: 30px;\n  /*This will need to be adjusted with a media query when in mobile views so that the button container can wrap the text (using min-height)*/\n  line-height: 28px;\n  padding: 0 25px;\n  position: relative;\n  text-align: center;\n  text-decoration: none;\n  transition: color 0ms ease-out;\n  z-index: 0; }\n  .btn.ucase {\n    letter-spacing: 2px;\n    text-transform: uppercase; }\n  .btn.flex-in-heading {\n    bottom: 3px; }\n  .btn.btn-small {\n    font-size: 12px;\n    letter-spacing: 0.02em;\n    padding: 5px 30px; }\n    .btn.btn-small:hover:after {\n      -webkit-transform: scaleX(1.07);\n              transform: scaleX(1.07); }\n  .btn.btn-outlined {\n    background-color: rgba(255, 255, 255, 0.05);\n    border: 1px solid rgba(255, 255, 255, 0.5);\n    font-size: 10px;\n    height: 28px;\n    letter-spacing: 0.1em;\n    line-height: 26px; }\n    .btn.btn-outlined:hover {\n      background-color: rgba(255, 255, 255, 0.1); }\n    .btn.btn-outlined:active {\n      background-color: rgba(255, 255, 255, 0.2); }\n  .btn.btn-right {\n    float: right; }\n  .btn:hover:after {\n    -webkit-transform: scaleX(1.1);\n            transform: scaleX(1.1); }\n  .btn:active, .btn:focus {\n    outline: none; }\n  .btn.disabled, .btn:disabled {\n    cursor: default; }\n    .btn.disabled:hover:after, .btn:disabled:hover:after {\n      -webkit-transform: scaleX(1);\n              transform: scaleX(1); }\n\n*, *:before, *:after {\n  box-sizing: border-box; }\n", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../../../../style-loader/addStyles.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/assets/styles/styles.scss");


/***/ })

},[2]);
//# sourceMappingURL=styles.bundle.js.map