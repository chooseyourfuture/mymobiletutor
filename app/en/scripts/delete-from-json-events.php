<?php

if (!isset($leEvent)){ 
    $leEvent = new stdClass();
}
$leEvent = $_POST['nid'];

		//var_dump($jsonEvents[$i]->nid);
$jsonEvents = json_decode(file_get_contents ('events.JSON'));
for ($i = 0; $i<= count($jsonEvents); $i++){
		$jEventId = $jsonEvents[$i]->nid;
	if ($jEventId == $leEvent){
		unset($jsonEvents[$i]);
		$jsonEvents = array_values($jsonEvents);
	}
}


// read the file if present
$log_file_name = 'events.JSON'; // Change to the log file name
$handle = @fopen($log_file_name, 'r+');

//truncate the file to zero
@ftruncate($handle, 0);

if ($handle)
{
    // seek to the end
    fseek($handle, 0, SEEK_END);

	// add the new json string
    fwrite($handle, json_encode($jsonEvents));

	// close the handle on the file
	fclose($handle);
}

//file_put_contents($log_file_name, $eJson, FILE_APPEND);
header('Location: ../events.html'); // redirect back to the main site
 
 ?>
 



