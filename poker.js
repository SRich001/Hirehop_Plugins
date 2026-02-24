$(document).ready(function(){

    // var curLoc = $(location).prop('href');
        
    //     if(curLoc != "https://myhirehop.com/home.php") return;

    if(typeof($.custom.job_edit)!='undefined')
        {
            console.log("here")

         $.widget("custom.job_edit",
            {

            _init_main: function()
            {
              console.log("here2")
              this._super(arguments);
              console.log("here3")

              alert("Working!!");

              //$("<span>",{ html:" TEST"}).insertAfter(this.memo_section);
            }
          });

    }


         

})




    