var myMap = L.map("map", {
  center: [39.381266, -97.922211],
  zoom:4.5
});

// Adding tile layer
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);


var newtry = ("ski.json");


d3.json(newtry, function(data) {

  console.log(data);

  for (var i = 0; i < data.length; i++) {
   // var location = response[i].location;
    L.marker([data[i].lat, data[i].long])
    .bindPopup("<h1>" + data[i].name + "</h1> <hr> <h3>" + data[i].team + "</h1> <hr> <h3>" + data[i].city + "</h3>").addTo(myMap)
  }

});