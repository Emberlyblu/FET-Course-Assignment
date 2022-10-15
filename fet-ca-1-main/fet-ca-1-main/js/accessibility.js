var accessible = 0

$(function(){
    var fontSize = $("p").css("font-size");

    $("div.checkbox").on("click", function(){
        if(accessible == 0){
            accessible = 1;
            $("p").css("font-size", "120%");
        } else {
            accessible = 0;
            $("p").css("font-size", fontSize);
        }
        
    });
});