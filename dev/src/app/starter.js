console.log("init");
paceOptions = {
    elements:false,
    restartOnRequestAfter:false
}
yepnope.injectCss(['http://okna.loc/dev/component/switchery/switchery.css']);
yepnope.injectCss(['http://okna.loc/dev/component/jQuery.mmenu/src/css/jquery.mmenu.all.css']);
yepnope.injectCss(['http://okna.loc/dev/component/magnific-popup/dist/magnific-popup.css']);
yepnope([
    {
        load:{
            'pace':'http://okna.loc/assets/js/vendor/pace/pace.min.js',
            'jquery':'http://okna.loc/assets/js/vendor/jquery/jquery.min.js',
            'underscore':'http://okna.loc/assets/js/vendor/underscore/underscore.min.js',
            'backbone':'http://okna.loc/assets/js/vendor/backbone/backbone.min.js',
            'marionette':'http://okna.loc/assets/js/vendor/backbone/marionette.min.js',
            'bootstrap':'http://okna.loc/assets/js/vendor/bootstrap/bootstrap.min.js',
            'swiper':'http://okna.loc/assets/js/vendor/swiper/swiper.min.js',
//            'swiper_progress':'http://okna.loc/assets/js/vendor/swiper/swiper_progress.min.js',
            'switchery':'http://okna.loc/assets/js/vendor/switchery/switchery.min.js',
            'mmenu':'http://okna.loc/dev/component/jQuery.mmenu/src/js/jquery.mmenu.min.all.js',
            'lightbox':'http://okna.loc/dev/component/magnific-popup/dist/jquery.magnific-popup.min.js',
            'calc':'http://okna.loc/assets/js/app/calc.js',
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
                  delegate: 'a',
                  type: 'image',
                    gallery: {
                      enabled: true,
                      preload: [0,2],
                      navigateByImgClick: true,
                      arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button
                      tPrev: 'назад', // title for left button
                      tNext: 'вперед', // title for right button
                      tCounter: '<span>%curr% из %total%</span>' // markup of counter
                    },
                    image: {
                      titleSrc: 'title'
                    },
                    mainClass: 'mfp-fade',
                    removalDelay: 300,
                });
            },
            'mmenu':function (url, result, key) {
                console.log("menu");
                $('#menu').mmenu({
                    position: "left",
                    zposition: "back",
                    searchfield:true,
                    counters:true
                });
            },
            'swiper':function () {
                console.log("swiper");
                var fullslider = new Swiper('.swiper-full', {
                    watchActiveIndex:true,
                    speed:750,
                    loop:true,
                    mode:'horizontal',
                    mousewheelControl:true,
                    keyboardControl:true,
                    paginationClickable:true,
                    pagination:'#full-pagination',
//                    autoplay:1000,
                    onSlideChangeEnd:function () {
                        console.log(fullslider.params);
                    }
                });
////// full slider arrow
//                $('#top-prev').on('click', function(e){
//                    e.preventDefault()
//                    fullslider.swipePrev()
//                  });
//                $('#top-next').on('click', function(e){
//                    e.preventDefault()
//                    fullslider.swipeNext()
//                  });

/////// news
                var news_scroll = new Swiper('.news-list-scroll-hor', {
                    pagination:'#news-pagination',
                    paginationClickable:true,
//                  calculateHeight:true,
//                  slidesPerView: 3,
                    slidesPerView:'auto',
//                  loop: true
                });

                $('#news-prev').on('click', function(e){
                    e.preventDefault()
                    news_scroll.swipePrev()
                  });
                $('#news-next').on('click', function(e){
                    e.preventDefault()
                    news_scroll.swipeNext()
                  });


            },
        }
    },
    {
//        load:{
//            'snapsvg':'http://okna.loc/assets/js/vendor/snap.svg/snapsvg.min.js',
//        },
        complete:function () {
            console.log("snapsvg");

        }
    }
]


);