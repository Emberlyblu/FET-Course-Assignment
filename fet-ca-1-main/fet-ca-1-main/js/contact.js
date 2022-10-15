
$(function(){
    $("#contactBtn").click(updateContact);
    });


function updateContact(){
    let telNum = parseInt(prompt("Please enter your phone number"));
    if (isNaN(telNum))
    {
        alert("Please enter a valid phone number")
        return;

    }
    
    let email = prompt("Please enter your email address");
    let pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!email.match(pattern))
    {
        alert("Please enter a valid email address")
        return;
    }    
    
    let address = prompt("Please enter your address");
    if (address == null || address =="")
    {
        alert("Please fill all required field");
        return;

    }


    $("div.col-md-4 p:first").replaceWith(telNum);
    $("div.col-md-4 p:first").replaceWith(email);
    $("div.col-md-4 p:first").replaceWith(address);

    // let input = {
    //     from:email,
    //     Contact:telNum,
    //     Address:address    
    // };
    // console.log(input); -- This will log it into an array in console log
    
    console.log("From: " + email);
    console.log("Contact: " + telNum);
    console.log("Address: " + address);
  
};





   










