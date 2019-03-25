//map vars
var map;
var infowindow;
var geocoder;
var directionsService;
var directionsDisplay;
var userCenter = {lat: 60.456329, lng: 22.284974}; /*Turku*/
var routeNums = 0;
var searchMarkers = [];
var storedAddresses = [];
openDb();

	
function myMap() {
	geocoder = new google.maps.Geocoder(); 
	directionsService = new google.maps.DirectionsService;
    directionsDisplay = new google.maps.DirectionsRenderer;
	 
	//Map load based on Location 
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(useCords, handleError);
    } else { 
        loadMap(userCenter);
    }
	//
	
	/*MAP Search Triggers*/
	document.getElementById('navbarDropdown1').addEventListener('click', function() {
		document.getElementById('nearbyInput').value = "";
	});
	
	document.getElementById('navbarDropdown2').addEventListener('click', function() {
		document.getElementById('addressInput').value = "";
	});
	document.getElementById('nearbyInputButton').addEventListener('click', function() {
		searchString = document.getElementById('nearbyInput').value;
		console.log(searchString);
		searchMap(searchString,false);
	});
	document.getElementById('addressInputButton').addEventListener('click', function() {
		searchString = document.getElementById('addressInput').value;
		console.log(searchString);
		searchMap(searchString,true);
	});
	/*End map Searches*/
	
	//Map Address Event Handler
	document.getElementById('customAddressInputButton').addEventListener('click', function() {
		customAddress = document.getElementById('customAddressInput').value;
		customAddressName = document.getElementById('customAddressInputName').value;
		if(customAddress == "" || customAddressName == ""){
			document.getElementById('addWarning').innerHTML = `
			<div class="alert alert-warning alert-dismissible fade show" role="alert">
			  <strong>Please add both a name and address to the field</strong>
			</div>`
		}else{
			console.log(customAddress);
			if(verifyExistsAddress(customAddressName,customAddress)){
				document.getElementById('addWarning').innerHTML = `
				<div class="alert alert-warning alert-dismissible fade show" role="alert">
				  <strong>Name or address already saved!</strong>
				</div>`
			}else{
				document.getElementById('addWarning').innerHTML = `
				<div class="alert alert-success alert-dismissible fade show" role="alert">
				  <strong>Address saved successfully</strong>
				</div>`
				addCustomAddress(customAddressName,customAddress);
				document.getElementById("myPlaces").innerHTML = "";
				loadAddressList();
				loadSavedArray();
			}	
		}		
	});
	//End
}
  
  

  

/*USER LOCATION*/
function useCords(position){
	var latlon = {lat: position.coords.latitude, lng: position.coords.longitude};
	loadMap(latlon);
}

function handleError(error){
	switch(error.code) {
        case error.PERMISSION_DENIED:
			console.log("Position Error 1");
			loadMap(userCenter);
            break;
        case error.POSITION_UNAVAILABLE:
			console.log("Position Error 2");
			loadMap(userCenter);
            break;
        case error.TIMEOUT:
			console.log("Position Error 3");
			loadMap(userCenter);
            break;
        case error.UNKNOWN_ERROR:
			console.log("Position Error 4");
			loadMap(userCenter);
            break;
    }
}
/*END USER LOCATION*/

function loadMap(coords){
  userCenter = new google.maps.LatLng(coords);
  map = new google.maps.Map(document.getElementById('map'), {
      center: userCenter,
	  zoom: 15,
      mapTypeId: 'roadmap',
	  mapTypeControl: false,
	  zoomControl: false,
    });
	var locationImage = {
		url: '../img/Resources/Icons/marker current location color 3.svg', // url
		scaledSize: new google.maps.Size(50, 50), // scaled size
		origin: new google.maps.Point(0,0), // origin
		anchor: new google.maps.Point(25,25) // anchor
	};
	//var locationImage =  '../img/Resources/Icons/marker current location color 3.svg';
	var markerCenter = new google.maps.Marker({
          position: userCenter,
          map: map, 
		  icon: locationImage
	});
	infoYou = new google.maps.InfoWindow();
	google.maps.event.addListener(markerCenter, 'click', function() {
	infoYou.setContent("Hi!"); 
	infoYou.open(map, this);
	});
	var centerOnIcon = markerCenter.getPosition(); // returns LatLng object
	map.setCenter(centerOnIcon); // setCenter takes a LatLng object
	
	
//Load redirect source search if any
	redirectSearches();	
}


  function callback(results, status) {
	if (status === google.maps.places.PlacesServiceStatus.OK) {
	  for (var i = 0; i < results.length; i++) {
		createMarker(results[i]);
	  }
	}
	if(status=="ZERO_RESULTS"){
		alert("No results found. Check spelling.");
	}
  }

  function createMarker(place) {
	var placeLoc = place.geometry.location;
	infowindow = new google.maps.InfoWindow();
	var marker = new google.maps.Marker({
	  map: map,
	  position: place.geometry.location
	});
	searchMarkers.push(marker);

	google.maps.event.addListener(marker, 'click', function() {
		var markerContent = '<p>'+place.name+'</p><p id="addressID'+routeNums+'">'+ place.formatted_address +'</p><p><button onclick="loadContent('+routeNums+')">Route</button><button onclick="addToAddressBook('+routeNums+')">Add address</button>';
		routeNums = routeNums +1;
		infowindow.setContent(markerContent); 
		infowindow.open(map, this);
	});
	
	
	var bounds = new google.maps.LatLngBounds();
	for (var i = 0; i < searchMarkers.length; i++) {
	 bounds.extend(searchMarkers[i].getPosition());
	}

	map.fitBounds(bounds);
	map.setCenter(bounds.getCenter());
	map.fitBounds(bounds);
 }
	
