let mix = require('laravel-mix');

mix.autoload({
    jquery: ['$', 'window.jQuery', 'jQuery'],
    moment: 'moment'
});

mix.setPublicPath('./static')
    .setResourceRoot('./')
    .js('assets/js/theme.js', './')
    .sass('assets/sass/theme.scss', './');