//PLUGIN: SERIAL_SEARCH V4
//DESC: Replaces the barcode search with a Serial Number search and changes instances of "Barcode" to "Serial Number" on all pages. 
$(document).ready(function(){

        var searchBar = $(
            "<div style=\"max-width:655px; text-align:right; display:inline-block\">"
              +"<div style=\"margin-top:6px\">"
                +"<div style=\"width:auto;text-align:right;display:inline-block\" class=\"lang label\" data-label=\"serialNumTxt\">"
                  + "Serial number : "
                +"</div>"
                   +"&nbsp;"
                +"<div style = \"display:inline-block\">"
                 +"<form action=\"https://myhirehop.com/modules/stock/#assets_tab\">"
                  +"<input id=\"serial_number\" class=\"numeric_input number_search\" inputMode=\"numeric\" type=\"tel\" maxlength=\"15\">"
                   +"&nbsp;"
                  +"<button class=\"rec_open\" type=\"submit\"></button>"
                 +"</form>"
                +"</div>"
               +"</div>"
            +"</div>")


        $("#search_by_number_content").append(searchBar);

        //REDIRECT AND PASTE SEARCHED NUMBER AUTOMATICALLY?

        //redirect to #assets_tab
        //save user input
        //Extend equipment.js such that it pastes user input in the field. 

        
	});
    