console.log("init");
paceOptions = {
    elements:false,
    restartOnRequestAfter:false
}
yepnope.injectCss(['http://oknadvor.com/dev/component/switchery/switchery.css']);
yepnope.injectCss(['http://oknadvor.com/dev/component/jQuery.mmenu/src/css/jquery.mmenu.all.css']);
yepnope.injectCss(['http://oknadvor.com/dev/component/magnific-popup/dist/magnific-popup.css']);
yepnope([
    {
        load:{
            'pace':'http://oknadvor.com/assets/js/vendor/pace/pace.min.js',
            'jquery':'http://oknadvor.com/assets/js/vendor/jquery/jquery.min.js',
//            'underscore':'http://oknadvor.com/assets/js/vendor/underscore/underscore.min.js',
//            'backbone':'http://oknadvor.com/assets/js/vendor/backbone/backbone.min.js',
//            'marionette':'http://oknadvor.com/assets/js/vendor/backbone/marionette.min.js',
            'bootstrap':'http://oknadvor.com/assets/js/vendor/bootstrap/bootstrap.min.js',
            'swiper':'http://oknadvor.com/assets/js/vendor/swiper/swiper.min.js',
//            'swiper_progress':'http://oknadvor.com/assets/js/vendor/swiper/swiper_progress.min.js',
            'switchery':'http://oknadvor.com/assets/js/vendor/switchery/switchery.min.js',
            'mmenu':'http://oknadvor.com/dev/component/jQuery.mmenu/src/js/jquery.mmenu.min.all.js',
            'lightbox':'http://oknadvor.com/dev/component/magnific-popup/dist/jquery.magnific-popup.min.js',
//            'calc':'http://oknadvor.com/assets/js/app/calc.js',
        },
        callback:{
            'pace':function (url, result, key) {
                console.log("pace");
            },
            'jquery':function (url, result, key) {
                console.log("jquery loaded");
            },
            'switchery':function (url, result, key) {
                console.log("switch");
                var swelem = document.querySelector('#switcher1');
                var switcher = new Switchery(swelem);
            },
            'lightbox':function (url, result, key) {
                console.log("lightbox");
                $('.gallery').magnificPopup({
                    delegate:'a',
                    type:'image',
                    gallery:{
                        enabled:true,
                        preload:[0, 2],
                        navigateByImgClick:true,
                        arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button
                        tPrev:'назад', // title for left button
                        tNext:'вперед', // title for right button
                        tCounter:'<span>%curr% из %total%</span>' // markup of counter
                    },
                    image:{
                        titleSrc:'title'
                    },
                    mainClass:'mfp-fade',
                    removalDelay:300,
                });
            },
            'mmenu':function (url, result, key) {
                console.log("menu");
                $('#menu').mmenu({
                    position:"left",
                    zposition:"back",
                    searchfield:true,
                    counters:true
                });
            },
            'swiper':function () {
                "use strict";
                console.log("swiper");
                var swipers = Array();
                $('.swiper-promo').each(function (index) {
                    var sid = $(this).attr("id");
                    var s_pagination = '#slider-id-'+sid+'-pagination';
                    var at = this.attributes;
                    console.log(at);
                    var arr = [];
                    for (var key in at) {
                        var aname = at[key].nodeName;
                        console.log(aname);
                  			if ((aname != undefined) && (aname.indexOf('attr-') == 0)) {
                  				arr.push(at[key].name + ' = ' + at[key].value);
                  			}
                  		}
                    console.log(arr);
                    swipers[index] = $(this).swiper({
                        pagination:s_pagination
                    });
//                    swipers[index].
                });
console.log(swipers);

//                var fullslider = $('.swiper-full').swiper({
//                    watchActiveIndex:true,
//                    speed:2000,
//                    loop:true,
//                    mode:'horizontal',
//                    mousewheelControl:true,
//                    keyboardControl:true,
//                    paginationClickable:true,
//                    pagination:'#full-pagination',
//                    autoplay:5000,
//                });
//                $('#top-prev').on('click', function (e) {
//                    e.preventDefault()
//                    fullslider.swipePrev()
//                });
//                $('#top-next').on('click', function (e) {
//                    e.preventDefault()
//                    fullslider.swipeNext()
//                });

//                var promoslider = new Swiper('.swiper-promo', {
//                    watchActiveIndex:true,
//                    speed:2000,
//                    loop:true,
//                    mode:'vertical',
////                    mousewheelControl:true,
//                    keyboardControl:true,
//                    paginationClickable:true,
//                    pagination:'#promo-pagination',
//                    autoplay:5000,
//                });
//                $('#promo-prev').on('click', function (e) {
//                    e.preventDefault()
//                    promoslider.swipePrev()
//                });
//                $('#promo-next').on('click', function (e) {
//                    e.preventDefault()
//                    promoslider.swipeNext()
//                });

//                var salesslider = new Swiper('.swiper-for-banners', {
//                    watchActiveIndex:true,
//                    speed:1500,
//                    loop:true,
//                    mode:'horizontal',
//                    calculateHeight:true,
//                    mousewheelControl:true,
//                    keyboardControl:true,
//                    paginationClickable:true,
//                    pagination:'#sales-pagination',
//                    autoplay:3000,
//                });
//                $('#sales-prev').on('click', function (e) {
//                    e.preventDefault()
//                    salesslider.swipePrev()
//                });
//                $('#sales-next').on('click', function (e) {
//                    e.preventDefault()
//                    salesslider.swipeNext()
//                });

//                var news_scroll = new Swiper('.news-list-scroll-hor', {
//                    pagination:'#news-pagination',
//                    paginationClickable:true,
//                    calculateHeight:true,
//                    slidesPerView:'auto',
//                    loop:true
//                });
//
//                $('#news-prev').on('click', function (e) {
//                    e.preventDefault()
//                    news_scroll.swipePrev()
//                });
//                $('#news-next').on('click', function (e) {
//                    e.preventDefault()
//                    news_scroll.swipeNext()
//                });


            },
        }
    },

]


);