$(function() {
	
	//Added Google Map
  var latitude = $('#google-map').data('latitude')
  var longitude = $('#google-map').data('longitude')
  function initMap() {
    var myLatlng = new google.maps.LatLng(latitude,longitude);
    var mapOptions = {
      zoom: 18,
      scrollwheel: false,
      center: myLatlng
    };
    var map = new google.maps.Map(document.getElementById('google-map'), mapOptions);
    var contentString = '';
    var infowindow = new google.maps.InfoWindow({
      content: '<div class="map-content"><div class="address">' + $('.address').html() + '</div></div>'
    });
    var marker = new google.maps.Marker({
      position: myLatlng,
      icon: '../images/icons/contact-us/map-placeholder.png',
      map: map
    });
    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map,marker);
    });
  }
  google.maps.event.addDomListener(window, 'load', initMap);
})