/*MAP SEARCHES*/
function searchMap(searchQuery,isAddress,manualName){
	setMapOnAll(null);
	directionsDisplay.setMap(null);
	if (isAddress == true){
		geocoder.geocode( { 'address': searchQuery}, function(results, status) {
		if (status == 'OK') {
			map.setCenter(results[0].geometry.location);
			infowindow = new google.maps.InfoWindow();
			var marker = new google.maps.Marker({
				map: map,
				zoom:15,
				position: results[0].geometry.location
			});
			searchMarkers.push(marker);
			
			google.maps.event.addListener(marker, 'click', function() {
				if(manualName != undefined){
					var markerContent = '<p>'+manualName+'</p><p id="addressID'+routeNums+'">'+ results[0].formatted_address +'</p><p><button onclick="loadContent('+routeNums+')">Route</button><button onclick="addToAddressBook('+routeNums+')">Add address</button>';
				}else{
					var markerContent = '<p id="addressID'+routeNums+'">'+ results[0].formatted_address +'</p><p><button onclick="loadContent('+routeNums+')">Route</button><button onclick="addToAddressBook('+routeNums+')">Add address</button>';
				}
				routeNums = routeNums +1;
				infowindow.setContent(markerContent);
				infowindow.open(map, this);
			});

		  } else {
			console.log('Geocode was not successful for the following reason: ' + status);
			if(status=="ZERO_RESULTS"){
				alert("No results found. Check spelling");
			}
		  }
		});	
		
	}else{
		var request = {
			location: userCenter,
			radius: '8000',
			query: searchQuery
		};
		service = new google.maps.places.PlacesService(map);
		service.textSearch(request, callback);
	}

    document.getElementById("navbarSupportedContent").classList.remove("show");
}
/*End map Searches*/

/*Routing*/
function loadContent(leRouteNums){
	var routeID = "addressID"+leRouteNums;
	console.log(document.getElementById(routeID).innerHTML);
	var destinationLocation = document.getElementById(routeID).innerHTML;

	directionsDisplay.setMap(map);

	 directionsService.route({
          origin: userCenter,
          destination: destinationLocation,
          travelMode: 'DRIVING'
        }, function(response, status) {
          if (status === 'OK') {
            directionsDisplay.setDirections(response);
			$('#modalSavedPlaces').modal('hide');
			document.getElementById("addWarningSaved").innerHTML = "";
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });
	 document.getElementById("navbarSupportedContent").classList.remove("show");
}
//END ROUTING

//Thynote: URL preloads (aka redirected from another part of the site.)
function redirectSearches(){
	
	var searchList = getUrlParameter("search");
	var eventAddress = getUrlParameter("event");
	var isManual = getUrlParameter("manual");
	
	
	//Nearby Search
	if (searchList != undefined && eventAddress == undefined){
		searchMap(searchList,false);
	}
	
	//Address Search
	if (searchList != undefined && searchList != "None Given" && eventAddress == "true"){
		searchMap(searchList,true);
	}
	
	//Manual Lists
	if (searchList != undefined && eventAddress == undefined && isManual =="true"){
		getList(searchList);
	}
	
	//Load Address Book
	//loadAddressList();   Thynote: on click for tab now 
}

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};	
//End Thynote			

//Full Load Address Promis 12/10/18
function fullLoad(){
	document.getElementById("addWarningSaved").innerHTML = "";
	var promise = new Promise(function(resolve,reject){
		var gotValue = false;
		var leEnd = function() {
			if (storedAddresses!= undefined && storedAddresses != ''){
				resolve("DBValuesIn");
			}else{
				reject(Error("Nope; DB get fail"));
			}			
		}

		storedAddresses = getAllRecords(DB_STORE_PLACES);
		setTimeout(leEnd, 2000); 

	});
	
	promise.then(function(result) {
		loadAddressList();
		console.log("leListShouldLoad");
	}, function(err) {
		/*document.getElementById("addWarningSaved").innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert">
																<strong>Looks like getting your saved places is taking a bit longer than expected. Please come back later!<strong>
															</div>`  12-17-18 removed because doesn't show when something in dB*/
		console.log(err); // Error: "It broke"
	});
}

