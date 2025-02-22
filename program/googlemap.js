function initialize() {
    var myLatlng = new google.maps.LatLng(37.3771031, 46.2560688);
    var mapOptions = {
      zoom: 15,
      center: myLatlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
     
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
     
    var contentString = '<div style="direction: rtl; text-align: right;font-family: Tahoma;">' +
                                '<h3>مراغه , میدان مادر</h3>' +
                                 '<h4>ثبت نام ناوگان اسنپ در مراغه</h4>' +
                                 '</div>';
     
    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });
     
    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'ثبت نام ناوگان اسنپ در مراغه'
    });
     
    infowindow.open(map, marker);
    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map, marker);
    });
  }