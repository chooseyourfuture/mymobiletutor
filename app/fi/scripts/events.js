var leContent = document.getElementById("cardtemplate-here");
var catID = []         // = [7,28,29,30];
var catNameEn = [];    // = ["Parties","Academic events","Culture","Activities"]
var catNameFi = [];    // = ["Juhlat","Akateemiset tapahtumat","Kulttuuri","Harrastukset"];
var days = ['su','ma','ti','ke','to','pe','la']; //only to use first 2 letters ['sunnuntai', 'maanantai','tiistai','keskiviikko','torstai','perjantai','lauantai'];   (yes i know i couldve just parsed it in code later....
var months = ["tam", "hel", "maa", "huh", "tou", "kes", "hei", "elo", "syy", "lok", "mar", "jou"];
var importedEvents = [];
var storedEvents = [];  //IDB saved events
openDb();


	
window.onload = function(){
	
	getCatName();
	//load CustomEvents into array
	console.log(importedEvents);
	var locRequest = new XMLHttpRequest();
	locRequest.open('GET', 'scripts/events.JSON');     /*needs to be right link depending on language */
	locRequest.onload = function(){
		var custEventData = JSON.parse(locRequest.responseText);
		loadCustomEvents(custEventData);
	};
	locRequest.send();
	//end
	
	var request = new XMLHttpRequest();
	request.open('GET', 'https://www.tyy.fi/events.json/fi');     /*needs to be right link depending on language */
	request.onload = function(){
		var eventData = JSON.parse(request.responseText);
		writeOutput(eventData);
		console.log(importedEvents);
	};
	request.send();
	
	
	document.getElementById('setCategories').addEventListener('click', function(){   //to undo this just remove ALL except resetcat/filter/display calls
		
	});
	
	/*document.getElementById('savedEventsLoader').addEventListener('click',function(){
		//pruneEvents();
		loadSavedEvents();
	}); 12/14/18 Disabling for patch */
	
	$('#categoriesModal').on('hidden.bs.modal', function (e) {
		var pickedSDate =  document.getElementById('datePickStart').value;
		var pickedEDate =  document.getElementById('datePickEnd').value;
		var validate = false;
		var validDates = true;
		
		if ((pickedSDate!= "") && (pickedEDate!= "")){
				validate = true;
		}
		
		//If for future dates only  Removed 18-11-18 for jquery greyout functionality
		// if ((pickedSDate!= "")){
			// var leSplit = pickedSDate.split("-");
			// strtDateFilter = new Date(leSplit[0],leSplit[1]-1,leSplit[2],00,00,00);
			// var now = new Date();
			// if(strtDateFilter<= now){
				// validDates = false;
				// window.alert('Please select valid future dates');
				// document.getElementById('datePickStart').value="";
				// document.getElementById('datePickEnd').value="";
				// $('#categoriesModal').modal('toggle');
			// }
		// }
		
		// if ((pickedEDate!= "")){
			// var leSplit = pickedEDate.split("-");
			// endDateFilter = new Date(leSplit[0],leSplit[1]-1,leSplit[2],23,59,59);
			// var now = new Date();
			// if(endDateFilter<= now){
				// validDates = false;
				// window.alert('Please select valid future dates');
				// document.getElementById('datePickStart').value="";
				// document.getElementById('datePickEnd').value="";
				// $('#categoriesModal').modal('toggle');
			// }
		// }
		//end	
		if(validDates){						
			if (validate){
				var leSplit = pickedSDate.split("-");
				strtDateFilter = new Date(leSplit[0],leSplit[1]-1,leSplit[2],00,00,00);
				leSplit = pickedEDate.split("-");
				endDateFilter = new Date(leSplit[0],leSplit[1]-1,leSplit[2],23,59,59);
			
				if (endDateFilter >= strtDateFilter){
					resetCatDisplay();
					filterCategories();
					displayEvents();
				}else{
					window.alert('Alkupäivämäärä oltava ennen loppupäivämäärää.');
					document.getElementById('datePickStart').value="";
					document.getElementById('datePickEnd').value="";
					$('#categoriesModal').modal('toggle');
				}
			}else{
				resetCatDisplay();
				filterCategories();
				displayEvents();
				console.log(document.getElementById('datePickStart').value);
				console.log(document.getElementById('datePickEnd').value);
			}
		}
	});
	
};

