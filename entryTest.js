$(document).ready(function()
	
	{
		var curLoc = $(location).prop('href');

		console.log(curLoc);

		if(curLoc != "https://myhirehop.com/modules/stock/") return;

		console.log("did it")

        $("<span>",{ html:" Whats Up? "}).insertAfter($("#pq-head-cell-u12-0-5-right"));


	});

