// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"2eoIA":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "0a8ecb283d214d75";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"bB7Pu":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _featherIcons = require("feather-icons");
var _featherIconsDefault = parcelHelpers.interopDefault(_featherIcons);
var _aos = require("aos");
var _aosDefault = parcelHelpers.interopDefault(_aos);
var _jarallax = require("jarallax");
var _bulmajs = require("@vizuaalog/bulmajs");
var _bulmajsDefault = parcelHelpers.interopDefault(_bulmajs);
document.addEventListener('DOMContentLoaded', ()=>{
    (0, _featherIconsDefault.default).replace();
    /** Socket stuff */ const socket = io('http://' + location.hostname + ':5500');
    const messageContainer = document.getElementById('message-container');
    const messageForm = document.getElementById('send-container');
    const messageInput = document.getElementById('message-input');
    const loginForm = document.getElementById('login-form');
    let name = '';
    /** Login form Stuff */ loginForm.addEventListener('submit', (e)=>{
        e.preventDefault();
        name = document.getElementById('username').value;
        appendMessage(`${name}, Wellcome to the room.`);
        socket.emit('new-user', name);
        if (name != '') setTimeout(()=>{
            document.querySelector('#login-container').classList.add('is-hidden');
            document.querySelector('#room-container').classList.remove('is-hidden');
        }, 2000);
        else alert("insert your username");
    });
    /** Message stuff */ socket.on('chat-message', (data)=>{
        appendMessage(`
    <div class="content has-margin-bottom-5 is-small has-text-primary">${data.name}</div>
    <div>${data.message}</div>
    `, 'is-dark');
    });
    /** User Connection and Disconnection stuff */ socket.on('user-connected', (name)=>{
        appendMessage(`${name} has arrived in the room.`, 'is-success');
    });
    socket.on('user-disconnected', (name)=>{
        appendMessage(`${name} has left the room.`, 'is-danger');
    });
    /** Message UI Controller */ messageForm.addEventListener('submit', (e)=>{
        e.preventDefault();
        const message = messageInput.value;
        appendMessage(`
    <div class="content is-small has-text-primary margin-bottom-3">${name}</div>
    <div>${message}</div>
    `, 'is-primary');
        socket.emit('send-chat-message', message);
        messageInput.value = '';
    });
    /** Message UI abstract */ function appendMessage(message, type) {
        let messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.classList.add('has-padding-5');
        messageElement.classList.add(type);
        messageElement.innerHTML = message;
        messageContainer.appendChild(messageElement);
        messageContainer.scrollTop = messageContainer.scrollHeight;
    }
/** Stream Stuff */ /** Rifa Stuff */ });

},{"feather-icons":"94idb","aos":"eRzTM","jarallax":"jXlXi","@vizuaalog/bulmajs":"1S1UT","@parcel/transformer-js/src/esmodule-helpers.js":"ff6Nl"}],"94idb":[function(require,module,exports,__globalThis) {
(function webpackUniversalModuleDefinition(root, factory) {
    module.exports = factory();
})(typeof self !== 'undefined' ? self : this, function() {
    return /******/ function(modules) {
        /******/ // The module cache
        /******/ var installedModules = {};
        /******/ /******/ // The require function
        /******/ function __webpack_require__(moduleId) {
            /******/ /******/ // Check if module is in cache
            /******/ if (installedModules[moduleId]) /******/ return installedModules[moduleId].exports;
            /******/ // Create a new module (and put it into the cache)
            /******/ var module1 = installedModules[moduleId] = {
                /******/ i: moduleId,
                /******/ l: false,
                /******/ exports: {}
            };
            /******/ /******/ // Execute the module function
            /******/ modules[moduleId].call(module1.exports, module1, module1.exports, __webpack_require__);
            /******/ /******/ // Flag the module as loaded
            /******/ module1.l = true;
            /******/ /******/ // Return the exports of the module
            /******/ return module1.exports;
        /******/ }
        /******/ /******/ /******/ // expose the modules object (__webpack_modules__)
        /******/ __webpack_require__.m = modules;
        /******/ /******/ // expose the module cache
        /******/ __webpack_require__.c = installedModules;
        /******/ /******/ // define getter function for harmony exports
        /******/ __webpack_require__.d = function(exports, name, getter) {
            /******/ if (!__webpack_require__.o(exports, name)) /******/ Object.defineProperty(exports, name, {
                /******/ configurable: false,
                /******/ enumerable: true,
                /******/ get: getter
            });
        /******/ };
        /******/ /******/ // define __esModule on exports
        /******/ __webpack_require__.r = function(exports) {
            /******/ Object.defineProperty(exports, '__esModule', {
                value: true
            });
        /******/ };
        /******/ /******/ // getDefaultExport function for compatibility with non-harmony modules
        /******/ __webpack_require__.n = function(module1) {
            /******/ var getter = module1 && module1.__esModule ? /******/ function getDefault() {
                return module1['default'];
            } : /******/ function getModuleExports() {
                return module1;
            };
            /******/ __webpack_require__.d(getter, 'a', getter);
            /******/ return getter;
        /******/ };
        /******/ /******/ // Object.prototype.hasOwnProperty.call
        /******/ __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        };
        /******/ /******/ // __webpack_public_path__
        /******/ __webpack_require__.p = "";
        /******/ /******/ /******/ // Load entry module and return exports
        /******/ return __webpack_require__(__webpack_require__.s = 0);
    /******/ }({
        /***/ "./dist/icons.json": /*!*************************!*\
  !*** ./dist/icons.json ***!
  \*************************/ /*! exports provided: activity, airplay, alert-circle, alert-octagon, alert-triangle, align-center, align-justify, align-left, align-right, anchor, aperture, archive, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, award, bar-chart-2, bar-chart, battery-charging, battery, bell-off, bell, bluetooth, bold, book-open, book, bookmark, box, briefcase, calendar, camera-off, camera, cast, check-circle, check-square, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, chrome, circle, clipboard, clock, cloud-drizzle, cloud-lightning, cloud-off, cloud-rain, cloud-snow, cloud, code, codepen, codesandbox, coffee, columns, command, compass, copy, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, cpu, credit-card, crop, crosshair, database, delete, disc, divide-circle, divide-square, divide, dollar-sign, download-cloud, download, dribbble, droplet, edit-2, edit-3, edit, external-link, eye-off, eye, facebook, fast-forward, feather, figma, file-minus, file-plus, file-text, file, film, filter, flag, folder-minus, folder-plus, folder, framer, frown, gift, git-branch, git-commit, git-merge, git-pull-request, github, gitlab, globe, grid, hard-drive, hash, headphones, heart, help-circle, hexagon, home, image, inbox, info, instagram, italic, key, layers, layout, life-buoy, link-2, link, linkedin, list, loader, lock, log-in, log-out, mail, map-pin, map, maximize-2, maximize, meh, menu, message-circle, message-square, mic-off, mic, minimize-2, minimize, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, mouse-pointer, move, music, navigation-2, navigation, octagon, package, paperclip, pause-circle, pause, pen-tool, percent, phone-call, phone-forwarded, phone-incoming, phone-missed, phone-off, phone-outgoing, phone, pie-chart, play-circle, play, plus-circle, plus-square, plus, pocket, power, printer, radio, refresh-ccw, refresh-cw, repeat, rewind, rotate-ccw, rotate-cw, rss, save, scissors, search, send, server, settings, share-2, share, shield-off, shield, shopping-bag, shopping-cart, shuffle, sidebar, skip-back, skip-forward, slack, slash, sliders, smartphone, smile, speaker, square, star, stop-circle, sun, sunrise, sunset, tablet, tag, target, terminal, thermometer, thumbs-down, thumbs-up, toggle-left, toggle-right, tool, trash-2, trash, trello, trending-down, trending-up, triangle, truck, tv, twitch, twitter, type, umbrella, underline, unlock, upload-cloud, upload, user-check, user-minus, user-plus, user-x, user, users, video-off, video, voicemail, volume-1, volume-2, volume-x, volume, watch, wifi-off, wifi, wind, x-circle, x-octagon, x-square, x, youtube, zap-off, zap, zoom-in, zoom-out, default */ /***/ function(module1) {
            module1.exports = {
                "activity": "<polyline points=\"22 12 18 12 15 21 9 3 6 12 2 12\"></polyline>",
                "airplay": "<path d=\"M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1\"></path><polygon points=\"12 15 17 21 7 21 12 15\"></polygon>",
                "alert-circle": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"12\"></line><line x1=\"12\" y1=\"16\" x2=\"12.01\" y2=\"16\"></line>",
                "alert-octagon": "<polygon points=\"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2\"></polygon><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"12\"></line><line x1=\"12\" y1=\"16\" x2=\"12.01\" y2=\"16\"></line>",
                "alert-triangle": "<path d=\"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z\"></path><line x1=\"12\" y1=\"9\" x2=\"12\" y2=\"13\"></line><line x1=\"12\" y1=\"17\" x2=\"12.01\" y2=\"17\"></line>",
                "align-center": "<line x1=\"18\" y1=\"10\" x2=\"6\" y2=\"10\"></line><line x1=\"21\" y1=\"6\" x2=\"3\" y2=\"6\"></line><line x1=\"21\" y1=\"14\" x2=\"3\" y2=\"14\"></line><line x1=\"18\" y1=\"18\" x2=\"6\" y2=\"18\"></line>",
                "align-justify": "<line x1=\"21\" y1=\"10\" x2=\"3\" y2=\"10\"></line><line x1=\"21\" y1=\"6\" x2=\"3\" y2=\"6\"></line><line x1=\"21\" y1=\"14\" x2=\"3\" y2=\"14\"></line><line x1=\"21\" y1=\"18\" x2=\"3\" y2=\"18\"></line>",
                "align-left": "<line x1=\"17\" y1=\"10\" x2=\"3\" y2=\"10\"></line><line x1=\"21\" y1=\"6\" x2=\"3\" y2=\"6\"></line><line x1=\"21\" y1=\"14\" x2=\"3\" y2=\"14\"></line><line x1=\"17\" y1=\"18\" x2=\"3\" y2=\"18\"></line>",
                "align-right": "<line x1=\"21\" y1=\"10\" x2=\"7\" y2=\"10\"></line><line x1=\"21\" y1=\"6\" x2=\"3\" y2=\"6\"></line><line x1=\"21\" y1=\"14\" x2=\"3\" y2=\"14\"></line><line x1=\"21\" y1=\"18\" x2=\"7\" y2=\"18\"></line>",
                "anchor": "<circle cx=\"12\" cy=\"5\" r=\"3\"></circle><line x1=\"12\" y1=\"22\" x2=\"12\" y2=\"8\"></line><path d=\"M5 12H2a10 10 0 0 0 20 0h-3\"></path>",
                "aperture": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"14.31\" y1=\"8\" x2=\"20.05\" y2=\"17.94\"></line><line x1=\"9.69\" y1=\"8\" x2=\"21.17\" y2=\"8\"></line><line x1=\"7.38\" y1=\"12\" x2=\"13.12\" y2=\"2.06\"></line><line x1=\"9.69\" y1=\"16\" x2=\"3.95\" y2=\"6.06\"></line><line x1=\"14.31\" y1=\"16\" x2=\"2.83\" y2=\"16\"></line><line x1=\"16.62\" y1=\"12\" x2=\"10.88\" y2=\"21.94\"></line>",
                "archive": "<polyline points=\"21 8 21 21 3 21 3 8\"></polyline><rect x=\"1\" y=\"3\" width=\"22\" height=\"5\"></rect><line x1=\"10\" y1=\"12\" x2=\"14\" y2=\"12\"></line>",
                "arrow-down-circle": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polyline points=\"8 12 12 16 16 12\"></polyline><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"16\"></line>",
                "arrow-down-left": "<line x1=\"17\" y1=\"7\" x2=\"7\" y2=\"17\"></line><polyline points=\"17 17 7 17 7 7\"></polyline>",
                "arrow-down-right": "<line x1=\"7\" y1=\"7\" x2=\"17\" y2=\"17\"></line><polyline points=\"17 7 17 17 7 17\"></polyline>",
                "arrow-down": "<line x1=\"12\" y1=\"5\" x2=\"12\" y2=\"19\"></line><polyline points=\"19 12 12 19 5 12\"></polyline>",
                "arrow-left-circle": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polyline points=\"12 8 8 12 12 16\"></polyline><line x1=\"16\" y1=\"12\" x2=\"8\" y2=\"12\"></line>",
                "arrow-left": "<line x1=\"19\" y1=\"12\" x2=\"5\" y2=\"12\"></line><polyline points=\"12 19 5 12 12 5\"></polyline>",
                "arrow-right-circle": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polyline points=\"12 16 16 12 12 8\"></polyline><line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line>",
                "arrow-right": "<line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line><polyline points=\"12 5 19 12 12 19\"></polyline>",
                "arrow-up-circle": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polyline points=\"16 12 12 8 8 12\"></polyline><line x1=\"12\" y1=\"16\" x2=\"12\" y2=\"8\"></line>",
                "arrow-up-left": "<line x1=\"17\" y1=\"17\" x2=\"7\" y2=\"7\"></line><polyline points=\"7 17 7 7 17 7\"></polyline>",
                "arrow-up-right": "<line x1=\"7\" y1=\"17\" x2=\"17\" y2=\"7\"></line><polyline points=\"7 7 17 7 17 17\"></polyline>",
                "arrow-up": "<line x1=\"12\" y1=\"19\" x2=\"12\" y2=\"5\"></line><polyline points=\"5 12 12 5 19 12\"></polyline>",
                "at-sign": "<circle cx=\"12\" cy=\"12\" r=\"4\"></circle><path d=\"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94\"></path>",
                "award": "<circle cx=\"12\" cy=\"8\" r=\"7\"></circle><polyline points=\"8.21 13.89 7 23 12 20 17 23 15.79 13.88\"></polyline>",
                "bar-chart-2": "<line x1=\"18\" y1=\"20\" x2=\"18\" y2=\"10\"></line><line x1=\"12\" y1=\"20\" x2=\"12\" y2=\"4\"></line><line x1=\"6\" y1=\"20\" x2=\"6\" y2=\"14\"></line>",
                "bar-chart": "<line x1=\"12\" y1=\"20\" x2=\"12\" y2=\"10\"></line><line x1=\"18\" y1=\"20\" x2=\"18\" y2=\"4\"></line><line x1=\"6\" y1=\"20\" x2=\"6\" y2=\"16\"></line>",
                "battery-charging": "<path d=\"M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19\"></path><line x1=\"23\" y1=\"13\" x2=\"23\" y2=\"11\"></line><polyline points=\"11 6 7 12 13 12 9 18\"></polyline>",
                "battery": "<rect x=\"1\" y=\"6\" width=\"18\" height=\"12\" rx=\"2\" ry=\"2\"></rect><line x1=\"23\" y1=\"13\" x2=\"23\" y2=\"11\"></line>",
                "bell-off": "<path d=\"M13.73 21a2 2 0 0 1-3.46 0\"></path><path d=\"M18.63 13A17.89 17.89 0 0 1 18 8\"></path><path d=\"M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14\"></path><path d=\"M18 8a6 6 0 0 0-9.33-5\"></path><line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line>",
                "bell": "<path d=\"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9\"></path><path d=\"M13.73 21a2 2 0 0 1-3.46 0\"></path>",
                "bluetooth": "<polyline points=\"6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5\"></polyline>",
                "bold": "<path d=\"M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z\"></path><path d=\"M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z\"></path>",
                "book-open": "<path d=\"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z\"></path><path d=\"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z\"></path>",
                "book": "<path d=\"M4 19.5A2.5 2.5 0 0 1 6.5 17H20\"></path><path d=\"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z\"></path>",
                "bookmark": "<path d=\"M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z\"></path>",
                "box": "<path d=\"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z\"></path><polyline points=\"3.27 6.96 12 12.01 20.73 6.96\"></polyline><line x1=\"12\" y1=\"22.08\" x2=\"12\" y2=\"12\"></line>",
                "briefcase": "<rect x=\"2\" y=\"7\" width=\"20\" height=\"14\" rx=\"2\" ry=\"2\"></rect><path d=\"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16\"></path>",
                "calendar": "<rect x=\"3\" y=\"4\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><line x1=\"16\" y1=\"2\" x2=\"16\" y2=\"6\"></line><line x1=\"8\" y1=\"2\" x2=\"8\" y2=\"6\"></line><line x1=\"3\" y1=\"10\" x2=\"21\" y2=\"10\"></line>",
                "camera-off": "<line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line><path d=\"M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56\"></path>",
                "camera": "<path d=\"M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z\"></path><circle cx=\"12\" cy=\"13\" r=\"4\"></circle>",
                "cast": "<path d=\"M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6\"></path><line x1=\"2\" y1=\"20\" x2=\"2.01\" y2=\"20\"></line>",
                "check-circle": "<path d=\"M22 11.08V12a10 10 0 1 1-5.93-9.14\"></path><polyline points=\"22 4 12 14.01 9 11.01\"></polyline>",
                "check-square": "<polyline points=\"9 11 12 14 22 4\"></polyline><path d=\"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11\"></path>",
                "check": "<polyline points=\"20 6 9 17 4 12\"></polyline>",
                "chevron-down": "<polyline points=\"6 9 12 15 18 9\"></polyline>",
                "chevron-left": "<polyline points=\"15 18 9 12 15 6\"></polyline>",
                "chevron-right": "<polyline points=\"9 18 15 12 9 6\"></polyline>",
                "chevron-up": "<polyline points=\"18 15 12 9 6 15\"></polyline>",
                "chevrons-down": "<polyline points=\"7 13 12 18 17 13\"></polyline><polyline points=\"7 6 12 11 17 6\"></polyline>",
                "chevrons-left": "<polyline points=\"11 17 6 12 11 7\"></polyline><polyline points=\"18 17 13 12 18 7\"></polyline>",
                "chevrons-right": "<polyline points=\"13 17 18 12 13 7\"></polyline><polyline points=\"6 17 11 12 6 7\"></polyline>",
                "chevrons-up": "<polyline points=\"17 11 12 6 7 11\"></polyline><polyline points=\"17 18 12 13 7 18\"></polyline>",
                "chrome": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><circle cx=\"12\" cy=\"12\" r=\"4\"></circle><line x1=\"21.17\" y1=\"8\" x2=\"12\" y2=\"8\"></line><line x1=\"3.95\" y1=\"6.06\" x2=\"8.54\" y2=\"14\"></line><line x1=\"10.88\" y1=\"21.94\" x2=\"15.46\" y2=\"14\"></line>",
                "circle": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle>",
                "clipboard": "<path d=\"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2\"></path><rect x=\"8\" y=\"2\" width=\"8\" height=\"4\" rx=\"1\" ry=\"1\"></rect>",
                "clock": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polyline points=\"12 6 12 12 16 14\"></polyline>",
                "cloud-drizzle": "<line x1=\"8\" y1=\"19\" x2=\"8\" y2=\"21\"></line><line x1=\"8\" y1=\"13\" x2=\"8\" y2=\"15\"></line><line x1=\"16\" y1=\"19\" x2=\"16\" y2=\"21\"></line><line x1=\"16\" y1=\"13\" x2=\"16\" y2=\"15\"></line><line x1=\"12\" y1=\"21\" x2=\"12\" y2=\"23\"></line><line x1=\"12\" y1=\"15\" x2=\"12\" y2=\"17\"></line><path d=\"M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25\"></path>",
                "cloud-lightning": "<path d=\"M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9\"></path><polyline points=\"13 11 9 17 15 17 11 23\"></polyline>",
                "cloud-off": "<path d=\"M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3\"></path><line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line>",
                "cloud-rain": "<line x1=\"16\" y1=\"13\" x2=\"16\" y2=\"21\"></line><line x1=\"8\" y1=\"13\" x2=\"8\" y2=\"21\"></line><line x1=\"12\" y1=\"15\" x2=\"12\" y2=\"23\"></line><path d=\"M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25\"></path>",
                "cloud-snow": "<path d=\"M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25\"></path><line x1=\"8\" y1=\"16\" x2=\"8.01\" y2=\"16\"></line><line x1=\"8\" y1=\"20\" x2=\"8.01\" y2=\"20\"></line><line x1=\"12\" y1=\"18\" x2=\"12.01\" y2=\"18\"></line><line x1=\"12\" y1=\"22\" x2=\"12.01\" y2=\"22\"></line><line x1=\"16\" y1=\"16\" x2=\"16.01\" y2=\"16\"></line><line x1=\"16\" y1=\"20\" x2=\"16.01\" y2=\"20\"></line>",
                "cloud": "<path d=\"M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z\"></path>",
                "code": "<polyline points=\"16 18 22 12 16 6\"></polyline><polyline points=\"8 6 2 12 8 18\"></polyline>",
                "codepen": "<polygon points=\"12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2\"></polygon><line x1=\"12\" y1=\"22\" x2=\"12\" y2=\"15.5\"></line><polyline points=\"22 8.5 12 15.5 2 8.5\"></polyline><polyline points=\"2 15.5 12 8.5 22 15.5\"></polyline><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"8.5\"></line>",
                "codesandbox": "<path d=\"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z\"></path><polyline points=\"7.5 4.21 12 6.81 16.5 4.21\"></polyline><polyline points=\"7.5 19.79 7.5 14.6 3 12\"></polyline><polyline points=\"21 12 16.5 14.6 16.5 19.79\"></polyline><polyline points=\"3.27 6.96 12 12.01 20.73 6.96\"></polyline><line x1=\"12\" y1=\"22.08\" x2=\"12\" y2=\"12\"></line>",
                "coffee": "<path d=\"M18 8h1a4 4 0 0 1 0 8h-1\"></path><path d=\"M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z\"></path><line x1=\"6\" y1=\"1\" x2=\"6\" y2=\"4\"></line><line x1=\"10\" y1=\"1\" x2=\"10\" y2=\"4\"></line><line x1=\"14\" y1=\"1\" x2=\"14\" y2=\"4\"></line>",
                "columns": "<path d=\"M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18\"></path>",
                "command": "<path d=\"M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z\"></path>",
                "compass": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polygon points=\"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76\"></polygon>",
                "copy": "<rect x=\"9\" y=\"9\" width=\"13\" height=\"13\" rx=\"2\" ry=\"2\"></rect><path d=\"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1\"></path>",
                "corner-down-left": "<polyline points=\"9 10 4 15 9 20\"></polyline><path d=\"M20 4v7a4 4 0 0 1-4 4H4\"></path>",
                "corner-down-right": "<polyline points=\"15 10 20 15 15 20\"></polyline><path d=\"M4 4v7a4 4 0 0 0 4 4h12\"></path>",
                "corner-left-down": "<polyline points=\"14 15 9 20 4 15\"></polyline><path d=\"M20 4h-7a4 4 0 0 0-4 4v12\"></path>",
                "corner-left-up": "<polyline points=\"14 9 9 4 4 9\"></polyline><path d=\"M20 20h-7a4 4 0 0 1-4-4V4\"></path>",
                "corner-right-down": "<polyline points=\"10 15 15 20 20 15\"></polyline><path d=\"M4 4h7a4 4 0 0 1 4 4v12\"></path>",
                "corner-right-up": "<polyline points=\"10 9 15 4 20 9\"></polyline><path d=\"M4 20h7a4 4 0 0 0 4-4V4\"></path>",
                "corner-up-left": "<polyline points=\"9 14 4 9 9 4\"></polyline><path d=\"M20 20v-7a4 4 0 0 0-4-4H4\"></path>",
                "corner-up-right": "<polyline points=\"15 14 20 9 15 4\"></polyline><path d=\"M4 20v-7a4 4 0 0 1 4-4h12\"></path>",
                "cpu": "<rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"2\" ry=\"2\"></rect><rect x=\"9\" y=\"9\" width=\"6\" height=\"6\"></rect><line x1=\"9\" y1=\"1\" x2=\"9\" y2=\"4\"></line><line x1=\"15\" y1=\"1\" x2=\"15\" y2=\"4\"></line><line x1=\"9\" y1=\"20\" x2=\"9\" y2=\"23\"></line><line x1=\"15\" y1=\"20\" x2=\"15\" y2=\"23\"></line><line x1=\"20\" y1=\"9\" x2=\"23\" y2=\"9\"></line><line x1=\"20\" y1=\"14\" x2=\"23\" y2=\"14\"></line><line x1=\"1\" y1=\"9\" x2=\"4\" y2=\"9\"></line><line x1=\"1\" y1=\"14\" x2=\"4\" y2=\"14\"></line>",
                "credit-card": "<rect x=\"1\" y=\"4\" width=\"22\" height=\"16\" rx=\"2\" ry=\"2\"></rect><line x1=\"1\" y1=\"10\" x2=\"23\" y2=\"10\"></line>",
                "crop": "<path d=\"M6.13 1L6 16a2 2 0 0 0 2 2h15\"></path><path d=\"M1 6.13L16 6a2 2 0 0 1 2 2v15\"></path>",
                "crosshair": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"22\" y1=\"12\" x2=\"18\" y2=\"12\"></line><line x1=\"6\" y1=\"12\" x2=\"2\" y2=\"12\"></line><line x1=\"12\" y1=\"6\" x2=\"12\" y2=\"2\"></line><line x1=\"12\" y1=\"22\" x2=\"12\" y2=\"18\"></line>",
                "database": "<ellipse cx=\"12\" cy=\"5\" rx=\"9\" ry=\"3\"></ellipse><path d=\"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3\"></path><path d=\"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5\"></path>",
                "delete": "<path d=\"M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z\"></path><line x1=\"18\" y1=\"9\" x2=\"12\" y2=\"15\"></line><line x1=\"12\" y1=\"9\" x2=\"18\" y2=\"15\"></line>",
                "disc": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><circle cx=\"12\" cy=\"12\" r=\"3\"></circle>",
                "divide-circle": "<line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line><line x1=\"12\" y1=\"16\" x2=\"12\" y2=\"16\"></line><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"8\"></line><circle cx=\"12\" cy=\"12\" r=\"10\"></circle>",
                "divide-square": "<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line><line x1=\"12\" y1=\"16\" x2=\"12\" y2=\"16\"></line><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"8\"></line>",
                "divide": "<circle cx=\"12\" cy=\"6\" r=\"2\"></circle><line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line><circle cx=\"12\" cy=\"18\" r=\"2\"></circle>",
                "dollar-sign": "<line x1=\"12\" y1=\"1\" x2=\"12\" y2=\"23\"></line><path d=\"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6\"></path>",
                "download-cloud": "<polyline points=\"8 17 12 21 16 17\"></polyline><line x1=\"12\" y1=\"12\" x2=\"12\" y2=\"21\"></line><path d=\"M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29\"></path>",
                "download": "<path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"></path><polyline points=\"7 10 12 15 17 10\"></polyline><line x1=\"12\" y1=\"15\" x2=\"12\" y2=\"3\"></line>",
                "dribbble": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><path d=\"M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32\"></path>",
                "droplet": "<path d=\"M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z\"></path>",
                "edit-2": "<path d=\"M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z\"></path>",
                "edit-3": "<path d=\"M12 20h9\"></path><path d=\"M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z\"></path>",
                "edit": "<path d=\"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7\"></path><path d=\"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z\"></path>",
                "external-link": "<path d=\"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6\"></path><polyline points=\"15 3 21 3 21 9\"></polyline><line x1=\"10\" y1=\"14\" x2=\"21\" y2=\"3\"></line>",
                "eye-off": "<path d=\"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24\"></path><line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line>",
                "eye": "<path d=\"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z\"></path><circle cx=\"12\" cy=\"12\" r=\"3\"></circle>",
                "facebook": "<path d=\"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z\"></path>",
                "fast-forward": "<polygon points=\"13 19 22 12 13 5 13 19\"></polygon><polygon points=\"2 19 11 12 2 5 2 19\"></polygon>",
                "feather": "<path d=\"M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z\"></path><line x1=\"16\" y1=\"8\" x2=\"2\" y2=\"22\"></line><line x1=\"17.5\" y1=\"15\" x2=\"9\" y2=\"15\"></line>",
                "figma": "<path d=\"M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z\"></path><path d=\"M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z\"></path><path d=\"M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z\"></path><path d=\"M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z\"></path><path d=\"M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z\"></path>",
                "file-minus": "<path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"></path><polyline points=\"14 2 14 8 20 8\"></polyline><line x1=\"9\" y1=\"15\" x2=\"15\" y2=\"15\"></line>",
                "file-plus": "<path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"></path><polyline points=\"14 2 14 8 20 8\"></polyline><line x1=\"12\" y1=\"18\" x2=\"12\" y2=\"12\"></line><line x1=\"9\" y1=\"15\" x2=\"15\" y2=\"15\"></line>",
                "file-text": "<path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"></path><polyline points=\"14 2 14 8 20 8\"></polyline><line x1=\"16\" y1=\"13\" x2=\"8\" y2=\"13\"></line><line x1=\"16\" y1=\"17\" x2=\"8\" y2=\"17\"></line><polyline points=\"10 9 9 9 8 9\"></polyline>",
                "file": "<path d=\"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z\"></path><polyline points=\"13 2 13 9 20 9\"></polyline>",
                "film": "<rect x=\"2\" y=\"2\" width=\"20\" height=\"20\" rx=\"2.18\" ry=\"2.18\"></rect><line x1=\"7\" y1=\"2\" x2=\"7\" y2=\"22\"></line><line x1=\"17\" y1=\"2\" x2=\"17\" y2=\"22\"></line><line x1=\"2\" y1=\"12\" x2=\"22\" y2=\"12\"></line><line x1=\"2\" y1=\"7\" x2=\"7\" y2=\"7\"></line><line x1=\"2\" y1=\"17\" x2=\"7\" y2=\"17\"></line><line x1=\"17\" y1=\"17\" x2=\"22\" y2=\"17\"></line><line x1=\"17\" y1=\"7\" x2=\"22\" y2=\"7\"></line>",
                "filter": "<polygon points=\"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3\"></polygon>",
                "flag": "<path d=\"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z\"></path><line x1=\"4\" y1=\"22\" x2=\"4\" y2=\"15\"></line>",
                "folder-minus": "<path d=\"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z\"></path><line x1=\"9\" y1=\"14\" x2=\"15\" y2=\"14\"></line>",
                "folder-plus": "<path d=\"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z\"></path><line x1=\"12\" y1=\"11\" x2=\"12\" y2=\"17\"></line><line x1=\"9\" y1=\"14\" x2=\"15\" y2=\"14\"></line>",
                "folder": "<path d=\"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z\"></path>",
                "framer": "<path d=\"M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7\"></path>",
                "frown": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><path d=\"M16 16s-1.5-2-4-2-4 2-4 2\"></path><line x1=\"9\" y1=\"9\" x2=\"9.01\" y2=\"9\"></line><line x1=\"15\" y1=\"9\" x2=\"15.01\" y2=\"9\"></line>",
                "gift": "<polyline points=\"20 12 20 22 4 22 4 12\"></polyline><rect x=\"2\" y=\"7\" width=\"20\" height=\"5\"></rect><line x1=\"12\" y1=\"22\" x2=\"12\" y2=\"7\"></line><path d=\"M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z\"></path><path d=\"M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z\"></path>",
                "git-branch": "<line x1=\"6\" y1=\"3\" x2=\"6\" y2=\"15\"></line><circle cx=\"18\" cy=\"6\" r=\"3\"></circle><circle cx=\"6\" cy=\"18\" r=\"3\"></circle><path d=\"M18 9a9 9 0 0 1-9 9\"></path>",
                "git-commit": "<circle cx=\"12\" cy=\"12\" r=\"4\"></circle><line x1=\"1.05\" y1=\"12\" x2=\"7\" y2=\"12\"></line><line x1=\"17.01\" y1=\"12\" x2=\"22.96\" y2=\"12\"></line>",
                "git-merge": "<circle cx=\"18\" cy=\"18\" r=\"3\"></circle><circle cx=\"6\" cy=\"6\" r=\"3\"></circle><path d=\"M6 21V9a9 9 0 0 0 9 9\"></path>",
                "git-pull-request": "<circle cx=\"18\" cy=\"18\" r=\"3\"></circle><circle cx=\"6\" cy=\"6\" r=\"3\"></circle><path d=\"M13 6h3a2 2 0 0 1 2 2v7\"></path><line x1=\"6\" y1=\"9\" x2=\"6\" y2=\"21\"></line>",
                "github": "<path d=\"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22\"></path>",
                "gitlab": "<path d=\"M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z\"></path>",
                "globe": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"2\" y1=\"12\" x2=\"22\" y2=\"12\"></line><path d=\"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z\"></path>",
                "grid": "<rect x=\"3\" y=\"3\" width=\"7\" height=\"7\"></rect><rect x=\"14\" y=\"3\" width=\"7\" height=\"7\"></rect><rect x=\"14\" y=\"14\" width=\"7\" height=\"7\"></rect><rect x=\"3\" y=\"14\" width=\"7\" height=\"7\"></rect>",
                "hard-drive": "<line x1=\"22\" y1=\"12\" x2=\"2\" y2=\"12\"></line><path d=\"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z\"></path><line x1=\"6\" y1=\"16\" x2=\"6.01\" y2=\"16\"></line><line x1=\"10\" y1=\"16\" x2=\"10.01\" y2=\"16\"></line>",
                "hash": "<line x1=\"4\" y1=\"9\" x2=\"20\" y2=\"9\"></line><line x1=\"4\" y1=\"15\" x2=\"20\" y2=\"15\"></line><line x1=\"10\" y1=\"3\" x2=\"8\" y2=\"21\"></line><line x1=\"16\" y1=\"3\" x2=\"14\" y2=\"21\"></line>",
                "headphones": "<path d=\"M3 18v-6a9 9 0 0 1 18 0v6\"></path><path d=\"M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z\"></path>",
                "heart": "<path d=\"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z\"></path>",
                "help-circle": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><path d=\"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3\"></path><line x1=\"12\" y1=\"17\" x2=\"12.01\" y2=\"17\"></line>",
                "hexagon": "<path d=\"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z\"></path>",
                "home": "<path d=\"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"></path><polyline points=\"9 22 9 12 15 12 15 22\"></polyline>",
                "image": "<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><circle cx=\"8.5\" cy=\"8.5\" r=\"1.5\"></circle><polyline points=\"21 15 16 10 5 21\"></polyline>",
                "inbox": "<polyline points=\"22 12 16 12 14 15 10 15 8 12 2 12\"></polyline><path d=\"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z\"></path>",
                "info": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"12\" y1=\"16\" x2=\"12\" y2=\"12\"></line><line x1=\"12\" y1=\"8\" x2=\"12.01\" y2=\"8\"></line>",
                "instagram": "<rect x=\"2\" y=\"2\" width=\"20\" height=\"20\" rx=\"5\" ry=\"5\"></rect><path d=\"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z\"></path><line x1=\"17.5\" y1=\"6.5\" x2=\"17.51\" y2=\"6.5\"></line>",
                "italic": "<line x1=\"19\" y1=\"4\" x2=\"10\" y2=\"4\"></line><line x1=\"14\" y1=\"20\" x2=\"5\" y2=\"20\"></line><line x1=\"15\" y1=\"4\" x2=\"9\" y2=\"20\"></line>",
                "key": "<path d=\"M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4\"></path>",
                "layers": "<polygon points=\"12 2 2 7 12 12 22 7 12 2\"></polygon><polyline points=\"2 17 12 22 22 17\"></polyline><polyline points=\"2 12 12 17 22 12\"></polyline>",
                "layout": "<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><line x1=\"3\" y1=\"9\" x2=\"21\" y2=\"9\"></line><line x1=\"9\" y1=\"21\" x2=\"9\" y2=\"9\"></line>",
                "life-buoy": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><circle cx=\"12\" cy=\"12\" r=\"4\"></circle><line x1=\"4.93\" y1=\"4.93\" x2=\"9.17\" y2=\"9.17\"></line><line x1=\"14.83\" y1=\"14.83\" x2=\"19.07\" y2=\"19.07\"></line><line x1=\"14.83\" y1=\"9.17\" x2=\"19.07\" y2=\"4.93\"></line><line x1=\"14.83\" y1=\"9.17\" x2=\"18.36\" y2=\"5.64\"></line><line x1=\"4.93\" y1=\"19.07\" x2=\"9.17\" y2=\"14.83\"></line>",
                "link-2": "<path d=\"M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3\"></path><line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line>",
                "link": "<path d=\"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71\"></path><path d=\"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71\"></path>",
                "linkedin": "<path d=\"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z\"></path><rect x=\"2\" y=\"9\" width=\"4\" height=\"12\"></rect><circle cx=\"4\" cy=\"4\" r=\"2\"></circle>",
                "list": "<line x1=\"8\" y1=\"6\" x2=\"21\" y2=\"6\"></line><line x1=\"8\" y1=\"12\" x2=\"21\" y2=\"12\"></line><line x1=\"8\" y1=\"18\" x2=\"21\" y2=\"18\"></line><line x1=\"3\" y1=\"6\" x2=\"3.01\" y2=\"6\"></line><line x1=\"3\" y1=\"12\" x2=\"3.01\" y2=\"12\"></line><line x1=\"3\" y1=\"18\" x2=\"3.01\" y2=\"18\"></line>",
                "loader": "<line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"6\"></line><line x1=\"12\" y1=\"18\" x2=\"12\" y2=\"22\"></line><line x1=\"4.93\" y1=\"4.93\" x2=\"7.76\" y2=\"7.76\"></line><line x1=\"16.24\" y1=\"16.24\" x2=\"19.07\" y2=\"19.07\"></line><line x1=\"2\" y1=\"12\" x2=\"6\" y2=\"12\"></line><line x1=\"18\" y1=\"12\" x2=\"22\" y2=\"12\"></line><line x1=\"4.93\" y1=\"19.07\" x2=\"7.76\" y2=\"16.24\"></line><line x1=\"16.24\" y1=\"7.76\" x2=\"19.07\" y2=\"4.93\"></line>",
                "lock": "<rect x=\"3\" y=\"11\" width=\"18\" height=\"11\" rx=\"2\" ry=\"2\"></rect><path d=\"M7 11V7a5 5 0 0 1 10 0v4\"></path>",
                "log-in": "<path d=\"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4\"></path><polyline points=\"10 17 15 12 10 7\"></polyline><line x1=\"15\" y1=\"12\" x2=\"3\" y2=\"12\"></line>",
                "log-out": "<path d=\"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4\"></path><polyline points=\"16 17 21 12 16 7\"></polyline><line x1=\"21\" y1=\"12\" x2=\"9\" y2=\"12\"></line>",
                "mail": "<path d=\"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z\"></path><polyline points=\"22,6 12,13 2,6\"></polyline>",
                "map-pin": "<path d=\"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z\"></path><circle cx=\"12\" cy=\"10\" r=\"3\"></circle>",
                "map": "<polygon points=\"1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6\"></polygon><line x1=\"8\" y1=\"2\" x2=\"8\" y2=\"18\"></line><line x1=\"16\" y1=\"6\" x2=\"16\" y2=\"22\"></line>",
                "maximize-2": "<polyline points=\"15 3 21 3 21 9\"></polyline><polyline points=\"9 21 3 21 3 15\"></polyline><line x1=\"21\" y1=\"3\" x2=\"14\" y2=\"10\"></line><line x1=\"3\" y1=\"21\" x2=\"10\" y2=\"14\"></line>",
                "maximize": "<path d=\"M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3\"></path>",
                "meh": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"8\" y1=\"15\" x2=\"16\" y2=\"15\"></line><line x1=\"9\" y1=\"9\" x2=\"9.01\" y2=\"9\"></line><line x1=\"15\" y1=\"9\" x2=\"15.01\" y2=\"9\"></line>",
                "menu": "<line x1=\"3\" y1=\"12\" x2=\"21\" y2=\"12\"></line><line x1=\"3\" y1=\"6\" x2=\"21\" y2=\"6\"></line><line x1=\"3\" y1=\"18\" x2=\"21\" y2=\"18\"></line>",
                "message-circle": "<path d=\"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z\"></path>",
                "message-square": "<path d=\"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z\"></path>",
                "mic-off": "<line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line><path d=\"M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6\"></path><path d=\"M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23\"></path><line x1=\"12\" y1=\"19\" x2=\"12\" y2=\"23\"></line><line x1=\"8\" y1=\"23\" x2=\"16\" y2=\"23\"></line>",
                "mic": "<path d=\"M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z\"></path><path d=\"M19 10v2a7 7 0 0 1-14 0v-2\"></path><line x1=\"12\" y1=\"19\" x2=\"12\" y2=\"23\"></line><line x1=\"8\" y1=\"23\" x2=\"16\" y2=\"23\"></line>",
                "minimize-2": "<polyline points=\"4 14 10 14 10 20\"></polyline><polyline points=\"20 10 14 10 14 4\"></polyline><line x1=\"14\" y1=\"10\" x2=\"21\" y2=\"3\"></line><line x1=\"3\" y1=\"21\" x2=\"10\" y2=\"14\"></line>",
                "minimize": "<path d=\"M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3\"></path>",
                "minus-circle": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line>",
                "minus-square": "<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line>",
                "minus": "<line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line>",
                "monitor": "<rect x=\"2\" y=\"3\" width=\"20\" height=\"14\" rx=\"2\" ry=\"2\"></rect><line x1=\"8\" y1=\"21\" x2=\"16\" y2=\"21\"></line><line x1=\"12\" y1=\"17\" x2=\"12\" y2=\"21\"></line>",
                "moon": "<path d=\"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z\"></path>",
                "more-horizontal": "<circle cx=\"12\" cy=\"12\" r=\"1\"></circle><circle cx=\"19\" cy=\"12\" r=\"1\"></circle><circle cx=\"5\" cy=\"12\" r=\"1\"></circle>",
                "more-vertical": "<circle cx=\"12\" cy=\"12\" r=\"1\"></circle><circle cx=\"12\" cy=\"5\" r=\"1\"></circle><circle cx=\"12\" cy=\"19\" r=\"1\"></circle>",
                "mouse-pointer": "<path d=\"M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z\"></path><path d=\"M13 13l6 6\"></path>",
                "move": "<polyline points=\"5 9 2 12 5 15\"></polyline><polyline points=\"9 5 12 2 15 5\"></polyline><polyline points=\"15 19 12 22 9 19\"></polyline><polyline points=\"19 9 22 12 19 15\"></polyline><line x1=\"2\" y1=\"12\" x2=\"22\" y2=\"12\"></line><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"22\"></line>",
                "music": "<path d=\"M9 18V5l12-2v13\"></path><circle cx=\"6\" cy=\"18\" r=\"3\"></circle><circle cx=\"18\" cy=\"16\" r=\"3\"></circle>",
                "navigation-2": "<polygon points=\"12 2 19 21 12 17 5 21 12 2\"></polygon>",
                "navigation": "<polygon points=\"3 11 22 2 13 21 11 13 3 11\"></polygon>",
                "octagon": "<polygon points=\"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2\"></polygon>",
                "package": "<line x1=\"16.5\" y1=\"9.4\" x2=\"7.5\" y2=\"4.21\"></line><path d=\"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z\"></path><polyline points=\"3.27 6.96 12 12.01 20.73 6.96\"></polyline><line x1=\"12\" y1=\"22.08\" x2=\"12\" y2=\"12\"></line>",
                "paperclip": "<path d=\"M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48\"></path>",
                "pause-circle": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"10\" y1=\"15\" x2=\"10\" y2=\"9\"></line><line x1=\"14\" y1=\"15\" x2=\"14\" y2=\"9\"></line>",
                "pause": "<rect x=\"6\" y=\"4\" width=\"4\" height=\"16\"></rect><rect x=\"14\" y=\"4\" width=\"4\" height=\"16\"></rect>",
                "pen-tool": "<path d=\"M12 19l7-7 3 3-7 7-3-3z\"></path><path d=\"M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z\"></path><path d=\"M2 2l7.586 7.586\"></path><circle cx=\"11\" cy=\"11\" r=\"2\"></circle>",
                "percent": "<line x1=\"19\" y1=\"5\" x2=\"5\" y2=\"19\"></line><circle cx=\"6.5\" cy=\"6.5\" r=\"2.5\"></circle><circle cx=\"17.5\" cy=\"17.5\" r=\"2.5\"></circle>",
                "phone-call": "<path d=\"M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\"></path>",
                "phone-forwarded": "<polyline points=\"19 1 23 5 19 9\"></polyline><line x1=\"15\" y1=\"5\" x2=\"23\" y2=\"5\"></line><path d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\"></path>",
                "phone-incoming": "<polyline points=\"16 2 16 8 22 8\"></polyline><line x1=\"23\" y1=\"1\" x2=\"16\" y2=\"8\"></line><path d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\"></path>",
                "phone-missed": "<line x1=\"23\" y1=\"1\" x2=\"17\" y2=\"7\"></line><line x1=\"17\" y1=\"1\" x2=\"23\" y2=\"7\"></line><path d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\"></path>",
                "phone-off": "<path d=\"M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91\"></path><line x1=\"23\" y1=\"1\" x2=\"1\" y2=\"23\"></line>",
                "phone-outgoing": "<polyline points=\"23 7 23 1 17 1\"></polyline><line x1=\"16\" y1=\"8\" x2=\"23\" y2=\"1\"></line><path d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\"></path>",
                "phone": "<path d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\"></path>",
                "pie-chart": "<path d=\"M21.21 15.89A10 10 0 1 1 8 2.83\"></path><path d=\"M22 12A10 10 0 0 0 12 2v10z\"></path>",
                "play-circle": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polygon points=\"10 8 16 12 10 16 10 8\"></polygon>",
                "play": "<polygon points=\"5 3 19 12 5 21 5 3\"></polygon>",
                "plus-circle": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"16\"></line><line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line>",
                "plus-square": "<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"16\"></line><line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line>",
                "plus": "<line x1=\"12\" y1=\"5\" x2=\"12\" y2=\"19\"></line><line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line>",
                "pocket": "<path d=\"M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z\"></path><polyline points=\"8 10 12 14 16 10\"></polyline>",
                "power": "<path d=\"M18.36 6.64a9 9 0 1 1-12.73 0\"></path><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"12\"></line>",
                "printer": "<polyline points=\"6 9 6 2 18 2 18 9\"></polyline><path d=\"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2\"></path><rect x=\"6\" y=\"14\" width=\"12\" height=\"8\"></rect>",
                "radio": "<circle cx=\"12\" cy=\"12\" r=\"2\"></circle><path d=\"M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14\"></path>",
                "refresh-ccw": "<polyline points=\"1 4 1 10 7 10\"></polyline><polyline points=\"23 20 23 14 17 14\"></polyline><path d=\"M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15\"></path>",
                "refresh-cw": "<polyline points=\"23 4 23 10 17 10\"></polyline><polyline points=\"1 20 1 14 7 14\"></polyline><path d=\"M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15\"></path>",
                "repeat": "<polyline points=\"17 1 21 5 17 9\"></polyline><path d=\"M3 11V9a4 4 0 0 1 4-4h14\"></path><polyline points=\"7 23 3 19 7 15\"></polyline><path d=\"M21 13v2a4 4 0 0 1-4 4H3\"></path>",
                "rewind": "<polygon points=\"11 19 2 12 11 5 11 19\"></polygon><polygon points=\"22 19 13 12 22 5 22 19\"></polygon>",
                "rotate-ccw": "<polyline points=\"1 4 1 10 7 10\"></polyline><path d=\"M3.51 15a9 9 0 1 0 2.13-9.36L1 10\"></path>",
                "rotate-cw": "<polyline points=\"23 4 23 10 17 10\"></polyline><path d=\"M20.49 15a9 9 0 1 1-2.12-9.36L23 10\"></path>",
                "rss": "<path d=\"M4 11a9 9 0 0 1 9 9\"></path><path d=\"M4 4a16 16 0 0 1 16 16\"></path><circle cx=\"5\" cy=\"19\" r=\"1\"></circle>",
                "save": "<path d=\"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z\"></path><polyline points=\"17 21 17 13 7 13 7 21\"></polyline><polyline points=\"7 3 7 8 15 8\"></polyline>",
                "scissors": "<circle cx=\"6\" cy=\"6\" r=\"3\"></circle><circle cx=\"6\" cy=\"18\" r=\"3\"></circle><line x1=\"20\" y1=\"4\" x2=\"8.12\" y2=\"15.88\"></line><line x1=\"14.47\" y1=\"14.48\" x2=\"20\" y2=\"20\"></line><line x1=\"8.12\" y1=\"8.12\" x2=\"12\" y2=\"12\"></line>",
                "search": "<circle cx=\"11\" cy=\"11\" r=\"8\"></circle><line x1=\"21\" y1=\"21\" x2=\"16.65\" y2=\"16.65\"></line>",
                "send": "<line x1=\"22\" y1=\"2\" x2=\"11\" y2=\"13\"></line><polygon points=\"22 2 15 22 11 13 2 9 22 2\"></polygon>",
                "server": "<rect x=\"2\" y=\"2\" width=\"20\" height=\"8\" rx=\"2\" ry=\"2\"></rect><rect x=\"2\" y=\"14\" width=\"20\" height=\"8\" rx=\"2\" ry=\"2\"></rect><line x1=\"6\" y1=\"6\" x2=\"6.01\" y2=\"6\"></line><line x1=\"6\" y1=\"18\" x2=\"6.01\" y2=\"18\"></line>",
                "settings": "<circle cx=\"12\" cy=\"12\" r=\"3\"></circle><path d=\"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z\"></path>",
                "share-2": "<circle cx=\"18\" cy=\"5\" r=\"3\"></circle><circle cx=\"6\" cy=\"12\" r=\"3\"></circle><circle cx=\"18\" cy=\"19\" r=\"3\"></circle><line x1=\"8.59\" y1=\"13.51\" x2=\"15.42\" y2=\"17.49\"></line><line x1=\"15.41\" y1=\"6.51\" x2=\"8.59\" y2=\"10.49\"></line>",
                "share": "<path d=\"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8\"></path><polyline points=\"16 6 12 2 8 6\"></polyline><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"15\"></line>",
                "shield-off": "<path d=\"M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18\"></path><path d=\"M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38\"></path><line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line>",
                "shield": "<path d=\"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z\"></path>",
                "shopping-bag": "<path d=\"M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z\"></path><line x1=\"3\" y1=\"6\" x2=\"21\" y2=\"6\"></line><path d=\"M16 10a4 4 0 0 1-8 0\"></path>",
                "shopping-cart": "<circle cx=\"9\" cy=\"21\" r=\"1\"></circle><circle cx=\"20\" cy=\"21\" r=\"1\"></circle><path d=\"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6\"></path>",
                "shuffle": "<polyline points=\"16 3 21 3 21 8\"></polyline><line x1=\"4\" y1=\"20\" x2=\"21\" y2=\"3\"></line><polyline points=\"21 16 21 21 16 21\"></polyline><line x1=\"15\" y1=\"15\" x2=\"21\" y2=\"21\"></line><line x1=\"4\" y1=\"4\" x2=\"9\" y2=\"9\"></line>",
                "sidebar": "<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><line x1=\"9\" y1=\"3\" x2=\"9\" y2=\"21\"></line>",
                "skip-back": "<polygon points=\"19 20 9 12 19 4 19 20\"></polygon><line x1=\"5\" y1=\"19\" x2=\"5\" y2=\"5\"></line>",
                "skip-forward": "<polygon points=\"5 4 15 12 5 20 5 4\"></polygon><line x1=\"19\" y1=\"5\" x2=\"19\" y2=\"19\"></line>",
                "slack": "<path d=\"M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z\"></path><path d=\"M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z\"></path><path d=\"M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z\"></path><path d=\"M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z\"></path><path d=\"M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z\"></path><path d=\"M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z\"></path><path d=\"M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z\"></path><path d=\"M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z\"></path>",
                "slash": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"4.93\" y1=\"4.93\" x2=\"19.07\" y2=\"19.07\"></line>",
                "sliders": "<line x1=\"4\" y1=\"21\" x2=\"4\" y2=\"14\"></line><line x1=\"4\" y1=\"10\" x2=\"4\" y2=\"3\"></line><line x1=\"12\" y1=\"21\" x2=\"12\" y2=\"12\"></line><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"3\"></line><line x1=\"20\" y1=\"21\" x2=\"20\" y2=\"16\"></line><line x1=\"20\" y1=\"12\" x2=\"20\" y2=\"3\"></line><line x1=\"1\" y1=\"14\" x2=\"7\" y2=\"14\"></line><line x1=\"9\" y1=\"8\" x2=\"15\" y2=\"8\"></line><line x1=\"17\" y1=\"16\" x2=\"23\" y2=\"16\"></line>",
                "smartphone": "<rect x=\"5\" y=\"2\" width=\"14\" height=\"20\" rx=\"2\" ry=\"2\"></rect><line x1=\"12\" y1=\"18\" x2=\"12.01\" y2=\"18\"></line>",
                "smile": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><path d=\"M8 14s1.5 2 4 2 4-2 4-2\"></path><line x1=\"9\" y1=\"9\" x2=\"9.01\" y2=\"9\"></line><line x1=\"15\" y1=\"9\" x2=\"15.01\" y2=\"9\"></line>",
                "speaker": "<rect x=\"4\" y=\"2\" width=\"16\" height=\"20\" rx=\"2\" ry=\"2\"></rect><circle cx=\"12\" cy=\"14\" r=\"4\"></circle><line x1=\"12\" y1=\"6\" x2=\"12.01\" y2=\"6\"></line>",
                "square": "<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect>",
                "star": "<polygon points=\"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2\"></polygon>",
                "stop-circle": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><rect x=\"9\" y=\"9\" width=\"6\" height=\"6\"></rect>",
                "sun": "<circle cx=\"12\" cy=\"12\" r=\"5\"></circle><line x1=\"12\" y1=\"1\" x2=\"12\" y2=\"3\"></line><line x1=\"12\" y1=\"21\" x2=\"12\" y2=\"23\"></line><line x1=\"4.22\" y1=\"4.22\" x2=\"5.64\" y2=\"5.64\"></line><line x1=\"18.36\" y1=\"18.36\" x2=\"19.78\" y2=\"19.78\"></line><line x1=\"1\" y1=\"12\" x2=\"3\" y2=\"12\"></line><line x1=\"21\" y1=\"12\" x2=\"23\" y2=\"12\"></line><line x1=\"4.22\" y1=\"19.78\" x2=\"5.64\" y2=\"18.36\"></line><line x1=\"18.36\" y1=\"5.64\" x2=\"19.78\" y2=\"4.22\"></line>",
                "sunrise": "<path d=\"M17 18a5 5 0 0 0-10 0\"></path><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"9\"></line><line x1=\"4.22\" y1=\"10.22\" x2=\"5.64\" y2=\"11.64\"></line><line x1=\"1\" y1=\"18\" x2=\"3\" y2=\"18\"></line><line x1=\"21\" y1=\"18\" x2=\"23\" y2=\"18\"></line><line x1=\"18.36\" y1=\"11.64\" x2=\"19.78\" y2=\"10.22\"></line><line x1=\"23\" y1=\"22\" x2=\"1\" y2=\"22\"></line><polyline points=\"8 6 12 2 16 6\"></polyline>",
                "sunset": "<path d=\"M17 18a5 5 0 0 0-10 0\"></path><line x1=\"12\" y1=\"9\" x2=\"12\" y2=\"2\"></line><line x1=\"4.22\" y1=\"10.22\" x2=\"5.64\" y2=\"11.64\"></line><line x1=\"1\" y1=\"18\" x2=\"3\" y2=\"18\"></line><line x1=\"21\" y1=\"18\" x2=\"23\" y2=\"18\"></line><line x1=\"18.36\" y1=\"11.64\" x2=\"19.78\" y2=\"10.22\"></line><line x1=\"23\" y1=\"22\" x2=\"1\" y2=\"22\"></line><polyline points=\"16 5 12 9 8 5\"></polyline>",
                "tablet": "<rect x=\"4\" y=\"2\" width=\"16\" height=\"20\" rx=\"2\" ry=\"2\"></rect><line x1=\"12\" y1=\"18\" x2=\"12.01\" y2=\"18\"></line>",
                "tag": "<path d=\"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z\"></path><line x1=\"7\" y1=\"7\" x2=\"7.01\" y2=\"7\"></line>",
                "target": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><circle cx=\"12\" cy=\"12\" r=\"6\"></circle><circle cx=\"12\" cy=\"12\" r=\"2\"></circle>",
                "terminal": "<polyline points=\"4 17 10 11 4 5\"></polyline><line x1=\"12\" y1=\"19\" x2=\"20\" y2=\"19\"></line>",
                "thermometer": "<path d=\"M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z\"></path>",
                "thumbs-down": "<path d=\"M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17\"></path>",
                "thumbs-up": "<path d=\"M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3\"></path>",
                "toggle-left": "<rect x=\"1\" y=\"5\" width=\"22\" height=\"14\" rx=\"7\" ry=\"7\"></rect><circle cx=\"8\" cy=\"12\" r=\"3\"></circle>",
                "toggle-right": "<rect x=\"1\" y=\"5\" width=\"22\" height=\"14\" rx=\"7\" ry=\"7\"></rect><circle cx=\"16\" cy=\"12\" r=\"3\"></circle>",
                "tool": "<path d=\"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z\"></path>",
                "trash-2": "<polyline points=\"3 6 5 6 21 6\"></polyline><path d=\"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\"></path><line x1=\"10\" y1=\"11\" x2=\"10\" y2=\"17\"></line><line x1=\"14\" y1=\"11\" x2=\"14\" y2=\"17\"></line>",
                "trash": "<polyline points=\"3 6 5 6 21 6\"></polyline><path d=\"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\"></path>",
                "trello": "<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><rect x=\"7\" y=\"7\" width=\"3\" height=\"9\"></rect><rect x=\"14\" y=\"7\" width=\"3\" height=\"5\"></rect>",
                "trending-down": "<polyline points=\"23 18 13.5 8.5 8.5 13.5 1 6\"></polyline><polyline points=\"17 18 23 18 23 12\"></polyline>",
                "trending-up": "<polyline points=\"23 6 13.5 15.5 8.5 10.5 1 18\"></polyline><polyline points=\"17 6 23 6 23 12\"></polyline>",
                "triangle": "<path d=\"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z\"></path>",
                "truck": "<rect x=\"1\" y=\"3\" width=\"15\" height=\"13\"></rect><polygon points=\"16 8 20 8 23 11 23 16 16 16 16 8\"></polygon><circle cx=\"5.5\" cy=\"18.5\" r=\"2.5\"></circle><circle cx=\"18.5\" cy=\"18.5\" r=\"2.5\"></circle>",
                "tv": "<rect x=\"2\" y=\"7\" width=\"20\" height=\"15\" rx=\"2\" ry=\"2\"></rect><polyline points=\"17 2 12 7 7 2\"></polyline>",
                "twitch": "<path d=\"M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7\"></path>",
                "twitter": "<path d=\"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z\"></path>",
                "type": "<polyline points=\"4 7 4 4 20 4 20 7\"></polyline><line x1=\"9\" y1=\"20\" x2=\"15\" y2=\"20\"></line><line x1=\"12\" y1=\"4\" x2=\"12\" y2=\"20\"></line>",
                "umbrella": "<path d=\"M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7\"></path>",
                "underline": "<path d=\"M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3\"></path><line x1=\"4\" y1=\"21\" x2=\"20\" y2=\"21\"></line>",
                "unlock": "<rect x=\"3\" y=\"11\" width=\"18\" height=\"11\" rx=\"2\" ry=\"2\"></rect><path d=\"M7 11V7a5 5 0 0 1 9.9-1\"></path>",
                "upload-cloud": "<polyline points=\"16 16 12 12 8 16\"></polyline><line x1=\"12\" y1=\"12\" x2=\"12\" y2=\"21\"></line><path d=\"M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3\"></path><polyline points=\"16 16 12 12 8 16\"></polyline>",
                "upload": "<path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"></path><polyline points=\"17 8 12 3 7 8\"></polyline><line x1=\"12\" y1=\"3\" x2=\"12\" y2=\"15\"></line>",
                "user-check": "<path d=\"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"></path><circle cx=\"8.5\" cy=\"7\" r=\"4\"></circle><polyline points=\"17 11 19 13 23 9\"></polyline>",
                "user-minus": "<path d=\"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"></path><circle cx=\"8.5\" cy=\"7\" r=\"4\"></circle><line x1=\"23\" y1=\"11\" x2=\"17\" y2=\"11\"></line>",
                "user-plus": "<path d=\"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"></path><circle cx=\"8.5\" cy=\"7\" r=\"4\"></circle><line x1=\"20\" y1=\"8\" x2=\"20\" y2=\"14\"></line><line x1=\"23\" y1=\"11\" x2=\"17\" y2=\"11\"></line>",
                "user-x": "<path d=\"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"></path><circle cx=\"8.5\" cy=\"7\" r=\"4\"></circle><line x1=\"18\" y1=\"8\" x2=\"23\" y2=\"13\"></line><line x1=\"23\" y1=\"8\" x2=\"18\" y2=\"13\"></line>",
                "user": "<path d=\"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2\"></path><circle cx=\"12\" cy=\"7\" r=\"4\"></circle>",
                "users": "<path d=\"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"></path><circle cx=\"9\" cy=\"7\" r=\"4\"></circle><path d=\"M23 21v-2a4 4 0 0 0-3-3.87\"></path><path d=\"M16 3.13a4 4 0 0 1 0 7.75\"></path>",
                "video-off": "<path d=\"M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10\"></path><line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line>",
                "video": "<polygon points=\"23 7 16 12 23 17 23 7\"></polygon><rect x=\"1\" y=\"5\" width=\"15\" height=\"14\" rx=\"2\" ry=\"2\"></rect>",
                "voicemail": "<circle cx=\"5.5\" cy=\"11.5\" r=\"4.5\"></circle><circle cx=\"18.5\" cy=\"11.5\" r=\"4.5\"></circle><line x1=\"5.5\" y1=\"16\" x2=\"18.5\" y2=\"16\"></line>",
                "volume-1": "<polygon points=\"11 5 6 9 2 9 2 15 6 15 11 19 11 5\"></polygon><path d=\"M15.54 8.46a5 5 0 0 1 0 7.07\"></path>",
                "volume-2": "<polygon points=\"11 5 6 9 2 9 2 15 6 15 11 19 11 5\"></polygon><path d=\"M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07\"></path>",
                "volume-x": "<polygon points=\"11 5 6 9 2 9 2 15 6 15 11 19 11 5\"></polygon><line x1=\"23\" y1=\"9\" x2=\"17\" y2=\"15\"></line><line x1=\"17\" y1=\"9\" x2=\"23\" y2=\"15\"></line>",
                "volume": "<polygon points=\"11 5 6 9 2 9 2 15 6 15 11 19 11 5\"></polygon>",
                "watch": "<circle cx=\"12\" cy=\"12\" r=\"7\"></circle><polyline points=\"12 9 12 12 13.5 13.5\"></polyline><path d=\"M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83\"></path>",
                "wifi-off": "<line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line><path d=\"M16.72 11.06A10.94 10.94 0 0 1 19 12.55\"></path><path d=\"M5 12.55a10.94 10.94 0 0 1 5.17-2.39\"></path><path d=\"M10.71 5.05A16 16 0 0 1 22.58 9\"></path><path d=\"M1.42 9a15.91 15.91 0 0 1 4.7-2.88\"></path><path d=\"M8.53 16.11a6 6 0 0 1 6.95 0\"></path><line x1=\"12\" y1=\"20\" x2=\"12.01\" y2=\"20\"></line>",
                "wifi": "<path d=\"M5 12.55a11 11 0 0 1 14.08 0\"></path><path d=\"M1.42 9a16 16 0 0 1 21.16 0\"></path><path d=\"M8.53 16.11a6 6 0 0 1 6.95 0\"></path><line x1=\"12\" y1=\"20\" x2=\"12.01\" y2=\"20\"></line>",
                "wind": "<path d=\"M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2\"></path>",
                "x-circle": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"15\" y1=\"9\" x2=\"9\" y2=\"15\"></line><line x1=\"9\" y1=\"9\" x2=\"15\" y2=\"15\"></line>",
                "x-octagon": "<polygon points=\"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2\"></polygon><line x1=\"15\" y1=\"9\" x2=\"9\" y2=\"15\"></line><line x1=\"9\" y1=\"9\" x2=\"15\" y2=\"15\"></line>",
                "x-square": "<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><line x1=\"9\" y1=\"9\" x2=\"15\" y2=\"15\"></line><line x1=\"15\" y1=\"9\" x2=\"9\" y2=\"15\"></line>",
                "x": "<line x1=\"18\" y1=\"6\" x2=\"6\" y2=\"18\"></line><line x1=\"6\" y1=\"6\" x2=\"18\" y2=\"18\"></line>",
                "youtube": "<path d=\"M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z\"></path><polygon points=\"9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02\"></polygon>",
                "zap-off": "<polyline points=\"12.41 6.75 13 2 10.57 4.92\"></polyline><polyline points=\"18.57 12.91 21 10 15.66 10\"></polyline><polyline points=\"8 8 3 14 12 14 11 22 16 16\"></polyline><line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line>",
                "zap": "<polygon points=\"13 2 3 14 12 14 11 22 21 10 12 10 13 2\"></polygon>",
                "zoom-in": "<circle cx=\"11\" cy=\"11\" r=\"8\"></circle><line x1=\"21\" y1=\"21\" x2=\"16.65\" y2=\"16.65\"></line><line x1=\"11\" y1=\"8\" x2=\"11\" y2=\"14\"></line><line x1=\"8\" y1=\"11\" x2=\"14\" y2=\"11\"></line>",
                "zoom-out": "<circle cx=\"11\" cy=\"11\" r=\"8\"></circle><line x1=\"21\" y1=\"21\" x2=\"16.65\" y2=\"16.65\"></line><line x1=\"8\" y1=\"11\" x2=\"14\" y2=\"11\"></line>"
            };
        /***/ },
        /***/ "./node_modules/classnames/dedupe.js": /*!*******************************************!*\
  !*** ./node_modules/classnames/dedupe.js ***!
  \*******************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__; /*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/ 
            /* global define */ (function() {
                'use strict';
                var classNames = function() {
                    // don't inherit from Object so we can skip hasOwnProperty check later
                    // http://stackoverflow.com/questions/15518328/creating-js-object-with-object-createnull#answer-21079232
                    function StorageObject() {}
                    StorageObject.prototype = Object.create(null);
                    function _parseArray(resultSet, array) {
                        var length = array.length;
                        for(var i = 0; i < length; ++i)_parse(resultSet, array[i]);
                    }
                    var hasOwn = {}.hasOwnProperty;
                    function _parseNumber(resultSet, num) {
                        resultSet[num] = true;
                    }
                    function _parseObject(resultSet, object) {
                        for(var k in object)if (hasOwn.call(object, k)) // set value to false instead of deleting it to avoid changing object structure
                        // https://www.smashingmagazine.com/2012/11/writing-fast-memory-efficient-javascript/#de-referencing-misconceptions
                        resultSet[k] = !!object[k];
                    }
                    var SPACE = /\s+/;
                    function _parseString(resultSet, str) {
                        var array = str.split(SPACE);
                        var length = array.length;
                        for(var i = 0; i < length; ++i)resultSet[array[i]] = true;
                    }
                    function _parse(resultSet, arg) {
                        if (!arg) return;
                        var argType = typeof arg;
                        // 'foo bar'
                        if (argType === 'string') _parseString(resultSet, arg);
                        else if (Array.isArray(arg)) _parseArray(resultSet, arg);
                        else if (argType === 'object') _parseObject(resultSet, arg);
                        else if (argType === 'number') _parseNumber(resultSet, arg);
                    }
                    function _classNames() {
                        // don't leak arguments
                        // https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
                        var len = arguments.length;
                        var args = Array(len);
                        for(var i = 0; i < len; i++)args[i] = arguments[i];
                        var classSet = new StorageObject();
                        _parseArray(classSet, args);
                        var list = [];
                        for(var k in classSet)if (classSet[k]) list.push(k);
                        return list.join(' ');
                    }
                    return _classNames;
                }();
                if (typeof module1 !== 'undefined' && module1.exports) module1.exports = classNames;
                else // register as 'classnames', consistent with npm package name
                __WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
                    return classNames;
                }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module1.exports = __WEBPACK_AMD_DEFINE_RESULT__);
            })();
        /***/ },
        /***/ "./node_modules/core-js/es/array/from.js": /*!***********************************************!*\
  !*** ./node_modules/core-js/es/array/from.js ***!
  \***********************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            __webpack_require__(/*! ../../modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
            __webpack_require__(/*! ../../modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
            var path = __webpack_require__(/*! ../../internals/path */ "./node_modules/core-js/internals/path.js");
            module1.exports = path.Array.from;
        /***/ },
        /***/ "./node_modules/core-js/internals/a-function.js": /*!******************************************************!*\
  !*** ./node_modules/core-js/internals/a-function.js ***!
  \******************************************************/ /*! no static exports found */ /***/ function(module1, exports) {
            module1.exports = function(it) {
                if (typeof it != 'function') throw TypeError(String(it) + ' is not a function');
                return it;
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/an-object.js": /*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/an-object.js ***!
  \*****************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
            module1.exports = function(it) {
                if (!isObject(it)) throw TypeError(String(it) + ' is not an object');
                return it;
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/array-from.js": /*!******************************************************!*\
  !*** ./node_modules/core-js/internals/array-from.js ***!
  \******************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var bind = __webpack_require__(/*! ../internals/bind-context */ "./node_modules/core-js/internals/bind-context.js");
            var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
            var callWithSafeIterationClosing = __webpack_require__(/*! ../internals/call-with-safe-iteration-closing */ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js");
            var isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ "./node_modules/core-js/internals/is-array-iterator-method.js");
            var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
            var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
            var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "./node_modules/core-js/internals/get-iterator-method.js");
            // `Array.from` method
            // https://tc39.github.io/ecma262/#sec-array.from
            module1.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */ ) {
                var O = toObject(arrayLike);
                var C = typeof this == 'function' ? this : Array;
                var argumentsLength = arguments.length;
                var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
                var mapping = mapfn !== undefined;
                var index = 0;
                var iteratorMethod = getIteratorMethod(O);
                var length, result, step, iterator;
                if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
                // if the target is not iterable or it's an array with the default iterator - use a simple case
                if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
                    iterator = iteratorMethod.call(O);
                    result = new C();
                    for(; !(step = iterator.next()).done; index++)createProperty(result, index, mapping ? callWithSafeIterationClosing(iterator, mapfn, [
                        step.value,
                        index
                    ], true) : step.value);
                } else {
                    length = toLength(O.length);
                    result = new C(length);
                    for(; length > index; index++)createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
                }
                result.length = index;
                return result;
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/array-includes.js": /*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-includes.js ***!
  \**********************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
            var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
            var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");
            // `Array.prototype.{ indexOf, includes }` methods implementation
            // false -> Array#indexOf
            // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
            // true  -> Array#includes
            // https://tc39.github.io/ecma262/#sec-array.prototype.includes
            module1.exports = function(IS_INCLUDES) {
                return function($this, el, fromIndex) {
                    var O = toIndexedObject($this);
                    var length = toLength(O.length);
                    var index = toAbsoluteIndex(fromIndex, length);
                    var value;
                    // Array#includes uses SameValueZero equality algorithm
                    // eslint-disable-next-line no-self-compare
                    if (IS_INCLUDES && el != el) while(length > index){
                        value = O[index++];
                        // eslint-disable-next-line no-self-compare
                        if (value != value) return true;
                    // Array#indexOf ignores holes, Array#includes - not
                    }
                    else for(; length > index; index++)if (IS_INCLUDES || index in O) {
                        if (O[index] === el) return IS_INCLUDES || index || 0;
                    }
                    return !IS_INCLUDES && -1;
                };
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/bind-context.js": /*!********************************************************!*\
  !*** ./node_modules/core-js/internals/bind-context.js ***!
  \********************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");
            // optional / simple context binding
            module1.exports = function(fn, that, length) {
                aFunction(fn);
                if (that === undefined) return fn;
                switch(length){
                    case 0:
                        return function() {
                            return fn.call(that);
                        };
                    case 1:
                        return function(a) {
                            return fn.call(that, a);
                        };
                    case 2:
                        return function(a, b) {
                            return fn.call(that, a, b);
                        };
                    case 3:
                        return function(a, b, c) {
                            return fn.call(that, a, b, c);
                        };
                }
                return function() {
                    return fn.apply(that, arguments);
                };
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js": /*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/call-with-safe-iteration-closing.js ***!
  \****************************************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
            // call something on iterator step with safe closing on error
            module1.exports = function(iterator, fn, value, ENTRIES) {
                try {
                    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
                // 7.4.6 IteratorClose(iterator, completion)
                } catch (error) {
                    var returnMethod = iterator['return'];
                    if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
                    throw error;
                }
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/check-correctness-of-iteration.js": /*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/check-correctness-of-iteration.js ***!
  \**************************************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
            var ITERATOR = wellKnownSymbol('iterator');
            var SAFE_CLOSING = false;
            try {
                var called = 0;
                var iteratorWithReturn = {
                    next: function() {
                        return {
                            done: !!called++
                        };
                    },
                    'return': function() {
                        SAFE_CLOSING = true;
                    }
                };
                iteratorWithReturn[ITERATOR] = function() {
                    return this;
                };
                // eslint-disable-next-line no-throw-literal
                Array.from(iteratorWithReturn, function() {
                    throw 2;
                });
            } catch (error) {}
            module1.exports = function(exec, SKIP_CLOSING) {
                if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
                var ITERATION_SUPPORT = false;
                try {
                    var object = {};
                    object[ITERATOR] = function() {
                        return {
                            next: function() {
                                return {
                                    done: ITERATION_SUPPORT = true
                                };
                            }
                        };
                    };
                    exec(object);
                } catch (error) {}
                return ITERATION_SUPPORT;
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/classof-raw.js": /*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/classof-raw.js ***!
  \*******************************************************/ /*! no static exports found */ /***/ function(module1, exports) {
            var toString = {}.toString;
            module1.exports = function(it) {
                return toString.call(it).slice(8, -1);
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/classof.js": /*!***************************************************!*\
  !*** ./node_modules/core-js/internals/classof.js ***!
  \***************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var classofRaw = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
            var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
            var TO_STRING_TAG = wellKnownSymbol('toStringTag');
            // ES3 wrong here
            var CORRECT_ARGUMENTS = classofRaw(function() {
                return arguments;
            }()) == 'Arguments';
            // fallback for IE11 Script Access Denied error
            var tryGet = function(it, key) {
                try {
                    return it[key];
                } catch (error) {}
            };
            // getting tag from ES6+ `Object.prototype.toString`
            module1.exports = function(it) {
                var O, tag, result;
                return it === undefined ? 'Undefined' : it === null ? 'Null' : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/copy-constructor-properties.js": /*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
  \***********************************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
            var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "./node_modules/core-js/internals/own-keys.js");
            var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");
            var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
            module1.exports = function(target, source) {
                var keys = ownKeys(source);
                var defineProperty = definePropertyModule.f;
                var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
                for(var i = 0; i < keys.length; i++){
                    var key = keys[i];
                    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
                }
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/correct-prototype-getter.js": /*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/correct-prototype-getter.js ***!
  \********************************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
            module1.exports = !fails(function() {
                function F() {}
                F.prototype.constructor = null;
                return Object.getPrototypeOf(new F()) !== F.prototype;
            });
        /***/ },
        /***/ "./node_modules/core-js/internals/create-iterator-constructor.js": /*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-iterator-constructor.js ***!
  \***********************************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var IteratorPrototype = __webpack_require__(/*! ../internals/iterators-core */ "./node_modules/core-js/internals/iterators-core.js").IteratorPrototype;
            var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
            var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
            var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
            var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
            var returnThis = function() {
                return this;
            };
            module1.exports = function(IteratorConstructor, NAME, next) {
                var TO_STRING_TAG = NAME + ' Iterator';
                IteratorConstructor.prototype = create(IteratorPrototype, {
                    next: createPropertyDescriptor(1, next)
                });
                setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
                Iterators[TO_STRING_TAG] = returnThis;
                return IteratorConstructor;
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/create-property-descriptor.js": /*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
  \**********************************************************************/ /*! no static exports found */ /***/ function(module1, exports) {
            module1.exports = function(bitmap, value) {
                return {
                    enumerable: !(bitmap & 1),
                    configurable: !(bitmap & 2),
                    writable: !(bitmap & 4),
                    value: value
                };
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/create-property.js": /*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/create-property.js ***!
  \***********************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
            var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
            var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
            module1.exports = function(object, key, value) {
                var propertyKey = toPrimitive(key);
                if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
                else object[propertyKey] = value;
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/define-iterator.js": /*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/define-iterator.js ***!
  \***********************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
            var createIteratorConstructor = __webpack_require__(/*! ../internals/create-iterator-constructor */ "./node_modules/core-js/internals/create-iterator-constructor.js");
            var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
            var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/core-js/internals/object-set-prototype-of.js");
            var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
            var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");
            var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
            var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
            var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
            var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
            var IteratorsCore = __webpack_require__(/*! ../internals/iterators-core */ "./node_modules/core-js/internals/iterators-core.js");
            var IteratorPrototype = IteratorsCore.IteratorPrototype;
            var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
            var ITERATOR = wellKnownSymbol('iterator');
            var KEYS = 'keys';
            var VALUES = 'values';
            var ENTRIES = 'entries';
            var returnThis = function() {
                return this;
            };
            module1.exports = function(Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
                createIteratorConstructor(IteratorConstructor, NAME, next);
                var getIterationMethod = function(KIND) {
                    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
                    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
                    switch(KIND){
                        case KEYS:
                            return function keys() {
                                return new IteratorConstructor(this, KIND);
                            };
                        case VALUES:
                            return function values() {
                                return new IteratorConstructor(this, KIND);
                            };
                        case ENTRIES:
                            return function entries() {
                                return new IteratorConstructor(this, KIND);
                            };
                    }
                    return function() {
                        return new IteratorConstructor(this);
                    };
                };
                var TO_STRING_TAG = NAME + ' Iterator';
                var INCORRECT_VALUES_NAME = false;
                var IterablePrototype = Iterable.prototype;
                var nativeIterator = IterablePrototype[ITERATOR] || IterablePrototype['@@iterator'] || DEFAULT && IterablePrototype[DEFAULT];
                var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
                var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
                var CurrentIteratorPrototype, methods, KEY;
                // fix native
                if (anyNativeIterator) {
                    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
                    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
                        if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
                            if (setPrototypeOf) setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
                            else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') hide(CurrentIteratorPrototype, ITERATOR, returnThis);
                        }
                        // Set @@toStringTag to native iterators
                        setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
                        if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
                    }
                }
                // fix Array#{values, @@iterator}.name in V8 / FF
                if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
                    INCORRECT_VALUES_NAME = true;
                    defaultIterator = function values() {
                        return nativeIterator.call(this);
                    };
                }
                // define iterator
                if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) hide(IterablePrototype, ITERATOR, defaultIterator);
                Iterators[NAME] = defaultIterator;
                // export additional methods
                if (DEFAULT) {
                    methods = {
                        values: getIterationMethod(VALUES),
                        keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
                        entries: getIterationMethod(ENTRIES)
                    };
                    if (FORCED) {
                        for(KEY in methods)if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) redefine(IterablePrototype, KEY, methods[KEY]);
                    } else $({
                        target: NAME,
                        proto: true,
                        forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME
                    }, methods);
                }
                return methods;
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/descriptors.js": /*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/descriptors.js ***!
  \*******************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
            // Thank's IE8 for his funny defineProperty
            module1.exports = !fails(function() {
                return Object.defineProperty({}, 'a', {
                    get: function() {
                        return 7;
                    }
                }).a != 7;
            });
        /***/ },
        /***/ "./node_modules/core-js/internals/document-create-element.js": /*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/document-create-element.js ***!
  \*******************************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
            var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
            var document1 = global.document;
            // typeof document.createElement is 'object' in old IE
            var exist = isObject(document1) && isObject(document1.createElement);
            module1.exports = function(it) {
                return exist ? document1.createElement(it) : {};
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/enum-bug-keys.js": /*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
  \*********************************************************/ /*! no static exports found */ /***/ function(module1, exports) {
            // IE8- don't enum bug keys
            module1.exports = [
                'constructor',
                'hasOwnProperty',
                'isPrototypeOf',
                'propertyIsEnumerable',
                'toLocaleString',
                'toString',
                'valueOf'
            ];
        /***/ },
        /***/ "./node_modules/core-js/internals/export.js": /*!**************************************************!*\
  !*** ./node_modules/core-js/internals/export.js ***!
  \**************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
            var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
            var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");
            var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
            var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
            var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "./node_modules/core-js/internals/copy-constructor-properties.js");
            var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");
            /*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/ module1.exports = function(options, source) {
                var TARGET = options.target;
                var GLOBAL = options.global;
                var STATIC = options.stat;
                var FORCED, target, key, targetProperty, sourceProperty, descriptor;
                if (GLOBAL) target = global;
                else if (STATIC) target = global[TARGET] || setGlobal(TARGET, {});
                else target = (global[TARGET] || {}).prototype;
                if (target) for(key in source){
                    sourceProperty = source[key];
                    if (options.noTargetGet) {
                        descriptor = getOwnPropertyDescriptor(target, key);
                        targetProperty = descriptor && descriptor.value;
                    } else targetProperty = target[key];
                    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
                    // contained in target
                    if (!FORCED && targetProperty !== undefined) {
                        if (typeof sourceProperty === typeof targetProperty) continue;
                        copyConstructorProperties(sourceProperty, targetProperty);
                    }
                    // add a flag to not completely full polyfills
                    if (options.sham || targetProperty && targetProperty.sham) hide(sourceProperty, 'sham', true);
                    // extend global
                    redefine(target, key, sourceProperty, options);
                }
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/fails.js": /*!*************************************************!*\
  !*** ./node_modules/core-js/internals/fails.js ***!
  \*************************************************/ /*! no static exports found */ /***/ function(module1, exports) {
            module1.exports = function(exec) {
                try {
                    return !!exec();
                } catch (error) {
                    return true;
                }
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/function-to-string.js": /*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/function-to-string.js ***!
  \**************************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
            module1.exports = shared('native-function-to-string', Function.toString);
        /***/ },
        /***/ "./node_modules/core-js/internals/get-iterator-method.js": /*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/get-iterator-method.js ***!
  \***************************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");
            var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
            var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
            var ITERATOR = wellKnownSymbol('iterator');
            module1.exports = function(it) {
                if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/global.js": /*!**************************************************!*\
  !*** ./node_modules/core-js/internals/global.js ***!
  \**************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            /* WEBPACK VAR INJECTION */ (function(global) {
                var O = 'object';
                var check = function(it) {
                    return it && it.Math == Math && it;
                };
                // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
                module1.exports = // eslint-disable-next-line no-undef
                check(typeof globalThis == O && globalThis) || check(typeof window == O && window) || check(typeof self == O && self) || check(typeof global == O && global) || // eslint-disable-next-line no-new-func
                Function('return this')();
            /* WEBPACK VAR INJECTION */ }).call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"));
        /***/ },
        /***/ "./node_modules/core-js/internals/has.js": /*!***********************************************!*\
  !*** ./node_modules/core-js/internals/has.js ***!
  \***********************************************/ /*! no static exports found */ /***/ function(module1, exports) {
            var hasOwnProperty = {}.hasOwnProperty;
            module1.exports = function(it, key) {
                return hasOwnProperty.call(it, key);
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/hidden-keys.js": /*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/hidden-keys.js ***!
  \*******************************************************/ /*! no static exports found */ /***/ function(module1, exports) {
            module1.exports = {};
        /***/ },
        /***/ "./node_modules/core-js/internals/hide.js": /*!************************************************!*\
  !*** ./node_modules/core-js/internals/hide.js ***!
  \************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
            var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
            var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
            module1.exports = DESCRIPTORS ? function(object, key, value) {
                return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
            } : function(object, key, value) {
                object[key] = value;
                return object;
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/html.js": /*!************************************************!*\
  !*** ./node_modules/core-js/internals/html.js ***!
  \************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
            var document1 = global.document;
            module1.exports = document1 && document1.documentElement;
        /***/ },
        /***/ "./node_modules/core-js/internals/ie8-dom-define.js": /*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
            var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
            var createElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");
            // Thank's IE8 for his funny defineProperty
            module1.exports = !DESCRIPTORS && !fails(function() {
                return Object.defineProperty(createElement('div'), 'a', {
                    get: function() {
                        return 7;
                    }
                }).a != 7;
            });
        /***/ },
        /***/ "./node_modules/core-js/internals/indexed-object.js": /*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/indexed-object.js ***!
  \**********************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            // fallback for non-array-like ES3 and non-enumerable old V8 strings
            var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
            var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
            var split = ''.split;
            module1.exports = fails(function() {
                // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
                // eslint-disable-next-line no-prototype-builtins
                return !Object('z').propertyIsEnumerable(0);
            }) ? function(it) {
                return classof(it) == 'String' ? split.call(it, '') : Object(it);
            } : Object;
        /***/ },
        /***/ "./node_modules/core-js/internals/internal-state.js": /*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/internal-state.js ***!
  \**********************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ "./node_modules/core-js/internals/native-weak-map.js");
            var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
            var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
            var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");
            var objectHas = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
            var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
            var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
            var WeakMap = global.WeakMap;
            var set, get, has;
            var enforce = function(it) {
                return has(it) ? get(it) : set(it, {});
            };
            var getterFor = function(TYPE) {
                return function(it) {
                    var state;
                    if (!isObject(it) || (state = get(it)).type !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required');
                    return state;
                };
            };
            if (NATIVE_WEAK_MAP) {
                var store = new WeakMap();
                var wmget = store.get;
                var wmhas = store.has;
                var wmset = store.set;
                set = function(it, metadata) {
                    wmset.call(store, it, metadata);
                    return metadata;
                };
                get = function(it) {
                    return wmget.call(store, it) || {};
                };
                has = function(it) {
                    return wmhas.call(store, it);
                };
            } else {
                var STATE = sharedKey('state');
                hiddenKeys[STATE] = true;
                set = function(it, metadata) {
                    hide(it, STATE, metadata);
                    return metadata;
                };
                get = function(it) {
                    return objectHas(it, STATE) ? it[STATE] : {};
                };
                has = function(it) {
                    return objectHas(it, STATE);
                };
            }
            module1.exports = {
                set: set,
                get: get,
                has: has,
                enforce: enforce,
                getterFor: getterFor
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/is-array-iterator-method.js": /*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/is-array-iterator-method.js ***!
  \********************************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
            var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
            var ITERATOR = wellKnownSymbol('iterator');
            var ArrayPrototype = Array.prototype;
            // check on default Array iterator
            module1.exports = function(it) {
                return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/is-forced.js": /*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-forced.js ***!
  \*****************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
            var replacement = /#|\.prototype\./;
            var isForced = function(feature, detection) {
                var value = data[normalize(feature)];
                return value == POLYFILL ? true : value == NATIVE ? false : typeof detection == 'function' ? fails(detection) : !!detection;
            };
            var normalize = isForced.normalize = function(string) {
                return String(string).replace(replacement, '.').toLowerCase();
            };
            var data = isForced.data = {};
            var NATIVE = isForced.NATIVE = 'N';
            var POLYFILL = isForced.POLYFILL = 'P';
            module1.exports = isForced;
        /***/ },
        /***/ "./node_modules/core-js/internals/is-object.js": /*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-object.js ***!
  \*****************************************************/ /*! no static exports found */ /***/ function(module1, exports) {
            module1.exports = function(it) {
                return typeof it === 'object' ? it !== null : typeof it === 'function';
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/is-pure.js": /*!***************************************************!*\
  !*** ./node_modules/core-js/internals/is-pure.js ***!
  \***************************************************/ /*! no static exports found */ /***/ function(module1, exports) {
            module1.exports = false;
        /***/ },
        /***/ "./node_modules/core-js/internals/iterators-core.js": /*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/iterators-core.js ***!
  \**********************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
            var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");
            var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
            var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
            var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
            var ITERATOR = wellKnownSymbol('iterator');
            var BUGGY_SAFARI_ITERATORS = false;
            var returnThis = function() {
                return this;
            };
            // `%IteratorPrototype%` object
            // https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
            var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;
            if ([].keys) {
                arrayIterator = [].keys();
                // Safari 8 has buggy iterators w/o `next`
                if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
                else {
                    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
                    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
                }
            }
            if (IteratorPrototype == undefined) IteratorPrototype = {};
            // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
            if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
            module1.exports = {
                IteratorPrototype: IteratorPrototype,
                BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/iterators.js": /*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/iterators.js ***!
  \*****************************************************/ /*! no static exports found */ /***/ function(module1, exports) {
            module1.exports = {};
        /***/ },
        /***/ "./node_modules/core-js/internals/native-symbol.js": /*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/native-symbol.js ***!
  \*********************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
            module1.exports = !!Object.getOwnPropertySymbols && !fails(function() {
                // Chrome 38 Symbol has incorrect toString conversion
                // eslint-disable-next-line no-undef
                return !String(Symbol());
            });
        /***/ },
        /***/ "./node_modules/core-js/internals/native-weak-map.js": /*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/native-weak-map.js ***!
  \***********************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
            var nativeFunctionToString = __webpack_require__(/*! ../internals/function-to-string */ "./node_modules/core-js/internals/function-to-string.js");
            var WeakMap = global.WeakMap;
            module1.exports = typeof WeakMap === 'function' && /native code/.test(nativeFunctionToString.call(WeakMap));
        /***/ },
        /***/ "./node_modules/core-js/internals/object-create.js": /*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-create.js ***!
  \*********************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
            var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ "./node_modules/core-js/internals/object-define-properties.js");
            var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");
            var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
            var html = __webpack_require__(/*! ../internals/html */ "./node_modules/core-js/internals/html.js");
            var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");
            var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
            var IE_PROTO = sharedKey('IE_PROTO');
            var PROTOTYPE = 'prototype';
            var Empty = function() {};
            // Create object with fake `null` prototype: use iframe Object with cleared prototype
            var createDict = function() {
                // Thrash, waste and sodomy: IE GC bug
                var iframe = documentCreateElement('iframe');
                var length = enumBugKeys.length;
                var lt = '<';
                var script = 'script';
                var gt = '>';
                var js = 'java' + script + ':';
                var iframeDocument;
                iframe.style.display = 'none';
                html.appendChild(iframe);
                iframe.src = String(js);
                iframeDocument = iframe.contentWindow.document;
                iframeDocument.open();
                iframeDocument.write(lt + script + gt + 'document.F=Object' + lt + '/' + script + gt);
                iframeDocument.close();
                createDict = iframeDocument.F;
                while(length--)delete createDict[PROTOTYPE][enumBugKeys[length]];
                return createDict();
            };
            // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
            module1.exports = Object.create || function create(O, Properties) {
                var result;
                if (O !== null) {
                    Empty[PROTOTYPE] = anObject(O);
                    result = new Empty();
                    Empty[PROTOTYPE] = null;
                    // add "__proto__" for Object.getPrototypeOf polyfill
                    result[IE_PROTO] = O;
                } else result = createDict();
                return Properties === undefined ? result : defineProperties(result, Properties);
            };
            hiddenKeys[IE_PROTO] = true;
        /***/ },
        /***/ "./node_modules/core-js/internals/object-define-properties.js": /*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-properties.js ***!
  \********************************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
            var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
            var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
            var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");
            module1.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
                anObject(O);
                var keys = objectKeys(Properties);
                var length = keys.length;
                var i = 0;
                var key;
                while(length > i)definePropertyModule.f(O, key = keys[i++], Properties[key]);
                return O;
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/object-define-property.js": /*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-property.js ***!
  \******************************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
            var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");
            var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
            var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
            var nativeDefineProperty = Object.defineProperty;
            exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
                anObject(O);
                P = toPrimitive(P, true);
                anObject(Attributes);
                if (IE8_DOM_DEFINE) try {
                    return nativeDefineProperty(O, P, Attributes);
                } catch (error) {}
                if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
                if ('value' in Attributes) O[P] = Attributes.value;
                return O;
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/object-get-own-property-descriptor.js": /*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \******************************************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
            var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");
            var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
            var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
            var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
            var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
            var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");
            var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
            exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
                O = toIndexedObject(O);
                P = toPrimitive(P, true);
                if (IE8_DOM_DEFINE) try {
                    return nativeGetOwnPropertyDescriptor(O, P);
                } catch (error) {}
                if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/object-get-own-property-names.js": /*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
  \*************************************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
            var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
            var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");
            var hiddenKeys = enumBugKeys.concat('length', 'prototype');
            exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
                return internalObjectKeys(O, hiddenKeys);
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/object-get-own-property-symbols.js": /*!***************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \***************************************************************************/ /*! no static exports found */ /***/ function(module1, exports) {
            exports.f = Object.getOwnPropertySymbols;
        /***/ },
        /***/ "./node_modules/core-js/internals/object-get-prototype-of.js": /*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-prototype-of.js ***!
  \*******************************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
            var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
            var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
            var CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ "./node_modules/core-js/internals/correct-prototype-getter.js");
            var IE_PROTO = sharedKey('IE_PROTO');
            var ObjectPrototype = Object.prototype;
            // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
            module1.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function(O) {
                O = toObject(O);
                if (has(O, IE_PROTO)) return O[IE_PROTO];
                if (typeof O.constructor == 'function' && O instanceof O.constructor) return O.constructor.prototype;
                return O instanceof Object ? ObjectPrototype : null;
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/object-keys-internal.js": /*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
  \****************************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
            var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
            var arrayIncludes = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js");
            var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
            var arrayIndexOf = arrayIncludes(false);
            module1.exports = function(object, names) {
                var O = toIndexedObject(object);
                var i = 0;
                var result = [];
                var key;
                for(key in O)!has(hiddenKeys, key) && has(O, key) && result.push(key);
                // Don't enum bug & hidden keys
                while(names.length > i)if (has(O, key = names[i++])) ~arrayIndexOf(result, key) || result.push(key);
                return result;
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/object-keys.js": /*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys.js ***!
  \*******************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
            var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");
            // 19.1.2.14 / 15.2.3.14 Object.keys(O)
            module1.exports = Object.keys || function keys(O) {
                return internalObjectKeys(O, enumBugKeys);
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/object-property-is-enumerable.js": /*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \*************************************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
            var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
            // Nashorn ~ JDK8 bug
            var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({
                1: 2
            }, 1);
            exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
                var descriptor = getOwnPropertyDescriptor(this, V);
                return !!descriptor && descriptor.enumerable;
            } : nativePropertyIsEnumerable;
        /***/ },
        /***/ "./node_modules/core-js/internals/object-set-prototype-of.js": /*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-set-prototype-of.js ***!
  \*******************************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var validateSetPrototypeOfArguments = __webpack_require__(/*! ../internals/validate-set-prototype-of-arguments */ "./node_modules/core-js/internals/validate-set-prototype-of-arguments.js");
            // Works with __proto__ only. Old v8 can't work with null proto objects.
            /* eslint-disable no-proto */ module1.exports = Object.setPrototypeOf || ('__proto__' in {} ? function() {
                var correctSetter = false;
                var test = {};
                var setter;
                try {
                    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
                    setter.call(test, []);
                    correctSetter = test instanceof Array;
                } catch (error) {}
                return function setPrototypeOf(O, proto) {
                    validateSetPrototypeOfArguments(O, proto);
                    if (correctSetter) setter.call(O, proto);
                    else O.__proto__ = proto;
                    return O;
                };
            }() : undefined);
        /***/ },
        /***/ "./node_modules/core-js/internals/own-keys.js": /*!****************************************************!*\
  !*** ./node_modules/core-js/internals/own-keys.js ***!
  \****************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
            var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js");
            var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
            var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
            var Reflect = global.Reflect;
            // all object keys, includes non-enumerable and symbols
            module1.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
                var keys = getOwnPropertyNamesModule.f(anObject(it));
                var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
                return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/path.js": /*!************************************************!*\
  !*** ./node_modules/core-js/internals/path.js ***!
  \************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            module1.exports = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
        /***/ },
        /***/ "./node_modules/core-js/internals/redefine.js": /*!****************************************************!*\
  !*** ./node_modules/core-js/internals/redefine.js ***!
  \****************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
            var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
            var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");
            var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
            var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
            var nativeFunctionToString = __webpack_require__(/*! ../internals/function-to-string */ "./node_modules/core-js/internals/function-to-string.js");
            var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
            var getInternalState = InternalStateModule.get;
            var enforceInternalState = InternalStateModule.enforce;
            var TEMPLATE = String(nativeFunctionToString).split('toString');
            shared('inspectSource', function(it) {
                return nativeFunctionToString.call(it);
            });
            (module1.exports = function(O, key, value, options) {
                var unsafe = options ? !!options.unsafe : false;
                var simple = options ? !!options.enumerable : false;
                var noTargetGet = options ? !!options.noTargetGet : false;
                if (typeof value == 'function') {
                    if (typeof key == 'string' && !has(value, 'name')) hide(value, 'name', key);
                    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
                }
                if (O === global) {
                    if (simple) O[key] = value;
                    else setGlobal(key, value);
                    return;
                } else if (!unsafe) delete O[key];
                else if (!noTargetGet && O[key]) simple = true;
                if (simple) O[key] = value;
                else hide(O, key, value);
            // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
            })(Function.prototype, 'toString', function toString() {
                return typeof this == 'function' && getInternalState(this).source || nativeFunctionToString.call(this);
            });
        /***/ },
        /***/ "./node_modules/core-js/internals/require-object-coercible.js": /*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
  \********************************************************************/ /*! no static exports found */ /***/ function(module1, exports) {
            // `RequireObjectCoercible` abstract operation
            // https://tc39.github.io/ecma262/#sec-requireobjectcoercible
            module1.exports = function(it) {
                if (it == undefined) throw TypeError("Can't call method on " + it);
                return it;
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/set-global.js": /*!******************************************************!*\
  !*** ./node_modules/core-js/internals/set-global.js ***!
  \******************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
            var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");
            module1.exports = function(key, value) {
                try {
                    hide(global, key, value);
                } catch (error) {
                    global[key] = value;
                }
                return value;
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/set-to-string-tag.js": /*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/set-to-string-tag.js ***!
  \*************************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
            var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
            var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
            var TO_STRING_TAG = wellKnownSymbol('toStringTag');
            module1.exports = function(it, TAG, STATIC) {
                if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) defineProperty(it, TO_STRING_TAG, {
                    configurable: true,
                    value: TAG
                });
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/shared-key.js": /*!******************************************************!*\
  !*** ./node_modules/core-js/internals/shared-key.js ***!
  \******************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
            var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
            var keys = shared('keys');
            module1.exports = function(key) {
                return keys[key] || (keys[key] = uid(key));
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/shared.js": /*!**************************************************!*\
  !*** ./node_modules/core-js/internals/shared.js ***!
  \**************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
            var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
            var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
            var SHARED = '__core-js_shared__';
            var store = global[SHARED] || setGlobal(SHARED, {});
            (module1.exports = function(key, value) {
                return store[key] || (store[key] = value !== undefined ? value : {});
            })('versions', []).push({
                version: '3.1.3',
                mode: IS_PURE ? 'pure' : 'global',
                copyright: "\xa9 2019 Denis Pushkarev (zloirock.ru)"
            });
        /***/ },
        /***/ "./node_modules/core-js/internals/string-at.js": /*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/string-at.js ***!
  \*****************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
            var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
            // CONVERT_TO_STRING: true  -> String#at
            // CONVERT_TO_STRING: false -> String#codePointAt
            module1.exports = function(that, pos, CONVERT_TO_STRING) {
                var S = String(requireObjectCoercible(that));
                var position = toInteger(pos);
                var size = S.length;
                var first, second;
                if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
                first = S.charCodeAt(position);
                return first < 0xD800 || first > 0xDBFF || position + 1 === size || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF ? CONVERT_TO_STRING ? S.charAt(position) : first : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/to-absolute-index.js": /*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
  \*************************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
            var max = Math.max;
            var min = Math.min;
            // Helper for a popular repeating case of the spec:
            // Let integer be ? ToInteger(index).
            // If integer < 0, let result be max((length + integer), 0); else let result be min(length, length).
            module1.exports = function(index, length) {
                var integer = toInteger(index);
                return integer < 0 ? max(integer + length, 0) : min(integer, length);
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/to-indexed-object.js": /*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
  \*************************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            // toObject with fallback for non-array-like ES3 strings
            var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
            var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
            module1.exports = function(it) {
                return IndexedObject(requireObjectCoercible(it));
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/to-integer.js": /*!******************************************************!*\
  !*** ./node_modules/core-js/internals/to-integer.js ***!
  \******************************************************/ /*! no static exports found */ /***/ function(module1, exports) {
            var ceil = Math.ceil;
            var floor = Math.floor;
            // `ToInteger` abstract operation
            // https://tc39.github.io/ecma262/#sec-tointeger
            module1.exports = function(argument) {
                return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/to-length.js": /*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-length.js ***!
  \*****************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
            var min = Math.min;
            // `ToLength` abstract operation
            // https://tc39.github.io/ecma262/#sec-tolength
            module1.exports = function(argument) {
                return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/to-object.js": /*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-object.js ***!
  \*****************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
            // `ToObject` abstract operation
            // https://tc39.github.io/ecma262/#sec-toobject
            module1.exports = function(argument) {
                return Object(requireObjectCoercible(argument));
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/to-primitive.js": /*!********************************************************!*\
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
            // 7.1.1 ToPrimitive(input [, PreferredType])
            // instead of the ES6 spec version, we didn't implement @@toPrimitive case
            // and the second argument - flag - preferred type is a string
            module1.exports = function(it, S) {
                if (!isObject(it)) return it;
                var fn, val;
                if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
                if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
                if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
                throw TypeError("Can't convert object to primitive value");
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/uid.js": /*!***********************************************!*\
  !*** ./node_modules/core-js/internals/uid.js ***!
  \***********************************************/ /*! no static exports found */ /***/ function(module1, exports) {
            var id = 0;
            var postfix = Math.random();
            module1.exports = function(key) {
                return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + postfix).toString(36));
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/validate-set-prototype-of-arguments.js": /*!*******************************************************************************!*\
  !*** ./node_modules/core-js/internals/validate-set-prototype-of-arguments.js ***!
  \*******************************************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
            var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
            module1.exports = function(O, proto) {
                anObject(O);
                if (!isObject(proto) && proto !== null) throw TypeError("Can't set " + String(proto) + ' as a prototype');
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/well-known-symbol.js": /*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
  \*************************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
            var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
            var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
            var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");
            var Symbol1 = global.Symbol;
            var store = shared('wks');
            module1.exports = function(name) {
                return store[name] || (store[name] = NATIVE_SYMBOL && Symbol1[name] || (NATIVE_SYMBOL ? Symbol1 : uid)('Symbol.' + name));
            };
        /***/ },
        /***/ "./node_modules/core-js/modules/es.array.from.js": /*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.from.js ***!
  \*******************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
            var from = __webpack_require__(/*! ../internals/array-from */ "./node_modules/core-js/internals/array-from.js");
            var checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ "./node_modules/core-js/internals/check-correctness-of-iteration.js");
            var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function(iterable) {
                Array.from(iterable);
            });
            // `Array.from` method
            // https://tc39.github.io/ecma262/#sec-array.from
            $({
                target: 'Array',
                stat: true,
                forced: INCORRECT_ITERATION
            }, {
                from: from
            });
        /***/ },
        /***/ "./node_modules/core-js/modules/es.string.iterator.js": /*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.iterator.js ***!
  \************************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var codePointAt = __webpack_require__(/*! ../internals/string-at */ "./node_modules/core-js/internals/string-at.js");
            var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
            var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "./node_modules/core-js/internals/define-iterator.js");
            var STRING_ITERATOR = 'String Iterator';
            var setInternalState = InternalStateModule.set;
            var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);
            // `String.prototype[@@iterator]` method
            // https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
            defineIterator(String, 'String', function(iterated) {
                setInternalState(this, {
                    type: STRING_ITERATOR,
                    string: String(iterated),
                    index: 0
                });
            // `%StringIteratorPrototype%.next` method
            // https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
            }, function next() {
                var state = getInternalState(this);
                var string = state.string;
                var index = state.index;
                var point;
                if (index >= string.length) return {
                    value: undefined,
                    done: true
                };
                point = codePointAt(string, index, true);
                state.index += point.length;
                return {
                    value: point,
                    done: false
                };
            });
        /***/ },
        /***/ "./node_modules/webpack/buildin/global.js": /*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/ /*! no static exports found */ /***/ function(module1, exports) {
            var g;
            // This works in non-strict mode
            g = function() {
                return this;
            }();
            try {
                // This works if eval is allowed (see CSP)
                g = g || Function("return this")() || (0, eval)("this");
            } catch (e) {
                // This works if the window reference is available
                if (typeof window === "object") g = window;
            }
            // g can still be undefined, but nothing to do about it...
            // We return undefined, instead of nothing here, so it's
            // easier to handle this case. if(!global) { ...}
            module1.exports = g;
        /***/ },
        /***/ "./src/default-attrs.json": /*!********************************!*\
  !*** ./src/default-attrs.json ***!
  \********************************/ /*! exports provided: xmlns, width, height, viewBox, fill, stroke, stroke-width, stroke-linecap, stroke-linejoin, default */ /***/ function(module1) {
            module1.exports = {
                "xmlns": "http://www.w3.org/2000/svg",
                "width": 24,
                "height": 24,
                "viewBox": "0 0 24 24",
                "fill": "none",
                "stroke": "currentColor",
                "stroke-width": 2,
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
            };
        /***/ },
        /***/ "./src/icon.js": /*!*********************!*\
  !*** ./src/icon.js ***!
  \*********************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var _extends = Object.assign || function(target) {
                for(var i = 1; i < arguments.length; i++){
                    var source = arguments[i];
                    for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
                }
                return target;
            };
            var _createClass = function() {
                function defineProperties(target, props) {
                    for(var i = 0; i < props.length; i++){
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();
            var _dedupe = __webpack_require__(/*! classnames/dedupe */ "./node_modules/classnames/dedupe.js");
            var _dedupe2 = _interopRequireDefault(_dedupe);
            var _defaultAttrs = __webpack_require__(/*! ./default-attrs.json */ "./src/default-attrs.json");
            var _defaultAttrs2 = _interopRequireDefault(_defaultAttrs);
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }
            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
            }
            var Icon = function() {
                function Icon(name, contents) {
                    var tags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
                    _classCallCheck(this, Icon);
                    this.name = name;
                    this.contents = contents;
                    this.tags = tags;
                    this.attrs = _extends({}, _defaultAttrs2.default, {
                        class: 'feather feather-' + name
                    });
                }
                /**
   * Create an SVG string.
   * @param {Object} attrs
   * @returns {string}
   */ _createClass(Icon, [
                    {
                        key: 'toSvg',
                        value: function toSvg() {
                            var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                            var combinedAttrs = _extends({}, this.attrs, attrs, {
                                class: (0, _dedupe2.default)(this.attrs.class, attrs.class)
                            });
                            return '<svg ' + attrsToString(combinedAttrs) + '>' + this.contents + '</svg>';
                        }
                    },
                    {
                        key: 'toString',
                        value: function toString() {
                            return this.contents;
                        }
                    }
                ]);
                return Icon;
            }();
            /**
 * Convert attributes object to string of HTML attributes.
 * @param {Object} attrs
 * @returns {string}
 */ function attrsToString(attrs) {
                return Object.keys(attrs).map(function(key) {
                    return key + '="' + attrs[key] + '"';
                }).join(' ');
            }
            exports.default = Icon;
        /***/ },
        /***/ "./src/icons.js": /*!**********************!*\
  !*** ./src/icons.js ***!
  \**********************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var _icon = __webpack_require__(/*! ./icon */ "./src/icon.js");
            var _icon2 = _interopRequireDefault(_icon);
            var _icons = __webpack_require__(/*! ../dist/icons.json */ "./dist/icons.json");
            var _icons2 = _interopRequireDefault(_icons);
            var _tags = __webpack_require__(/*! ./tags.json */ "./src/tags.json");
            var _tags2 = _interopRequireDefault(_tags);
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }
            exports.default = Object.keys(_icons2.default).map(function(key) {
                return new _icon2.default(key, _icons2.default[key], _tags2.default[key]);
            }).reduce(function(object, icon) {
                object[icon.name] = icon;
                return object;
            }, {});
        /***/ },
        /***/ "./src/index.js": /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var _icons = __webpack_require__(/*! ./icons */ "./src/icons.js");
            var _icons2 = _interopRequireDefault(_icons);
            var _toSvg = __webpack_require__(/*! ./to-svg */ "./src/to-svg.js");
            var _toSvg2 = _interopRequireDefault(_toSvg);
            var _replace = __webpack_require__(/*! ./replace */ "./src/replace.js");
            var _replace2 = _interopRequireDefault(_replace);
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }
            module1.exports = {
                icons: _icons2.default,
                toSvg: _toSvg2.default,
                replace: _replace2.default
            };
        /***/ },
        /***/ "./src/replace.js": /*!************************!*\
  !*** ./src/replace.js ***!
  \************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var _extends = Object.assign || function(target) {
                for(var i = 1; i < arguments.length; i++){
                    var source = arguments[i];
                    for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
                }
                return target;
            }; /* eslint-env browser */ 
            var _dedupe = __webpack_require__(/*! classnames/dedupe */ "./node_modules/classnames/dedupe.js");
            var _dedupe2 = _interopRequireDefault(_dedupe);
            var _icons = __webpack_require__(/*! ./icons */ "./src/icons.js");
            var _icons2 = _interopRequireDefault(_icons);
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }
            /**
 * Replace all HTML elements that have a `data-feather` attribute with SVG markup
 * corresponding to the element's `data-feather` attribute value.
 * @param {Object} attrs
 */ function replace() {
                var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                if (typeof document === 'undefined') throw new Error('`feather.replace()` only works in a browser environment.');
                var elementsToReplace = document.querySelectorAll('[data-feather]');
                Array.from(elementsToReplace).forEach(function(element) {
                    return replaceElement(element, attrs);
                });
            }
            /**
 * Replace a single HTML element with SVG markup
 * corresponding to the element's `data-feather` attribute value.
 * @param {HTMLElement} element
 * @param {Object} attrs
 */ function replaceElement(element) {
                var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                var elementAttrs = getAttrs(element);
                var name = elementAttrs['data-feather'];
                delete elementAttrs['data-feather'];
                var svgString = _icons2.default[name].toSvg(_extends({}, attrs, elementAttrs, {
                    class: (0, _dedupe2.default)(attrs.class, elementAttrs.class)
                }));
                var svgDocument = new DOMParser().parseFromString(svgString, 'image/svg+xml');
                var svgElement = svgDocument.querySelector('svg');
                element.parentNode.replaceChild(svgElement, element);
            }
            /**
 * Get the attributes of an HTML element.
 * @param {HTMLElement} element
 * @returns {Object}
 */ function getAttrs(element) {
                return Array.from(element.attributes).reduce(function(attrs, attr) {
                    attrs[attr.name] = attr.value;
                    return attrs;
                }, {});
            }
            exports.default = replace;
        /***/ },
        /***/ "./src/tags.json": /*!***********************!*\
  !*** ./src/tags.json ***!
  \***********************/ /*! exports provided: activity, airplay, alert-circle, alert-octagon, alert-triangle, align-center, align-justify, align-left, align-right, anchor, archive, at-sign, award, aperture, bar-chart, bar-chart-2, battery, battery-charging, bell, bell-off, bluetooth, book-open, book, bookmark, box, briefcase, calendar, camera, cast, circle, clipboard, clock, cloud-drizzle, cloud-lightning, cloud-rain, cloud-snow, cloud, codepen, codesandbox, code, coffee, columns, command, compass, copy, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, cpu, credit-card, crop, crosshair, database, delete, disc, dollar-sign, droplet, edit, edit-2, edit-3, eye, eye-off, external-link, facebook, fast-forward, figma, file-minus, file-plus, file-text, film, filter, flag, folder-minus, folder-plus, folder, framer, frown, gift, git-branch, git-commit, git-merge, git-pull-request, github, gitlab, globe, hard-drive, hash, headphones, heart, help-circle, hexagon, home, image, inbox, instagram, key, layers, layout, life-bouy, link, link-2, linkedin, list, lock, log-in, log-out, mail, map-pin, map, maximize, maximize-2, meh, menu, message-circle, message-square, mic-off, mic, minimize, minimize-2, minus, monitor, moon, more-horizontal, more-vertical, mouse-pointer, move, music, navigation, navigation-2, octagon, package, paperclip, pause, pause-circle, pen-tool, percent, phone-call, phone-forwarded, phone-incoming, phone-missed, phone-off, phone-outgoing, phone, play, pie-chart, play-circle, plus, plus-circle, plus-square, pocket, power, printer, radio, refresh-cw, refresh-ccw, repeat, rewind, rotate-ccw, rotate-cw, rss, save, scissors, search, send, settings, share-2, shield, shield-off, shopping-bag, shopping-cart, shuffle, skip-back, skip-forward, slack, slash, sliders, smartphone, smile, speaker, star, stop-circle, sun, sunrise, sunset, tablet, tag, target, terminal, thermometer, thumbs-down, thumbs-up, toggle-left, toggle-right, tool, trash, trash-2, triangle, truck, tv, twitch, twitter, type, umbrella, unlock, user-check, user-minus, user-plus, user-x, user, users, video-off, video, voicemail, volume, volume-1, volume-2, volume-x, watch, wifi-off, wifi, wind, x-circle, x-octagon, x-square, x, youtube, zap-off, zap, zoom-in, zoom-out, default */ /***/ function(module1) {
            module1.exports = {
                "activity": [
                    "pulse",
                    "health",
                    "action",
                    "motion"
                ],
                "airplay": [
                    "stream",
                    "cast",
                    "mirroring"
                ],
                "alert-circle": [
                    "warning",
                    "alert",
                    "danger"
                ],
                "alert-octagon": [
                    "warning",
                    "alert",
                    "danger"
                ],
                "alert-triangle": [
                    "warning",
                    "alert",
                    "danger"
                ],
                "align-center": [
                    "text alignment",
                    "center"
                ],
                "align-justify": [
                    "text alignment",
                    "justified"
                ],
                "align-left": [
                    "text alignment",
                    "left"
                ],
                "align-right": [
                    "text alignment",
                    "right"
                ],
                "anchor": [],
                "archive": [
                    "index",
                    "box"
                ],
                "at-sign": [
                    "mention",
                    "at",
                    "email",
                    "message"
                ],
                "award": [
                    "achievement",
                    "badge"
                ],
                "aperture": [
                    "camera",
                    "photo"
                ],
                "bar-chart": [
                    "statistics",
                    "diagram",
                    "graph"
                ],
                "bar-chart-2": [
                    "statistics",
                    "diagram",
                    "graph"
                ],
                "battery": [
                    "power",
                    "electricity"
                ],
                "battery-charging": [
                    "power",
                    "electricity"
                ],
                "bell": [
                    "alarm",
                    "notification",
                    "sound"
                ],
                "bell-off": [
                    "alarm",
                    "notification",
                    "silent"
                ],
                "bluetooth": [
                    "wireless"
                ],
                "book-open": [
                    "read",
                    "library"
                ],
                "book": [
                    "read",
                    "dictionary",
                    "booklet",
                    "magazine",
                    "library"
                ],
                "bookmark": [
                    "read",
                    "clip",
                    "marker",
                    "tag"
                ],
                "box": [
                    "cube"
                ],
                "briefcase": [
                    "work",
                    "bag",
                    "baggage",
                    "folder"
                ],
                "calendar": [
                    "date"
                ],
                "camera": [
                    "photo"
                ],
                "cast": [
                    "chromecast",
                    "airplay"
                ],
                "circle": [
                    "off",
                    "zero",
                    "record"
                ],
                "clipboard": [
                    "copy"
                ],
                "clock": [
                    "time",
                    "watch",
                    "alarm"
                ],
                "cloud-drizzle": [
                    "weather",
                    "shower"
                ],
                "cloud-lightning": [
                    "weather",
                    "bolt"
                ],
                "cloud-rain": [
                    "weather"
                ],
                "cloud-snow": [
                    "weather",
                    "blizzard"
                ],
                "cloud": [
                    "weather"
                ],
                "codepen": [
                    "logo"
                ],
                "codesandbox": [
                    "logo"
                ],
                "code": [
                    "source",
                    "programming"
                ],
                "coffee": [
                    "drink",
                    "cup",
                    "mug",
                    "tea",
                    "cafe",
                    "hot",
                    "beverage"
                ],
                "columns": [
                    "layout"
                ],
                "command": [
                    "keyboard",
                    "cmd",
                    "terminal",
                    "prompt"
                ],
                "compass": [
                    "navigation",
                    "safari",
                    "travel",
                    "direction"
                ],
                "copy": [
                    "clone",
                    "duplicate"
                ],
                "corner-down-left": [
                    "arrow",
                    "return"
                ],
                "corner-down-right": [
                    "arrow"
                ],
                "corner-left-down": [
                    "arrow"
                ],
                "corner-left-up": [
                    "arrow"
                ],
                "corner-right-down": [
                    "arrow"
                ],
                "corner-right-up": [
                    "arrow"
                ],
                "corner-up-left": [
                    "arrow"
                ],
                "corner-up-right": [
                    "arrow"
                ],
                "cpu": [
                    "processor",
                    "technology"
                ],
                "credit-card": [
                    "purchase",
                    "payment",
                    "cc"
                ],
                "crop": [
                    "photo",
                    "image"
                ],
                "crosshair": [
                    "aim",
                    "target"
                ],
                "database": [
                    "storage",
                    "memory"
                ],
                "delete": [
                    "remove"
                ],
                "disc": [
                    "album",
                    "cd",
                    "dvd",
                    "music"
                ],
                "dollar-sign": [
                    "currency",
                    "money",
                    "payment"
                ],
                "droplet": [
                    "water"
                ],
                "edit": [
                    "pencil",
                    "change"
                ],
                "edit-2": [
                    "pencil",
                    "change"
                ],
                "edit-3": [
                    "pencil",
                    "change"
                ],
                "eye": [
                    "view",
                    "watch"
                ],
                "eye-off": [
                    "view",
                    "watch",
                    "hide",
                    "hidden"
                ],
                "external-link": [
                    "outbound"
                ],
                "facebook": [
                    "logo",
                    "social"
                ],
                "fast-forward": [
                    "music"
                ],
                "figma": [
                    "logo",
                    "design",
                    "tool"
                ],
                "file-minus": [
                    "delete",
                    "remove",
                    "erase"
                ],
                "file-plus": [
                    "add",
                    "create",
                    "new"
                ],
                "file-text": [
                    "data",
                    "txt",
                    "pdf"
                ],
                "film": [
                    "movie",
                    "video"
                ],
                "filter": [
                    "funnel",
                    "hopper"
                ],
                "flag": [
                    "report"
                ],
                "folder-minus": [
                    "directory"
                ],
                "folder-plus": [
                    "directory"
                ],
                "folder": [
                    "directory"
                ],
                "framer": [
                    "logo",
                    "design",
                    "tool"
                ],
                "frown": [
                    "emoji",
                    "face",
                    "bad",
                    "sad",
                    "emotion"
                ],
                "gift": [
                    "present",
                    "box",
                    "birthday",
                    "party"
                ],
                "git-branch": [
                    "code",
                    "version control"
                ],
                "git-commit": [
                    "code",
                    "version control"
                ],
                "git-merge": [
                    "code",
                    "version control"
                ],
                "git-pull-request": [
                    "code",
                    "version control"
                ],
                "github": [
                    "logo",
                    "version control"
                ],
                "gitlab": [
                    "logo",
                    "version control"
                ],
                "globe": [
                    "world",
                    "browser",
                    "language",
                    "translate"
                ],
                "hard-drive": [
                    "computer",
                    "server",
                    "memory",
                    "data"
                ],
                "hash": [
                    "hashtag",
                    "number",
                    "pound"
                ],
                "headphones": [
                    "music",
                    "audio",
                    "sound"
                ],
                "heart": [
                    "like",
                    "love",
                    "emotion"
                ],
                "help-circle": [
                    "question mark"
                ],
                "hexagon": [
                    "shape",
                    "node.js",
                    "logo"
                ],
                "home": [
                    "house",
                    "living"
                ],
                "image": [
                    "picture"
                ],
                "inbox": [
                    "email"
                ],
                "instagram": [
                    "logo",
                    "camera"
                ],
                "key": [
                    "password",
                    "login",
                    "authentication",
                    "secure"
                ],
                "layers": [
                    "stack"
                ],
                "layout": [
                    "window",
                    "webpage"
                ],
                "life-bouy": [
                    "help",
                    "life ring",
                    "support"
                ],
                "link": [
                    "chain",
                    "url"
                ],
                "link-2": [
                    "chain",
                    "url"
                ],
                "linkedin": [
                    "logo",
                    "social media"
                ],
                "list": [
                    "options"
                ],
                "lock": [
                    "security",
                    "password",
                    "secure"
                ],
                "log-in": [
                    "sign in",
                    "arrow",
                    "enter"
                ],
                "log-out": [
                    "sign out",
                    "arrow",
                    "exit"
                ],
                "mail": [
                    "email",
                    "message"
                ],
                "map-pin": [
                    "location",
                    "navigation",
                    "travel",
                    "marker"
                ],
                "map": [
                    "location",
                    "navigation",
                    "travel"
                ],
                "maximize": [
                    "fullscreen"
                ],
                "maximize-2": [
                    "fullscreen",
                    "arrows",
                    "expand"
                ],
                "meh": [
                    "emoji",
                    "face",
                    "neutral",
                    "emotion"
                ],
                "menu": [
                    "bars",
                    "navigation",
                    "hamburger"
                ],
                "message-circle": [
                    "comment",
                    "chat"
                ],
                "message-square": [
                    "comment",
                    "chat"
                ],
                "mic-off": [
                    "record",
                    "sound",
                    "mute"
                ],
                "mic": [
                    "record",
                    "sound",
                    "listen"
                ],
                "minimize": [
                    "exit fullscreen",
                    "close"
                ],
                "minimize-2": [
                    "exit fullscreen",
                    "arrows",
                    "close"
                ],
                "minus": [
                    "subtract"
                ],
                "monitor": [
                    "tv",
                    "screen",
                    "display"
                ],
                "moon": [
                    "dark",
                    "night"
                ],
                "more-horizontal": [
                    "ellipsis"
                ],
                "more-vertical": [
                    "ellipsis"
                ],
                "mouse-pointer": [
                    "arrow",
                    "cursor"
                ],
                "move": [
                    "arrows"
                ],
                "music": [
                    "note"
                ],
                "navigation": [
                    "location",
                    "travel"
                ],
                "navigation-2": [
                    "location",
                    "travel"
                ],
                "octagon": [
                    "stop"
                ],
                "package": [
                    "box",
                    "container"
                ],
                "paperclip": [
                    "attachment"
                ],
                "pause": [
                    "music",
                    "stop"
                ],
                "pause-circle": [
                    "music",
                    "audio",
                    "stop"
                ],
                "pen-tool": [
                    "vector",
                    "drawing"
                ],
                "percent": [
                    "discount"
                ],
                "phone-call": [
                    "ring"
                ],
                "phone-forwarded": [
                    "call"
                ],
                "phone-incoming": [
                    "call"
                ],
                "phone-missed": [
                    "call"
                ],
                "phone-off": [
                    "call",
                    "mute"
                ],
                "phone-outgoing": [
                    "call"
                ],
                "phone": [
                    "call"
                ],
                "play": [
                    "music",
                    "start"
                ],
                "pie-chart": [
                    "statistics",
                    "diagram"
                ],
                "play-circle": [
                    "music",
                    "start"
                ],
                "plus": [
                    "add",
                    "new"
                ],
                "plus-circle": [
                    "add",
                    "new"
                ],
                "plus-square": [
                    "add",
                    "new"
                ],
                "pocket": [
                    "logo",
                    "save"
                ],
                "power": [
                    "on",
                    "off"
                ],
                "printer": [
                    "fax",
                    "office",
                    "device"
                ],
                "radio": [
                    "signal"
                ],
                "refresh-cw": [
                    "synchronise",
                    "arrows"
                ],
                "refresh-ccw": [
                    "arrows"
                ],
                "repeat": [
                    "loop",
                    "arrows"
                ],
                "rewind": [
                    "music"
                ],
                "rotate-ccw": [
                    "arrow"
                ],
                "rotate-cw": [
                    "arrow"
                ],
                "rss": [
                    "feed",
                    "subscribe"
                ],
                "save": [
                    "floppy disk"
                ],
                "scissors": [
                    "cut"
                ],
                "search": [
                    "find",
                    "magnifier",
                    "magnifying glass"
                ],
                "send": [
                    "message",
                    "mail",
                    "email",
                    "paper airplane",
                    "paper aeroplane"
                ],
                "settings": [
                    "cog",
                    "edit",
                    "gear",
                    "preferences"
                ],
                "share-2": [
                    "network",
                    "connections"
                ],
                "shield": [
                    "security",
                    "secure"
                ],
                "shield-off": [
                    "security",
                    "insecure"
                ],
                "shopping-bag": [
                    "ecommerce",
                    "cart",
                    "purchase",
                    "store"
                ],
                "shopping-cart": [
                    "ecommerce",
                    "cart",
                    "purchase",
                    "store"
                ],
                "shuffle": [
                    "music"
                ],
                "skip-back": [
                    "music"
                ],
                "skip-forward": [
                    "music"
                ],
                "slack": [
                    "logo"
                ],
                "slash": [
                    "ban",
                    "no"
                ],
                "sliders": [
                    "settings",
                    "controls"
                ],
                "smartphone": [
                    "cellphone",
                    "device"
                ],
                "smile": [
                    "emoji",
                    "face",
                    "happy",
                    "good",
                    "emotion"
                ],
                "speaker": [
                    "audio",
                    "music"
                ],
                "star": [
                    "bookmark",
                    "favorite",
                    "like"
                ],
                "stop-circle": [
                    "media",
                    "music"
                ],
                "sun": [
                    "brightness",
                    "weather",
                    "light"
                ],
                "sunrise": [
                    "weather",
                    "time",
                    "morning",
                    "day"
                ],
                "sunset": [
                    "weather",
                    "time",
                    "evening",
                    "night"
                ],
                "tablet": [
                    "device"
                ],
                "tag": [
                    "label"
                ],
                "target": [
                    "logo",
                    "bullseye"
                ],
                "terminal": [
                    "code",
                    "command line",
                    "prompt"
                ],
                "thermometer": [
                    "temperature",
                    "celsius",
                    "fahrenheit",
                    "weather"
                ],
                "thumbs-down": [
                    "dislike",
                    "bad",
                    "emotion"
                ],
                "thumbs-up": [
                    "like",
                    "good",
                    "emotion"
                ],
                "toggle-left": [
                    "on",
                    "off",
                    "switch"
                ],
                "toggle-right": [
                    "on",
                    "off",
                    "switch"
                ],
                "tool": [
                    "settings",
                    "spanner"
                ],
                "trash": [
                    "garbage",
                    "delete",
                    "remove",
                    "bin"
                ],
                "trash-2": [
                    "garbage",
                    "delete",
                    "remove",
                    "bin"
                ],
                "triangle": [
                    "delta"
                ],
                "truck": [
                    "delivery",
                    "van",
                    "shipping",
                    "transport",
                    "lorry"
                ],
                "tv": [
                    "television",
                    "stream"
                ],
                "twitch": [
                    "logo"
                ],
                "twitter": [
                    "logo",
                    "social"
                ],
                "type": [
                    "text"
                ],
                "umbrella": [
                    "rain",
                    "weather"
                ],
                "unlock": [
                    "security"
                ],
                "user-check": [
                    "followed",
                    "subscribed"
                ],
                "user-minus": [
                    "delete",
                    "remove",
                    "unfollow",
                    "unsubscribe"
                ],
                "user-plus": [
                    "new",
                    "add",
                    "create",
                    "follow",
                    "subscribe"
                ],
                "user-x": [
                    "delete",
                    "remove",
                    "unfollow",
                    "unsubscribe",
                    "unavailable"
                ],
                "user": [
                    "person",
                    "account"
                ],
                "users": [
                    "group"
                ],
                "video-off": [
                    "camera",
                    "movie",
                    "film"
                ],
                "video": [
                    "camera",
                    "movie",
                    "film"
                ],
                "voicemail": [
                    "phone"
                ],
                "volume": [
                    "music",
                    "sound",
                    "mute"
                ],
                "volume-1": [
                    "music",
                    "sound"
                ],
                "volume-2": [
                    "music",
                    "sound"
                ],
                "volume-x": [
                    "music",
                    "sound",
                    "mute"
                ],
                "watch": [
                    "clock",
                    "time"
                ],
                "wifi-off": [
                    "disabled"
                ],
                "wifi": [
                    "connection",
                    "signal",
                    "wireless"
                ],
                "wind": [
                    "weather",
                    "air"
                ],
                "x-circle": [
                    "cancel",
                    "close",
                    "delete",
                    "remove",
                    "times",
                    "clear"
                ],
                "x-octagon": [
                    "delete",
                    "stop",
                    "alert",
                    "warning",
                    "times",
                    "clear"
                ],
                "x-square": [
                    "cancel",
                    "close",
                    "delete",
                    "remove",
                    "times",
                    "clear"
                ],
                "x": [
                    "cancel",
                    "close",
                    "delete",
                    "remove",
                    "times",
                    "clear"
                ],
                "youtube": [
                    "logo",
                    "video",
                    "play"
                ],
                "zap-off": [
                    "flash",
                    "camera",
                    "lightning"
                ],
                "zap": [
                    "flash",
                    "camera",
                    "lightning"
                ],
                "zoom-in": [
                    "magnifying glass"
                ],
                "zoom-out": [
                    "magnifying glass"
                ]
            };
        /***/ },
        /***/ "./src/to-svg.js": /*!***********************!*\
  !*** ./src/to-svg.js ***!
  \***********************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var _icons = __webpack_require__(/*! ./icons */ "./src/icons.js");
            var _icons2 = _interopRequireDefault(_icons);
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }
            /**
 * Create an SVG string.
 * @deprecated
 * @param {string} name
 * @param {Object} attrs
 * @returns {string}
 */ function toSvg(name) {
                var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                console.warn('feather.toSvg() is deprecated. Please use feather.icons[name].toSvg() instead.');
                if (!name) throw new Error('The required `key` (icon name) parameter is missing.');
                if (!_icons2.default[name]) throw new Error('No icon matching \'' + name + '\'. See the complete list of icons at https://feathericons.com');
                return _icons2.default[name].toSvg(attrs);
            }
            exports.default = toSvg;
        /***/ },
        /***/ 0: /*!**************************************************!*\
  !*** multi core-js/es/array/from ./src/index.js ***!
  \**************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            __webpack_require__(/*! core-js/es/array/from */ "./node_modules/core-js/es/array/from.js");
            module1.exports = __webpack_require__(/*! /home/travis/build/feathericons/feather/src/index.js */ "./src/index.js");
        /***/ }
    });
});

},{}],"eRzTM":[function(require,module,exports,__globalThis) {
var global = arguments[3];
!function(e, t) {
    module.exports = t();
}(this, function() {
    "use strict";
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, t = "Expected a function", n = NaN, o = "[object Symbol]", i = /^\s+|\s+$/g, a = /^[-+]0x[0-9a-f]+$/i, r = /^0b[01]+$/i, c = /^0o[0-7]+$/i, s = parseInt, u = "object" == typeof e && e && e.Object === Object && e, d = "object" == typeof self && self && self.Object === Object && self, l = u || d || Function("return this")(), f = Object.prototype.toString, m = Math.max, p = Math.min, b = function() {
        return l.Date.now();
    };
    function v(e, n, o) {
        var i, a, r, c, s, u, d = 0, l = !1, f = !1, v = !0;
        if ("function" != typeof e) throw new TypeError(t);
        function y(t) {
            var n = i, o = a;
            return i = a = void 0, d = t, c = e.apply(o, n);
        }
        function h(e) {
            var t = e - u;
            return void 0 === u || t >= n || t < 0 || f && e - d >= r;
        }
        function k() {
            var e = b();
            if (h(e)) return x(e);
            s = setTimeout(k, function(e) {
                var t = n - (e - u);
                return f ? p(t, r - (e - d)) : t;
            }(e));
        }
        function x(e) {
            return s = void 0, v && i ? y(e) : (i = a = void 0, c);
        }
        function O() {
            var e = b(), t = h(e);
            if (i = arguments, a = this, u = e, t) {
                if (void 0 === s) return function(e) {
                    return d = e, s = setTimeout(k, n), l ? y(e) : c;
                }(u);
                if (f) return s = setTimeout(k, n), y(u);
            }
            return void 0 === s && (s = setTimeout(k, n)), c;
        }
        return n = w(n) || 0, g(o) && (l = !!o.leading, r = (f = "maxWait" in o) ? m(w(o.maxWait) || 0, n) : r, v = "trailing" in o ? !!o.trailing : v), O.cancel = function() {
            void 0 !== s && clearTimeout(s), d = 0, i = u = a = s = void 0;
        }, O.flush = function() {
            return void 0 === s ? c : x(b());
        }, O;
    }
    function g(e) {
        var t = typeof e;
        return !!e && ("object" == t || "function" == t);
    }
    function w(e) {
        if ("number" == typeof e) return e;
        if (function(e) {
            return "symbol" == typeof e || function(e) {
                return !!e && "object" == typeof e;
            }(e) && f.call(e) == o;
        }(e)) return n;
        if (g(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = g(t) ? t + "" : t;
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(i, "");
        var u = r.test(e);
        return u || c.test(e) ? s(e.slice(2), u ? 2 : 8) : a.test(e) ? n : +e;
    }
    var y = function(e, n, o) {
        var i = !0, a = !0;
        if ("function" != typeof e) throw new TypeError(t);
        return g(o) && (i = "leading" in o ? !!o.leading : i, a = "trailing" in o ? !!o.trailing : a), v(e, n, {
            leading: i,
            maxWait: n,
            trailing: a
        });
    }, h = "Expected a function", k = NaN, x = "[object Symbol]", O = /^\s+|\s+$/g, j = /^[-+]0x[0-9a-f]+$/i, E = /^0b[01]+$/i, N = /^0o[0-7]+$/i, z = parseInt, C = "object" == typeof e && e && e.Object === Object && e, A = "object" == typeof self && self && self.Object === Object && self, q = C || A || Function("return this")(), L = Object.prototype.toString, T = Math.max, M = Math.min, S = function() {
        return q.Date.now();
    };
    function D(e) {
        var t = typeof e;
        return !!e && ("object" == t || "function" == t);
    }
    function H(e) {
        if ("number" == typeof e) return e;
        if (function(e) {
            return "symbol" == typeof e || function(e) {
                return !!e && "object" == typeof e;
            }(e) && L.call(e) == x;
        }(e)) return k;
        if (D(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = D(t) ? t + "" : t;
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(O, "");
        var n = E.test(e);
        return n || N.test(e) ? z(e.slice(2), n ? 2 : 8) : j.test(e) ? k : +e;
    }
    var $ = function(e, t, n) {
        var o, i, a, r, c, s, u = 0, d = !1, l = !1, f = !0;
        if ("function" != typeof e) throw new TypeError(h);
        function m(t) {
            var n = o, a = i;
            return o = i = void 0, u = t, r = e.apply(a, n);
        }
        function p(e) {
            var n = e - s;
            return void 0 === s || n >= t || n < 0 || l && e - u >= a;
        }
        function b() {
            var e = S();
            if (p(e)) return v(e);
            c = setTimeout(b, function(e) {
                var n = t - (e - s);
                return l ? M(n, a - (e - u)) : n;
            }(e));
        }
        function v(e) {
            return c = void 0, f && o ? m(e) : (o = i = void 0, r);
        }
        function g() {
            var e = S(), n = p(e);
            if (o = arguments, i = this, s = e, n) {
                if (void 0 === c) return function(e) {
                    return u = e, c = setTimeout(b, t), d ? m(e) : r;
                }(s);
                if (l) return c = setTimeout(b, t), m(s);
            }
            return void 0 === c && (c = setTimeout(b, t)), r;
        }
        return t = H(t) || 0, D(n) && (d = !!n.leading, a = (l = "maxWait" in n) ? T(H(n.maxWait) || 0, t) : a, f = "trailing" in n ? !!n.trailing : f), g.cancel = function() {
            void 0 !== c && clearTimeout(c), u = 0, o = s = i = c = void 0;
        }, g.flush = function() {
            return void 0 === c ? r : v(S());
        }, g;
    }, W = function() {};
    function P(e) {
        e && e.forEach(function(e) {
            var t = Array.prototype.slice.call(e.addedNodes), n = Array.prototype.slice.call(e.removedNodes);
            if (function e(t) {
                var n = void 0, o = void 0;
                for(n = 0; n < t.length; n += 1){
                    if ((o = t[n]).dataset && o.dataset.aos) return !0;
                    if (o.children && e(o.children)) return !0;
                }
                return !1;
            }(t.concat(n))) return W();
        });
    }
    function Y() {
        return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
    }
    var _ = {
        isSupported: function() {
            return !!Y();
        },
        ready: function(e, t) {
            var n = window.document, o = new (Y())(P);
            W = t, o.observe(n.documentElement, {
                childList: !0,
                subtree: !0,
                removedNodes: !0
            });
        }
    }, B = function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }, F = function() {
        function e(e, t) {
            for(var n = 0; n < t.length; n++){
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
            }
        }
        return function(t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t;
        };
    }(), I = Object.assign || function(e) {
        for(var t = 1; t < arguments.length; t++){
            var n = arguments[t];
            for(var o in n)Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
        }
        return e;
    }, K = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i, G = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i, J = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i, Q = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;
    function R() {
        return navigator.userAgent || navigator.vendor || window.opera || "";
    }
    var U = new (function() {
        function e() {
            B(this, e);
        }
        return F(e, [
            {
                key: "phone",
                value: function() {
                    var e = R();
                    return !(!K.test(e) && !G.test(e.substr(0, 4)));
                }
            },
            {
                key: "mobile",
                value: function() {
                    var e = R();
                    return !(!J.test(e) && !Q.test(e.substr(0, 4)));
                }
            },
            {
                key: "tablet",
                value: function() {
                    return this.mobile() && !this.phone();
                }
            },
            {
                key: "ie11",
                value: function() {
                    return "-ms-scroll-limit" in document.documentElement.style && "-ms-ime-align" in document.documentElement.style;
                }
            }
        ]), e;
    }()), V = function(e, t) {
        var n = void 0;
        return U.ie11() ? (n = document.createEvent("CustomEvent")).initCustomEvent(e, !0, !0, {
            detail: t
        }) : n = new CustomEvent(e, {
            detail: t
        }), document.dispatchEvent(n);
    }, X = function(e) {
        return e.forEach(function(e, t) {
            return function(e, t) {
                var n = e.options, o = e.position, i = e.node, a = (e.data, function() {
                    e.animated && (function(e, t) {
                        t && t.forEach(function(t) {
                            return e.classList.remove(t);
                        });
                    }(i, n.animatedClassNames), V("aos:out", i), e.options.id && V("aos:in:" + e.options.id, i), e.animated = !1);
                });
                n.mirror && t >= o.out && !n.once ? a() : t >= o.in ? e.animated || (function(e, t) {
                    t && t.forEach(function(t) {
                        return e.classList.add(t);
                    });
                }(i, n.animatedClassNames), V("aos:in", i), e.options.id && V("aos:in:" + e.options.id, i), e.animated = !0) : e.animated && !n.once && a();
            }(e, window.pageYOffset);
        });
    }, Z = function(e) {
        for(var t = 0, n = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);)t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0), n += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0), e = e.offsetParent;
        return {
            top: n,
            left: t
        };
    }, ee = function(e, t, n) {
        var o = e.getAttribute("data-aos-" + t);
        if (void 0 !== o) {
            if ("true" === o) return !0;
            if ("false" === o) return !1;
        }
        return o || n;
    }, te = function(e, t) {
        return e.forEach(function(e, n) {
            var o = ee(e.node, "mirror", t.mirror), i = ee(e.node, "once", t.once), a = ee(e.node, "id"), r = t.useClassNames && e.node.getAttribute("data-aos"), c = [
                t.animatedClassName
            ].concat(r ? r.split(" ") : []).filter(function(e) {
                return "string" == typeof e;
            });
            t.initClassName && e.node.classList.add(t.initClassName), e.position = {
                in: function(e, t, n) {
                    var o = window.innerHeight, i = ee(e, "anchor"), a = ee(e, "anchor-placement"), r = Number(ee(e, "offset", a ? 0 : t)), c = a || n, s = e;
                    i && document.querySelectorAll(i) && (s = document.querySelectorAll(i)[0]);
                    var u = Z(s).top - o;
                    switch(c){
                        case "top-bottom":
                            break;
                        case "center-bottom":
                            u += s.offsetHeight / 2;
                            break;
                        case "bottom-bottom":
                            u += s.offsetHeight;
                            break;
                        case "top-center":
                            u += o / 2;
                            break;
                        case "center-center":
                            u += o / 2 + s.offsetHeight / 2;
                            break;
                        case "bottom-center":
                            u += o / 2 + s.offsetHeight;
                            break;
                        case "top-top":
                            u += o;
                            break;
                        case "bottom-top":
                            u += o + s.offsetHeight;
                            break;
                        case "center-top":
                            u += o + s.offsetHeight / 2;
                    }
                    return u + r;
                }(e.node, t.offset, t.anchorPlacement),
                out: o && function(e, t) {
                    window.innerHeight;
                    var n = ee(e, "anchor"), o = ee(e, "offset", t), i = e;
                    return n && document.querySelectorAll(n) && (i = document.querySelectorAll(n)[0]), Z(i).top + i.offsetHeight - o;
                }(e.node, t.offset)
            }, e.options = {
                once: i,
                mirror: o,
                animatedClassNames: c,
                id: a
            };
        }), e;
    }, ne = function() {
        var e = document.querySelectorAll("[data-aos]");
        return Array.prototype.map.call(e, function(e) {
            return {
                node: e
            };
        });
    }, oe = [], ie = !1, ae = {
        offset: 120,
        delay: 0,
        easing: "ease",
        duration: 400,
        disable: !1,
        once: !1,
        mirror: !1,
        anchorPlacement: "top-bottom",
        startEvent: "DOMContentLoaded",
        animatedClassName: "aos-animate",
        initClassName: "aos-init",
        useClassNames: !1,
        disableMutationObserver: !1,
        throttleDelay: 99,
        debounceDelay: 50
    }, re = function() {
        return document.all && !window.atob;
    }, ce = function() {
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (ie = !0), ie && (oe = te(oe, ae), X(oe), window.addEventListener("scroll", y(function() {
            X(oe, ae.once);
        }, ae.throttleDelay)));
    }, se = function() {
        if (oe = ne(), de(ae.disable) || re()) return ue();
        ce();
    }, ue = function() {
        oe.forEach(function(e, t) {
            e.node.removeAttribute("data-aos"), e.node.removeAttribute("data-aos-easing"), e.node.removeAttribute("data-aos-duration"), e.node.removeAttribute("data-aos-delay"), ae.initClassName && e.node.classList.remove(ae.initClassName), ae.animatedClassName && e.node.classList.remove(ae.animatedClassName);
        });
    }, de = function(e) {
        return !0 === e || "mobile" === e && U.mobile() || "phone" === e && U.phone() || "tablet" === e && U.tablet() || "function" == typeof e && !0 === e();
    };
    return {
        init: function(e) {
            return ae = I(ae, e), oe = ne(), ae.disableMutationObserver || _.isSupported() || (console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '), ae.disableMutationObserver = !0), ae.disableMutationObserver || _.ready("[data-aos]", se), de(ae.disable) || re() ? ue() : (document.querySelector("body").setAttribute("data-aos-easing", ae.easing), document.querySelector("body").setAttribute("data-aos-duration", ae.duration), document.querySelector("body").setAttribute("data-aos-delay", ae.delay), -1 === [
                "DOMContentLoaded",
                "load"
            ].indexOf(ae.startEvent) ? document.addEventListener(ae.startEvent, function() {
                ce(!0);
            }) : window.addEventListener("load", function() {
                ce(!0);
            }), "DOMContentLoaded" === ae.startEvent && [
                "complete",
                "interactive"
            ].indexOf(document.readyState) > -1 && ce(!0), window.addEventListener("resize", $(ce, ae.debounceDelay, !0)), window.addEventListener("orientationchange", $(ce, ae.debounceDelay, !0)), oe);
        },
        refresh: ce,
        refreshHard: se
    };
});

},{}],"jXlXi":[function(require,module,exports,__globalThis) {
const jarallax = require("904ecfade25c27a").default;
const jarallaxVideo = require("ea3cdcddbe17001c").default;
const jarallaxElement = require("dfff881d419ea980").default;
module.exports = {
    jarallax,
    jarallaxElement () {
        return jarallaxElement(jarallax);
    },
    jarallaxVideo () {
        return jarallaxVideo(jarallax);
    }
};

},{"904ecfade25c27a":"gl17h","ea3cdcddbe17001c":"gf7IM","dfff881d419ea980":"1xp2L"}],"gl17h":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _liteReady = require("lite-ready");
var _liteReadyDefault = parcelHelpers.interopDefault(_liteReady);
var _global = require("global");
const { navigator } = (0, _global.window);
const isIE = -1 < navigator.userAgent.indexOf('MSIE ') || -1 < navigator.userAgent.indexOf('Trident/') || -1 < navigator.userAgent.indexOf('Edge/');
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
const supportTransform = (()=>{
    const prefixes = 'transform WebkitTransform MozTransform'.split(' ');
    const div = document.createElement('div');
    for(let i = 0; i < prefixes.length; i += 1){
        if (div && div.style[prefixes[i]] !== undefined) return prefixes[i];
    }
    return false;
})();
let $deviceHelper;
/**
 * The most popular mobile browsers changes height after page scroll and this generates image jumping.
 * We can fix it using this workaround with vh units.
 */ function getDeviceHeight() {
    if (!$deviceHelper && document.body) {
        $deviceHelper = document.createElement('div');
        $deviceHelper.style.cssText = 'position: fixed; top: -9999px; left: 0; height: 100vh; width: 0;';
        document.body.appendChild($deviceHelper);
    }
    return ($deviceHelper ? $deviceHelper.clientHeight : 0) || (0, _global.window).innerHeight || document.documentElement.clientHeight;
}
// Window height data
let wndH;
function updateWndVars() {
    if (isMobile) wndH = getDeviceHeight();
    else wndH = (0, _global.window).innerHeight || document.documentElement.clientHeight;
}
updateWndVars();
(0, _global.window).addEventListener('resize', updateWndVars);
(0, _global.window).addEventListener('orientationchange', updateWndVars);
(0, _global.window).addEventListener('load', updateWndVars);
(0, _liteReadyDefault.default)(()=>{
    updateWndVars({
        type: 'dom-loaded'
    });
});
// list with all jarallax instances
// need to render all in one scroll/resize event
const jarallaxList = [];
// get all parents of the element.
function getParents(elem) {
    const parents = [];
    while(null !== elem.parentElement){
        elem = elem.parentElement;
        if (1 === elem.nodeType) parents.push(elem);
    }
    return parents;
}
function updateParallax() {
    if (!jarallaxList.length) return;
    jarallaxList.forEach((data, k)=>{
        const { instance, oldData } = data;
        const clientRect = instance.$item.getBoundingClientRect();
        const newData = {
            width: clientRect.width,
            height: clientRect.height,
            top: clientRect.top,
            bottom: clientRect.bottom,
            wndW: (0, _global.window).innerWidth,
            wndH
        };
        const isResized = !oldData || oldData.wndW !== newData.wndW || oldData.wndH !== newData.wndH || oldData.width !== newData.width || oldData.height !== newData.height;
        const isScrolled = isResized || !oldData || oldData.top !== newData.top || oldData.bottom !== newData.bottom;
        jarallaxList[k].oldData = newData;
        if (isResized) instance.onResize();
        if (isScrolled) instance.onScroll();
    });
    (0, _global.window).requestAnimationFrame(updateParallax);
}
let instanceID = 0;
// Jarallax class
class Jarallax {
    constructor(item, userOptions){
        const self = this;
        self.instanceID = instanceID;
        instanceID += 1;
        self.$item = item;
        self.defaults = {
            type: 'scroll',
            speed: 0.5,
            imgSrc: null,
            imgElement: '.jarallax-img',
            imgSize: 'cover',
            imgPosition: '50% 50%',
            imgRepeat: 'no-repeat',
            keepImg: false,
            elementInViewport: null,
            zIndex: -100,
            disableParallax: false,
            disableVideo: false,
            // video
            videoSrc: null,
            videoStartTime: 0,
            videoEndTime: 0,
            videoVolume: 0,
            videoLoop: true,
            videoPlayOnlyVisible: true,
            videoLazyLoading: true,
            // events
            onScroll: null,
            onInit: null,
            onDestroy: null,
            onCoverImage: null
        };
        // prepare data-options
        const dataOptions = self.$item.dataset || {};
        const pureDataOptions = {};
        Object.keys(dataOptions).forEach((key)=>{
            const loweCaseOption = key.substr(0, 1).toLowerCase() + key.substr(1);
            if (loweCaseOption && 'undefined' !== typeof self.defaults[loweCaseOption]) pureDataOptions[loweCaseOption] = dataOptions[key];
        });
        self.options = self.extend({}, self.defaults, pureDataOptions, userOptions);
        self.pureOptions = self.extend({}, self.options);
        // prepare 'true' and 'false' strings to boolean
        Object.keys(self.options).forEach((key)=>{
            if ('true' === self.options[key]) self.options[key] = true;
            else if ('false' === self.options[key]) self.options[key] = false;
        });
        // fix speed option [-1.0, 2.0]
        self.options.speed = Math.min(2, Math.max(-1, parseFloat(self.options.speed)));
        // prepare disableParallax callback
        if ('string' === typeof self.options.disableParallax) self.options.disableParallax = new RegExp(self.options.disableParallax);
        if (self.options.disableParallax instanceof RegExp) {
            const disableParallaxRegexp = self.options.disableParallax;
            self.options.disableParallax = ()=>disableParallaxRegexp.test(navigator.userAgent);
        }
        if ('function' !== typeof self.options.disableParallax) self.options.disableParallax = ()=>false;
        // prepare disableVideo callback
        if ('string' === typeof self.options.disableVideo) self.options.disableVideo = new RegExp(self.options.disableVideo);
        if (self.options.disableVideo instanceof RegExp) {
            const disableVideoRegexp = self.options.disableVideo;
            self.options.disableVideo = ()=>disableVideoRegexp.test(navigator.userAgent);
        }
        if ('function' !== typeof self.options.disableVideo) self.options.disableVideo = ()=>false;
        // custom element to check if parallax in viewport
        let elementInVP = self.options.elementInViewport;
        // get first item from array
        if (elementInVP && 'object' === typeof elementInVP && 'undefined' !== typeof elementInVP.length) [elementInVP] = elementInVP;
        // check if dom element
        if (!(elementInVP instanceof Element)) elementInVP = null;
        self.options.elementInViewport = elementInVP;
        self.image = {
            src: self.options.imgSrc || null,
            $container: null,
            useImgTag: false,
            // position fixed is needed for the most of browsers because absolute position have glitches
            // on MacOS with smooth scroll there is a huge lags with absolute position - https://github.com/nk-o/jarallax/issues/75
            // on mobile devices better scrolled with absolute position
            position: /iPad|iPhone|iPod|Android/.test(navigator.userAgent) ? 'absolute' : 'fixed'
        };
        if (self.initImg() && self.canInitParallax()) self.init();
    }
    // add styles to element
    // eslint-disable-next-line class-methods-use-this
    css(el, styles) {
        if ('string' === typeof styles) return (0, _global.window).getComputedStyle(el).getPropertyValue(styles);
        // add transform property with vendor prefix
        if (styles.transform && supportTransform) styles[supportTransform] = styles.transform;
        Object.keys(styles).forEach((key)=>{
            el.style[key] = styles[key];
        });
        return el;
    }
    // Extend like jQuery.extend
    // eslint-disable-next-line class-methods-use-this
    extend(out, ...args) {
        out = out || {};
        Object.keys(args).forEach((i)=>{
            if (!args[i]) return;
            Object.keys(args[i]).forEach((key)=>{
                out[key] = args[i][key];
            });
        });
        return out;
    }
    // get window size and scroll position. Useful for extensions
    // eslint-disable-next-line class-methods-use-this
    getWindowData() {
        return {
            width: (0, _global.window).innerWidth || document.documentElement.clientWidth,
            height: wndH,
            y: document.documentElement.scrollTop
        };
    }
    // Jarallax functions
    initImg() {
        const self = this;
        // find image element
        let $imgElement = self.options.imgElement;
        if ($imgElement && 'string' === typeof $imgElement) $imgElement = self.$item.querySelector($imgElement);
        // check if dom element
        if (!($imgElement instanceof Element)) {
            if (self.options.imgSrc) {
                $imgElement = new Image();
                $imgElement.src = self.options.imgSrc;
            } else $imgElement = null;
        }
        if ($imgElement) {
            if (self.options.keepImg) self.image.$item = $imgElement.cloneNode(true);
            else {
                self.image.$item = $imgElement;
                self.image.$itemParent = $imgElement.parentNode;
            }
            self.image.useImgTag = true;
        }
        // true if there is img tag
        if (self.image.$item) return true;
        // get image src
        if (null === self.image.src) {
            self.image.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
            self.image.bgImage = self.css(self.$item, 'background-image');
        }
        return !(!self.image.bgImage || 'none' === self.image.bgImage);
    }
    canInitParallax() {
        return supportTransform && !this.options.disableParallax();
    }
    init() {
        const self = this;
        const containerStyles = {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            overflow: 'hidden'
        };
        let imageStyles = {
            pointerEvents: 'none',
            transformStyle: 'preserve-3d',
            backfaceVisibility: 'hidden',
            willChange: 'transform,opacity'
        };
        if (!self.options.keepImg) {
            // save default user styles
            const curStyle = self.$item.getAttribute('style');
            if (curStyle) self.$item.setAttribute('data-jarallax-original-styles', curStyle);
            if (self.image.useImgTag) {
                const curImgStyle = self.image.$item.getAttribute('style');
                if (curImgStyle) self.image.$item.setAttribute('data-jarallax-original-styles', curImgStyle);
            }
        }
        // set relative position and z-index to the parent
        if ('static' === self.css(self.$item, 'position')) self.css(self.$item, {
            position: 'relative'
        });
        if ('auto' === self.css(self.$item, 'z-index')) self.css(self.$item, {
            zIndex: 0
        });
        // container for parallax image
        self.image.$container = document.createElement('div');
        self.css(self.image.$container, containerStyles);
        self.css(self.image.$container, {
            'z-index': self.options.zIndex
        });
        // fix for IE https://github.com/nk-o/jarallax/issues/110
        if (isIE) self.css(self.image.$container, {
            opacity: 0.9999
        });
        self.image.$container.setAttribute('id', `jarallax-container-${self.instanceID}`);
        self.$item.appendChild(self.image.$container);
        // use img tag
        if (self.image.useImgTag) imageStyles = self.extend({
            'object-fit': self.options.imgSize,
            'object-position': self.options.imgPosition,
            // support for plugin https://github.com/bfred-it/object-fit-images
            'font-family': `object-fit: ${self.options.imgSize}; object-position: ${self.options.imgPosition};`,
            'max-width': 'none'
        }, containerStyles, imageStyles);
        else {
            self.image.$item = document.createElement('div');
            if (self.image.src) imageStyles = self.extend({
                'background-position': self.options.imgPosition,
                'background-size': self.options.imgSize,
                'background-repeat': self.options.imgRepeat,
                'background-image': self.image.bgImage || `url("${self.image.src}")`
            }, containerStyles, imageStyles);
        }
        if ('opacity' === self.options.type || 'scale' === self.options.type || 'scale-opacity' === self.options.type || 1 === self.options.speed) self.image.position = 'absolute';
        // 1. Check if one of parents have transform style (without this check, scroll transform will be inverted if used parallax with position fixed)
        //    discussion - https://github.com/nk-o/jarallax/issues/9
        // 2. Check if parents have overflow scroll
        if ('fixed' === self.image.position) {
            const $parents = getParents(self.$item).filter((el)=>{
                const styles = (0, _global.window).getComputedStyle(el);
                const parentTransform = styles['-webkit-transform'] || styles['-moz-transform'] || styles.transform;
                const overflowRegex = /(auto|scroll)/;
                return parentTransform && 'none' !== parentTransform || overflowRegex.test(styles.overflow + styles['overflow-y'] + styles['overflow-x']);
            });
            self.image.position = $parents.length ? 'absolute' : 'fixed';
        }
        // add position to parallax block
        imageStyles.position = self.image.position;
        // insert parallax image
        self.css(self.image.$item, imageStyles);
        self.image.$container.appendChild(self.image.$item);
        // set initial position and size
        self.onResize();
        self.onScroll(true);
        // call onInit event
        if (self.options.onInit) self.options.onInit.call(self);
        // remove default user background
        if ('none' !== self.css(self.$item, 'background-image')) self.css(self.$item, {
            'background-image': 'none'
        });
        self.addToParallaxList();
    }
    // add to parallax instances list
    addToParallaxList() {
        jarallaxList.push({
            instance: this
        });
        if (1 === jarallaxList.length) (0, _global.window).requestAnimationFrame(updateParallax);
    }
    // remove from parallax instances list
    removeFromParallaxList() {
        const self = this;
        jarallaxList.forEach((data, key)=>{
            if (data.instance.instanceID === self.instanceID) jarallaxList.splice(key, 1);
        });
    }
    destroy() {
        const self = this;
        self.removeFromParallaxList();
        // return styles on container as before jarallax init
        const originalStylesTag = self.$item.getAttribute('data-jarallax-original-styles');
        self.$item.removeAttribute('data-jarallax-original-styles');
        // null occurs if there is no style tag before jarallax init
        if (!originalStylesTag) self.$item.removeAttribute('style');
        else self.$item.setAttribute('style', originalStylesTag);
        if (self.image.useImgTag) {
            // return styles on img tag as before jarallax init
            const originalStylesImgTag = self.image.$item.getAttribute('data-jarallax-original-styles');
            self.image.$item.removeAttribute('data-jarallax-original-styles');
            // null occurs if there is no style tag before jarallax init
            if (!originalStylesImgTag) self.image.$item.removeAttribute('style');
            else self.image.$item.setAttribute('style', originalStylesTag);
            // move img tag to its default position
            if (self.image.$itemParent) self.image.$itemParent.appendChild(self.image.$item);
        }
        // remove additional dom elements
        if (self.$clipStyles) self.$clipStyles.parentNode.removeChild(self.$clipStyles);
        if (self.image.$container) self.image.$container.parentNode.removeChild(self.image.$container);
        // call onDestroy event
        if (self.options.onDestroy) self.options.onDestroy.call(self);
        // delete jarallax from item
        delete self.$item.jarallax;
    }
    // it will remove some image overlapping
    // overlapping occur due to an image position fixed inside absolute position element
    clipContainer() {
        // needed only when background in fixed position
        if ('fixed' !== this.image.position) return;
        const self = this;
        const rect = self.image.$container.getBoundingClientRect();
        const { width, height } = rect;
        if (!self.$clipStyles) {
            self.$clipStyles = document.createElement('style');
            self.$clipStyles.setAttribute('type', 'text/css');
            self.$clipStyles.setAttribute('id', `jarallax-clip-${self.instanceID}`);
            const head = document.head || document.getElementsByTagName('head')[0];
            head.appendChild(self.$clipStyles);
        }
        // clip is used for old browsers.
        // clip-path for modern browsers (also fixes Safari v14 bug https://github.com/nk-o/jarallax/issues/181 ).
        const styles = `#jarallax-container-${self.instanceID} {
            clip: rect(0 ${width}px ${height}px 0);
            clip: rect(0, ${width}px, ${height}px, 0);
            -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        }`;
        // add clip styles inline (this method need for support IE8 and less browsers)
        if (self.$clipStyles.styleSheet) self.$clipStyles.styleSheet.cssText = styles;
        else self.$clipStyles.innerHTML = styles;
    }
    coverImage() {
        const self = this;
        const rect = self.image.$container.getBoundingClientRect();
        const contH = rect.height;
        const { speed } = self.options;
        const isScroll = 'scroll' === self.options.type || 'scroll-opacity' === self.options.type;
        let scrollDist = 0;
        let resultH = contH;
        let resultMT = 0;
        // scroll parallax
        if (isScroll) {
            // scroll distance and height for image
            if (0 > speed) {
                scrollDist = speed * Math.max(contH, wndH);
                if (wndH < contH) scrollDist -= speed * (contH - wndH);
            } else scrollDist = speed * (contH + wndH);
            // size for scroll parallax
            if (1 < speed) resultH = Math.abs(scrollDist - wndH);
            else if (0 > speed) resultH = scrollDist / speed + Math.abs(scrollDist);
            else resultH += (wndH - contH) * (1 - speed);
            scrollDist /= 2;
        }
        // store scroll distance
        self.parallaxScrollDistance = scrollDist;
        // vertical center
        if (isScroll) resultMT = (wndH - resultH) / 2;
        else resultMT = (contH - resultH) / 2;
        // apply result to item
        self.css(self.image.$item, {
            height: `${resultH}px`,
            marginTop: `${resultMT}px`,
            left: 'fixed' === self.image.position ? `${rect.left}px` : '0',
            width: `${rect.width}px`
        });
        // call onCoverImage event
        if (self.options.onCoverImage) self.options.onCoverImage.call(self);
        // return some useful data. Used in the video cover function
        return {
            image: {
                height: resultH,
                marginTop: resultMT
            },
            container: rect
        };
    }
    isVisible() {
        return this.isElementInViewport || false;
    }
    onScroll(force) {
        const self = this;
        const rect = self.$item.getBoundingClientRect();
        const contT = rect.top;
        const contH = rect.height;
        const styles = {};
        // check if in viewport
        let viewportRect = rect;
        if (self.options.elementInViewport) viewportRect = self.options.elementInViewport.getBoundingClientRect();
        self.isElementInViewport = 0 <= viewportRect.bottom && 0 <= viewportRect.right && viewportRect.top <= wndH && viewportRect.left <= (0, _global.window).innerWidth;
        // stop calculations if item is not in viewport
        if (force ? false : !self.isElementInViewport) return;
        // calculate parallax helping variables
        const beforeTop = Math.max(0, contT);
        const beforeTopEnd = Math.max(0, contH + contT);
        const afterTop = Math.max(0, -contT);
        const beforeBottom = Math.max(0, contT + contH - wndH);
        const beforeBottomEnd = Math.max(0, contH - (contT + contH - wndH));
        const afterBottom = Math.max(0, -contT + wndH - contH);
        const fromViewportCenter = 1 - 2 * ((wndH - contT) / (wndH + contH));
        // calculate on how percent of section is visible
        let visiblePercent = 1;
        if (contH < wndH) visiblePercent = 1 - (afterTop || beforeBottom) / contH;
        else if (beforeTopEnd <= wndH) visiblePercent = beforeTopEnd / wndH;
        else if (beforeBottomEnd <= wndH) visiblePercent = beforeBottomEnd / wndH;
        // opacity
        if ('opacity' === self.options.type || 'scale-opacity' === self.options.type || 'scroll-opacity' === self.options.type) {
            styles.transform = 'translate3d(0,0,0)';
            styles.opacity = visiblePercent;
        }
        // scale
        if ('scale' === self.options.type || 'scale-opacity' === self.options.type) {
            let scale = 1;
            if (0 > self.options.speed) scale -= self.options.speed * visiblePercent;
            else scale += self.options.speed * (1 - visiblePercent);
            styles.transform = `scale(${scale}) translate3d(0,0,0)`;
        }
        // scroll
        if ('scroll' === self.options.type || 'scroll-opacity' === self.options.type) {
            let positionY = self.parallaxScrollDistance * fromViewportCenter;
            // fix if parallax block in absolute position
            if ('absolute' === self.image.position) positionY -= contT;
            styles.transform = `translate3d(0,${positionY}px,0)`;
        }
        self.css(self.image.$item, styles);
        // call onScroll event
        if (self.options.onScroll) self.options.onScroll.call(self, {
            section: rect,
            beforeTop,
            beforeTopEnd,
            afterTop,
            beforeBottom,
            beforeBottomEnd,
            afterBottom,
            visiblePercent,
            fromViewportCenter
        });
    }
    onResize() {
        this.coverImage();
        this.clipContainer();
    }
}
// global definition
const plugin = function(items, options, ...args) {
    // check for dom element
    // thanks: http://stackoverflow.com/questions/384286/javascript-isdom-how-do-you-check-if-a-javascript-object-is-a-dom-object
    if ('object' === typeof HTMLElement ? items instanceof HTMLElement : items && 'object' === typeof items && null !== items && 1 === items.nodeType && 'string' === typeof items.nodeName) items = [
        items
    ];
    const len = items.length;
    let k = 0;
    let ret;
    for(k; k < len; k += 1){
        if ('object' === typeof options || 'undefined' === typeof options) {
            if (!items[k].jarallax) items[k].jarallax = new Jarallax(items[k], options);
        } else if (items[k].jarallax) // eslint-disable-next-line prefer-spread
        ret = items[k].jarallax[options].apply(items[k].jarallax, args);
        if ('undefined' !== typeof ret) return ret;
    }
    return items;
};
plugin.constructor = Jarallax;
exports.default = plugin;

},{"lite-ready":"ffqcr","global":"iU6IE","@parcel/transformer-js/src/esmodule-helpers.js":"ff6Nl"}],"ffqcr":[function(require,module,exports,__globalThis) {
module.exports = function(callback) {
    if (document.readyState === 'complete' || document.readyState === 'interactive') // Already ready or interactive, execute callback
    callback.call();
    else if (document.attachEvent) // Old browsers
    document.attachEvent('onreadystatechange', function() {
        if (document.readyState === 'interactive') callback.call();
    });
    else if (document.addEventListener) // Modern browsers
    document.addEventListener('DOMContentLoaded', callback);
};

},{}],"iU6IE":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var win;
if (typeof window !== "undefined") win = window;
else if (typeof global !== "undefined") win = global;
else if (typeof self !== "undefined") win = self;
else win = {};
module.exports = win;

},{}],"ff6Nl":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"gf7IM":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>jarallaxVideo);
var _videoWorker = require("video-worker");
var _videoWorkerDefault = parcelHelpers.interopDefault(_videoWorker);
var _global = require("global");
var _globalDefault = parcelHelpers.interopDefault(_global);
function jarallaxVideo(jarallax = (0, _globalDefault.default).jarallax) {
    if ('undefined' === typeof jarallax) return;
    const Jarallax = jarallax.constructor;
    // append video after when block will be visible.
    const defOnScroll = Jarallax.prototype.onScroll;
    Jarallax.prototype.onScroll = function() {
        const self = this;
        defOnScroll.apply(self);
        const isReady = !self.isVideoInserted && self.video && (!self.options.videoLazyLoading || self.isElementInViewport) && !self.options.disableVideo();
        if (isReady) {
            self.isVideoInserted = true;
            self.video.getVideo((video)=>{
                const $parent = video.parentNode;
                self.css(video, {
                    position: self.image.position,
                    top: '0px',
                    left: '0px',
                    right: '0px',
                    bottom: '0px',
                    width: '100%',
                    height: '100%',
                    maxWidth: 'none',
                    maxHeight: 'none',
                    pointerEvents: 'none',
                    transformStyle: 'preserve-3d',
                    backfaceVisibility: 'hidden',
                    willChange: 'transform,opacity',
                    margin: 0,
                    zIndex: -1
                });
                self.$video = video;
                // add Poster attribute to self-hosted video
                if ('local' === self.video.type) {
                    if (self.image.src) self.$video.setAttribute('poster', self.image.src);
                    else if (self.image.$item && 'IMG' === self.image.$item.tagName && self.image.$item.src) self.$video.setAttribute('poster', self.image.$item.src);
                }
                // insert video tag
                self.image.$container.appendChild(video);
                // remove parent video element (created by VideoWorker)
                $parent.parentNode.removeChild($parent);
            });
        }
    };
    // cover video
    const defCoverImage = Jarallax.prototype.coverImage;
    Jarallax.prototype.coverImage = function() {
        const self = this;
        const imageData = defCoverImage.apply(self);
        const node = self.image.$item ? self.image.$item.nodeName : false;
        if (imageData && self.video && node && ('IFRAME' === node || 'VIDEO' === node)) {
            let h = imageData.image.height;
            let w = h * self.image.width / self.image.height;
            let ml = (imageData.container.width - w) / 2;
            let mt = imageData.image.marginTop;
            if (imageData.container.width > w) {
                w = imageData.container.width;
                h = w * self.image.height / self.image.width;
                ml = 0;
                mt += (imageData.image.height - h) / 2;
            }
            // add video height over than need to hide controls
            if ('IFRAME' === node) {
                h += 400;
                mt -= 200;
            }
            self.css(self.$video, {
                width: `${w}px`,
                marginLeft: `${ml}px`,
                height: `${h}px`,
                marginTop: `${mt}px`
            });
        }
        return imageData;
    };
    // init video
    const defInitImg = Jarallax.prototype.initImg;
    Jarallax.prototype.initImg = function() {
        const self = this;
        const defaultResult = defInitImg.apply(self);
        if (!self.options.videoSrc) self.options.videoSrc = self.$item.getAttribute('data-jarallax-video') || null;
        if (self.options.videoSrc) {
            self.defaultInitImgResult = defaultResult;
            return true;
        }
        return defaultResult;
    };
    const defCanInitParallax = Jarallax.prototype.canInitParallax;
    Jarallax.prototype.canInitParallax = function() {
        const self = this;
        let defaultResult = defCanInitParallax.apply(self);
        if (!self.options.videoSrc) return defaultResult;
        // Init video api
        const video = new (0, _videoWorkerDefault.default)(self.options.videoSrc, {
            autoplay: true,
            loop: self.options.videoLoop,
            showContols: false,
            startTime: self.options.videoStartTime || 0,
            endTime: self.options.videoEndTime || 0,
            mute: self.options.videoVolume ? 0 : 1,
            volume: self.options.videoVolume || 0
        });
        function resetDefaultImage() {
            if (self.image.$default_item) {
                self.image.$item = self.image.$default_item;
                self.image.$item.style.display = 'block';
                // set image width and height
                self.coverImage();
                self.clipContainer();
                self.onScroll();
            }
        }
        if (video.isValid()) {
            // Force enable parallax.
            // When the parallax disabled on mobile devices, we still need to display videos.
            // https://github.com/nk-o/jarallax/issues/159
            if (this.options.disableParallax()) {
                defaultResult = true;
                self.image.position = 'absolute';
                self.options.type = 'scroll';
                self.options.speed = 1;
            }
            // if parallax will not be inited, we can add thumbnail on background.
            if (!defaultResult) {
                if (!self.defaultInitImgResult) video.getImageURL((url)=>{
                    // save default user styles
                    const curStyle = self.$item.getAttribute('style');
                    if (curStyle) self.$item.setAttribute('data-jarallax-original-styles', curStyle);
                    // set new background
                    self.css(self.$item, {
                        'background-image': `url("${url}")`,
                        'background-position': 'center',
                        'background-size': 'cover'
                    });
                });
            } else {
                video.on('ready', ()=>{
                    if (self.options.videoPlayOnlyVisible) {
                        const oldOnScroll = self.onScroll;
                        self.onScroll = function() {
                            oldOnScroll.apply(self);
                            if (!self.videoError && (self.options.videoLoop || !self.options.videoLoop && !self.videoEnded)) {
                                if (self.isVisible()) video.play();
                                else video.pause();
                            }
                        };
                    } else video.play();
                });
                video.on('started', ()=>{
                    self.image.$default_item = self.image.$item;
                    self.image.$item = self.$video;
                    // set video width and height
                    self.image.width = self.video.videoWidth || 1280;
                    self.image.height = self.video.videoHeight || 720;
                    self.coverImage();
                    self.clipContainer();
                    self.onScroll();
                    // hide image
                    if (self.image.$default_item) self.image.$default_item.style.display = 'none';
                });
                video.on('ended', ()=>{
                    self.videoEnded = true;
                    if (!self.options.videoLoop) // show default image if Loop disabled.
                    resetDefaultImage();
                });
                video.on('error', ()=>{
                    self.videoError = true;
                    // show default image if video loading error.
                    resetDefaultImage();
                });
                self.video = video;
                // set image if not exists
                if (!self.defaultInitImgResult) {
                    // set empty image on self-hosted video if not defined
                    self.image.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
                    if ('local' !== video.type) {
                        video.getImageURL((url)=>{
                            self.image.bgImage = `url("${url}")`;
                            self.init();
                        });
                        return false;
                    }
                }
            }
        }
        return defaultResult;
    };
    // Destroy video parallax
    const defDestroy = Jarallax.prototype.destroy;
    Jarallax.prototype.destroy = function() {
        const self = this;
        if (self.image.$default_item) {
            self.image.$item = self.image.$default_item;
            delete self.image.$default_item;
        }
        defDestroy.apply(self);
    };
}

},{"video-worker":"aWYZw","global":"iU6IE","@parcel/transformer-js/src/esmodule-helpers.js":"ff6Nl"}],"aWYZw":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _global = require("global");
var _globalDefault = parcelHelpers.interopDefault(_global);
// Deferred
// thanks http://stackoverflow.com/questions/18096715/implement-deferred-object-without-using-jquery
function Deferred() {
    this.doneCallbacks = [];
    this.failCallbacks = [];
}
Deferred.prototype = {
    execute (list, args) {
        let i = list.length;
        args = Array.prototype.slice.call(args);
        while(i){
            i -= 1;
            list[i].apply(null, args);
        }
    },
    resolve (...args) {
        this.execute(this.doneCallbacks, args);
    },
    reject (...args) {
        this.execute(this.failCallbacks, args);
    },
    done (callback) {
        this.doneCallbacks.push(callback);
    },
    fail (callback) {
        this.failCallbacks.push(callback);
    }
};
let ID = 0;
let YoutubeAPIadded = 0;
let VimeoAPIadded = 0;
let loadingYoutubePlayer = 0;
let loadingVimeoPlayer = 0;
const loadingYoutubeDefer = new Deferred();
const loadingVimeoDefer = new Deferred();
class VideoWorker {
    constructor(url, options){
        const self = this;
        self.url = url;
        self.options_default = {
            autoplay: false,
            loop: false,
            mute: false,
            volume: 100,
            showContols: true,
            // start / end video time in seconds
            startTime: 0,
            endTime: 0
        };
        self.options = self.extend({}, self.options_default, options);
        // check URL
        self.videoID = self.parseURL(url);
        // init
        if (self.videoID) {
            self.ID = ID;
            ID += 1;
            self.loadAPI();
            self.init();
        }
    }
    // Extend like jQuery.extend
    // eslint-disable-next-line class-methods-use-this
    extend(...args) {
        const out = args[0] || {};
        Object.keys(args).forEach((i)=>{
            if (!args[i]) return;
            Object.keys(args[i]).forEach((key)=>{
                out[key] = args[i][key];
            });
        });
        return out;
    }
    parseURL(url) {
        // parse youtube ID
        function getYoutubeID(ytUrl) {
            // eslint-disable-next-line no-useless-escape
            const regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
            const match = ytUrl.match(regExp);
            return match && 11 === match[1].length ? match[1] : false;
        }
        // parse vimeo ID
        function getVimeoID(vmUrl) {
            // eslint-disable-next-line no-useless-escape
            const regExp = /https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/;
            const match = vmUrl.match(regExp);
            return match && match[3] ? match[3] : false;
        }
        // parse local string
        function getLocalVideos(locUrl) {
            // eslint-disable-next-line no-useless-escape
            const videoFormats = locUrl.split(/,(?=mp4\:|webm\:|ogv\:|ogg\:)/);
            const result = {};
            let ready = 0;
            videoFormats.forEach((val)=>{
                // eslint-disable-next-line no-useless-escape
                const match = val.match(/^(mp4|webm|ogv|ogg)\:(.*)/);
                if (match && match[1] && match[2]) {
                    // eslint-disable-next-line prefer-destructuring
                    result['ogv' === match[1] ? 'ogg' : match[1]] = match[2];
                    ready = 1;
                }
            });
            return ready ? result : false;
        }
        const Youtube = getYoutubeID(url);
        const Vimeo = getVimeoID(url);
        const Local = getLocalVideos(url);
        if (Youtube) {
            this.type = 'youtube';
            return Youtube;
        }
        if (Vimeo) {
            this.type = 'vimeo';
            return Vimeo;
        }
        if (Local) {
            this.type = 'local';
            return Local;
        }
        return false;
    }
    isValid() {
        return !!this.videoID;
    }
    // events
    on(name, callback) {
        this.userEventsList = this.userEventsList || [];
        // add new callback in events list
        (this.userEventsList[name] || (this.userEventsList[name] = [])).push(callback);
    }
    off(name, callback) {
        if (!this.userEventsList || !this.userEventsList[name]) return;
        if (!callback) delete this.userEventsList[name];
        else this.userEventsList[name].forEach((val, key)=>{
            if (val === callback) this.userEventsList[name][key] = false;
        });
    }
    fire(name, ...args) {
        if (this.userEventsList && 'undefined' !== typeof this.userEventsList[name]) this.userEventsList[name].forEach((val)=>{
            // call with all arguments
            if (val) val.apply(this, args);
        });
    }
    play(start) {
        const self = this;
        if (!self.player) return;
        if ('youtube' === self.type && self.player.playVideo) {
            if ('undefined' !== typeof start) self.player.seekTo(start || 0);
            if ((0, _globalDefault.default).YT.PlayerState.PLAYING !== self.player.getPlayerState()) self.player.playVideo();
        }
        if ('vimeo' === self.type) {
            if ('undefined' !== typeof start) self.player.setCurrentTime(start);
            self.player.getPaused().then((paused)=>{
                if (paused) self.player.play();
            });
        }
        if ('local' === self.type) {
            if ('undefined' !== typeof start) self.player.currentTime = start;
            if (self.player.paused) self.player.play();
        }
    }
    pause() {
        const self = this;
        if (!self.player) return;
        if ('youtube' === self.type && self.player.pauseVideo) {
            if ((0, _globalDefault.default).YT.PlayerState.PLAYING === self.player.getPlayerState()) self.player.pauseVideo();
        }
        if ('vimeo' === self.type) self.player.getPaused().then((paused)=>{
            if (!paused) self.player.pause();
        });
        if ('local' === self.type) {
            if (!self.player.paused) self.player.pause();
        }
    }
    mute() {
        const self = this;
        if (!self.player) return;
        if ('youtube' === self.type && self.player.mute) self.player.mute();
        if ('vimeo' === self.type && self.player.setVolume) self.player.setVolume(0);
        if ('local' === self.type) self.$video.muted = true;
    }
    unmute() {
        const self = this;
        if (!self.player) return;
        if ('youtube' === self.type && self.player.mute) self.player.unMute();
        if ('vimeo' === self.type && self.player.setVolume) self.player.setVolume(self.options.volume);
        if ('local' === self.type) self.$video.muted = false;
    }
    setVolume(volume = false) {
        const self = this;
        if (!self.player || !volume) return;
        if ('youtube' === self.type && self.player.setVolume) self.player.setVolume(volume);
        if ('vimeo' === self.type && self.player.setVolume) self.player.setVolume(volume);
        if ('local' === self.type) self.$video.volume = volume / 100;
    }
    getVolume(callback) {
        const self = this;
        if (!self.player) {
            callback(false);
            return;
        }
        if ('youtube' === self.type && self.player.getVolume) callback(self.player.getVolume());
        if ('vimeo' === self.type && self.player.getVolume) self.player.getVolume().then((volume)=>{
            callback(volume);
        });
        if ('local' === self.type) callback(self.$video.volume * 100);
    }
    getMuted(callback) {
        const self = this;
        if (!self.player) {
            callback(null);
            return;
        }
        if ('youtube' === self.type && self.player.isMuted) callback(self.player.isMuted());
        if ('vimeo' === self.type && self.player.getVolume) self.player.getVolume().then((volume)=>{
            callback(!!volume);
        });
        if ('local' === self.type) callback(self.$video.muted);
    }
    getImageURL(callback) {
        const self = this;
        if (self.videoImage) {
            callback(self.videoImage);
            return;
        }
        if ('youtube' === self.type) {
            const availableSizes = [
                'maxresdefault',
                'sddefault',
                'hqdefault',
                '0'
            ];
            let step = 0;
            const tempImg = new Image();
            tempImg.onload = function() {
                // if no thumbnail, youtube add their own image with width = 120px
                if (120 !== (this.naturalWidth || this.width) || step === availableSizes.length - 1) {
                    // ok
                    self.videoImage = `https://img.youtube.com/vi/${self.videoID}/${availableSizes[step]}.jpg`;
                    callback(self.videoImage);
                } else {
                    // try another size
                    step += 1;
                    this.src = `https://img.youtube.com/vi/${self.videoID}/${availableSizes[step]}.jpg`;
                }
            };
            tempImg.src = `https://img.youtube.com/vi/${self.videoID}/${availableSizes[step]}.jpg`;
        }
        if ('vimeo' === self.type) {
            let request = new XMLHttpRequest();
            request.open('GET', `https://vimeo.com/api/v2/video/${self.videoID}.json`, true);
            request.onreadystatechange = function() {
                if (4 === this.readyState) {
                    if (200 <= this.status && 400 > this.status) {
                        // Success!
                        const response = JSON.parse(this.responseText);
                        self.videoImage = response[0].thumbnail_large;
                        callback(self.videoImage);
                    }
                // Error :(
                }
            };
            request.send();
            request = null;
        }
    }
    // fallback to the old version.
    getIframe(callback) {
        this.getVideo(callback);
    }
    getVideo(callback) {
        const self = this;
        // return generated video block
        if (self.$video) {
            callback(self.$video);
            return;
        }
        // generate new video block
        self.onAPIready(()=>{
            let hiddenDiv;
            if (!self.$video) {
                hiddenDiv = document.createElement('div');
                hiddenDiv.style.display = 'none';
            }
            // Youtube
            if ('youtube' === self.type) {
                self.playerOptions = {};
                self.playerOptions.videoId = self.videoID;
                self.playerOptions.playerVars = {
                    autohide: 1,
                    rel: 0,
                    autoplay: 0,
                    // autoplay enable on mobile devices
                    playsinline: 1
                };
                // hide controls
                if (!self.options.showContols) {
                    self.playerOptions.playerVars.iv_load_policy = 3;
                    self.playerOptions.playerVars.modestbranding = 1;
                    self.playerOptions.playerVars.controls = 0;
                    self.playerOptions.playerVars.showinfo = 0;
                    self.playerOptions.playerVars.disablekb = 1;
                }
                // events
                let ytStarted;
                let ytProgressInterval;
                self.playerOptions.events = {
                    onReady (e) {
                        // mute
                        if (self.options.mute) e.target.mute();
                        else if (self.options.volume) e.target.setVolume(self.options.volume);
                        // autoplay
                        if (self.options.autoplay) self.play(self.options.startTime);
                        self.fire('ready', e);
                        // For seamless loops, set the endTime to 0.1 seconds less than the video's duration
                        // https://github.com/nk-o/video-worker/issues/2
                        if (self.options.loop && !self.options.endTime) {
                            const secondsOffset = 0.1;
                            self.options.endTime = self.player.getDuration() - secondsOffset;
                        }
                        // volumechange
                        setInterval(()=>{
                            self.getVolume((volume)=>{
                                if (self.options.volume !== volume) {
                                    self.options.volume = volume;
                                    self.fire('volumechange', e);
                                }
                            });
                        }, 150);
                    },
                    onStateChange (e) {
                        // loop
                        if (self.options.loop && e.data === (0, _globalDefault.default).YT.PlayerState.ENDED) self.play(self.options.startTime);
                        if (!ytStarted && e.data === (0, _globalDefault.default).YT.PlayerState.PLAYING) {
                            ytStarted = 1;
                            self.fire('started', e);
                        }
                        if (e.data === (0, _globalDefault.default).YT.PlayerState.PLAYING) self.fire('play', e);
                        if (e.data === (0, _globalDefault.default).YT.PlayerState.PAUSED) self.fire('pause', e);
                        if (e.data === (0, _globalDefault.default).YT.PlayerState.ENDED) self.fire('ended', e);
                        // progress check
                        if (e.data === (0, _globalDefault.default).YT.PlayerState.PLAYING) ytProgressInterval = setInterval(()=>{
                            self.fire('timeupdate', e);
                            // check for end of video and play again or stop
                            if (self.options.endTime && self.player.getCurrentTime() >= self.options.endTime) {
                                if (self.options.loop) self.play(self.options.startTime);
                                else self.pause();
                            }
                        }, 150);
                        else clearInterval(ytProgressInterval);
                    },
                    onError (e) {
                        self.fire('error', e);
                    }
                };
                const firstInit = !self.$video;
                if (firstInit) {
                    const div = document.createElement('div');
                    div.setAttribute('id', self.playerID);
                    hiddenDiv.appendChild(div);
                    document.body.appendChild(hiddenDiv);
                }
                self.player = self.player || new (0, _globalDefault.default).YT.Player(self.playerID, self.playerOptions);
                if (firstInit) {
                    self.$video = document.getElementById(self.playerID);
                    // get video width and height
                    self.videoWidth = parseInt(self.$video.getAttribute('width'), 10) || 1280;
                    self.videoHeight = parseInt(self.$video.getAttribute('height'), 10) || 720;
                }
            }
            // Vimeo
            if ('vimeo' === self.type) {
                self.playerOptions = {
                    id: self.videoID,
                    autopause: 0,
                    transparent: 0,
                    autoplay: self.options.autoplay ? 1 : 0,
                    loop: self.options.loop ? 1 : 0,
                    muted: self.options.mute ? 1 : 0
                };
                if (self.options.volume) self.playerOptions.volume = self.options.volume;
                // hide controls
                if (!self.options.showContols) {
                    self.playerOptions.badge = 0;
                    self.playerOptions.byline = 0;
                    self.playerOptions.portrait = 0;
                    self.playerOptions.title = 0;
                    self.playerOptions.background = 1;
                }
                if (!self.$video) {
                    let playerOptionsString = '';
                    Object.keys(self.playerOptions).forEach((key)=>{
                        if ('' !== playerOptionsString) playerOptionsString += '&';
                        playerOptionsString += `${key}=${encodeURIComponent(self.playerOptions[key])}`;
                    });
                    // we need to create iframe manually because when we create it using API
                    // js events won't triggers after iframe moved to another place
                    self.$video = document.createElement('iframe');
                    self.$video.setAttribute('id', self.playerID);
                    self.$video.setAttribute('src', `https://player.vimeo.com/video/${self.videoID}?${playerOptionsString}`);
                    self.$video.setAttribute('frameborder', '0');
                    self.$video.setAttribute('mozallowfullscreen', '');
                    self.$video.setAttribute('allowfullscreen', '');
                    hiddenDiv.appendChild(self.$video);
                    document.body.appendChild(hiddenDiv);
                }
                self.player = self.player || new (0, _globalDefault.default).Vimeo.Player(self.$video, self.playerOptions);
                // set current time for autoplay
                if (self.options.startTime && self.options.autoplay) self.player.setCurrentTime(self.options.startTime);
                // get video width and height
                self.player.getVideoWidth().then((width)=>{
                    self.videoWidth = width || 1280;
                });
                self.player.getVideoHeight().then((height)=>{
                    self.videoHeight = height || 720;
                });
                // events
                let vmStarted;
                self.player.on('timeupdate', (e)=>{
                    if (!vmStarted) {
                        self.fire('started', e);
                        vmStarted = 1;
                    }
                    self.fire('timeupdate', e);
                    // check for end of video and play again or stop
                    if (self.options.endTime) {
                        if (self.options.endTime && e.seconds >= self.options.endTime) {
                            if (self.options.loop) self.play(self.options.startTime);
                            else self.pause();
                        }
                    }
                });
                self.player.on('play', (e)=>{
                    self.fire('play', e);
                    // check for the start time and start with it
                    if (self.options.startTime && 0 === e.seconds) self.play(self.options.startTime);
                });
                self.player.on('pause', (e)=>{
                    self.fire('pause', e);
                });
                self.player.on('ended', (e)=>{
                    self.fire('ended', e);
                });
                self.player.on('loaded', (e)=>{
                    self.fire('ready', e);
                });
                self.player.on('volumechange', (e)=>{
                    self.fire('volumechange', e);
                });
                self.player.on('error', (e)=>{
                    self.fire('error', e);
                });
            }
            // Local
            function addSourceToLocal(element, src, type) {
                const source = document.createElement('source');
                source.src = src;
                source.type = type;
                element.appendChild(source);
            }
            if ('local' === self.type) {
                if (!self.$video) {
                    self.$video = document.createElement('video');
                    // show controls
                    if (self.options.showContols) self.$video.controls = true;
                    // mute
                    if (self.options.mute) self.$video.muted = true;
                    else if (self.$video.volume) self.$video.volume = self.options.volume / 100;
                    // loop
                    if (self.options.loop) self.$video.loop = true;
                    // autoplay enable on mobile devices
                    self.$video.setAttribute('playsinline', '');
                    self.$video.setAttribute('webkit-playsinline', '');
                    self.$video.setAttribute('id', self.playerID);
                    hiddenDiv.appendChild(self.$video);
                    document.body.appendChild(hiddenDiv);
                    Object.keys(self.videoID).forEach((key)=>{
                        addSourceToLocal(self.$video, self.videoID[key], `video/${key}`);
                    });
                }
                self.player = self.player || self.$video;
                let locStarted;
                self.player.addEventListener('playing', (e)=>{
                    if (!locStarted) self.fire('started', e);
                    locStarted = 1;
                });
                self.player.addEventListener('timeupdate', function(e) {
                    self.fire('timeupdate', e);
                    // check for end of video and play again or stop
                    if (self.options.endTime) {
                        if (self.options.endTime && this.currentTime >= self.options.endTime) {
                            if (self.options.loop) self.play(self.options.startTime);
                            else self.pause();
                        }
                    }
                });
                self.player.addEventListener('play', (e)=>{
                    self.fire('play', e);
                });
                self.player.addEventListener('pause', (e)=>{
                    self.fire('pause', e);
                });
                self.player.addEventListener('ended', (e)=>{
                    self.fire('ended', e);
                });
                self.player.addEventListener('loadedmetadata', function() {
                    // get video width and height
                    self.videoWidth = this.videoWidth || 1280;
                    self.videoHeight = this.videoHeight || 720;
                    self.fire('ready');
                    // autoplay
                    if (self.options.autoplay) self.play(self.options.startTime);
                });
                self.player.addEventListener('volumechange', (e)=>{
                    self.getVolume((volume)=>{
                        self.options.volume = volume;
                    });
                    self.fire('volumechange', e);
                });
                self.player.addEventListener('error', (e)=>{
                    self.fire('error', e);
                });
            }
            callback(self.$video);
        });
    }
    init() {
        const self = this;
        self.playerID = `VideoWorker-${self.ID}`;
    }
    loadAPI() {
        const self = this;
        if (YoutubeAPIadded && VimeoAPIadded) return;
        let src = '';
        // load Youtube API
        if ('youtube' === self.type && !YoutubeAPIadded) {
            YoutubeAPIadded = 1;
            src = 'https://www.youtube.com/iframe_api';
        }
        // load Vimeo API
        if ('vimeo' === self.type && !VimeoAPIadded) {
            VimeoAPIadded = 1;
            // Useful when Vimeo API added using RequireJS https://github.com/nk-o/video-worker/pull/7
            if ('undefined' !== typeof (0, _globalDefault.default).Vimeo) return;
            src = 'https://player.vimeo.com/api/player.js';
        }
        if (!src) return;
        // add script in head section
        let tag = document.createElement('script');
        let head = document.getElementsByTagName('head')[0];
        tag.src = src;
        head.appendChild(tag);
        head = null;
        tag = null;
    }
    onAPIready(callback) {
        const self = this;
        // Youtube
        if ('youtube' === self.type) {
            // Listen for global YT player callback
            if (('undefined' === typeof (0, _globalDefault.default).YT || 0 === (0, _globalDefault.default).YT.loaded) && !loadingYoutubePlayer) {
                // Prevents Ready event from being called twice
                loadingYoutubePlayer = 1;
                // Creates deferred so, other players know when to wait.
                window.onYouTubeIframeAPIReady = function() {
                    window.onYouTubeIframeAPIReady = null;
                    loadingYoutubeDefer.resolve('done');
                    callback();
                };
            } else if ('object' === typeof (0, _globalDefault.default).YT && 1 === (0, _globalDefault.default).YT.loaded) callback();
            else loadingYoutubeDefer.done(()=>{
                callback();
            });
        }
        // Vimeo
        if ('vimeo' === self.type) {
            if ('undefined' === typeof (0, _globalDefault.default).Vimeo && !loadingVimeoPlayer) {
                loadingVimeoPlayer = 1;
                const vimeoInterval = setInterval(()=>{
                    if ('undefined' !== typeof (0, _globalDefault.default).Vimeo) {
                        clearInterval(vimeoInterval);
                        loadingVimeoDefer.resolve('done');
                        callback();
                    }
                }, 20);
            } else if ('undefined' !== typeof (0, _globalDefault.default).Vimeo) callback();
            else loadingVimeoDefer.done(()=>{
                callback();
            });
        }
        // Local
        if ('local' === self.type) callback();
    }
}
exports.default = VideoWorker;

},{"global":"iU6IE","@parcel/transformer-js/src/esmodule-helpers.js":"ff6Nl"}],"1xp2L":[function(require,module,exports,__globalThis) {
/* eslint no-case-declarations: "off" */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>jarallaxElement);
var _global = require("global");
var _globalDefault = parcelHelpers.interopDefault(_global);
function jarallaxElement(jarallax = (0, _globalDefault.default).jarallax) {
    if ('undefined' === typeof jarallax) return;
    const Jarallax = jarallax.constructor;
    // redefine default methods
    [
        'initImg',
        'canInitParallax',
        'init',
        'destroy',
        'clipContainer',
        'coverImage',
        'isVisible',
        'onScroll',
        'onResize'
    ].forEach((key)=>{
        const def = Jarallax.prototype[key];
        Jarallax.prototype[key] = function(...args) {
            const self = this;
            if ('initImg' === key && null !== self.$item.getAttribute('data-jarallax-element')) {
                self.options.type = 'element';
                self.pureOptions.speed = self.$item.getAttribute('data-jarallax-element') || self.pureOptions.speed;
            }
            if ('element' !== self.options.type) return def.apply(self, args);
            self.pureOptions.threshold = self.$item.getAttribute('data-threshold') || '';
            switch(key){
                case 'init':
                    const speedArr = self.pureOptions.speed.split(' ');
                    self.options.speed = self.pureOptions.speed || 0;
                    self.options.speedY = speedArr[0] ? parseFloat(speedArr[0]) : 0;
                    self.options.speedX = speedArr[1] ? parseFloat(speedArr[1]) : 0;
                    const thresholdArr = self.pureOptions.threshold.split(' ');
                    self.options.thresholdY = thresholdArr[0] ? parseFloat(thresholdArr[0]) : null;
                    self.options.thresholdX = thresholdArr[1] ? parseFloat(thresholdArr[1]) : null;
                    def.apply(self, args);
                    // restore background image if available.
                    const originalStylesTag = self.$item.getAttribute('data-jarallax-original-styles');
                    if (originalStylesTag) self.$item.setAttribute('style', originalStylesTag);
                    return true;
                case 'onResize':
                    const defTransform = self.css(self.$item, 'transform');
                    self.css(self.$item, {
                        transform: ''
                    });
                    const rect = self.$item.getBoundingClientRect();
                    self.itemData = {
                        width: rect.width,
                        height: rect.height,
                        y: rect.top + self.getWindowData().y,
                        x: rect.left
                    };
                    self.css(self.$item, {
                        transform: defTransform
                    });
                    break;
                case 'onScroll':
                    const wnd = self.getWindowData();
                    const centerPercent = (wnd.y + wnd.height / 2 - self.itemData.y - self.itemData.height / 2) / (wnd.height / 2);
                    const moveY = centerPercent * self.options.speedY;
                    const moveX = centerPercent * self.options.speedX;
                    let my = moveY;
                    let mx = moveX;
                    if (null !== self.options.thresholdY && moveY > self.options.thresholdY) my = 0;
                    if (null !== self.options.thresholdX && moveX > self.options.thresholdX) mx = 0;
                    self.css(self.$item, {
                        transform: `translate3d(${mx}px,${my}px,0)`
                    });
                    break;
                case 'initImg':
                case 'isVisible':
                case 'clipContainer':
                case 'coverImage':
                    return true;
            }
            return def.apply(self, args);
        };
    });
}

},{"global":"iU6IE","@parcel/transformer-js/src/esmodule-helpers.js":"ff6Nl"}],"1S1UT":[function(require,module,exports,__globalThis) {
/* eslint no-unused-vars: 0 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _core = require("./core");
var _coreDefault = parcelHelpers.interopDefault(_core);
var _notification = require("./plugins/notification");
var _navbar = require("./plugins/navbar");
var _message = require("./plugins/message");
var _dropdown = require("./plugins/dropdown");
var _modal = require("./plugins/modal");
var _alert = require("./plugins/alert");
var _file = require("./plugins/file");
var _tabs = require("./plugins/tabs");
exports.default = (0, _coreDefault.default);

},{"./core":"k7oCJ","./plugins/notification":"gRtsd","./plugins/navbar":"gkOBE","./plugins/message":"5nlGq","./plugins/dropdown":"fRcJg","./plugins/modal":"31TTi","./plugins/alert":"e1rW1","./plugins/file":"k8aez","./plugins/tabs":"jDngR","@parcel/transformer-js/src/esmodule-helpers.js":"ff6Nl"}],"k7oCJ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _data = require("./Data");
var _dataDefault = parcelHelpers.interopDefault(_data);
/**
 * Wrap an element around Bulma.
 * @param {String|HTMLElement} selector The selector or HTMLElement to wrap.
 */ function Bulma(selector) {
    if (!(this instanceof Bulma)) return new Bulma(selector);
    if (selector instanceof Bulma) return selector;
    if (selector instanceof HTMLElement) this._elem = selector;
    else this._elem = document.querySelector(selector);
    if (!selector) this._elem = document.createElement('div');
    if (!this._elem.hasOwnProperty(Bulma.id)) this._elem[Bulma.id] = (0, _dataDefault.default).uid++;
    return this;
}
/**
 * Current BulmaJS version.
 * @type {String}
 */ Bulma.VERSION = '0.11.0';
/**
 * Unique ID of Bulma
 * @type {String}
 */ Bulma.id = 'bulma-' + new Date().getTime();
/**
 * Global data cache for HTML elements
 * @type {Data}
 */ Bulma.cache = new (0, _dataDefault.default)();
/**
 * An index of the registered plugins
 * @type {Object}
 */ Bulma.plugins = {};
/**
 * Helper method to create a new plugin.
 * @param  {String} key The plugin's key
 * @param  {Object} config The config to be passed to the plugin
 * @return {Object} The newly created plugin instance
 */ Bulma.create = (key, config)=>{
    if (!key || !Bulma.plugins.hasOwnProperty(key)) throw new Error('[BulmaJS] A plugin with the key \'' + key + '\' has not been registered.');
    return new Bulma.plugins[key].handler(config);
};
/**
 * Register a new plugin
 * @param  {String} key The key to register the plugin under
 * @param  {Object} plugin The plugin's main constructor
 * @param  {number?} priority The priority this plugin has over other plugins. Higher means the plugin is registered before lower.
 * @return {undefined}
 */ Bulma.registerPlugin = (key, plugin, priority = 0)=>{
    if (!key) throw new Error('[BulmaJS] Key attribute is required.');
    Bulma.plugins[key] = {
        priority: priority,
        handler: plugin
    };
    Bulma.prototype[key] = function(config) {
        return new Bulma.plugins[key].handler(config, this);
    };
};
/**
 * Parse the HTML DOM searching for data-bulma attributes. We will then pass
 * each element to the appropriate plugin to handle the required processing.
 * @param  {HTMLElement} root The root of the document we're going to parse.
 * @return {undefined}
 */ Bulma.parseDocument = (root = document)=>{
    let sortedPlugins = Object.keys(Bulma.plugins).sort((a, b)=>Bulma.plugins[a].priority < Bulma.plugins[b].priority);
    Bulma.each(sortedPlugins, (key)=>{
        if (!Bulma.plugins[key].handler.hasOwnProperty('parseDocument')) {
            // eslint-disable-next-line no-console
            console.error('[BulmaJS] Plugin ' + key + ' does not have a parseDocument method. Automatic document parsing is not possible for this plugin.');
            return;
        }
        Bulma.plugins[key].handler.parseDocument(root);
    });
};
/**
 * Create an element and assign classes
 * @param {string} name The name of the element to create
 * @param {array} classes An array of classes to add to the element
 * @return {HTMLElement} The newly created element
 */ Bulma.createElement = (name, classes)=>{
    if (!classes) classes = [];
    if (typeof classes === 'string') classes = [
        classes
    ];
    let elem = document.createElement(name);
    Bulma.each(classes, (className)=>{
        elem.classList.add(className);
    });
    return elem;
};
/**
 * Find an element otherwise create a new one.
 * @param {string} query The CSS selector query to find
 * @param {HTMLElement|null} parent The parent we want to search/create within
 * @param {[string]} elemName The name of the element to create
 * @param {[array]} classes The classes to apply to the element
 * @returns {HTMLElement} The HTML element we found or created
 */ Bulma.findOrCreateElement = (query, parent = document, elemName = 'div', classes = [])=>{
    var elem = parent.querySelector(query);
    if (!elem) {
        if (classes.length === 0) classes = query.split('.').filter((item)=>{
            return item;
        });
        var newElem = Bulma.createElement(elemName, classes);
        parent.appendChild(newElem);
        return newElem;
    }
    return elem;
};
/**
 * For loop helper
 * @param {*} objects The array/object to loop through
 * @param {*} callback The callback used for each item
 */ Bulma.each = (objects, callback)=>{
    let i;
    for(i = 0; i < objects.length; i++)callback(objects[i], i);
};
/**
 * Make an AJAX GET request to the specified URL. Stripping any script tags from the response.
 * @param {*} url The url to send the request to
 * @returns {Promise} Returns a promise containing the response HTML or error
 */ Bulma.ajax = (url)=>{
    return new Promise((resolve, reject)=>{
        var request = new XMLHttpRequest();
        request.open('GET', url, true);
        request.onload = ()=>{
            if (request.status >= 200 && request.status < 400) resolve(Bulma._stripScripts(request.responseText));
            else reject();
        };
        request.onerror = ()=>reject();
        request.send();
    });
};
/**
 * Strip any script tags from a HTML string.
 * @param {string} htmlString 
 * @returns {string} The cleaned HTML string
 * 
 * @private
 */ Bulma._stripScripts = (htmlString)=>{
    var div = document.createElement('div');
    div.innerHTML = htmlString;
    var scripts = div.getElementsByTagName('script');
    var i = scripts.length;
    while(i--)scripts[i].parentNode.removeChild(scripts[i]);
    return div.innerHTML.replace(/  +/g, ' ');
};
/**
 * Get or set custom data on a Bulma element.
 * @type {String} key
 * @type {any} value
 * @returns {Bulma}
 */ Bulma.prototype.data = function(key, value) {
    if (!value) return Bulma.cache.get(this._elem[Bulma.id], key);
    Bulma.cache.set(this._elem[Bulma.id], key, value);
    return this;
};
/**
 * Destroy the data for an element.
 * @returns {Bulma}
 */ Bulma.prototype.destroyData = function() {
    Bulma.cache.destroy(this._elem[Bulma.id]);
    return this;
};
/**
 * Returns the internal HTMLElement we're wrapping.
 *
 * @returns {HTMLElement}
 */ Bulma.prototype.getElement = function() {
    return this._elem;
};
document.addEventListener('DOMContentLoaded', ()=>{
    if (window.hasOwnProperty('bulmaOptions') && window.bulmaOptions.autoParseDocument === false) return;
    Bulma.parseDocument();
});
exports.default = Bulma;

},{"./Data":"84CAo","@parcel/transformer-js/src/esmodule-helpers.js":"ff6Nl"}],"84CAo":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Data {
    constructor(){
        this._data = {};
    }
    set(uid, key, value) {
        if (!this._data.hasOwnProperty(uid)) this._data[uid] = {};
        this._data[uid][key] = value;
    }
    get(uid, key) {
        if (!this._data.hasOwnProperty(uid)) return undefined;
        return this._data[uid][key];
    }
    destroy(uid) {
        if (this._data.hasOwnProperty(uid)) delete this._data[uid];
    }
}
Data.uid = 1;
exports.default = Data;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ff6Nl"}],"gRtsd":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @module Notification
 * @since  0.1.0
 * @author  Thomas Erbe <vizuaalog@gmail.com>
 * @extends DismissableComponent
 */ parcelHelpers.export(exports, "Notification", ()=>Notification);
