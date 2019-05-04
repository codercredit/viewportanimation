    // animation-when-it-scroll-infinite
    /* scroll animate
       -------------------------------------------------------*/
    $(window).scroll(function(){
        $("section").each(function(){
            let secOffset = $(this).offset().top;
            if ($(window).scrollTop() > secOffset) {
                $(this).find(".active-pr").addClass("active");
            }
            else {
                $(this).find(".active-pr").removeClass("active");
            }
        });
    });
