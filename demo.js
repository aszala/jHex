$(function() {
	App.createElement("div", {"type" : "button", "id" : "tester"});
	$("#tester").content("this is pruple");

	App.defineType("button", {
		"width": "70%",
		"height": "30px",
		"background": "black",
		"color": "white",
		"&:hover": {
			"background": "green"
		}
	});
});
