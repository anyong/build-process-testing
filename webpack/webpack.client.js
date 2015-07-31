var base = require('./webpack.base');

var clientConfig = {
    name: 'browser',
    entry: {
        app: './client/app.js'
    },
    output: {
        path: base.paths.assetAbs,
        filename: '[name].js',
        publicPath: base.paths.assetRel
    },
    module: {
        loaders: base.loaders.cat('babel')
    }
};

module.exports = clientConfig;