function leErr(){
	console.log("error");
}

function writeOutput(tyyData){
	var eventID = "";								/*NEED TO ADD NULL HANDLERS*/
	var eventTitle = "";
	var eventStart_date = "";
	var eventEnd_date = "";
	var eventContent = "";
	var eventCategoryID = "";
	var eventLocation = "";
	var eventOrganizer = "";
	var eventURL = "";
	var eventAddress = "";

	//Thynote: Assign Values and Handle Null pointer 
	tyyData.events.map(function(leData){
		eventID = leData.event.nid;
	
		if (leData.event.title != null) {
			eventTitle = leData.event.title;
		}else{
			eventTitle = "Unnamed";
		}
		if (leData.event.start_date != null) {
			eventStart_date = new Date(leData.event.start_date);
			
		}else{
			eventStart_date = new Date();  //"No start date/time Given";     //Need to figure this out w date obj
		}
		if (leData.event.end_date != null) {
			eventEnd_date = new Date(leData.event.end_date);
		}else{
			eventEnd_date = new Date();  //"No end date/time Given";
		}
		if (leData.event.content != null) {
			eventContent = leData.event.content;
		}else{
			eventContent = "" //"No Description provided";
		}
		if(leData.event.location != null){	
			eventLocation = leData.event.location;
		}else{
			eventLocation = "" //"No Location Provided";
			
		}
		if (leData.event.category_tid != null) {
			for(var i =0; i <= catID.length; i++){
				if(leData.event.category_tid == catID[i]){
					eventCategoryID = catNameFi[i];  //Change in FI Version					
				}
			}
		}else{
			eventCategoryID = "" //"None given";
		}		
		if (leData.event.organiser != null) {
			eventOrganizer = leData.event.organiser;
		}else{
			eventOrganizer = "" //"None Given";
		}
		
		if (leData.event.url != null) {
			eventURL = leData.event.url;
		}
		
		if (leData.event.address != null) {
			var str = leData.event.address;
			var res = str.replace("\r\n", ",");
			eventAddress = res;
		}else{
			eventAddress = "20500 Turku, Finland";
		}
		
		var catSelected = false;
		
		importedEvents.push({eventID,eventTitle,eventStart_date,eventEnd_date,eventContent,eventCategoryID,eventLocation,eventOrganizer,eventURL,eventAddress,catSelected});	
	}).join('');
	
	//Sort Events by Date
	var date_sort_asc = function (date1, date2) {
		var dateA = new Date(date1.eventStart_date);
		var dateB = new Date(date2.eventStart_date);
	   return dateA - dateB;
	};
	//End
	
	importedEvents.sort(date_sort_asc);
	
	retrieveEventsFromDb();
	displayEvents();
	
}

