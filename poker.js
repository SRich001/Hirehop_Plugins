$(document).ready(function(){

    var curLoc = $(location).prop('href');
        
        if(curLoc != "https://myhirehop.com/home.php") return;


          $.widget("custom.job_edit",{

            _init_main: function()
            {
              this._super(arguments);

              //$("<span>",{ html:" TEST"}).insertAfter(this.memo_section);
              $(this.memo_section).replaceWith( "<span>TEST</span>" );


            }
          });

})




    