var _core = require("../core");
var _coreDefault = parcelHelpers.interopDefault(_core);
var _dismissableComponent = require("../dismissableComponent");
var _dismissableComponentDefault = parcelHelpers.interopDefault(_dismissableComponent);
class Notification extends (0, _dismissableComponentDefault.default) {
    /**
     * Handle parsing the DOMs data attribute API.
     * @param {HTMLElement} element The root element for this instance
     * @return {undefined}
     */ static parseDocument(context) {
        let elements = context.querySelectorAll('.notification');
        (0, _coreDefault.default).each(elements, (element)=>{
            let bulmaElement = (0, _coreDefault.default)(element);
            if (bulmaElement.data('notification')) return;
            let closeBtn = element.querySelector('.delete');
            bulmaElement.notification({
                body: null,
                closeButton: closeBtn,
                isDismissable: !!closeBtn,
                destroyOnDismiss: true,
                dismissInterval: element.hasAttribute('data-dismiss-interval') ? element.getAttribute('data-dismiss-interval') : null
            });
        });
    }
    /**
     * Plugin constructor
     * @param  {Object} config The config object for this plugin
     * @return {this} The newly created instance
     */ constructor(config, root){
        super('notification', config, root);
        // TODO: Move this into the DismissableComponent class. Due to the required
        // changes between different components, we may need a way to trigger this
        // when the component is ready.
        if (this.isDismissable) {
            if (!this.config.has('closeButton')) this.prependCloseButton();
            this.setupCloseEvent();
        }
        (0, _coreDefault.default)(this.root).data('notification', this);
        this.trigger('init');
    }
}
(0, _coreDefault.default).registerPlugin('notification', Notification);
exports.default = (0, _coreDefault.default);

},{"../core":"k7oCJ","../dismissableComponent":"kAgSo","@parcel/transformer-js/src/esmodule-helpers.js":"ff6Nl"}],"kAgSo":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _core = require("./core");
var _coreDefault = parcelHelpers.interopDefault(_core);
var _plugin = require("./plugin");
var _pluginDefault = parcelHelpers.interopDefault(_plugin);
class DismissableComponent extends (0, _pluginDefault.default) {
    /**
     * Returns an object containing the default config for this plugin.
     * @returns {object} The default config object.
     */ static defaultConfig() {
        return {
            isDismissable: false,
            destroyOnDismiss: true,
            element: null
        };
    }
    /**
     * Plugin constructor
     * @param  {string} name Plugin's name
     * @param  {Object} config Plugin's config
     * @return {this} The new plugin instance
     */ constructor(name, config, root){
        if (!root._elem.classList.contains(name)) {
            config['parent'] = root;
            root = null;
        }
        super(config, root);
        /**
         * The name of this component, this will be used as the root class
         * @type {string}
         */ this.name = name;
        /**
        * Body text.
        * @type {string}
        */ this.body = this.config.get('body');
        /**
        * Color modifier.
        * @type {string} Possible values are null, primary, info, success, warning, danger
        */ this.color = this.config.get('color');
        /**
        * How long to wait before auto dismissing the component.
        * @type {int|null} If null component must be dismissed manually.
        */ this.dismissInterval = this.config.get('dismissInterval') ? this.createDismissInterval(this.config.get('dismissInterval')) : null;
        /**
        * Does this component have a dismiss button?
        * @type {Boolean}
        */ this.isDismissable = this.config.get('isDismissable');
        /**
        * Should this component be destroyed when it is dismissed.
        * @type {Boolean}
        */ this.destroyOnDismiss = this.config.get('destroyOnDismiss');
        // TODO: Make internal element references all be a Bulma instance. This will keep consistency.
        if (!(this.parent instanceof (0, _coreDefault.default))) this.parent = (0, _coreDefault.default)(this.parent);
        /**
        * The root element.
        * @type {HTMLElement|null} If this is not provided a new element will be created.
        */ this.root = this.config.get('root', this.createRootElement.bind(this));
        /**
        * The element used to close the component.
        * @type {HTMLElement}
        */ this.closeButton = this.config.get('closeButton', this.createCloseButton());
        if (this.body) this.insertBody();
        if (this.color) this.setColor();
    }
    /**
     * Create the main element.
     * @return {HTMLElement}
     */ createRootElement() {
        let elem = document.createElement('div');
        elem.classList.add(this.name, 'is-hidden');
        elem.setAttribute('data-bulma-attached', 'attached');
        this.parent.getElement().appendChild(elem);
        return elem;
    }
    /**
     * Show the component.
     * @return {undefined}
     */ show() {
        this.root.classList.remove('is-hidden');
    }
    /**
     * Hide the component.
     * @return {undefined}
     */ hide() {
        this.root.classList.add('is-hidden');
    }
    /**
     * Insert the body text into the component.
     * @return {undefined}
     */ insertBody() {
        this.root.innerHTML = this.body;
    }
    /**
     * Create the element that will be used to close the component.
     * @return {HTMLElement} The newly created close button
     */ createCloseButton() {
        var closeButton = document.createElement('button');
        closeButton.setAttribute('type', 'button');
        closeButton.classList.add('delete');
        return closeButton;
    }
    /**
     * Create an interval to dismiss the component after the set number of ms.
     * @param  {int} interval The time to wait before dismissing the component
     * @return {undefined}
     */ createDismissInterval(interval) {
        return setInterval(()=>{
            this.handleCloseEvent();
        }, interval);
    }
    /**
     * Insert the close button before our content.
     * @return {undefined}
     */ prependCloseButton() {
        this.root.insertBefore(this.closeButton, this.root.firstChild);
    }
    /**
     * Setup the event listener for the close button.
     * @return {undefined}
     */ setupCloseEvent() {
        this.closeButton.addEventListener('click', this.handleCloseEvent.bind(this));
    }
    /**
     * Handle the event when our close button is clicked.
     * @return {undefined}
     */ handleCloseEvent() {
        this.trigger('dismissed');
        if (this.destroyOnDismiss) this.destroy();
        else this.hide();
        this.trigger('close');
    }
    /**
     * Set the colour of the component.
     * @return {undefined}
     */ setColor() {
        this.root.classList.add('is-' + this.color);
    }
    /**
     * Destroy the component, removing the event listener, interval and element.
     * @return {undefined}
     */ destroy() {
        super.destroy();
        if (this.closeButton) this.closeButton.removeEventListener('click', this.handleCloseEvent.bind(this));
        clearInterval(this.dismissInterval);
        this.parent.getElement().removeChild(this.root);
        this.parent = null;
        this.root = null;
        this.trigger('destroyed');
    }
}
exports.default = DismissableComponent;

},{"./core":"k7oCJ","./plugin":"1it6K","@parcel/transformer-js/src/esmodule-helpers.js":"ff6Nl"}],"1it6K":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _configBag = require("./ConfigBag");
var _configBagDefault = parcelHelpers.interopDefault(_configBag);
var _core = require("./core");
var _coreDefault = parcelHelpers.interopDefault(_core);
class Plugin {
    /**
     * Returns an object containing the default config for this plugin.
     * @returns {object} The default config object.
     */ static defaultConfig() {
        return {};
    }
    /**
     * Create a plugin.
     * @param {object} config The config for this plugin
     */ constructor(config = {}, root){
        config.root = root instanceof (0, _coreDefault.default) ? root._elem : root;
        this.config = new (0, _configBagDefault.default)({
            ...this.constructor.defaultConfig(),
            ...config
        });
        if (!root && !this.config.has('parent')) throw new Error('A plugin requires a root and/or a parent.');
        this.parent = this.config.get('parent', config.root ? config.root.parentNode : null);
        this._events = {};
    }
    on(event, callback) {
        if (!this._events.hasOwnProperty(event)) this._events[event] = [];
        this._events[event].push(callback);
    }
    trigger(event, data = {}) {
        if (!this._events.hasOwnProperty(event)) return;
        for(let i = 0; i < this._events[event].length; i++)this._events[event][i](data);
    }
    destroy() {
        (0, _coreDefault.default)(this.root).destroyData();
    }
}
exports.default = Plugin;

},{"./ConfigBag":"9NapV","./core":"k7oCJ","@parcel/transformer-js/src/esmodule-helpers.js":"ff6Nl"}],"9NapV":[function(require,module,exports,__globalThis) {
/**
 * Object to hold a plugin's configuration
 * @class ConfigBag
 * @since 0.11.0
 * @author Thomas Erbe <vizuaalog@gmail.com>
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class ConfigBag {
    constructor(initialConfig = []){
        if (typeof initialConfig !== 'object') throw new TypeError('initialConfig must be of type object.');
        this._items = initialConfig;
    }
    /**
     * Set a new config property
     * @param {string} key The config property's key
     * @param {mixed} value The config property's value
     */ set(key, value) {
        if (!key || !value) throw new Error('A key and value must be provided when setting a new option.');
        this._items[key] = value;
    }
    /**
     * Check if a key exists
     * @param {string} key
     * @returns {boolean}
     */ has(key) {
        if (!key) throw new Error('A key must be provided.');
        return this._items.hasOwnProperty(key) && this._items[key];
    }
    /**
     * Get a property by it's key. Returns the defaultValue if it doesn't exists
     * @param {string} key 
     * @param {mixed} defaultValue 
     * @returns {mixed}
     */ get(key, defaultValue = null) {
        if (defaultValue && !this.has(key)) {
            if (typeof defaultValue === 'function') return defaultValue();
            return defaultValue;
        }
        return this._items[key];
    }
}
exports.default = ConfigBag;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ff6Nl"}],"gkOBE":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @module Navbar
 * @since  0.1.0
 * @author  Thomas Erbe <vizuaalog@gmail.com>
 */ parcelHelpers.export(exports, "Navbar", ()=>Navbar);
var _core = require("../core");
var _coreDefault = parcelHelpers.interopDefault(_core);
var _plugin = require("../plugin");
var _pluginDefault = parcelHelpers.interopDefault(_plugin);
class Navbar extends (0, _pluginDefault.default) {
    /**
     * Handle parsing the DOMs data attribute API.
     * @param {HTMLElement} element The root element for this instance
     * @return {undefined}
     */ static parseDocument(context) {
        let elements = context.querySelectorAll('.navbar');
        (0, _coreDefault.default).each(elements, (element)=>{
            (0, _coreDefault.default)(element).navbar({
                sticky: element.hasAttribute('data-sticky') ? true : false,
                stickyOffset: element.hasAttribute('data-sticky-offset') ? element.getAttribute('data-sticky-offset') : 0,
                hideOnScroll: element.hasAttribute('data-hide-on-scroll') ? true : false,
                tolerance: element.hasAttribute('data-tolerance') ? element.getAttribute('data-tolerance') : 0,
                hideOffset: element.hasAttribute('data-hide-offset') ? element.getAttribute('data-hide-offset') : null,
                shadow: element.hasAttribute('data-sticky-shadow') ? true : false
            });
        });
    }
    /**
     * Returns an object containing the default config for this plugin.
     * @returns {object} The default config object.
     */ static defaultconfig() {
        return {
            sticky: false,
            stickyOffset: 0,
            hideOnScroll: false,
            tolerance: 0,
            hideOffset: null,
            shadow: false
        };
    }
    /**
     * Plugin constructor
     * @param  {Object} config The config object for this plugin
     * @return {this} The newly created plugin instance
     */ constructor(config, root){
        super(config, root);
        // Work out the parent if it hasn't been supplied as an option.
        if (this.parent === null) this.parent = this.config.get('root').parentNode;
        /**
         * The root navbar element.
         * @type {HTMLElement}
         */ this.root = this.config.get('root');
        /**
         * The element used for the trigger.
         * @type {HTMLElement}
         */ this.triggerElement = this.root.querySelector('.navbar-burger'), /**
         * The target element.
         * @type {HTMLELement}
         */ this.target = this.root.querySelector('.navbar-menu');
        /**
         * Should this navbar stick to the top of the page?
         * @type {boolean}
         */ this.sticky = !!this.config.get('sticky');
        /**
         * The offset in pixels before the navbar will stick to the top of the page
         * @type {number}
         */ this.stickyOffset = parseInt(this.config.get('stickyOffset'));
        /**
         * Should the navbar hide when scrolling? Note: this just applies a 'is-hidden-scroll' class.
         * @type {boolean}
         */ this.hideOnScroll = !!this.config.get('hideOnScroll');
        /**
         * The amount of tolerance required before checking the navbar should hide/show
         * @type {number}
         */ this.tolerance = parseInt(this.config.get('tolerance'));
        /**
         * Add a shadow when the navbar is sticky?
         * @type {boolean}
         */ this.shadow = !!this.config.get('shadow');
        /**
         * The offset in pixels before the navbar will be hidden, defaults to the height of the navbar
         * @type {number}
         */ this.hideOffset = parseInt(this.config.get('hideOffset', Math.max(this.root.scrollHeight, this.stickyOffset)));
        /**
         * The last scroll Y known, this is used to calculate scroll direction
         * @type {number}
         */ this.lastScrollY = 0;
        /**
         * Bind the relevant event handlers to this instance. So that we can remove them if needed
         */ this.handleScroll = this.handleScroll.bind(this);
        (0, _coreDefault.default)(this.root).data('navbar', this);
        this.registerEvents();
    }
    /**
     * Register all the events this module needs.
     * @return {undefined}
     */ registerEvents() {
        this.triggerElement.addEventListener('click', this.handleTriggerClick.bind(this));
        if (this.sticky) this.enableSticky();
    }
    /**
     * Handle the click event on the trigger.
     * @return {undefined}
     */ handleTriggerClick() {
        if (this.target.classList.contains('is-active')) {
            this.target.classList.remove('is-active');
            this.triggerElement.classList.remove('is-active');
        } else {
            this.target.classList.add('is-active');
            this.triggerElement.classList.add('is-active');
        }
    }
    /**
     * Handle the scroll event
     * @return {undefined}
     */ handleScroll() {
        this.toggleSticky(window.pageYOffset);
    }
    /**
     * Enable the sticky feature by attaching the scroll event.
     */ enableSticky() {
        window.addEventListener('scroll', this.handleScroll);
        this.root.setAttribute('data-sticky', '');
        this.sticky = true;
    }
    /**
     * Disable the sticky feature by removing the scroll event.
     */ disableSticky() {
        window.removeEventListener('scroll', this.handleScroll);
        this.root.removeAttribute('data-sticky');
        this.sticky = false;
    }
    /**
     * Enable hide on scroll. Also enable sticky if it's not already.
     */ enableHideOnScroll() {
        if (!this.sticky) this.enableSticky();
        this.root.setAttribute('data-hide-on-scroll', '');
        this.hideOnScroll = true;
    }
    /**
     * Disable hide on scroll, and show the navbar again if it's hidden.
     */ disableHideOnScroll() {
        this.root.removeAttribute('data-hide-on-scroll');
        this.hideOnScroll = false;
        this.root.classList.remove('is-hidden-scroll');
    }
    /**
     * Toggle the navbar's sticky state
     * @param {number} scrollY The amount of pixels that has been scrolled
     * @return {undefined}
     */ toggleSticky(scrollY) {
        if (scrollY > this.stickyOffset) {
            this.root.classList.add('is-fixed-top');
            document.body.classList.add('has-navbar-fixed-top');
            if (this.shadow) this.root.classList.add('has-shadow');
        } else {
            this.root.classList.remove('is-fixed-top');
            document.body.classList.remove('has-navbar-fixed-top');
            if (this.shadow) this.root.classList.remove('has-shadow');
        }
        if (this.hideOnScroll) {
            let scrollDirection = this.calculateScrollDirection(scrollY, this.lastScrollY);
            let triggeredTolerance = this.difference(scrollY, this.lastScrollY) >= this.tolerance;
            if (scrollDirection === 'down') {
                // only hide the navbar at the top if we reach a certain offset so the hiding is more smooth
                let isBeyondTopOffset = scrollY > this.hideOffset;
                if (triggeredTolerance && isBeyondTopOffset) this.root.classList.add('is-hidden-scroll');
            } else {
                // if scrolling up to the very top where the navbar would be by default always show it
                let isAtVeryTop = scrollY < this.hideOffset;
                if (triggeredTolerance || isAtVeryTop) this.root.classList.remove('is-hidden-scroll');
            }
            this.lastScrollY = scrollY;
        }
    }
    difference(a, b) {
        if (a > b) return a - b;
        else return b - a;
    }
    calculateScrollDirection(currentY, lastY) {
        return currentY >= lastY ? 'down' : 'up';
    }
}
(0, _coreDefault.default).registerPlugin('navbar', Navbar);
exports.default = (0, _coreDefault.default);

},{"../core":"k7oCJ","../plugin":"1it6K","@parcel/transformer-js/src/esmodule-helpers.js":"ff6Nl"}],"5nlGq":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @module Message
 * @since  0.1.0
 * @author  Thomas Erbe <vizuaalog@gmail.com>
 * @extends DismissableComponent
 */ parcelHelpers.export(exports, "Message", ()=>Message);
