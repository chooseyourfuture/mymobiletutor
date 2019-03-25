window.onload = function(){
	
	
document.getElementById("userName").innerHTML = getUserName();
	
};

function logoutUser(){
	deletCookie('user');
	deletCookie('userID');
}

function getUserName(){
	var leUser = "";
	leUser = getCookie('user');
	var result = leUser.split("+");
	var userOut = "";
	for (var i = 0; i < result.length; i++){
		userOut = userOut + " "+ result[i];
	}
	
	console.log(userOut);
	return userOut;
}

//Save Language Setting
function setLang(leLanguage){
	var languageSetting = leLanguage;
	setCookie("chosenLanguage",languageSetting,180);
	console.log(getCookie("chosenLanguage"));
}

//Cookie functions
function setCookie(cname, cvalue, exdays) {
	if (exdays == 0){
		document.cookie = cname + "=" + encodeURIComponent(cvalue) + ";  path=/";     //Thynote Encoding cookie value to try and resolve iphone issues
	}else{
		var d = new Date();
		d.setTime(d.getTime() + (exdays*24*60*60*1000));
		var expires = "expires="+ d.toUTCString();
		document.cookie = cname + "=" + encodeURIComponent(cvalue) + ";" + expires + ";  path=/";  //Thynote Encoding cookie value to try and resolve iphone issues
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

function deleteCookie(cname) {
  document.cookie = cname + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
//