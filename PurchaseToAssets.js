//PLUGIN: PURCHASE_TO_ASSETS V13
//DESC: Provides a button to jump from a particular item in a purchase order to its corresponding asset. It can be accessed by selecting a particular item in a purchase order to edit. 
//WARNING: This plugin works using the description of an item instead of the name, assuming both match. If the desc does not correspond to a name, no asset will be found. 

$(document).ready(function(){

var curLoc = $(location).prop('href');

if(curLoc.includes("modules/stock/?item="))
  {

    $.widget("custom.stock_page", $.custom.stock_page,{

            _init_main: function()
            {
              this._super(arguments);

              decodeLoc = decodeURIComponent(curLoc);
              item = decodeLoc.slice(42, -11);
              this.options.TITLE = item; 

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
                          + "<span class=\"ui-button-text\"> Go to Assets "
                          + "</span>"
                          + "</button>"
                   );


                    $(assetsJumpBtn).appendTo(this.edit_item_dialog)
                    
                    $("#assetsJumpBtn").click(function(){
                      item = JSON.stringify(that.edt_desc.val()).slice(1, -1);
                      item = item.replaceAll('/', ' '); 
                      url = "https://myhirehop.com/modules/stock/?item=" + item + "#assets_tab";
                      window.location.assign(url);
                    })
                  
                    
                }

            });

})



         