var _core = require("../core");
var _coreDefault = parcelHelpers.interopDefault(_core);
var _dismissableComponent = require("../dismissableComponent");
var _dismissableComponentDefault = parcelHelpers.interopDefault(_dismissableComponent);
class Message extends (0, _dismissableComponentDefault.default) {
    /**
     * Handle parsing the DOMs data attribute API.
     * @param {HTMLElement} element The root element for this plugin
     * @return {undefined}
     */ static parseDocument(context) {
        let elements = context.querySelectorAll('.message');
        (0, _coreDefault.default).each(elements, (element)=>{
            let closeBtn = element.querySelector('.delete');
            (0, _coreDefault.default)(element).message({
                body: null,
                closeButton: closeBtn,
                isDismissable: !!closeBtn,
                destroyOnDismiss: true,
                dismissInterval: element.hasAttribute('data-dismiss-interval') ? element.getAttribute('data-dismiss-interval') : null
            });
        });
    }
    /**
     * Plugin constructor
     * @param  {Object} config The config object for this plugin
     * @return {this} The newly created instance
     */ constructor(config, root){
        super('message', config, root);
        /**
         * The size of the message
         * @type {String} Possible values are small, normal, medium or large
         */ this.size = this.config.get('size');
        /**
         * The title of the message
         * @type {String}
         */ this.title = this.config.get('title');
        if (this.title) this.createMessageHeader();
        // TODO: Move this into the DismissableComponent class. Due to the required
        // changes between different components, we may need a way to trigger this
        // when the component is ready.
        if (this.isDismissable) {
            if (!this.config.get('closeButton')) this.prependCloseButton();
            this.setupCloseEvent();
        }
        if (this.size) this.setSize();
        (0, _coreDefault.default)(this.root).data('message', this);
        this.trigger('init');
    }
    /**
     * Create the message header
     * @return {undefined}
     */ createMessageHeader() {
        let header = document.createElement('div');
        header.classList.add('message-header');
        header.innerHTML = '<p>' + this.title + '</p>';
        this.title = header;
        this.root.insertBefore(this.title, this.root.firstChild);
    }
    /**
     * Set the size of the message.
     * @return {undefined}
     */ setSize() {
        this.root.classList.add('is-' + this.size);
    }
    /**
     * Insert the body text into the component.
     * @return {undefined}
     */ insertBody() {
        let body = document.createElement('div');
        body.classList.add('message-body');
        body.innerHTML = this.body;
        this.root.appendChild(body);
    }
    /**
     * Insert the close button before our content.
     * @return {undefined}
     */ prependCloseButton() {
        this.title.appendChild(this.closeButton);
    }
}
(0, _coreDefault.default).registerPlugin('message', Message);
exports.default = (0, _coreDefault.default);

},{"../core":"k7oCJ","../dismissableComponent":"kAgSo","@parcel/transformer-js/src/esmodule-helpers.js":"ff6Nl"}],"fRcJg":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @module Dropdown
 * @since  0.1.0
 * @author  Thomas Erbe <vizuaalog@gmail.com>
 */ parcelHelpers.export(exports, "Dropdown", ()=>Dropdown);
