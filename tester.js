//CHECK REPORTS >> STOCK VALUATION FOR SERIAL NUMBER CALL!!!!

$(document).ready(function(){

var curLoc = $(location).prop('href');

if(curLoc.includes("modules/stock/?item="))
  {

    $.widget("custom.stock_page", $.custom.stock_page,{

            _init_main: function()
            {
              this._super(arguments);

              itemName = curLoc.slice(42, -11);
              alert(itemName)
              itemName.replaceAll('_', ' ');
              this.options.TITLE = itemName; 

            }

             }
            )

  }

if(curLoc != "https://myhirehop.com/modules/suppliers/") return;

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
                      item = JSON.stringify(that.edt_desc.val()).slice(1, -1);
                      urlItem = item.replaceAll(' ', '_');
                      url = "https://myhirehop.com/modules/stock/?item=" + urlItem + "#assets_tab";
                      window.location.assign(url);
                    })
                  
                    
                }

            });

})



         






    