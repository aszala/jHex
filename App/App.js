class jHex {
	constructor() {
		$("body").css({"margin" : "0"});
		$("body").maximize();
	}
}

class HexObject {
	constructor(elem) {
		this.element = elem;
	}

	get root() {
		return this.element;
	}

	css(properties) {
		for (let key in properties) {
			this.element.style[key] = properties[key];
		}
	}

	maximize() {
		this.css({"width" : "100%", "height" : "100%"});
	}
}

function $(selector) {
	return new HexObject(document.querySelector(selector));
}


let App = new jHex()
