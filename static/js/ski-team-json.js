// Adding tile layer
var lightmap= L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
});
var layers = {
  Alpine: new L.LayerGroup(),
  Snowboard: new L.LayerGroup(),
  Freestyle: new L.LayerGroup(),
  NordicCombined: new L.LayerGroup(),
  Freeski: new L.LayerGroup(),
  CrossCountry: new L.LayerGroup(),
  SkiJumping: new L.LayerGroup()
};

// Create the map with our layers
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


lightmap.addTo(myMap);

// Create an overlays object to add to the layer control
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

  var stationStatusCode;
  for (var i = 0; i < data.length; i++)
  {

    // Create a new station object with properties of both station objects
    var station = Object.assign({}, data[i].name, data[i].team,data[i].city );

    // If a station is listed but not installed, it's coming soon
    if (data.team=="Alphine") {
      stationStatusCode = "Alphine";
    }
    // If a station has no bikes available, it's empty
    else if (data.team=="Snowboard") {
      stationStatusCode = "Snowboard";
    }
    // If a station is installed but isn't renting, it's out of order
    else if (data.team=="Nordic Combined") {
      stationStatusCode = "NordicCombined";
    }
    // If a station has less than 5 bikes, it's status is low
    else if (data.team=="Freeski") {
      stationStatusCode = "Freeski";
    }
    else if (data.team=="Cross Country") {
      stationStatusCode = "CrossCountry";
    }
    // Otherwise the station is normal
    else if (data.team=="Ski Jumping") {
      stationStatusCode = "SkiJumping"; }


  // Add the new marker to the appropriate layer
  var newMarker = L.marker([data.lat, data.long]);

// Add the new marker to the appropriate layer
  newMarker.addTo(layers[stationStatusCode]);

  // Bind a popup to the marker that will  display on click. This will be rendered as HTML
  //  L.marker([data[i].lat, data[i].long])
    newMarker.bindPopup("<h1>" + data[i].name + "</h1> <hr> <h3>" + data[i].team + "</h1> <hr> <h3>" + data[i].city + "</h3>");


  }

});
