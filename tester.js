// CHECK 4145 in subcontractors this.edt_text
//Try pulling from the node data in the go to assets function, in the same way as the subcontractors edit function. 
//CHECK 4095 SUBCONTRACTOR
//CHECK REPORTS >> STOCK VALUATION FOR SERIAL NUMBER CALL!!!!


function goToAssets2(){
    window.location.assign("https://myhirehop.com/modules/stock/#assets_tab");
}

$(document).ready(function(){

var curLoc = $(location).prop('href');
if(curLoc != "https://myhirehop.com/modules/suppliers/") return;


var assetsJumpBtn = $(
        "<button onclick=\"goToAssets2()\" style=\"float: right;:\" id=\"assetsBtn\" class=\"search_tab_top_btn ui-button ui-widget ui-state-default ui-corner-all ui-button-text-icon-primary\" role=\"button\">"
            + "<span class=\"ui-button-icon-primary ui-icon ui-icon-box\">"
            + "</span>"
            + "<span class=\"ui-button-text\"> Assets"
            + "</span>"
       + "</button>"
    );
    
$.widget("custom.subcontractors", $.custom.subcontractors,
            {

                _init_edit_item: function()
                {

                    this._super(arguments);

                    $(assetsJumpBtn).appendTo(this.edit_item_dialog);
                    
                } 

            });

})



         






    