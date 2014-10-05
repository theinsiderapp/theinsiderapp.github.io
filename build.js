require.config({
    paths: {
        app: "js/default",
        bootstrap: "bower_components/bootstrap/dist/js/bootstrap",
        fullpage: "bower_components/fullpage.js/jquery.fullPage",
        imagesloaded: "bower_components/imagesloaded/imagesloaded",
        jquery: "bower_components/jquery/dist/jquery",
        "jquery.easing": "bower_components/jquery.easing/js/jquery.easing.min",
        modernizr: "bower_components/modernizr/modernizr",
        requirejs: "bower_components/requirejs/require"
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
});
