jQuery(function() {
    initAnimationButton();
    initmobileMenu();
    initFixedHeader();
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