var path = require('path');


var baseLoaders = {
    babel: { test: /\.jsx?$/, loader: 'babel?stage=0', exclude: /node_modules/ }
};

function loaderConcat(reqLoaders) {
    if (typeof reqLoaders === 'string') {
        reqLoaders = [reqLoaders];
    }

    var catLoaders = [];

    reqLoaders.forEach(function (ldr) {
        if (baseLoaders.hasOwnProperty(ldr)) {
            catLoaders = catLoaders.concat(baseLoaders[ldr]);
        }
    });

    return catLoaders;
}

module.exports.loaders = {
    cat: loaderConcat
};

module.exports.paths = {
    assetAbs: path.join(__dirname, '..', 'public', 'assets'),
    assetRel: '/assets/'
};