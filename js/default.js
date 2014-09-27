/**
 * Created by avaid on 9/8/14.
 */

define(['jquery', 'bootstrap', 'fullpage', 'imagesloaded', 'easing'], function($){

    $(document).ready(function() {
        $('#content').fullpage({
            verticalCentered: false,
            easing: 'easeOutBack',
            navigation: true,
            navigationPosition: 'right',
            css3: true
        });
    });
})