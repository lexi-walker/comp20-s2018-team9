//initializes Map
  function initMap() {
	  alert("loaded");
		var myOptions = {
	  zoom: 14,
	  center: whereAmI,
	  mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	 map = new google.maps.Map(document.getElementById("map"), myOptions);
	}
