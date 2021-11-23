<?php
include "connect.php";

if (isset($_POST['submit'])) {
	// receive all input values from the form
	$username = mysqli_real_escape_string($db, $_POST['username']);
	$email = mysqli_real_escape_string($db, $_POST['email']);
	$password = mysqli_real_escape_string($db, $_POST['password']);
  
	// form validation: ensure that the form is correctly filled ...
	// by adding (array_push()) corresponding error unto $errors arrays
	if (empty($username)) { array_push($errors, "Username is required"); }
	if (empty($email)) { array_push($errors, "Email is required"); }
	if (empty($password)) { array_push($errors, "Password is required"); }
	
  
	// first check the database to make sure 
	// a user does not already exist with the same username and/or email
	$user_check_query = "SELECT * FROM users WHERE username='$username' OR email='$email' LIMIT 1";
	$result = mysqli_query($db, $user_check_query);
	$user = mysqli_fetch_assoc($result);
	
	if ($user) { // if user exists
	  if ($user['username'] === $username) {
		array_push($errors, "Username already exists");
	  }
  
	  if ($user['email'] === $email) {
		array_push($errors, "email already exists");
	  }
	}
  
	// Finally, register user if there are no errors in the form
	if (count($errors) == 0) {
		$password = md5($password);//encrypt the password before saving in the database
  
		$query = "INSERT INTO users (username, email, password) 
				  VALUES('$username', '$email', '$password')";
		if(mysqli_query($db,$query)) {
			http_response_code(201);
		}
		else{
			http_response_code(422); 
		}      
	}
}
?> 