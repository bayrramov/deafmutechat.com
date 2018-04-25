(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {

        //Slider height
        var WindHeight = $(window).height(),
            sliderArea = $('.slider-area');

        sliderArea.css('height', WindHeight);

        if ($.fn.slick) {

            //Hero Area Slider
            sliderArea.slick({
                autoplay: true,
                autoplaySpeed: 10000,
                speed: 600,
                slidesToShow: 1,
                slidesToScroll: 1,
                pauseOnHover: false,
                dots: true,
                pauseOnDotsHover: true,
                cssEase: 'linear',
                // fade:true,
                draggable: true,
                prevArrow: '<button class="PrevArrow"></button>',
                nextArrow: '<button class="NextArrow"></button>',
            });

            //Brands Logos Slider
            $('.partners-logo-wrap').slick({
                slidesToShow: 6,
                slidesToScroll: 1,
                autoplay: false,
                autoplaySpeed: 2000,
                responsive: [

                    {
                        breakpoint: 769,
                        settings: {
                            slidesToShow: 4,
                            arrows: false
                        }
                },
                    {
                        breakpoint: 320,
                        settings: {
                            slidesToShow: 1,
                            arrows: false
                        }
                },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            arrows: false
                        }
                }
              ]
            });

            //Clients Reviews Slider
            $('.clients-reviews-wrap').slick({
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                arrows: true,
                prevArrow: '<i class="testi-nav icofont icofont-thin-left"></i>',
                nextArrow: '<i class="testi-nav icofont icofont-thin-right"></i>',
                responsive: [

                    {
                        breakpoint: 769,
                        settings: {
                            slidesToShow: 1,
                            arrows: false
                        }
                },
                    {
                        breakpoint: 320,
                        settings: {
                            slidesToShow: 1,
                            arrows: false
                        }
                },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            arrows: false
                        }
                }
              ]
            });

        }

        //Menu Sticky
        if ($.fn.sticky) {
            $('.header-area').sticky();
        }

        $('.nav.navbar-nav').on('click', function () {
            $('.navbar-collapse').removeClass('in');
        });

        // Projects Gallery
        if ($.fn.isotope) {

            var projectsWrap = $(".projects-wrap"),
                projectLi = $('ul.projects-filter li');

            projectsWrap.isotope({
                itemSelector: '.sin-project',
                layoutMode: 'fitRows',
            });

            projectLi.on('click', function () {

                projectLi.removeClass("active");
                $(this).addClass("active");

                var selector = $(this).attr('data-filter');
                projectsWrap.isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false,
                    }
                });
                return false;
            });
        }

        //Fancy Box
        if ($.fn.fancybox) {
            $(".fancybox").fancybox({
                helpers: {
                    title: {
                        type: 'float'
                    }
                }
            });
        }

        // jQuery scroll psy
        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 95
        });

        //scroll
        var scrollTop = $(".scrollTop");
        $(window).scroll(function () {
            // declare variable
            var topPos = $(this).scrollTop();

            // if user scrolls down - show scroll to top button
            if (topPos > 100) {
                $(scrollTop).css("opacity", "1");

            } else {
                $(scrollTop).css("opacity", "0");
            }

        }); // scroll END

        //Click event to scroll to top
        $(scrollTop).on('click', function () {
            $('html, body').animate({
                scrollTop: 0
            }, 800);
            return false;

        }); // click() scroll top EMD


        // jQuery smooth scroll
        $('li.smooth-scroll a').bind('click', function (event) {
            var $anchor = $(this);
            var headerH = '75';

            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
            }, 1200, 'easeInOutExpo');

            event.preventDefault();
        });

    });


    //Preloader JS
    jQuery(window).on('load', function () {
        $('.preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });




}(jQuery));