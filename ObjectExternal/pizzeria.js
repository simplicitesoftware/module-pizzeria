pizzeria.display = function(params) {
	var g = this.getGrant();
	this.setDecoration(false);
	var wp = new JQueryWebPage(params.getRoot(), this.getDisplay());
	wp.setFavicon(HTMLTool.getResourceIconURL(this, "FAVICON"))
	wp.appendAjax();
	wp.appendMustache();
	wp.appendJSIncludes(HTMLTool.bootstrapJS());
	wp.appendJSIncludes(HTMLTool.bootboxJS());
	wp.appendCSSInclude(HTMLTool.getResourceCSSURL(this, "STYLES"));
	wp.appendJSInclude(HTMLTool.getResourceJSURL(this, "SCRIPT"));
	wp.appendJSInclude("https://maps.googleapis.com/maps/api/js?key=" + g.getParameter("GOOGLE_API_KEY") + "&libraries=places");
	wp.append(HTMLTool.getResourceHTMLContent(this, "HTML"));
	wp.setReady("pizzeria.render('" + wp.getRoot() + "', '" + HTMLTool.getResourceImageURL(this, "BANNER") + "')");
	return wp.toString();
};