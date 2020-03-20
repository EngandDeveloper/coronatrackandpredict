var mymap = L.map('mapid').setView([43.45228, -80.5060], 13);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiY3JubWFwIiwiYSI6ImNrODBrbHIwejAwazkzam50M3M1ZzgzZHIifQ.2rjlC0umbYG2UdW4wil4XQ'
}).addTo(mymap);

//add a cirle to the map
var circle = L.circle([43.45228, -80.5060], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 5000
}).addTo(mymap);

circle.bindPopup("Active case: 9<br> Recovered case: 4<br> Death: 1");