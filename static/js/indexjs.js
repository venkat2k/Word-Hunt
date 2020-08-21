$("#close").click(function() {
    $("#mainpage").css("filter", "none");
    $("#getname").css("display", "none");
    $("#rules").css("pointer-events", "auto");
    $("#lboard").css("pointer-events", "auto");
    $("#play").css("pointer-events", "auto");
})
$("#play").click(function(){
    $("#mainpage").css("filter", "blur(5px)");
    $("#getname").css("display", "block");
    $("#rules").css("pointer-events", "none");
    $("#lboard").css("pointer-events", "none");
    $("#play").css("pointer-events", "none");
})
$("#rules").click(function(){
    $("#mainpage").css("filter", "blur(5px)");
    $("#rules-div").css("display", "block");
    $("#rules").css("pointer-events", "none");
    $("#lboard").css("pointer-events", "none");
    $("#play").css("pointer-events", "none");
})
$("#close-rules").click(function(){
    $("#rules-div").css("display", "none");
    $("#rules").css("pointer-events", "auto");
    $("#lboard").css("pointer-events", "auto");
    $("#play").css("pointer-events", "auto");
    $("#mainpage").css("filter", "none");
})
$("#lboard").click(function(){
    $("#mainpage").css("filter", "blur(5px)");
    $("#lboard-div").css("display", "block");
    $("#rules").css("pointer-events", "none");
    $("#lboard").css("pointer-events", "none");
    $("#play").css("pointer-events", "none");
})
$("#close-lboard").click(function(){
    $("#lboard-div").css("display", "none");
    $("#rules").css("pointer-events", "auto");
    $("#lboard").css("pointer-events", "auto");
    $("#play").css("pointer-events", "auto");
    $("#mainpage").css("filter", "none");
})