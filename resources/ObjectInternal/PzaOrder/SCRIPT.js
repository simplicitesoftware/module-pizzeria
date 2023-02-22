var PzaOrder = PzaOrder || (function() {
	Simplicite.UI.hooks.PzaOrder = function(o, cbk) {
		try {
			o.locals.ui.form.onload = function(ctn, obj) {
				function searchbox() {
					const addr = $ui.getUIField(ctn, obj, "pzaOrdAddress").ui.input[0];
					const ac = new google.maps.places.Autocomplete(addr);
					ac.addListener("place_changed", function() {
						const l = ac.getPlace().geometry.location;
						$ui.getUIField(ctn, obj, "pzaOrdCoordinates").ui.val(l.lat() + "," + l.lng());
					});
				}
				try {
					// Loads Google Maps JavaScript lib if not yet loaded
					if (typeof(google)=="undefined" || typeof(google.maps)=="undefined" || typeof(google.maps.places)=="undefined")
						$ui.loadScript({ url: Simplicite.GOOGLE_MAPS_JS_URL, onload: searchbox });
					else
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
})();