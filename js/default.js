/**
 * Created by avaid on 9/8/14.
 */

define(['jquery', 'bootstrap', 'fullpage', 'imagesloaded', 'easing'], function($){
    console.log('Hi! Require is working!')
    $(document).ready(function() {
        $('#content').fullpage({
            verticalCentered: false,
            easing: 'easeOutBack'

        });
    });
})