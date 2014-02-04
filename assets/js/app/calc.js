(function ($) {


    Calc = new Backbone.Marionette.Application();

    /////////////////////////////////////////////////router
    var Route = Backbone.Marionette.AppRouter.extend({
      routes : {
        'resetstate' : 'resetstate',
        'storestate': 'storestate'
      },
      reset: function(){
      },
      storestate: function(){
      }
    });

    /////////////////////////////////////////////////initialize
    Calc.addInitializer(function (options) {
        /////load types
        var jqxhr = $.getJSON("http://okna.loc/php/getoptions.php", {
            tags:"mount rainier",
            tagmode:"any",
            format:"json"
        })
            .done(function (data) {
                products = new ProductTypes();
                _.each(data, function (product_type, key) {
//                    console.log(product_type.type);
//////add frames sections
                    _.each(product_type.vari, function(wsections,key){
//                        console.log(wsections ,"секционное", product_type.type);
                        sections = [];
                        for (var i=0; i<wsections; i++){
                            sections.push({'name':'section'+i, 'vopen':false, 'hopen':false, 'selected':false});
                        }
                       product = _.extend(new ProductType({'name':product_type.name + ' ' + wsections + ' секций','sections':sections}),product_type);
                       products.add(product);
                    });
                });
            })
            .fail(function (jqxhr, textStatus, error) {
                var err = textStatus + ", " + error;
                console.log("Request Failed: " + err);
            });

        Calc.options = {
            'current':"csds1"
        };

        console.log(Calc.options.current);

        Calc.addRegions({
            ///////regions
            type_selector:"#type_selector",
            type_selector_farme:"#type_selector_frame",
            type_constructor:"#type_constructor",
            order_options:'#order_options',
            order_total:'#order_total'
        });

        var route = new Route();
        Backbone.history.start();

////        console.log(product);
//        pr1 = new ProductType({"name":"prprprprp","type":"okno plastic"});
//        pr2 = new ProductType({"name":"1prprpasdasdasdrprp1","type":"okno plastic"});
//        pr1 = pr2;
//        vpr1 = new ProductTypeSelector({model:pr1});
//        vpr2 = new ProductTypeSelector({model:pr2});
//        console.log(pr1.toJSON(),pr2.toJSON());

        var type_selector = new ProductTypeSelectorItem({collection:products});

        Calc.type_selector.show();
    });




    ProductType = Backbone.Model.extend({});
    ProductTypes = Backbone.Collection.extend({model:ProductType});

    /////////type selector view
    ProductTypeSelectorItem = Backbone.Marionette.ItemView.extend({
        template:"#type_selector_template",
//        templateHelpers:{
//            showMessage:function () {
//                return this.name + " is the coolest!"
//            }
//        }
    });



    ProductTypeSelector = Backbone.Marionette.CompositeView.extend({

    });


}(jQuery));


$(document).ready(function () {
    $("#calculator").load("http://okna.loc/php/calc_form.html", function (response, status, xhr) {
        if (status == "error") {
            var msg = "Sorry but there was an error: ";
            $("#error").html(msg + xhr.status + " " + xhr.statusText);
        }
        $("#calculator").fadeIn(1000);
        Calc.start();
    });
});