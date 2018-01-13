if (Meteor.isClient) {
  // load the map with API key
  Meteor.startup(function() {
    GoogleMaps.load({key: 'AIzaSyAOkrnyoXNBvje7f0bZbCqPAyOM42IExy0'});
  });

  Template.map.onCreated(function() {
    GoogleMaps.ready('map', function(map) {
      // create a markers for every location
      var gyuKaku = new google.maps.Marker({
        position: {lat: 40.728416, lng: -73.991454},
        map: map.instance,
        title: "Gyu-Kaku Japanese BBQ",
        url: 'https://www.yelp.com/biz/gyu-kaku-japanese-bbq-new-york',
        icon: 'http://maps.gstatic.com/mapfiles/ms2/micons/restaurant.png',
        animation: google.maps.Animation.DROP
      });
      var spot = new google.maps.Marker({
        position: {lat: 40.729609, lng: -73.988954},
        map: map.instance,
        title: "Spot Desert Bar",
        url: 'https://www.yelp.com/biz/spot-dessert-bar-new-york-2',
        icon: 'http://maps.gstatic.com/mapfiles/ms2/micons/restaurant.png',
        animation: google.maps.Animation.DROP
      });
      var tesla = new google.maps.Marker({
        position: {lat: 40.742403, lng: -74.007301},
        map: map.instance,
        title: "Tesla",
        icon: 'http://maps.gstatic.com/mapfiles/ms2/micons/red-pushpin.png',
        url: 'https://www.tesla.com/',
        animation: google.maps.Animation.DROP
      });
      var barnesAndNoble = new google.maps.Marker({
        position: {lat: 40.737116, lng: -73.989596},
        map: map.instance,
        title: "Barnes & Noble",
        url: 'https://www.barnesandnoble.com/',
        icon: 'http://maps.gstatic.com/mapfiles/ms2/micons/shopping.png',
        animation: google.maps.Animation.DROP
      });
      var washingtonSqPark = new google.maps.Marker({
        position: {lat: 40.730814, lng: -73.997450},
        map: map.instance,
        title: "Washington Square Park",
        url: 'https://www.yelp.com/biz/washington-square-park-new-york',
        icon: 'http://maps.gstatic.com/mapfiles/ms2/micons/tree.png',
        animation: google.maps.Animation.DROP
      });

      // create event listeners to open new tabs when markers are clicked on
      function addListen(variable) {
        google.maps.event.addListener(variable, 'click', function() {
          var w = window.open('_blank');
          w.window.location.href = this.url;
        });
      };
      addListen(gyuKaku);
      addListen(spot);
      addListen(tesla);
      addListen(barnesAndNoble);
      addListen(washingtonSqPark);
    });
  });

  // set the center point and zoom
  Template.map.helpers({
    mapOptions: function() {
      if (GoogleMaps.loaded()) {
        return {
          center: new google.maps.LatLng(40.733672, -73.994951),
          zoom: 14
        };
      }
    }
  });
};
