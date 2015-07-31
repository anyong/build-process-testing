var path = require('path');
var base = require('./webpack.base');

var serverConfig = {
    name: 'server',
    entry: './server/app.js',
    target: 'node',
    output: {
        path: base.paths.assetAbs,
        filename: '../server.js',
        publicPath: base.paths.assetRel,
        libraryTarget: 'commonjs2'
    },
    externals: /^[a-z\-0-9]+$/,
    module: {
        loaders: base.loaders.cat('babel')
    }
};

module.exports = serverConfig;