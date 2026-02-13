//PLUGIN: HIRE_TO_WIRE V8
//DESC: Change all occurences of "Hire Stock Management" to "Livewire Stock"
$(document).ready(function(){

    if(typeof(user)!=='undefined'){


        lang.stockManageTxt = "Livewire Stock";
        lang.tiles[103] = "Livewire Stock";

        //$('div:contains("Hire stock management")').replaceWith("<div class=\"tile_title\" data-type=\"103\">Hire stock management</div>");


    }

})