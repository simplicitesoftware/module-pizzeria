PzaOrder.preValidate = function() {
	var f = this.getField("pzaOrdPhone");
	f.setValue(new PhoneNumTool("us").getNationalNumber(f.getValue()));
};

PzaOrder.preCreate = function() {
	try {
		var origin = this.getGrant().getParameter("PZA_ORIGIN_COORDINATES");
		var maxDistance = this.getGrant().getIntParameter("PZA_MAX_DISTANCE");
		var distance = new GMapTool(this.getGrant()).distance(origin, this.getFieldValue("pzaOrdCoordinates"), GMapTool.MODE_DRIVING, GMapTool.UNITS_IMPERIAL);
		if (distance > maxDistance)
			return Message.formatSimpleError("PZA_ERR_DISTANCE:" + distance + " miles > " + maxDistance + " miles");
	} catch(e) {
		return Message.formatSimpleWarning(e.message);
	}
};