function bme(text) {
	return text.replace('b', "🅱️").replace('B', "🅱️");

}

(function transformTree(transform) {
	var walker = document.createTreeWalker(
		document.body,
		NodeFilter.SHOW_TEXT,
		null,
		false
	);
	
	var node;
	while(node = walker.nextNode()) {
		node.nodeValue = transform(node.nodeValue);
	}
})(bme);