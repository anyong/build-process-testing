var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('../webpack');
var wpClientConfig = webpackConfig.client;
var wpServerConfig = webpackConfig.server;
var serverCompiler;
var clientCompiler;
var clientServer;

function clearModuleCache() {
    for (var module in require.cache) {
        if (!~module.indexOf('/node_modules/')) {
            delete require.cache[module];
        }
    }
}

serverCompiler = webpack(wpServerConfig);

serverCompiler.watch({}, function (err, stats) {
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