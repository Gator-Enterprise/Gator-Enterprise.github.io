(function () {
'use strict';

function menuToggleInit(){
    $('#menu-toggle').click(function(){
        $(this).toggleClass('is-active');
        if( $(this).hasClass('is-active') ){
            $('.mobile-menu-items').addClass('show');
        } else {
            $('.mobile-menu-items').removeClass('show');
        }
    });
}

// ==================================================
// fancyBox v3.0.47
//
// Licensed GPLv3 for open source use
// or fancyBox Commercial License for commercial use
//
// http://fancyapps.com/fancybox/
// Copyright 2017 fancyApps
//
// ==================================================

jQuery(document).ready(function($) {
    menuToggleInit();
    var $activeImage = $('.golf-carts-photos .active');

    function cycleImage() {
        $('.golf-carts-photos img').removeClass('active');
        var $nextImage = $activeImage.next().length > 0 ? $activeImage.next() : $('.golf-carts-photos img:first');
        $activeImage.addClass('active');
        $activeImage.removeClass('next');
        $activeImage.removeClass('uninvolved');

        $nextImage.addClass('next');
        $nextImage.removeClass('uninvolved');

        $activeImage = $nextImage;
    }


        setInterval(function(){
            cycleImage();
        }, 3000);

});

}());

//# sourceMappingURL=golf-cart-page.js.map
