[![Build Status](https://travis-ci.org/clarketm/Rotate.svg?branch=master)](https://travis-ci.org/clarketm/Rotate)
# Rotate
The simple, easy-to-implement animation plugin to rotate icons, images, and elements.

## Getting Started

### Download and Setup

To use this plugin, include the [jQuery](https://jquery.com) library and the [Rotate.js](https://www.travismclarke/rotate) plugin before the closing `<body>` tag of your HTML document:

```html
<script src="jquery.js"></script>
<script src="rotate.js"></script>
```

### Install with Bower

```shell
$ bower install rotate.js
```

### Install with npm

```shell
$ npm install rotate-icon
```

### Dependencies

##### Required:

[jQuery](https://jquery.com) (1.2.1 or higher)


## Usage

### JavaScript

To use the export plugin, just call:

```js
$("#my-selector").rotate();
```

You can also specify an angle of rotation (in degrees).

```js
$("#my-selector").rotate(720);
```

Additional properties can be passed in to customize the timing and overall behavior of the animation.

```js
/* Defaults */
$("#my-selector").rotate(360, {         // [Number] animation rotation (degrees)
    duration: 1000,                     // [Number] animation duration
    easing: 'swing',                    // [String] easing function
    complete: function () { }           // [Function] completed callback
});
```

### Settings

Below are the plugin defaults.

```js
/* default animation rotation (degrees) */
 $.fn.rotate.degrees = 360;

/* default duration, easing, and completed callback  */
    $.fn.rotate.defaults = {
        duration: 1000,
        easing: 'swing',
        complete: function () {
        }
    };
```


### Browser Support

|             |  Chrome  | Firefox  |    IE    |   Opera  |  Safari  |
| :---------: | :------: | :------: | :------: | :-----:  | :------: |
| __Android__ | &#10003; | &#10003; | &#10003; | &#10003; | &#10003; |
| __iOS__     | &#10003; | &#10003; | &#10003; | &#10003; | &#10003; |
| **Mac OSX** | &#10003; | &#10003; | &#10003; | &#10003; | &#10003; |
| **Windows** | &#10003; | &#10003; | &#10003; | &#10003; | &#10003; |


### Live Demo 
A live, interactive demo can be found here:
##### [www.travismclarke.com](https://www.travismclarke.com/rotate)

### License
[Rotate.js](https://www.travismclarke.com) is licensed under the terms of the [MIT](http://opensource.org/licenses/mit-license.php) License

### Credits

* [John Resig](https://github.com/jeresig) - jQuery
