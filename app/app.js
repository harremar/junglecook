function addModalListener(){
    //this gets modal 1 when login button is clicked
    $(".bg-click").click(function(e) {
        // $(".modal").css("display", "none");
        gsap.to($(".modal"), { scale : 0, duration: 0, onComplete: showAlert});
    });
}

function route(){
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#/", "");


    if (pageID == "") {
        MODEL.getMyContent("home");
    }
    else {
        MODEL.getMyContent(pageID);
    }
}

function initListeners(){
    $(window).on("hashchange", route);
    route();
}

$("#menuModal").click(function(e){
    gsap.to($(".modal"), { ease: "ease.out" ,  scale : 1 , duration: 1});
    addModalListener();
});
$("toggle-button").click(function(e){
    console.log("clicked");
});

$(document).ready(function(){
    initListeners();
    // navToPage("home")
});
