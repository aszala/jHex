class jHex {
	constructor() {
		$("body").css({"margin" : "0"});
		$("html").maximize();
		$("body").maximize();

		this.root = $("#root");
		this.root.maximize();

		this.styles = this.createElement("style", {"type" : "text/css"});
		$("head").append(this.styles);
	}

	createElement(tag, attributes, content) {
		let base = $(document.createElement(tag));

		if (attributes) {
			for (let attr in attributes) {
				base.attr(attr, attributes[attr]);
			}
		}

		base.content(content);

		this.root.append(base);

		return base;
	}

	defineType(name, properties, pseudoElem) {
		let styles = "";
		let substyles = {};

		for (let prop in properties) {
			if (prop.includes("&:")) {
				this.defineType(name, properties[prop], prop.substring(1));
			} else {
				styles += `${prop}: ${properties[prop]};`;
			}
		}

		let base = '';

		if (pseudoElem) {
			base = `[type~="${name}"]${pseudoElem} { ${styles} }`;
		} else {
			base = `[type~="${name}"] { ${styles} }`;
		}

		this.styles.append(base);
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

	maximize(dim) {
		if (dim == "width") {
			this.css({"width" : "100%"});
		} else if (dim == "height") {
			this.css({"height" : "100%"});
		} else {
			this.css({"width" : "100%", "height" : "100%"});
		}
	}

	forceCenter(dim) {
		if (this.root.style["position"].length == 0) {
			this.css({"position" : "relative"});
		}

		if (dim) {
			if (dim == "horizontal") {
				this.css({
					"left": "50%",
					"transform": `${this.element.style["transform"]} translateX(-50%)`
				});
			} else if (dim == "vertical") {
				this.css({
					"top": "50%",
					"transform": `${this.element.style["transform"]} translateY(-50%)`
				});
			}
		} else {
			this.css({
				"top": "50%",
				"left": "50%",
				"transform": `${this.element.style["transform"]} translateX(-50%) translateY(-50%)`
			});
		}
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

	addListener(event, action) {
		this.root.addEventListener(event, action);
	}

	get childCount() {
		return this.element.children.length;
	}

	child(i) {
		return $(this.element.children[i]);
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
