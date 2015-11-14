# unistyle-loader
A Webpack Loader for Unistyle

## Usage

[Using loaders](http://webpack.github.io/docs/using-loaders.html)
[Unistyle](https://www.npmjs.com/package/unistyle)

Example loader config:

``` javascript
{ 
	test: /\.css.js$/,
	loader: 'style-loader!css-loader!unistyle-loader!babel-loader'
}
```

Or inline:

``` javascript
require("style!css!unistyle!babel!./file.css.js")
```