var _core = require("../core");
var _coreDefault = parcelHelpers.interopDefault(_core);
var _plugin = require("../plugin");
var _pluginDefault = parcelHelpers.interopDefault(_plugin);
class Dropdown extends (0, _pluginDefault.default) {
    /**
     * Handle parsing the DOMs data attribute API.
     * @param {HtmlElement} element The root element for this instance
     * @return {undefined}
     */ static parseDocument(context) {
        let elements = context.querySelectorAll('.dropdown');
        (0, _coreDefault.default).each(elements, (element)=>{
            (0, _coreDefault.default)(element).dropdown();
        });
    }
    /**
     * Plugin constructor
     * @param  {Object} config The config object for this plugin
     * @return {this} The newly created instance
     */ constructor(config, root){
        super(config, root);
        /**
         * The root dropdown element.
         * @type {HTMLElement}
         */ this.root = this.config.get('root');
        this.root.setAttribute('data-bulma-attached', 'attached');
        /**
         * The element to trigger when clicked.
         * @type {HTMLElement}
         */ this.triggerElement = this.root.querySelector('.dropdown-trigger');
        this.registerEvents();
        (0, _coreDefault.default)(this.root).data('dropdown', this);
        this.trigger('init');
    }
    /**
     * Register all the events this module needs.
     * @return {undefined}
     */ registerEvents() {
        this.triggerElement.addEventListener('click', this.handleTriggerClick.bind(this));
    }
    /**
     * Handle the click event on the trigger.
     * @return {undefined}
     */ handleTriggerClick() {
        if (this.root.classList.contains('is-active')) {
            this.root.classList.remove('is-active');
            this.trigger('close');
        } else {
            this.root.classList.add('is-active');
            this.trigger('open');
        }
    }
}
(0, _coreDefault.default).registerPlugin('dropdown', Dropdown);
exports.default = (0, _coreDefault.default);

},{"../core":"k7oCJ","../plugin":"1it6K","@parcel/transformer-js/src/esmodule-helpers.js":"ff6Nl"}],"31TTi":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @module Modal
 * @since  0.1.0
 * @author  Thomas Erbe <vizuaalog@gmail.com>
 */ parcelHelpers.export(exports, "Modal", ()=>Modal);