//Category Filter
function resetCatDisplay(){
	for (var i =0;i<importedEvents.length;i++){
		importedEvents[i].catSelected = false;
	}
}
function filterCategories(){
	var catCheckBox = [document.getElementById("partiesCheck"),document.getElementById("academicCheck"),document.getElementById("cultureCheck"),document.getElementById("activitiesCheck")];
	//date vars
	var date1 = document.getElementById('datePickStart').value;
	var date2 = document.getElementById('datePickEnd').value;
	var strtDateFilter = "";
	var endDateFilter = "";
	
	if (date1 != ""){
		var leSplit = date1.split("-");
		strtDateFilter = new Date(leSplit[0],leSplit[1]-1,leSplit[2]);
	}
	if (date2 != ""){
		var leSplit = date2.split("-");
		endDateFilter = new Date(leSplit[0],leSplit[1]-1,leSplit[2],23,59,59);
	}
	//end
	
	//add for all categories to be used when none selected
	var checkboxes = document.querySelectorAll('input[type="checkbox"]');
	var allEmpty = true;
	for (var k=0; k<checkboxes.length; k++){
		if (checkboxes[k].checked == true){
			allEmpty = false;
		}
	}
	if(allEmpty){
		for (var o=0; o<checkboxes.length; o++){
			checkboxes[o].checked = true;
		}
	}
	//end
	
	
	for (var i =0;i<importedEvents.length;i++){
		var withinCategory = false;
		var withinSDate = false;
		var withinEDate = false;
		
		for (var j=0; j<catCheckBox.length; j++){
			//fix for accidental finnish/english categories in wrong place
				var catFi ="";
				var catEn ="";
				for (var k=0;k<catID.length; k++){
					if(importedEvents[i].eventCategoryID == catNameEn[k] || importedEvents[i].eventCategoryID == catNameFi[k]){
						catFi = catNameFi[k];
						catEn = catNameEn[k];
					}
				}
			//end

			if((catCheckBox[j].checked == true) && (catCheckBox[j].value == catFi || catCheckBox[j].value == catEn)){
				withinCategory = true;
			}
		}
		if(( strtDateFilter != "") && (importedEvents[i].eventStart_date != "No start date/time Given")){
			if (importedEvents[i].eventStart_date >= strtDateFilter){
				withinSDate = true;
			}
		}else{
			withinSDate = true;
		}
		if(( endDateFilter != "") && (importedEvents[i].eventEnd_date != "No end date/time Given")){	
			if (importedEvents[i].eventStart_date <= endDateFilter){ 					
				withinEDate = true;
			}
		}else{
			withinEDate = true;
		}
		
		if(withinCategory && withinEDate && withinSDate){
			importedEvents[i].catSelected = true;			
		}
		
		/*7-27-18 hide past events add*/
		var staleDate = new Date();
		if(importedEvents[i].eventEnd_date != "No end date/time Given"){
			if (importedEvents[i].eventEnd_date < staleDate){	
			importedEvents[i].catSelected = false;
			}
		}


	}
	
}
//End

//Create HTML Events cards from list
function displayEvents(){
	document.getElementById("cardtemplate-here").innerHTML = "";	
	var htmlOutput = '';

	filterCategories();
	

	for (var i =0;i<importedEvents.length;i++){
		if(importedEvents[i].catSelected==true){
			htmlOutput = htmlOutput	+`<div class="card text-center eContainer">
										<a id="h${importedEvents[i].eventID}" class="collapsed card-header eHeadContainer" data-toggle="collapse" href="#${importedEvents[i].eventID}" role="button" aria-expanded="false" aria-controls="${importedEvents[i].eventID}">														
											<div class="eventTitles" role="tab">
											
												<h6 class="mb-1 eHeader">${importedEvents[i].eventTitle}</h6>

												<div class="float-left justify-content-left rounded border border-secondary bg-white eHeaderDates mt-2">
													<p></p>
													<h6>${importedEvents[i].eventStart_date.getDate()}.${importedEvents[i].eventStart_date.getMonth()+1}.</h6>
												</div>
												<div class="float-right justify-content-right eHeaderDates rounded  bg-dark text-white mt-2">
													<p></p>
													<h6>${importedEvents[i].eventEnd_date.getDate() != importedEvents[i].eventStart_date.getDate()?importedEvents[i].eventEnd_date.getDate():importedEvents[i].eventStart_date.getDate()}.${importedEvents[i].eventEnd_date.getMonth() != importedEvents[i].eventStart_date.getMonth()?importedEvents[i].eventEnd_date.getMonth()+1:importedEvents[i].eventStart_date.getMonth()+1}.</h6>
												</div>
												<p class="mt-3 eventHeaderDetails eHeaderDayTime">klo ${importedEvents[i].eventStart_date.getHours()}:${importedEvents[i].eventStart_date.getMinutes()<10?"0"+importedEvents[i].eventStart_date.getMinutes():importedEvents[i].eventStart_date.getMinutes()}</p>
												${isSaved(importedEvents[i].eventID)?'<p class="mt-3 eventHeaderDetails text-success text-center">(tallennettu)</p>':''}
												
											</div>
										</a>
										<div id="${importedEvents[i].eventID}" class="collapse" role="tabpanel" aria-labelledby="${importedEvents[i].eventID}" data-parent="#accordion">
											<div class="card-body">
												<div class="card-block">		
													${importedEvents[i].eventContent}
													<p class="card-text"><strong>Paikka</strong></p>
													<p class="card-text">${importedEvents[i].eventLocation}</p>
													<p class="card-text">${importedEvents[i].eventAddress}</p>
													<p class="card-text"><strong>Järjestäjä</strong></p>
													<p class="card-text">${importedEvents[i].eventOrganizer}</p>
													<p class="card-text"><strong>Kategoria</strong></p>
													<p class="card-text">${importedEvents[i].eventCategoryID}</p>
													<p class="card-text"><a href="${importedEvents[i].eventURL}">${importedEvents[i].eventURL}</a></p>
													<div class="card-footer text-sm-right">
														<div id="addWarning${importedEvents[i].eventID}"></div>	
														<!-- <div id="${importedEvents[i].eventID}-hybridButton"><button class="btn btn-block" onclick="${isSaved(importedEvents[i].eventID)?'removeSavedEvent('+importedEvents[i].eventID+')">Poista listalta':'addSavedEvent('+importedEvents[i].eventID+')">Tallenna tapahtuma'}</button></div> 12/14/18 Disabling for patch-->												 											
														
														${isOwner(importedEvents[i].eventID)?`														
															<form action="scripts/delete-from-json-events.php" method="POST">
																<fieldset>
																	<p><input name="nid" class="form-control" type="hidden" value="${importedEvents[i].eventID}"></p>
																	<p>
																	  <button class="btn btn-block" type="submit" value="submit">Poista listalta</Button>
																	</p>
															  </fieldset>
															</form>`:''}
														
													<a href="map.html?search=${importedEvents[i].eventAddress}&event=true" class="btn btn-dark btn-block">Näytä kartalla</a>
													</div>
												</div>
											</div>
										</div>
									</div><p></p>` 
		}
	}								
	document.getElementById("cardtemplate-here").innerHTML = htmlOutput;	
	//scrollToNewest();
}
//End