//Create/retrieve saved address list
function loadSavedArray(){
	storedAddresses = getAllRecords(DB_STORE_PLACES);
}

function addToAddressBook(leID){
	document.getElementById('addWarning').innerHTML = "";
	var addID = "addressID"+leID;
	var addressText = document.getElementById(addID).innerHTML;
	document.getElementById('customAddressInputName').value = "";
	document.getElementById('customAddressInput').value = addressText;
	$('#myModal').modal('show');
}

function addCustomAddress(addressName,address){	
	var leRecord = [{addressName,address}];
	addRecord(DB_STORE_PLACES,leRecord);	
}
		 
function deleteFromAddress(seqID){
	removeRecord(DB_STORE_PLACES, seqID);
	loadSavedArray();
	document.getElementById("addWarningSaved").innerHTML = "";
	document.getElementById("addWarningSaved").innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert">
																<strong>Place removed from the list<strong>
															</div>`
	var card = "add-"+seqID;
	document.getElementById(card).innerHTML = "";
	//loadAddressList();
	//$('#modalSavedPlaces').modal('hide'); 
}

function loadAddressList(){
	var leList = '';
	storedAddresses.forEach(function(leRecord){
		routeNums = routeNums +1; 
		leList=leList+' <div id="add-'+leRecord.placeID+'" class="card-body"><h5 class="card-title">'+leRecord.addressName +'</h5><p id="addressID'+ leRecord.placeID +'"><a href="#" onclick="searchMapAddress('+leRecord.placeID+')">'+ leRecord.address + '</a></p><p><button onclick="loadContent('+ leRecord.placeID +')">Route</button><button onclick="deleteFromAddress(' +leRecord.placeID+ ')">Delete</button></p></div>';
	});
	document.getElementById("addWarningSaved").innerHTML = "";
	document.getElementById("myPlaces").innerHTML = leList;
	
}

//addm for link to route on saved aaddresses
function searchMapAddress(addID){
	storedAddresses.forEach(function(leRecord){
		if(leRecord.placeID == addID){
			var address = leRecord.address;
			searchMap(address,true);
			$('#modalSavedPlaces').modal('hide'); 
			document.getElementById("addWarningSaved").innerHTML = "";
		}
	});
}
//end


function verifyExistsAddress(addressName,address){
	var exists = false;
	storedAddresses.forEach(function(leRecord){
		if( leRecord.address == address || leRecord.addressName == addressName){
			exists = true;
		}
	});
	return exists;
}
//End Thynote

//Cookie functions
function setCookie(cname, cvalue, exdays) {
	if (exdays == 0){
		document.cookie = cname + "=" + encodeURIComponent(cvalue) + ";";     //Thynote Encoding cookie value to try and resolve iphone issues
	}else{
		var d = new Date();
		d.setTime(d.getTime() + (exdays*24*60*60*1000));
		var expires = "expires="+ d.toUTCString();
		document.cookie = cname + "=" + encodeURIComponent(cvalue) + ";" + expires + ";";  //Thynote Encoding cookie value to try and resolve iphone issues
	}   
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
//

//Manual Lists
function getList(listName){
	var docName = 'scripts/'+listName+'.json';
	var request = new XMLHttpRequest();
	request.open('GET', docName);
	request.onload = function(){
		var eventData = JSON.parse(request.responseText);
		plotAddressess(eventData);
	};
	request.send();
};

function plotAddressess(listData){
	var contents = "";
	for(var i = 0; i < listData.length; i++){
		searchMap(listData[i].address,true,listData[i].name)
	}	

}
//End Manual Lists

//Cluttering Fix
 // Sets the map on all markers in the array.
      function setMapOnAll(map) {
        for (var i = 0; i < searchMarkers.length; i++) {
          searchMarkers[i].setMap(map);
        }
      }
//End
       
//Dropdown list for nearby search
function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("nearbyInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("dropListDiv");
    a = div.getElementsByTagName("button");
    for (i = 0; i < a.length; i++) {
        if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}	

function setListItem(item){
	var value = item.innerHTML;
	var input = document.getElementById("nearbyInput");
	input.value = value;
	switch(value) {
		case "Groceries":
			value = "ruokakaupat";
			break;
		case "Student lunches":
			value = "lounaspaikat";
			break;
		case "Cafes":
			value = "kahvilat";
			break;
		case "Flea markets":
			value = "kirpputorit";
			break;
		case "Pharmacies":
			value = "apteekit";
			break;
		case "Gyms":
			value = "gyms";
			break;
		case "Libraries":
			value = "kirjastot";
			break;
		case "Bars":
			value = "baarit";
			break;
		case "Night clubs":
			value = "yökerhot";
			break;
	  default:
		value = value;
	}
	console.log(value);
	searchMap(value,false);
}
//end