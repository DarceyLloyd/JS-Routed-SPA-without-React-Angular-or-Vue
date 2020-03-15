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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/aftc-modules/aftc-modules.js":
/*!***************************************************!*\
  !*** ./node_modules/aftc-modules/aftc-modules.js ***!
  \***************************************************/
/*! exports provided: AnimationFrameStack, ArgsToObject, ArrayClear, ArrayContains, arrayEmpty, ArrayGetMax, ArrayGetMin, ArrayMax, ArrayMin, ArrayRemoveIndex, ArrayRemoveItem, ArrayShuffle, ArrayShuffle2, IsInArray, IsStringInArray, GetBrowser, GetBrowserX, GetBrowserY, IsInViewport, BoolToString, BoolToYesNo, DegToRad, HexToRgb, NumToHex, RadToDeg, RGBToHex, RGBToHex2, StringToBool, GetCookie, SetCookie, GetDaysBetween, GetMySQLDateTimeString, GetUKDate, GetUkDateFromDbDateTime, GetUkDateTimeFromDbDateTime, GetUSDate, appendTo, AttachDebug, DebugTo, log, logTo, GetIEVersion, GetOS, IsAndroid, IsChrome, IsEdge, IsFireFox, IsIE, IsIOS, IsMobile, IsOpera, IsSafari, GetElementPosition, IsDOM, IsElement, IsElement2, GetElementOffsetTop, HasClass, SetHTML, EventManager, onReady, WordLimiter, XHR, GetRandomBoolean, GetRandomFloat, GetRandomInt, GetRandomThatsNot, GetWeightedRandom, InertiaTo, IsEven, IsOdd, NormaliseRange, ParseArrayToFloat, ParseArrayToInt, RoundTo, FPSMonitor, GetGUID, GetUID, IsAlphaNumeric, IsArray, IsBool, IsBoolean, IsNumber, IsNumeric, CutStringTo, EscapeHTML, GetAnchor, GetCleanJSONString, GetFileExtension, GetFileExtension2, GetLastPartOfUrl, GetRandomString, GetStringBetween, getStringsBetween2, GetWordCount, InString, IsInString, LTrimBy, RemoveFileFromPath, RTrimBy, TrimStringBy, UcFirst, IsEmail */
/*! exports used: log, onReady */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AnimationFrameStack */
/* unused harmony export ArgsToObject */
/* unused harmony export ArrayClear */
/* unused harmony export ArrayContains */
/* unused harmony export arrayEmpty */
/* unused harmony export ArrayGetMax */
/* unused harmony export ArrayGetMin */
/* unused harmony export ArrayMax */
/* unused harmony export ArrayMin */
/* unused harmony export ArrayRemoveIndex */
/* unused harmony export ArrayRemoveItem */
/* unused harmony export ArrayShuffle */
/* unused harmony export ArrayShuffle2 */
/* unused harmony export IsInArray */
/* unused harmony export IsStringInArray */
/* unused harmony export GetBrowser */
/* unused harmony export GetBrowserX */
/* unused harmony export GetBrowserY */
/* unused harmony export IsInViewport */
/* unused harmony export BoolToString */
/* unused harmony export BoolToYesNo */
/* unused harmony export DegToRad */
/* unused harmony export HexToRgb */
/* unused harmony export NumToHex */
/* unused harmony export RadToDeg */
/* unused harmony export RGBToHex */
/* unused harmony export RGBToHex2 */
/* unused harmony export StringToBool */
/* unused harmony export GetCookie */
/* unused harmony export SetCookie */
/* unused harmony export GetDaysBetween */
/* unused harmony export GetMySQLDateTimeString */
/* unused harmony export GetUKDate */
/* unused harmony export GetUkDateFromDbDateTime */
/* unused harmony export GetUkDateTimeFromDbDateTime */
/* unused harmony export GetUSDate */
/* unused harmony export appendTo */
/* unused harmony export AttachDebug */
/* unused harmony export DebugTo */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return log; });
/* unused harmony export logTo */
/* unused harmony export GetIEVersion */
/* unused harmony export GetOS */
/* unused harmony export IsAndroid */
/* unused harmony export IsChrome */
/* unused harmony export IsEdge */
/* unused harmony export IsFireFox */
/* unused harmony export IsIE */
/* unused harmony export IsIOS */
/* unused harmony export IsMobile */
/* unused harmony export IsOpera */
/* unused harmony export IsSafari */
/* unused harmony export GetElementPosition */
/* unused harmony export IsDOM */
/* unused harmony export IsElement */
/* unused harmony export IsElement2 */
/* unused harmony export GetElementOffsetTop */
/* unused harmony export HasClass */
/* unused harmony export SetHTML */
/* unused harmony export EventManager */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return onReady; });
/* unused harmony export WordLimiter */
/* unused harmony export XHR */
/* unused harmony export GetRandomBoolean */
/* unused harmony export GetRandomFloat */
/* unused harmony export GetRandomInt */
/* unused harmony export GetRandomThatsNot */
/* unused harmony export GetWeightedRandom */
/* unused harmony export InertiaTo */
/* unused harmony export IsEven */
/* unused harmony export IsOdd */
/* unused harmony export NormaliseRange */
/* unused harmony export ParseArrayToFloat */
/* unused harmony export ParseArrayToInt */
/* unused harmony export RoundTo */
/* unused harmony export FPSMonitor */
/* unused harmony export GetGUID */
/* unused harmony export GetUID */
/* unused harmony export IsAlphaNumeric */
/* unused harmony export IsArray */
/* unused harmony export IsBool */
/* unused harmony export IsBoolean */
/* unused harmony export IsNumber */
/* unused harmony export IsNumeric */
/* unused harmony export CutStringTo */
/* unused harmony export EscapeHTML */
/* unused harmony export GetAnchor */
/* unused harmony export GetCleanJSONString */
/* unused harmony export GetFileExtension */
/* unused harmony export GetFileExtension2 */
/* unused harmony export GetLastPartOfUrl */
/* unused harmony export GetRandomString */
/* unused harmony export GetStringBetween */
/* unused harmony export getStringsBetween2 */
/* unused harmony export GetWordCount */
/* unused harmony export InString */
/* unused harmony export IsInString */
/* unused harmony export LTrimBy */
/* unused harmony export RemoveFileFromPath */
/* unused harmony export RTrimBy */
/* unused harmony export TrimStringBy */
/* unused harmony export UcFirst */
/* unused harmony export IsEmail */
// aftc-modules v1.2.5
// Author: Darcey@aftc.io
function AnimationFrameStack() {
    var me = this;

    this.init = function(){
        if (!window){
            console.error("AnimationFrameStack(): ERROR - Unable to access window!");
        } else {
            if (!window.aftcAnimStack){
                window.aftcAnimStack = {
                    firstRun: true,
                    enabled: true,
                    stack: [],
                    uid: Math.floor(Math.random()*99999)
                }
            }
        }

        if (window.aftcAnimStack.firstRun){
            window.aftcAnimStack.firstRun = false;
            this.processFnStack();
        }
    }

    this.start = function(){
        window.aftcAnimStack.enabled = true;
        this.processFnStack();
    }

    this.stop = function(){
        window.aftcAnimStack.enabled = false;
    }

    this.dispose = function(){
        if (window.aftcAnimStack){
            window.aftcAnimStack.enabled = false;
            window.aftcAnimStack.stack = [];
            delete window.aftcAnimStack.stack;
        }
    }

    this.processFnStack = function(){
        if (!window.aftcAnimStack.enabled){ return; }

        for(let i=0; i < window.aftcAnimStack.stack.length; i++){
            window.aftcAnimStack.stack[i].fn();
        }

        window.requestAnimationFrame(me.processFnStack);
    }

    this.add = function(uid,fn){
        window.aftcAnimStack.stack.push({
            uid: uid,
            fn: fn
        });
    }

    this.remove = function(uid){
        for(let i=0; i < window.aftcAnimStack.stack.length; i++){
            if (window.aftcAnimStack.stack[i].uid === uid){
                // window.aftcAnimStack.stack = arrayRemoveItem(window.aftcAnimStack.stack,fn);
                window.aftcAnimStack.stack.splice(i,1);
            }
        }
    }

    this.init();
}

/**
 * @function: AnimationFrameStack()
 * @desc: Gives easy access to a single requestAnimationFrame loop which you can add functions to process in each loop, note the function stack is stored on global window scope
 * @method add: add a function to the stack to be executed on animationFrameLoop
 * @method remove: remove a function from the stack
 * @method start: start the requestAnimationFrame loop
 * @method stop: stop the requestAnimationFrame loop
 * @method dispose: dispose of all functions in the function stack
 * @link:
 */
function ArgsToObject(fArgs, obj, strict) {
    if (fArgs[0] && typeof (fArgs[0]) === "object") {
        let args = fArgs[0];

        if (strict === undefined) {
            strict = true;
        }
        if (args && typeof (args) === "object") {
            for (let key in args) {
                if (strict) {
                    if (obj.hasOwnProperty(key)) {
                        obj[key] = args[key];
                    } else {
                        console.warn("argsToObject(): Argument [" + key + "] is not supported.");
                    }
                } else {
                    obj[key] = args[key];
                }
            }
        }

    }
};

/**
 * @function: argsToObject(fArgs, obj, strict)
 * @desc: Quick and easy args to object
 * @param args object: arguments (from the function structure, typically code will always be 'arguments'
 * @param obj object: object to parse into
 * @param strict boolean: console.warn any args that have been supplied that don't exist in args
 * @return: null
 * @alias: argsTo
 * @link: https://codepen.io/AllForTheCode/pen/PaqbKN
 */
function ArrayClear(arr) {
    while (arr.length > 0) { arr.pop(); }
}

function ArrayContains(needle, haystack) {
    if (haystack.indexOf(needle) > -1) { return true; } else { return false; }
}
function arrayEmpty(arr) {
    while (arr.length > 0) { arr.pop(); }
}
function ArrayGetMax(arr) {
    return Math.max.apply(Math, arr);
}


function ArrayGetMin(arr) {
    return Math.min.apply(Math, arr);
}
function ArrayMax(arr) {
    return Math.max.apply(Math, arr);
}
function ArrayMin(arr) {
    return Math.min.apply(Math, arr);
}
function ArrayRemoveIndex(arr,index){
    arr.splice(index,1);
}

function ArrayRemoveItem(arr, value) {
    return arr.filter(function(item){
        return item != value;
    });
}
function ArrayShuffle(arr) {
    let currentIndex = arr.length,
        temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = arr[currentIndex];
        arr[currentIndex] = arr[randomIndex];
        arr[randomIndex] = temporaryValue;
    }

    return arr;
}

function ArrayShuffle2(a) {
    let x, t, r = new Uint32Array(1);
    for (let i = 0, c = a.length - 1, m = a.length; i < c; i++ , m--) {
        crypto.getRandomValues(r);
        x = Math.floor(r / 65536 / 65536 * m) + i;
        t = a[i], a[i] = a[x], a[x] = t;
    }

    return a;
}
function IsInArray(needle, haystack) {
    if (haystack.indexOf(needle) > -1) { return true; } else { return false; }
}
function IsStringInArray(needle, haystack) {
    return (new RegExp('(' + haystack.join('|').replace(/\./g, '\\.') + ')$')).test(needle);
}

function GetBrowser () {
    let ua = navigator.userAgent, tem, M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if (/trident/i.test(M[1])) {
        tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE';
    }
    if (M[1] === 'Chrome') {
        tem = ua.match(/\bOPR\/(\d+)/);
        if (tem != null) {
            return 'Opera';
        }
    }
    M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
    if ((tem = ua.match(/version\/(\d+)/i)) != null) {
        M.splice(1, 1, tem[1]);
    }
    return M[0];
}
function GetBrowserX(){
    let supportPageOffset = window.pageXOffset !== undefined;
    let isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");

    let x = supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft;
    // let y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;

    return x;
}


function GetBrowserY(){
    let supportPageOffset = window.pageXOffset !== undefined;
    let isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");

    // let x = supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft;
    let y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;

    return y;
}

function IsInViewport(el){
    let top = el.offsetTop;
    let left = el.offsetLeft;
    let width = el.offsetWidth;
    let height = el.offsetHeight;

    while(el.offsetParent) {
        el = el.offsetParent;
        top += el.offsetTop;
        left += el.offsetLeft;
    }

    return (
        top < (window.pageYOffset + window.innerHeight) &&
        left < (window.pageXOffset + window.innerWidth) &&
        (top + height) > window.pageYOffset &&
        (left + width) > window.pageXOffset
    );


    // let bounding = ele.getBoundingClientRect();
    // return (
    //     bounding.top >= 0 &&
    //     bounding.left >= 0 &&
    //     bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    //     bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    // );
}

function BoolToString (bool) {

    if (!bool || bool === undefined || typeof (bool) != "boolean") {
        console.log("AFTC.js: Conversion.js: boolToString(str): Error - input is not a boolean!");
        return "error";
    }

    if (bool) {
        return "true";
    } else {
        return "false";
    }
}
function BoolToYesNo (b) {

    if (!b || b === undefined || typeof (b) != "boolean") {
        console.log("BoolToYesNo(str): Error - input is not a boolean!");
        return "error";
    }

    if (b) {
        return "yes";
    } else {
        return "no";
    }
}
function DegToRad(input) { return input * (Math.PI / 180); }
function HexToRgb (hex) {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}
function NumToHex (num) {
    return num.toString(16);
}
function RadToDeg(input) { return input * (180 / Math.PI); }
function RGBToHex (r, g, b) {
    return ((r << 16) | (g << 8) | b).toString(16);
}

function RGBToHex2 (r, g, b) {
    function getHex(c) {
        let hex = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }
    let hex = "#" + getHex(r) + getHex(g) + getHex(b);
    hex = hex.toUpperCase();
    return hex;
}
function StringToBool (str) {

    if (!str || str === undefined || typeof (str) != "string") {
        console.log("StringToBool(str): Error - input string is not valid!");
        return false;
    }

    switch (str.toLowerCase()) {
        case "y":
            return true;
            break;
        case "yes":
            return true;
            break;
        case "1":
            return true;
            break;
        case "true":
            return true;
            break;
        default:
            return false;
            break;
    }
}


function GetCookie(name) {
	//return .cookie(name);
	var keyValue = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|)');
	return keyValue ? keyValue[2] : null;
}
function SetCookie(name, value) {
	//document.cookie = name + "=" + value + "; expires=Thu, 18 Dec 2013 12:00:00 GMT";
	//.cookie(name, value, {expires:365,path:'/cookies'});
	var expires = new Date();
	expires.setTime(expires.getTime() + (1 * 24 * 60 * 60 * 1000));
	document.cookie = name + '=' + value + ';expires=' + expires.toUTCString();
}
function GetDaysBetween (startDateTime, endDateTime) {
    let msPerDay = 8.64e7;
    // Copy dates so don't mess them up
    let sd = new Date(startDateTime);
    let ed = new Date(endDateTime);
    // Set to noon - avoid DST errors
    sd.setHours(12, 0, 0);
    ed.setHours(12, 0, 0);
    // Round to remove daylight saving errors
    return Math.round((ed - sd) / msPerDay);
}

function GetMySQLDateTimeString() {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    if (month.toString().length === 1) {
        month = '0' + month;
    }
    if (day.toString().length === 1) {
        day = '0' + day;
    }
    if (hour.toString().length === 1) {
        hour = '0' + hour;
    }
    if (minute.toString().length === 1) {
        minute = '0' + minute;
    }
    if (second.toString().length === 1) {
        second = '0' + second;
    }
    let str = year + '/' + month + '/' + day + ' ' + hour + ':' + minute + ':' + second;
    return str;
}

function GetUKDate(dte){
    let output = dte.getDay() + "-" + (dte.getMonth()+1) + "-" + dte.getFullYear();
    return output;
}
function GetUkDateFromDbDateTime (input) {
    // "2016-04-08 21:11:59" to UK date
    if (input === "" || input === null) {
        return "no input";
    }
    let DateTime = input.split(" ");
    let DateParts = DateTime[0].split("-");
    let UKDate = DateParts[2] + "/" + DateParts[1] + "/" + DateParts[0];
    return UKDate;
}
function GetUkDateTimeFromDbDateTime  (input) {
    // "2016-04-08 21:11:59" to UK date time
    let DateTime = input.split(" ");
    let DateParts = DateTime[0].split("-");
    let TimeParts = DateTime[1].split(":");
    let UKDate = DateParts[2] + "/" + DateParts[1] + "/" + DateParts[0];
    let Time = TimeParts[0] + ":" + TimeParts[1];
    return (UKDate + " " + Time);
}
function GetUSDate(dte){
    let output = dte.getFullYear() + "-" + (dte.getMonth()+1) + "-" + (dte.getDay()+1)
    return output;
}
function appendTo(elementOrId,msg,endOfLine="<br>"){
    // WARNING: IE11 Wont play nice even with webpack babel on defaults of args
    // WARNING: This will not be built for IE compatibility - please use aftc.js for that npm i aftc.js
    function isElement(o) {
        return (
            typeof HTMLElement === "object" ? o instanceof HTMLElement : //DOM2
                o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName === "string"
        );
    }

    let ele = false;
    if (typeof(elementOrId) == "string"){
        elementOrId = elementOrId.replace("#","");
        ele = document.getElementById(elementOrId);
        if (!ele){
            console.error("AppendTo(): Unable to find ID '" + elementOrId + "' on the DOM!");
            return false;
        }
    } else {
        ele = elementOrId;
    }

    if (isElement(ele)){
        ele.innerHTML = ele.innerHTML + msg + endOfLine;

    } else {
        console.error("AppendTo(): Unable to log to element or id provided!");
        console.error(elementOrId);
        return false;
    }
}


function AttachDebug(no,ele) {
    // return id's not the div create elements as these are type of object and not html element
    let ids = [];

    let debugContainer = document.createElement("div");
    debugContainer.id = "debug-container";
    debugContainer.style.position = "absolute";
    debugContainer.style.right = "5px";
    debugContainer.style.top = "5px";
    debugContainer.style.textAlgin = "right";


    window.aftcDebug = [];

    for (let i = 0; i < no; i++) {
        let r = Math.round(Math.random()*9999999999);
        let id = "aftc-debug-container-" + r;
        let div = document.createElement("div");
        div.id = id;
        div.style.minWidth = "50px";
        // div.style.height = "20px";
        div.style.marginBottom = "3px";
        div.style.border = "1px dashed #999999";
        div.style.padding = "1px 2px 2px 4px";
        div.style.background = "RGBA(255,255,255,0.92)";
        div.style.color = "#000000";
        div.classList.add("debug-row");
        debugContainer.appendChild(div);
        div.addEventListener("click", function (e) {
            console.log(this.innerHTML);
        });

        window.aftcDebug.push(div);
        ids.push(id);
    }
    if (ele){
        ele.appendChild(debugContainer);
    } else {
        document.body.appendChild(debugContainer);
    }

    console.warn("AttachDebug(): Attached!");
    console.warn("AttachDebug(): Use DebugTo(index,string) to write directly to debug elements.");
    return ids;
}
function DebugTo(index,str){
    if (window.aftcDebug[index]){
        window.aftcDebug[index].innerHTML = str;
    }
}
function log(arg) {
    console.log(arg);
}

function logTo(elementOrId,msg,append=false,endOfLine=""){
    // WARNING: IE11 Wont play nice even with webpack babel on defaults of args
    // WARNING: This will not be built for IE compatibility - please use aftc.js for that npm i aftc.js

    function isElement(o) {
        return (
            typeof HTMLElement === "object" ? o instanceof HTMLElement : //DOM2
                o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName === "string"
        );
    }

    let ele = false;
    if (typeof(elementOrId) == "string"){
        elementOrId = elementOrId.replace("#","");
        ele = document.getElementById(elementOrId);
        if (!ele){
            console.error("LogTo(): Unable to find ID '" + elementOrId + "' on the DOM!");
            return false;
        }
    } else {
        ele = elementOrId;
    }

    if (isElement(ele)){
        if (append === true){
            ele.innerHTML = ele.innerHTML + msg + endOfLine;
        } else {
            ele.innerHTML = msg + endOfLine;
        }

    } else {
        console.error("LogTo(): Unable to log to element or id provided!");
        console.error(elementOrId);
        return false;
    }
}


function GetIEVersion () {
    let match = navigator.userAgent.match(/(?:MSIE |Trident\/.*; rv:)(\d+)/);
    return match ? parseInt(match[1]) : undefined;
}
function GetOS(testAgent) {
    let userAgent;

    if (!testAgent){
        userAgent = navigator.userAgent || navigator.vendor || window.opera;
    } else {
        userAgent = testAgent;
    }

    userAgent = userAgent.toLowerCase();




    // Windows Phone must come first because its UA also contains "Android"!
    if (/windows phone/i.test(userAgent)) {
        return {
            os:"windows phone",
            userAgent:userAgent
        }
    }

    // Samsung Browser detection S8
    if (/samsungbrowser/i.test(userAgent)) {
        return {
            os:"android",
            userAgent:userAgent
        }
    }



    if (/android/i.test(userAgent)) {
        return {
            os:"android",
            userAgent:userAgent
        }
    }

    if (/ipad|iphone|ipod/i.test(userAgent)) {
        return {
            os:"ios",
            userAgent:userAgent
        }
    }



    // Windows Phone must come first because its UA also contains "Android"
    if (/win64|win32|win16|win95|win98|windows 2000|windows xp|msie|windows nt 6.3; trident|windows nt|windows/i.test(userAgent)) {
        return {
            os:"windows",
            userAgent:userAgent
        }
    }


    if (/os x/i.test(userAgent)) {
        return {
            os:"osx",
            userAgent:userAgent
        }
    }

    if (/macintosh|osx/i.test(userAgent)) {
        return {
            os:"osx",
            userAgent:userAgent
        }
    }

    if (/openbsd/i.test(userAgent)) {
        return {
            os:"open bsd",
            userAgent:userAgent
        }
    }


    if (/sunos/i.test(userAgent)) {
        return {
            os:"sunos",
            userAgent:userAgent
        }
    }






    if (/crkey/i.test(userAgent)) {
        return {
            os:"chromecast",
            userAgent:userAgent
        }
    }

    if (/appletv/i.test(userAgent)) {
        return {
            os:"apple tv",
            userAgent:userAgent
        }
    }

    if (/wiiu/i.test(userAgent)) {
        return {
            os:"nintendo wiiu",
            userAgent:userAgent
        }
    }

    if (/nintendo 3ds/i.test(userAgent)) {
        return {
            os:"nintendo 3ds",
            userAgent:userAgent
        }
    }

    if (/playstation/i.test(userAgent)) {
        return {
            os:"playstation",
            userAgent:userAgent
        }
    }

    if (/kindle/i.test(userAgent)) {
        return {
            os:"amazon kindle",
            userAgent:userAgent
        }
    }

    if (/ cros /i.test(userAgent)) {
        return {
            os:"chrome os",
            userAgent:userAgent
        }
    }



    if (/ubuntu/i.test(userAgent)) {
        return {
            os:"ubuntu",
            userAgent:userAgent
        }
    }


    if (/googlebot/i.test(userAgent)) {
        return {
            os:"google bot",
            userAgent:userAgent
        }
    }

    if (/bingbot/i.test(userAgent)) {
        return {
            os:"bing bot",
            userAgent:userAgent
        }
    }

    if (/yahoo! slurp/i.test(userAgent)) {
        return {
            os:"yahoo bot",
            userAgent:userAgent
        }
    }



    return {
        os: false,
        userAgent:userAgent
    };
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


function IsAndroid(){
    let ua = navigator.userAgent.toLowerCase();
    if (/windows phone/i.test(ua)) {
        return false;
    } else {
        let isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
        return isAndroid;
    }
}

function IsChrome() {
    var isChromium = window.chrome;
    var winNav = window.navigator;
    var vendorName = winNav.vendor;
    var isOpera = typeof window.opr !== "undefined";
    var isIEedge = winNav.userAgent.indexOf("Edge") > -1;
    var isIOSChrome = winNav.userAgent.match("CriOS");

    if (isIOSChrome) {
        // is Google Chrome on IOS
        return true;
    } else if (
        isChromium !== null &&
        typeof isChromium !== "undefined" &&
        vendorName === "Google Inc." &&
        isOpera === false &&
        isIEedge === false
    ) {
        // is Google Chrome
        return true;
    } else {
        // not Google Chrome
        return false;
    }
}
function IsEdge () {
    //let isEdge = !isIE && !!window.StyleMedia; // Edge 20+
    let edge = false;
    if (/Edge\/\d./i.test(navigator.userAgent)) {
        edge = true;
    }
    return edge;
}
function IsFireFox () {
    // let is_firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
    // return is_firefox;
    return (typeof InstallTrigger !== 'undefined');
}
function IsIE () {
    // let is_ie = navigator.userAgent.toLowerCase().indexOf('MSIE') > -1;
    // return is_ie;
    // params.isIE = navigator.userAgent.match(/MSIE|Trident/);
    // params.isIE = document.documentMode; // IS9 and above
    return /*@cc_on!@*/ false || !!document.documentMode; // Internet Explorer 6-11
}

function IsIOS() {
    let iDevices = [
        'iPad Simulator',
        'iPhone Simulator',
        'iPod Simulator',
        'iPad',
        'iPhone',
        'iPod'
    ];

    if (!!navigator.platform) {
        while (iDevices.length) {
            if (navigator.platform === iDevices.pop()){ return true; }
        }
    }

    return false;
}

function IsMobile(){
    // Windows Phone must come first because its UA also contains "Android"!
    let ua = navigator.userAgent.toLowerCase();
    if (/windows phone/i.test(ua)) {
        return true;
    } else {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            return true;
        } else {
            return false;
        }
    }
}
/**
 * @function: isMobile()
 * @desc: Detects if the device you are using is a mobile or not
 * @return boolean
 * @link: https://codepen.io/AllForTheCode/pen/KRbLdm
 */
function IsOpera() {
    // let isChromium = window.chrome;
    // let isOpera = window.navigator.userAgent.indexOf("OPR") > -1 || window.navigator.userAgent.indexOf("Opera") > -1;
    // let isOpera = (navigator.userAgent.match(/Opera|OPR\//) ? true : false);
    let isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    return isOpera;
}
function IsSafari() {
    // let is_safari = navigator.userAgent.toLowerCase().indexOf('safari') > -1;
    // return is_safari;
    return /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
}
function GetElementPosition(el) {
    let position = {
        top: el.offsetTop,
        left: el.offsetLeft
    };

    if (el.offsetParent) {
        let parentPosition = {
            top: el.offsetParent.offsetTop,
            left: el.offsetParent.offsetLeft
        };

        position.top += parentPosition.top;
        position.left += parentPosition.left;
    }
    return position;
}


function IsDOM(obj) {
    // this works for newer browsers
    try { return obj instanceof HTMLElement; }

        // this works for older browsers
    catch (e) {
        return (typeof obj === "object") &&
            (obj.nodeType === 1) && (typeof obj.style === "object") &&
            (typeof obj.ownerDocument === "object");
    }
};
function IsElement(o) {
    let answer = (
        typeof HTMLElement === "object" ? o instanceof HTMLElement : //DOM2
            o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName === "string"
    );

    if (answer != true) {
        return false;
    } else {
        return true;
    }
}
function IsElement2(element) {
    // works on major browsers back to IE7
    return element instanceof Element;
}

function GetElementOffsetTop(elementId) {
    let element = getElementById(elementId);
    let curtop = 0;
    if (element.hasOwnProperty("offsetParent")){
        do {
            curtop += element.offsetTop;
        } while (element = element.offsetParent);
        return parseFloat([curtop]);
    } else {
        return false;
    }
}
function HasClass(elementOrId, c) {
    if (isElement(elementOrId)) {
        return elementOrId.classList.contains(c);
    } else {
        return getElementById(elementOrId).classList.contains(c);
    }
}
function SetHTML(elementOrId, str) {
    let ele;
    if (typeof (elementOrId) === "string") {
        ele = getElementById(elementOrId);
    } else {
        ele = elementOrId;
    }

    if (ele) {
        ele.innerHTML = str;
    } else {
        return "SetHTML(elementOrId, str): Usage error: Unable to retrieve element id or use element [" + elementOrId + "]";
    }
}
class EventManager {
    // WARNING: export class will not work for transpile to IE11 (DELETE CLASS IF YOU STILL NEED aftc-modules or use SRC file includes)
    // NOTE: Alternatively use aftc.js for ES5 - npm i aftc.js
}

