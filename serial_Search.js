//PLUGIN: SERIAL_SEARCH V14
//DESC: Replaces the barcode search with a Serial Number search and changes instances of "Barcode" to "Serial Number" on all pages. 

function getSerial(input){
          input = document.getElementById("serial_number").value;
          alert(input);
          console.log(input);
          window.location.replace("https://myhirehop.com/modules/stock/#assets_tab");
        };

$(document).ready(function(){
        
        var input = "none";
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
                 +"<form action=\"javascript:getSerial(input);\">"
                  +"<input id=\"serial_number\" class=\"numeric_input number_search\" inputMode=\"numeric\" type=\"tel\" maxlength=\"15\">"
                   +"&nbsp;"
                  +"<button class=\"rec_open\" type=\"submit\"></button>"
                 +"</form>"
                +"</div>"
               +"</div>"
            +"</div>") 


        $("#search_by_number_content").append(searchBar);

	});


    