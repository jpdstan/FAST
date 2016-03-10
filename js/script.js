$(document).ready(function(){
    $(window).bind('scroll',function(e){
        parallaxScroll();
    });
 
    function parallaxScroll(){
        var scrolledY = $(window).scrollTop();
        $('.banner').css('background-position','center -'+((scrolledY*0.25))+'px');
    }

    $('.arrow').click(function(){    
        $(this).parents(".banner").toggleClass('expand');
        $(this).parents(".container").toggleClass('expand'); 
        $(this).parent().next(".hide").toggleClass('excerpt');   
    });
 
});