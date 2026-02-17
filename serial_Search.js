//PLUGIN: SERIAL_SEARCH V25
//DESC: Replaces the barcode search with a Serial Number search and changes instances of "Barcode" to "Serial Number" on all pages. 


function getSerial(){
          input = document.getElementById("serial_number").value;
          url = "https://myhirehop.com/modules/stock/?serial=" + input + "#assets_tab"
          window.location.replace(url);
        };

$(document).ready(function(){

        var input = "none";
        var curLoc = $(location).prop('href');
        var checkUrl = (curLoc.slice(22, 44));
        
        if(checkUrl == "modules/stock/?serial="){

          serialNum = curLoc.slice(44, -11);

          // $.widget("custom.stock_equipment", $.custom.stock_equipment,{

          //   _init_main: function()
          //   {
          //     this._super(arguments);
              $("#gs_astSERIAL").replaceWith(
                
                "<input" 
                +"value="
                + serialNum
                + "type=\"text\" role=\"textbox\" searchopermenu=\"true\" name=\"SERIAL\" id=\"gs_astSERIAL\" clearsearch=\"true\" size=\"20\" class=\"ui-widget-content ui-corner-all\"></input>"
                          
               );


          //   }
          // })
        
        }
        
        var searchBar = $( 
            "<div style=\"max-width:655px; text-align:right; display:inline-block\">"
              +"<div style=\"margin-top:6px\">"
                +"<div style=\"width:auto;text-align:right;display:inline-block\" class=\"lang label\" data-label=\"serialNumTxt\">"
                  + "Serial number : "
                +"</div>"
                   +"&nbsp;"
                +"<div style = \"display:inline-block\">"
                 +"<form action=\"javascript:getSerial();\">"
                  +"<input id=\"serial_number\" class=\"numeric_input number_search\" inputMode=\"numeric\" type=\"tel\" maxlength=\"15\">"
                   +"&nbsp;"
                  +"<button class=\"rec_open\" type=\"submit\"></button>"
                 +"</form>"
                +"</div>"
               +"</div>"
            +"</div>") 


        $("#search_by_number_content").append(searchBar);

	});

  //id="gs_astSERIAL"

    