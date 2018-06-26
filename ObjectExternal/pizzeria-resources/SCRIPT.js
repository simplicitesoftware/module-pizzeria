if (typeof pizzeria === "undefined") pizzeria = (function($) {
	var app;

	function render(root, banner) {
		app = Simplicite.Application || new Simplicite.Ajax(root, 'uipublic');
		var piz = app.getBusinessObject('PzaPizza');
		piz.toFixed = function() { return function(n, r) { return parseFloat(r(n)).toFixed(2); } }; // Mustache rendering for decimal
		piz.bannerURL = banner;
		piz.search(function() {
			$("#pizzeria").html(Mustache.render($("#pizzeria-template").html(), piz)).find("img").click(function() {
				var item = piz.getItem($(this).data("id")); // Get list item from row ID
				if (item.pzaPizVideo) {
					var video = $("<iframe/>", { width: 560, height: 315, src: item.pzaPizVideo, frameborder: "0", allow: "autoplay; encrypted-media", allowfullscreen: true });
					bootbox.alert({ title: item.pzaPizName, message: video });
				}
			});
		}, {}, { inlineDocs: true });
	}

	return { render: render }
})(jQuery);
