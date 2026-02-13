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

    var curLoc = $(location).prop('href');
    if(curLoc != "https://myhirehop.com/modules/suppliers/") return;

    $(assetBtnHtml).insertAfter("#ui-id-24");

})