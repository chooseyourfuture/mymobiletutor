//added to test/see....should remove after...
/*
const eventTestData = [
	{eventID:"1337",eventTitle:"testEvent1",eventStart_date:"Thu Oct 04 2018 09:30:00 GMT-0400 (Eastern Daylight Time)",eventEnd_date:"Thu Oct 04 2018 09:30:00 GMT-0400 (Eastern Daylight Time)",eventContent:"leContent Here",eventCategoryID:"23",eventLocation:"Somewhere",eventOrganizer:"Not  me",eventURL:"<Insert URL Here>",eventAddress:"1273 Rockefeller St"},
	{eventID:"1338",eventTitle:"testEvent2",eventStart_date:"Thu Oct 04 2018 09:30:00 GMT-0400 (Eastern Daylight Time)",eventEnd_date:"Thu Oct 04 2018 09:30:00 GMT-0400 (Eastern Daylight Time)",eventContent:"leContent Second Here",eventCategoryID:"23",eventLocation:"Somewhere Else",eventOrganizer:"Not  me",eventURL:"<Insert URL Here>",eventAddress:"1273 Rockefeller St"}
	];


if (!window.indexedDB) {		//Thynote: self explanatory, to be implemented to check if IDB is usable in this browser?
    window.console.log("Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.");
}



var leDatabase;  //Will be storing DB Instance here.
// Open database, Db name and Version number (must be long, not float....aka don't use decimals.)
var request = window.indexedDB.open("MyMobileTutorDB", 1);  //Thynote: This should trigger an event to create it if the DB doesn't exist or open it if it does. Returns indexDB object if successful or error otherwise. 
															//Event handler of onupgradeneeded is then provided to either upgrade version schema or create one if new.

//First thing to do upon request: Add success and error Handlers 
request.onerror = function(event) {
  // Do something with request.errorCode!
};
request.onsuccess = function(event) {
	leDatabase = event.target.result;
};

//More handlers...generic DB error handling
leDatabase.onerror = function(event) {
	console.log("Database error: " + event.target.errorCode);
};

//Upgrade needed handling (also triggers on new DB) This is the only place where actual structure of database can be altered and or indices added.
request.onupgradeneeded = function(event) { 
	// Save the IDBDatabase interface 
	var db = event.target.result;

	// Create an objectStore for this database (Store is the equivalent of "Tables" in normal DBs)
	var objectStore = db.createObjectStore("events", { keyPath: "eventID" });
  
	// Create an index to search events by name. We may have duplicates so we can't use a unique index. (using name here, but might be worthwhile adding indexes to search by other means too, like filter related date/category)
	objectStore.createIndex("eventTitle", "eventTitle", { unique: false });
  
	//Turns out this needs done for ALL items in table
	objectStore.createIndex("eventCategoryID", "eventCategoryID", { unique: false });
	objectStore.createIndex("eventStart_date", "eventStart_date", { unique: false });
	objectStore.createIndex("eventEnd_date", "eventEnd_date", { unique: false });
  
	// Use transaction oncomplete to make sure the objectStore creation is finished before adding data into it.
	objectStore.transaction.oncomplete = function(event) {
		// Store values in the newly created objectStore.
		var eventsObjectStore = db.transaction("events", "readwrite").objectStore("events");
		eventTestData.forEach(function(leEvent) {
			eventsObjectStore.add(leEvent);
		});
	};

};
*/
const DB_NAME = 'MyMobileTutorDB';
const DB_VERSION = 2; // Use a long long for this value (don't use a float)
const DB_STORE_EVENTS = 'events';	//Remember this is the table we want. 
const DB_STORE_PLACES = 'places';

var db;
var current_view_pub_key; // Used to keep track of which view is displayed to avoid uselessly reloading it (taken from idb example)
openDb();


function openDb() {
    console.log("openDb ...");
    var req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onsuccess = function (evt) {
      db = this.result;
      console.log("openDb DONE");
    };
    req.onerror = function (evt) {
      console.error("openDb:", evt.target.errorCode);
    };

    req.onupgradeneeded = function (evt) {							//DB Schema, will need to add maps table too at some point and any others
		console.log("openDb.onupgradeneeded");
		if (evt.oldVersion < 1) {
			var store = evt.currentTarget.result.createObjectStore(DB_STORE_EVENTS, { keyPath: 'eventID' });
			store.createIndex('eventTitle', 'eventTitle', { unique: false });
			store.createIndex('eventStart_date', 'eventStart_date', { unique: false });
			store.createIndex('eventEnd_date', 'eventEnd_date', { unique: false });
			store.createIndex('eventContent', 'eventContent', { unique: false });
			store.createIndex('eventCategoryID', 'eventCategoryID', { unique: false });
			store.createIndex('eventLocation', 'eventLocation', { unique: false });
			store.createIndex('eventOrganizer', 'eventOrganizer', { unique: false });
			store.createIndex('eventURL', 'eventURL', { unique: false });
			store.createIndex('eventAddress', 'eventAddress', { unique: false });
		}
		if (evt.oldVersion < 2) {
			var store2 = evt.currentTarget.result.createObjectStore(DB_STORE_PLACES, { keyPath: 'placeID', autoIncrement : true });
			store2.createIndex('addressName', 'addressName', { unique: false });
			store2.createIndex('address', 'address', { unique: false });
		}
	};
}

