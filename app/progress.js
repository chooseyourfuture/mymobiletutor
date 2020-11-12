(function() {
   'use strict';

  // TODO add service worker code here
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('https://studentmobileapp.com/app/sw.js')
             .then(function() { console.log('Service Worker Registered'); });
  }
  
  var currLoc = window.location.pathname;
  console.log(currLoc);
/*   if (getCookie('user')=='' && currLoc != '/studentmobileapp.com/app/login/index.html'){
    if(currLoc != '/studentmobileapp.com/app/login/test.html'){
      // similar behavior as an HTTP redirect
      window.location.replace("/studentmobileapp.com/app/login/index.html");
    }
  } */
  
  
})();

window.addEventListener('DOMContentLoaded', function() {
  // Global app settings, especially maintenance mode and HAKA related
  // config: { enableHaka: boolean, enableMaintenance: boolean, maintenanceContent: { message: string, title: string } }
  
  $.getJSON('https://studentmobileapp.com/settings.json', (config) => {
    console.log(config);
    let isLogin = window.location.pathname.includes('/login');

    console.log(config);
    if (!config.enableHaka && isLogin) {
      console.log('is login');
      $('.direct_access').show();
      $('.haka_login').hide();
    }
    if (config.enableMaintenance) {
        // Redirect user to login if global maintenance mode is enabled and user is not in login view
        console.log(window.location.pathname);
        if (isLogin) {
            $('.maintenance_message').show();
            $('.maintenance_message h3').text(config.maintenanceContent.title);
            $('.maintenance_message p').html(config.maintenanceContent.message.replace(/(?:\r\n|\r|\n)/g, '<br>'));
            $('.login_form').hide();
            $('.terms').hide();
        }
        else {
            document.location = '/app/login';
        }
    }
  });
});

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