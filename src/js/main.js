$(document).ready(function () {
    $('a[href]').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top - 120;
                $('html,body').animate({
                    scrollTop: targetOffset
                },
                300);
                return false;
            }
        }
    });

    $(window).scroll(function(e) {
        if($(this).scrollTop() > 508 ){
            console.log('sd')
            $('#menu').addClass('fixed')
        } else {
            $('#menu').removeClass('fixed')
        }
    })
});


    