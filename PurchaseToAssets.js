$(document).ready(function(){


function goToAssets2(){
    window.location.assign("https://myhirehop.com/modules/stock/#assets_tab");
}

var assetsPop = $(

    "<span \"onclick = goToAssets2()\" class=\"ui-icon ui-icon-box\"></span>" 
    + "Go to Assets"
)
 
$.widget("custom.subcontractors", $.custom.subcontractors,
            {

                _init_main: function()
                {

                    this._super(arguments);

                    $(assetsPop).appendTo(this.bottom_popup_menu); 

                }

            });



})