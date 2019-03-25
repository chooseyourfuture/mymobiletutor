var leContent = document.getElementById("lelisttry");
var userCenter = {lat: 60.456329, lng: 22.284974};

//Thynote: iterate through buttons, get the one with value and give them the list function.
var buttons = document.getElementsByTagName('button');
 console.log(buttons.length);
for (var i = 0, len = buttons.length; i < len; i++) {
	if (buttons[i].value != ""){
		console.log(buttons[i].value);
		buttons[i].onclick = function(){makeRequest(this.value)};
	}
}
	
function myMap() {
  //phone location 
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(useCords, handleError);
    } else { 
        loadMap(userCenter);
    }
  //
  
}

function useCords(position){
	var latlon = {lat: position.coords.latitude, lng: position.coords.longitude};
	loadMap(latlon);
}

function handleError(error){
	switch(error.code) {
        case error.PERMISSION_DENIED:
		console.log("rawr");
			loadMap(userCenter);
            break;
        case error.POSITION_UNAVAILABLE:
			loadMap(userCenter);
            break;
        case error.TIMEOUT:
			loadMap(userCenter);
            break;
        case error.UNKNOWN_ERROR:
			loadMap(userCenter);
            break;
    }
}

function loadMap(coords){
  userCenter = new google.maps.LatLng(coords);
  map = new google.maps.Map(document.getElementById('leMap'), {
      center: userCenter,
      zoom: 15
    });
console.log("boo");
}


function callback(results, status) {
	console.log(status);
  var htmlOutput = '';
  var leContent = document.getElementById("lelisttry");
  
  if (status == google.maps.places.PlacesServiceStatus.OK) {
	  
    for (var i = 0; i < results.length; i++) {	
      var place = results[i];
		htmlOutput = htmlOutput + `
			<div class="card text-white bg-secondary"> 
				<div class="card-body">
					<h5 class="card-title">${results[i].name}</h5>
					<p class="card-text">${results[i].formatted_address}</p>
					 <a href="../map.html?search=${results[i].formatted_address ? results[i].formatted_address : 'NOADDRESS'}&event=true" class="btn btn-block btn-basic">On Map</a>
				</div>
			</div>
		`
    }
	
	
  }
  leContent.innerHTML = htmlOutput;
}	

function makeRequest(listType){
	console.log(listType);/*
	var request = {
    location: userCenter,
    radius: '5000',
    keyword: [listType] //types vs keyword vs changing for text search
  };

  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
  */
  var request = {
    location: userCenter,
    radius: '5000',
    query: listType
  };

  service = new google.maps.places.PlacesService(map);
  service.textSearch(request, callback);
  
  
}