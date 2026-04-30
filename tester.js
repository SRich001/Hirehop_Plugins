// CHECK 4145 in subcontractors this.edt_text
//Try pulling from the node data in the go to assets function, in the same way as the subcontractors edit function. 
//CHECK 4095 SUBCONTRACTOR
//CHECK REPORTS >> STOCK VALUATION FOR SERIAL NUMBER CALL!!!!



$(document).ready(function(){

var curLoc = $(location).prop('href');
if(curLoc != "https://myhirehop.com/modules/suppliers/") return;
var checkUrl = (curLoc.slice(22, 42));


if(checkUrl == "modules/stock/?item=")
  {

    $.widget("custom.stock_page", $.custom.stock_page,{

            _init_main: function()
            {
              this._super(arguments);

              itemName = curLoc.slice(42, -11);
              console.log(itemName)
              this.options.TITLE = itemName; 

            }

             }
            )

  }


$.widget("custom.subcontractors", $.custom.subcontractors,
            { 

                _init_edit_item: function()
                {

                  var that = this

                  this._super(arguments);

                  var assetsJumpBtn = $(
                          "<button id=\"assetsJumpBtn\" style=\"float: right;:\" class=\"search_tab_top_btn ui-button ui-widget ui-state-default ui-corner-all ui-button-text-icon-primary\" role=\"button\">"
                          + "<span class=\"ui-button-icon-primary ui-icon ui-icon-box\">"
                          + "</span>"
                          + "<span class=\"ui-button-text\"> Jump to Assets "
                          + "</span>"
                          + "</button>"
                   );


                    $(assetsJumpBtn).appendTo(this.edit_item_dialog)
                    
                    $("#assetsJumpBtn").click(function(){
                      item = JSON.stringify(that.edt_desc.val());
                      item.slice(1, -1)
                      item.replaceAll(' ', '_');
                      alert(item);
                      url = "https://myhirehop.com/modules/stock/?item=" + item + "#assets_tab";
                      window.location.assign(url);
                    })
                  
                    
                }

            });

})



         






    