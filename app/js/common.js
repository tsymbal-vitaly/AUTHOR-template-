jQuery(function() {
    initAnimationButton();
    initmobileMenu();
    initFixedHeader();
    initSlickGallery();
    initCustomHover();
});


//  Mobile menu button animation
function initAnimationButton() {
    var anchor = document.querySelectorAll('button');

    [].forEach.call(anchor, function (anchor) {
        var open = false;
        anchor.onclick = function (event) {
            event.preventDefault();
            if (!open) {
                this.classList.add('close');
                open = true;
            } else {
                this.classList.remove('close');
                open = false;
            }
        }
    });
}

//  Drop-down mobile menu
function initmobileMenu() {
    $('.navToggle').on('click', function () {
        $('.navlist').slideToggle(300, function () {
            if ($(this).css('display') === 'none') {
                $(this).removeAttr('style');
            }
        });
    });
}

//  Fixed header when scrolling a page
function initFixedHeader() {
    var $menu = $("header");

    $(window).scroll(function () {
        if ($(this).scrollTop() > 150 && $menu.hasClass("default")) {
            $menu.fadeOut('fast', function () {
                $(this).removeClass("default")
                    .addClass("fixed transbg")
                    .fadeIn('fast');
            });
        } else if ($(this).scrollTop() <= 150 && $menu.hasClass("fixed")) {
            $menu.fadeOut('fast', function () {
                $(this).removeClass("fixed transbg")
                    .addClass("default")
                    .fadeIn('fast');
            });
        }
    });
}

//  Slilck-slider Banner
function initSlickGallery() {
    $('.carousel').slick({
        autoplay: false,
        autoplaySpeed: 3000,
        fade: true,
        pauseOnHover: true,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: false,
        arrows: true,
        prevArrow:'<i class="fa fa-angle-left" aria-hidden="true"></i>',
        nextArrow:'<i class="fa fa-angle-right" aria-hidden="true"></i>' 
    });
}

//  Price hover
function initCustomHover() {
    var activeClass = 'active';
    $('.hover-box').each(function() {
        var holder = jQuery(this);
        var button = holder.find('.buy-now');
        button.hover(
        function() {
            holder.addClass(activeClass);
        }, 
        function() {
            holder.removeClass(activeClass);
        });
    })
}

