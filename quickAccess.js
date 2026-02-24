//PLUGIN: QUICK_ACCESS V8
//DESC: Adds shortcut buttons to the homepage for quick access to particular pages. 

function goToAssets(){
    window.location.replace("https://myhirehop.com/modules/stock/#assets_tab");
}

function goToPurchase(){
    window.location.replace("https://myhirehop.com/modules/suppliers/");
}

$(document).ready(function()
{
    var curLoc = $(location).prop('href');
    if(curLoc != "https://myhirehop.com/home.php") return;

    var assetsBtn = $(
        "<button  \"style = color:green\" onclick=\"goToAssets()\" style=\"float: right;:\" id=\"assetsBtn\" class=\"search_tab_top_btn ui-button ui-widget ui-state-default ui-corner-all ui-button-text-icon-primary\" role=\"button\">"
            + "<span class=\"ui-button-icon-primary ui-icon ui-icon-box\">"
            + "</span>"
            + "<span class=\"ui-button-text\"> Assets"
            + "</span>"
       + "</button>"
    );

    var purchaseBtn = $(
        "<button  onclick=\"goToPurchase()\" style=\"float: right;:\" id=\"purchaseBtn\" class=\"search_tab_top_btn ui-button ui-widget ui-state-default ui-corner-all ui-button-text-icon-primary\" role=\"button\">"
            + "<span class=\"ui-button-icon-primary ui-icon ui-icon-shuffle\">"
            + "</span>"
            + "<span class=\"ui-button-text\"> Purchase Orders"
            + "</span>"
       + "</button>"
    );
    

    $(assetsBtn).insertAfter($("#settings_btn"));
    $(purchaseBtn).insertAfter($("#assetsBtn"));

})

