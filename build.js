({  appDir: "js",
    baseUrl: ".",
    paths: {
        app: "default",
        jquery: "../bower_components/jquery/dist/jquery.min.js",
        bootstrap: "../bower_components/bootstrap/dist/js/bootstrap.min.js",
        easing: "../bower_components/jquery.easing/js/jquery.easing.min.js",
        slimscroll: "../bower_components/jquery.slimscroll/jquery.slimscroll.min.js",
        imagesloaded: "../bower_components/imagesloaded/imagesloaded.js",
        modernizr: "../bower_components/modernizr/modernizr.js",
        fullpage: "../bower_components/fullpage.js/jquery.fullPage.min.js"
    },
    shim: {
        bootstrap: ['jquery']
    },
    packages: [
        'jquery', 'bootstrap'
    ],
    dir: "min",
    preserveLicenseComments: false,
    useStrict: true,
    modules: [

    ]
})