   

    $(document).ready(function(){


        //Add project code bar UI
        //Lalala


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






         






    