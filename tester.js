// CHECK 4145 in subcontractors this.edt_text
//Try pulling from the node data in the go to assets function, in the same way as the subcontractors edit function. 
//CHECK 4095 SUBCONTRACTOR
//CHECK REPORTS >> STOCK VALUATION FOR SERIAL NUMBER CALL!!!!



$(document).ready(function(){

var curLoc = $(location).prop('href');
if(curLoc != "https://myhirehop.com/modules/suppliers/") return;
var itemName = "null";



$.widget("custom.subcontractors", $.custom.subcontractors,
            {

                _edit_item: function()
                {
                  this._super(arguments);
                  itemName = this.edt_id.val();

                },

                _init_edit_item: function()
                {

                  this._super(arguments);
                  

                  var assetsJumpBtn = $(
                          "<button id=\"assetsJumpBtn\" style=\"float: left;:\" class=\"search_tab_top_btn ui-button ui-widget ui-state-default ui-corner-all ui-button-text-icon-primary\" role=\"button\">"
                          + "<span class=\"ui-button-icon-primary ui-icon ui-icon-box\">"
                          + "</span>"
                          + "<span class=\"ui-button-text\"> Assets"
                          + "</span>"
                          + "</button>"
                   );

                    $(assetsJumpBtn).appendTo(this.edit_item_dialog)
                    
                    $("#assetsJumpBtn").click(function(){
                      alert(JSON.stringify(itemName));
                      window.location.assign("https://myhirehop.com/modules/stock/#assets_tab");
                    })
                  
                    
                },

            });

})



         






    