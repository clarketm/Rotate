/*!
 * Rotate.js v1.0.0 (http://www.clarketravis.com)
 * Copyright 2015 Travis Clarke
 * Licensed under the MIT license
 */

;(function (window, $, undefined) {

    $.fn.rotate = function (degrees, options) {

        var settings = $.extend({}, $.fn.rotate.defaults, options);
        degrees = degrees || $.fn.rotate.degrees;

        return this.each(function (i, e) {
            settings.step = function (now) {
                $.style(e, 'transform', 'rotate(' + now + 'deg)');
            };
            $({deg: 0}).animate({deg: degrees}, settings);
        });

    };

    $.fn.rotate.degrees = 360;

    $.fn.rotate.defaults = {
        duration: 1000,
        easing: 'swing',
        complete: function () {
        }
    };


})(window, jQuery);
