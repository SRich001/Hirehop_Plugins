$(document).ready(function(){

    //add if statement to check page

    var assetBtnHtml = $(

        "<li class=\"menu_edit lockable ui-menu-item\" id=\"ui-id-EX1\" tabindex=\"-1\" role=\"menuitem\">"
            + "::marker"
            + "<span class=\"ui-icon ui-icon-pencil\">"
                + "::after"
            + "</span>"
               + "Go to Assets"

        + "</li>"

    )

    var assetTabHTML = $(

            "<li data-kind=\"assets\" class=\"assets_tab ui-state-default ui-corner-top\" role=\"tab\" tabindex=\"-1\" aria-controls=\"assets_tab\" aria-labelledby=\"ui-id-5\" aria-selected=\"false\" aria-expanded=\"false\">"
             + "<a href=\"\" > Assets </a>"
             +  "</li>"

    )



    var curLoc = $(location).prop('href');

    if(curLoc != "https://myhirehop.com/modules/suppliers/") return;

    var element = document.querySelector('[id="header_depot"]');

    console.log(element);

    

 
   

    //$(assetBtnHtml).insertAfter("#ui-id-24");
    

})