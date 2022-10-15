$(function updateEventDetails() {
    $("div.col-lg-6 p:first").replaceWith("<p>Playing rugby is my hobby</p>");
    $("div.col-lg-6 p:last").replaceWith("<p>I live in New Zealand</p>");

    $("div.col-lg-6 p:first").click(
        function () {
            $(this).css("color", "white");
            $(this).css("background-color", "powderblue");
        }
    )
    
    $("div.col-lg-6 p:last").click(
        function () {
            $(this).css("color", "white");
            $(this).css("background-color", "powderblue");
        }
    )
});

