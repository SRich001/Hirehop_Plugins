//PLUGIN: HOME_BTN V11
//DESC: Adds a dedicated home button to the top of the page. 

function goHome(){
    window.location.replace("https://myhirehop.com/home.php");
}

$("#home_panel").hover(function() {
    $(this).addClass("ui-state-hover").removeClass("ui-state-default")
}, function() {
    $(this).addClass("ui-state-default").removeClass("ui-state-hover")
});

$(document).ready(function()
{
    var curLoc = $(location).prop('href');
    if(curLoc == "https://myhirehop.com/home.php") return;

    var btn = $(

        "<div id=\"home_panel\" onclick=\"goHome()\" style=\"width:auto;height:calc(100%); position:fixed; left:0; top: 0; z-index:1000\">"

            +"<div style=\"width: 20px; position: absolute; top: calc(50% - 70px); left: +0px; cursor: pointer; height: 140px; display: table; text-align: center; opacity: 0.8;\" class=\"ui-widget ui-corner-right ui-state-default\">"

               + "<div style=\"display:table-cell; vertical-align:middle; line-height:12px; cursor:pointer;\">"
           + "H"
           + "<br>"
           + "o"
           + "<br>"
           + "m"
           + "<br>"
           + "e"
           + "<br>"
           + "</div>"
            
           + "</div>"
            
       + "</div>"
        
    )
    
    $(btn).insertAfter( $( "#help_panel" ) );
    

});


// "<button id=\"home-btn\" class=\"ui-button ui-state-default ui-button-text-icon-primary\" role=\"button\" onclick=\"goHome()\">"
        //      + "<span class=\"ui-button-icon-primary ui-icon ui-icon-home\">"  
        //      + "</span>"
        //      +  "</button>" 



