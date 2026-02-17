//PLUGIN: SERIAL_SEARCH V18
//DESC: Replaces the barcode search with a Serial Number search and changes instances of "Barcode" to "Serial Number" on all pages. 


function getSerial(){
          input = document.getElementById("serial_number").value;
          url = "https://myhirehop.com/modules/stock/?serial=" + input + "#assets_tab"
          window.location.replace(url);
        };

$(document).ready(function(){

        var input = "none";
        var curLoc = $(location).prop('href');

        console.log(curLoc.slice(0, 36) + curLoc.slice(-1, -11));
        
        if(curLoc.slice(0, 36) + curLoc.slice(-1, -11) == "https://myhirehop.com/modules/stock/#assets_tab"){
          console.log("GOT IT!");
        };

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


    