var _core = require("../core");
var _coreDefault = parcelHelpers.interopDefault(_core);
var _plugin = require("../plugin");
var _pluginDefault = parcelHelpers.interopDefault(_plugin);
class Modal extends (0, _pluginDefault.default) {
    /**
     * Handle parsing the DOM.
     * @param {HTMLElement} element The root element for this accordion
     * @return {undefined}
     */ static parseDocument() {}
    /**
     * Returns an object containing the default config for this plugin.
     * @returns {object} The default config object.
     */ static defaultConfig() {
        return {
            style: 'card',
            closable: true
        };
    }
    /**
     * Plugin constructor
     * @param  {Object} config The config object for this plugin
     * @return {this} The newly created plugin instance
     */ constructor(config, root){
        super(config, root);
        /** @param {string} */ this.style = this.config.get('style');
        /** @param {HTMLElement} */ this.root = this.config.get('root');
        if (!this.root.classList.contains('modal')) this.root.classList.add('modal');
        if (!this.parent) {
            if (!this.root.parentNode) {
                this.parent = document.body;
                this.parent.appendChild(this.root);
            } else this.parent = this.root.parentNode;
        } else this.parent.appendChild(this.root);
        /** @param {HTMLElement} */ this.background = (0, _coreDefault.default).findOrCreateElement('.modal-background', this.root);
        /** @param {HTMLElement} */ this.content = this.style === 'card' ? (0, _coreDefault.default).findOrCreateElement('.modal-card', this.root) : (0, _coreDefault.default).findOrCreateElement('.modal-content', this.root);
        /** @param {boolean} */ this.closable = this.config.get('closable');
        /** @param {string|null} */ this.body = this.config.get('body');
        /** @param {string|null} */ this.title = this.config.get('title');
        if (this.config.get('bodyUrl')) (0, _coreDefault.default).ajax(this.config.get('bodyUrl')).then((response)=>{
            this.body = response;
            this.buildModal();
        });
        else this.buildModal();
        (0, _coreDefault.default)(this.root).data('modal', this);
        this.trigger('init');
    }
    // Build the modal's HTML
    buildModal() {
        if (this.style === 'card') this.createCardStructure();
        else if (!this.content.innerHTML) this.content.innerHTML = this.body;
        if (this.closable) /** @param {HTMLElement} */ this.closeButton = this.style === 'card' ? (0, _coreDefault.default).findOrCreateElement('.delete', this.header, 'button') : (0, _coreDefault.default).findOrCreateElement('.modal-close', this.root, 'button');
        if (this.style === 'card') this.createButtons();
        this.setupEvents();
    }
    /**
     * Create the card style structure
     * @returns {void}
     */ createCardStructure() {
        /** @param {HTMLElement} */ this.header = (0, _coreDefault.default).findOrCreateElement('.modal-card-head', this.content, 'header');
        /** @param {HTMLElement} */ this.headerTitle = (0, _coreDefault.default).findOrCreateElement('.modal-card-title', this.header, 'p');
        if (!this.headerTitle.innerHTML) this.headerTitle.innerHTML = this.title;
        /** @param {HTMLElement} */ this.cardBody = (0, _coreDefault.default).findOrCreateElement('.modal-card-body', this.content, 'section');
        if (!this.cardBody.innerHTML) this.cardBody.innerHTML = this.body;
        /** @param {HTMLElement} */ this.footer = (0, _coreDefault.default).findOrCreateElement('.modal-card-foot', this.content, 'footer');
    }
    /**
     * Setup the events used by this modal.
     * @returns {void}
     */ setupEvents() {
        if (this.closable) {
            this.closeButton.addEventListener('click', this.close.bind(this));
            this.keyupListenerBound = (evt)=>this.keyupListener(evt);
            document.addEventListener('keyup', this.keyupListenerBound);
            this.background.addEventListener('click', this.close.bind(this));
        }
    }
    /**
     * Go through the provided buttons option and create the buttons.
     * @returns {void}
     */ createButtons() {
        var buttonsConfig = this.config.get('buttons', []);
        var modal = this;
        (0, _coreDefault.default).each(buttonsConfig, function(buttonConfig) {
            var button = (0, _coreDefault.default).createElement('button', buttonConfig.classes);
            button.innerHTML = buttonConfig.label;
            button.addEventListener('click', function(event) {
                buttonConfig.onClick(event);
            });
            modal.footer.appendChild(button);
        });
    }
    /**
     * Open the modal
     * @returns {void}
     */ open() {
        this.root.classList.add('is-active');
        document.documentElement.classList.add('is-clipped');
        this.trigger('open');
    }
    /**
     * Close the modal
     * @returns {void} 
     */ close() {
        this.root.classList.remove('is-active');
        document.documentElement.classList.remove('is-clipped');
        this.trigger('close');
    }
    keyupListener(event) {
        if (!this.root.classList.contains('is-active')) return;
        let key = event.key || event.keyCode;
        if (key === 'Escape' || key === 'Esc' || key === 27) this.close();
    }
    /**
     * Destroy this modal, unregistering element references and removing the modal.
     * @returns {void}
     */ destroy() {
        super.destroy();
        this.root.remove();
        this.parent = null;
        this.root = null;
        this.background = null;
        this.content = null;
        if (this.style === 'card') {
            this.header = null;
            this.headerTitle = null;
            this.cardBody = null;
            this.footer = null;
        }
        if (this.closable) {
            this.closeButton = null;
            document.removeEventListener('keyup', this.keyupListenerBound);
        }
        this.config.gets = [];
        this.trigger('destroyed');
    }
}
(0, _coreDefault.default).registerPlugin('modal', Modal);
exports.default = (0, _coreDefault.default);

},{"../core":"k7oCJ","../plugin":"1it6K","@parcel/transformer-js/src/esmodule-helpers.js":"ff6Nl"}],"e1rW1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @module Alert
 * @since  0.8.0
 * @author  Thomas Erbe <vizuaalog@gmail.com>
 */ parcelHelpers.export(exports, "Alert", ()=>Alert);
