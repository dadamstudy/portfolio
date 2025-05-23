$(document).ready(function(){

    $( window ).scroll(function(){
        const scrollTop = $(window).scrollTop();
        //console.log(scrollTop);
        if( scrollTop >= 100 ) {
            $('header h1').css('top', '-100px');
        } else {
            $('header h1').css('top',0);
        }
    });
});