/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__notice_block_js__ = __webpack_require__(/*! ./notice/block.js */ 1);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9ub3RpY2UvYmxvY2suanMnO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2Nrcy5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!*****************************!*\
  !*** ./src/notice/block.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ./style.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\n/**\n * BLOCK: mightyblocks\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n\n//  Import CSS.\n\n\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar _wp$blocks = wp.blocks,\n    registerBlockType = _wp$blocks.registerBlockType,\n    RichText = _wp$blocks.RichText,\n    InspectorControls = _wp$blocks.InspectorControls,\n    ColorPalette = _wp$blocks.ColorPalette; // Import registerBlockType() from wp.blocks\n\nvar _wp$components = wp.components,\n    ToggleControl = _wp$components.ToggleControl,\n    PanelColor = _wp$components.PanelColor,\n    RangeControl = _wp$components.RangeControl,\n    SelectControl = _wp$components.SelectControl;\n/**\n * Register: aa Gutenberg Block.\n *\n * Registers a new block provided a unique name and an object defining its\n * behavior. Once registered, the block is made editor as an option to any\n * editor interface where blocks are implemented.\n *\n * @link https://wordpress.org/gutenberg/handbook/block-api/\n * @param  {string}   name     Block name.\n * @param  {Object}   settings Block settings.\n * @return {?WPBlock}          The block, if it has been successfully\n *                             registered; otherwise `undefined`.\n */\n\nregisterBlockType('mightyblocks/block-notice', {\n\t// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.\n\ttitle: __('Notice'), // Block title.\n\ticon: 'shield', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.\n\tcategory: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.\n\tkeywords: [__('mightyblocks'), __('notice'), __('alert')],\n\n\tattributes: {\n\t\tcontent: {\n\t\t\ttype: 'array',\n\t\t\tsource: 'children',\n\t\t\tselector: 'p'\n\t\t},\n\t\ttype: {\n\t\t\ttype: 'string',\n\t\t\tdefault: 'general'\n\t\t},\n\t\tfontSize: {\n\t\t\ttype: 'string',\n\t\t\tdefault: '14'\n\t\t}\n\t},\n\n\tedit: function edit(_ref) {\n\t\tvar focus = _ref.focus,\n\t\t    attributes = _ref.attributes,\n\t\t    className = _ref.className,\n\t\t    setAttributes = _ref.setAttributes;\n\t\tvar content = attributes.content,\n\t\t    isSelected = attributes.isSelected,\n\t\t    type = attributes.type,\n\t\t    fontSize = attributes.fontSize;\n\n\n\t\tfunction onChangeContent(newContent) {\n\t\t\tsetAttributes({ content: newContent });\n\t\t}\n\n\t\tvar inspectorControls = focus && wp.element.createElement(\n\t\t\tInspectorControls,\n\t\t\tnull,\n\t\t\twp.element.createElement('br', null),\n\t\t\twp.element.createElement(SelectControl, {\n\t\t\t\tlabel: __('Preset Colors'),\n\t\t\t\tdescription: __('Preset colors. This will reset the styling options below. '),\n\t\t\t\toptions: [{\n\t\t\t\t\tvalue: 'general',\n\t\t\t\t\tlabel: __('General')\n\t\t\t\t}, {\n\t\t\t\t\tvalue: 'error',\n\t\t\t\t\tlabel: __('Error/Alert')\n\t\t\t\t}, {\n\t\t\t\t\tvalue: 'success',\n\t\t\t\t\tlabel: __('Success')\n\t\t\t\t}, {\n\t\t\t\t\tvalue: 'notice',\n\t\t\t\t\tlabel: __('Notice')\n\t\t\t\t}],\n\t\t\t\tvalue: type,\n\t\t\t\tonChange: function onChange(value) {\n\t\t\t\t\treturn setAttributes({ type: value });\n\t\t\t\t}\n\t\t\t}),\n\t\t\twp.element.createElement(RangeControl, {\n\t\t\t\tlabel: __('Font Size'),\n\t\t\t\tvalue: fontSize,\n\t\t\t\tonChange: function onChange(value) {\n\t\t\t\t\treturn setAttributes({ fontSize: value });\n\t\t\t\t},\n\t\t\t\tmin: 14,\n\t\t\t\tmax: 24,\n\t\t\t\tstep: 1\n\t\t\t})\n\t\t);\n\n\t\treturn [inspectorControls, wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: className },\n\t\t\twp.element.createElement(RichText, {\n\t\t\t\ttagName: 'p',\n\t\t\t\tonChange: onChangeContent,\n\t\t\t\tvalue: content,\n\t\t\t\tisSelected: isSelected\n\t\t\t})\n\t\t)];\n\t},\n\n\tsave: function save(_ref2) {\n\t\tvar attributes = _ref2.attributes,\n\t\t    className = _ref2.className;\n\t\tvar content = attributes.content;\n\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: className },\n\t\t\twp.element.createElement(\n\t\t\t\t'p',\n\t\t\t\tnull,\n\t\t\t\tcontent\n\t\t\t)\n\t\t);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ub3RpY2UvYmxvY2suanM/MTI1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEJMT0NLOiBtaWdodHlibG9ja3NcbiAqXG4gKiBSZWdpc3RlcmluZyBhIGJhc2ljIGJsb2NrIHdpdGggR3V0ZW5iZXJnLlxuICogU2ltcGxlIGJsb2NrLCByZW5kZXJzIGFuZCBzYXZlcyB0aGUgc2FtZSBjb250ZW50IHdpdGhvdXQgYW55IGludGVyYWN0aXZpdHkuXG4gKi9cblxuLy8gIEltcG9ydCBDU1MuXG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgJy4vZWRpdG9yLnNjc3MnO1xuXG52YXIgX18gPSB3cC5pMThuLl9fOyAvLyBJbXBvcnQgX18oKSBmcm9tIHdwLmkxOG5cblxudmFyIF93cCRibG9ja3MgPSB3cC5ibG9ja3MsXG4gICAgcmVnaXN0ZXJCbG9ja1R5cGUgPSBfd3AkYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlLFxuICAgIFJpY2hUZXh0ID0gX3dwJGJsb2Nrcy5SaWNoVGV4dCxcbiAgICBJbnNwZWN0b3JDb250cm9scyA9IF93cCRibG9ja3MuSW5zcGVjdG9yQ29udHJvbHMsXG4gICAgQ29sb3JQYWxldHRlID0gX3dwJGJsb2Nrcy5Db2xvclBhbGV0dGU7IC8vIEltcG9ydCByZWdpc3RlckJsb2NrVHlwZSgpIGZyb20gd3AuYmxvY2tzXG5cbnZhciBfd3AkY29tcG9uZW50cyA9IHdwLmNvbXBvbmVudHMsXG4gICAgVG9nZ2xlQ29udHJvbCA9IF93cCRjb21wb25lbnRzLlRvZ2dsZUNvbnRyb2wsXG4gICAgUGFuZWxDb2xvciA9IF93cCRjb21wb25lbnRzLlBhbmVsQ29sb3IsXG4gICAgUmFuZ2VDb250cm9sID0gX3dwJGNvbXBvbmVudHMuUmFuZ2VDb250cm9sLFxuICAgIFNlbGVjdENvbnRyb2wgPSBfd3AkY29tcG9uZW50cy5TZWxlY3RDb250cm9sO1xuLyoqXG4gKiBSZWdpc3RlcjogYWEgR3V0ZW5iZXJnIEJsb2NrLlxuICpcbiAqIFJlZ2lzdGVycyBhIG5ldyBibG9jayBwcm92aWRlZCBhIHVuaXF1ZSBuYW1lIGFuZCBhbiBvYmplY3QgZGVmaW5pbmcgaXRzXG4gKiBiZWhhdmlvci4gT25jZSByZWdpc3RlcmVkLCB0aGUgYmxvY2sgaXMgbWFkZSBlZGl0b3IgYXMgYW4gb3B0aW9uIHRvIGFueVxuICogZWRpdG9yIGludGVyZmFjZSB3aGVyZSBibG9ja3MgYXJlIGltcGxlbWVudGVkLlxuICpcbiAqIEBsaW5rIGh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svYmxvY2stYXBpL1xuICogQHBhcmFtICB7c3RyaW5nfSAgIG5hbWUgICAgIEJsb2NrIG5hbWUuXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgc2V0dGluZ3MgQmxvY2sgc2V0dGluZ3MuXG4gKiBAcmV0dXJuIHs/V1BCbG9ja30gICAgICAgICAgVGhlIGJsb2NrLCBpZiBpdCBoYXMgYmVlbiBzdWNjZXNzZnVsbHlcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWdpc3RlcmVkOyBvdGhlcndpc2UgYHVuZGVmaW5lZGAuXG4gKi9cblxucmVnaXN0ZXJCbG9ja1R5cGUoJ21pZ2h0eWJsb2Nrcy9ibG9jay1ub3RpY2UnLCB7XG5cdC8vIEJsb2NrIG5hbWUuIEJsb2NrIG5hbWVzIG11c3QgYmUgc3RyaW5nIHRoYXQgY29udGFpbnMgYSBuYW1lc3BhY2UgcHJlZml4LiBFeGFtcGxlOiBteS1wbHVnaW4vbXktY3VzdG9tLWJsb2NrLlxuXHR0aXRsZTogX18oJ05vdGljZScpLCAvLyBCbG9jayB0aXRsZS5cblx0aWNvbjogJ3NoaWVsZCcsIC8vIEJsb2NrIGljb24gZnJvbSBEYXNoaWNvbnMg4oaSIGh0dHBzOi8vZGV2ZWxvcGVyLndvcmRwcmVzcy5vcmcvcmVzb3VyY2UvZGFzaGljb25zLy5cblx0Y2F0ZWdvcnk6ICdjb21tb24nLCAvLyBCbG9jayBjYXRlZ29yeSDigJQgR3JvdXAgYmxvY2tzIHRvZ2V0aGVyIGJhc2VkIG9uIGNvbW1vbiB0cmFpdHMgRS5nLiBjb21tb24sIGZvcm1hdHRpbmcsIGxheW91dCB3aWRnZXRzLCBlbWJlZC5cblx0a2V5d29yZHM6IFtfXygnbWlnaHR5YmxvY2tzJyksIF9fKCdub3RpY2UnKSwgX18oJ2FsZXJ0JyldLFxuXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHRjb250ZW50OiB7XG5cdFx0XHR0eXBlOiAnYXJyYXknLFxuXHRcdFx0c291cmNlOiAnY2hpbGRyZW4nLFxuXHRcdFx0c2VsZWN0b3I6ICdwJ1xuXHRcdH0sXG5cdFx0dHlwZToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRkZWZhdWx0OiAnZ2VuZXJhbCdcblx0XHR9LFxuXHRcdGZvbnRTaXplOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdGRlZmF1bHQ6ICcxNCdcblx0XHR9XG5cdH0sXG5cblx0ZWRpdDogZnVuY3Rpb24gZWRpdChfcmVmKSB7XG5cdFx0dmFyIGZvY3VzID0gX3JlZi5mb2N1cyxcblx0XHQgICAgYXR0cmlidXRlcyA9IF9yZWYuYXR0cmlidXRlcyxcblx0XHQgICAgY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWUsXG5cdFx0ICAgIHNldEF0dHJpYnV0ZXMgPSBfcmVmLnNldEF0dHJpYnV0ZXM7XG5cdFx0dmFyIGNvbnRlbnQgPSBhdHRyaWJ1dGVzLmNvbnRlbnQsXG5cdFx0ICAgIGlzU2VsZWN0ZWQgPSBhdHRyaWJ1dGVzLmlzU2VsZWN0ZWQsXG5cdFx0ICAgIHR5cGUgPSBhdHRyaWJ1dGVzLnR5cGUsXG5cdFx0ICAgIGZvbnRTaXplID0gYXR0cmlidXRlcy5mb250U2l6ZTtcblxuXG5cdFx0ZnVuY3Rpb24gb25DaGFuZ2VDb250ZW50KG5ld0NvbnRlbnQpIHtcblx0XHRcdHNldEF0dHJpYnV0ZXMoeyBjb250ZW50OiBuZXdDb250ZW50IH0pO1xuXHRcdH1cblxuXHRcdHZhciBpbnNwZWN0b3JDb250cm9scyA9IGZvY3VzICYmIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdEluc3BlY3RvckNvbnRyb2xzLFxuXHRcdFx0bnVsbCxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudCgnYnInLCBudWxsKSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChTZWxlY3RDb250cm9sLCB7XG5cdFx0XHRcdGxhYmVsOiBfXygnUHJlc2V0IENvbG9ycycpLFxuXHRcdFx0XHRkZXNjcmlwdGlvbjogX18oJ1ByZXNldCBjb2xvcnMuIFRoaXMgd2lsbCByZXNldCB0aGUgc3R5bGluZyBvcHRpb25zIGJlbG93LiAnKSxcblx0XHRcdFx0b3B0aW9uczogW3tcblx0XHRcdFx0XHR2YWx1ZTogJ2dlbmVyYWwnLFxuXHRcdFx0XHRcdGxhYmVsOiBfXygnR2VuZXJhbCcpXG5cdFx0XHRcdH0sIHtcblx0XHRcdFx0XHR2YWx1ZTogJ2Vycm9yJyxcblx0XHRcdFx0XHRsYWJlbDogX18oJ0Vycm9yL0FsZXJ0Jylcblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdHZhbHVlOiAnc3VjY2VzcycsXG5cdFx0XHRcdFx0bGFiZWw6IF9fKCdTdWNjZXNzJylcblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdHZhbHVlOiAnbm90aWNlJyxcblx0XHRcdFx0XHRsYWJlbDogX18oJ05vdGljZScpXG5cdFx0XHRcdH1dLFxuXHRcdFx0XHR2YWx1ZTogdHlwZSxcblx0XHRcdFx0b25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKHZhbHVlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHNldEF0dHJpYnV0ZXMoeyB0eXBlOiB2YWx1ZSB9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSksXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoUmFuZ2VDb250cm9sLCB7XG5cdFx0XHRcdGxhYmVsOiBfXygnRm9udCBTaXplJyksXG5cdFx0XHRcdHZhbHVlOiBmb250U2l6ZSxcblx0XHRcdFx0b25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKHZhbHVlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHNldEF0dHJpYnV0ZXMoeyBmb250U2l6ZTogdmFsdWUgfSk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdG1pbjogMTQsXG5cdFx0XHRcdG1heDogMjQsXG5cdFx0XHRcdHN0ZXA6IDFcblx0XHRcdH0pXG5cdFx0KTtcblxuXHRcdHJldHVybiBbaW5zcGVjdG9yQ29udHJvbHMsIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdCdkaXYnLFxuXHRcdFx0eyBjbGFzc05hbWU6IGNsYXNzTmFtZSB9LFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFJpY2hUZXh0LCB7XG5cdFx0XHRcdHRhZ05hbWU6ICdwJyxcblx0XHRcdFx0b25DaGFuZ2U6IG9uQ2hhbmdlQ29udGVudCxcblx0XHRcdFx0dmFsdWU6IGNvbnRlbnQsXG5cdFx0XHRcdGlzU2VsZWN0ZWQ6IGlzU2VsZWN0ZWRcblx0XHRcdH0pXG5cdFx0KV07XG5cdH0sXG5cblx0c2F2ZTogZnVuY3Rpb24gc2F2ZShfcmVmMikge1xuXHRcdHZhciBhdHRyaWJ1dGVzID0gX3JlZjIuYXR0cmlidXRlcyxcblx0XHQgICAgY2xhc3NOYW1lID0gX3JlZjIuY2xhc3NOYW1lO1xuXHRcdHZhciBjb250ZW50ID0gYXR0cmlidXRlcy5jb250ZW50O1xuXG5cblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0J2RpdicsXG5cdFx0XHR7IGNsYXNzTmFtZTogY2xhc3NOYW1lIH0sXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdwJyxcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0Y29udGVudFxuXHRcdFx0KVxuXHRcdCk7XG5cdH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL25vdGljZS9ibG9jay5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*******************************!*\
  !*** ./src/notice/style.scss ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ub3RpY2Uvc3R5bGUuc2Nzcz9iMzMyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbm90aWNlL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!********************************!*\
  !*** ./src/notice/editor.scss ***!
  \********************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ub3RpY2UvZWRpdG9yLnNjc3M/MWM2ZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL25vdGljZS9lZGl0b3Iuc2Nzc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///3\n");

/***/ })
/******/ ]);