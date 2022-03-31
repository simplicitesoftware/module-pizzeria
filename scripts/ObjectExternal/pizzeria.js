pizzeria.display = function(params) {
	this.setDecoration(false);

	var g = this.getGrant();

	var pub = this.isPublic();
	var render = this.getName() + ".render(" + params.toJSONObject().put("bannerURL", HTMLTool.getResourceImageURL(this, "BANNER")).put("pub", pub).toString() + ")";

	var gmapJS = new GMapTool(g).getJSURL();
	if (pub) {
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