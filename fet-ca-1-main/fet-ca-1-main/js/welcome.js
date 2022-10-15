// create a jQuery function that selects the HTML element with the “liveToastBtn” ID and shows the HTML Toast element with the ID of ‘liveToast’. This function should be run when the user clicks the ‘Like’ button in the HTML header.

$(function(){
    $("#liveToastBtn").click(function(){
        $("#liveToast").toast("show");
    });
});

$(function(){
    $("#boredBtn").click(function(){
        let request = new XMLHttpRequest();

         request.open('GET', 'https://www.boredapi.com/api/activity/');
        
         request.onload = function() {
         var response = request.response
         var parsedData = JSON.parse(response);
        console.log(parsedData);
        }
        
        request.send();
    });
});