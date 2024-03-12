//resource link: https://www.w3schools.com/jquery/default.asp



$("#coloredbackground").hide();
$("#sun").hide();
$("#always").hide();
$("#what").hide();
$("#draw").hide();
$("#paint").hide();
$("#good").hide();
$("#want").hide();
$("#some").hide();
$("#tips").hide();
$("#clickcircle").hide();
$("#hair").hide();
$("#notjust").hide();
$("#expression").hide();
$("#identity").hide();
$("#master").hide();
$("#galaxy").hide();
$("#unique").hide();

$(document).ready(function(){
    $("#tellyousecret").hide();

    $("#question").click(function(){
        $("#mark").hide();
        $("#what").fadeIn(2000);
        $("#draw").fadeIn(4000);
        $("#paint").fadeIn(6000);
        $("#good").fadeIn(8000);
        $("#want").fadeIn(12000);
        $("#some").fadeIn(14000);
        $("#tips").fadeIn(16000);
        $("#tellyousecret").fadeIn(20000);
        $("#clickcircle").fadeIn(20000);
    })

    $("#secret").click(function(){
        
    })

    $("#swirl").click(function(){
        $("#title").hide();
        $("#swirl").hide();
        $("#mark").hide();
        $("#secret").hide();
        $("#tellyousecret").hide();
        $("#phrases").hide();
        $("#clickcircle").hide();
        $("#coloredbackground").fadeIn(1000);
        $("#sun").fadeIn(1000);
        $("#always").fadeIn(2000);
        $("#hair").fadeIn(3000);
        $("#notjust").fadeIn(5000);
        $("#expression").fadeIn(7000);
        $("#identity").fadeIn(9000);
        $("#master").fadeIn(11000);
        $("#galaxy").fadeIn(13000);
        $("#unique").fadeIn(15000);
    })

    $("#restart").click(function(){
        $("#coloredbackground").hide();
        $("#sun").hide();
        $("#always").hide();
        $("#clickcircle").hide();
        $("#hair").hide();
        $("#notjust").hide();
        $("#expression").hide();
        $("#identity").hide();
        $("#master").hide();
        $("#galaxy").hide();
        $("#unique").hide();
        $("#swirl").show();
        $("#title").show();
        $("#mark").show();
    })


})