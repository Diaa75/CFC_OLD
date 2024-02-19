$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >= 100) {
        //clearHeader, not clearheader - caps H
        $(".header-cont").addClass("light-header");
    }else if (scroll == 0){
        $(".header-cont").removeClass("light-header");
    }
}); 
// function updateHeader(){
//     if (window.location.href.indexOf("product") > -1 || window.location.href.indexOf("about") > -1 
//     || window.location.href.indexOf("contactus") > -1 ) {
//         $(".header-cont").addClass("light-header")
//     }else{
//         $(".header-cont").removeClass("light-header");
//     }
// }
// setTimeout(updateHeader, 1000);