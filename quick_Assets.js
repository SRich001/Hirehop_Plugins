$(document).ready(function(){

    //add if statement to check page

    if(curLoc != "https://myhirehop.com/modules/suppliers/") return;

    var assetBtnHtml = $(

        <li class="menu_edit lockable ui-menu-item" id="ui-id-EX1" tabindex="-1" role="menuitem">
            ::marker
            <span class="ui-icon ui-icon-pencil">
                ::after
            </span>
            "Go to Assets"

        </li>

    )

    $(assetBtnHtml).insertAfter("#ui-id-24");

})