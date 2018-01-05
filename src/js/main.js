$(document).ready(function () {
    $('a[href]').click(function () {
      console.log('fasd')
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

    $(window).scroll(function() {
        
        if($('html').scrollTop() > 508 ){
            console.log('ok --->', $('html').scrollTop())
            $('#menu').addClass('fixed')
        } else {
            $('#menu').removeClass('fixed')
        }
    })
});
    