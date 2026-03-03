//PLUGIN: PURCHASE_TO_ASSETS
//DESC: Adds a more convenient transition between the purchase orders page and the assets page.

$(document).ready(function(){


function goToAssets2(){
    window.location.assign("https://myhirehop.com/modules/stock/#assets_tab");
}


var curLoc = $(location).prop('href');
if(curLoc != "https://myhirehop.com/modules/suppliers/") return;


var assetsPop = $("<li>", {
			html:'<span class="ui-icon ui-icon-box"></span>'+ "Go to Assets"
		})
    
$.widget("custom.subcontractors", $.custom.subcontractors,
            {

                _init_main: function()
                {

                    this._super(arguments);

                    $(assetsPop).appendTo(this.bottom_menu); 

                }

            });





})