$(document).ready(function(){

var curLoc = $(location).prop('href');
if(curLoc != "https://myhirehop.com/modules/suppliers/") return;


var assetsPop = $(
      "<li onclick=\"goToAssets2()\" class=\"ui-menu-item\" >"
      + "<span class=\"ui-icon ui-icon-box\">"
      + "</span>"
      + "Go to Assets >>>"
      + "</li>" 
    )
    


//Try pulling from the node data in the go to assets function, in the same way as the subcontractors edit function. 
//CHECK 4095 SUBCONTRACTOR
//CHECK REPORTS >> STOCK VALUATION FOR SERIAL NUMBER CALL!



$.widget("custom.subcontractors", $.custom.subcontractors,
            {

                _init_bottom_menu: function()
                {

                    this._super(arguments);

                    $(assetsPop).appendTo(this.bottom_popup_menu ); 
 
                },

                goToAssets2: function() {
                   

                   if (this.is_locked()) return;

	               var that = this;
	
	               var sub_rowid = that.grid.jqGrid('getGridParam','selrow');

	               if (!sub_rowid) return;

                   var node = false;

                   node = this.supplying.jstree("get_selected", true);

	               if (node.length != 1)
	               {
		           error_message("You can only edit one item at once.");
		           return;
	               }
	               else
		           node = node[0];

                   if(node){
                      alert(node.data.ITEM);
                    }

    

                   }

                  });

})






         






    