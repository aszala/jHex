$(function() {

	let background = App.createElement("div");
	background.maximize();
	background.css({
		"background-image": "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(117, 19, 93, 0.73)), url('https://static.wixstatic.com/media/c837a6_2119733e838e4a2f8813ebde736f99d5~mv2.jpg/v1/fill/w_1052,h_1300,al_b,q_85,usm_0.66_1.00_0.01/c837a6_2119733e838e4a2f8813ebde736f99d5~mv2.webp')",
		"background-size": "cover",
		"background-position": "0% 50%",
		"position": "absolute"
	});

	let navbar = App.createElement("div");
	navbar.css({
		"height": "75px",
		"background": "transparent",
		"width": "100%",
		"z-index": "99999",
		"position": "absolute",
		"top": "0",
		"display": "flex",
		"justify-content": "space-between"
	});

	let logo = App.createElement("img", {"src" : "https://aszala.com/logo.png"});
	logo.css({
		"height": "90%",
		"margin-left": "50px"
	});
	logo.forceCenter("vertical");

	let navButtonContainer = App.createElement("div");
	navButtonContainer.css({
		"width": "30%",
		"display": "flex",
		"justify-content": "space-around",
		"margin-right": "25px"
	});
	navButtonContainer.maximize("height");

	App.defineType("nav-link", {
		"color": "white",
		"text-decoration": "none",
		"transition": "color 200ms",
		"font-size": "18px",
		"height": "20px",
		"&:hover": {
			"color": "rgb(253, 98, 98)"
		}
	});

	App.defineType("button", {
		"padding": "10px",
		"border": "solid rgb(253, 98, 98) 2px",
		"background": "rgb(253, 98, 98)",
		"transition": "border, background 200ms",
		"color": "black",
		"border-radius": "10px",
		"&:hover": {
			"border": "solid white 2px",
			"background": "transparent",
			"color": "white"
		}
	});

	navButtonContainer.append(App.createElement("a", {"type": "nav-link", "id": "home", "href" : "#"}, "Home"));
	navButtonContainer.append(App.createElement("a", {"type": "nav-link", "href" : "#"}, "Solutions"));
	navButtonContainer.append(App.createElement("a", {"type": "nav-link", "href" : "#"}, "Vision"));
	navButtonContainer.append(App.createElement("a", {"type": "nav-link", "href" : "#"}, "Blog"));
	navButtonContainer.append(App.createElement("a", {"type": "nav-link button", "href" : "#"}, "Get Started"));

	navButtonContainer.forceCenterChildren("vertical");

	$("#home").css({"color": "rgb(253, 98, 98)"});

	navbar.append(logo);
	navbar.append(navButtonContainer);

	let header = App.createElement("div");
	header.css({
		"width": "50%",
		"height": "80%",
		"position": "relative",
		"top": "20%",
		"margin-left": "50px",
		"color": "white"
	});

	App.defineType("header-item", {
		"margin-bottom" : "50px"
	});

	let title = App.createElement("div", {"type": "header-item"}, "The New Standard in Data Analysis");
	title.css({
		"font-size": "100px",
	});

	let subtitle = App.createElement("div", {"type": "header-item"}, "Use Data to Get a 360-Degree View of Your Business");
	subtitle.css({
		"font-size": "40px"
	});

	header.append(title);
	header.append(subtitle);
	header.append(App.createElement("a", {"type": "button", "href" : "#"}, "Learn More"));

	let githubContainer = App.createElement("div");
	githubContainer.css({
		"height": "100px",
		"background": "black",
		"position": "absolute",
		"bottom": "0px",
		"display": "flex",
		"justify-content": "space-between",
		"color": "white"
	});
	githubContainer.maximize("width");


	githubContainer.append(App.createElement("div", {}, "This site template was made using the jHex framework"));
	githubContainer.append(App.createElement("a", {"type": "nav-link button", "href" : "https://github.com/aszala/jHex"}, "GitHub"));

	githubContainer.child(0).css({
		"font-size": "30px",
		"margin-left": "50px",
		"height": "35px"
	});
	githubContainer.child(1).css({
		"margin-right": "50px",
	});


	githubContainer.forceCenterChildren("vertical");


});
