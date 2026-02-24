   // var curLoc = $(location).prop('href');
        
    //     if(curLoc != "https://myhirehop.com/home.php") return;

    if(typeof($.custom.job_edit)!='undefined')
        {

         $.widget("custom.job_edit",
            {

            _init_main: function()
            {

              this._super(arguments);


              alert("Working!!");

              $("<span>",{ html:" TEST"}).insertAfter(this.memo_section);
              
            }
        
        
        
        });

          

    }





         






    