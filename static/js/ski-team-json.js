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

// var newtry = ("ski.json");


d3.json("ski.json", function(data) {
  
  console.log(data);
  var datas=data.city;
  var teamName;
  for (var i = 0; i < data.length; i++)  {
    
    // Create a new data object with properties 
    // var station = Object.assign({}, data[i].name, data[i].team, data[i].city );
    //  Group people by their team
    if (data[i].team=="Alphine") {
      teamName = "Alphine";
    }
    
    else if (data[i].team=="Snowboard") {
      teamName = "Snowboard";
    }
    
    else if (data[i].team=="Nordic Combined") {
      teamName = "NordicCombined";
    }
    
    else if (data[i].team=="Freeski") {
      teamName = "Freeski";
    }
    else if (data[i].team=="CrossCountry") {
      teamName = "CrossCountry";
    }
    // Otherwise the station is normal
    else if (data[i].team=="Ski Jumping") {
      teamName = "SkiJumping";
     }
     L.marker([data[i].lat, data[i].long])
    .bindPopup("<h1>" + data[i].name + "</h1> <hr> <h3>" + data[i].team + "</h1> <hr> <h3>" + data[i].city + "</h3>").addTo(myMap)
    // var newMarker = L.marker([data[i].lat, data[i].long],
      
  }
  // newMarker.addTo(layers["teamName"]);

  // // Bind a popup to the marker that will  display on click. This will be rendered as HTML
  // newMarker.bindPopup("<h1>" + data[i].name + "</h1> <hr> <h3>" + data[i].team + "</h1> <hr> <h3>" + data[i].city + "</h3>").addTo(myMap);

    // // Bind a popup to the marker that will  display on click. This will be rendered as HTML
    
});
