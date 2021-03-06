jQuery(function() {
    initAnimationButton();
    initmobileMenu();
    initFixedHeader();
    initSlickslider();
    initCustomHover();
    initScrollingpage();
    initScrollspy();
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

//  Slider Banner
function initSlickslider(){
  $('.banner-carousel').slick({
    autoplay: false,
    autoplaySpeed: 3000,
    fade: true,
    pauseOnHover: true,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    arrows: true,
    prevArrow:'<img class="arrow-left" src="img/left.png" alt="left">',
    nextArrow:'<img class="arrow-right" src="img/right.png" alt="right">' 
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

//  Smooth page scrolling
function initScrollingpage() {
    $("#menu").on("click", "a", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1500);
    });
}

//  scrollspy
function initScrollspy() {
    const nav = document.querySelector('.navlist');
    const navItems = nav.querySelectorAll('a');
    const sections = document.querySelectorAll('.scroll-section');

    function scrollSpy(e) {
        sections.forEach(section => {
            if (window.scrollY >= section.offsetTop) {
                let id = section.getAttribute('id');
                navItems.forEach(item => {
                    if (item.getAttribute('href').slice(1) === id) {
                        item.classList.add('is-active');
                    } else {
                        item.classList.remove('is-active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', scrollSpy);
}

