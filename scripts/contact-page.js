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

jQuery(document).ready(function($) {
    menuToggleInit();
});

}());

//# sourceMappingURL=contact-page.js.map
