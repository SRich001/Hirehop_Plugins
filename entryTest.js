$(document).ready(function()
	
	{
		var stuff = $("<p> Whats Up <p/>");
		var curLoc = $(location).prop('href');

		if(curLoc != "https://myhirehop.com/modules/stock/") return;

        $(".pq-title-span").append(stuff);


	});

