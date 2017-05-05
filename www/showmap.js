'use strict';
/**
 * @fileOverview showMap
 */
var marks = [];

//--------------------------------------------------------------------------
/**
 * @summary **map display**
 * @description
 * Display Slappey coordinates on Google Map.
 */  
function showMap() {
  
  console.log('--- Display Coordinates.');
  var uluru = {lat: -25.363, lng: 131.044};
  var capistrano = {lat: 30.168758, lng: -97.862368};
  var everett    = {lat: 48.003093, lng: -122.218689};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: capistrano
  });
  var marker = new google.maps.Marker({
    position: capistrano,
    map: map
  });
  marker.setAnimation(google.maps.Animation.BOUNCE);
  marker.setTitle("Florian Slappey's home in Austin Texas");

  var marker2 = new google.maps.Marker({
    position: everett,
    map: map
  });

  // Display all of the lat long coordinates marks

  for (var i = 0; i < coords.length; ++i) {
    var c = coords[i];
    var pos = { lat: toDD(c.latitude), lng: toDD(c.longitude) };
    var m = 
      new google.maps.Marker({
      position: pos,
      map: map,
      title: c.comment,
      opacity: 0.5
    });
    //m.setTitle(c.comment);
    marks[i] = m;

    // Add datetime and comment popup
    // change icon
    // add selected photos
    //   - Slappey on Bergen through canal
    //   - Slappey in Lake Union, Eagle harbor, etc.
    //   - Florian Slappey on lake travis
    // fix bad comments and out of position coords

  }
}