/** jso {
 * "Function": "EventManager.js",
 * "Description": "A centralised event stack where you can hook your functions / class's into for centralised quick and easy event application event handling.",
 * "Methods": [
 *      {
 *          "name": "list",
 *          "description": "Lists which events have been created and available for dispatch in the EventManager.",
  *          "returns": "console.log",
 *      },
 *      {
 *          "name": "add",
 *          "description": "Adds or creates a new event within the event manager and attached a callback function / listener object to be called on dispatch of this event.",
 *          "parameters": [
 *              {
 *                  "name": "eventName",
 *                  "required": "true",
 *                  "description": "The name of the event to add.",
 *              },
 *              {
 *                  "name": "callbackFunction",
  *                  "required": "true",
 *                  "description": "The listener object / function which gets called when the event is triggered.",
 *              },
 *          ],
 *      },
 *      {
 *          "name": "dispatch",
 *          "description": "Dispatches / Triggers an event by name from the EventManager.",
 *          "parameters": [
 *              {
 *                  "name": "eventName",
 *                  "required": "true",
 *                  "description": "The name of the event to dispatch.",
 *              }
 *          ],
 *      },
 *  ]
 * }
 */
function onReady(fn) {
    // IE9+
    if (document.readyState === "complete" || (document.readyState !== "loading" && !document.documentElement.doScroll)) {
        setTimeout(fn, 10);
    } else {
        if (document.addEventListener) {
            document.addEventListener("DOMContentLoaded", function(){
                window.setTimeout(fn, 10);
            });
        }

    }
}

function WordLimiter(str, maxWords) {
    let wordCount = str.split(/\S+/).length - 1;
    let re = new RegExp("^\\s*\\S+(?:\\s+\\S+){0," + (maxWords - 1) + "}");
    let output = "";
    if (wordCount >= maxWords) {
        output = str.match(re);
    } else {
        output = str;
    }
    return { output: output, remaining: (maxWords - wordCount) };
}

class XHR {
    // WARNING: export class will not work for transpile to IE11 (DELETE CLASS IF YOU STILL NEED aftc-modules or use SRC file includes)
    // NOTE: Alternatively use aftc.js for ES5 - npm i aftc.js (new XHR())


    constructor() {
        //https://javascript.info/xmlhttprequest

        // var defs
        this.args = {
            url: false,
            method: false,
            data: false,
            dataType: false, // aka requestType this is either form or json xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            responseType: false, // for clientside processing response data type
            timeout: 0,
            onComplete: false,
            onError: false, // only triggers if the request couldn't be made at all
            onProgress: false,
            onCancel: false,
            username: false,
            password: false
        };

        this.url = false;
        this.urlParams = "";
        this.xhr = false;

        // Process arguments
        if (arguments[0] && typeof (arguments[0]) === "object") {
            for (let key in arguments[0]) {
                if (this.args.hasOwnProperty(key)) {
                    this.args[key] = arguments[0][key];
                }
            }
        }
        // console.log(this.args);

        // Validate
        let valid = true;

        if (this.args.url === false) {
            let msg = `XHR(): Usage error: Option "url" has not been set!
Please enter a valid url to make a request to!`;
            console.error(msg);
            valid = false;
            return false;
        }

        if (this.args.method === false) {
            let msg = `XHR(): Usage error: Option "method" has not been set!
Valid options are:
    POST,
    GET`;
            console.error(msg);
            valid = false;
            return false;
        }


        if (this.args.data !== false && (
            this.args.dataType.toLowerCase() !== "json" &&
            this.args.dataType.toLowerCase() !== "form" &&
            this.args.dataType.toLowerCase() !== "text"
        )) {
            let msg = `XHR(): Usage error: Invalid "dataType" has been set!
Valid options are:
    JSON        - send json string
    FORM        - send form object
    TEXT        - send url string
`;
            console.error(msg);
            valid = false;
            return false;
        }


        if (this.args.responseType === false) {
            let msg =
                `XHR(): Usage warning: Option "responseType" not set!
Valid options are:
    json \t\t\t JSON (parsed automatically)
    document \t\t XML Document (XPath etc),
    text \t\t\t string,
    arraybuffer \t ArrayBuffer for binary data,
    blob \t\t\t Blob for binary data,
`;
            console.error(msg);
            valid = false;
            return false;
        }

        if (
            this.args.responseType.toLowerCase() != "text" &&
            this.args.responseType.toLowerCase() != "document" &&
            this.args.responseType.toLowerCase() != "json" &&
            this.args.responseType.toLowerCase() != "arraybuffer" &&
            this.args.responseType.toLowerCase() != "blob"
        ) {
            let msg =
                `XHR(): Usage error: Not a valid "responseType" specified "${this.args.responseType}"
Valid options are:
    json \t\t\t JSON (parsed automatically)
    document \t\t XML Document (XPath etc),
    text \t\t\t string,
    arraybuffer \t ArrayBuffer for binary data,
    blob \t\t\t Blob for binary data,
`;
            console.error(msg);
            valid = false;
            return false;
        }


        if (this.args.onComplete === false) {
            let msg = `XHR(): Usage error: Option "onComplete" has not been set!
Your making a request but are not doing anything with the response? Make sure to supply an onComplete callback function.`;
            console.error(msg);
            valid = false;
            return false;
        }



        if (valid) {
            this.makeRequest();
        }
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



    makeRequest() {
        this.xhr = new XMLHttpRequest();

        this.xhr.timeout = this.args.timeout;


        // GET
        // Append data variables to url string, only handle json, form and string

        // POST||PUT||DELETE||PATCH
        // If json send json object
        // If form send form object
        // If text send string

        if (this.args.method.toLowerCase() == "get") {
            // GET
            if (this.args.dataType !== false) {
                switch (this.args.dataType.toLowerCase()) {
                    case "text":
                        this.url = this.args.url + "?" + this.args.data;
                        break;
                    case "form":
                        this.url = this.args.url + "?";
                        for (var key of this.args.data.keys()) {
                            let v = this.args.data.get(key);
                            // console.log(v);
                            this.url = this.url + encodeURI(key) + "=" + encodeURI(v) + "&";
                        }
                        break;
                    case "json":
                        this.url = this.args.url + "?";
                        for (let key in this.args.data) {
                            // console.log(key);
                            // console.log(this.args.data[key]);
                            let v = this.args.data[key];
                            // log(key);
                            this.url = this.url + encodeURI(key) + "=" + encodeURI(v) + "&";
                        }
                        break;
                }
                // console.log("this.url = " + this.url);
            } else {
                this.url = this.args.url
            }
        } else {
            // POST || PUT || PATCH || DELETE
            this.url = this.args.url
        }





        // open
        if (this.args.username !== false && this.args.password !== false) {
            this.xhr.open(this.args.method, this.url, this.args.username, this.args.password);
        } else {
            this.xhr.open(this.args.method, this.url);
        }

        // responseType
        this.xhr.responseType = this.args.responseType;




        // Set requestHeader type aka dataType and send
        if (this.args.dataType !== false && typeof(this.args.dataType) == "string") {
            switch (this.args.dataType.toLowerCase()) {
                case "json":
                    this.xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
                    this.xhr.send(JSON.stringify(this.args.data));
                    break;
                case "form":
                    // for (var key of this.args.data.keys()) {
                    //     let v = this.args.data.get(key);
                    //     console.log(key + " = " + v);
                    // }
                    this.xhr.send(this.args.data);
                    break;
                case "text":
                    this.xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
                    this.xhr.send(this.args.data);
                    break;
                default:
                    this.xhr.send();
                    break;
            }
        } else {
            this.xhr.send();
        }


        // Send
        // if (this.args.data !== false && this.args.dataType !== false){
        //     log("sending data");
        //     this.xhr.send(this.args.data);
        // } else {
        //     this.xhr.send();
        // }



        // Event Listeners
        this.xhr.addEventListener("progress", (e) => this.progressHandler(e), true);
        this.xhr.addEventListener("load", (e) => this.onLoadHandler(e), true);
        this.xhr.addEventListener("error", (e) => this.errorHandler(e), true);
        this.xhr.addEventListener("abort", (e) => this.errorHandler(e), true);
        this.xhr.addEventListener("timeout", (e) => this.errorHandler(e), true);
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


    errorHandler(e) {
        // console.log("XHR.errorHandler()");
        this.removeEventListeners();
        if (this.args.onError) {
            this.args.onError(e);
        }
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


    progressHandler(e) {
        // console.log("XHR.progressHandler()");
        // if (e.lengthComputable) {
        //     console.log(`Received ${e.loaded} of ${e.total} bytes`);
        // } else {
        //     console.log(`Received ${e.loaded} bytes`); // no Content-Length
        // }
        // console.log(`Received ${event.loaded} of ${event.total}`);
        if (this.args.onProgress) {
            this.args.onProgress(e);
        }
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


    onLoadHandler(e) {
        // console.log("XHR.onLoadHandler()");
        // console.log(`Done, got ${this.xhr.response.length} bytes`);
        // console.log(this.xhr.response);
        this.removeEventListeners();

        if (this.args.onComplete) {
            this.args.onComplete(e);
        }
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


    getResponseHeader(name) {
        if (this.xhr) {
            return this.xhr.getResponseHeader(name);
        } else {
            return null;
        }
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


    getAllResponseHeaders() {
        if (this.xhr) {
            return this.xhr.getAllResponseHeaders();
        } else {
            return null;
        }
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


    getResponse() {
        if (this.xhr) {
            return this.xhr.response;
        } else {
            return null;
        }
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


    removeEventListeners() {
        this.xhr.removeEventListener("progress", (e) => this.progressHandler(e));
        this.xhr.removeEventListener("load", (e) => this.onLoadHandler(e));
        this.xhr.removeEventListener("error", (e) => this.errorHandler(e));
        this.xhr.removeEventListener("abort", (e) => this.errorHandler(e));
        this.xhr.removeEventListener("timeout", (e) => this.errorHandler(e));
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

}
function GetRandomBoolean(){
    return Math.random() >= 0.5;
}
function GetRandomFloat(min, max) {
    // let r = from + (Math.random()* (to*2));
    return (Math.random() * (max - min) + min);
};

function GetRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function GetRandomThatsNot(min,max,not){
    let r = not; let lim = 100; let runs = 0;
    while (r===not && runs < lim){
        runs++;
        r = getRandomInt(min,max);
    }
    if (runs>=lim){
        return false;
    } else {
        return r;
    }
}
/**
 * @function: getRandomThatsNot(min,max,not)
 * @desc: returns a random int betwen your specified min and max values but never the not value
 * @param min number: the minimum your random number is allowed to go
 * @param max number: the maximum your random number is allowed to go
 * @alias: getRandom
 * @link: https://codepen.io/AllForTheCode/pen/yEBZNq
 */
function GetWeightedRandom(odds, iterations) {
    if (!odds) {
        odds = [
            0.68, // 0
            0.69, // 1
            0.698, // 2
            0.6909, // 3
            0.68, // 4
            0.58, // 5
            0.57, // 6
            0.56, // 7
            0.4, // 8
            0.3, // 9
        ];
    }
    let weights = [];
    let r = 0;
    let iMax = 0;
    let wMax = 0;

    for (let i in odds) {
        if (!weights[i]) {
            weights[i] = 0;
        }

        for (let x = 0; x < iterations; x++) {
            r = Math.random();
            //log(r.toFixed(3) + "   " + odds[i].toFixed(3));
            if (r <= odds[i]) {
                weights[i] += odds[i];
            }
        }

        if (weights[i] > wMax) {
            wMax = weights[i];
            iMax = i;
        }
    }

    //log(weights);
    //log("wMax = " + wMax + "   iMax = " + iMax);
    return iMax;
};
/**
 * @function: getWeightedRandom(odds, iterations)
 * @desc: Get a weighted random based on odds and iterations
 * @param odds array: array of odds
 * @param iterations number: number of iterations to run on each number test
 * @link: https://codepen.io/AllForTheCode/pen/RyvWjZ
 */
function InertiaTo(current,target,amount){
    if (amount == 1) {
        return target;
    }
    let distToGo = target - current;
    let delta = current + (distToGo * amount);

    if (Math.abs(distToGo) < 0.01) {
        distToGo = 0;
        delta = target;
    }
    return delta;
}

function IsEven(n) {
    return n % 2 === 0;
}

function IsOdd(n) {
    return Math.abs(n % 2) === 1;
}
function NormaliseRange(min, max, v) {
    let range = max - min;
    let step = 1 / range;
    let r = (step * (v - min));
    if (v < min) {
        r = 0;
    } else if (v > max) {
        r = 1;
    }
    return r;
}

function ParseArrayToFloat(arr) {
    let converted;
    for (let i = 0; i < arr.length; i++) {
        converted = parseFloat(arr[i]);
        if (isNaN(converted)){
            arr[i] = 0;
        } else {
            arr[i] = converted;
        }
    }
    return arr;
}

function ParseArrayToInt(arr) {
    let converted;
    for (let i = 0; i < arr.length; i++) {
        converted = parseInt(arr[i]);
        if (isNaN(converted)){
            arr[i] = 0;
        } else {
            arr[i] = converted;
        }
    }
    return arr;
}
function RoundTo(v, dec) {
    return +(Math.round(Number(v + "e+" + dec)) + "e-" + dec);
}

class FPSMonitor {
    // WARNING: export class will not work for transpile to IE11 (DELETE CLASS IF YOU STILL NEED aftc-modules or use SRC file includes)
    // NOTE: Alternatively use aftc.js for ES5 - npm i aftc.js

    constructor(ele) {

        this.dom = {
            fps: false
        }

        this.fpsStack = false;
        this.stackSize = 60;
        this.index = 0;

        this.last = 0;
        this.now = 0;

        this.delta = 0;

        this.currentFrameFps = 0;

        this.total = 0;
        this.averageFps = 0;

        this.i = 0;

        if (ele){
            this.dom.fps = ele;
        }

        this.fpsStack = new Float32Array(this.stackSize);

        this.update();
    }




    update(){
        this.now = performance.now();

        this.delta = (this.now - this.last) / 1000;
        this.currentFrameFps = 1/this.delta;
        // log("currentFrameFps = " + this.currentFrameFps);

        this.fpsStack[this.index] = this.currentFrameFps;

        this.total = 0;
        for(this.i=0; this.i < this.stackSize; this.i++){
            this.total += this.fpsStack[this.i];
        }

        this.averageFps = Math.round( this.total/this.stackSize );

        if (this.dom.fps){
            this.dom.fps.innerText = this.averageFps;
        }

        this.last = this.now;

        this.index++;
        if (this.index >= this.stackSize){
            this.index = 0;
        }

        requestAnimationFrame(()=>{
            this.update();
        });
    }


    getFps(){
        return this.averageFps;
    }
}

function GetGUID() {
    function Amiga() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }

    return Amiga() + Amiga() + '-' + Amiga() + '-' + Amiga() + '-' +
        Amiga() + '-' + Amiga() + Amiga() + Amiga();
}
function GetUID(len) {
    if (len > 34){
        console.error("GetUID(length): Limit error: Length must be 34 or lower");
    } else {
        return Math.random().toString(36).substr(2, len);
    }
}
function IsAlphaNumeric(v) {
    return !(/\W/.test(v));
}
function IsArray(input) {
    return !!input && input.constructor === Array;
    //return arr.constructor === Array;
}
function IsBool(input) {
    if (typeof (input) === "boolean") {
        return true;
    } else {
        return false;
    }
}
function IsBoolean(input) {
    if (typeof (input) === "boolean") {
        return true;
    } else {
        return false;
    }
}
function IsNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
function IsNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
function CutStringTo(s, len) {
    return s.substring(0, len);
}
function EscapeHTML(str) {
    if (typeof (str) != "string") { console.error("escape(arg): usage error: arg needs to be a string!"); return false; }

    let replacements = {
        "<": "&lt;",
        ">": "&gt;",
        "&": "&amp;",
        "\"": "&quot;",
        "`": "&#039;"
    };
    return str.replace(/[<>&"]/g, function (character) {
        return replacements[character];
    });
}
function GetAnchor(url) {
    if (!url) { url = window.location.href; }
    let anchorAvailable = isInString("#", url);
    if (anchorAvailable) {
        return url.slice(url.lastIndexOf('#') + 1);
    } else {
        return false;
    }
}
/**
 * @function: GetAnchor(url)
 * @desc: Get anchor from url
 * @param string url: The url to get the anchor from
 * @link:
 */
function GetCleanJSONString (s) {
    // preserve newlines, etc - use valid JSON
    s = s.replace(/\\n/g, "\\n")
        .replace(/\\'/g, "\\'")
        .replace(/\\"/g, '\\"')
        .replace(/\\&/g, "\\&")
        .replace(/\\r/g, "\\r")
        .replace(/\\t/g, "\\t")
        .replace(/\\b/g, "\\b")
        .replace(/\\f/g, "\\f");
    // remove non-printable and other non-valid JSON chars
    s = s.replace(/[\u0000-\u0019]+/g, "");
    return s;
}
function GetFileExtension(input) {
    return input.slice((input.lastIndexOf(".") - 1 >>> 0) + 2);
}
function GetFileExtension2(str) {
    // Needs improving
    let ext = str.split('.').pop();
    return ext;
}
function GetLastPartOfUrl(url) {
    if (!url) {
        url = window.location.href;
    }
    let part = url.substring(url.lastIndexOf('/') + 1);
    return part;
}
function GetRandomString(len) {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    for (let i = 0; i < len; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
}

function GetStringBetween(str, start, end) {
    return str.split(start).pop().split(end).shift().trim();
}
/**
 * @function: getStringBetween(input,start,end)
 * @desc: Gets a string between two other strings
 * @param string input: input string to check
 * @param string start: start string marker
 * @param string end: end string marker
 * @link: https://codepen.io/AllForTheCode/pen/xxxxxxx
 */
function getStringsBetween2(str, start, end) {
    let orig = str;
    let results = [];
    // log(orig);
    // log("--------");

    function getBetween() {
        // log("CHECKING: " + str);
        let startMatchIndex = str.indexOf(start); // Find start match
        // log("startMatchIndex: " + startMatchIndex);
        if (startMatchIndex === -1) { return false; }

        let startCutIndex = start.length + startMatchIndex; // calc start cut index
        // log("startCutIndex: " + startCutIndex);

        str = str.substring(startCutIndex, str.length); // LTrim to start cut index
        // log("CUT: " + str);

        let endMatchIndex = str.indexOf(end); // find end match index
        // log("endMatchIndex: " + endMatchIndex);
        if (endMatchIndex === -1) { return false; }

        let between = str.substring(0, endMatchIndex); // get string between
        // log("between: " + between);
        let endCutIndex = end.length + endMatchIndex;
        //log("endCutIndex: " + endCutIndex);
        str = str.substring(endCutIndex, str.length); // cut off end string
        //log("FINAL: " + str);
        return between;
    }
    let lim = 500; // Want to loop forever? 500 seems like areasonable limit
    let pos = 0;
    let result = true;
    while (pos <= lim && result != false) {
        pos++;
        result = getBetween();
        if (result) {
            //log("between["+i+"] = " + result);
            results.push(result);
            //log("");
        }
    }
    return results;
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

/**
 * @function: getStringsBetween(str,start,end)
 * @desc: Gets all strings between two other strings (multi match)
 * @param string str: input string to check
 * @param string start: start string marker
 * @param string end: end string marker
 * @link: https://codepen.io/AllForTheCode/pen/xxxxxxx
 */
function GetWordCount(str) {
    return str.split(/\S+/).length - 1;
}
function InString(find,source) { return source.indexOf(find) !== -1; }
function IsInString(find,source) { return source.indexOf(find) !== -1; }
function LTrimBy(str, by) {
    return str.substring(by, str.length);
}
function RemoveFileFromPath(path) {
    //let pa = '/this/is/a/folder/aFile.txt';
    let r = /[^\/]*$/;
    path = path.replace(r, '');
    return path;
}
function RTrimBy(str, trimBy) {
    return (str.substring(0, str.length - trimBy));
}
function TrimStringBy(str, trimBy) {
    return (str.substring(0, str.length - trimBy));
}
function UcFirst(s) {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}
function IsEmail (email) {
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}


/***/ }),

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_advance-string-index.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_advance-string-index.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/modules/_string-at.js")(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_classof.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.11' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_fix-re-wks.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_fix-re-wks.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(/*! ./es6.regexp.exec */ "./node_modules/core-js/modules/es6.regexp.exec.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_flags.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_flags.js ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_function-to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_function-to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('native-function-to-string', Function.toString);


/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var SRC = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('src');
var $toString = __webpack_require__(/*! ./_function-to-string */ "./node_modules/core-js/modules/_function-to-string.js");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "./node_modules/core-js/modules/_regexp-exec-abstract.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_regexp-exec-abstract.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_regexp-exec.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_regexp-exec.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/modules/_string-at.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-at.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.exec.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.exec.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");
__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js")({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.replace.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.replace.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ "./node_modules/core-js/modules/_advance-string-index.js");
var regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "./src/Website/About/About.js":
/*!************************************!*\
  !*** ./src/Website/About/About.js ***!
  \************************************/
/*! exports provided: About */
/*! exports used: About */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return About; });
/* harmony import */ var aftc_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aftc-modules */ "./node_modules/aftc-modules/aftc-modules.js");
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Page */ "./src/Website/Page.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



let About = /*#__PURE__*/function (_Page) {
  _inherits(About, _Page);

  // var defs
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  function About() {
    _classCallCheck(this, About);

    return _possibleConstructorReturn(this, _getPrototypeOf(About).call(this)); // log("About()");
  } // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


  return About;
}(_Page__WEBPACK_IMPORTED_MODULE_1__[/* Page */ "a"]);

/***/ }),

/***/ "./src/Website/Contact/Contact.js":
/*!****************************************!*\
  !*** ./src/Website/Contact/Contact.js ***!
  \****************************************/
/*! exports provided: Contact */
/*! exports used: Contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Contact; });
/* harmony import */ var aftc_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aftc-modules */ "./node_modules/aftc-modules/aftc-modules.js");
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Page */ "./src/Website/Page.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



let Contact = /*#__PURE__*/function (_Page) {
  _inherits(Contact, _Page);

  // var defs
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  function Contact() {
    _classCallCheck(this, Contact);

    return _possibleConstructorReturn(this, _getPrototypeOf(Contact).call(this)); // log("Contact()");
  } // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


  return Contact;
}(_Page__WEBPACK_IMPORTED_MODULE_1__[/* Page */ "a"]);

/***/ }),

/***/ "./src/Website/Home/Home.js":
/*!**********************************!*\
  !*** ./src/Website/Home/Home.js ***!
  \**********************************/
/*! exports provided: Home */
/*! exports used: Home */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Home; });
/* harmony import */ var aftc_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aftc-modules */ "./node_modules/aftc-modules/aftc-modules.js");
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Page */ "./src/Website/Page.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



let Home = /*#__PURE__*/function (_Page) {
  _inherits(Home, _Page);

  // var defs
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, _getPrototypeOf(Home).call(this)); // log("Home()");
  } // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


  return Home;
}(_Page__WEBPACK_IMPORTED_MODULE_1__[/* Page */ "a"]);

/***/ }),

/***/ "./src/Website/NavigationHandler.js":
/*!******************************************!*\
  !*** ./src/Website/NavigationHandler.js ***!
  \******************************************/
/*! exports provided: NavigationHandler */
/*! exports used: NavigationHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationHandler; });
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var aftc_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aftc-modules */ "./node_modules/aftc-modules/aftc-modules.js");


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


let NavigationHandler = /*#__PURE__*/function () {
  // var defs
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  function NavigationHandler() {
    _classCallCheck(this, NavigationHandler);

    _defineProperty(this, "dom", {
      home: false,
      about: false,
      contact: false,
      nav: false
    });

    _defineProperty(this, "siteName", "PureJS SPA");

    _defineProperty(this, "siteDomain", "dev1.com");

    this.dom.home = document.getElementById("home");
    this.dom.about = document.getElementById("about");
    this.dom.contact = document.getElementById("contact");
    this.dom.nav = document.getElementById("nav");
    let navItems = this.dom.nav.getElementsByTagName("a");

    for (let i = 0; i < navItems.length; i++) {
      let navItem = navItems[i];
      navItem.addEventListener("click", e => {
        // Prevent browser from redirecting on link click
        e.preventDefault();
        this.navigateTo(e.target.href);
      });
    } // Prevent browser from reloading on history -1 +1


    window.onpopstate = e => {
      e.preventDefault();
      Object(aftc_modules__WEBPACK_IMPORTED_MODULE_1__[/* log */ "a"])(e);
    }; // Load browsers route - start page choice


    let route = this.getRoute();
    this.showPage(route);
  } // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


  _createClass(NavigationHandler, [{
    key: "navigateTo",
    value: function navigateTo(link) {
      let route = this.getRoute(link);
      this.showPage(route);
    } // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  }, {
    key: "showPage",
    value: function showPage(route) {
      // Set browser title via history push state (same as old flash days programming js)
      let title = "";

      if (route == "") {
        title = this.siteName;
      } else {
        title = this.siteName + " - " + route;
      }

      let state = {
        "pageTitle": title
      };
      history.pushState(state, title, route);
      document.title = title; // show appropriate page
      // Your simple router

      switch (route) {
        case "":
          this.dom.home.style.display = "block";
          this.dom.about.style.display = "none";
          this.dom.contact.style.display = "none";
          break;

        case "about":
          this.dom.home.style.display = "none";
          this.dom.about.style.display = "block";
          this.dom.contact.style.display = "none";
          break;

        case "contact":
          this.dom.home.style.display = "none";
          this.dom.about.style.display = "none";
          this.dom.contact.style.display = "block";
          break;
      }
    } // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  }, {
    key: "getRoute",
    value: function getRoute(link) {
      if (link == "" || !link || link == undefined) {
        link = self.location.href;
      }

      let route = "";
      route = link.replace("http://", "");
      route = route.replace("https://", "");
      route = route.replace("www", "");
      route = route.replace(this.siteDomain + "/", ""); // log("route = " + route);

      return route;
    } // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  }]);

  return NavigationHandler;
}();

/***/ }),

/***/ "./src/Website/Page.js":
/*!*****************************!*\
  !*** ./src/Website/Page.js ***!
  \*****************************/
/*! exports provided: Page */
/*! exports used: Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page; });
/* harmony import */ var aftc_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aftc-modules */ "./node_modules/aftc-modules/aftc-modules.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


let Page = /*#__PURE__*/function () {
  function Page() {
    _classCallCheck(this, Page);
  }

  _createClass(Page, [{
    key: "show",
    value: function show() {
      Object(aftc_modules__WEBPACK_IMPORTED_MODULE_0__[/* log */ "a"])("Show()");
    }
  }, {
    key: "hide",
    value: function hide() {
      Object(aftc_modules__WEBPACK_IMPORTED_MODULE_0__[/* log */ "a"])("hide()");
    }
  }]);

  return Page;
}();

/***/ }),

/***/ "./src/Website/Website.js":
/*!********************************!*\
  !*** ./src/Website/Website.js ***!
  \********************************/
/*! exports provided: Website */
/*! exports used: Website */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Website; });
/* harmony import */ var aftc_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aftc-modules */ "./node_modules/aftc-modules/aftc-modules.js");
/* harmony import */ var _Home_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home/Home */ "./src/Website/Home/Home.js");
/* harmony import */ var _About_About__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./About/About */ "./src/Website/About/About.js");
/* harmony import */ var _Contact_Contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Contact/Contact */ "./src/Website/Contact/Contact.js");
/* harmony import */ var _NavigationHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NavigationHandler */ "./src/Website/NavigationHandler.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






let Website = // var defs
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function Website() {
  _classCallCheck(this, Website);

  _defineProperty(this, "pages", {
    home: false,
    about: false,
    contact: false
  });

  _defineProperty(this, "navHandler", false);

  // log("Website()");
  this.pages.home = new _Home_Home__WEBPACK_IMPORTED_MODULE_1__[/* Home */ "a"]();
  this.pages.about = new _About_About__WEBPACK_IMPORTED_MODULE_2__[/* About */ "a"]();
  this.pages.contact = new _Contact_Contact__WEBPACK_IMPORTED_MODULE_3__[/* Contact */ "a"]();
  this.navHandler = new _NavigationHandler__WEBPACK_IMPORTED_MODULE_4__[/* NavigationHandler */ "a"]();
} // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var aftc_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aftc-modules */ "./node_modules/aftc-modules/aftc-modules.js");
/* harmony import */ var _Website_Website__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Website/Website */ "./src/Website/Website.js");


