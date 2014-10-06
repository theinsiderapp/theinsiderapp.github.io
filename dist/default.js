/**
 * Created by avaid on 9/8/14.
 */

requirejs.config({
    baseUrl: "./dist",
    paths: {
        app: "default",
        jquery: "jquery.min",
        bootstrap: "bootstrap/js/bootstrap.min",
        slimscroll: "jquery.slimscroll.min",
        imagesloaded: "imagesloaded",
        modernizr: "modernizr",
        fullpage: "jquery.fullPage.min",
        eventEmitter: "EventEmitter",
        eventie: "eventie",
        requirejs: "require",
        "jquery.easing": "jquery.easing.min"
    },
    shim: {
        bootstrap: [
            "jquery"
        ],
        fullpage: [
            "jquery"
        ],
        easing: [
            "jquery"
        ]
    },
    packages: [

    ]
})

define(['jquery', 'bootstrap', 'fullpage', 'imagesloaded', 'jquery.easing'], function ($) {
    $(document).ready(function () {
        $('#preload').imagesLoaded( function() {
            // images have loaded
        });

        $('#content').fullpage({
            verticalCentered: true,
            easing: 'easeOutBack',
            navigation: true,
            navigationPosition: 'right',
            css3: false
        });


        $('#gotoSection2').click(function () {
            $('#fp-nav li:nth-child(2) a').click();
            return false;
        });
    });
})