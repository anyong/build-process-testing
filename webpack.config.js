var path = require('path');

var commonLoaders = [
    { test: /\.jsx?$/, loader: 'babel?stage=0', exclude: /node_modules/ }
];

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