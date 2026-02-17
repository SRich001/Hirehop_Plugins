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

        console.log(checkUrl);
        
        if(checkUrl == "modules/stock/?serial="){
          console.log("YOU GOT IT!");
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


    