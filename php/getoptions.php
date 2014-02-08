<?php

$cart = array(
    "orderID" => 12345,
    "shopperName" => "Ваня Иванов",
    "shopperEmail" => "ivanov@example.com",
    "contents" => array(
        array(
            "productID" => 34,
            "productName" => "Супер товар",
            "quantity" => 1
        ),
        array(
            "productID" => 56,
            "productName" => "Чудо товар",
            "quantity" => 3
        )
    ),
    "orderCompleted" => true
);


$jsondata = array(
    array(
        "type" => "Пластиковые окна",
        "name" => "Оконный блок PLASTIC",
        "min_w" => 40,
        "max_w" => 300,
        "min_h" => 40,
        "max_h" => 200,
        "def_w" => 200,
        "def_h" => 150,
        "def_price" => 2000,
        "vari" => array(
            array(
                "name" => "окно простое",
                "sections" => array(0, 1, 1, 1),
                "selected" => "selected"
            ),
            array(
                "name" => "окно простое c дверью",
                "sections" => array(1, 0, 3, 5, 6, 7)
            ),
            array(
                "name" => "окно простое c дверью 1",
                "sections" => array(1, 0, 3, 5, 7)
            )
        ),
        "section_width" => array(20, 200),
        "section_init_width" => 80,
        "section_height" => array(20, 250),
        "section_init_height" => 150,
        "setka" => false,
        "sun" => false,
    ),
    array(
        "type" => "Деревянные окна",
        "name" => "Оконный блок PLASTIC",
        "min_w" => 40,
        "max_w" => 300,
        "min_h" => 40,
        "max_h" => 200,
        "def_w" => 200,
        "def_h" => 150,
        "def_price" => 2000,
        "vari" => array(
            array(
                "name" => "окно простое",
                "sections" => array(0, 1, 1, 1),
                "selected" => "selected"
            ),
            array(
                "name" => "окно простое c дверью",
                "sections" => array(1, 0, 3, 5, 6, 7)
            ),
            array(
                "name" => "окно простое c дверью 1",
                "sections" => array(1, 0, 3, 5, 7)
            )
        ),
        "section_width" => array(20, 200),
        "section_init_width" => 80,
        "section_height" => array(20, 250),
        "section_init_height" => 150,
        "setka" => false,
        "sun" => false,
    ),

);


echo json_encode($jsondata);

?>