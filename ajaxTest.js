$(document).ready(function(){

    $.ajax({
    
        url: "https://myhirehop.com/api/azdWSDNRTDJkcFBDRE9iQWhJRVdnOUxQQ25HNWJaeWlCRC9SMnI5UFVtMD0/get_assets.php",
        async: false,
        method:'get',
        dataType: 'json',
        success: function (data) {
            console.log(data);
        },
        error: function (err) {
            console.log(err);
        }
    });
})