function getCatName(){
	var i =0;
	var request = new XMLHttpRequest();
	request.open('GET', 'https://www.tyy.fi/event_categories.json');     /*needs to be right link depending on language */
	request.onload = function(){
		var catData = JSON.parse(request.responseText);
		catData.categories.map(function(categoryData){
			catID.push(categoryData.category.tid);
			catNameEn.push(categoryData.category.name_en);
			catNameFi.push(categoryData.category.name_fi);
			i++;
		}).join('');
	};
	request.send();
}

//Event Saving
function addSavedEvent(eventToSaveID){
	var eventPosition = 0;

	for(var i=0;i<importedEvents.length;i++){
		if (importedEvents[i].eventID == eventToSaveID){
			eventPosition = i;
		}
	}
	
	updateRecord(DB_STORE_EVENTS,importedEvents[eventPosition]);	
	retrieveEventsFromDb();
	document.getElementById('addWarning'+eventToSaveID).innerHTML = `
			<div class="alert alert-success alert-dismissible fade show" role="alert">
			  <strong>Tapahtuma tallennettu</strong>
			  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
				<span aria-hidden="true">&times;</span>
			  </button>
			</div>`
		
	document.getElementById(eventToSaveID+"-hybridButton").innerHTML = '';
	var updatedButton = `<button class="btn btn-block" onclick="removeSavedEvent('${eventToSaveID}')">Poista listalta</button>`
	document.getElementById(eventToSaveID+"-hybridButton").innerHTML = updatedButton;	
	/* 4-8-18   Removed to keep stuff still when adding event; will have to check if it has adverse effects)		
	resetCatDisplay();
	filterCategories();
	displayEvents();
	*/
}

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

