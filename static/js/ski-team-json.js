
var layers = {
  Alpine: new L.LayerGroup(),
  Snowboard: new L.LayerGroup(),
  Freestyle: new L.LayerGroup(),
  NordicCombined: new L.LayerGroup(),
  Freeski: new L.LayerGroup(),
  CrossCountry: new L.LayerGroup(),
  SkiJumping: new L.LayerGroup()
};

var myMap = L.map("map", {
  center: [39.381266, -97.922211],
  zoom:4.5,
  layers: [
    layers.Alpine,
    layers.Snowboard,
    layers.Freestyle,
    layers.NordicCombined,
    layers.Freeski,
    layers.CrossCountry,
    layers.SkiJumping
  ]
});

// Adding tile layer
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);
var overlays ={ 

  "Alphine" :layers.Alpine,
  "Snowboard" :layers.Snowboard,
  "Frees tyle" :layers.Freestyle,
  "Nordic Combined" :layers.NordicCombined,
  "Free ski" :layers.Freeski,
  "Cross Country" :layers.CrossCountry,
  "Ski Jumping" :layers.SkiJumping
};
// Create a control for our layers, add our overlay layers to it
L.control.layers(null, overlays).addTo(myMap);




var newtry = ("ski.json");


d3.json(newtry, function(data) {

  console.log(data);

  for (var i = 0; i < data.length; i++) {
  
   // var location = response[i].location;
    L.marker([data[i].lat, data[i].long])
    .bindPopup("<h1>" + data[i].name + "</h1> <hr> <h3>" + data[i].team + "</h1> <hr> <h3>" + data[i].city + "</h3>").addTo(myMap)
  }

});

  // // Loop through the stations (they're the same size and have partially matching data)
  // for (var i = 0; i < stationInfo.length; i++) {

  //   // Create a new station object with properties of both station objects
  //   var station = Object.assign({}, stationInfo[i], stationStatus[i]);
  //   // If a station is listed but not installed, it's coming soon
  //   if (!station.is_installed) {
  //     stationStatusCode = "COMING_SOON";
  //   }
  //   // If a station has no bikes available, it's empty
  //   else if (!station.num_bikes_available) {
  //     stationStatusCode = "EMPTY";
  //   }
  //   // If a station is installed but isn't renting, it's out of order
  //   else if (station.is_installed && !station.is_renting) {
  //     stationStatusCode = "OUT_OF_ORDER";
  //   }
  //   // If a station has less than 5 bikes, it's status is low
  //   else if (station.num_bikes_available < 5) {
  //     stationStatusCode = "LOW";
  //   }
  //   // Otherwise the station is normal
  //   else {
  //     stationStatusCode = "NORMAL";
  //   }
  // }

// // 
// for (var i = 0; i < stationInfo.length; i++) {

//   // Create a new station object with properties of both station objects
//   var station = Object.assign({}, stationInfo[i], stationStatus[i]);
//   // If a station is listed but not installed, it's coming soon
//   if (!station.is_installed) {
//     stationStatusCode = "COMING_SOON";
//   }
//   // If a station has no bikes available, it's empty
//   else if (!station.num_bikes_available) {
//     stationStatusCode = "EMPTY";
//   }
//   // If a station is installed but isn't renting, it's out of order
//   else if (station.is_installed && !station.is_renting) {
//     stationStatusCode = "OUT_OF_ORDER";
//   }
//   // If a station has less than 5 bikes, it's status is low
//   else if (station.num_bikes_available < 5) {
//     stationStatusCode = "LOW";
//   }
//   // Otherwise the station is normal
//   else {
//     stationStatusCode = "NORMAL";
//   }

//   // Update the station count
//   stationCount[stationStatusCode]++;
//   // Create a new marker with the appropriate icon and coordinates
//   var newMarker = L.marker([station.lat, station.lon], {
//     icon: icons[stationStatusCode]
//   });

//   // Add the new marker to the appropriate layer
//   newMarker.addTo(layers[stationStatusCode]);

//   // Bind a popup to the marker that will  display on click. This will be rendered as HTML
//   newMarker.bindPopup(station.name + "<br> Capacity: " + station.capacity + "<br>" + station.num_bikes_available + " Bikes Available");

// });
