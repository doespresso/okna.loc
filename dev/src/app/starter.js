console.log("init");
paceOptions = {
    elements:false,
    restartOnRequestAfter:false
}
yepnope.injectCss(['http://okna.loc/dev/component/switchery/switchery.css']);
yepnope.injectCss(['http://okna.loc/dev/component/jQuery.mmenu/src/css/jquery.mmenu.all.css']);
yepnope([
    {
        load:{
            'pace':'http://okna.loc/assets/js/vendor/pace/pace.min.js',
            'jquery':'http://okna.loc/assets/js/vendor/jquery/jquery.min.js',
            'underscore':'http://okna.loc/assets/js/vendor/underscore/underscore.min.js',
//            'backbone':'http://okna.loc/assets/js/vendor/backbone/backbone.min.js',
//            'marionette':'http://okna.loc/assets/js/vendor/backbone/marionette.min.js',
            'bootstrap':'http://okna.loc/assets/js/vendor/bootstrap/bootstrap.min.js',
            'swiper':'http://okna.loc/assets/js/vendor/swiper/swiper.min.js',
            'swiper_progress':'http://okna.loc/assets/js/vendor/swiper/swiper_progress.min.js',
            'switchery':'http://okna.loc/assets/js/vendor/switchery/switchery.min.js',
            'mmenu':'http://okna.loc/dev/component/jQuery.mmenu/src/js/jquery.mmenu.min.all.js',
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

                $('#top-prev').on('click', function(e){
                    e.preventDefault()
                    fullslider.swipePrev()
                  });
                $('#top-next').on('click', function(e){
                    e.preventDefault()
                    fullslider.swipeNext()
                  });

                //////content tabs//////
                var contenttabs = new Swiper('#home-section-catalog .swiper-container', {
                    watchActiveIndex:true,
                    speed:1000,
                    loop:true,
                    mode:'horizontal',
                    keyboardControl:false,
                    calculateHeight:true,
                    onlyExternal:true,
//                    onSlideChangeEnd:function () {
//                        $("#homepage-catalog-nav .active").removeClass('active');
//                        $("#homepage-catalog-nav button").index(contenttabs.activeIndex).addClass('active');
//                    }
                });
                $("#homepage-catalog-nav button").on('touchstart mousedown', function (e) {
                    e.preventDefault();
                    $("#homepage-catalog-nav .active").removeClass('active');
                    $(this).addClass('active');
                    contenttabs.swipeTo($(this).index());
                });
                $("#homepage-catalog-nav button").click(function (e) {
                    e.preventDefault();
                });

                ///////news////////
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
        load:{
            'snapsvg':'http://okna.loc/assets/js/vendor/snap.svg/snapsvg.min.js',
        },
        complete:function () {
            console.log("snapsvg");

        }
    }
]


);