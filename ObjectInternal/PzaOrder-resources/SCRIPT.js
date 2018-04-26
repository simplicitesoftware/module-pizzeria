PzaOrder = (function(ui, $) {
	if (!ui) return; // Do nothing on legacy UI
	Simplicite.UI.hooks.PzaOrder = function(o, cbk) {
		try {
			o.locals.ui.form.onload = function(ctn, obj) {
				function searchbox() {
					var addr = ui.getUIField(ctn, obj, "pzaOrdAddress").ui.input[0];
					var ac = new google.maps.places.Autocomplete(addr);
					ac.addListener("place_changed", function() {
						var l = ac.getPlace().geometry.location;
						ui.getUIField(ctn, obj, "pzaOrdCoordinates").ui.val(l.lat() + "," + l.lng());
					});
				}
				try {
					if (typeof(google)=="undefined" || typeof(google.maps)=="undefined" || typeof(google.maps.places)=="undefined") {
						ui.loadScript({
							url: "https://maps.googleapis.com/maps/api/js?key=" + Simplicite.GOOGLE_API_KEY + "&libraries=places",
							onload: searchbox
						});
					} else
						searchbox();
				} catch (el) {
					console.error(el.message);
				}
			};
		} catch (e) {
			console.error(e.message);
		} finally {
			cbk && cbk();
		}
	};
})(window.$ui, jQuery);