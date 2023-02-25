$(document).ready(function(){
    //sticky-note
    $(".js--services-section").waypoint(function(direction){

        if(direction=="down"  )
        {
            $("nav").addclass("sticky");
        }
        else{$("nav").removeClass("sticky");}
    });

    //mixitup in protfolio
    var mixer = mixitup('container');
});

