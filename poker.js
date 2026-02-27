   

    $(document).ready(function(){


        //Add project code bar UI
        //Lalala

        var curLoc = $(location).prop('href');
        
        if(curLoc != "https://myhirehop.com/modules/suppliers/") return;



        $.widget("custom.subcontractors", $.custom.subcontractors,
            {

            _init_main: function()
            {

              this._super(arguments); 


              $("<span>",{ html:" TEST"}).insertAfter(this.info_table);

            }



         });

         
        
    });






         






    