var _core = require("../core");
var _coreDefault = parcelHelpers.interopDefault(_core);
var _modal = require("./modal");
class Alert extends (0, _modal.Modal) {
    /**
     * Handle parsing the DOM.
     * @param {HTMLElement} element The root element for this accordion
     * @return {undefined}
     */ static parseDocument() {}
    /**
     * Returns an object containing the default config for this plugin.
     * @returns {object} The default config object.
     */ static defaultConfig() {
        return {
            type: 'info',
            title: '',
            body: '',
            confirm: 'Okay',
            cancel: null,
            style: 'card',
            parent: document.body,
            showHeader: true
        };
    }
    /**
     * Plugin constructor
     * @param  {Object} config The config object for this plugin
     * @return {this} The newly created plugin instance
     */ constructor(config, root){
        super(config, root);
        this.root.classList.add('alert');
        (0, _coreDefault.default)(this.root).data('alert', this);
        this.trigger('init');
        this.open();
    }
    /**
     * Create the alerts structure
     * @returns {void}
     */ createCardStructure() {
        if (this.config.get('showHeader')) {
            /** @param {HTMLElement} */ this.header = (0, _coreDefault.default).findOrCreateElement('.modal-card-head', this.content, 'header', [
                'modal-card-head',
                'has-background-' + this.config.get('type')
            ]);
            /** @param {HTMLElement} */ var textColor = this.config.get('type') == 'warning' ? 'black' : 'white';
            this.headerTitle = (0, _coreDefault.default).createElement('p', [
                'modal-card-title',
                'has-text-' + textColor
            ]);
            this.headerTitle.innerHTML = this.title;
            this.header.appendChild(this.headerTitle);
        }
        /** @param {HTMLElement} */ this.cardBody = (0, _coreDefault.default).findOrCreateElement('.modal-card-body', this.content, 'section');
        if (!this.cardBody.innerHTML) this.cardBody.innerHTML = this.body;
        /** @param {HTMLElement} */ this.footer = (0, _coreDefault.default).findOrCreateElement('.modal-card-foot', this.content, 'footer');
    }
    /**
     * Go through the provided buttons option and create the buttons.
     * @returns {void}
     */ createButtons() {
        var defaultButtonOptions = {
            close: true,
            destroy: true,
            onClick: function() {}
        };
        var confirmOptions = this.config.get('confirm');
        if (typeof confirmOptions === 'string') confirmOptions = {
            label: confirmOptions,
            classes: []
        };
        confirmOptions = {
            ...defaultButtonOptions,
            ...confirmOptions
        };
        var confirmButton = (0, _coreDefault.default).createElement('button', [
            'button',
            'is-' + this.config.get('type')
        ].concat(confirmOptions.classes));
        confirmButton.innerHTML = confirmOptions.label;
        confirmButton.addEventListener('click', (e)=>{
            confirmOptions.onClick(e);
            if (confirmOptions.close) this.close();
            if (confirmOptions.destroy) this.destroy();
        });
        this.footer.appendChild(confirmButton);
        if (this.config.get('cancel')) {
            var cancelOptions = this.config.get('cancel');
            if (typeof cancelOptions === 'string') cancelOptions = {
                label: cancelOptions,
                classes: []
            };
            cancelOptions = {
                ...defaultButtonOptions,
                ...cancelOptions
            };
            var cancelButton = (0, _coreDefault.default).createElement('button', [
                'button'
            ].concat(cancelOptions.classes));
            cancelButton.innerHTML = cancelOptions.label;
            cancelButton.addEventListener('click', (e)=>{
                cancelOptions.onClick(e);
                if (cancelOptions.close) this.close();
                if (cancelOptions.destroy) this.destroy();
            });
            this.footer.appendChild(cancelButton);
        }
    }
}
(0, _coreDefault.default).registerPlugin('alert', Alert);
exports.default = (0, _coreDefault.default);

},{"../core":"k7oCJ","./modal":"31TTi","@parcel/transformer-js/src/esmodule-helpers.js":"ff6Nl"}],"k8aez":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @module File
 * @since  0.1.0
 * @author  Thomas Erbe <vizuaalog@gmail.com>
 */ parcelHelpers.export(exports, "File", ()=>File);
