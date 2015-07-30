module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	if (process.env.NODE_ENV === 'development') {
	    __webpack_require__(1);
	}

	var path = __webpack_require__(5);
	var koa = __webpack_require__(6);
	var views = __webpack_require__(7);

	var app = koa();

	var viewPath = path.join(__dirname, 'views');

	app.use(views(viewPath, {
	    'default': 'hbs',
	    map: {
	        hbs: 'handlebars'
	    }
	}));

	app.use(regeneratorRuntime.mark(function callee$0$0() {
	    return regeneratorRuntime.wrap(function callee$0$0$(context$1$0) {
	        while (1) switch (context$1$0.prev = context$1$0.next) {
	            case 0:
	                context$1$0.next = 2;
	                return this.render('index', { name: 'World' });

	            case 2:
	            case 'end':
	                return context$1$0.stop();
	        }
	    }, callee$0$0, this);
	}));

	app.listen(3000);
	/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var webpack = __webpack_require__(2);
	var WebpackDevServer = __webpack_require__(3);
	var webpackConfig = __webpack_require__(4);
	var wpClientConfig = webpackConfig.client;
	var wpServerConfig = webpackConfig.server;
	var serverCompiler;
	var clientCompiler;
	var clientServer;

	function clearModuleCache() {
	    for (var module in __webpack_require__.c) {
	        if (__webpack_require__.c.hasOwnProperty(module)) {
	            if (! ~module.indexOf('/node_modules/')) {
	                delete __webpack_require__.c[module];
	            }
	        }
	    }
	}

	serverCompiler = webpack(wpServerConfig);

	serverCompiler.watch({}, function (err) {
	    if (err) {
	        console.error(err);
	        return;
	    }

	    clearModuleCache();
	    console.log('Compiled server, ready to reload');
	});

	clientCompiler = webpack(wpClientConfig);

	clientServer = new WebpackDevServer(clientCompiler, {
	    contentBase: './public/assets',
	    hot: true
	});

	clientServer.listen(3001, function () {
	    console.log('Webpack dev server listening on port 3001');
	});

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("webpack");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("webpack-dev-server");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	var path = __webpack_require__(5);

	var commonLoaders = [{ test: /\.jsx?$/, loader: 'babel?stage=0', exclude: /node_modules/ }];

	var assetsPath = module.exports.publicPath = path.join(__dirname, 'public', 'assets');
	var publicPath = '/assets/';

	module.exports = {
	    client: {
	        name: 'browser',
	        entry: {
	            app: './client/app.js'
	        },
	        output: {
	            path: assetsPath,
	            filename: '[name].js',
	            publicPath: publicPath
	        },
	        module: {
	            loaders: commonLoaders
	        }
	    },
	    server: {
	        name: 'server',
	        entry: './server/app.js',
	        target: 'node',
	        output: {
	            path: assetsPath,
	            filename: '../server.js',
	            publicPath: publicPath,
	            libraryTarget: 'commonjs2'
	        },
	        externals: /^[a-z\-0-9]+$/,
	        module: {
	            loaders: commonLoaders
	        }
	    }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("koa");

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("koa-views");

/***/ }
/******/ ]);