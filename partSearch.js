//PLUGIN: PART_SEARCH V27
//DESC: Add an option to search for assets by their part number from the home page. 


 function getPart(){
           input = document.getElementById("part_number").value;
           url = "https://myhirehop.com/modules/stock/?serial=" + input + "#assets_tab"
           window.location.replace(url);
         };

$(document).ready(function(){

        var input = "none";
        var curLoc = $(location).prop('href');
        var checkUrl = (curLoc.slice(22, 44))
        
        if(checkUrl == "modules/stock/?serial=")
          { 

            $.widget("custom.stock_page", $.custom.stock_page,{

            _init_main: function()
            {
              this._super(arguments);

              partNum = curLoc.slice(44, -11);
              this.options.PART_NUMBER = partNum; 

            }

             }
            )

          }

        var searchBar = $( 
            "<div style=\"max-width:655px; text-align:right; display:inline-block\">"
              +"<div style=\"margin-top:6px\">"
                +"<div style=\"width:auto;text-align:right;display:inline-block\" class=\"lang label\" data-label=\"partNumTxt\">"
                  + "Part number : "
                +"</div>"
                   +"&nbsp;"
                +"<div style = \"display:inline-block\">"
                 +"<form action=\"javascript:getPart();\">"
                  +"<input id=\"part_number\" class=\"numeric_input number_search\" inputMode=\"numeric\" type=\"tel\" maxlength=\"15\">"
                   +"&nbsp;"
                  +"<button class=\"rec_open\" type=\"submit\"></button>"
                 +"</form>"
                +"</div>"
               +"</div>"
            +"</div>") 


        $("#search_by_number_content").append(searchBar);


        
    


      }
      

	);

 

    