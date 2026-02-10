$(document).ready(function(){

    $.ajax({
    
        url: "https:/myhirehop.com//modules/consumables/tracked_asset_list.php",
        method:'get',
        dataType: 'json',
        success: function (data) {
            console.log(data);
        },
        error: function (err) {
            console.long(err);
        }
    });
})