var _core = require("../core");
var _coreDefault = parcelHelpers.interopDefault(_core);
var _plugin = require("../plugin");
var _pluginDefault = parcelHelpers.interopDefault(_plugin);
class File extends (0, _pluginDefault.default) {
    /**
     * Handle parsing the DOMs data attribute API.
     * @param {HTMLElement} element The root element for this plugin
     * @return {undefined}
     */ static parseDocument(context) {
        let elements = context.querySelectorAll('.file');
        (0, _coreDefault.default).each(elements, (element)=>{
            (0, _coreDefault.default)(element).file();
        });
    }
    /**
     * Plugin constructor
     * @param  {Object} config The config object for this plugin
     * @return {this} The newly created plugin instance
     */ constructor(config, root){
        super(config, root);
        /**
         * The root file element.
         * @type {HTMLElement}
         */ this.root = this.config.get('root');
        this.root.setAttribute('data-bulma-attached', 'attached');
        /**
         * The element to use as the trigger.
         * @type {HTMLELement}
         */ this.input = this.root.querySelector('input');
        /**
         * The element to show the file name.
         * @type {HTMLElement}
         */ this.filename = this.root.querySelector('.file-name');
        this.registerEvents();
        (0, _coreDefault.default)(this.root).data('file', this);
        this.trigger('init');
    }
    /**
     * Register all the events this module needs.
     * @return {undefined}
     */ registerEvents() {
        if (this.filename) this.input.addEventListener('change', this.handleTriggerChange.bind(this));
        this.root.addEventListener('dragover', (e)=>{
            e.preventDefault();
            this.addHoverClass();
        });
        this.root.addEventListener('dragleave', (e)=>{
            e.preventDefault();
            this.addHoverClass();
        });
        this.root.addEventListener('drop', (e)=>{
            e.preventDefault();
            this.removeHoverClass();
            this.input.files = e.dataTransfer.files;
        });
    }
    /**
     * Handle the click event on the trigger.
     * @param  {Object} event The event object
     * @return {undefined}
     */ handleTriggerChange(event) {
        if (event.target.files.length === 0) this.clearFileName();
        if (event.target.files.length === 1) this.setFileName(event.target.files[0].name);
        if (event.target.files.length > 1) this.setFileName(event.target.files.length + ' files');
        this.trigger('changed', event);
    }
    /**
     * Clear the file name element.
     * @return {undefined}
     */ clearFileName() {
        this.filename.innerHTML = '';
    }
    /**
     * Get the selected file's name
     * 
     * @returns {string}
     */ getFilename() {
        return this.filename.innerHTML;
    }
    /**
     * Set the text for the file name element.
     * @param {string} value The name of the file to update the label with
     * @return {undefined}
     */ setFileName(value) {
        this.filename.innerHTML = value;
    }
    /**
     * Add hover class to root element.
     * @return {undefined}
     */ addHoverClass() {
        this.root.classList.add('is-hovered');
    }
    /**
     * Remove hover class from root element.
     * @return {undefined}
     */ removeHoverClass() {
        this.root.classList.remove('is-hovered');
    }
}
(0, _coreDefault.default).registerPlugin('file', File);
exports.default = (0, _coreDefault.default);

},{"../core":"k7oCJ","../plugin":"1it6K","@parcel/transformer-js/src/esmodule-helpers.js":"ff6Nl"}],"jDngR":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @module Tabs
 * @since  0.4.0
 * @author  Thomas Erbe <vizuaalog@gmail.com>
 */ parcelHelpers.export(exports, "Tabs", ()=>Tabs);
