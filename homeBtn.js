//PLUGIN: HOME_BTN V1
//DESC: Adds a dedicated home button to the top of the page. 

function goHome(){
    window.location.replace("https://myhirehop.com/home.php");
}

$(document).ready(function()
{
    var curLoc = $(location).prop('href');
    if(curLoc == "https://myhirehop.com/home.php") return;

    var btn = $(

        "<button id=\"home-btn\" class=\"ui-button ui-state-default ui-button-text-icon-primary\" role=\"button\" onclick=\"goHome()\">"
             + "<span class=\"ui-button-icon-primary ui-icon ui-icon-home\">"  
             + "</span>"
           +  "</button>" 
    )

    $("#hirehop_header_bar").append(btn);

});
