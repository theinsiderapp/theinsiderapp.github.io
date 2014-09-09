/**
 * Created by avaid on 9/8/14.
 */

var s = skrollr.init({
    render: function(data) {
        //Debugging - Log the current scroll position.
        //console.log(data.curTop);
    }
});
s.refresh($('.slide'));