rmdir /S /Q bilberry-hugo-theme\assets\sass
del bilberry-hugo-theme\static\theme.css
del static\theme.css
mkdir bilberry-hugo-theme\assets\sass
copy /Y assets\sass\* bilberry-hugo-theme\assets\sass
cd bilberry-hugo-theme && node_modules\.bin\cross-env.cmd NODE_ENV=production node_modules/webpack/bin/webpack.js --no-progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js && cd .. && copy /Y bilberry-hugo-theme\static\theme.css static\theme.css