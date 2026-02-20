//PLUGIN: QUICK_ACCESS V1
//DESC: Adds shortcut buttons to the homepage for quick access to particular pages. 

function goToAssets(){

}

function goToPurchase(){

}

$(document).ready(function()
{
    var curLoc = $(location).prop('href');
    if(curLoc != "https://myhirehop.com/home.php") return;

    var assetsBtn = $(
        "<button  style=\"float: right;:\" id=\"assetsBtn\" class=\"search_tab_top_btn ui-button ui-widget ui-state-default ui-corner-all ui-button-text-icon-primary\" role=\"button\">"
            + "<span class=\"ui-button-icon-primary ui-icon ui-icon-box\">"
            + "</span>"
            + "<span class=\"ui-button-text\"> Assets &gt&gt&gt"
            + "</span>"
       + "</button>"
    );

    var purchaseBtn = $(
        "<button id=\"purchaseBtn\" class=\"search_tab_top_btn ui-button ui-widget ui-state-default ui-corner-all ui-button-text-icon-primary\" role=\"button\">"
            + "<span class=\"ui-button-icon-primary ui-icon ui-icon-shuffle\">"
            + "</span>"
            + "<span class=\"ui-button-text\"> Purchase Orders &gt&gt&gt"
            + "</span>"
       + "</button>"
    );
    

    $(assetsBtn).insertAfter($("#settings_btn"));
    $(purchaseBtn).insertAfter($("#assetsBtn"));

})