Object(aftc_modules__WEBPACK_IMPORTED_MODULE_0__[/* onReady */ "b"])(() => {
  new _Website_Website__WEBPACK_IMPORTED_MODULE_1__[/* Website */ "a"]();
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FmdGMtbW9kdWxlcy9hZnRjLW1vZHVsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hZHZhbmNlLXN0cmluZy1pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY2xhc3NvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jdHguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZGVmaW5lZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2V4cG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19mYWlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19maXgtcmUtd2tzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2ZsYWdzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2Z1bmN0aW9uLXRvLXN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faGFzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2hpZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXMtb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2xpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcmVkZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcmVnZXhwLWV4ZWMtYWJzdHJhY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcmVnZXhwLWV4ZWMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2hhcmVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3N0cmluZy1hdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWxlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3VpZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL193a3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLmV4ZWMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLnJlcGxhY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1dlYnNpdGUvQWJvdXQvQWJvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1dlYnNpdGUvQ29udGFjdC9Db250YWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9XZWJzaXRlL0hvbWUvSG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvV2Vic2l0ZS9OYXZpZ2F0aW9uSGFuZGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvV2Vic2l0ZS9QYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9XZWJzaXRlL1dlYnNpdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIkFib3V0IiwiUGFnZSIsIkNvbnRhY3QiLCJIb21lIiwiTmF2aWdhdGlvbkhhbmRsZXIiLCJob21lIiwiYWJvdXQiLCJjb250YWN0IiwibmF2IiwiZG9tIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm5hdkl0ZW1zIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJpIiwibGVuZ3RoIiwibmF2SXRlbSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJuYXZpZ2F0ZVRvIiwidGFyZ2V0IiwiaHJlZiIsIndpbmRvdyIsIm9ucG9wc3RhdGUiLCJsb2ciLCJyb3V0ZSIsImdldFJvdXRlIiwic2hvd1BhZ2UiLCJsaW5rIiwidGl0bGUiLCJzaXRlTmFtZSIsInN0YXRlIiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsInN0eWxlIiwiZGlzcGxheSIsInVuZGVmaW5lZCIsInNlbGYiLCJsb2NhdGlvbiIsInJlcGxhY2UiLCJzaXRlRG9tYWluIiwiV2Vic2l0ZSIsInBhZ2VzIiwibmF2SGFuZGxlciIsIm9uUmVhZHkiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJDQUEyQyxRQUFROztBQUVuRCxvQkFBb0IsdUNBQXVDO0FBQzNEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBLG9CQUFvQix1Q0FBdUM7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLDRCQUE0QixXQUFXO0FBQ3ZDOztBQUVPO0FBQ1Asd0NBQXdDLGFBQWEsRUFBRSxPQUFPLGNBQWM7QUFDNUU7QUFDTztBQUNQLDRCQUE0QixXQUFXO0FBQ3ZDO0FBQ087QUFDUDtBQUNBOzs7QUFHTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ087QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFTztBQUNQO0FBQ0EsbURBQW1ELE9BQU87QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNPO0FBQ1Asd0NBQXdDLGFBQWEsRUFBRSxPQUFPLGNBQWM7QUFDNUU7QUFDTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR087QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPOztBQUVQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDTywwQkFBMEIsZ0NBQWdDO0FBQzFEO0FBQ1AsOEJBQThCLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNPO0FBQ1A7QUFDQTtBQUNPLDBCQUEwQixnQ0FBZ0M7QUFDMUQ7QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR087QUFDUDtBQUNBLDJDQUEyQyxvQkFBb0IsS0FBSztBQUNwRTtBQUNBO0FBQ087QUFDUCw0Q0FBNEM7QUFDNUMseUJBQXlCLDRCQUE0QjtBQUNyRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR087QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUEsbUJBQW1CLFFBQVE7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHTztBQUNQLGdFQUFnRTtBQUNoRTtBQUNBO0FBQ087QUFDUDs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQSxtRkFBbUY7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZFQUE2RSx1QkFBdUI7QUFDcEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRkFBZ0Y7QUFDaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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LEdBQWtCLElBQUlGLHVEQUFKLEVBQWxCO0FBQ0EsT0FBS3dDLEtBQUwsQ0FBV3JDLEtBQVgsR0FBbUIsSUFBSU4sMERBQUosRUFBbkI7QUFDQSxPQUFLMkMsS0FBTCxDQUFXcEMsT0FBWCxHQUFxQixJQUFJTCxnRUFBSixFQUFyQjtBQUVBLE9BQUswQyxVQUFMLEdBQWtCLElBQUl4Qyw0RUFBSixFQUFsQjtBQUNILENBbkJMLENBb0JJO0FBcEJKLEM7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0F5QyxvRUFBTyxDQUFDLE1BQUk7QUFDUixNQUFJSCxnRUFBSjtBQUNILENBRk0sQ0FBUCxDIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIGFmdGMtbW9kdWxlcyB2MS4yLjVcbi8vIEF1dGhvcjogRGFyY2V5QGFmdGMuaW9cbmV4cG9ydCBmdW5jdGlvbiBBbmltYXRpb25GcmFtZVN0YWNrKCkge1xyXG4gICAgdmFyIG1lID0gdGhpcztcclxuXHJcbiAgICB0aGlzLmluaXQgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmICghd2luZG93KXtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkFuaW1hdGlvbkZyYW1lU3RhY2soKTogRVJST1IgLSBVbmFibGUgdG8gYWNjZXNzIHdpbmRvdyFcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKCF3aW5kb3cuYWZ0Y0FuaW1TdGFjayl7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWZ0Y0FuaW1TdGFjayA9IHtcclxuICAgICAgICAgICAgICAgICAgICBmaXJzdFJ1bjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YWNrOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICB1aWQ6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSo5OTk5OSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHdpbmRvdy5hZnRjQW5pbVN0YWNrLmZpcnN0UnVuKXtcclxuICAgICAgICAgICAgd2luZG93LmFmdGNBbmltU3RhY2suZmlyc3RSdW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5wcm9jZXNzRm5TdGFjaygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnN0YXJ0ID0gZnVuY3Rpb24oKXtcclxuICAgICAgICB3aW5kb3cuYWZ0Y0FuaW1TdGFjay5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnByb2Nlc3NGblN0YWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zdG9wID0gZnVuY3Rpb24oKXtcclxuICAgICAgICB3aW5kb3cuYWZ0Y0FuaW1TdGFjay5lbmFibGVkID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5kaXNwb3NlID0gZnVuY3Rpb24oKXtcclxuICAgICAgICBpZiAod2luZG93LmFmdGNBbmltU3RhY2spe1xyXG4gICAgICAgICAgICB3aW5kb3cuYWZ0Y0FuaW1TdGFjay5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHdpbmRvdy5hZnRjQW5pbVN0YWNrLnN0YWNrID0gW107XHJcbiAgICAgICAgICAgIGRlbGV0ZSB3aW5kb3cuYWZ0Y0FuaW1TdGFjay5zdGFjaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5wcm9jZXNzRm5TdGFjayA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYgKCF3aW5kb3cuYWZ0Y0FuaW1TdGFjay5lbmFibGVkKXsgcmV0dXJuOyB9XHJcblxyXG4gICAgICAgIGZvcihsZXQgaT0wOyBpIDwgd2luZG93LmFmdGNBbmltU3RhY2suc3RhY2subGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICB3aW5kb3cuYWZ0Y0FuaW1TdGFjay5zdGFja1tpXS5mbigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShtZS5wcm9jZXNzRm5TdGFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5hZGQgPSBmdW5jdGlvbih1aWQsZm4pe1xyXG4gICAgICAgIHdpbmRvdy5hZnRjQW5pbVN0YWNrLnN0YWNrLnB1c2goe1xyXG4gICAgICAgICAgICB1aWQ6IHVpZCxcclxuICAgICAgICAgICAgZm46IGZuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5yZW1vdmUgPSBmdW5jdGlvbih1aWQpe1xyXG4gICAgICAgIGZvcihsZXQgaT0wOyBpIDwgd2luZG93LmFmdGNBbmltU3RhY2suc3RhY2subGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBpZiAod2luZG93LmFmdGNBbmltU3RhY2suc3RhY2tbaV0udWlkID09PSB1aWQpe1xyXG4gICAgICAgICAgICAgICAgLy8gd2luZG93LmFmdGNBbmltU3RhY2suc3RhY2sgPSBhcnJheVJlbW92ZUl0ZW0od2luZG93LmFmdGNBbmltU3RhY2suc3RhY2ssZm4pO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmFmdGNBbmltU3RhY2suc3RhY2suc3BsaWNlKGksMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5pbml0KCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZnVuY3Rpb246IEFuaW1hdGlvbkZyYW1lU3RhY2soKVxyXG4gKiBAZGVzYzogR2l2ZXMgZWFzeSBhY2Nlc3MgdG8gYSBzaW5nbGUgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIGxvb3Agd2hpY2ggeW91IGNhbiBhZGQgZnVuY3Rpb25zIHRvIHByb2Nlc3MgaW4gZWFjaCBsb29wLCBub3RlIHRoZSBmdW5jdGlvbiBzdGFjayBpcyBzdG9yZWQgb24gZ2xvYmFsIHdpbmRvdyBzY29wZVxyXG4gKiBAbWV0aG9kIGFkZDogYWRkIGEgZnVuY3Rpb24gdG8gdGhlIHN0YWNrIHRvIGJlIGV4ZWN1dGVkIG9uIGFuaW1hdGlvbkZyYW1lTG9vcFxyXG4gKiBAbWV0aG9kIHJlbW92ZTogcmVtb3ZlIGEgZnVuY3Rpb24gZnJvbSB0aGUgc3RhY2tcclxuICogQG1ldGhvZCBzdGFydDogc3RhcnQgdGhlIHJlcXVlc3RBbmltYXRpb25GcmFtZSBsb29wXHJcbiAqIEBtZXRob2Qgc3RvcDogc3RvcCB0aGUgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIGxvb3BcclxuICogQG1ldGhvZCBkaXNwb3NlOiBkaXNwb3NlIG9mIGFsbCBmdW5jdGlvbnMgaW4gdGhlIGZ1bmN0aW9uIHN0YWNrXHJcbiAqIEBsaW5rOlxyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBBcmdzVG9PYmplY3QoZkFyZ3MsIG9iaiwgc3RyaWN0KSB7XHJcbiAgICBpZiAoZkFyZ3NbMF0gJiYgdHlwZW9mIChmQXJnc1swXSkgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICBsZXQgYXJncyA9IGZBcmdzWzBdO1xyXG5cclxuICAgICAgICBpZiAoc3RyaWN0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgc3RyaWN0ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFyZ3MgJiYgdHlwZW9mIChhcmdzKSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gYXJncykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0cmljdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmpba2V5XSA9IGFyZ3Nba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJhcmdzVG9PYmplY3QoKTogQXJndW1lbnQgW1wiICsga2V5ICsgXCJdIGlzIG5vdCBzdXBwb3J0ZWQuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqW2tleV0gPSBhcmdzW2tleV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBmdW5jdGlvbjogYXJnc1RvT2JqZWN0KGZBcmdzLCBvYmosIHN0cmljdClcclxuICogQGRlc2M6IFF1aWNrIGFuZCBlYXN5IGFyZ3MgdG8gb2JqZWN0XHJcbiAqIEBwYXJhbSBhcmdzIG9iamVjdDogYXJndW1lbnRzIChmcm9tIHRoZSBmdW5jdGlvbiBzdHJ1Y3R1cmUsIHR5cGljYWxseSBjb2RlIHdpbGwgYWx3YXlzIGJlICdhcmd1bWVudHMnXHJcbiAqIEBwYXJhbSBvYmogb2JqZWN0OiBvYmplY3QgdG8gcGFyc2UgaW50b1xyXG4gKiBAcGFyYW0gc3RyaWN0IGJvb2xlYW46IGNvbnNvbGUud2FybiBhbnkgYXJncyB0aGF0IGhhdmUgYmVlbiBzdXBwbGllZCB0aGF0IGRvbid0IGV4aXN0IGluIGFyZ3NcclxuICogQHJldHVybjogbnVsbFxyXG4gKiBAYWxpYXM6IGFyZ3NUb1xyXG4gKiBAbGluazogaHR0cHM6Ly9jb2RlcGVuLmlvL0FsbEZvclRoZUNvZGUvcGVuL1BhcWJLTlxyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBBcnJheUNsZWFyKGFycikge1xyXG4gICAgd2hpbGUgKGFyci5sZW5ndGggPiAwKSB7IGFyci5wb3AoKTsgfVxyXG59XHJcblxuZXhwb3J0IGZ1bmN0aW9uIEFycmF5Q29udGFpbnMobmVlZGxlLCBoYXlzdGFjaykge1xyXG4gICAgaWYgKGhheXN0YWNrLmluZGV4T2YobmVlZGxlKSA+IC0xKSB7IHJldHVybiB0cnVlOyB9IGVsc2UgeyByZXR1cm4gZmFsc2U7IH1cclxufVxuZXhwb3J0IGZ1bmN0aW9uIGFycmF5RW1wdHkoYXJyKSB7XHJcbiAgICB3aGlsZSAoYXJyLmxlbmd0aCA+IDApIHsgYXJyLnBvcCgpOyB9XHJcbn1cbmV4cG9ydCBmdW5jdGlvbiBBcnJheUdldE1heChhcnIpIHtcclxuICAgIHJldHVybiBNYXRoLm1heC5hcHBseShNYXRoLCBhcnIpO1xyXG59XHJcblxyXG5cbmV4cG9ydCBmdW5jdGlvbiBBcnJheUdldE1pbihhcnIpIHtcclxuICAgIHJldHVybiBNYXRoLm1pbi5hcHBseShNYXRoLCBhcnIpO1xyXG59XG5leHBvcnQgZnVuY3Rpb24gQXJyYXlNYXgoYXJyKSB7XHJcbiAgICByZXR1cm4gTWF0aC5tYXguYXBwbHkoTWF0aCwgYXJyKTtcclxufVxuZXhwb3J0IGZ1bmN0aW9uIEFycmF5TWluKGFycikge1xyXG4gICAgcmV0dXJuIE1hdGgubWluLmFwcGx5KE1hdGgsIGFycik7XHJcbn1cbmV4cG9ydCBmdW5jdGlvbiBBcnJheVJlbW92ZUluZGV4KGFycixpbmRleCl7XHJcbiAgICBhcnIuc3BsaWNlKGluZGV4LDEpO1xyXG59XHJcblxuZXhwb3J0IGZ1bmN0aW9uIEFycmF5UmVtb3ZlSXRlbShhcnIsIHZhbHVlKSB7XHJcbiAgICByZXR1cm4gYXJyLmZpbHRlcihmdW5jdGlvbihpdGVtKXtcclxuICAgICAgICByZXR1cm4gaXRlbSAhPSB2YWx1ZTtcclxuICAgIH0pO1xyXG59XG5leHBvcnQgZnVuY3Rpb24gQXJyYXlTaHVmZmxlKGFycikge1xyXG4gICAgbGV0IGN1cnJlbnRJbmRleCA9IGFyci5sZW5ndGgsXHJcbiAgICAgICAgdGVtcG9yYXJ5VmFsdWUsIHJhbmRvbUluZGV4O1xyXG5cclxuICAgIC8vIFdoaWxlIHRoZXJlIHJlbWFpbiBlbGVtZW50cyB0byBzaHVmZmxlLi4uXHJcbiAgICB3aGlsZSAoMCAhPT0gY3VycmVudEluZGV4KSB7XHJcblxyXG4gICAgICAgIC8vIFBpY2sgYSByZW1haW5pbmcgZWxlbWVudC4uLlxyXG4gICAgICAgIHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY3VycmVudEluZGV4KTtcclxuICAgICAgICBjdXJyZW50SW5kZXggLT0gMTtcclxuXHJcbiAgICAgICAgLy8gQW5kIHN3YXAgaXQgd2l0aCB0aGUgY3VycmVudCBlbGVtZW50LlxyXG4gICAgICAgIHRlbXBvcmFyeVZhbHVlID0gYXJyW2N1cnJlbnRJbmRleF07XHJcbiAgICAgICAgYXJyW2N1cnJlbnRJbmRleF0gPSBhcnJbcmFuZG9tSW5kZXhdO1xyXG4gICAgICAgIGFycltyYW5kb21JbmRleF0gPSB0ZW1wb3JhcnlWYWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYXJyO1xyXG59XHJcblxuZXhwb3J0IGZ1bmN0aW9uIEFycmF5U2h1ZmZsZTIoYSkge1xyXG4gICAgbGV0IHgsIHQsIHIgPSBuZXcgVWludDMyQXJyYXkoMSk7XHJcbiAgICBmb3IgKGxldCBpID0gMCwgYyA9IGEubGVuZ3RoIC0gMSwgbSA9IGEubGVuZ3RoOyBpIDwgYzsgaSsrICwgbS0tKSB7XHJcbiAgICAgICAgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhyKTtcclxuICAgICAgICB4ID0gTWF0aC5mbG9vcihyIC8gNjU1MzYgLyA2NTUzNiAqIG0pICsgaTtcclxuICAgICAgICB0ID0gYVtpXSwgYVtpXSA9IGFbeF0sIGFbeF0gPSB0O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBhO1xyXG59XG5leHBvcnQgZnVuY3Rpb24gSXNJbkFycmF5KG5lZWRsZSwgaGF5c3RhY2spIHtcclxuICAgIGlmIChoYXlzdGFjay5pbmRleE9mKG5lZWRsZSkgPiAtMSkgeyByZXR1cm4gdHJ1ZTsgfSBlbHNlIHsgcmV0dXJuIGZhbHNlOyB9XHJcbn1cbmV4cG9ydCBmdW5jdGlvbiBJc1N0cmluZ0luQXJyYXkobmVlZGxlLCBoYXlzdGFjaykge1xyXG4gICAgcmV0dXJuIChuZXcgUmVnRXhwKCcoJyArIGhheXN0YWNrLmpvaW4oJ3wnKS5yZXBsYWNlKC9cXC4vZywgJ1xcXFwuJykgKyAnKSQnKSkudGVzdChuZWVkbGUpO1xyXG59XHJcblxuZXhwb3J0IGZ1bmN0aW9uIEdldEJyb3dzZXIgKCkge1xyXG4gICAgbGV0IHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudCwgdGVtLCBNID0gdWEubWF0Y2goLyhvcGVyYXxjaHJvbWV8c2FmYXJpfGZpcmVmb3h8bXNpZXx0cmlkZW50KD89XFwvKSlcXC8/XFxzKihcXGQrKS9pKSB8fCBbXTtcclxuICAgIGlmICgvdHJpZGVudC9pLnRlc3QoTVsxXSkpIHtcclxuICAgICAgICB0ZW0gPSAvXFxicnZbIDpdKyhcXGQrKS9nLmV4ZWModWEpIHx8IFtdO1xyXG4gICAgICAgIHJldHVybiAnSUUnO1xyXG4gICAgfVxyXG4gICAgaWYgKE1bMV0gPT09ICdDaHJvbWUnKSB7XHJcbiAgICAgICAgdGVtID0gdWEubWF0Y2goL1xcYk9QUlxcLyhcXGQrKS8pO1xyXG4gICAgICAgIGlmICh0ZW0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gJ09wZXJhJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBNID0gTVsyXSA/IFtNWzFdLCBNWzJdXSA6IFtuYXZpZ2F0b3IuYXBwTmFtZSwgbmF2aWdhdG9yLmFwcFZlcnNpb24sICctPyddO1xyXG4gICAgaWYgKCh0ZW0gPSB1YS5tYXRjaCgvdmVyc2lvblxcLyhcXGQrKS9pKSkgIT0gbnVsbCkge1xyXG4gICAgICAgIE0uc3BsaWNlKDEsIDEsIHRlbVsxXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gTVswXTtcclxufVxuZXhwb3J0IGZ1bmN0aW9uIEdldEJyb3dzZXJYKCl7XHJcbiAgICBsZXQgc3VwcG9ydFBhZ2VPZmZzZXQgPSB3aW5kb3cucGFnZVhPZmZzZXQgIT09IHVuZGVmaW5lZDtcclxuICAgIGxldCBpc0NTUzFDb21wYXQgPSAoKGRvY3VtZW50LmNvbXBhdE1vZGUgfHwgXCJcIikgPT09IFwiQ1NTMUNvbXBhdFwiKTtcclxuXHJcbiAgICBsZXQgeCA9IHN1cHBvcnRQYWdlT2Zmc2V0ID8gd2luZG93LnBhZ2VYT2Zmc2V0IDogaXNDU1MxQ29tcGF0ID8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQgOiBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQ7XHJcbiAgICAvLyBsZXQgeSA9IHN1cHBvcnRQYWdlT2Zmc2V0ID8gd2luZG93LnBhZ2VZT2Zmc2V0IDogaXNDU1MxQ29tcGF0ID8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA6IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xyXG5cclxuICAgIHJldHVybiB4O1xyXG59XHJcblxyXG5cbmV4cG9ydCBmdW5jdGlvbiBHZXRCcm93c2VyWSgpe1xyXG4gICAgbGV0IHN1cHBvcnRQYWdlT2Zmc2V0ID0gd2luZG93LnBhZ2VYT2Zmc2V0ICE9PSB1bmRlZmluZWQ7XHJcbiAgICBsZXQgaXNDU1MxQ29tcGF0ID0gKChkb2N1bWVudC5jb21wYXRNb2RlIHx8IFwiXCIpID09PSBcIkNTUzFDb21wYXRcIik7XHJcblxyXG4gICAgLy8gbGV0IHggPSBzdXBwb3J0UGFnZU9mZnNldCA/IHdpbmRvdy5wYWdlWE9mZnNldCA6IGlzQ1NTMUNvbXBhdCA/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0IDogZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0O1xyXG4gICAgbGV0IHkgPSBzdXBwb3J0UGFnZU9mZnNldCA/IHdpbmRvdy5wYWdlWU9mZnNldCA6IGlzQ1NTMUNvbXBhdCA/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgOiBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcclxuXHJcbiAgICByZXR1cm4geTtcclxufVxyXG5cbmV4cG9ydCBmdW5jdGlvbiBJc0luVmlld3BvcnQoZWwpe1xyXG4gICAgbGV0IHRvcCA9IGVsLm9mZnNldFRvcDtcclxuICAgIGxldCBsZWZ0ID0gZWwub2Zmc2V0TGVmdDtcclxuICAgIGxldCB3aWR0aCA9IGVsLm9mZnNldFdpZHRoO1xyXG4gICAgbGV0IGhlaWdodCA9IGVsLm9mZnNldEhlaWdodDtcclxuXHJcbiAgICB3aGlsZShlbC5vZmZzZXRQYXJlbnQpIHtcclxuICAgICAgICBlbCA9IGVsLm9mZnNldFBhcmVudDtcclxuICAgICAgICB0b3AgKz0gZWwub2Zmc2V0VG9wO1xyXG4gICAgICAgIGxlZnQgKz0gZWwub2Zmc2V0TGVmdDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIHRvcCA8ICh3aW5kb3cucGFnZVlPZmZzZXQgKyB3aW5kb3cuaW5uZXJIZWlnaHQpICYmXHJcbiAgICAgICAgbGVmdCA8ICh3aW5kb3cucGFnZVhPZmZzZXQgKyB3aW5kb3cuaW5uZXJXaWR0aCkgJiZcclxuICAgICAgICAodG9wICsgaGVpZ2h0KSA+IHdpbmRvdy5wYWdlWU9mZnNldCAmJlxyXG4gICAgICAgIChsZWZ0ICsgd2lkdGgpID4gd2luZG93LnBhZ2VYT2Zmc2V0XHJcbiAgICApO1xyXG5cclxuXHJcbiAgICAvLyBsZXQgYm91bmRpbmcgPSBlbGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAvLyByZXR1cm4gKFxyXG4gICAgLy8gICAgIGJvdW5kaW5nLnRvcCA+PSAwICYmXHJcbiAgICAvLyAgICAgYm91bmRpbmcubGVmdCA+PSAwICYmXHJcbiAgICAvLyAgICAgYm91bmRpbmcuYm90dG9tIDw9ICh3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkgJiZcclxuICAgIC8vICAgICBib3VuZGluZy5yaWdodCA8PSAod2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoKVxyXG4gICAgLy8gKTtcclxufVxyXG5cbmV4cG9ydCBmdW5jdGlvbiBCb29sVG9TdHJpbmcgKGJvb2wpIHtcclxuXHJcbiAgICBpZiAoIWJvb2wgfHwgYm9vbCA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiAoYm9vbCkgIT0gXCJib29sZWFuXCIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkFGVEMuanM6IENvbnZlcnNpb24uanM6IGJvb2xUb1N0cmluZyhzdHIpOiBFcnJvciAtIGlucHV0IGlzIG5vdCBhIGJvb2xlYW4hXCIpO1xyXG4gICAgICAgIHJldHVybiBcImVycm9yXCI7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGJvb2wpIHtcclxuICAgICAgICByZXR1cm4gXCJ0cnVlXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBcImZhbHNlXCI7XHJcbiAgICB9XHJcbn1cbmV4cG9ydCBmdW5jdGlvbiBCb29sVG9ZZXNObyAoYikge1xyXG5cclxuICAgIGlmICghYiB8fCBiID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIChiKSAhPSBcImJvb2xlYW5cIikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQm9vbFRvWWVzTm8oc3RyKTogRXJyb3IgLSBpbnB1dCBpcyBub3QgYSBib29sZWFuIVwiKTtcclxuICAgICAgICByZXR1cm4gXCJlcnJvclwiO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChiKSB7XHJcbiAgICAgICAgcmV0dXJuIFwieWVzXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBcIm5vXCI7XHJcbiAgICB9XHJcbn1cbmV4cG9ydCBmdW5jdGlvbiBEZWdUb1JhZChpbnB1dCkgeyByZXR1cm4gaW5wdXQgKiAoTWF0aC5QSSAvIDE4MCk7IH1cbmV4cG9ydCBmdW5jdGlvbiBIZXhUb1JnYiAoaGV4KSB7XHJcbiAgICBsZXQgcmVzdWx0ID0gL14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaS5leGVjKGhleCk7XHJcbiAgICByZXR1cm4gcmVzdWx0ID8ge1xyXG4gICAgICAgIHI6IHBhcnNlSW50KHJlc3VsdFsxXSwgMTYpLFxyXG4gICAgICAgIGc6IHBhcnNlSW50KHJlc3VsdFsyXSwgMTYpLFxyXG4gICAgICAgIGI6IHBhcnNlSW50KHJlc3VsdFszXSwgMTYpXHJcbiAgICB9IDogbnVsbDtcclxufVxuZXhwb3J0IGZ1bmN0aW9uIE51bVRvSGV4IChudW0pIHtcclxuICAgIHJldHVybiBudW0udG9TdHJpbmcoMTYpO1xyXG59XG5leHBvcnQgZnVuY3Rpb24gUmFkVG9EZWcoaW5wdXQpIHsgcmV0dXJuIGlucHV0ICogKDE4MCAvIE1hdGguUEkpOyB9XG5leHBvcnQgZnVuY3Rpb24gUkdCVG9IZXggKHIsIGcsIGIpIHtcclxuICAgIHJldHVybiAoKHIgPDwgMTYpIHwgKGcgPDwgOCkgfCBiKS50b1N0cmluZygxNik7XHJcbn1cclxuXG5leHBvcnQgZnVuY3Rpb24gUkdCVG9IZXgyIChyLCBnLCBiKSB7XHJcbiAgICBmdW5jdGlvbiBnZXRIZXgoYykge1xyXG4gICAgICAgIGxldCBoZXggPSBjLnRvU3RyaW5nKDE2KTtcclxuICAgICAgICByZXR1cm4gaGV4Lmxlbmd0aCA9PT0gMSA/IFwiMFwiICsgaGV4IDogaGV4O1xyXG4gICAgfVxyXG4gICAgbGV0IGhleCA9IFwiI1wiICsgZ2V0SGV4KHIpICsgZ2V0SGV4KGcpICsgZ2V0SGV4KGIpO1xyXG4gICAgaGV4ID0gaGV4LnRvVXBwZXJDYXNlKCk7XHJcbiAgICByZXR1cm4gaGV4O1xyXG59XG5leHBvcnQgZnVuY3Rpb24gU3RyaW5nVG9Cb29sIChzdHIpIHtcclxuXHJcbiAgICBpZiAoIXN0ciB8fCBzdHIgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgKHN0cikgIT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU3RyaW5nVG9Cb29sKHN0cik6IEVycm9yIC0gaW5wdXQgc3RyaW5nIGlzIG5vdCB2YWxpZCFcIik7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHN3aXRjaCAoc3RyLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICBjYXNlIFwieVwiOlxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcInllc1wiOlxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcIjFcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJ0cnVlXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG59XHJcblxyXG5cbmV4cG9ydCBmdW5jdGlvbiBHZXRDb29raWUobmFtZSkge1xyXG5cdC8vcmV0dXJuIC5jb29raWUobmFtZSk7XHJcblx0dmFyIGtleVZhbHVlID0gZG9jdW1lbnQuY29va2llLm1hdGNoKCcoXnw7KSA/JyArIG5hbWUgKyAnPShbXjtdKikoO3wpJyk7XHJcblx0cmV0dXJuIGtleVZhbHVlID8ga2V5VmFsdWVbMl0gOiBudWxsO1xyXG59XG5leHBvcnQgZnVuY3Rpb24gU2V0Q29va2llKG5hbWUsIHZhbHVlKSB7XHJcblx0Ly9kb2N1bWVudC5jb29raWUgPSBuYW1lICsgXCI9XCIgKyB2YWx1ZSArIFwiOyBleHBpcmVzPVRodSwgMTggRGVjIDIwMTMgMTI6MDA6MDAgR01UXCI7XHJcblx0Ly8uY29va2llKG5hbWUsIHZhbHVlLCB7ZXhwaXJlczozNjUscGF0aDonL2Nvb2tpZXMnfSk7XHJcblx0dmFyIGV4cGlyZXMgPSBuZXcgRGF0ZSgpO1xyXG5cdGV4cGlyZXMuc2V0VGltZShleHBpcmVzLmdldFRpbWUoKSArICgxICogMjQgKiA2MCAqIDYwICogMTAwMCkpO1xyXG5cdGRvY3VtZW50LmNvb2tpZSA9IG5hbWUgKyAnPScgKyB2YWx1ZSArICc7ZXhwaXJlcz0nICsgZXhwaXJlcy50b1VUQ1N0cmluZygpO1xyXG59XG5leHBvcnQgZnVuY3Rpb24gR2V0RGF5c0JldHdlZW4gKHN0YXJ0RGF0ZVRpbWUsIGVuZERhdGVUaW1lKSB7XHJcbiAgICBsZXQgbXNQZXJEYXkgPSA4LjY0ZTc7XHJcbiAgICAvLyBDb3B5IGRhdGVzIHNvIGRvbid0IG1lc3MgdGhlbSB1cFxyXG4gICAgbGV0IHNkID0gbmV3IERhdGUoc3RhcnREYXRlVGltZSk7XHJcbiAgICBsZXQgZWQgPSBuZXcgRGF0ZShlbmREYXRlVGltZSk7XHJcbiAgICAvLyBTZXQgdG8gbm9vbiAtIGF2b2lkIERTVCBlcnJvcnNcclxuICAgIHNkLnNldEhvdXJzKDEyLCAwLCAwKTtcclxuICAgIGVkLnNldEhvdXJzKDEyLCAwLCAwKTtcclxuICAgIC8vIFJvdW5kIHRvIHJlbW92ZSBkYXlsaWdodCBzYXZpbmcgZXJyb3JzXHJcbiAgICByZXR1cm4gTWF0aC5yb3VuZCgoZWQgLSBzZCkgLyBtc1BlckRheSk7XHJcbn1cclxuXG5leHBvcnQgZnVuY3Rpb24gR2V0TXlTUUxEYXRlVGltZVN0cmluZygpIHtcclxuICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gICAgbGV0IHllYXIgPSBub3cuZ2V0RnVsbFllYXIoKTtcclxuICAgIGxldCBtb250aCA9IG5vdy5nZXRNb250aCgpICsgMTtcclxuICAgIGxldCBkYXkgPSBub3cuZ2V0RGF0ZSgpO1xyXG4gICAgbGV0IGhvdXIgPSBub3cuZ2V0SG91cnMoKTtcclxuICAgIGxldCBtaW51dGUgPSBub3cuZ2V0TWludXRlcygpO1xyXG4gICAgbGV0IHNlY29uZCA9IG5vdy5nZXRTZWNvbmRzKCk7XHJcbiAgICBpZiAobW9udGgudG9TdHJpbmcoKS5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICBtb250aCA9ICcwJyArIG1vbnRoO1xyXG4gICAgfVxyXG4gICAgaWYgKGRheS50b1N0cmluZygpLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgIGRheSA9ICcwJyArIGRheTtcclxuICAgIH1cclxuICAgIGlmIChob3VyLnRvU3RyaW5nKCkubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgaG91ciA9ICcwJyArIGhvdXI7XHJcbiAgICB9XHJcbiAgICBpZiAobWludXRlLnRvU3RyaW5nKCkubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgbWludXRlID0gJzAnICsgbWludXRlO1xyXG4gICAgfVxyXG4gICAgaWYgKHNlY29uZC50b1N0cmluZygpLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgIHNlY29uZCA9ICcwJyArIHNlY29uZDtcclxuICAgIH1cclxuICAgIGxldCBzdHIgPSB5ZWFyICsgJy8nICsgbW9udGggKyAnLycgKyBkYXkgKyAnICcgKyBob3VyICsgJzonICsgbWludXRlICsgJzonICsgc2Vjb25kO1xyXG4gICAgcmV0dXJuIHN0cjtcclxufVxyXG5cbmV4cG9ydCBmdW5jdGlvbiBHZXRVS0RhdGUoZHRlKXtcclxuICAgIGxldCBvdXRwdXQgPSBkdGUuZ2V0RGF5KCkgKyBcIi1cIiArIChkdGUuZ2V0TW9udGgoKSsxKSArIFwiLVwiICsgZHRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgICByZXR1cm4gb3V0cHV0O1xyXG59XG5leHBvcnQgZnVuY3Rpb24gR2V0VWtEYXRlRnJvbURiRGF0ZVRpbWUgKGlucHV0KSB7XHJcbiAgICAvLyBcIjIwMTYtMDQtMDggMjE6MTE6NTlcIiB0byBVSyBkYXRlXHJcbiAgICBpZiAoaW5wdXQgPT09IFwiXCIgfHwgaW5wdXQgPT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gXCJubyBpbnB1dFwiO1xyXG4gICAgfVxyXG4gICAgbGV0IERhdGVUaW1lID0gaW5wdXQuc3BsaXQoXCIgXCIpO1xyXG4gICAgbGV0IERhdGVQYXJ0cyA9IERhdGVUaW1lWzBdLnNwbGl0KFwiLVwiKTtcclxuICAgIGxldCBVS0RhdGUgPSBEYXRlUGFydHNbMl0gKyBcIi9cIiArIERhdGVQYXJ0c1sxXSArIFwiL1wiICsgRGF0ZVBhcnRzWzBdO1xyXG4gICAgcmV0dXJuIFVLRGF0ZTtcclxufVxuZXhwb3J0IGZ1bmN0aW9uIEdldFVrRGF0ZVRpbWVGcm9tRGJEYXRlVGltZSAgKGlucHV0KSB7XHJcbiAgICAvLyBcIjIwMTYtMDQtMDggMjE6MTE6NTlcIiB0byBVSyBkYXRlIHRpbWVcclxuICAgIGxldCBEYXRlVGltZSA9IGlucHV0LnNwbGl0KFwiIFwiKTtcclxuICAgIGxldCBEYXRlUGFydHMgPSBEYXRlVGltZVswXS5zcGxpdChcIi1cIik7XHJcbiAgICBsZXQgVGltZVBhcnRzID0gRGF0ZVRpbWVbMV0uc3BsaXQoXCI6XCIpO1xyXG4gICAgbGV0IFVLRGF0ZSA9IERhdGVQYXJ0c1syXSArIFwiL1wiICsgRGF0ZVBhcnRzWzFdICsgXCIvXCIgKyBEYXRlUGFydHNbMF07XHJcbiAgICBsZXQgVGltZSA9IFRpbWVQYXJ0c1swXSArIFwiOlwiICsgVGltZVBhcnRzWzFdO1xyXG4gICAgcmV0dXJuIChVS0RhdGUgKyBcIiBcIiArIFRpbWUpO1xyXG59XG5leHBvcnQgZnVuY3Rpb24gR2V0VVNEYXRlKGR0ZSl7XHJcbiAgICBsZXQgb3V0cHV0ID0gZHRlLmdldEZ1bGxZZWFyKCkgKyBcIi1cIiArIChkdGUuZ2V0TW9udGgoKSsxKSArIFwiLVwiICsgKGR0ZS5nZXREYXkoKSsxKVxyXG4gICAgcmV0dXJuIG91dHB1dDtcclxufVxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZFRvKGVsZW1lbnRPcklkLG1zZyxlbmRPZkxpbmU9XCI8YnI+XCIpe1xyXG4gICAgLy8gV0FSTklORzogSUUxMSBXb250IHBsYXkgbmljZSBldmVuIHdpdGggd2VicGFjayBiYWJlbCBvbiBkZWZhdWx0cyBvZiBhcmdzXHJcbiAgICAvLyBXQVJOSU5HOiBUaGlzIHdpbGwgbm90IGJlIGJ1aWx0IGZvciBJRSBjb21wYXRpYmlsaXR5IC0gcGxlYXNlIHVzZSBhZnRjLmpzIGZvciB0aGF0IG5wbSBpIGFmdGMuanNcclxuICAgIGZ1bmN0aW9uIGlzRWxlbWVudChvKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgdHlwZW9mIEhUTUxFbGVtZW50ID09PSBcIm9iamVjdFwiID8gbyBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IDogLy9ET00yXHJcbiAgICAgICAgICAgICAgICBvICYmIHR5cGVvZiBvID09PSBcIm9iamVjdFwiICYmIG8gIT09IG51bGwgJiYgby5ub2RlVHlwZSA9PT0gMSAmJiB0eXBlb2Ygby5ub2RlTmFtZSA9PT0gXCJzdHJpbmdcIlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGVsZSA9IGZhbHNlO1xyXG4gICAgaWYgKHR5cGVvZihlbGVtZW50T3JJZCkgPT0gXCJzdHJpbmdcIil7XHJcbiAgICAgICAgZWxlbWVudE9ySWQgPSBlbGVtZW50T3JJZC5yZXBsYWNlKFwiI1wiLFwiXCIpO1xyXG4gICAgICAgIGVsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnRPcklkKTtcclxuICAgICAgICBpZiAoIWVsZSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJBcHBlbmRUbygpOiBVbmFibGUgdG8gZmluZCBJRCAnXCIgKyBlbGVtZW50T3JJZCArIFwiJyBvbiB0aGUgRE9NIVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZWxlID0gZWxlbWVudE9ySWQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzRWxlbWVudChlbGUpKXtcclxuICAgICAgICBlbGUuaW5uZXJIVE1MID0gZWxlLmlubmVySFRNTCArIG1zZyArIGVuZE9mTGluZTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJBcHBlbmRUbygpOiBVbmFibGUgdG8gbG9nIHRvIGVsZW1lbnQgb3IgaWQgcHJvdmlkZWQhXCIpO1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZWxlbWVudE9ySWQpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxyXG5cclxuXG5leHBvcnQgZnVuY3Rpb24gQXR0YWNoRGVidWcobm8sZWxlKSB7XHJcbiAgICAvLyByZXR1cm4gaWQncyBub3QgdGhlIGRpdiBjcmVhdGUgZWxlbWVudHMgYXMgdGhlc2UgYXJlIHR5cGUgb2Ygb2JqZWN0IGFuZCBub3QgaHRtbCBlbGVtZW50XHJcbiAgICBsZXQgaWRzID0gW107XHJcblxyXG4gICAgbGV0IGRlYnVnQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGRlYnVnQ29udGFpbmVyLmlkID0gXCJkZWJ1Zy1jb250YWluZXJcIjtcclxuICAgIGRlYnVnQ29udGFpbmVyLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG4gICAgZGVidWdDb250YWluZXIuc3R5bGUucmlnaHQgPSBcIjVweFwiO1xyXG4gICAgZGVidWdDb250YWluZXIuc3R5bGUudG9wID0gXCI1cHhcIjtcclxuICAgIGRlYnVnQ29udGFpbmVyLnN0eWxlLnRleHRBbGdpbiA9IFwicmlnaHRcIjtcclxuXHJcblxyXG4gICAgd2luZG93LmFmdGNEZWJ1ZyA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm87IGkrKykge1xyXG4gICAgICAgIGxldCByID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKjk5OTk5OTk5OTkpO1xyXG4gICAgICAgIGxldCBpZCA9IFwiYWZ0Yy1kZWJ1Zy1jb250YWluZXItXCIgKyByO1xyXG4gICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGRpdi5pZCA9IGlkO1xyXG4gICAgICAgIGRpdi5zdHlsZS5taW5XaWR0aCA9IFwiNTBweFwiO1xyXG4gICAgICAgIC8vIGRpdi5zdHlsZS5oZWlnaHQgPSBcIjIwcHhcIjtcclxuICAgICAgICBkaXYuc3R5bGUubWFyZ2luQm90dG9tID0gXCIzcHhcIjtcclxuICAgICAgICBkaXYuc3R5bGUuYm9yZGVyID0gXCIxcHggZGFzaGVkICM5OTk5OTlcIjtcclxuICAgICAgICBkaXYuc3R5bGUucGFkZGluZyA9IFwiMXB4IDJweCAycHggNHB4XCI7XHJcbiAgICAgICAgZGl2LnN0eWxlLmJhY2tncm91bmQgPSBcIlJHQkEoMjU1LDI1NSwyNTUsMC45MilcIjtcclxuICAgICAgICBkaXYuc3R5bGUuY29sb3IgPSBcIiMwMDAwMDBcIjtcclxuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChcImRlYnVnLXJvd1wiKTtcclxuICAgICAgICBkZWJ1Z0NvbnRhaW5lci5hcHBlbmRDaGlsZChkaXYpO1xyXG4gICAgICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5pbm5lckhUTUwpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB3aW5kb3cuYWZ0Y0RlYnVnLnB1c2goZGl2KTtcclxuICAgICAgICBpZHMucHVzaChpZCk7XHJcbiAgICB9XHJcbiAgICBpZiAoZWxlKXtcclxuICAgICAgICBlbGUuYXBwZW5kQ2hpbGQoZGVidWdDb250YWluZXIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRlYnVnQ29udGFpbmVyKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLndhcm4oXCJBdHRhY2hEZWJ1ZygpOiBBdHRhY2hlZCFcIik7XHJcbiAgICBjb25zb2xlLndhcm4oXCJBdHRhY2hEZWJ1ZygpOiBVc2UgRGVidWdUbyhpbmRleCxzdHJpbmcpIHRvIHdyaXRlIGRpcmVjdGx5IHRvIGRlYnVnIGVsZW1lbnRzLlwiKTtcclxuICAgIHJldHVybiBpZHM7XHJcbn1cbmV4cG9ydCBmdW5jdGlvbiBEZWJ1Z1RvKGluZGV4LHN0cil7XHJcbiAgICBpZiAod2luZG93LmFmdGNEZWJ1Z1tpbmRleF0pe1xyXG4gICAgICAgIHdpbmRvdy5hZnRjRGVidWdbaW5kZXhdLmlubmVySFRNTCA9IHN0cjtcclxuICAgIH1cclxufVxuZXhwb3J0IGZ1bmN0aW9uIGxvZyhhcmcpIHtcclxuICAgIGNvbnNvbGUubG9nKGFyZyk7XHJcbn1cclxuXG5leHBvcnQgZnVuY3Rpb24gbG9nVG8oZWxlbWVudE9ySWQsbXNnLGFwcGVuZD1mYWxzZSxlbmRPZkxpbmU9XCJcIil7XHJcbiAgICAvLyBXQVJOSU5HOiBJRTExIFdvbnQgcGxheSBuaWNlIGV2ZW4gd2l0aCB3ZWJwYWNrIGJhYmVsIG9uIGRlZmF1bHRzIG9mIGFyZ3NcclxuICAgIC8vIFdBUk5JTkc6IFRoaXMgd2lsbCBub3QgYmUgYnVpbHQgZm9yIElFIGNvbXBhdGliaWxpdHkgLSBwbGVhc2UgdXNlIGFmdGMuanMgZm9yIHRoYXQgbnBtIGkgYWZ0Yy5qc1xyXG5cclxuICAgIGZ1bmN0aW9uIGlzRWxlbWVudChvKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgdHlwZW9mIEhUTUxFbGVtZW50ID09PSBcIm9iamVjdFwiID8gbyBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IDogLy9ET00yXHJcbiAgICAgICAgICAgICAgICBvICYmIHR5cGVvZiBvID09PSBcIm9iamVjdFwiICYmIG8gIT09IG51bGwgJiYgby5ub2RlVHlwZSA9PT0gMSAmJiB0eXBlb2Ygby5ub2RlTmFtZSA9PT0gXCJzdHJpbmdcIlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGVsZSA9IGZhbHNlO1xyXG4gICAgaWYgKHR5cGVvZihlbGVtZW50T3JJZCkgPT0gXCJzdHJpbmdcIil7XHJcbiAgICAgICAgZWxlbWVudE9ySWQgPSBlbGVtZW50T3JJZC5yZXBsYWNlKFwiI1wiLFwiXCIpO1xyXG4gICAgICAgIGVsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnRPcklkKTtcclxuICAgICAgICBpZiAoIWVsZSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJMb2dUbygpOiBVbmFibGUgdG8gZmluZCBJRCAnXCIgKyBlbGVtZW50T3JJZCArIFwiJyBvbiB0aGUgRE9NIVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZWxlID0gZWxlbWVudE9ySWQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzRWxlbWVudChlbGUpKXtcclxuICAgICAgICBpZiAoYXBwZW5kID09PSB0cnVlKXtcclxuICAgICAgICAgICAgZWxlLmlubmVySFRNTCA9IGVsZS5pbm5lckhUTUwgKyBtc2cgKyBlbmRPZkxpbmU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZWxlLmlubmVySFRNTCA9IG1zZyArIGVuZE9mTGluZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiTG9nVG8oKTogVW5hYmxlIHRvIGxvZyB0byBlbGVtZW50IG9yIGlkIHByb3ZpZGVkIVwiKTtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVsZW1lbnRPcklkKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuXHJcblxuZXhwb3J0IGZ1bmN0aW9uIEdldElFVmVyc2lvbiAoKSB7XHJcbiAgICBsZXQgbWF0Y2ggPSBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC8oPzpNU0lFIHxUcmlkZW50XFwvLio7IHJ2OikoXFxkKykvKTtcclxuICAgIHJldHVybiBtYXRjaCA/IHBhcnNlSW50KG1hdGNoWzFdKSA6IHVuZGVmaW5lZDtcclxufVxuZXhwb3J0IGZ1bmN0aW9uIEdldE9TKHRlc3RBZ2VudCkge1xyXG4gICAgbGV0IHVzZXJBZ2VudDtcclxuXHJcbiAgICBpZiAoIXRlc3RBZ2VudCl7XHJcbiAgICAgICAgdXNlckFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudCB8fCBuYXZpZ2F0b3IudmVuZG9yIHx8IHdpbmRvdy5vcGVyYTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdXNlckFnZW50ID0gdGVzdEFnZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHVzZXJBZ2VudCA9IHVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xyXG5cclxuXHJcblxyXG5cclxuICAgIC8vIFdpbmRvd3MgUGhvbmUgbXVzdCBjb21lIGZpcnN0IGJlY2F1c2UgaXRzIFVBIGFsc28gY29udGFpbnMgXCJBbmRyb2lkXCIhXHJcbiAgICBpZiAoL3dpbmRvd3MgcGhvbmUvaS50ZXN0KHVzZXJBZ2VudCkpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBvczpcIndpbmRvd3MgcGhvbmVcIixcclxuICAgICAgICAgICAgdXNlckFnZW50OnVzZXJBZ2VudFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBTYW1zdW5nIEJyb3dzZXIgZGV0ZWN0aW9uIFM4XHJcbiAgICBpZiAoL3NhbXN1bmdicm93c2VyL2kudGVzdCh1c2VyQWdlbnQpKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgb3M6XCJhbmRyb2lkXCIsXHJcbiAgICAgICAgICAgIHVzZXJBZ2VudDp1c2VyQWdlbnRcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBpZiAoL2FuZHJvaWQvaS50ZXN0KHVzZXJBZ2VudCkpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBvczpcImFuZHJvaWRcIixcclxuICAgICAgICAgICAgdXNlckFnZW50OnVzZXJBZ2VudFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoL2lwYWR8aXBob25lfGlwb2QvaS50ZXN0KHVzZXJBZ2VudCkpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBvczpcImlvc1wiLFxyXG4gICAgICAgICAgICB1c2VyQWdlbnQ6dXNlckFnZW50XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLy8gV2luZG93cyBQaG9uZSBtdXN0IGNvbWUgZmlyc3QgYmVjYXVzZSBpdHMgVUEgYWxzbyBjb250YWlucyBcIkFuZHJvaWRcIlxyXG4gICAgaWYgKC93aW42NHx3aW4zMnx3aW4xNnx3aW45NXx3aW45OHx3aW5kb3dzIDIwMDB8d2luZG93cyB4cHxtc2llfHdpbmRvd3MgbnQgNi4zOyB0cmlkZW50fHdpbmRvd3MgbnR8d2luZG93cy9pLnRlc3QodXNlckFnZW50KSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG9zOlwid2luZG93c1wiLFxyXG4gICAgICAgICAgICB1c2VyQWdlbnQ6dXNlckFnZW50XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpZiAoL29zIHgvaS50ZXN0KHVzZXJBZ2VudCkpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBvczpcIm9zeFwiLFxyXG4gICAgICAgICAgICB1c2VyQWdlbnQ6dXNlckFnZW50XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICgvbWFjaW50b3NofG9zeC9pLnRlc3QodXNlckFnZW50KSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG9zOlwib3N4XCIsXHJcbiAgICAgICAgICAgIHVzZXJBZ2VudDp1c2VyQWdlbnRcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKC9vcGVuYnNkL2kudGVzdCh1c2VyQWdlbnQpKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgb3M6XCJvcGVuIGJzZFwiLFxyXG4gICAgICAgICAgICB1c2VyQWdlbnQ6dXNlckFnZW50XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpZiAoL3N1bm9zL2kudGVzdCh1c2VyQWdlbnQpKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgb3M6XCJzdW5vc1wiLFxyXG4gICAgICAgICAgICB1c2VyQWdlbnQ6dXNlckFnZW50XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgaWYgKC9jcmtleS9pLnRlc3QodXNlckFnZW50KSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG9zOlwiY2hyb21lY2FzdFwiLFxyXG4gICAgICAgICAgICB1c2VyQWdlbnQ6dXNlckFnZW50XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICgvYXBwbGV0di9pLnRlc3QodXNlckFnZW50KSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG9zOlwiYXBwbGUgdHZcIixcclxuICAgICAgICAgICAgdXNlckFnZW50OnVzZXJBZ2VudFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoL3dpaXUvaS50ZXN0KHVzZXJBZ2VudCkpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBvczpcIm5pbnRlbmRvIHdpaXVcIixcclxuICAgICAgICAgICAgdXNlckFnZW50OnVzZXJBZ2VudFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoL25pbnRlbmRvIDNkcy9pLnRlc3QodXNlckFnZW50KSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG9zOlwibmludGVuZG8gM2RzXCIsXHJcbiAgICAgICAgICAgIHVzZXJBZ2VudDp1c2VyQWdlbnRcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKC9wbGF5c3RhdGlvbi9pLnRlc3QodXNlckFnZW50KSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG9zOlwicGxheXN0YXRpb25cIixcclxuICAgICAgICAgICAgdXNlckFnZW50OnVzZXJBZ2VudFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoL2tpbmRsZS9pLnRlc3QodXNlckFnZW50KSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG9zOlwiYW1hem9uIGtpbmRsZVwiLFxyXG4gICAgICAgICAgICB1c2VyQWdlbnQ6dXNlckFnZW50XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICgvIGNyb3MgL2kudGVzdCh1c2VyQWdlbnQpKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgb3M6XCJjaHJvbWUgb3NcIixcclxuICAgICAgICAgICAgdXNlckFnZW50OnVzZXJBZ2VudFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGlmICgvdWJ1bnR1L2kudGVzdCh1c2VyQWdlbnQpKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgb3M6XCJ1YnVudHVcIixcclxuICAgICAgICAgICAgdXNlckFnZW50OnVzZXJBZ2VudFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgaWYgKC9nb29nbGVib3QvaS50ZXN0KHVzZXJBZ2VudCkpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBvczpcImdvb2dsZSBib3RcIixcclxuICAgICAgICAgICAgdXNlckFnZW50OnVzZXJBZ2VudFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoL2Jpbmdib3QvaS50ZXN0KHVzZXJBZ2VudCkpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBvczpcImJpbmcgYm90XCIsXHJcbiAgICAgICAgICAgIHVzZXJBZ2VudDp1c2VyQWdlbnRcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKC95YWhvbyEgc2x1cnAvaS50ZXN0KHVzZXJBZ2VudCkpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBvczpcInlhaG9vIGJvdFwiLFxyXG4gICAgICAgICAgICB1c2VyQWdlbnQ6dXNlckFnZW50XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBvczogZmFsc2UsXHJcbiAgICAgICAgdXNlckFnZW50OnVzZXJBZ2VudFxyXG4gICAgfTtcclxufVxyXG4vLyAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtXHJcblxyXG5cbmV4cG9ydCBmdW5jdGlvbiBJc0FuZHJvaWQoKXtcclxuICAgIGxldCB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcclxuICAgIGlmICgvd2luZG93cyBwaG9uZS9pLnRlc3QodWEpKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgaXNBbmRyb2lkID0gdWEuaW5kZXhPZihcImFuZHJvaWRcIikgPiAtMTsgLy8mJiB1YS5pbmRleE9mKFwibW9iaWxlXCIpO1xyXG4gICAgICAgIHJldHVybiBpc0FuZHJvaWQ7XHJcbiAgICB9XHJcbn1cclxuXG5leHBvcnQgZnVuY3Rpb24gSXNDaHJvbWUoKSB7XHJcbiAgICB2YXIgaXNDaHJvbWl1bSA9IHdpbmRvdy5jaHJvbWU7XHJcbiAgICB2YXIgd2luTmF2ID0gd2luZG93Lm5hdmlnYXRvcjtcclxuICAgIHZhciB2ZW5kb3JOYW1lID0gd2luTmF2LnZlbmRvcjtcclxuICAgIHZhciBpc09wZXJhID0gdHlwZW9mIHdpbmRvdy5vcHIgIT09IFwidW5kZWZpbmVkXCI7XHJcbiAgICB2YXIgaXNJRWVkZ2UgPSB3aW5OYXYudXNlckFnZW50LmluZGV4T2YoXCJFZGdlXCIpID4gLTE7XHJcbiAgICB2YXIgaXNJT1NDaHJvbWUgPSB3aW5OYXYudXNlckFnZW50Lm1hdGNoKFwiQ3JpT1NcIik7XHJcblxyXG4gICAgaWYgKGlzSU9TQ2hyb21lKSB7XHJcbiAgICAgICAgLy8gaXMgR29vZ2xlIENocm9tZSBvbiBJT1NcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgaXNDaHJvbWl1bSAhPT0gbnVsbCAmJlxyXG4gICAgICAgIHR5cGVvZiBpc0Nocm9taXVtICE9PSBcInVuZGVmaW5lZFwiICYmXHJcbiAgICAgICAgdmVuZG9yTmFtZSA9PT0gXCJHb29nbGUgSW5jLlwiICYmXHJcbiAgICAgICAgaXNPcGVyYSA9PT0gZmFsc2UgJiZcclxuICAgICAgICBpc0lFZWRnZSA9PT0gZmFsc2VcclxuICAgICkge1xyXG4gICAgICAgIC8vIGlzIEdvb2dsZSBDaHJvbWVcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gbm90IEdvb2dsZSBDaHJvbWVcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cbmV4cG9ydCBmdW5jdGlvbiBJc0VkZ2UgKCkge1xyXG4gICAgLy9sZXQgaXNFZGdlID0gIWlzSUUgJiYgISF3aW5kb3cuU3R5bGVNZWRpYTsgLy8gRWRnZSAyMCtcclxuICAgIGxldCBlZGdlID0gZmFsc2U7XHJcbiAgICBpZiAoL0VkZ2VcXC9cXGQuL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xyXG4gICAgICAgIGVkZ2UgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVkZ2U7XHJcbn1cbmV4cG9ydCBmdW5jdGlvbiBJc0ZpcmVGb3ggKCkge1xyXG4gICAgLy8gbGV0IGlzX2ZpcmVmb3ggPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZignZmlyZWZveCcpID4gLTE7XHJcbiAgICAvLyByZXR1cm4gaXNfZmlyZWZveDtcclxuICAgIHJldHVybiAodHlwZW9mIEluc3RhbGxUcmlnZ2VyICE9PSAndW5kZWZpbmVkJyk7XHJcbn1cbmV4cG9ydCBmdW5jdGlvbiBJc0lFICgpIHtcclxuICAgIC8vIGxldCBpc19pZSA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdNU0lFJykgPiAtMTtcclxuICAgIC8vIHJldHVybiBpc19pZTtcclxuICAgIC8vIHBhcmFtcy5pc0lFID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvTVNJRXxUcmlkZW50Lyk7XHJcbiAgICAvLyBwYXJhbXMuaXNJRSA9IGRvY3VtZW50LmRvY3VtZW50TW9kZTsgLy8gSVM5IGFuZCBhYm92ZVxyXG4gICAgcmV0dXJuIC8qQGNjX29uIUAqL2ZhbHNlIHx8ICEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlOyAvLyBJbnRlcm5ldCBFeHBsb3JlciA2LTExXHJcbn1cclxuXG5leHBvcnQgZnVuY3Rpb24gSXNJT1MoKSB7XHJcbiAgICBsZXQgaURldmljZXMgPSBbXHJcbiAgICAgICAgJ2lQYWQgU2ltdWxhdG9yJyxcclxuICAgICAgICAnaVBob25lIFNpbXVsYXRvcicsXHJcbiAgICAgICAgJ2lQb2QgU2ltdWxhdG9yJyxcclxuICAgICAgICAnaVBhZCcsXHJcbiAgICAgICAgJ2lQaG9uZScsXHJcbiAgICAgICAgJ2lQb2QnXHJcbiAgICBdO1xyXG5cclxuICAgIGlmICghIW5hdmlnYXRvci5wbGF0Zm9ybSkge1xyXG4gICAgICAgIHdoaWxlIChpRGV2aWNlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgaWYgKG5hdmlnYXRvci5wbGF0Zm9ybSA9PT0gaURldmljZXMucG9wKCkpeyByZXR1cm4gdHJ1ZTsgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXG5leHBvcnQgZnVuY3Rpb24gSXNNb2JpbGUoKXtcclxuICAgIC8vIFdpbmRvd3MgUGhvbmUgbXVzdCBjb21lIGZpcnN0IGJlY2F1c2UgaXRzIFVBIGFsc28gY29udGFpbnMgXCJBbmRyb2lkXCIhXHJcbiAgICBsZXQgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XHJcbiAgICBpZiAoL3dpbmRvd3MgcGhvbmUvaS50ZXN0KHVhKSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoL0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIEBmdW5jdGlvbjogaXNNb2JpbGUoKVxyXG4gKiBAZGVzYzogRGV0ZWN0cyBpZiB0aGUgZGV2aWNlIHlvdSBhcmUgdXNpbmcgaXMgYSBtb2JpbGUgb3Igbm90XHJcbiAqIEByZXR1cm4gYm9vbGVhblxyXG4gKiBAbGluazogaHR0cHM6Ly9jb2RlcGVuLmlvL0FsbEZvclRoZUNvZGUvcGVuL0tSYkxkbVxyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBJc09wZXJhKCkge1xyXG4gICAgLy8gbGV0IGlzQ2hyb21pdW0gPSB3aW5kb3cuY2hyb21lO1xyXG4gICAgLy8gbGV0IGlzT3BlcmEgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiT1BSXCIpID4gLTEgfHwgd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIk9wZXJhXCIpID4gLTE7XHJcbiAgICAvLyBsZXQgaXNPcGVyYSA9IChuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9PcGVyYXxPUFJcXC8vKSA/IHRydWUgOiBmYWxzZSk7XHJcbiAgICBsZXQgaXNPcGVyYSA9ICghIXdpbmRvdy5vcHIgJiYgISFvcHIuYWRkb25zKSB8fCAhIXdpbmRvdy5vcGVyYSB8fCBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJyBPUFIvJykgPj0gMDtcclxuICAgIHJldHVybiBpc09wZXJhO1xyXG59XG5leHBvcnQgZnVuY3Rpb24gSXNTYWZhcmkoKSB7XHJcbiAgICAvLyBsZXQgaXNfc2FmYXJpID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ3NhZmFyaScpID4gLTE7XHJcbiAgICAvLyByZXR1cm4gaXNfc2FmYXJpO1xyXG4gICAgcmV0dXJuIC9jb25zdHJ1Y3Rvci9pLnRlc3Qod2luZG93LkhUTUxFbGVtZW50KSB8fCAoZnVuY3Rpb24gKHApIHsgcmV0dXJuIHAudG9TdHJpbmcoKSA9PT0gXCJbb2JqZWN0IFNhZmFyaVJlbW90ZU5vdGlmaWNhdGlvbl1cIjsgfSkoIXdpbmRvd1snc2FmYXJpJ10gfHwgKHR5cGVvZiBzYWZhcmkgIT09ICd1bmRlZmluZWQnICYmIHNhZmFyaS5wdXNoTm90aWZpY2F0aW9uKSk7XHJcbn1cbmV4cG9ydCBmdW5jdGlvbiBHZXRFbGVtZW50UG9zaXRpb24oZWwpIHtcclxuICAgIGxldCBwb3NpdGlvbiA9IHtcclxuICAgICAgICB0b3A6IGVsLm9mZnNldFRvcCxcclxuICAgICAgICBsZWZ0OiBlbC5vZmZzZXRMZWZ0XHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChlbC5vZmZzZXRQYXJlbnQpIHtcclxuICAgICAgICBsZXQgcGFyZW50UG9zaXRpb24gPSB7XHJcbiAgICAgICAgICAgIHRvcDogZWwub2Zmc2V0UGFyZW50Lm9mZnNldFRvcCxcclxuICAgICAgICAgICAgbGVmdDogZWwub2Zmc2V0UGFyZW50Lm9mZnNldExlZnRcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBwb3NpdGlvbi50b3AgKz0gcGFyZW50UG9zaXRpb24udG9wO1xyXG4gICAgICAgIHBvc2l0aW9uLmxlZnQgKz0gcGFyZW50UG9zaXRpb24ubGVmdDtcclxuICAgIH1cclxuICAgIHJldHVybiBwb3NpdGlvbjtcclxufVxyXG5cclxuXG5leHBvcnQgZnVuY3Rpb24gSXNET00ob2JqKSB7XHJcbiAgICAvLyB0aGlzIHdvcmtzIGZvciBuZXdlciBicm93c2Vyc1xyXG4gICAgdHJ5IHsgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIEhUTUxFbGVtZW50OyB9XHJcblxyXG4gICAgICAgIC8vIHRoaXMgd29ya3MgZm9yIG9sZGVyIGJyb3dzZXJzXHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgIHJldHVybiAodHlwZW9mIG9iaiA9PT0gXCJvYmplY3RcIikgJiZcclxuICAgICAgICAgICAgKG9iai5ub2RlVHlwZSA9PT0gMSkgJiYgKHR5cGVvZiBvYmouc3R5bGUgPT09IFwib2JqZWN0XCIpICYmXHJcbiAgICAgICAgICAgICh0eXBlb2Ygb2JqLm93bmVyRG9jdW1lbnQgPT09IFwib2JqZWN0XCIpO1xyXG4gICAgfVxyXG59O1xuZXhwb3J0IGZ1bmN0aW9uIElzRWxlbWVudChvKSB7XHJcbiAgICBsZXQgYW5zd2VyID0gKFxyXG4gICAgICAgIHR5cGVvZiBIVE1MRWxlbWVudCA9PT0gXCJvYmplY3RcIiA/IG8gaW5zdGFuY2VvZiBIVE1MRWxlbWVudCA6IC8vRE9NMlxyXG4gICAgICAgICAgICBvICYmIHR5cGVvZiBvID09PSBcIm9iamVjdFwiICYmIG8gIT09IG51bGwgJiYgby5ub2RlVHlwZSA9PT0gMSAmJiB0eXBlb2Ygby5ub2RlTmFtZSA9PT0gXCJzdHJpbmdcIlxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAoYW5zd2VyICE9IHRydWUpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG59XG5leHBvcnQgZnVuY3Rpb24gSXNFbGVtZW50MihlbGVtZW50KSB7XHJcbiAgICAvLyB3b3JrcyBvbiBtYWpvciBicm93c2VycyBiYWNrIHRvIElFN1xyXG4gICAgcmV0dXJuIGVsZW1lbnQgaW5zdGFuY2VvZiBFbGVtZW50O1xyXG59XHJcblxuZXhwb3J0IGZ1bmN0aW9uIEdldEVsZW1lbnRPZmZzZXRUb3AoZWxlbWVudElkKSB7XHJcbiAgICBsZXQgZWxlbWVudCA9IGdldEVsZW1lbnRCeUlkKGVsZW1lbnRJZCk7XHJcbiAgICBsZXQgY3VydG9wID0gMDtcclxuICAgIGlmIChlbGVtZW50Lmhhc093blByb3BlcnR5KFwib2Zmc2V0UGFyZW50XCIpKXtcclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIGN1cnRvcCArPSBlbGVtZW50Lm9mZnNldFRvcDtcclxuICAgICAgICB9IHdoaWxlIChlbGVtZW50ID0gZWxlbWVudC5vZmZzZXRQYXJlbnQpO1xyXG4gICAgICAgIHJldHVybiBwYXJzZUZsb2F0KFtjdXJ0b3BdKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XG5leHBvcnQgZnVuY3Rpb24gSGFzQ2xhc3MoZWxlbWVudE9ySWQsIGMpIHtcclxuICAgIGlmIChpc0VsZW1lbnQoZWxlbWVudE9ySWQpKSB7XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRPcklkLmNsYXNzTGlzdC5jb250YWlucyhjKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGdldEVsZW1lbnRCeUlkKGVsZW1lbnRPcklkKS5jbGFzc0xpc3QuY29udGFpbnMoYyk7XHJcbiAgICB9XHJcbn1cbmV4cG9ydCBmdW5jdGlvbiBTZXRIVE1MKGVsZW1lbnRPcklkLCBzdHIpIHtcclxuICAgIGxldCBlbGU7XHJcbiAgICBpZiAodHlwZW9mIChlbGVtZW50T3JJZCkgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICBlbGUgPSBnZXRFbGVtZW50QnlJZChlbGVtZW50T3JJZCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVsZSA9IGVsZW1lbnRPcklkO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChlbGUpIHtcclxuICAgICAgICBlbGUuaW5uZXJIVE1MID0gc3RyO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gXCJTZXRIVE1MKGVsZW1lbnRPcklkLCBzdHIpOiBVc2FnZSBlcnJvcjogVW5hYmxlIHRvIHJldHJpZXZlIGVsZW1lbnQgaWQgb3IgdXNlIGVsZW1lbnQgW1wiICsgZWxlbWVudE9ySWQgKyBcIl1cIjtcclxuICAgIH1cclxufVxuZXhwb3J0IGNsYXNzIEV2ZW50TWFuYWdlciB7XHJcbiAgICAvLyBXQVJOSU5HOiBleHBvcnQgY2xhc3Mgd2lsbCBub3Qgd29yayBmb3IgdHJhbnNwaWxlIHRvIElFMTEgKERFTEVURSBDTEFTUyBJRiBZT1UgU1RJTEwgTkVFRCBhZnRjLW1vZHVsZXMgb3IgdXNlIFNSQyBmaWxlIGluY2x1ZGVzKVxyXG4gICAgLy8gTk9URTogQWx0ZXJuYXRpdmVseSB1c2UgYWZ0Yy5qcyBmb3IgRVM1IC0gbnBtIGkgYWZ0Yy5qc1xyXG59XHJcblxyXG4vKioganNvIHtcclxuICogXCJGdW5jdGlvblwiOiBcIkV2ZW50TWFuYWdlci5qc1wiLFxyXG4gKiBcIkRlc2NyaXB0aW9uXCI6IFwiQSBjZW50cmFsaXNlZCBldmVudCBzdGFjayB3aGVyZSB5b3UgY2FuIGhvb2sgeW91ciBmdW5jdGlvbnMgLyBjbGFzcydzIGludG8gZm9yIGNlbnRyYWxpc2VkIHF1aWNrIGFuZCBlYXN5IGV2ZW50IGFwcGxpY2F0aW9uIGV2ZW50IGhhbmRsaW5nLlwiLFxyXG4gKiBcIk1ldGhvZHNcIjogW1xyXG4gKiAgICAgIHtcclxuICogICAgICAgICAgXCJuYW1lXCI6IFwibGlzdFwiLFxyXG4gKiAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTGlzdHMgd2hpY2ggZXZlbnRzIGhhdmUgYmVlbiBjcmVhdGVkIGFuZCBhdmFpbGFibGUgZm9yIGRpc3BhdGNoIGluIHRoZSBFdmVudE1hbmFnZXIuXCIsXHJcbiAgKiAgICAgICAgICBcInJldHVybnNcIjogXCJjb25zb2xlLmxvZ1wiLFxyXG4gKiAgICAgIH0sXHJcbiAqICAgICAge1xyXG4gKiAgICAgICAgICBcIm5hbWVcIjogXCJhZGRcIixcclxuICogICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkFkZHMgb3IgY3JlYXRlcyBhIG5ldyBldmVudCB3aXRoaW4gdGhlIGV2ZW50IG1hbmFnZXIgYW5kIGF0dGFjaGVkIGEgY2FsbGJhY2sgZnVuY3Rpb24gLyBsaXN0ZW5lciBvYmplY3QgdG8gYmUgY2FsbGVkIG9uIGRpc3BhdGNoIG9mIHRoaXMgZXZlbnQuXCIsXHJcbiAqICAgICAgICAgIFwicGFyYW1ldGVyc1wiOiBbXHJcbiAqICAgICAgICAgICAgICB7XHJcbiAqICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiZXZlbnROYW1lXCIsXHJcbiAqICAgICAgICAgICAgICAgICAgXCJyZXF1aXJlZFwiOiBcInRydWVcIixcclxuICogICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiVGhlIG5hbWUgb2YgdGhlIGV2ZW50IHRvIGFkZC5cIixcclxuICogICAgICAgICAgICAgIH0sXHJcbiAqICAgICAgICAgICAgICB7XHJcbiAqICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiY2FsbGJhY2tGdW5jdGlvblwiLFxyXG4gICogICAgICAgICAgICAgICAgICBcInJlcXVpcmVkXCI6IFwidHJ1ZVwiLFxyXG4gKiAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJUaGUgbGlzdGVuZXIgb2JqZWN0IC8gZnVuY3Rpb24gd2hpY2ggZ2V0cyBjYWxsZWQgd2hlbiB0aGUgZXZlbnQgaXMgdHJpZ2dlcmVkLlwiLFxyXG4gKiAgICAgICAgICAgICAgfSxcclxuICogICAgICAgICAgXSxcclxuICogICAgICB9LFxyXG4gKiAgICAgIHtcclxuICogICAgICAgICAgXCJuYW1lXCI6IFwiZGlzcGF0Y2hcIixcclxuICogICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkRpc3BhdGNoZXMgLyBUcmlnZ2VycyBhbiBldmVudCBieSBuYW1lIGZyb20gdGhlIEV2ZW50TWFuYWdlci5cIixcclxuICogICAgICAgICAgXCJwYXJhbWV0ZXJzXCI6IFtcclxuICogICAgICAgICAgICAgIHtcclxuICogICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJldmVudE5hbWVcIixcclxuICogICAgICAgICAgICAgICAgICBcInJlcXVpcmVkXCI6IFwidHJ1ZVwiLFxyXG4gKiAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJUaGUgbmFtZSBvZiB0aGUgZXZlbnQgdG8gZGlzcGF0Y2guXCIsXHJcbiAqICAgICAgICAgICAgICB9XHJcbiAqICAgICAgICAgIF0sXHJcbiAqICAgICAgfSxcclxuICogIF1cclxuICogfVxyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvblJlYWR5KGZuKSB7XHJcbiAgICAvLyBJRTkrXHJcbiAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJjb21wbGV0ZVwiIHx8IChkb2N1bWVudC5yZWFkeVN0YXRlICE9PSBcImxvYWRpbmdcIiAmJiAhZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRvU2Nyb2xsKSkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoZm4sIDEwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZuLCAxMCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cclxuXG5leHBvcnQgZnVuY3Rpb24gV29yZExpbWl0ZXIoc3RyLCBtYXhXb3Jkcykge1xyXG4gICAgbGV0IHdvcmRDb3VudCA9IHN0ci5zcGxpdCgvXFxTKy8pLmxlbmd0aCAtIDE7XHJcbiAgICBsZXQgcmUgPSBuZXcgUmVnRXhwKFwiXlxcXFxzKlxcXFxTKyg/OlxcXFxzK1xcXFxTKyl7MCxcIiArIChtYXhXb3JkcyAtIDEpICsgXCJ9XCIpO1xyXG4gICAgbGV0IG91dHB1dCA9IFwiXCI7XHJcbiAgICBpZiAod29yZENvdW50ID49IG1heFdvcmRzKSB7XHJcbiAgICAgICAgb3V0cHV0ID0gc3RyLm1hdGNoKHJlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgb3V0cHV0ID0gc3RyO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHsgb3V0cHV0OiBvdXRwdXQsIHJlbWFpbmluZzogKG1heFdvcmRzIC0gd29yZENvdW50KSB9O1xyXG59XHJcblxuZXhwb3J0IGNsYXNzIFhIUiB7XHJcbiAgICAvLyBXQVJOSU5HOiBleHBvcnQgY2xhc3Mgd2lsbCBub3Qgd29yayBmb3IgdHJhbnNwaWxlIHRvIElFMTEgKERFTEVURSBDTEFTUyBJRiBZT1UgU1RJTEwgTkVFRCBhZnRjLW1vZHVsZXMgb3IgdXNlIFNSQyBmaWxlIGluY2x1ZGVzKVxyXG4gICAgLy8gTk9URTogQWx0ZXJuYXRpdmVseSB1c2UgYWZ0Yy5qcyBmb3IgRVM1IC0gbnBtIGkgYWZ0Yy5qcyAobmV3IFhIUigpKVxyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvL2h0dHBzOi8vamF2YXNjcmlwdC5pbmZvL3htbGh0dHByZXF1ZXN0XHJcblxyXG4gICAgICAgIC8vIHZhciBkZWZzXHJcbiAgICAgICAgdGhpcy5hcmdzID0ge1xyXG4gICAgICAgICAgICB1cmw6IGZhbHNlLFxyXG4gICAgICAgICAgICBtZXRob2Q6IGZhbHNlLFxyXG4gICAgICAgICAgICBkYXRhOiBmYWxzZSxcclxuICAgICAgICAgICAgZGF0YVR5cGU6IGZhbHNlLCAvLyBha2EgcmVxdWVzdFR5cGUgdGhpcyBpcyBlaXRoZXIgZm9ybSBvciBqc29uIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcpO1xyXG4gICAgICAgICAgICByZXNwb25zZVR5cGU6IGZhbHNlLCAvLyBmb3IgY2xpZW50c2lkZSBwcm9jZXNzaW5nIHJlc3BvbnNlIGRhdGEgdHlwZVxyXG4gICAgICAgICAgICB0aW1lb3V0OiAwLFxyXG4gICAgICAgICAgICBvbkNvbXBsZXRlOiBmYWxzZSxcclxuICAgICAgICAgICAgb25FcnJvcjogZmFsc2UsIC8vIG9ubHkgdHJpZ2dlcnMgaWYgdGhlIHJlcXVlc3QgY291bGRuJ3QgYmUgbWFkZSBhdCBhbGxcclxuICAgICAgICAgICAgb25Qcm9ncmVzczogZmFsc2UsXHJcbiAgICAgICAgICAgIG9uQ2FuY2VsOiBmYWxzZSxcclxuICAgICAgICAgICAgdXNlcm5hbWU6IGZhbHNlLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogZmFsc2VcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLnVybCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudXJsUGFyYW1zID0gXCJcIjtcclxuICAgICAgICB0aGlzLnhociA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvLyBQcm9jZXNzIGFyZ3VtZW50c1xyXG4gICAgICAgIGlmIChhcmd1bWVudHNbMF0gJiYgdHlwZW9mIChhcmd1bWVudHNbMF0pID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBhcmd1bWVudHNbMF0pIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFyZ3MuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXJnc1trZXldID0gYXJndW1lbnRzWzBdW2tleV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5hcmdzKTtcclxuXHJcbiAgICAgICAgLy8gVmFsaWRhdGVcclxuICAgICAgICBsZXQgdmFsaWQgPSB0cnVlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5hcmdzLnVybCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgbGV0IG1zZyA9IGBYSFIoKTogVXNhZ2UgZXJyb3I6IE9wdGlvbiBcInVybFwiIGhhcyBub3QgYmVlbiBzZXQhXHJcblBsZWFzZSBlbnRlciBhIHZhbGlkIHVybCB0byBtYWtlIGEgcmVxdWVzdCB0byFgO1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKG1zZyk7XHJcbiAgICAgICAgICAgIHZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmFyZ3MubWV0aG9kID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBsZXQgbXNnID0gYFhIUigpOiBVc2FnZSBlcnJvcjogT3B0aW9uIFwibWV0aG9kXCIgaGFzIG5vdCBiZWVuIHNldCFcclxuVmFsaWQgb3B0aW9ucyBhcmU6XHJcbiAgICBQT1NULFxyXG4gICAgR0VUYDtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihtc2cpO1xyXG4gICAgICAgICAgICB2YWxpZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYXJncy5kYXRhICE9PSBmYWxzZSAmJiAoXHJcbiAgICAgICAgICAgIHRoaXMuYXJncy5kYXRhVHlwZS50b0xvd2VyQ2FzZSgpICE9PSBcImpzb25cIiAmJlxyXG4gICAgICAgICAgICB0aGlzLmFyZ3MuZGF0YVR5cGUudG9Mb3dlckNhc2UoKSAhPT0gXCJmb3JtXCIgJiZcclxuICAgICAgICAgICAgdGhpcy5hcmdzLmRhdGFUeXBlLnRvTG93ZXJDYXNlKCkgIT09IFwidGV4dFwiXHJcbiAgICAgICAgKSkge1xyXG4gICAgICAgICAgICBsZXQgbXNnID0gYFhIUigpOiBVc2FnZSBlcnJvcjogSW52YWxpZCBcImRhdGFUeXBlXCIgaGFzIGJlZW4gc2V0IVxyXG5WYWxpZCBvcHRpb25zIGFyZTpcclxuICAgIEpTT04gICAgICAgIC0gc2VuZCBqc29uIHN0cmluZ1xyXG4gICAgRk9STSAgICAgICAgLSBzZW5kIGZvcm0gb2JqZWN0XHJcbiAgICBURVhUICAgICAgICAtIHNlbmQgdXJsIHN0cmluZ1xyXG5gO1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKG1zZyk7XHJcbiAgICAgICAgICAgIHZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBpZiAodGhpcy5hcmdzLnJlc3BvbnNlVHlwZSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgbGV0IG1zZyA9XHJcbiAgICAgICAgICAgICAgICBgWEhSKCk6IFVzYWdlIHdhcm5pbmc6IE9wdGlvbiBcInJlc3BvbnNlVHlwZVwiIG5vdCBzZXQhXHJcblZhbGlkIG9wdGlvbnMgYXJlOlxyXG4gICAganNvbiBcXHRcXHRcXHQgSlNPTiAocGFyc2VkIGF1dG9tYXRpY2FsbHkpXHJcbiAgICBkb2N1bWVudCBcXHRcXHQgWE1MIERvY3VtZW50IChYUGF0aCBldGMpLFxyXG4gICAgdGV4dCBcXHRcXHRcXHQgc3RyaW5nLFxyXG4gICAgYXJyYXlidWZmZXIgXFx0IEFycmF5QnVmZmVyIGZvciBiaW5hcnkgZGF0YSxcclxuICAgIGJsb2IgXFx0XFx0XFx0IEJsb2IgZm9yIGJpbmFyeSBkYXRhLFxyXG5gO1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKG1zZyk7XHJcbiAgICAgICAgICAgIHZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgdGhpcy5hcmdzLnJlc3BvbnNlVHlwZS50b0xvd2VyQ2FzZSgpICE9IFwidGV4dFwiICYmXHJcbiAgICAgICAgICAgIHRoaXMuYXJncy5yZXNwb25zZVR5cGUudG9Mb3dlckNhc2UoKSAhPSBcImRvY3VtZW50XCIgJiZcclxuICAgICAgICAgICAgdGhpcy5hcmdzLnJlc3BvbnNlVHlwZS50b0xvd2VyQ2FzZSgpICE9IFwianNvblwiICYmXHJcbiAgICAgICAgICAgIHRoaXMuYXJncy5yZXNwb25zZVR5cGUudG9Mb3dlckNhc2UoKSAhPSBcImFycmF5YnVmZmVyXCIgJiZcclxuICAgICAgICAgICAgdGhpcy5hcmdzLnJlc3BvbnNlVHlwZS50b0xvd2VyQ2FzZSgpICE9IFwiYmxvYlwiXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGxldCBtc2cgPVxyXG4gICAgICAgICAgICAgICAgYFhIUigpOiBVc2FnZSBlcnJvcjogTm90IGEgdmFsaWQgXCJyZXNwb25zZVR5cGVcIiBzcGVjaWZpZWQgXCIke3RoaXMuYXJncy5yZXNwb25zZVR5cGV9XCJcclxuVmFsaWQgb3B0aW9ucyBhcmU6XHJcbiAgICBqc29uIFxcdFxcdFxcdCBKU09OIChwYXJzZWQgYXV0b21hdGljYWxseSlcclxuICAgIGRvY3VtZW50IFxcdFxcdCBYTUwgRG9jdW1lbnQgKFhQYXRoIGV0YyksXHJcbiAgICB0ZXh0IFxcdFxcdFxcdCBzdHJpbmcsXHJcbiAgICBhcnJheWJ1ZmZlciBcXHQgQXJyYXlCdWZmZXIgZm9yIGJpbmFyeSBkYXRhLFxyXG4gICAgYmxvYiBcXHRcXHRcXHQgQmxvYiBmb3IgYmluYXJ5IGRhdGEsXHJcbmA7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IobXNnKTtcclxuICAgICAgICAgICAgdmFsaWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmFyZ3Mub25Db21wbGV0ZSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgbGV0IG1zZyA9IGBYSFIoKTogVXNhZ2UgZXJyb3I6IE9wdGlvbiBcIm9uQ29tcGxldGVcIiBoYXMgbm90IGJlZW4gc2V0IVxyXG5Zb3VyIG1ha2luZyBhIHJlcXVlc3QgYnV0IGFyZSBub3QgZG9pbmcgYW55dGhpbmcgd2l0aCB0aGUgcmVzcG9uc2U/IE1ha2Ugc3VyZSB0byBzdXBwbHkgYW4gb25Db21wbGV0ZSBjYWxsYmFjayBmdW5jdGlvbi5gO1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKG1zZyk7XHJcbiAgICAgICAgICAgIHZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgaWYgKHZhbGlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFrZVJlcXVlc3QoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtXHJcblxyXG5cclxuXHJcbiAgICBtYWtlUmVxdWVzdCgpIHtcclxuICAgICAgICB0aGlzLnhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5cclxuICAgICAgICB0aGlzLnhoci50aW1lb3V0ID0gdGhpcy5hcmdzLnRpbWVvdXQ7XHJcblxyXG5cclxuICAgICAgICAvLyBHRVRcclxuICAgICAgICAvLyBBcHBlbmQgZGF0YSB2YXJpYWJsZXMgdG8gdXJsIHN0cmluZywgb25seSBoYW5kbGUganNvbiwgZm9ybSBhbmQgc3RyaW5nXHJcblxyXG4gICAgICAgIC8vIFBPU1R8fFBVVHx8REVMRVRFfHxQQVRDSFxyXG4gICAgICAgIC8vIElmIGpzb24gc2VuZCBqc29uIG9iamVjdFxyXG4gICAgICAgIC8vIElmIGZvcm0gc2VuZCBmb3JtIG9iamVjdFxyXG4gICAgICAgIC8vIElmIHRleHQgc2VuZCBzdHJpbmdcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYXJncy5tZXRob2QudG9Mb3dlckNhc2UoKSA9PSBcImdldFwiKSB7XHJcbiAgICAgICAgICAgIC8vIEdFVFxyXG4gICAgICAgICAgICBpZiAodGhpcy5hcmdzLmRhdGFUeXBlICE9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLmFyZ3MuZGF0YVR5cGUudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ0ZXh0XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXJsID0gdGhpcy5hcmdzLnVybCArIFwiP1wiICsgdGhpcy5hcmdzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJmb3JtXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXJsID0gdGhpcy5hcmdzLnVybCArIFwiP1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgb2YgdGhpcy5hcmdzLmRhdGEua2V5cygpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdiA9IHRoaXMuYXJncy5kYXRhLmdldChrZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVybCA9IHRoaXMudXJsICsgZW5jb2RlVVJJKGtleSkgKyBcIj1cIiArIGVuY29kZVVSSSh2KSArIFwiJlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJqc29uXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXJsID0gdGhpcy5hcmdzLnVybCArIFwiP1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5hcmdzLmRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmFyZ3MuZGF0YVtrZXldKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2ID0gdGhpcy5hcmdzLmRhdGFba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxvZyhrZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cmwgPSB0aGlzLnVybCArIGVuY29kZVVSSShrZXkpICsgXCI9XCIgKyBlbmNvZGVVUkkodikgKyBcIiZcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwidGhpcy51cmwgPSBcIiArIHRoaXMudXJsKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXJsID0gdGhpcy5hcmdzLnVybFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gUE9TVCB8fCBQVVQgfHwgUEFUQ0ggfHwgREVMRVRFXHJcbiAgICAgICAgICAgIHRoaXMudXJsID0gdGhpcy5hcmdzLnVybFxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vIG9wZW5cclxuICAgICAgICBpZiAodGhpcy5hcmdzLnVzZXJuYW1lICE9PSBmYWxzZSAmJiB0aGlzLmFyZ3MucGFzc3dvcmQgIT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMueGhyLm9wZW4odGhpcy5hcmdzLm1ldGhvZCwgdGhpcy51cmwsIHRoaXMuYXJncy51c2VybmFtZSwgdGhpcy5hcmdzLnBhc3N3b3JkKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnhoci5vcGVuKHRoaXMuYXJncy5tZXRob2QsIHRoaXMudXJsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHJlc3BvbnNlVHlwZVxyXG4gICAgICAgIHRoaXMueGhyLnJlc3BvbnNlVHlwZSA9IHRoaXMuYXJncy5yZXNwb25zZVR5cGU7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vIFNldCByZXF1ZXN0SGVhZGVyIHR5cGUgYWthIGRhdGFUeXBlIGFuZCBzZW5kXHJcbiAgICAgICAgaWYgKHRoaXMuYXJncy5kYXRhVHlwZSAhPT0gZmFsc2UgJiYgdHlwZW9mKHRoaXMuYXJncy5kYXRhVHlwZSkgPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuYXJncy5kYXRhVHlwZS50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwianNvblwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54aHIuc2VuZChKU09OLnN0cmluZ2lmeSh0aGlzLmFyZ3MuZGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImZvcm1cIjpcclxuICAgICAgICAgICAgICAgICAgICAvLyBmb3IgKHZhciBrZXkgb2YgdGhpcy5hcmdzLmRhdGEua2V5cygpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGxldCB2ID0gdGhpcy5hcmdzLmRhdGEuZ2V0KGtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGtleSArIFwiID0gXCIgKyB2KTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54aHIuc2VuZCh0aGlzLmFyZ3MuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwidGV4dFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueGhyLnNldFJlcXVlc3RIZWFkZXIoXCJjb250ZW50LXR5cGVcIiwgXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54aHIuc2VuZCh0aGlzLmFyZ3MuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueGhyLnNlbmQoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMueGhyLnNlbmQoKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvLyBTZW5kXHJcbiAgICAgICAgLy8gaWYgKHRoaXMuYXJncy5kYXRhICE9PSBmYWxzZSAmJiB0aGlzLmFyZ3MuZGF0YVR5cGUgIT09IGZhbHNlKXtcclxuICAgICAgICAvLyAgICAgbG9nKFwic2VuZGluZyBkYXRhXCIpO1xyXG4gICAgICAgIC8vICAgICB0aGlzLnhoci5zZW5kKHRoaXMuYXJncy5kYXRhKTtcclxuICAgICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICB0aGlzLnhoci5zZW5kKCk7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vIEV2ZW50IExpc3RlbmVyc1xyXG4gICAgICAgIHRoaXMueGhyLmFkZEV2ZW50TGlzdGVuZXIoXCJwcm9ncmVzc1wiLCAoZSkgPT4gdGhpcy5wcm9ncmVzc0hhbmRsZXIoZSksIHRydWUpO1xyXG4gICAgICAgIHRoaXMueGhyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIChlKSA9PiB0aGlzLm9uTG9hZEhhbmRsZXIoZSksIHRydWUpO1xyXG4gICAgICAgIHRoaXMueGhyLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCAoZSkgPT4gdGhpcy5lcnJvckhhbmRsZXIoZSksIHRydWUpO1xyXG4gICAgICAgIHRoaXMueGhyLmFkZEV2ZW50TGlzdGVuZXIoXCJhYm9ydFwiLCAoZSkgPT4gdGhpcy5lcnJvckhhbmRsZXIoZSksIHRydWUpO1xyXG4gICAgICAgIHRoaXMueGhyLmFkZEV2ZW50TGlzdGVuZXIoXCJ0aW1lb3V0XCIsIChlKSA9PiB0aGlzLmVycm9ySGFuZGxlcihlKSwgdHJ1ZSk7XHJcbiAgICB9XHJcbiAgICAvLyAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtXHJcblxyXG5cclxuICAgIGVycm9ySGFuZGxlcihlKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJYSFIuZXJyb3JIYW5kbGVyKClcIik7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVycygpO1xyXG4gICAgICAgIGlmICh0aGlzLmFyZ3Mub25FcnJvcikge1xyXG4gICAgICAgICAgICB0aGlzLmFyZ3Mub25FcnJvcihlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtXHJcblxyXG5cclxuICAgIHByb2dyZXNzSGFuZGxlcihlKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJYSFIucHJvZ3Jlc3NIYW5kbGVyKClcIik7XHJcbiAgICAgICAgLy8gaWYgKGUubGVuZ3RoQ29tcHV0YWJsZSkge1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhgUmVjZWl2ZWQgJHtlLmxvYWRlZH0gb2YgJHtlLnRvdGFsfSBieXRlc2ApO1xyXG4gICAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGBSZWNlaXZlZCAke2UubG9hZGVkfSBieXRlc2ApOyAvLyBubyBDb250ZW50LUxlbmd0aFxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhgUmVjZWl2ZWQgJHtldmVudC5sb2FkZWR9IG9mICR7ZXZlbnQudG90YWx9YCk7XHJcbiAgICAgICAgaWYgKHRoaXMuYXJncy5vblByb2dyZXNzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXJncy5vblByb2dyZXNzKGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC1cclxuXHJcblxyXG4gICAgb25Mb2FkSGFuZGxlcihlKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJYSFIub25Mb2FkSGFuZGxlcigpXCIpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBEb25lLCBnb3QgJHt0aGlzLnhoci5yZXNwb25zZS5sZW5ndGh9IGJ5dGVzYCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy54aHIucmVzcG9uc2UpO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYXJncy5vbkNvbXBsZXRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXJncy5vbkNvbXBsZXRlKGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC1cclxuXHJcblxyXG4gICAgZ2V0UmVzcG9uc2VIZWFkZXIobmFtZSkge1xyXG4gICAgICAgIGlmICh0aGlzLnhocikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy54aHIuZ2V0UmVzcG9uc2VIZWFkZXIobmFtZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLVxyXG5cclxuXHJcbiAgICBnZXRBbGxSZXNwb25zZUhlYWRlcnMoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMueGhyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtXHJcblxyXG5cclxuICAgIGdldFJlc3BvbnNlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnhocikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy54aHIucmVzcG9uc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLVxyXG5cclxuXHJcbiAgICByZW1vdmVFdmVudExpc3RlbmVycygpIHtcclxuICAgICAgICB0aGlzLnhoci5yZW1vdmVFdmVudExpc3RlbmVyKFwicHJvZ3Jlc3NcIiwgKGUpID0+IHRoaXMucHJvZ3Jlc3NIYW5kbGVyKGUpKTtcclxuICAgICAgICB0aGlzLnhoci5yZW1vdmVFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoZSkgPT4gdGhpcy5vbkxvYWRIYW5kbGVyKGUpKTtcclxuICAgICAgICB0aGlzLnhoci5yZW1vdmVFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgKGUpID0+IHRoaXMuZXJyb3JIYW5kbGVyKGUpKTtcclxuICAgICAgICB0aGlzLnhoci5yZW1vdmVFdmVudExpc3RlbmVyKFwiYWJvcnRcIiwgKGUpID0+IHRoaXMuZXJyb3JIYW5kbGVyKGUpKTtcclxuICAgICAgICB0aGlzLnhoci5yZW1vdmVFdmVudExpc3RlbmVyKFwidGltZW91dFwiLCAoZSkgPT4gdGhpcy5lcnJvckhhbmRsZXIoZSkpO1xyXG4gICAgfVxyXG4gICAgLy8gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLVxyXG5cclxufVxuZXhwb3J0IGZ1bmN0aW9uIEdldFJhbmRvbUJvb2xlYW4oKXtcclxuICAgIHJldHVybiBNYXRoLnJhbmRvbSgpID49IDAuNTtcclxufVxuZXhwb3J0IGZ1bmN0aW9uIEdldFJhbmRvbUZsb2F0KG1pbiwgbWF4KSB7XHJcbiAgICAvLyBsZXQgciA9IGZyb20gKyAoTWF0aC5yYW5kb20oKSogKHRvKjIpKTtcclxuICAgIHJldHVybiAoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluKTtcclxufTtcclxuXG5leHBvcnQgZnVuY3Rpb24gR2V0UmFuZG9tSW50KG1pbiwgbWF4KSB7XHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcclxufVxuZXhwb3J0IGZ1bmN0aW9uIEdldFJhbmRvbVRoYXRzTm90KG1pbixtYXgsbm90KXtcclxuICAgIGxldCByID0gbm90OyBsZXQgbGltID0gMTAwOyBsZXQgcnVucyA9IDA7XHJcbiAgICB3aGlsZSAocj09PW5vdCAmJiBydW5zIDwgbGltKXtcclxuICAgICAgICBydW5zKys7XHJcbiAgICAgICAgciA9IGdldFJhbmRvbUludChtaW4sbWF4KTtcclxuICAgIH1cclxuICAgIGlmIChydW5zPj1saW0pe1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHI7XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIEBmdW5jdGlvbjogZ2V0UmFuZG9tVGhhdHNOb3QobWluLG1heCxub3QpXHJcbiAqIEBkZXNjOiByZXR1cm5zIGEgcmFuZG9tIGludCBiZXR3ZW4geW91ciBzcGVjaWZpZWQgbWluIGFuZCBtYXggdmFsdWVzIGJ1dCBuZXZlciB0aGUgbm90IHZhbHVlXHJcbiAqIEBwYXJhbSBtaW4gbnVtYmVyOiB0aGUgbWluaW11bSB5b3VyIHJhbmRvbSBudW1iZXIgaXMgYWxsb3dlZCB0byBnb1xyXG4gKiBAcGFyYW0gbWF4IG51bWJlcjogdGhlIG1heGltdW0geW91ciByYW5kb20gbnVtYmVyIGlzIGFsbG93ZWQgdG8gZ29cclxuICogQGFsaWFzOiBnZXRSYW5kb21cclxuICogQGxpbms6IGh0dHBzOi8vY29kZXBlbi5pby9BbGxGb3JUaGVDb2RlL3Blbi95RUJaTnFcclxuICovXG5leHBvcnQgZnVuY3Rpb24gR2V0V2VpZ2h0ZWRSYW5kb20ob2RkcywgaXRlcmF0aW9ucykge1xyXG4gICAgaWYgKCFvZGRzKSB7XHJcbiAgICAgICAgb2RkcyA9IFtcclxuICAgICAgICAgICAgMC42OCwgLy8gMFxyXG4gICAgICAgICAgICAwLjY5LCAvLyAxXHJcbiAgICAgICAgICAgIDAuNjk4LCAvLyAyXHJcbiAgICAgICAgICAgIDAuNjkwOSwgLy8gM1xyXG4gICAgICAgICAgICAwLjY4LCAvLyA0XHJcbiAgICAgICAgICAgIDAuNTgsIC8vIDVcclxuICAgICAgICAgICAgMC41NywgLy8gNlxyXG4gICAgICAgICAgICAwLjU2LCAvLyA3XHJcbiAgICAgICAgICAgIDAuNCwgLy8gOFxyXG4gICAgICAgICAgICAwLjMsIC8vIDlcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG4gICAgbGV0IHdlaWdodHMgPSBbXTtcclxuICAgIGxldCByID0gMDtcclxuICAgIGxldCBpTWF4ID0gMDtcclxuICAgIGxldCB3TWF4ID0gMDtcclxuXHJcbiAgICBmb3IgKGxldCBpIGluIG9kZHMpIHtcclxuICAgICAgICBpZiAoIXdlaWdodHNbaV0pIHtcclxuICAgICAgICAgICAgd2VpZ2h0c1tpXSA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGl0ZXJhdGlvbnM7IHgrKykge1xyXG4gICAgICAgICAgICByID0gTWF0aC5yYW5kb20oKTtcclxuICAgICAgICAgICAgLy9sb2coci50b0ZpeGVkKDMpICsgXCIgICBcIiArIG9kZHNbaV0udG9GaXhlZCgzKSk7XHJcbiAgICAgICAgICAgIGlmIChyIDw9IG9kZHNbaV0pIHtcclxuICAgICAgICAgICAgICAgIHdlaWdodHNbaV0gKz0gb2Rkc1tpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHdlaWdodHNbaV0gPiB3TWF4KSB7XHJcbiAgICAgICAgICAgIHdNYXggPSB3ZWlnaHRzW2ldO1xyXG4gICAgICAgICAgICBpTWF4ID0gaTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy9sb2cod2VpZ2h0cyk7XHJcbiAgICAvL2xvZyhcIndNYXggPSBcIiArIHdNYXggKyBcIiAgIGlNYXggPSBcIiArIGlNYXgpO1xyXG4gICAgcmV0dXJuIGlNYXg7XHJcbn07XHJcbi8qKlxyXG4gKiBAZnVuY3Rpb246IGdldFdlaWdodGVkUmFuZG9tKG9kZHMsIGl0ZXJhdGlvbnMpXHJcbiAqIEBkZXNjOiBHZXQgYSB3ZWlnaHRlZCByYW5kb20gYmFzZWQgb24gb2RkcyBhbmQgaXRlcmF0aW9uc1xyXG4gKiBAcGFyYW0gb2RkcyBhcnJheTogYXJyYXkgb2Ygb2Rkc1xyXG4gKiBAcGFyYW0gaXRlcmF0aW9ucyBudW1iZXI6IG51bWJlciBvZiBpdGVyYXRpb25zIHRvIHJ1biBvbiBlYWNoIG51bWJlciB0ZXN0XHJcbiAqIEBsaW5rOiBodHRwczovL2NvZGVwZW4uaW8vQWxsRm9yVGhlQ29kZS9wZW4vUnl2V2paXHJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIEluZXJ0aWFUbyhjdXJyZW50LHRhcmdldCxhbW91bnQpe1xyXG4gICAgaWYgKGFtb3VudCA9PSAxKSB7XHJcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcclxuICAgIH1cclxuICAgIGxldCBkaXN0VG9HbyA9IHRhcmdldCAtIGN1cnJlbnQ7XHJcbiAgICBsZXQgZGVsdGEgPSBjdXJyZW50ICsgKGRpc3RUb0dvICogYW1vdW50KTtcclxuXHJcbiAgICBpZiAoTWF0aC5hYnMoZGlzdFRvR28pIDwgMC4wMSkge1xyXG4gICAgICAgIGRpc3RUb0dvID0gMDtcclxuICAgICAgICBkZWx0YSA9IHRhcmdldDtcclxuICAgIH1cclxuICAgIHJldHVybiBkZWx0YTtcclxufVxyXG5cbmV4cG9ydCBmdW5jdGlvbiBJc0V2ZW4obikge1xyXG4gICAgcmV0dXJuIG4gJSAyID09PSAwO1xyXG59XHJcblxuZXhwb3J0IGZ1bmN0aW9uIElzT2RkKG4pIHtcclxuICAgIHJldHVybiBNYXRoLmFicyhuICUgMikgPT09IDE7XHJcbn1cbmV4cG9ydCBmdW5jdGlvbiBOb3JtYWxpc2VSYW5nZShtaW4sIG1heCwgdikge1xyXG4gICAgbGV0IHJhbmdlID0gbWF4IC0gbWluO1xyXG4gICAgbGV0IHN0ZXAgPSAxIC8gcmFuZ2U7XHJcbiAgICBsZXQgciA9IChzdGVwICogKHYgLSBtaW4pKTtcclxuICAgIGlmICh2IDwgbWluKSB7XHJcbiAgICAgICAgciA9IDA7XHJcbiAgICB9IGVsc2UgaWYgKHYgPiBtYXgpIHtcclxuICAgICAgICByID0gMTtcclxuICAgIH1cclxuICAgIHJldHVybiByO1xyXG59XHJcblxuZXhwb3J0IGZ1bmN0aW9uIFBhcnNlQXJyYXlUb0Zsb2F0KGFycikge1xyXG4gICAgbGV0IGNvbnZlcnRlZDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29udmVydGVkID0gcGFyc2VGbG9hdChhcnJbaV0pO1xyXG4gICAgICAgIGlmIChpc05hTihjb252ZXJ0ZWQpKXtcclxuICAgICAgICAgICAgYXJyW2ldID0gMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhcnJbaV0gPSBjb252ZXJ0ZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFycjtcclxufVxyXG5cbmV4cG9ydCBmdW5jdGlvbiBQYXJzZUFycmF5VG9JbnQoYXJyKSB7XHJcbiAgICBsZXQgY29udmVydGVkO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb252ZXJ0ZWQgPSBwYXJzZUludChhcnJbaV0pO1xyXG4gICAgICAgIGlmIChpc05hTihjb252ZXJ0ZWQpKXtcclxuICAgICAgICAgICAgYXJyW2ldID0gMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhcnJbaV0gPSBjb252ZXJ0ZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFycjtcclxufVxuZXhwb3J0IGZ1bmN0aW9uIFJvdW5kVG8odiwgZGVjKSB7XHJcbiAgICByZXR1cm4gKyhNYXRoLnJvdW5kKE51bWJlcih2ICsgXCJlK1wiICsgZGVjKSkgKyBcImUtXCIgKyBkZWMpO1xyXG59XHJcblxuZXhwb3J0IGNsYXNzIEZQU01vbml0b3Ige1xyXG4gICAgLy8gV0FSTklORzogZXhwb3J0IGNsYXNzIHdpbGwgbm90IHdvcmsgZm9yIHRyYW5zcGlsZSB0byBJRTExIChERUxFVEUgQ0xBU1MgSUYgWU9VIFNUSUxMIE5FRUQgYWZ0Yy1tb2R1bGVzIG9yIHVzZSBTUkMgZmlsZSBpbmNsdWRlcylcclxuICAgIC8vIE5PVEU6IEFsdGVybmF0aXZlbHkgdXNlIGFmdGMuanMgZm9yIEVTNSAtIG5wbSBpIGFmdGMuanNcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlbGUpIHtcclxuXHJcbiAgICAgICAgdGhpcy5kb20gPSB7XHJcbiAgICAgICAgICAgIGZwczogZmFsc2VcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZnBzU3RhY2sgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnN0YWNrU2l6ZSA9IDYwO1xyXG4gICAgICAgIHRoaXMuaW5kZXggPSAwO1xyXG5cclxuICAgICAgICB0aGlzLmxhc3QgPSAwO1xyXG4gICAgICAgIHRoaXMubm93ID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy5kZWx0YSA9IDA7XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudEZyYW1lRnBzID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy50b3RhbCA9IDA7XHJcbiAgICAgICAgdGhpcy5hdmVyYWdlRnBzID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy5pID0gMDtcclxuXHJcbiAgICAgICAgaWYgKGVsZSl7XHJcbiAgICAgICAgICAgIHRoaXMuZG9tLmZwcyA9IGVsZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZnBzU3RhY2sgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMuc3RhY2tTaXplKTtcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICB1cGRhdGUoKXtcclxuICAgICAgICB0aGlzLm5vdyA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG5cclxuICAgICAgICB0aGlzLmRlbHRhID0gKHRoaXMubm93IC0gdGhpcy5sYXN0KSAvIDEwMDA7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50RnJhbWVGcHMgPSAxL3RoaXMuZGVsdGE7XHJcbiAgICAgICAgLy8gbG9nKFwiY3VycmVudEZyYW1lRnBzID0gXCIgKyB0aGlzLmN1cnJlbnRGcmFtZUZwcyk7XHJcblxyXG4gICAgICAgIHRoaXMuZnBzU3RhY2tbdGhpcy5pbmRleF0gPSB0aGlzLmN1cnJlbnRGcmFtZUZwcztcclxuXHJcbiAgICAgICAgdGhpcy50b3RhbCA9IDA7XHJcbiAgICAgICAgZm9yKHRoaXMuaT0wOyB0aGlzLmkgPCB0aGlzLnN0YWNrU2l6ZTsgdGhpcy5pKyspe1xyXG4gICAgICAgICAgICB0aGlzLnRvdGFsICs9IHRoaXMuZnBzU3RhY2tbdGhpcy5pXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYXZlcmFnZUZwcyA9IE1hdGgucm91bmQoIHRoaXMudG90YWwvdGhpcy5zdGFja1NpemUgKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZG9tLmZwcyl7XHJcbiAgICAgICAgICAgIHRoaXMuZG9tLmZwcy5pbm5lclRleHQgPSB0aGlzLmF2ZXJhZ2VGcHM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmxhc3QgPSB0aGlzLm5vdztcclxuXHJcbiAgICAgICAgdGhpcy5pbmRleCsrO1xyXG4gICAgICAgIGlmICh0aGlzLmluZGV4ID49IHRoaXMuc3RhY2tTaXplKXtcclxuICAgICAgICAgICAgdGhpcy5pbmRleCA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCk9PntcclxuICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZ2V0RnBzKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXZlcmFnZUZwcztcclxuICAgIH1cclxufVxyXG5cbmV4cG9ydCBmdW5jdGlvbiBHZXRHVUlEKCkge1xyXG4gICAgZnVuY3Rpb24gQW1pZ2EoKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoKDEgKyBNYXRoLnJhbmRvbSgpKSAqIDB4MTAwMDApXHJcbiAgICAgICAgICAgIC50b1N0cmluZygxNilcclxuICAgICAgICAgICAgLnN1YnN0cmluZygxKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gQW1pZ2EoKSArIEFtaWdhKCkgKyAnLScgKyBBbWlnYSgpICsgJy0nICsgQW1pZ2EoKSArICctJyArXHJcbiAgICAgICAgQW1pZ2EoKSArICctJyArIEFtaWdhKCkgKyBBbWlnYSgpICsgQW1pZ2EoKTtcclxufVxuZXhwb3J0IGZ1bmN0aW9uIEdldFVJRChsZW4pIHtcclxuICAgIGlmIChsZW4gPiAzNCl7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkdldFVJRChsZW5ndGgpOiBMaW1pdCBlcnJvcjogTGVuZ3RoIG11c3QgYmUgMzQgb3IgbG93ZXJcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwgbGVuKTtcclxuICAgIH1cclxufVxuZXhwb3J0IGZ1bmN0aW9uIElzQWxwaGFOdW1lcmljKHYpIHtcclxuICAgIHJldHVybiAhKC9cXFcvLnRlc3QodikpO1xyXG59XG5leHBvcnQgZnVuY3Rpb24gSXNBcnJheShpbnB1dCkge1xyXG4gICAgcmV0dXJuICEhaW5wdXQgJiYgaW5wdXQuY29uc3RydWN0b3IgPT09IEFycmF5O1xyXG4gICAgLy9yZXR1cm4gYXJyLmNvbnN0cnVjdG9yID09PSBBcnJheTtcclxufVxuZXhwb3J0IGZ1bmN0aW9uIElzQm9vbChpbnB1dCkge1xyXG4gICAgaWYgKHR5cGVvZiAoaW5wdXQpID09PSBcImJvb2xlYW5cIikge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cbmV4cG9ydCBmdW5jdGlvbiBJc0Jvb2xlYW4oaW5wdXQpIHtcclxuICAgIGlmICh0eXBlb2YgKGlucHV0KSA9PT0gXCJib29sZWFuXCIpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XG5leHBvcnQgZnVuY3Rpb24gSXNOdW1iZXIobikge1xyXG4gICAgcmV0dXJuICFpc05hTihwYXJzZUZsb2F0KG4pKSAmJiBpc0Zpbml0ZShuKTtcclxufVxuZXhwb3J0IGZ1bmN0aW9uIElzTnVtZXJpYyhuKSB7XHJcbiAgICByZXR1cm4gIWlzTmFOKHBhcnNlRmxvYXQobikpICYmIGlzRmluaXRlKG4pO1xyXG59XG5leHBvcnQgZnVuY3Rpb24gQ3V0U3RyaW5nVG8ocywgbGVuKSB7XHJcbiAgICByZXR1cm4gcy5zdWJzdHJpbmcoMCwgbGVuKTtcclxufVxuZXhwb3J0IGZ1bmN0aW9uIEVzY2FwZUhUTUwoc3RyKSB7XHJcbiAgICBpZiAodHlwZW9mIChzdHIpICE9IFwic3RyaW5nXCIpIHsgY29uc29sZS5lcnJvcihcImVzY2FwZShhcmcpOiB1c2FnZSBlcnJvcjogYXJnIG5lZWRzIHRvIGJlIGEgc3RyaW5nIVwiKTsgcmV0dXJuIGZhbHNlOyB9XHJcblxyXG4gICAgbGV0IHJlcGxhY2VtZW50cyA9IHtcclxuICAgICAgICBcIjxcIjogXCImbHQ7XCIsXHJcbiAgICAgICAgXCI+XCI6IFwiJmd0O1wiLFxyXG4gICAgICAgIFwiJlwiOiBcIiZhbXA7XCIsXHJcbiAgICAgICAgXCJcXFwiXCI6IFwiJnF1b3Q7XCIsXHJcbiAgICAgICAgXCJgXCI6IFwiJiMwMzk7XCJcclxuICAgIH07XHJcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1s8PiZcIl0vZywgZnVuY3Rpb24gKGNoYXJhY3Rlcikge1xyXG4gICAgICAgIHJldHVybiByZXBsYWNlbWVudHNbY2hhcmFjdGVyXTtcclxuICAgIH0pO1xyXG59XG5leHBvcnQgZnVuY3Rpb24gR2V0QW5jaG9yKHVybCkge1xyXG4gICAgaWYgKCF1cmwpIHsgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7IH1cclxuICAgIGxldCBhbmNob3JBdmFpbGFibGUgPSBpc0luU3RyaW5nKFwiI1wiLCB1cmwpO1xyXG4gICAgaWYgKGFuY2hvckF2YWlsYWJsZSkge1xyXG4gICAgICAgIHJldHVybiB1cmwuc2xpY2UodXJsLmxhc3RJbmRleE9mKCcjJykgKyAxKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiBAZnVuY3Rpb246IEdldEFuY2hvcih1cmwpXHJcbiAqIEBkZXNjOiBHZXQgYW5jaG9yIGZyb20gdXJsXHJcbiAqIEBwYXJhbSBzdHJpbmcgdXJsOiBUaGUgdXJsIHRvIGdldCB0aGUgYW5jaG9yIGZyb21cclxuICogQGxpbms6XHJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIEdldENsZWFuSlNPTlN0cmluZyAocykge1xyXG4gICAgLy8gcHJlc2VydmUgbmV3bGluZXMsIGV0YyAtIHVzZSB2YWxpZCBKU09OXHJcbiAgICBzID0gcy5yZXBsYWNlKC9cXFxcbi9nLCBcIlxcXFxuXCIpXHJcbiAgICAgICAgLnJlcGxhY2UoL1xcXFwnL2csIFwiXFxcXCdcIilcclxuICAgICAgICAucmVwbGFjZSgvXFxcXFwiL2csICdcXFxcXCInKVxyXG4gICAgICAgIC5yZXBsYWNlKC9cXFxcJi9nLCBcIlxcXFwmXCIpXHJcbiAgICAgICAgLnJlcGxhY2UoL1xcXFxyL2csIFwiXFxcXHJcIilcclxuICAgICAgICAucmVwbGFjZSgvXFxcXHQvZywgXCJcXFxcdFwiKVxyXG4gICAgICAgIC5yZXBsYWNlKC9cXFxcYi9nLCBcIlxcXFxiXCIpXHJcbiAgICAgICAgLnJlcGxhY2UoL1xcXFxmL2csIFwiXFxcXGZcIik7XHJcbiAgICAvLyByZW1vdmUgbm9uLXByaW50YWJsZSBhbmQgb3RoZXIgbm9uLXZhbGlkIEpTT04gY2hhcnNcclxuICAgIHMgPSBzLnJlcGxhY2UoL1tcXHUwMDAwLVxcdTAwMTldKy9nLCBcIlwiKTtcclxuICAgIHJldHVybiBzO1xyXG59XG5leHBvcnQgZnVuY3Rpb24gR2V0RmlsZUV4dGVuc2lvbihpbnB1dCkge1xyXG4gICAgcmV0dXJuIGlucHV0LnNsaWNlKChpbnB1dC5sYXN0SW5kZXhPZihcIi5cIikgLSAxID4+PiAwKSArIDIpO1xyXG59XG5leHBvcnQgZnVuY3Rpb24gR2V0RmlsZUV4dGVuc2lvbjIoc3RyKSB7XHJcbiAgICAvLyBOZWVkcyBpbXByb3ZpbmdcclxuICAgIGxldCBleHQgPSBzdHIuc3BsaXQoJy4nKS5wb3AoKTtcclxuICAgIHJldHVybiBleHQ7XHJcbn1cbmV4cG9ydCBmdW5jdGlvbiBHZXRMYXN0UGFydE9mVXJsKHVybCkge1xyXG4gICAgaWYgKCF1cmwpIHtcclxuICAgICAgICB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICAgIH1cclxuICAgIGxldCBwYXJ0ID0gdXJsLnN1YnN0cmluZyh1cmwubGFzdEluZGV4T2YoJy8nKSArIDEpO1xyXG4gICAgcmV0dXJuIHBhcnQ7XHJcbn1cbmV4cG9ydCBmdW5jdGlvbiBHZXRSYW5kb21TdHJpbmcobGVuKSB7XHJcbiAgICBsZXQgdGV4dCA9IFwiXCI7XHJcbiAgICBsZXQgcG9zc2libGUgPSBcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXpcIjtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgdGV4dCArPSBwb3NzaWJsZS5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcG9zc2libGUubGVuZ3RoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRleHQ7XHJcbn1cclxuXG5leHBvcnQgZnVuY3Rpb24gR2V0U3RyaW5nQmV0d2VlbihzdHIsIHN0YXJ0LCBlbmQpIHtcclxuICAgIHJldHVybiBzdHIuc3BsaXQoc3RhcnQpLnBvcCgpLnNwbGl0KGVuZCkuc2hpZnQoKS50cmltKCk7XHJcbn1cclxuLyoqXHJcbiAqIEBmdW5jdGlvbjogZ2V0U3RyaW5nQmV0d2VlbihpbnB1dCxzdGFydCxlbmQpXHJcbiAqIEBkZXNjOiBHZXRzIGEgc3RyaW5nIGJldHdlZW4gdHdvIG90aGVyIHN0cmluZ3NcclxuICogQHBhcmFtIHN0cmluZyBpbnB1dDogaW5wdXQgc3RyaW5nIHRvIGNoZWNrXHJcbiAqIEBwYXJhbSBzdHJpbmcgc3RhcnQ6IHN0YXJ0IHN0cmluZyBtYXJrZXJcclxuICogQHBhcmFtIHN0cmluZyBlbmQ6IGVuZCBzdHJpbmcgbWFya2VyXHJcbiAqIEBsaW5rOiBodHRwczovL2NvZGVwZW4uaW8vQWxsRm9yVGhlQ29kZS9wZW4veHh4eHh4eFxyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdHJpbmdzQmV0d2VlbjIoc3RyLCBzdGFydCwgZW5kKSB7XHJcbiAgICBsZXQgb3JpZyA9IHN0cjtcclxuICAgIGxldCByZXN1bHRzID0gW107XHJcbiAgICAvLyBsb2cob3JpZyk7XHJcbiAgICAvLyBsb2coXCItLS0tLS0tLVwiKTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRCZXR3ZWVuKCkge1xyXG4gICAgICAgIC8vIGxvZyhcIkNIRUNLSU5HOiBcIiArIHN0cik7XHJcbiAgICAgICAgbGV0IHN0YXJ0TWF0Y2hJbmRleCA9IHN0ci5pbmRleE9mKHN0YXJ0KTsgLy8gRmluZCBzdGFydCBtYXRjaFxyXG4gICAgICAgIC8vIGxvZyhcInN0YXJ0TWF0Y2hJbmRleDogXCIgKyBzdGFydE1hdGNoSW5kZXgpO1xyXG4gICAgICAgIGlmIChzdGFydE1hdGNoSW5kZXggPT09IC0xKSB7IHJldHVybiBmYWxzZTsgfVxyXG5cclxuICAgICAgICBsZXQgc3RhcnRDdXRJbmRleCA9IHN0YXJ0Lmxlbmd0aCArIHN0YXJ0TWF0Y2hJbmRleDsgLy8gY2FsYyBzdGFydCBjdXQgaW5kZXhcclxuICAgICAgICAvLyBsb2coXCJzdGFydEN1dEluZGV4OiBcIiArIHN0YXJ0Q3V0SW5kZXgpO1xyXG5cclxuICAgICAgICBzdHIgPSBzdHIuc3Vic3RyaW5nKHN0YXJ0Q3V0SW5kZXgsIHN0ci5sZW5ndGgpOyAvLyBMVHJpbSB0byBzdGFydCBjdXQgaW5kZXhcclxuICAgICAgICAvLyBsb2coXCJDVVQ6IFwiICsgc3RyKTtcclxuXHJcbiAgICAgICAgbGV0IGVuZE1hdGNoSW5kZXggPSBzdHIuaW5kZXhPZihlbmQpOyAvLyBmaW5kIGVuZCBtYXRjaCBpbmRleFxyXG4gICAgICAgIC8vIGxvZyhcImVuZE1hdGNoSW5kZXg6IFwiICsgZW5kTWF0Y2hJbmRleCk7XHJcbiAgICAgICAgaWYgKGVuZE1hdGNoSW5kZXggPT09IC0xKSB7IHJldHVybiBmYWxzZTsgfVxyXG5cclxuICAgICAgICBsZXQgYmV0d2VlbiA9IHN0ci5zdWJzdHJpbmcoMCwgZW5kTWF0Y2hJbmRleCk7IC8vIGdldCBzdHJpbmcgYmV0d2VlblxyXG4gICAgICAgIC8vIGxvZyhcImJldHdlZW46IFwiICsgYmV0d2Vlbik7XHJcbiAgICAgICAgbGV0IGVuZEN1dEluZGV4ID0gZW5kLmxlbmd0aCArIGVuZE1hdGNoSW5kZXg7XHJcbiAgICAgICAgLy9sb2coXCJlbmRDdXRJbmRleDogXCIgKyBlbmRDdXRJbmRleCk7XHJcbiAgICAgICAgc3RyID0gc3RyLnN1YnN0cmluZyhlbmRDdXRJbmRleCwgc3RyLmxlbmd0aCk7IC8vIGN1dCBvZmYgZW5kIHN0cmluZ1xyXG4gICAgICAgIC8vbG9nKFwiRklOQUw6IFwiICsgc3RyKTtcclxuICAgICAgICByZXR1cm4gYmV0d2VlbjtcclxuICAgIH1cclxuICAgIGxldCBsaW0gPSA1MDA7IC8vIFdhbnQgdG8gbG9vcCBmb3JldmVyPyA1MDAgc2VlbXMgbGlrZSBhcmVhc29uYWJsZSBsaW1pdFxyXG4gICAgbGV0IHBvcyA9IDA7XHJcbiAgICBsZXQgcmVzdWx0ID0gdHJ1ZTtcclxuICAgIHdoaWxlIChwb3MgPD0gbGltICYmIHJlc3VsdCAhPSBmYWxzZSkge1xyXG4gICAgICAgIHBvcysrO1xyXG4gICAgICAgIHJlc3VsdCA9IGdldEJldHdlZW4oKTtcclxuICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIC8vbG9nKFwiYmV0d2VlbltcIitpK1wiXSA9IFwiICsgcmVzdWx0KTtcclxuICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIC8vbG9nKFwiXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHRzO1xyXG59XHJcbi8vIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC1cclxuXHJcbi8qKlxyXG4gKiBAZnVuY3Rpb246IGdldFN0cmluZ3NCZXR3ZWVuKHN0cixzdGFydCxlbmQpXHJcbiAqIEBkZXNjOiBHZXRzIGFsbCBzdHJpbmdzIGJldHdlZW4gdHdvIG90aGVyIHN0cmluZ3MgKG11bHRpIG1hdGNoKVxyXG4gKiBAcGFyYW0gc3RyaW5nIHN0cjogaW5wdXQgc3RyaW5nIHRvIGNoZWNrXHJcbiAqIEBwYXJhbSBzdHJpbmcgc3RhcnQ6IHN0YXJ0IHN0cmluZyBtYXJrZXJcclxuICogQHBhcmFtIHN0cmluZyBlbmQ6IGVuZCBzdHJpbmcgbWFya2VyXHJcbiAqIEBsaW5rOiBodHRwczovL2NvZGVwZW4uaW8vQWxsRm9yVGhlQ29kZS9wZW4veHh4eHh4eFxyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBHZXRXb3JkQ291bnQoc3RyKSB7XHJcbiAgICByZXR1cm4gc3RyLnNwbGl0KC9cXFMrLykubGVuZ3RoIC0gMTtcclxufVxuZXhwb3J0IGZ1bmN0aW9uIEluU3RyaW5nKGZpbmQsc291cmNlKSB7IHJldHVybiBzb3VyY2UuaW5kZXhPZihmaW5kKSAhPT0gLTE7IH1cbmV4cG9ydCBmdW5jdGlvbiBJc0luU3RyaW5nKGZpbmQsc291cmNlKSB7IHJldHVybiBzb3VyY2UuaW5kZXhPZihmaW5kKSAhPT0gLTE7IH1cbmV4cG9ydCBmdW5jdGlvbiBMVHJpbUJ5KHN0ciwgYnkpIHtcclxuICAgIHJldHVybiBzdHIuc3Vic3RyaW5nKGJ5LCBzdHIubGVuZ3RoKTtcclxufVxuZXhwb3J0IGZ1bmN0aW9uIFJlbW92ZUZpbGVGcm9tUGF0aChwYXRoKSB7XHJcbiAgICAvL2xldCBwYSA9ICcvdGhpcy9pcy9hL2ZvbGRlci9hRmlsZS50eHQnO1xyXG4gICAgbGV0IHIgPSAvW15cXC9dKiQvO1xyXG4gICAgcGF0aCA9IHBhdGgucmVwbGFjZShyLCAnJyk7XHJcbiAgICByZXR1cm4gcGF0aDtcclxufVxuZXhwb3J0IGZ1bmN0aW9uIFJUcmltQnkoc3RyLCB0cmltQnkpIHtcclxuICAgIHJldHVybiAoc3RyLnN1YnN0cmluZygwLCBzdHIubGVuZ3RoIC0gdHJpbUJ5KSk7XHJcbn1cbmV4cG9ydCBmdW5jdGlvbiBUcmltU3RyaW5nQnkoc3RyLCB0cmltQnkpIHtcclxuICAgIHJldHVybiAoc3RyLnN1YnN0cmluZygwLCBzdHIubGVuZ3RoIC0gdHJpbUJ5KSk7XHJcbn1cbmV4cG9ydCBmdW5jdGlvbiBVY0ZpcnN0KHMpIHtcclxuICAgIGlmICh0eXBlb2YgcyAhPT0gJ3N0cmluZycpIHJldHVybiAnJ1xyXG4gICAgcmV0dXJuIHMuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzLnNsaWNlKDEpXHJcbn1cbmV4cG9ydCBmdW5jdGlvbiBJc0VtYWlsIChlbWFpbCkge1xyXG4gICAgbGV0IHJlID0gL14oKFtePD4oKVtcXF1cXFxcLiw7Olxcc0BcXFwiXSsoXFwuW148PigpW1xcXVxcXFwuLDs6XFxzQFxcXCJdKykqKXwoXFxcIi4rXFxcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcXSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XHJcbiAgICByZXR1cm4gcmUudGVzdChlbWFpbCk7XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGF0ID0gcmVxdWlyZSgnLi9fc3RyaW5nLWF0JykodHJ1ZSk7XG5cbiAvLyBgQWR2YW5jZVN0cmluZ0luZGV4YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFkdmFuY2VzdHJpbmdpbmRleFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoUywgaW5kZXgsIHVuaWNvZGUpIHtcbiAgcmV0dXJuIGluZGV4ICsgKHVuaWNvZGUgPyBhdChTLCBpbmRleCkubGVuZ3RoIDogMSk7XG59O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbnZhciBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcbi8vIEVTMyB3cm9uZyBoZXJlXG52YXIgQVJHID0gY29mKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICB0cnkge1xuICAgIHJldHVybiBpdFtrZXldO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBPLCBULCBCO1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAoVCA9IHRyeUdldChPID0gT2JqZWN0KGl0KSwgVEFHKSkgPT0gJ3N0cmluZycgPyBUXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBBUkcgPyBjb2YoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAoQiA9IGNvZihPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IEI7XG59O1xuIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuIiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHsgdmVyc2lvbjogJzIuNi4xMScgfTtcbmlmICh0eXBlb2YgX19lID09ICdudW1iZXInKSBfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4iLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgdGhhdCwgbGVuZ3RoKSB7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmICh0aGF0ID09PSB1bmRlZmluZWQpIHJldHVybiBmbjtcbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG4iLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uICh0eXBlLCBuYW1lLCBzb3VyY2UpIHtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkY7XG4gIHZhciBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HO1xuICB2YXIgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuUztcbiAgdmFyIElTX1BST1RPID0gdHlwZSAmICRleHBvcnQuUDtcbiAgdmFyIElTX0JJTkQgPSB0eXBlICYgJGV4cG9ydC5CO1xuICB2YXIgdGFyZ2V0ID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIHx8IChnbG9iYWxbbmFtZV0gPSB7fSkgOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdO1xuICB2YXIgZXhwb3J0cyA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pO1xuICB2YXIgZXhwUHJvdG8gPSBleHBvcnRzW1BST1RPVFlQRV0gfHwgKGV4cG9ydHNbUFJPVE9UWVBFXSA9IHt9KTtcbiAgdmFyIGtleSwgb3duLCBvdXQsIGV4cDtcbiAgaWYgKElTX0dMT0JBTCkgc291cmNlID0gbmFtZTtcbiAgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IChvd24gPyB0YXJnZXQgOiBzb3VyY2UpW2tleV07XG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICBleHAgPSBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHRlbmQgZ2xvYmFsXG4gICAgaWYgKHRhcmdldCkgcmVkZWZpbmUodGFyZ2V0LCBrZXksIG91dCwgdHlwZSAmICRleHBvcnQuVSk7XG4gICAgLy8gZXhwb3J0XG4gICAgaWYgKGV4cG9ydHNba2V5XSAhPSBvdXQpIGhpZGUoZXhwb3J0cywga2V5LCBleHApO1xuICAgIGlmIChJU19QUk9UTyAmJiBleHBQcm90b1trZXldICE9IG91dCkgZXhwUHJvdG9ba2V5XSA9IG91dDtcbiAgfVxufTtcbmdsb2JhbC5jb3JlID0gY29yZTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcbnJlcXVpcmUoJy4vZXM2LnJlZ2V4cC5leGVjJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG52YXIgd2tzID0gcmVxdWlyZSgnLi9fd2tzJyk7XG52YXIgcmVnZXhwRXhlYyA9IHJlcXVpcmUoJy4vX3JlZ2V4cC1leGVjJyk7XG5cbnZhciBTUEVDSUVTID0gd2tzKCdzcGVjaWVzJyk7XG5cbnZhciBSRVBMQUNFX1NVUFBPUlRTX05BTUVEX0dST1VQUyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vICNyZXBsYWNlIG5lZWRzIGJ1aWx0LWluIHN1cHBvcnQgZm9yIG5hbWVkIGdyb3Vwcy5cbiAgLy8gI21hdGNoIHdvcmtzIGZpbmUgYmVjYXVzZSBpdCBqdXN0IHJldHVybiB0aGUgZXhlYyByZXN1bHRzLCBldmVuIGlmIGl0IGhhc1xuICAvLyBhIFwiZ3JvcHNcIiBwcm9wZXJ0eS5cbiAgdmFyIHJlID0gLy4vO1xuICByZS5leGVjID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICByZXN1bHQuZ3JvdXBzID0geyBhOiAnNycgfTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICByZXR1cm4gJycucmVwbGFjZShyZSwgJyQ8YT4nKSAhPT0gJzcnO1xufSk7XG5cbnZhciBTUExJVF9XT1JLU19XSVRIX09WRVJXUklUVEVOX0VYRUMgPSAoZnVuY3Rpb24gKCkge1xuICAvLyBDaHJvbWUgNTEgaGFzIGEgYnVnZ3kgXCJzcGxpdFwiIGltcGxlbWVudGF0aW9uIHdoZW4gUmVnRXhwI2V4ZWMgIT09IG5hdGl2ZUV4ZWNcbiAgdmFyIHJlID0gLyg/OikvO1xuICB2YXIgb3JpZ2luYWxFeGVjID0gcmUuZXhlYztcbiAgcmUuZXhlYyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG9yaWdpbmFsRXhlYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9O1xuICB2YXIgcmVzdWx0ID0gJ2FiJy5zcGxpdChyZSk7XG4gIHJldHVybiByZXN1bHQubGVuZ3RoID09PSAyICYmIHJlc3VsdFswXSA9PT0gJ2EnICYmIHJlc3VsdFsxXSA9PT0gJ2InO1xufSkoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZLCBsZW5ndGgsIGV4ZWMpIHtcbiAgdmFyIFNZTUJPTCA9IHdrcyhLRVkpO1xuXG4gIHZhciBERUxFR0FURVNfVE9fU1lNQk9MID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBTdHJpbmcgbWV0aG9kcyBjYWxsIHN5bWJvbC1uYW1lZCBSZWdFcCBtZXRob2RzXG4gICAgdmFyIE8gPSB7fTtcbiAgICBPW1NZTUJPTF0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9O1xuICAgIHJldHVybiAnJ1tLRVldKE8pICE9IDc7XG4gIH0pO1xuXG4gIHZhciBERUxFR0FURVNfVE9fRVhFQyA9IERFTEVHQVRFU19UT19TWU1CT0wgPyAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIC8vIFN5bWJvbC1uYW1lZCBSZWdFeHAgbWV0aG9kcyBjYWxsIC5leGVjXG4gICAgdmFyIGV4ZWNDYWxsZWQgPSBmYWxzZTtcbiAgICB2YXIgcmUgPSAvYS87XG4gICAgcmUuZXhlYyA9IGZ1bmN0aW9uICgpIHsgZXhlY0NhbGxlZCA9IHRydWU7IHJldHVybiBudWxsOyB9O1xuICAgIGlmIChLRVkgPT09ICdzcGxpdCcpIHtcbiAgICAgIC8vIFJlZ0V4cFtAQHNwbGl0XSBkb2Vzbid0IGNhbGwgdGhlIHJlZ2V4J3MgZXhlYyBtZXRob2QsIGJ1dCBmaXJzdCBjcmVhdGVzXG4gICAgICAvLyBhIG5ldyBvbmUuIFdlIG5lZWQgdG8gcmV0dXJuIHRoZSBwYXRjaGVkIHJlZ2V4IHdoZW4gY3JlYXRpbmcgdGhlIG5ldyBvbmUuXG4gICAgICByZS5jb25zdHJ1Y3RvciA9IHt9O1xuICAgICAgcmUuY29uc3RydWN0b3JbU1BFQ0lFU10gPSBmdW5jdGlvbiAoKSB7IHJldHVybiByZTsgfTtcbiAgICB9XG4gICAgcmVbU1lNQk9MXSgnJyk7XG4gICAgcmV0dXJuICFleGVjQ2FsbGVkO1xuICB9KSA6IHVuZGVmaW5lZDtcblxuICBpZiAoXG4gICAgIURFTEVHQVRFU19UT19TWU1CT0wgfHxcbiAgICAhREVMRUdBVEVTX1RPX0VYRUMgfHxcbiAgICAoS0VZID09PSAncmVwbGFjZScgJiYgIVJFUExBQ0VfU1VQUE9SVFNfTkFNRURfR1JPVVBTKSB8fFxuICAgIChLRVkgPT09ICdzcGxpdCcgJiYgIVNQTElUX1dPUktTX1dJVEhfT1ZFUldSSVRURU5fRVhFQylcbiAgKSB7XG4gICAgdmFyIG5hdGl2ZVJlZ0V4cE1ldGhvZCA9IC8uL1tTWU1CT0xdO1xuICAgIHZhciBmbnMgPSBleGVjKFxuICAgICAgZGVmaW5lZCxcbiAgICAgIFNZTUJPTCxcbiAgICAgICcnW0tFWV0sXG4gICAgICBmdW5jdGlvbiBtYXliZUNhbGxOYXRpdmUobmF0aXZlTWV0aG9kLCByZWdleHAsIHN0ciwgYXJnMiwgZm9yY2VTdHJpbmdNZXRob2QpIHtcbiAgICAgICAgaWYgKHJlZ2V4cC5leGVjID09PSByZWdleHBFeGVjKSB7XG4gICAgICAgICAgaWYgKERFTEVHQVRFU19UT19TWU1CT0wgJiYgIWZvcmNlU3RyaW5nTWV0aG9kKSB7XG4gICAgICAgICAgICAvLyBUaGUgbmF0aXZlIFN0cmluZyBtZXRob2QgYWxyZWFkeSBkZWxlZ2F0ZXMgdG8gQEBtZXRob2QgKHRoaXNcbiAgICAgICAgICAgIC8vIHBvbHlmaWxsZWQgZnVuY3Rpb24pLCBsZWFzaW5nIHRvIGluZmluaXRlIHJlY3Vyc2lvbi5cbiAgICAgICAgICAgIC8vIFdlIGF2b2lkIGl0IGJ5IGRpcmVjdGx5IGNhbGxpbmcgdGhlIG5hdGl2ZSBAQG1ldGhvZCBtZXRob2QuXG4gICAgICAgICAgICByZXR1cm4geyBkb25lOiB0cnVlLCB2YWx1ZTogbmF0aXZlUmVnRXhwTWV0aG9kLmNhbGwocmVnZXhwLCBzdHIsIGFyZzIpIH07XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB7IGRvbmU6IHRydWUsIHZhbHVlOiBuYXRpdmVNZXRob2QuY2FsbChzdHIsIHJlZ2V4cCwgYXJnMikgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBkb25lOiBmYWxzZSB9O1xuICAgICAgfVxuICAgICk7XG4gICAgdmFyIHN0cmZuID0gZm5zWzBdO1xuICAgIHZhciByeGZuID0gZm5zWzFdO1xuXG4gICAgcmVkZWZpbmUoU3RyaW5nLnByb3RvdHlwZSwgS0VZLCBzdHJmbik7XG4gICAgaGlkZShSZWdFeHAucHJvdG90eXBlLCBTWU1CT0wsIGxlbmd0aCA9PSAyXG4gICAgICAvLyAyMS4yLjUuOCBSZWdFeHAucHJvdG90eXBlW0BAcmVwbGFjZV0oc3RyaW5nLCByZXBsYWNlVmFsdWUpXG4gICAgICAvLyAyMS4yLjUuMTEgUmVnRXhwLnByb3RvdHlwZVtAQHNwbGl0XShzdHJpbmcsIGxpbWl0KVxuICAgICAgPyBmdW5jdGlvbiAoc3RyaW5nLCBhcmcpIHsgcmV0dXJuIHJ4Zm4uY2FsbChzdHJpbmcsIHRoaXMsIGFyZyk7IH1cbiAgICAgIC8vIDIxLjIuNS42IFJlZ0V4cC5wcm90b3R5cGVbQEBtYXRjaF0oc3RyaW5nKVxuICAgICAgLy8gMjEuMi41LjkgUmVnRXhwLnByb3RvdHlwZVtAQHNlYXJjaF0oc3RyaW5nKVxuICAgICAgOiBmdW5jdGlvbiAoc3RyaW5nKSB7IHJldHVybiByeGZuLmNhbGwoc3RyaW5nLCB0aGlzKTsgfVxuICAgICk7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG4vLyAyMS4yLjUuMyBnZXQgUmVnRXhwLnByb3RvdHlwZS5mbGFnc1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRoYXQgPSBhbk9iamVjdCh0aGlzKTtcbiAgdmFyIHJlc3VsdCA9ICcnO1xuICBpZiAodGhhdC5nbG9iYWwpIHJlc3VsdCArPSAnZyc7XG4gIGlmICh0aGF0Lmlnbm9yZUNhc2UpIHJlc3VsdCArPSAnaSc7XG4gIGlmICh0aGF0Lm11bHRpbGluZSkgcmVzdWx0ICs9ICdtJztcbiAgaWYgKHRoYXQudW5pY29kZSkgcmVzdWx0ICs9ICd1JztcbiAgaWYgKHRoYXQuc3RpY2t5KSByZXN1bHQgKz0gJ3knO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ25hdGl2ZS1mdW5jdGlvbi10by1zdHJpbmcnLCBGdW5jdGlvbi50b1N0cmluZyk7XG4iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZiAodHlwZW9mIF9fZyA9PSAnbnVtYmVyJykgX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4iLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmYWxzZTtcbiIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGRQID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgU1JDID0gcmVxdWlyZSgnLi9fdWlkJykoJ3NyYycpO1xudmFyICR0b1N0cmluZyA9IHJlcXVpcmUoJy4vX2Z1bmN0aW9uLXRvLXN0cmluZycpO1xudmFyIFRPX1NUUklORyA9ICd0b1N0cmluZyc7XG52YXIgVFBMID0gKCcnICsgJHRvU3RyaW5nKS5zcGxpdChUT19TVFJJTkcpO1xuXG5yZXF1aXJlKCcuL19jb3JlJykuaW5zcGVjdFNvdXJjZSA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gJHRvU3RyaW5nLmNhbGwoaXQpO1xufTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIGtleSwgdmFsLCBzYWZlKSB7XG4gIHZhciBpc0Z1bmN0aW9uID0gdHlwZW9mIHZhbCA9PSAnZnVuY3Rpb24nO1xuICBpZiAoaXNGdW5jdGlvbikgaGFzKHZhbCwgJ25hbWUnKSB8fCBoaWRlKHZhbCwgJ25hbWUnLCBrZXkpO1xuICBpZiAoT1trZXldID09PSB2YWwpIHJldHVybjtcbiAgaWYgKGlzRnVuY3Rpb24pIGhhcyh2YWwsIFNSQykgfHwgaGlkZSh2YWwsIFNSQywgT1trZXldID8gJycgKyBPW2tleV0gOiBUUEwuam9pbihTdHJpbmcoa2V5KSkpO1xuICBpZiAoTyA9PT0gZ2xvYmFsKSB7XG4gICAgT1trZXldID0gdmFsO1xuICB9IGVsc2UgaWYgKCFzYWZlKSB7XG4gICAgZGVsZXRlIE9ba2V5XTtcbiAgICBoaWRlKE8sIGtleSwgdmFsKTtcbiAgfSBlbHNlIGlmIChPW2tleV0pIHtcbiAgICBPW2tleV0gPSB2YWw7XG4gIH0gZWxzZSB7XG4gICAgaGlkZShPLCBrZXksIHZhbCk7XG4gIH1cbi8vIGFkZCBmYWtlIEZ1bmN0aW9uI3RvU3RyaW5nIGZvciBjb3JyZWN0IHdvcmsgd3JhcHBlZCBtZXRob2RzIC8gY29uc3RydWN0b3JzIHdpdGggbWV0aG9kcyBsaWtlIExvRGFzaCBpc05hdGl2ZVxufSkoRnVuY3Rpb24ucHJvdG90eXBlLCBUT19TVFJJTkcsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyAmJiB0aGlzW1NSQ10gfHwgJHRvU3RyaW5nLmNhbGwodGhpcyk7XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgYnVpbHRpbkV4ZWMgPSBSZWdFeHAucHJvdG90eXBlLmV4ZWM7XG5cbiAvLyBgUmVnRXhwRXhlY2AgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1yZWdleHBleGVjXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChSLCBTKSB7XG4gIHZhciBleGVjID0gUi5leGVjO1xuICBpZiAodHlwZW9mIGV4ZWMgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgcmVzdWx0ID0gZXhlYy5jYWxsKFIsIFMpO1xuICAgIGlmICh0eXBlb2YgcmVzdWx0ICE9PSAnb2JqZWN0Jykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUmVnRXhwIGV4ZWMgbWV0aG9kIHJldHVybmVkIHNvbWV0aGluZyBvdGhlciB0aGFuIGFuIE9iamVjdCBvciBudWxsJyk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgaWYgKGNsYXNzb2YoUikgIT09ICdSZWdFeHAnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUmVnRXhwI2V4ZWMgY2FsbGVkIG9uIGluY29tcGF0aWJsZSByZWNlaXZlcicpO1xuICB9XG4gIHJldHVybiBidWlsdGluRXhlYy5jYWxsKFIsIFMpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHJlZ2V4cEZsYWdzID0gcmVxdWlyZSgnLi9fZmxhZ3MnKTtcblxudmFyIG5hdGl2ZUV4ZWMgPSBSZWdFeHAucHJvdG90eXBlLmV4ZWM7XG4vLyBUaGlzIGFsd2F5cyByZWZlcnMgdG8gdGhlIG5hdGl2ZSBpbXBsZW1lbnRhdGlvbiwgYmVjYXVzZSB0aGVcbi8vIFN0cmluZyNyZXBsYWNlIHBvbHlmaWxsIHVzZXMgLi9maXgtcmVnZXhwLXdlbGwta25vd24tc3ltYm9sLWxvZ2ljLmpzLFxuLy8gd2hpY2ggbG9hZHMgdGhpcyBmaWxlIGJlZm9yZSBwYXRjaGluZyB0aGUgbWV0aG9kLlxudmFyIG5hdGl2ZVJlcGxhY2UgPSBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2U7XG5cbnZhciBwYXRjaGVkRXhlYyA9IG5hdGl2ZUV4ZWM7XG5cbnZhciBMQVNUX0lOREVYID0gJ2xhc3RJbmRleCc7XG5cbnZhciBVUERBVEVTX0xBU1RfSU5ERVhfV1JPTkcgPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgcmUxID0gL2EvLFxuICAgICAgcmUyID0gL2IqL2c7XG4gIG5hdGl2ZUV4ZWMuY2FsbChyZTEsICdhJyk7XG4gIG5hdGl2ZUV4ZWMuY2FsbChyZTIsICdhJyk7XG4gIHJldHVybiByZTFbTEFTVF9JTkRFWF0gIT09IDAgfHwgcmUyW0xBU1RfSU5ERVhdICE9PSAwO1xufSkoKTtcblxuLy8gbm9ucGFydGljaXBhdGluZyBjYXB0dXJpbmcgZ3JvdXAsIGNvcGllZCBmcm9tIGVzNS1zaGltJ3MgU3RyaW5nI3NwbGl0IHBhdGNoLlxudmFyIE5QQ0dfSU5DTFVERUQgPSAvKCk/Py8uZXhlYygnJylbMV0gIT09IHVuZGVmaW5lZDtcblxudmFyIFBBVENIID0gVVBEQVRFU19MQVNUX0lOREVYX1dST05HIHx8IE5QQ0dfSU5DTFVERUQ7XG5cbmlmIChQQVRDSCkge1xuICBwYXRjaGVkRXhlYyA9IGZ1bmN0aW9uIGV4ZWMoc3RyKSB7XG4gICAgdmFyIHJlID0gdGhpcztcbiAgICB2YXIgbGFzdEluZGV4LCByZUNvcHksIG1hdGNoLCBpO1xuXG4gICAgaWYgKE5QQ0dfSU5DTFVERUQpIHtcbiAgICAgIHJlQ29weSA9IG5ldyBSZWdFeHAoJ14nICsgcmUuc291cmNlICsgJyQoPyFcXFxccyknLCByZWdleHBGbGFncy5jYWxsKHJlKSk7XG4gICAgfVxuICAgIGlmIChVUERBVEVTX0xBU1RfSU5ERVhfV1JPTkcpIGxhc3RJbmRleCA9IHJlW0xBU1RfSU5ERVhdO1xuXG4gICAgbWF0Y2ggPSBuYXRpdmVFeGVjLmNhbGwocmUsIHN0cik7XG5cbiAgICBpZiAoVVBEQVRFU19MQVNUX0lOREVYX1dST05HICYmIG1hdGNoKSB7XG4gICAgICByZVtMQVNUX0lOREVYXSA9IHJlLmdsb2JhbCA/IG1hdGNoLmluZGV4ICsgbWF0Y2hbMF0ubGVuZ3RoIDogbGFzdEluZGV4O1xuICAgIH1cbiAgICBpZiAoTlBDR19JTkNMVURFRCAmJiBtYXRjaCAmJiBtYXRjaC5sZW5ndGggPiAxKSB7XG4gICAgICAvLyBGaXggYnJvd3NlcnMgd2hvc2UgYGV4ZWNgIG1ldGhvZHMgZG9uJ3QgY29uc2lzdGVudGx5IHJldHVybiBgdW5kZWZpbmVkYFxuICAgICAgLy8gZm9yIE5QQ0csIGxpa2UgSUU4LiBOT1RFOiBUaGlzIGRvZXNuJyB3b3JrIGZvciAvKC4/KT8vXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbG9vcC1mdW5jXG4gICAgICBuYXRpdmVSZXBsYWNlLmNhbGwobWF0Y2hbMF0sIHJlQ29weSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBmb3IgKGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aCAtIDI7IGkrKykge1xuICAgICAgICAgIGlmIChhcmd1bWVudHNbaV0gPT09IHVuZGVmaW5lZCkgbWF0Y2hbaV0gPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBtYXRjaDtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwYXRjaGVkRXhlYztcbiIsInZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6IHt9KTtcbn0pKCd2ZXJzaW9ucycsIFtdKS5wdXNoKHtcbiAgdmVyc2lvbjogY29yZS52ZXJzaW9uLFxuICBtb2RlOiByZXF1aXJlKCcuL19saWJyYXJ5JykgPyAncHVyZScgOiAnZ2xvYmFsJyxcbiAgY29weXJpZ2h0OiAnwqkgMjAxOSBEZW5pcyBQdXNoa2FyZXYgKHpsb2lyb2NrLnJ1KSdcbn0pO1xuIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xuLy8gdHJ1ZSAgLT4gU3RyaW5nI2F0XG4vLyBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFRPX1NUUklORykge1xuICByZXR1cm4gZnVuY3Rpb24gKHRoYXQsIHBvcykge1xuICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpO1xuICAgIHZhciBpID0gdG9JbnRlZ2VyKHBvcyk7XG4gICAgdmFyIGwgPSBzLmxlbmd0aDtcbiAgICB2YXIgYSwgYjtcbiAgICBpZiAoaSA8IDAgfHwgaSA+PSBsKSByZXR1cm4gVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgYSA9IHMuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gYSA8IDB4ZDgwMCB8fCBhID4gMHhkYmZmIHx8IGkgKyAxID09PSBsIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxuICAgICAgPyBUT19TVFJJTkcgPyBzLmNoYXJBdChpKSA6IGFcbiAgICAgIDogVE9fU1RSSU5HID8gcy5zbGljZShpLCBpICsgMikgOiAoYSAtIDB4ZDgwMCA8PCAxMCkgKyAoYiAtIDB4ZGMwMCkgKyAweDEwMDAwO1xuICB9O1xufTtcbiIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuIiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG4iLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcbiIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBTKSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICghUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcbiIsInZhciBpZCA9IDA7XG52YXIgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59O1xuIiwidmFyIHN0b3JlID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xudmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbDtcbnZhciBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHJlZ2V4cEV4ZWMgPSByZXF1aXJlKCcuL19yZWdleHAtZXhlYycpO1xucmVxdWlyZSgnLi9fZXhwb3J0Jykoe1xuICB0YXJnZXQ6ICdSZWdFeHAnLFxuICBwcm90bzogdHJ1ZSxcbiAgZm9yY2VkOiByZWdleHBFeGVjICE9PSAvLi8uZXhlY1xufSwge1xuICBleGVjOiByZWdleHBFeGVjXG59KTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBhZHZhbmNlU3RyaW5nSW5kZXggPSByZXF1aXJlKCcuL19hZHZhbmNlLXN0cmluZy1pbmRleCcpO1xudmFyIHJlZ0V4cEV4ZWMgPSByZXF1aXJlKCcuL19yZWdleHAtZXhlYy1hYnN0cmFjdCcpO1xudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbnZhciBTVUJTVElUVVRJT05fU1lNQk9MUyA9IC9cXCQoWyQmYCddfFxcZFxcZD98PFtePl0qPikvZztcbnZhciBTVUJTVElUVVRJT05fU1lNQk9MU19OT19OQU1FRCA9IC9cXCQoWyQmYCddfFxcZFxcZD8pL2c7XG5cbnZhciBtYXliZVRvU3RyaW5nID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gaXQgOiBTdHJpbmcoaXQpO1xufTtcblxuLy8gQEByZXBsYWNlIGxvZ2ljXG5yZXF1aXJlKCcuL19maXgtcmUtd2tzJykoJ3JlcGxhY2UnLCAyLCBmdW5jdGlvbiAoZGVmaW5lZCwgUkVQTEFDRSwgJHJlcGxhY2UsIG1heWJlQ2FsbE5hdGl2ZSkge1xuICByZXR1cm4gW1xuICAgIC8vIGBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2VgIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUucmVwbGFjZVxuICAgIGZ1bmN0aW9uIHJlcGxhY2Uoc2VhcmNoVmFsdWUsIHJlcGxhY2VWYWx1ZSkge1xuICAgICAgdmFyIE8gPSBkZWZpbmVkKHRoaXMpO1xuICAgICAgdmFyIGZuID0gc2VhcmNoVmFsdWUgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogc2VhcmNoVmFsdWVbUkVQTEFDRV07XG4gICAgICByZXR1cm4gZm4gIT09IHVuZGVmaW5lZFxuICAgICAgICA/IGZuLmNhbGwoc2VhcmNoVmFsdWUsIE8sIHJlcGxhY2VWYWx1ZSlcbiAgICAgICAgOiAkcmVwbGFjZS5jYWxsKFN0cmluZyhPKSwgc2VhcmNoVmFsdWUsIHJlcGxhY2VWYWx1ZSk7XG4gICAgfSxcbiAgICAvLyBgUmVnRXhwLnByb3RvdHlwZVtAQHJlcGxhY2VdYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1yZWdleHAucHJvdG90eXBlLUBAcmVwbGFjZVxuICAgIGZ1bmN0aW9uIChyZWdleHAsIHJlcGxhY2VWYWx1ZSkge1xuICAgICAgdmFyIHJlcyA9IG1heWJlQ2FsbE5hdGl2ZSgkcmVwbGFjZSwgcmVnZXhwLCB0aGlzLCByZXBsYWNlVmFsdWUpO1xuICAgICAgaWYgKHJlcy5kb25lKSByZXR1cm4gcmVzLnZhbHVlO1xuXG4gICAgICB2YXIgcnggPSBhbk9iamVjdChyZWdleHApO1xuICAgICAgdmFyIFMgPSBTdHJpbmcodGhpcyk7XG4gICAgICB2YXIgZnVuY3Rpb25hbFJlcGxhY2UgPSB0eXBlb2YgcmVwbGFjZVZhbHVlID09PSAnZnVuY3Rpb24nO1xuICAgICAgaWYgKCFmdW5jdGlvbmFsUmVwbGFjZSkgcmVwbGFjZVZhbHVlID0gU3RyaW5nKHJlcGxhY2VWYWx1ZSk7XG4gICAgICB2YXIgZ2xvYmFsID0gcnguZ2xvYmFsO1xuICAgICAgaWYgKGdsb2JhbCkge1xuICAgICAgICB2YXIgZnVsbFVuaWNvZGUgPSByeC51bmljb2RlO1xuICAgICAgICByeC5sYXN0SW5kZXggPSAwO1xuICAgICAgfVxuICAgICAgdmFyIHJlc3VsdHMgPSBbXTtcbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWdFeHBFeGVjKHJ4LCBTKTtcbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gbnVsbCkgYnJlYWs7XG4gICAgICAgIHJlc3VsdHMucHVzaChyZXN1bHQpO1xuICAgICAgICBpZiAoIWdsb2JhbCkgYnJlYWs7XG4gICAgICAgIHZhciBtYXRjaFN0ciA9IFN0cmluZyhyZXN1bHRbMF0pO1xuICAgICAgICBpZiAobWF0Y2hTdHIgPT09ICcnKSByeC5sYXN0SW5kZXggPSBhZHZhbmNlU3RyaW5nSW5kZXgoUywgdG9MZW5ndGgocngubGFzdEluZGV4KSwgZnVsbFVuaWNvZGUpO1xuICAgICAgfVxuICAgICAgdmFyIGFjY3VtdWxhdGVkUmVzdWx0ID0gJyc7XG4gICAgICB2YXIgbmV4dFNvdXJjZVBvc2l0aW9uID0gMDtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzdWx0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICByZXN1bHQgPSByZXN1bHRzW2ldO1xuICAgICAgICB2YXIgbWF0Y2hlZCA9IFN0cmluZyhyZXN1bHRbMF0pO1xuICAgICAgICB2YXIgcG9zaXRpb24gPSBtYXgobWluKHRvSW50ZWdlcihyZXN1bHQuaW5kZXgpLCBTLmxlbmd0aCksIDApO1xuICAgICAgICB2YXIgY2FwdHVyZXMgPSBbXTtcbiAgICAgICAgLy8gTk9URTogVGhpcyBpcyBlcXVpdmFsZW50IHRvXG4gICAgICAgIC8vICAgY2FwdHVyZXMgPSByZXN1bHQuc2xpY2UoMSkubWFwKG1heWJlVG9TdHJpbmcpXG4gICAgICAgIC8vIGJ1dCBmb3Igc29tZSByZWFzb24gYG5hdGl2ZVNsaWNlLmNhbGwocmVzdWx0LCAxLCByZXN1bHQubGVuZ3RoKWAgKGNhbGxlZCBpblxuICAgICAgICAvLyB0aGUgc2xpY2UgcG9seWZpbGwgd2hlbiBzbGljaW5nIG5hdGl2ZSBhcnJheXMpIFwiZG9lc24ndCB3b3JrXCIgaW4gc2FmYXJpIDkgYW5kXG4gICAgICAgIC8vIGNhdXNlcyBhIGNyYXNoIChodHRwczovL3Bhc3RlYmluLmNvbS9OMjFRemVRQSkgd2hlbiB0cnlpbmcgdG8gZGVidWcgaXQuXG4gICAgICAgIGZvciAodmFyIGogPSAxOyBqIDwgcmVzdWx0Lmxlbmd0aDsgaisrKSBjYXB0dXJlcy5wdXNoKG1heWJlVG9TdHJpbmcocmVzdWx0W2pdKSk7XG4gICAgICAgIHZhciBuYW1lZENhcHR1cmVzID0gcmVzdWx0Lmdyb3VwcztcbiAgICAgICAgaWYgKGZ1bmN0aW9uYWxSZXBsYWNlKSB7XG4gICAgICAgICAgdmFyIHJlcGxhY2VyQXJncyA9IFttYXRjaGVkXS5jb25jYXQoY2FwdHVyZXMsIHBvc2l0aW9uLCBTKTtcbiAgICAgICAgICBpZiAobmFtZWRDYXB0dXJlcyAhPT0gdW5kZWZpbmVkKSByZXBsYWNlckFyZ3MucHVzaChuYW1lZENhcHR1cmVzKTtcbiAgICAgICAgICB2YXIgcmVwbGFjZW1lbnQgPSBTdHJpbmcocmVwbGFjZVZhbHVlLmFwcGx5KHVuZGVmaW5lZCwgcmVwbGFjZXJBcmdzKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVwbGFjZW1lbnQgPSBnZXRTdWJzdGl0dXRpb24obWF0Y2hlZCwgUywgcG9zaXRpb24sIGNhcHR1cmVzLCBuYW1lZENhcHR1cmVzLCByZXBsYWNlVmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwb3NpdGlvbiA+PSBuZXh0U291cmNlUG9zaXRpb24pIHtcbiAgICAgICAgICBhY2N1bXVsYXRlZFJlc3VsdCArPSBTLnNsaWNlKG5leHRTb3VyY2VQb3NpdGlvbiwgcG9zaXRpb24pICsgcmVwbGFjZW1lbnQ7XG4gICAgICAgICAgbmV4dFNvdXJjZVBvc2l0aW9uID0gcG9zaXRpb24gKyBtYXRjaGVkLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGFjY3VtdWxhdGVkUmVzdWx0ICsgUy5zbGljZShuZXh0U291cmNlUG9zaXRpb24pO1xuICAgIH1cbiAgXTtcblxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWdldHN1YnN0aXR1dGlvblxuICBmdW5jdGlvbiBnZXRTdWJzdGl0dXRpb24obWF0Y2hlZCwgc3RyLCBwb3NpdGlvbiwgY2FwdHVyZXMsIG5hbWVkQ2FwdHVyZXMsIHJlcGxhY2VtZW50KSB7XG4gICAgdmFyIHRhaWxQb3MgPSBwb3NpdGlvbiArIG1hdGNoZWQubGVuZ3RoO1xuICAgIHZhciBtID0gY2FwdHVyZXMubGVuZ3RoO1xuICAgIHZhciBzeW1ib2xzID0gU1VCU1RJVFVUSU9OX1NZTUJPTFNfTk9fTkFNRUQ7XG4gICAgaWYgKG5hbWVkQ2FwdHVyZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgbmFtZWRDYXB0dXJlcyA9IHRvT2JqZWN0KG5hbWVkQ2FwdHVyZXMpO1xuICAgICAgc3ltYm9scyA9IFNVQlNUSVRVVElPTl9TWU1CT0xTO1xuICAgIH1cbiAgICByZXR1cm4gJHJlcGxhY2UuY2FsbChyZXBsYWNlbWVudCwgc3ltYm9scywgZnVuY3Rpb24gKG1hdGNoLCBjaCkge1xuICAgICAgdmFyIGNhcHR1cmU7XG4gICAgICBzd2l0Y2ggKGNoLmNoYXJBdCgwKSkge1xuICAgICAgICBjYXNlICckJzogcmV0dXJuICckJztcbiAgICAgICAgY2FzZSAnJic6IHJldHVybiBtYXRjaGVkO1xuICAgICAgICBjYXNlICdgJzogcmV0dXJuIHN0ci5zbGljZSgwLCBwb3NpdGlvbik7XG4gICAgICAgIGNhc2UgXCInXCI6IHJldHVybiBzdHIuc2xpY2UodGFpbFBvcyk7XG4gICAgICAgIGNhc2UgJzwnOlxuICAgICAgICAgIGNhcHR1cmUgPSBuYW1lZENhcHR1cmVzW2NoLnNsaWNlKDEsIC0xKV07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6IC8vIFxcZFxcZD9cbiAgICAgICAgICB2YXIgbiA9ICtjaDtcbiAgICAgICAgICBpZiAobiA9PT0gMCkgcmV0dXJuIG1hdGNoO1xuICAgICAgICAgIGlmIChuID4gbSkge1xuICAgICAgICAgICAgdmFyIGYgPSBmbG9vcihuIC8gMTApO1xuICAgICAgICAgICAgaWYgKGYgPT09IDApIHJldHVybiBtYXRjaDtcbiAgICAgICAgICAgIGlmIChmIDw9IG0pIHJldHVybiBjYXB0dXJlc1tmIC0gMV0gPT09IHVuZGVmaW5lZCA/IGNoLmNoYXJBdCgxKSA6IGNhcHR1cmVzW2YgLSAxXSArIGNoLmNoYXJBdCgxKTtcbiAgICAgICAgICAgIHJldHVybiBtYXRjaDtcbiAgICAgICAgICB9XG4gICAgICAgICAgY2FwdHVyZSA9IGNhcHR1cmVzW24gLSAxXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjYXB0dXJlID09PSB1bmRlZmluZWQgPyAnJyA6IGNhcHR1cmU7XG4gICAgfSk7XG4gIH1cbn0pO1xuIiwiaW1wb3J0IHtsb2d9IGZyb20gXCJhZnRjLW1vZHVsZXNcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCIuLi9QYWdlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQWJvdXQgZXh0ZW5kcyBQYWdlIHtcclxuXHJcbiAgICAvLyB2YXIgZGVmc1xyXG4gICAgLy8gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIC8vIGxvZyhcIkFib3V0KClcIik7XHJcbiAgICB9XHJcbiAgICAvLyAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLVxyXG5cclxuXHJcblxyXG59IiwiaW1wb3J0IHtsb2d9IGZyb20gXCJhZnRjLW1vZHVsZXNcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCIuLi9QYWdlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29udGFjdCBleHRlbmRzIFBhZ2Uge1xyXG5cclxuICAgIC8vIHZhciBkZWZzXHJcbiAgICAvLyAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgLy8gbG9nKFwiQ29udGFjdCgpXCIpO1xyXG4gICAgfVxyXG4gICAgLy8gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC1cclxuXHJcblxyXG5cclxufSIsImltcG9ydCB7bG9nfSBmcm9tIFwiYWZ0Yy1tb2R1bGVzXCI7XHJcbmltcG9ydCB7UGFnZX0gZnJvbSBcIi4uL1BhZ2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBIb21lIGV4dGVuZHMgUGFnZSB7XHJcblxyXG4gICAgLy8gdmFyIGRlZnNcclxuICAgIC8vIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtXHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICAvLyBsb2coXCJIb21lKClcIik7XHJcbiAgICB9XHJcbiAgICAvLyAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLVxyXG5cclxuXHJcblxyXG59IiwiaW1wb3J0IHsgbG9nIH0gZnJvbSBcImFmdGMtbW9kdWxlc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE5hdmlnYXRpb25IYW5kbGVyIHtcclxuXHJcbiAgICAvLyB2YXIgZGVmc1xyXG4gICAgZG9tID0ge1xyXG4gICAgICAgIGhvbWU6IGZhbHNlLFxyXG4gICAgICAgIGFib3V0OiBmYWxzZSxcclxuICAgICAgICBjb250YWN0OiBmYWxzZSxcclxuICAgICAgICBuYXY6IGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgc2l0ZU5hbWUgPSBcIlB1cmVKUyBTUEFcIjtcclxuXHJcbiAgICBzaXRlRG9tYWluID0gXCJkZXYxLmNvbVwiO1xyXG4gICAgLy8gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmRvbS5ob21lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob21lXCIpO1xyXG4gICAgICAgIHRoaXMuZG9tLmFib3V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhYm91dFwiKTtcclxuICAgICAgICB0aGlzLmRvbS5jb250YWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWN0XCIpO1xyXG4gICAgICAgIHRoaXMuZG9tLm5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2XCIpO1xyXG5cclxuICAgICAgICBsZXQgbmF2SXRlbXMgPSB0aGlzLmRvbS5uYXYuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJhXCIpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5hdkl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBuYXZJdGVtID0gbmF2SXRlbXNbaV07XHJcbiAgICAgICAgICAgIG5hdkl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBQcmV2ZW50IGJyb3dzZXIgZnJvbSByZWRpcmVjdGluZyBvbiBsaW5rIGNsaWNrXHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5hdmlnYXRlVG8oZS50YXJnZXQuaHJlZik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gUHJldmVudCBicm93c2VyIGZyb20gcmVsb2FkaW5nIG9uIGhpc3RvcnkgLTEgKzFcclxuICAgICAgICB3aW5kb3cub25wb3BzdGF0ZSA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgbG9nKGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gTG9hZCBicm93c2VycyByb3V0ZSAtIHN0YXJ0IHBhZ2UgY2hvaWNlXHJcbiAgICAgICAgbGV0IHJvdXRlID0gdGhpcy5nZXRSb3V0ZSgpO1xyXG4gICAgICAgIHRoaXMuc2hvd1BhZ2Uocm91dGUpO1xyXG5cclxuICAgIH1cclxuICAgIC8vIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtXHJcblxyXG5cclxuXHJcbiAgICBuYXZpZ2F0ZVRvKGxpbmspIHtcclxuICAgICAgICBsZXQgcm91dGUgPSB0aGlzLmdldFJvdXRlKGxpbmspO1xyXG5cclxuICAgICAgICB0aGlzLnNob3dQYWdlKHJvdXRlKTtcclxuICAgIH1cclxuICAgIC8vIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtXHJcblxyXG5cclxuXHJcbiAgICBzaG93UGFnZShyb3V0ZSkge1xyXG4gICAgICAgIC8vIFNldCBicm93c2VyIHRpdGxlIHZpYSBoaXN0b3J5IHB1c2ggc3RhdGUgKHNhbWUgYXMgb2xkIGZsYXNoIGRheXMgcHJvZ3JhbW1pbmcganMpXHJcbiAgICAgICAgbGV0IHRpdGxlID0gXCJcIjtcclxuXHJcbiAgICAgICAgaWYgKHJvdXRlID09IFwiXCIpIHtcclxuICAgICAgICAgICAgdGl0bGUgPSB0aGlzLnNpdGVOYW1lO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRpdGxlID0gdGhpcy5zaXRlTmFtZSArIFwiIC0gXCIgKyByb3V0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBzdGF0ZSA9IHtcclxuICAgICAgICAgICAgXCJwYWdlVGl0bGVcIjogdGl0bGVcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGhpc3RvcnkucHVzaFN0YXRlKHN0YXRlLCB0aXRsZSwgcm91dGUpXHJcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPSB0aXRsZTtcclxuXHJcbiAgICAgICAgLy8gc2hvdyBhcHByb3ByaWF0ZSBwYWdlXHJcbiAgICAgICAgLy8gWW91ciBzaW1wbGUgcm91dGVyXHJcbiAgICAgICAgc3dpdGNoIChyb3V0ZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvbS5ob21lLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvbS5hYm91dC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvbS5jb250YWN0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYWJvdXRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuZG9tLmhvbWUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kb20uYWJvdXQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICAgICAgICAgIHRoaXMuZG9tLmNvbnRhY3Quc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjb250YWN0XCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvbS5ob21lLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgIHRoaXMuZG9tLmFib3V0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgIHRoaXMuZG9tLmNvbnRhY3Quc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICBnZXRSb3V0ZShsaW5rKSB7XHJcbiAgICAgICAgaWYgKGxpbmsgPT0gXCJcIiB8fCAhbGluayB8fCBsaW5rID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBsaW5rID0gc2VsZi5sb2NhdGlvbi5ocmVmO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHJvdXRlID0gXCJcIjtcclxuICAgICAgICByb3V0ZSA9IGxpbmsucmVwbGFjZShcImh0dHA6Ly9cIiwgXCJcIik7XHJcbiAgICAgICAgcm91dGUgPSByb3V0ZS5yZXBsYWNlKFwiaHR0cHM6Ly9cIiwgXCJcIik7XHJcbiAgICAgICAgcm91dGUgPSByb3V0ZS5yZXBsYWNlKFwid3d3XCIsIFwiXCIpO1xyXG4gICAgICAgIHJvdXRlID0gcm91dGUucmVwbGFjZSh0aGlzLnNpdGVEb21haW4gKyBcIi9cIiwgXCJcIik7XHJcblxyXG4gICAgICAgIC8vIGxvZyhcInJvdXRlID0gXCIgKyByb3V0ZSk7XHJcblxyXG4gICAgICAgIHJldHVybiByb3V0ZTtcclxuICAgIH1cclxuICAgIC8vIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtXHJcblxyXG5cclxuXHJcblxyXG59IiwiaW1wb3J0IHsgbG9nIH0gZnJvbSBcImFmdGMtbW9kdWxlc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBhZ2Uge1xyXG5cclxuXHJcbiAgICBzaG93KCl7XHJcbiAgICAgICAgbG9nKFwiU2hvdygpXCIpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBoaWRlKCl7XHJcbiAgICAgICAgbG9nKFwiaGlkZSgpXCIpO1xyXG4gICAgfVxyXG5cclxuXHJcbn0iLCJpbXBvcnQge2xvZ30gZnJvbSBcImFmdGMtbW9kdWxlc1wiO1xyXG5pbXBvcnQgeyBIb21lIH0gZnJvbSBcIi4vSG9tZS9Ib21lXCI7XHJcbmltcG9ydCB7IEFib3V0IH0gZnJvbSBcIi4vQWJvdXQvQWJvdXRcIjtcclxuaW1wb3J0IHsgQ29udGFjdCB9IGZyb20gXCIuL0NvbnRhY3QvQ29udGFjdFwiO1xyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uSGFuZGxlciB9IGZyb20gXCIuL05hdmlnYXRpb25IYW5kbGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgV2Vic2l0ZSB7XHJcblxyXG4gICAgLy8gdmFyIGRlZnNcclxuICAgIHBhZ2VzID0ge1xyXG4gICAgICAgIGhvbWU6IGZhbHNlLFxyXG4gICAgICAgIGFib3V0OiBmYWxzZSxcclxuICAgICAgICBjb250YWN0OiBmYWxzZVxyXG4gICAgfTtcclxuXHJcbiAgICBuYXZIYW5kbGVyID0gZmFsc2U7XHJcbiAgICAvLyAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgLy8gbG9nKFwiV2Vic2l0ZSgpXCIpO1xyXG4gICAgICAgIHRoaXMucGFnZXMuaG9tZSA9IG5ldyBIb21lKCk7XHJcbiAgICAgICAgdGhpcy5wYWdlcy5hYm91dCA9IG5ldyBBYm91dCgpO1xyXG4gICAgICAgIHRoaXMucGFnZXMuY29udGFjdCA9IG5ldyBDb250YWN0KCk7XHJcblxyXG4gICAgICAgIHRoaXMubmF2SGFuZGxlciA9IG5ldyBOYXZpZ2F0aW9uSGFuZGxlcigpO1xyXG4gICAgfVxyXG4gICAgLy8gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC1cclxuXHJcblxyXG5cclxufSIsImltcG9ydCB7b25SZWFkeX0gZnJvbSBcImFmdGMtbW9kdWxlc1wiO1xyXG5pbXBvcnQgeyBXZWJzaXRlIH0gZnJvbSBcIi4vV2Vic2l0ZS9XZWJzaXRlXCI7XHJcblxyXG5cclxub25SZWFkeSgoKT0+e1xyXG4gICAgbmV3IFdlYnNpdGUoKTtcclxufSlcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==