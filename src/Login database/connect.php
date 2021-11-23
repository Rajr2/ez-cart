<?php
		// Start a PHP session
		session_start();

		// Host name
		$host = "localhost";

		// User
		$user = "root";

		// Password
		$password = "";

		// Database name
		$db = "register_dbs";

		$connection = mysqli_connect($host, $user, $password, $db);

		// If the connection fails
		if (!$connection) {

			// Display message and terminate script
  			die("Connection failed: " . mysqli_connect_error());
		}
?>