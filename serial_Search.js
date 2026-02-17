//PLUGIN: SERIAL_SEARCH V16
//DESC: Replaces the barcode search with a Serial Number search and changes instances of "Barcode" to "Serial Number" on all pages. 

var input = "none";

function getSerial(){
          input = document.getElementById("serial_number").value;
          url = "https://myhirehop.com/modules/stock/#assets_tab"
          window.location.replace(url);
        };

$(document).ready(function(){
        
        
        var curLoc = $(location).prop('href');
        if(curLoc == "https://myhirehop.com/modules/stock/#assets_tab"){

          console.log(input);

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


    