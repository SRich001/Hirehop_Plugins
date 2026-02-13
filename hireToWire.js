//PLUGIN: HIRE_TO_WIRE V5
//DESC: Change all occurences of "Hire Stock Management" to "Livewire Stock"
$(document).ready(function(){

    if(typeof(user)!=='undefined' && typeof(doc_type)!=='undefined'){


        lang.stockManageTxt = "Livewire Stock"

        //$('div:contains("Hire stock management")').replaceWith("<div class=\"tile_title\" data-type=\"103\">Hire stock management</div>");

        lang.tiles[103] = "Livewire Stock"

    }

})