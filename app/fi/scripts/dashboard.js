window.onload = function(){

verifyLanguage();

};

function verifyLanguage(){
	var currentDir = "fi";  //Change for fi to prevent infinite loops
	leDesiredLang = getCookie('chosenLanguage');

	if (leDesiredLang != currentDir  && leDesiredLang != ""){
		window.location.replace("../en/index.html");
	}
}

//Save Language Setting
function setLang(leLanguage){
	var languageSetting = leLanguage;
	setCookie("chosenLanguage",languageSetting,180);
}

//Cookie functions
function setCookie(cname, cvalue, exdays) {
	if (exdays == 0){
		document.cookie = cname + "=" + encodeURIComponent(cvalue) + ";";     //Thynote Encoding cookie value to try and resolve iphone issues
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