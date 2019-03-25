<?php

if (!isset($leEvent)){ 
    $leEvent = new stdClass();
}

$leEvent -> title = $_POST['customEventInputName']; 
$leEvent -> address = $_POST['customEventInputAddress']; 
$leEvent -> start_date = $_POST['customEventInputSDate']; 
$leEvent -> end_date = $_POST['customEventInputEDate'];  
$leEvent -> content = $_POST['customEventInputDesc']; 
$leEvent -> url = $_POST['customEventInputURL']; 
$leEvent -> organiser = $_COOKIE["user"]; 
$leEvent -> category_tid = $_POST['customEventCate'];
$leEvent -> nid = $_COOKIE["user"].$_POST['customEventInputSDate'].$_POST['customEventInputName'];

//$eJson = json_encode($leEvent); 


// read the file if present
$log_file_name = 'events.JSON'; // Change to the log file name
$handle = @fopen($log_file_name, 'r+');

// create the file if needed
if ($handle === null)
{
    $handle = fopen($log_file_name, 'w+');
}

if ($handle)
{
    // seek to the end
    fseek($handle, 0, SEEK_END);

    // are we at the end of is the file empty
    if (ftell($handle) > 0)
    {
        // move back a byte
        fseek($handle, -1, SEEK_END);

        // add the trailing comma
        fwrite($handle, ',', 1);

        // add the new json string
        fwrite($handle, json_encode($leEvent) . ']');
    }
    else
    {
        // write the first event inside an array
        fwrite($handle, json_encode(array($leEvent)));
    }

        // close the handle on the file
        fclose($handle);
}

//file_put_contents($log_file_name, $eJson, FILE_APPEND);
header('Location: ../events.html'); // redirect back to the main site
 
 ?>
 



