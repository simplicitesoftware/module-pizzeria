if (typeof pizzeria === 'undefined') pizzeria = (function($) {
	var app;

	function render(root, banner) {
		app = Simplicite.Application || new Simplicite.Ajax(root, 'uipublic');
		var piz = app.getBusinessObject('PzaPizza');
		piz.toFixed = function() { return function(n, r) { return parseFloat(r(n)).toFixed(2); } }; // Mustache rendering for decimal
		piz.bannerURL = banner;
		piz.search(function() {
			var p = $('#pizzeria').html(Mustache.render($('#pizzeria-template').html(), piz));
			p.find('img').click(function() {
				var pizza = piz.getItem($(this).data('id')); // Get list item from row ID
				if (pizza.pzaPizVideo)
					bootbox.alert({
						title: pizza.pzaPizName,
						message: Mustache.render($('#pizzeria-video-template').html(), pizza)
					});
			});
			p.find('button').click(function() {
				var pizza = piz.getItem($(this).data('id')); // Get list item from row ID
				bootbox.confirm({
					title: pizza.pzaPizName,
					message: Mustache.render($('#pizzeria-order-template').html(), pizza),
					callback: function(res) {
						if (res) {
							var ord = app.getBusinessObject('PzaOrder');
							ord.item.pzaOrdPizId = pizza.row_id;
							ord.item.pzaOrdName = $('#pizzeria-name').val();
							ord.item.pzaOrdAddress = $('#pizzeria-address').val();
							ord.item.pzaOrdPhone = $('#pizzeria-phone').val();
							ord.item.pzaOrdEmail = $('#pizzeria-email').val();
							ord.create(function() {
								bootbox.alert({ message: 'Order placed! Thank you.' });
							});
						}
					},
					buttons: {
						confirm: { label: 'Order', className: 'btn-success' },
						cancel: { label: 'Cancel', className: 'btn-danger' }
					}
				});
			})
		}, {}, { inlineDocs: true });
	}

	return { render: render }
})(jQuery);
