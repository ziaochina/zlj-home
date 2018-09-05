(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("MK.metaEngine"), require("MK.utils"), require("react"), require("immutable"));
	else if(typeof define === 'function' && define.amd)
		define(["MK.metaEngine", "MK.utils", "react", "immutable"], factory);
	else if(typeof exports === 'object')
		exports["MKApp_zlj_home"] = factory(require("MK")["metaEngine"], require("MK.utils"), require("react"), require("immutable"));
	else
		root["MKApp_zlj_home"] = factory(root["MK.metaEngine"], root["MK"]["utils"], root["React"], root["Immutable"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__3__, __WEBPACK_EXTERNAL_MODULE__12__, __WEBPACK_EXTERNAL_MODULE__14__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _webapi=__webpack_require__(7);var _webapi2=_interopRequireDefault(_webapi);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var _options={webapi:_webapi2.default,webapiMap:{}};function config(options){if(options){Object.assign(_options,options);}}config.current=_options;exports.default=config;module.exports=exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.getMeta=getMeta;exports.getInitState=getInitState;function getMeta(){return{name:'root',component:'Layout',className:'zlj-home',children:[{name:'gridLayout',component:'GridLayout.WidthProviderGridLayout',draggableHandle:'.ant-card-head',isResizable:false,isDraggable:false,useCSSTransforms:false,cols:12,rowHeight:50,layout:[{i:'shortcuts',x:0,y:0,w:12,h:3,minW:6,minH:3},{i:'list1',x:0,y:2,w:7,h:6,minW:4,minH:6},{i:'list',x:7,y:2,w:5,h:6,minW:4,minH:6}],children:[{name:'shortcuts',component:'::div',key:'shortcuts',children:{name:'card',component:'Card',title:'常用功能',children:[{name:'content',component:'AppLoader',appName:'home-shortcuts'}]}},{name:'list1',component:'::div',key:'list1',children:{name:'card',component:'Card',title:'待办列表',children:[{name:'content',component:'AppLoader',appName:'home-list'}]}},{name:'list',component:'::div',key:'list',children:{name:'card',component:'Card',title:'通知',children:[{name:'content',component:'AppLoader',appName:'home-list'}]}}]}]};}function getInitState(){return{data:{}};}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__3__;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _mkMetaEngine=__webpack_require__(1);var pkgJson=__webpack_require__(6);__webpack_require__.p=window['__pub_'+pkgJson.name+'__'];var data=__webpack_require__(2);var config=__webpack_require__(0);__webpack_require__(8);__webpack_require__(9);exports.default={name:pkgJson.name,version:pkgJson.version,description:pkgJson.description,meta:data.getMeta(),components:[],config:config,load:function load(cb){cb(_mkMetaEngine.defaultComponent,__webpack_require__(11),__webpack_require__(13));}};module.exports=exports['default'];

/***/ }),
/* 6 */
/***/ (function(module) {

module.exports = {"isMKApp":true,"name":"zlj-home","description":"zlj-home","version":"1.0.0","license":"MIT","author":"","keywords":["mk","monkey king","react","redux","mk-js","mk-command","zlj-home"],"repository":{"type":"git","url":"https://github.com/ziaochina/zlj-home.git"},"bugs":{"url":"https://github.com/ziaochina/zlj-home/issues"},"homepage":"https://github.com/ziaochina/zlj-home#readme","scripts":{"start":"mk start","build":"mk build","pkg":"mk pkg"},"dependencies":{"mk-command":"*"}};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _mkUtils=__webpack_require__(3);var _config=__webpack_require__(0);var _config2=_interopRequireDefault(_config);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/**
 * webapi.js 封装app所需的所有web请求
 * 供app测试使用，app加入网站后webpai应该由网站通过config,提供给每个app
 */var api=function api(key){return _config2.default.current.webapiMap[key];};exports.default={/*
    portal: {
        init: (option) => fetch.post(api('portal.init'), option)
    }*/};module.exports=exports['default'];

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _mkUtils=__webpack_require__(3);var mockData=_mkUtils.fetch.mockData;/*
fetch.mock('/v1/person/query', (option) => {
    return {result:true, value:{}}
})
*//**
 * mock.js 提供应用截获ajax请求，为脱离后台测试使用
 * 模拟查询更改内存中mockData,并返回数据
 */

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};exports.default=creator;var _react=__webpack_require__(12);var _react2=_interopRequireDefault(_react);var _mkMetaEngine=__webpack_require__(1);var _config=__webpack_require__(0);var _config2=_interopRequireDefault(_config);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var action=function action(option){var _this=this;_classCallCheck(this,action);this.onInit=function(_ref){var component=_ref.component,injections=_ref.injections;_this.component=component;_this.injections=injections;injections.reduce('init');};this.metaAction=option.metaAction;this.config=_config2.default.current;};function creator(option){var metaAction=new _mkMetaEngine.action(option),o=new action(_extends({},option,{metaAction:metaAction})),ret=_extends({},metaAction,o);metaAction.config({metaHandlers:ret});return ret;}module.exports=exports['default'];

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__12__;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};exports.default=creator;var _immutable=__webpack_require__(14);var _mkMetaEngine=__webpack_require__(1);var _config=__webpack_require__(0);var _config2=_interopRequireDefault(_config);var _data=__webpack_require__(2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var reducer=function reducer(option){var _this=this;_classCallCheck(this,reducer);this.init=function(state,option){var initState=(0,_data.getInitState)();return _this.metaReducer.init(state,initState);};this.metaReducer=option.metaReducer;this.config=_config2.default.current;};function creator(option){var metaReducer=new _mkMetaEngine.reducer(option),o=new reducer(_extends({},option,{metaReducer:metaReducer}));return _extends({},metaReducer,o);}module.exports=exports['default'];

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__14__;

/***/ })
/******/ ]);
});