$(function() {

	var time = new Date("2016-10-15");
	// var time = 0
     $('#defaultCountdown').countdown({until: time, format: 'dHMS'});


	//Выравнивание блоков по высоте

	$(".date-plase__item").equalHeights();
    $(".parthners__item-img").equalHeights();
    $(".parthners__item-text").equalHeights();


	//Слайдер about-forum

	$(".about-forum__slider").owlCarousel({
		loop: true,
		autoplay: true,
		items: 1,
		nav:true,
		navText: '',
	});


	//Табы программы форума

	$('.forum-programm__tabs').on('click', '.forum-programm__tab-item:not(.active)', function() {
        $(this).addClass('active').siblings().removeClass('active');
        $('.forum-programm__content').find('.forum-programm__content-item').removeClass('active').eq($(this).index()).addClass('active');
    });


    //Слайдер comments

	$(".comments__slider").owlCarousel({
		loop: true,
		autoplay: true,
		items: 1,
		nav:true,
		navText: '',
	});

    // scroll To Id
    $(document).ready(function(){
        //$("a[href*='#']").mPageScroll2id();
        $("a[href='#forum']").mPageScroll2id();
        $("a[href='#programm']").mPageScroll2id();
        $("a[href='#speakers']").mPageScroll2id();
        $("a[href='#parthners']").mPageScroll2id();

    });

    // Анимация появления элементов
    $(window).ready(function() {
        var w = $(window).width();
        if(w > 768) {

            $(".date-plase__text-inner").animated("fadeInLeft");
            $(".is-countdown").animated("fadeInRight");
            $(".forum-programm__content-point").animated("flipInX");
            $(".about-forum__title h1").animated("slideInUp");
            $(".forum-programm__title h2").animated("slideInUp");
            $(".speakers__title h2").animated("slideInUp");
            $(".parthners__title h2").animated("slideInUp");
            $(".plase__title h2").animated("slideInUp");
            $(".speakers__item").animated("zoomIn");
            $(".parthners__item").animated("flipInY");
        };
    });


	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });


    //Мобильное меню

    $('.header__nav-button').click(function() {
        if ($('.header__nav').is(':visible')) {
            $('.header__nav-button i').removeClass('icon-cancel');
            $('.header__nav-button i').addClass('icon-menu-1');
        } else {
            $('.header__nav-button i').removeClass('icon-menu-1');
            $('.header__nav-button i').addClass('icon-cancel');
        };
        $('.header__nav').slideToggle(200);
        return false;
    })
    $(document).on('click', function(e) {
        var w = $(window).width();
        if(w < 992) {
            if (!$(e.target).closest(".header__nav-button").length) {
                if ($('.header__nav').is(':visible')) {
                    $('.header__nav').slideUp(200);
                    $('.header__nav-button i').removeClass('icon-cancel');
                    $('.header__nav-button i').addClass('icon-menu-1');
                }
            }
            e.stopPropagation();
        }
        
    });
    $(window).resize(function(){
        var w = $(window).width();
        if(w > 992 && $(".header__nav").is(':hidden')) {
            $('.header__nav').removeAttr('style');
        }
    });

    
	//Яндекс карта

	ymaps.ready(function () {
        var myMap = new ymaps.Map('map', {
                center: [57.6167795669827,39.867519500000014],
                zoom: 16,
                controls: ['zoomControl'],
                behaviors: ["drag", "dblClickZoom", "rightMouseButtonMagnifier", "multiTouch"]
            }, {
                searchControlProvider: 'yandex#search'
            });
            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                hintContent: '',
                balloonContent: ''
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'img/favicon/icon-map.png',
                // Размеры метки.
                iconImageSize: [25, 36],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-12.5, -36]
            });
        $(window).resize(function() {
            var w = $(window).width();
            if (w < 768) {
                myMap.behaviors.disable('drag');
            } else {
                myMap.behaviors.enable('drag');
            }
        });

        myMap.geoObjects.add(myPlacemark);
    });

    $(window).ready(function() {
        $("#preloader__img").fadeOut();
        $("#preloader").delay(200).fadeOut("slow");
    });

});
