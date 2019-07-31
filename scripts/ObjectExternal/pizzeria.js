pizzeria.display = function(params) {
	var g = this.getGrant();
	this.setDecoration(false);

	var banner = HTMLTool.getResourceImageURL(this, "BANNER");
	var gmapJS = new GMapTool(g).getJSURL();
	var render = "pizzeria.render('" + Globals.getContextPath() + "', " + this.isPublic() + ", '" + banner + "')";

	if (this.isPublic()) {
		var wp = new BootstrapWebPage(params.getRoot(), this.getDisplay(), false);
		wp.setFavicon(HTMLTool.getResourceIconURL(this, "FAVICON"))
		wp.appendAjax();
		wp.appendMustache();
		wp.appendJSIncludes(HTMLTool.bootboxJS());
		wp.appendJSInclude(gmapJS);
		wp.appendCSSInclude(HTMLTool.getResourceCSSURL(this, "STYLES"));
		wp.appendJSInclude(HTMLTool.getResourceJSURL(this, "SCRIPT"));
		wp.append(HTMLTool.getResourceHTMLContent(this, "HTML"));
		wp.setReady(render);
		return wp.toString();
	} else {
		this.addMustache();
		this.addExtraJS(HTMLTool.bootboxJS());
		this.addExtraJS(gmapJS);
		return this.javascript(render);
	}
};