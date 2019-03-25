(function() {
	 'use strict';
  // TODO add service worker code here
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('https://chooseyourfuture.fi/studentmobileapp.com/app/sw.js')
             .then(function() { console.log('Service Worker Registered'); });
  }
  
  var currLoc = window.location.pathname;
  console.log(currLoc);
  if (getCookie('user')=='' && currLoc != '/studentmobileapp.com/app/login/index.html'){
	if(currLoc != '/studentmobileapp.com/app/login/test.html'){
		// similar behavior as an HTTP redirect
		window.location.replace("/studentmobileapp.com/app/login/index.html");
	}
  }
  
  
})();


//Cookie functions
function setCookie(cname, cvalue, exdays) {
	if (exdays == 0){
		document.cookie = cname + "=" + encodeURIComponent(cvalue) + ";";     //Thynote Encoding cookie value to try and resolve iphone issues
	}else{
		var d = new Date();
		d.setTime(d.getTime() + (exdays*24*60*60*1000));
		var expires = "expires="+ d.toUTCString();
		document.cookie = cname + "=" + encodeURIComponent(cvalue) + ";" + expires + "; path=/";  //Thynote Encoding cookie value to try and resolve iphone issues
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