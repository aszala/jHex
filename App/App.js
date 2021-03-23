class jHex {
	constructor() {
		$("body").css({"margin" : "0"});
		$("body").maximize();

		this.root = $("#root");
		this.root.maximize();
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
		if (element instanceof HexObject) {
			this.root.appendChild(element.root);
		} else if (typeof element == 'object') {
			this.root.appendChild(element);
		} else if (typeof element == 'string') {
			this.root.appendChild(document.createTextNode(element));
		}
	}

	content(content) {
		if (content instanceof HexObject) {
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
	} else if (selector instanceof HexObject) {
		return selector;
	} else if (typeof selector == 'function') {
		selector();
	} else if (typeof selector == "object") {
		return new HexObject(selector);
	}
}



let App = new jHex()
