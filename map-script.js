function initMap(){

  lifemap = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: {lat: 42.4075, lng: -71.1190} //Tufts university
  });

  geocoder = new google.maps.Geocoder();
}

//<script src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBXyzKlmSZKd_R3le8xjYbtvO236NS5L2w"></script>
var delay = 50;

function plotNext(iter, locations) {
  geocoder.geocode({'address':locations[iter].place}, function (results,status){
    if (status == google.maps.GeocoderStatus.OK) {
      var pos = results[0].geometry.location;

      heatmap = new google.maps.visualization.HeatmapLayer({
        data: [{location: new google.maps.LatLng(pos.lat(), pos.lng()), weight:locations[iter].time}],
        map: lifemap,
        radius: 20,
        gradient: [
                  'rgba(255, 255, 255, 0)',
                  'rgba(193, 235, 176, 1)',
                  'rgba(144, 177, 144, 1)',
                  'rgba(33, 109, 185, 1)',
                  'rgba(0, 63, 255, 1)',
                  'rgba(0, 0, 255, 1)',
                  'rgba(0, 0, 223, 1)',
                  'rgba(0, 0, 191, 1)',
                  'rgba(0, 0, 159, 1)',
                  'rgba(0, 0, 127, 1)',
                  'rgba(63, 0, 91, 1)',
                  'rgba(127, 0, 63, 1)',
                  'rgba(199, 20, 109, 1)',
                  'rgba(255, 0, 147, 1)'
                ]
      });
  /*
        var marker = new google.maps.Marker({
          map: lifemap,
          position: pos
        });*/
    }
    else if (status == google.maps.GeocoderStatus.OVER_QUERY_LIMIT) {
        iter--;
        delay++;
    }
    recurse(+iter + 1, locations);
  });
}

function recurse(iter, locations) {
  //console.log(iter)
  if (iter < locations.length) {
    setTimeout('plotNext("'+iter+'",locations)', delay);
  }
}

function getCoords(locations){
  recurse(0, locations);
}
