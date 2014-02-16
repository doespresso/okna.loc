console.log("init");
//paceOptions = {
//    ajax:true,
//    restartOnRequestAfter:true,
//    restartOnPushState: true
//}
//yepnope.injectCss(['http://oknadvor.com/dev/component/switchery/switchery.css']);
//yepnope.injectCss(['http://oknadvor.com/dev/component/jQuery.mmenu/src/css/jquery.mmenu.all.css']);
yepnope.injectCss(['http://oknadvor.com/dev/component/magnific-popup/dist/magnific-popup.css']);
yepnope([
    {
        load:{
            'pace':'http://oknadvor.com/assets/js/vendor/pace/pace.min.js',
            'jquery':'http://oknadvor.com/assets/js/vendor/jquery/jquery.min.js',
            'underscore':'http://oknadvor.com/assets/js/vendor/underscore/underscore.min.js',
//            'backbone':'http://oknadvor.com/assets/js/vendor/backbone/backbone.min.js',
//            'marionette':'http://oknadvor.com/assets/js/vendor/backbone/marionette.min.js',
            'bootstrap':'http://oknadvor.com/assets/js/vendor/bootstrap/bootstrap.min.js',
            'swiper':'http://oknadvor.com/assets/js/vendor/swiper/swiper.min.js',
//            'swiper_progress':'http://oknadvor.com/assets/js/vendor/swiper/swiper_progress.min.js',
//            'switchery':'http://oknadvor.com/assets/js/vendor/switchery/switchery.min.js',
//            'mmenu':'http://oknadvor.com/dev/component/jQuery.mmenu/src/js/jquery.mmenu.min.all.js',
            'lightbox':'http://oknadvor.com/dev/component/magnific-popup/dist/jquery.magnific-popup.min.js',
//            'calc':'http://oknadvor.com/assets/js/app/calc.js',
        },
        callback:{
            'pace':function (url, result, key) {
                console.log("pace");
            },
            'jquery':function (url, result, key) {
                console.log("jquery loaded");
                $(document).ready(function(){
                    console.log("ready");
                    $(".show-callback").on("click",function(e){
                        e.preventDefault();
                        $("#callback-panel").fadeToggle(300);
                    });
                    $("#callback-form #my_tel").on("focus",function(){
                        console.log("focus");
                        $(this).removeClass("animated bounce");
                    });
                    $("#callback-form").on("submit",function(e){
                        e.preventDefault();
                        var form = $(this);
                        var ftel = form.find("#my_tel");
                        var tel = ftel.val();
                        if (tel.length<9) {
                            console.log(tel,"wrong");
                            ftel.addClass("animated bounce");
                        } else {
                        $.ajax({
                          type: "POST",
                          data: form.serialize(),
//                          dataType: "html",
                          url: form.attr("action"),
                          beforeSend: function() {
//                              $("#callback-panel .overlay").fadeIn();
                          },
                          success: function(response) {
//                              $("#callback-panel .overlay").fadeOut();
                              console.log("sent");
                              console.log(response);
                              if (response==''){
                                  console.log("ok");
                                  form.html("sent");
                              }
                          },
                        });
                    }
                    });
                });
            },
            'bootstrap':function (url, result, key) {
                console.log("bootstrap");
            },
//            'switchery':function (url, result, key) {
//                console.log("switch");
//                var swelem = document.querySelector('#switcher1');
//                var switcher = new Switchery(swelem);
//            },
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
//            'mmenu':function (url, result, key) {
//                console.log("menu");
//                $('#menu').mmenu({
//                    position:"left",
//                    zposition:"back",
//                    searchfield:true,
//                    counters:true
//                });
//            },
            'swiper':function () {
                "use strict";
                console.log("swiper");
                var swipers = Array();
                $('.swiper-promo').each(function (index) {
                    var s_pagination = '#slider-id-' + $(this).attr("id") + '-pagination';
                    var s_next = '#slider-id-' + $(this).attr("id") + '-next';
                    var s_prev = '#slider-id-' + $(this).attr("id") + '-prev';
                    var attrs = [];
                    for (var at in this.attributes) {
                        if ((this.attributes[at].name != undefined) && (this.attributes[at].value != undefined) && (this.attributes[at].name.indexOf("data-attr-") == 0)) {
//                        console.log("attr",this.attributes[at].value,this.attributes[at].name);
                            attrs[this.attributes[at].name.substring(10)] = this.attributes[at].value;
                        }
                    }
                    console.log(attrs);

                    var defaults = {
                        pagination:s_pagination,
                        paginationClickable:true,
                        autoplay: "5000",
                        loop:true,
                        watchActiveIndex:true,
                        mode:'horizontal',
                    };

                    console.log(_.extend({}, attrs));

                    var options  = _.extend(defaults, attrs);
                    console.log(options);
                    swipers[index] = $(this).swiper(options);

                    $(s_next).on('click', function (e) {
                        e.preventDefault()
                        swipers[index].swipePrev()
                    });
                    $(s_prev).on('click', function (e) {
                        e.preventDefault()
                        swipers[index].swipeNext()
                    });


                });


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

                var salesslider = new Swiper('.swiper-for-banners', {
                    watchActiveIndex:true,
                    speed:1500,
                    loop:true,
                    mode:'horizontal',
                    calculateHeight:true,
                    mousewheelControl:false,
                    keyboardControl:true,
                    paginationClickable:true,
                    pagination:'#sales-pagination',
                    autoplay:3000,
                });
                $('#sales-prev').on('click', function (e) {
                    e.preventDefault()
                    salesslider.swipePrev()
                });
                $('#sales-next').on('click', function (e) {
                    e.preventDefault()
                    salesslider.swipeNext()
                });

                var news_scroll = new Swiper('.news-list-scroll-hor', {
                    pagination:'#news-pagination',
                    paginationClickable:true,
//                    calculateHeight:true,
                    slidesPerView:'auto',
                    loop:true
                });

                $('#news-prev').on('click', function (e) {
                    e.preventDefault()
                    news_scroll.swipePrev()
                });
                $('#news-next').on('click', function (e) {
                    e.preventDefault()
                    news_scroll.swipeNext()
                });


            },
        }
    },

]


);