var _core = require("../core");
var _coreDefault = parcelHelpers.interopDefault(_core);
var _plugin = require("../plugin");
var _pluginDefault = parcelHelpers.interopDefault(_plugin);
class Tabs extends (0, _pluginDefault.default) {
    /**
     * Handle parsing the DOMs data attribute API.
     * @param {HTMLElement} element The root element for this instance
     * @returns {undefined}
     */ static parseDocument(context) {
        let elements = context.querySelectorAll('.tabs-wrapper');
        (0, _coreDefault.default).each(elements, (element)=>{
            (0, _coreDefault.default)(element).tabs({
                hover: element.hasAttribute('data-hover') ? true : false
            });
        });
    }
    /**
     * Returns an object containing the default config for this plugin.
     * @returns {object} The default config object.
     */ static defaultConfig() {
        return {
            hover: false
        };
    }
    /**
     * Plugin constructor
     * @param  {Object} config The config object for this plugin
     * @return {this} The newly created instance
     */ constructor(config, root){
        super(config, root);
        /**
         * The root tab element
         * @param {HTMLElement}
         */ this.root = this.config.get('root');
        this.root.setAttribute('data-bulma-attached', 'attached');
        /**
         * Whether the tabs should be changed when the nav item is hovered over
         * @param {boolean}
         */ this.hover = this.config.get('hover');
        /**
         * The tab nav container
         * @param {HTMLElement}
         */ this.nav = this.findNav();
        /**
         * The tab's nav items
         * @param {HTMLElement[]}
         */ this.navItems = this.findNavItems();
        /**
         * The tab content container
         * @param {HTMLElement}
         */ this.content = this.findContent();
        /**
         * The tab's content items
         * @param {HTMLElement[]}
         */ this.contentItems = this.findContentItems();
        this.setupNavEvents();
        (0, _coreDefault.default)(this.root).data('tabs', this);
        this.trigger('init');
    }
    /**
     * Find the tab navigation container.
     * @returns {HTMLElement} The navigation container
     */ findNav() {
        return this.root.querySelector('.tabs');
    }
    /**
     * Find each individual tab item
     * @returns {HTMLElement[]} An array of the found items
     */ findNavItems() {
        return this.nav.querySelectorAll('li');
    }
    /**
     * Find the tab content container.
     * @returns {HTMLElement} The content container
     */ findContent() {
        return this.root.querySelector('.tabs-content');
    }
    /**
     * Find each individual content item
     * @returns {HTMLElement[]} An array of the found items
     */ findContentItems() {
        // We have to use the root here as the querySelectorAll API doesn't
        // support using '>' as the first character. So we have to have a
        // class to start with.
        return this.root.querySelectorAll('.tabs-content > ul > li');
    }
    /**
     * Setup the events to handle tab changing
     * @returns {void}
     */ setupNavEvents() {
        (0, _coreDefault.default).each(this.navItems, (navItem, index)=>{
            navItem.addEventListener('click', ()=>{
                this.setActive(index);
            });
            if (this.hover) navItem.addEventListener('mouseover', ()=>{
                this.setActive(index);
            });
        });
    }
    /**
     * Set the provided tab's index as the active tab.
     * 
     * @param {integer} index The new index to set
     */ setActive(index) {
        (0, _coreDefault.default).each(this.navItems, (navItem)=>{
            navItem.classList.remove('is-active');
        });
        (0, _coreDefault.default).each(this.contentItems, (contentItem)=>{
            contentItem.classList.remove('is-active');
        });
        this.navItems[index].classList.add('is-active');
        this.contentItems[index].classList.add('is-active');
    }
}
(0, _coreDefault.default).registerPlugin('tabs', Tabs);
exports.default = (0, _coreDefault.default);

},{"../core":"k7oCJ","../plugin":"1it6K","@parcel/transformer-js/src/esmodule-helpers.js":"ff6Nl"}]},["2eoIA","bB7Pu"], "bB7Pu", "parcelRequire94c2")

//# sourceMappingURL=admin.3d214d75.js.map
