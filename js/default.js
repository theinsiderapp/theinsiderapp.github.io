/**
 * Created by avaid on 9/8/14.
 */

var insiderSkrollr = skrollr.init({
    render: function (data) {
        //Debugging - Log the current scroll position.
        //console.log(data.curTop);
    }
});


$('#preload').imagesLoaded(function (instance) {
    setTimeout(function () {

        // Resize sections
        adjustWindow();

        // Fade in sections
        //$body.removeClass('loading').addClass('loaded');

    }, 800);
});

function adjustWindow() {
    // Get window size
    var winH = $(window).height();

    // Keep minimum height 550
    if (winH <= 550) {
        winH = 550;
    }

    // Resize our slides
    $('.slide').height(winH);

    // Refresh Skrollr after resizing our sections
    insiderSkrollr.refresh($('.slide'));
}