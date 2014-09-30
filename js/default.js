/**
 * Created by avaid on 9/8/14.
 */

define(['jquery', 'bootstrap', 'fullpage', 'imagesloaded', 'easing'], function ($) {

    $(document).ready(function () {
        $('#content').fullpage({
            verticalCentered: true,
            easing: 'easeOutBack',
            navigation: true,
            navigationPosition: 'right',
            css3: true
        });


        $('#gotoSection2').click(function () {
            $('#fp-nav li:nth-child(2) a').click();
            return false;
        });
    });
})