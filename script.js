function iniciarMap(){
    var coord = {lat:18.1306755 ,lng: -96.8443824};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}