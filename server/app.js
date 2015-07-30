if (process.env.NODE_ENV === 'development') {
    require('./builder');
}

var path = require('path');
var koa = require('koa');
var views = require('koa-views');

var app = koa();

var viewPath = path.join(__dirname, 'views');
app.use(views(viewPath, {
    default: 'hbs',
    map: {
        hbs: 'handlebars'
    }
}));

app.use(function* () {
    yield this.render('index', {name: 'World'});
});

app.listen(3000);