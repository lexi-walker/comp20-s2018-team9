//initializes Map
var everest = {lat: 27.9878, lng: 86.9250};
  function initMap() {
	  alert("loaded");
		var myOptions = {
	  zoom: 14,
	  center: everest,
	  mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	 map = new google.maps.Map(document.getElementById("map"), myOptions);
	}
