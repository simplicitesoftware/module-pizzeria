var pizzeria = typeof pizzeria !== 'undefined' ? pizzeria : (function($) {
	var app, piz;

	function render(root, pub, banner) {
		// ZZZ Using parent page only makes sense for **non public** access to this page ZZZ
		app = (!pub && parent && parent.Simplicite ? parent.Simplicite.Application : null) || new Simplicite.Ajax(root, 'api', 'pizzeria', 'simplicite');
		piz = app.getBusinessObject('PzaPizza');
		piz.toFixed = function() { return function(n, r) { return parseFloat(r(n)).toFixed(2); } }; // Mustache rendering for decimal
		piz.bannerURL = banner;
		piz.search(function() {
			var p = $('#pizzeria').html(Mustache.render($('#pizzeria-template').html(), piz));
			p.find('img').click(function() {
				var pizza = piz.getItem($(this).data('id').toString()); // Get list item from row ID
				if (pizza.pzaPizVideo)
					bootbox.alert({
						closeButton: false,
						title: pizza.pzaPizName,
						message: Mustache.render($('#pizzeria-video-template').html(), pizza)
					});
			});
			p.find('button').click(function() {
				var pizza = piz.getItem($(this).data('id').toString()); // Get list item from row ID
				bootbox.confirm({
					closeButton: false,
					title: pizza.pzaPizName,
					message: Mustache.render($('#pizzeria-order-template').html(), pizza),
					callback: function(res) {
						if (res) {
							var ord = app.getBusinessObject('PzaOrder');
							ord.item.pzaOrdPizId = pizza.row_id;
							ord.item.pzaOrdName = $('#pizzeria-name').val();
							ord.item.pzaOrdAddress = $('#pizzeria-address').val();
							ord.item.pzaOrdCoordinates = $('#pizzeria-coordinates').val();
							ord.item.pzaOrdPhone = $('#pizzeria-phone').val();
							ord.item.pzaOrdEmail = $('#pizzeria-email').val();
							ord.item.pzaOrdComments = $('#pizzeria-comments').val();
							ord.create(function() {
								bootbox.alert({ title: 'Confirmation', message: 'Thank you!' });
							}, null, { error: function(err) {
								bootbox.alert({ title: 'Error', message: $("<pre/>").append(app.getErrorMessage(err)) });
							}});
						}
					},
					buttons: {
						confirm: { label: 'Order', className: 'btn-success', callback: function() {
							bootbox.alert({ message: "Not yet implemented, sorry" });	
						}},
						cancel: { label: 'Cancel', className: 'btn-danger' }
					}
				}).on('shown.bs.modal', function() {debugger;
					var addr = $('#pizzeria-address')[0];
					var ac = new google.maps.places.Autocomplete(addr);
					ac.addListener("place_changed", function() {
						var l = ac.getPlace().geometry.location;
						$('#pizzeria-coordinates').val(l.lat() + "," + l.lng());
					});
				});
			})
		}, { pzaPizAvailable: true }, { inlineDocs: true });
	}

	return { render: render }
})(jQuery);