function closeDb() {
    console.log("closeDb ...");   
    db.close();
    console.log("closeDb DONE");
 }

function addRecord(table_name, record){								//To be used to add new records only
	var transaction = db.transaction([table_name], "readwrite");
	
	transaction.oncomplete = function(event) {
	  console.log("Record Added");
	};
	transaction.onerror = function(event) {
	  console.log("There was an issue saving the record");
	};

	var objectStore = transaction.objectStore(table_name);
	record.forEach(function(leRecord) {
		var request = objectStore.add(leRecord);
		request.onsuccess = function(event) {
		// Result of request will be the key of inserted value so in this case event.target.result === leRecord.keyID (like eventID); 
		};
	});
}

function removeRecord(table_name, recordID){								
	var transaction = db.transaction([table_name], "readwrite");
	
	transaction.oncomplete = function(event) {
	  console.log("Record Deleted");
	};
	transaction.onerror = function(event) {
	  console.log("There was an issue deleting the record");
	};

	var objectStore = transaction.objectStore(table_name);
	var request = objectStore.delete(recordID);
	request.onsuccess = function(event) {
		//could put successful msg but redundant since transaction will detail it.
	};	
}

function getRecord(table_name,recordID){
	var transaction = db.transaction([table_name]);      				  //no readwrite because we dont need to update it just read from it so default readonly
	var objectStore = transaction.objectStore(table_name);
	var request = objectStore.get(recordID);
	
	request.onerror = function(event) {
	  // Handle errors!
	};
	request.onsuccess = function(event) {
	 // console.log("record is:" + request.result);
	  console.log(request.result);
	  return request.result;
	};
}

function updateRecord(table_name,record){								//must be single record object
	var transaction = db.transaction([table_name], "readwrite");      				 
	var objectStore = transaction.objectStore(table_name);
	var request = objectStore.put(record);
	
	request.onerror = function(event) {
	  // Handle errors!
	  console.log("error updating record");
	};
	request.onsuccess = function(event) {
	  // Do something with the request.result!
	  console.log("record is:" + request.result);
	};
}
 
function getAllRecords(table_name){
	var records = [];
	var transaction = db.transaction([table_name]);      				 
	var objectStore = transaction.objectStore(table_name);
	objectStore.openCursor().onsuccess = function(event){
		var cursor = event.target.result;
		if (cursor) {
			records.push(cursor.value);
			cursor.continue();
		}
	};
	console.log("wtf");
	console.log(records);
	return records;
}

//Searches by index. First one only returns when record contains parameter in desired index. Second one is between two ranges of desired index.
function getRecordsByIndexSingle(table_name,index_name,cursor_range){
	var singleKeyRange = IDBKeyRange.only(cursor_range);
	var records = [];
	var transaction = db.transaction([table_name]);      				 
	var objectStore = transaction.objectStore(table_name);
	var index = objectStore.index(index_name);
	index.openCursor(singleKeyRange).onsuccess = function(event) {
		var cursor = event.target.result;
		if (cursor) {
			// cursor.key index_name (so what we searched, like name). cursor.value is the whole object.
			records.push(cursor.value);
			cursor.continue();
		}
	};
	console.log(records);
	return records;
} 

function getRecordsByIndexRange(table_name,index_name,cursor_range,cursor_range_Y){
	var boundKeyRange = IDBKeyRange.bound(cursor_range, cursor_range_Y, false, false);
	var records = [];
	var transaction = db.transaction([table_name]);      				 
	var objectStore = transaction.objectStore(table_name);
	var index = objectStore.index(index_name);
	index.openCursor(boundKeyRange).onsuccess = function(event) {
		var cursor = event.target.result;
		if (cursor) {
			// cursor.key index_name (so what we searched, like name). cursor.value is the whole object.
			records.push(cursor.value);
			cursor.continue();
		}
	};
	console.log(records);
	return records;
} 


 
