function deleteCookie(cname) {
  document.cookie = cname + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

//DB

//Remove Old Events
function pruneEvents(){
	storedEvents.forEach(function(leRecord) {
		var nowDate = new Date();
		var endDate = new Date(leRecord.eventEnd_date);
		if (nowDate >= endDate){
			removeRecord(DB_STORE_EVENTS, leRecord.eventToRemoveID);
		}
	});
}
// Load SavedEvents
function retrieveEventsFromDb(){
	storedEvents = getAllRecords(DB_STORE_EVENTS);
	
	//prune events integrated on retrieveEventsFromDb
	storedEvents.forEach(function(leRecord) {
		var nowDate = new Date();
		var endDate = new Date(leRecord.eventEnd_date);
		if (nowDate >= endDate){
			removeRecord(DB_STORE_EVENTS, leRecord.eventToRemoveID);
		}
	});
	
	storedEvents = getAllRecords(DB_STORE_EVENTS);
	//end prune addition
		
}

function loadSavedEvents(){
	//Adding of sorting to saved events 10-25-18
	//Sort Events by Date
	var date_sort_asc = function (date1, date2) {
		var dateA = new Date(date1.eventStart_date);
		var dateB = new Date(date2.eventStart_date);
	   return dateA - dateB;
	};
	//End
	
	storedEvents.sort(date_sort_asc);
	//end
	
	leList = '';  
	document.getElementById("myEvents").innerHTML = leList;	
	storedEvents.forEach(function(leRecord) {
		console.log("leRecord");
		console.log(leRecord.eventID);
		var beginDate = new Date(leRecord.eventStart_date);
		var endDate = new Date(leRecord.eventEnd_date);
		
		//20-10-18  applied if to just ignore events in indexdb that have pased. prune just isn't working and time is very short. If time allows, should try and go back to fixing actual deleteevent from index db
		var nowDate = new Date();
		if (nowDate <= endDate){
			
			leList=leList+`<div class="card text-center">
											<a id="h${leRecord.eventID}-saved" class="collapsed card-header" data-toggle="collapse" href="#${leRecord.eventID}-saved" role="button" aria-expanded="false" aria-controls="${leRecord.eventID}-saved">	
												<div class="eventTitlesSaved" role="tab">												
													
													<h6 class="mb-1 eHeader">${leRecord.eventTitle}</h6>
													
													<div class="float-left justify-content-left rounded border border-secondary bg-white eHeaderDates mt-2">
														<p></p>
														<h6>${beginDate.getDate()}.${beginDate.getMonth()+1}.</h6>
													</div>
													<div class="float-right justify-content-right eHeaderDates rounded  bg-dark text-white mt-2">
														<p></p>
														<h6>${endDate.getDate() != beginDate.getDate()?endDate.getDate():beginDate.getDate()}.${endDate.getMonth() != beginDate.getMonth()?endDate.getMonth()+1:beginDate.getMonth()+1}.</h6>
													</div>
													<p class="mt-3 eventHeaderDetails eHeaderDayTime">klo ${beginDate.getHours()}:${beginDate.getMinutes()<10?"0"+beginDate.getMinutes():beginDate.getMinutes()}</p>
												
												</div>
											</a>
											<div id="${leRecord.eventID}-saved" class="collapse" role="tabpanel" aria-labelledby="${leRecord.eventID}-saved" data-parent="#accordion">
												<div class="card-body">
													<div class="card-block">		
														<p class="card-text"><a href="${leRecord.eventURL}">${leRecord.eventURL}</a></p>
														<div id="addWarning${leRecord.eventID}-saved"></div>	
														<div class="card-footer text-sm-right">											
															<button class="btn btn-block" onclick="removeSavedEvent('${leRecord.eventID}')">Poista listalta</button>												
															<a href="map.html?search=${leRecord.eventAddress}&event=true" class="btn btn-dark btn-block">Näytä kartalla</a>
														</div>
													</div>
												</div>
											</div>
										</div>`		

			if(document.getElementById(leRecord.eventID+"-savedButton")){									
				document.getElementById(leRecord.eventID+"-savedButton").innerHTML = "";
				document.getElementById(leRecord.eventID+"-savedButton").innerHTML = `<p class="mt-3 eventHeaderDetails text-success text-center">(tallennettu)</p>`;	
			}
			if(document.getElementById(leRecord.eventID+"-hybridButton")){
				document.getElementById(leRecord.eventID+"-hybridButton").innerHTML = "";
				document.getElementById(leRecord.eventID+"-hybridButton").innerHTML = `<button class="btn btn-block" onclick="removeSavedEvent('${leRecord.eventID}')">Poista listalta</button>`								
			}
		} //If date comparison close
	});
	
	document.getElementById("myEvents").innerHTML = leList;

}
//End

//remove saved event
function removeSavedEvent(eventToRemoveID){
	var eID = ""+ eventToRemoveID;
	removeRecord(DB_STORE_EVENTS, eID);
	/*	
	document.getElementById('addWarning'+eventToRemoveID+'-saved').innerHTML = `
		<div class="alert alert-success alert-dismissible fade show" role="alert">
		  <strong>Event Removed Successfully!</strong>
		  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
			<span aria-hidden="true">&times;</span>
		  </button>
		</div>` 
	*/
	
	retrieveEventsFromDb();
	$('#savedEventsModal').modal('hide'); 
	document.getElementById(eventToRemoveID+"-hybridButton").innerHTML = '';
	var updatedButton = `<button class="btn btn-block" onclick="addSavedEvent('${eventToRemoveID}')">Tallenna tapahtuma</button>`
	document.getElementById(eventToRemoveID+"-hybridButton").innerHTML = updatedButton;
	/*again removing because of need to reset display, will need to check effects on this 
	resetCatDisplay();
	filterCategories();
	displayEvents();
	*/
	document.getElementById(eventToRemoveID+"-savedButton").innerHTML = "";

	document.getElementById("addWarning"+eventToRemoveID).innerHTML = "";
	document.getElementById("addWarning"+eventToRemoveID).innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert">
																		  <strong>Tapahtuma poistettu listalta</strong>
																		  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
																			<span aria-hidden="true">&times;</span>
																		  </button>
																		</div>`

}
//end

//Determine Saved Event
function isSaved(eventToVerifyID){
	var isSavedEvent = false;
	
	storedEvents.forEach(function (leRecord){
		if(leRecord.eventID == eventToVerifyID){
			isSavedEvent = true;
		}
	});
	return isSavedEvent;
}
//End 

//Checkbox All handler. called in HTML
function toggle(source) {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i] != source)
           checkboxes[i].checked = source.checked;
    }
}
//End
//remove CheckAll/catch empty selevtor
function checkEmpty(source) {
    var checkboxes = document.getElementById('allCheck');    
	if (source.checked == false){
	   checkboxes.checked = source.checked;
	}
}
//end

//Categories Selectpor
function showHideEvents(){
	console.log("yupyup");
}

//End

//Display user created events
function loadCustomEvents(eventDocData){
	var eventID = "";								/*NEED TO ADD NULL HANDLERS*/
	var eventTitle = "";
	var eventStart_date = "";
	var eventEnd_date = "";
	var eventContent = "";
	var eventCategoryID = "";
	var eventLocation = "";
	var eventOrganizer = "";
	var eventURL = "";
	var eventAddress = "";


				console.log(eventDocData);
	//Thynote: Assign Values and Handle Null pointer 
	for(var i = 0; i < eventDocData.length; i++){
		eventID = eventDocData[i].nid;
	
		if (eventDocData[i].title != null) {
			eventTitle = eventDocData[i].title;
		}else{
			eventTitle = "Unnamed";
		}
		if (eventDocData[i].start_date != null) {
			eventStart_date = new Date(eventDocData[i].start_date);
			
		}else{
			eventStart_date = "No start date/time Given";     //Need to figure this out w date obj
		}
		if (eventDocData[i].end_date != null) {
			eventEnd_date = new Date(eventDocData[i].end_date);
		}else{
			eventEnd_date = "No end date/time Given";
		}
		if (eventDocData[i].content != null) {
			eventContent = eventDocData[i].content;
		}else{
			eventContent = "No Description provided";
		}
		if(eventDocData[i].address != null){
			eventLocation = eventDocData[i].address;
		}else{
			eventLocation = "No Location Provided";
			
		}
		if (eventDocData[i].category_tid != null) {
			eventCategoryID = eventDocData[i].category_tid;  //Change in FI Version						
		}else{
			eventCategoryID = "None given";
		}		
		if (eventDocData[i].organiser != null) {
			eventOrganizer = eventDocData[i].organiser;
		}else{
			eventOrganizer = "None Given";
		}
		
		if (eventDocData[i].url != null) {
			eventURL = eventDocData[i].url;
		}
		
		if (eventDocData[i].address != null) {
			eventAddress = eventDocData[i].address;
		}else{
			eventAddress = "20500 Turku, Finland";
		}
		
		var catSelected = true;

		importedEvents.push({eventID,eventTitle,eventStart_date,eventEnd_date,eventContent,eventCategoryID,eventLocation,eventOrganizer,eventURL,eventAddress,catSelected});	
	}
	
	//Sort Events by Date
	var date_sort_asc = function (date1, date2) {
		var dateA = new Date(date1.eventStart_date);
		var dateB = new Date(date2.eventStart_date);
	   return dateA - dateB;
	};
	//End
	
	importedEvents.sort(date_sort_asc);
}
//end

//DeleteEvents
function isOwner(lEventID){
	var owner = getCookie('user');
	if (lEventID.search(owner) >= 0){
		return true;
	}else{
		return false;
	}
}

//Validate fields not empty
function validateForm() {
    var x = document.forms["createEventForm"]["customEventInputName"].value;
    if (x == "") {
        alert("Event name must be filled out!");
        return false;
    }
	var x = document.forms["createEventForm"]["customEventInputAddress"].value;
	    if (x == "") {
        alert("Event address must be filled out.");
        return false;
    }

	var x = document.forms["createEventForm"]["customEventInputSDate"].value;
	    if (x == "") {
        alert("Event start date must be filled out");
        return false;
    }

	var x = document.forms["createEventForm"]["customEventInputEDate"].value;
	    if (x == "") {
        alert("Event end date must be filled out");
        return false;
    }

	var x = document.forms["createEventForm"]["customEventInputDesc"].value;
	    if (x == "") {
        alert("Event description must be filled out");
        return false;
    }

	var x = document.forms["createEventForm"]["customEventCate"].value;
	    if (x == "") {
        alert("Event category must be selected");
        return false;
    }

}
//End
//Bump old events to end  No longer to be used, keeping code for reference
function bumpOldEventsDown(){
	var today = new Date();
	var jumps = 0;
	for(var i=0; i< importedEvents.length; i++){
		var endDate = new Date(importedEvents[jumps].eventEnd_date);
		if (today.getMonth()>endDate.getMonth()){
			array_move(importedEvents,jumps,importedEvents.length-1);
			jumps = jumps+1;
		}else if (today.getMonth()==endDate.getMonth() && today.getDate() > endDate.getDate()){
			array_move(importedEvents,jumps,importedEvents.length-1);
			jumps = jumps+1;
		}
	}
}
function array_move(arr, old_index, new_index) {
    while (old_index < 0) {
        old_index += arr.length;
    }
    while (new_index < 0) {
        new_index += arr.length;
    }
    if (new_index >= arr.length) {
        var k = new_index - arr.length + 1;
        while (k--) {
            arr.push(undefined);
        }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
};
//

//scroll to closest upcomming event
function scrollToNewest(){
	var today = new Date();
	var jumps = 0;
	for(var i=0; i< importedEvents.length; i++){
		var endDate = new Date(importedEvents[jumps].eventEnd_date);
		if (today.getMonth()>endDate.getMonth()){
			jumps = jumps+1;
		}else if (today.getMonth()==endDate.getMonth() && today.getDate() > endDate.getDate()){
			jumps = jumps+1;
		}
	}
	
	console.log("jumps: "+jumps);
	console.log(importedEvents[jumps].eventID);
    
	/*
	$('html,body').animate({
        scrollTop: $("#"+importedEvents[jumps].eventID).offset().top},
        'slow');
	*/
	var target = document.getElementById("h"+importedEvents[jumps].eventID);
	var scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    var targetY = 0;
    do { //find the top of target relatively to the container
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);

    scroll = function(c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 20);
    }
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}

function clearField(leDateClear){
	var field = document.getElementById(leDateClear);
	leDateClear.value="";
}

//end