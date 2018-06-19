if (typeof pizzeria === "undefined") pizzeria = (function($) {
	var app;

	function render(root, banner) {
		app = Simplicite.Application || new Simplicite.Ajax(root, 'uipublic');
		var piz = app.getBusinessObject('PzaPizza');
		piz.toFixed = function() { return function(n, r) { return parseFloat(r(n)).toFixed(2); } }; // Mustache rendering for decimal
		piz.bannerURL = banner;
		piz.search(function() {
			$("#pizzeria").html(Mustache.render($("#pizzeria-template").html(), piz));
		}, {}, { inlineDocs: true });
	}

	return { render: render }
})(jQuery);
