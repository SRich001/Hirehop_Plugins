$(document).ready(function()
	
	{
		var stuff = "<p> Whats Up <p/>";
		var curLoc = $(location).prop('href');

		if(curLoc != "https://myhirehop.com/modules/stock/") return;

        $("#pq-head-cell-u12-0-5-right").append(stuff);


	});

