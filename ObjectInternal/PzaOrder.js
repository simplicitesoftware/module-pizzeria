PzaOrder.preCreate = function() {
	var origin = this.getGrant().getParameter("PZA_ORIGIN_COORDINATES");
	var maxDistance = this.getGrant().getIntParameter("PZA_MAX_DISTANCE");
	var distance = GMapTool.distance(origin, this.getFieldValue("pzaOrdCoordinates"), GMapTool.MODE_DRIVING, GMapTool.UNITS_IMPERIAL)
	if (distance > maxDistance)
		return Message.formatSimpleError("PZA_ERR_DISTANCE:" + distance + " miles > " + maxDistance + " miles");
};