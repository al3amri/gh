$(document).ready(init);

function init() {
    
	
	/* certain countries requires the  latitude and  longitude in this format
	var mymap = L.map('map').setView([51.505, -0.09], 13);
	*/
	
	var mymap = L.map('map').setView([24.4539, 54.3773], 13);
	
	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?lang=en', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org">OpenStreetMap</a> contributors'
}).addTo(mymap);
    
  
   var greenIcon = L.icon({
    iconUrl: 'images/leaf-green.png',
    shadowUrl: 'images/leaf-shadow.png',
    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
    
       var coffeeIcon = L.icon({
    iconUrl: 'images/cup_of_coffee.png',
    shadowUrl: 'images/leaf-shadow.png',
    iconSize:     [35, 45], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [15, 45], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -45] // point from which the popup should open relative to the iconAnchor
});
    

    var circle = L.circle([24.4539, 54.3773], {
    color: 'red',
    fillColor: 'yellow',
    fillOpacity: 0.2,
    radius: 2000
}).addTo(mymap);
    
    
        var bateel_cafe_marker = L.marker([24.4646486,54.3279639], {icon: coffeeIcon}).addTo(mymap);
    bateel_cafe_marker.bindPopup("<b>Bateel Cafe</b>.");



    var marina_mall_marker = L.marker([24.4761, 54.3215], {icon: greenIcon}).addTo(mymap);
    marina_mall_marker.bindPopup("<b>Marina Mall</b>.");


    var abu_dhabi_marker = L.marker([24.4959, 54.3832]).addTo(mymap);
    abu_dhabi_marker.bindPopup("<b>Abu Dhabi Mall</b>.");

    
}

$(document).ready(init); //when page starts call the init function

function init(){
    var theme="light";
    if(localStorage.getItem("theme") != null){
        theme=localStorage.getItem("theme");
    }
    if(theme=="light"){
        light_theme();
    }
    else if(theme=="dark"){
        dark_theme();
    }
}

function light_theme(){
    $("body").css("background-color","white");
    $("div.movie_title").css("color","darkblue");
    $("nav").removeClass("navbar-dark")
            .addClass("navbar-light"); 
    
    localStorage.setItem("theme","light");
}

function dark_theme(){
    $("body").css("background-color","black");
    $("div.movie_title").css("color","white");
    $("nav").removeClass("navbar-light")
             .addClass("navbar-dark");
     
     localStorage.setItem("theme","dark");
}


$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});



