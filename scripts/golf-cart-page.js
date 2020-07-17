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
    
    const SPACE_ID = 'oo4yz13ylbb3';
    const ACCESS_TOKEN = 'f9e0e09a35ebd58e104234e7b9c1460462edc4ec1ef036237b9f72b31f7f39ac';

    const client = contentful.createClient({
        space: SPACE_ID,
        accessToken: ACCESS_TOKEN
    });

    const $activeImage = $('.golf-carts-photos .active');

    const $availableCarts = $('<div>');
    
    // client.getEntries()
    client.getAssets()
        .then((response) => {
            let items = response.items;
            if( items.length > 0 ){  // - has items
                $('.no-carts').hide();

                $.each(items,function(i) {  // -- for each item
                    const fields = this.fields;
                    const altTag = this.fields.file.title || 'Golf Cart For Sale';
                    let $cart = $('<img src="'+this.fields.file.url+'" class="cart" alt="'+this.fields.file.title+'"></img>');
                    $availableCarts.append($cart);
                }); // -- end each item

                $('.available-carts').append($availableCarts);

                const $info = $(
                    '<div class="info"><h3>Available Carts</h3><p>All carts are freshly serviced and ready to hit the course! Looking for a recreational ride? We can outfit any of these carts with flip-back seats, lights, lift-kits and more!</p></div>'
                );

                $availableCarts.prepend($info);
            // -- has items
            } else {
                initEmpty(); 
            }

        })
        .catch((error) => {
            console.log('error occured');
            console.log(error);
            initEmpty();
        });


    function initEmpty() {
        cycleImage();
        setInterval(function(){
            cycleImage();
        }, 3500);        
    }


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
            

});

}());

//# sourceMappingURL=golf-cart-page.js.map
