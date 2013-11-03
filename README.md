# AngularJS slider directive

- Features:
	- Allows arbitrarily many handles
	- Fully customizable styles. You may overwrite the default element classes and replace them with whatever you like.
	- Supports both increment and continuous sliders
	- Users may define their own values. You are not restricted to numbers only.
	- Users may define their own scaling functions. You are not restricted to linear sliders.
	- Users may rotate their sliders, allowing for vertical or slanted sliders.
	
## Demo
http://jackrabbitsgroup.github.io/angular-slider-directive/

## Dependencies
- required:
	- Angular
	- Jquery
	- Lesshat
- optional
	- None

See `bower.json` and `index.html` in the `gh-pages` branch for a full list / more details

## Install
1. download the files
	1. Bower
		1. add `"angular-slider-directive": "latest"` to your `bower.json` file then run `bower install` OR run `bower install angular-slider-directive`
2. include the files in your app
	1. `slider-directive.min.js`
	2. `slider-directive.less`
3. include the module in angular (i.e. in `app.js`) - `jackrabbitsgroup.angular-slider-directive`

See the `gh-pages` branch, files `bower.json` and `index.html` for a full example.


## Documentation
See the `slider-directive.js` file top comments for usage examples and documentation
https://github.com/jackrabbitsgroup/angular-slider-directive/blob/master/slider-directive.js