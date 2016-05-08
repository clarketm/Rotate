/*!
 * Rotate.js v1.0.3 (https://www.travismclarke.com)
 * Copyright 2015 Travis Clarke
 * Licensed under the MIT license
 */

;(function (window, $, undefined) {
    "use strict";

    $.fn.rotate = function (degrees, options) {

        var settings = $.extend({}, $.fn.rotate.defaults, options),
            endDeg = 0;

        degrees = degrees || $.fn.rotate.degrees;

        return this.each(function (i, el) {
            if ($(el).is(':animated')) { return;}

            endDeg = (el.deg || endDeg) + degrees;
            settings.step = function (now) {
                $(el).css('transform', 'rotate(' + now + 'deg)');
            };

            $(el).animate({deg: endDeg}, settings);
        });

    };

    $.fn.rotate.degrees = 360;

    $.fn.rotate.defaults = {
        duration: 1000,
        easing: 'swing',
        complete: function () { }
    };


})(window, jQuery);
