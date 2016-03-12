//showup when scroll:  
$(window).scroll(function() {
    $(".back_to_top").each( function() {
        if( $(window).scrollTop() > 200 ) {
            $(this).css('opacity',0.75);
        } else {
            $(this).css('opacity',0);
        }
    }); 
});

//use .offsetTop to get the distance between an element and the top edge
//$(window).scroll(function() {
//    $("#fixed_poster_session").each( function() {
//        if( $(window).scrollTop() > document.getElementById("p_poster_session").offsetTop + 16 ) {
//            $(this).css('opacity',1)
//            $(this).css('transition', 'opacity 0.0s');
//        } else {
//            $(this).css('opacity',0);
//        }
//    }); 
//});

//smooth scroll jump:
$(function() {
  //original selector: 'a[href*=#]:not([href*=Gallery])'
  $('a[href*=#to]:not([href*=Gallery])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 750);
        return false;
      }
    }
  });
});


