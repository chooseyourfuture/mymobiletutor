<?php
	require_once('../../../auth/lib/_autoload.php');
	$as = new SimpleSAML_Auth_Simple ( 'haka-mobile' );
	$as->requireAuth(array(
		'KeepPost' => FALSE,
		'ErrorURL' => 'https://chooseyourfuture.fi/studentmobileapp.com/app/login/index.html'
	));
	$attributes = $as->getAttributes();	
	$attrs = $as->getAttributes();
	

	if (!isset($attrs['displayName'][0])) {
		throw new Exception('displayName attribute missing.');
	}
	if (!isset($attrs['eduPersonPrincipalName'][0])) {
		throw new Exception('eduPersonPrincipalName attribute missing.');
	}
	$cookie_name = "user";
	$cookie_value = $attrs['displayName'][0];
	setcookie($cookie_name, $cookie_value, time() + (86400 * 60), "/"); // 86400 = 1 day
	$cookie_name = "userID";
	$cookie_value = $attrs['eduPersonPrincipalName'][0];
	setcookie($cookie_name, $cookie_value, time() + (86400 * 60), "/"); 
	
	//record user/email/timestamp to server
	if (!isset($leEvent)){ 
		$leEvent = new stdClass();
	}
	$leEvent -> user = $attrs['displayName'][0];
	$leEvent -> email = $attrs['eduPersonPrincipalName'][0];
	$leEvent -> loginDate = date(DATE_ATOM);
	
	$log_file_name = 'userLogs.JSON'; // Change to the log file name
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
	//End user records	
	
	header('Location: https://chooseyourfuture.fi/studentmobileapp.com/app/en/index.html');
	
	exit();

?>