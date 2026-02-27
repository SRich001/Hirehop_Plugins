   

    $(document).ready(function(){


        //Add project code bar UI
        //Lalala

        var curLoc = $(location).prop('href');
        
        if(curLoc != "https://myhirehop.com/modules/suppliers/") return;

        console.log("Whats up girlie?")



        $.widget("custom.subcontractors", $.custom.subcontractors,
            {

            _init_main: function()
            {

              this._super(arguments); 

              console.log("HERE");


              $("<span>",{ html:" TEST"}).insertAfter(this.info_table);

            }



         });

         
        
    });






         






    