class jHex {
	constructor() {
		$("body").css({"margin" : "0"});
		$("body").maximize();

		this.root = $("#root");
	}

	createElement(tag, attributes) {
		let base = $(document.createElement(tag));

		if (attributes) {
			for (let attr in attributes) {
				base.attr(attr, attributes[attr]);
			}
		}

		this.root.append(base);
	}

	defineType() {

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
			this.root.style[key] = properties[key];
		}
	}

	attr(attr, value) {
		this.root.setAttribute(attr, value);
	}

	maximize() {
		this.css({"width" : "100%", "height" : "100%"});
	}

	append(element) {
		if (typeof content == HexObject) {
			this.root.appendChild(element.root);
		} else if (typeof content == 'object') {
			this.root.appendChild(element);
		}
	}

	content(content) {
		if (typeof content == HexObject) {
			this.append(content.root);
		} else if (typeof content == 'object') {
			this.append(content);
		} else if (typeof content == 'string') {
			this.root.innerHTML = content;
		}
	}
}

function $(selector) {
	if (typeof selector == "string") {
		return new HexObject(document.querySelector(selector));
	} else if (typeof selector == "object") {
		return new HexObject(selector);
	} else if (typeof selector == 'function') {
		selector();
	}
}


let App = new jHex()
