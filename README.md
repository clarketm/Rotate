# Rotate
The simple, easy-to-implement animation plugin to rotate icons, images, and elements.

## Getting Started

### Download and Setup

To use this plugin, include the [jQuery](https://jquery.com) library and the [Rotate.js](http://www.clarketravis.com/rotate) plugin before the closing `<body>` tag of your HTML document:

```html
<script src="jquery.js"></script>
<script src="rotate.js"></script>
```

### Install with Bower

```shell
$ bower install rotate.js
```

### Dependencies

##### Required:

[jQuery](https://jquery.com) (1.2.1 or higher)


## Usage

### JavaScript

To use the export plugin, just call:

```js
$("table").rotate();
```

You can also specify angles of rotation (in degrees).

```js
$("table").rotate(720);
```

Additional properties can be passed in to customize the behavior and timing of the animation.

```js
/* Defaults */
$("table").rotate(360, {                // animation rotation (degrees)
    duration: 1000,                     // [Number]animation duration
    easing: 'swing',                    // [String] easing function
    complete: function () { }           // [Function], completed callback
});
```

### Settings

Below are the plugin defaults.

```js
/* default filename if "id" attribute is set and undefined */
 $.fn.rotate.degrees = 360;

/* default class to style buttons when not using bootstrap  */
    $.fn.rotate.defaults = {
        duration: 1000,
        easing: 'swing',
        complete: function () {
        }
    };

```

### Browser Support

|  | Chrome | Firefox | IE *  | Opera | Safari |
| :------: | :------: | :-------: | :---: | :-----: | :------: |
| __Android__ * |    &#10003;   |    &#10003;    | - |   &#10003;   |  -   |
| __iOS__ * |    &#10003;   |  -    | - |   -   |   &#10003;    |
| **Mac OSX**|    &#10003;   |    &#10003;    | - |   &#10003;  |   &#10003;    |
| **Windows** |    &#10003;   |    &#10003;    | &#10003; |   &#10003;   |   &#10003;    |

*requires third-party dependencies

### Live Demo 
A live, interactive demo can be found here:
##### [www.clarketravis.com/tableexport](http://www.clarketravis.com/tableexport/#live-demo)

### License
[TableExport.js](http://www.clarketravis.com/tableexport) is licensed under the terms of the [MIT](http://opensource.org/licenses/mit-license.php) License

### Credits

* [John Resig](https://github.com/jeresig) - jQuery
