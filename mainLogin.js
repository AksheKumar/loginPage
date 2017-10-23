function loginInto() {
	var userName = document.getElementById('Username');
	var passWord =document.getElementById('password');
	var regUser = "sania mirza";
	var uPass  ="mirza";

	
	if(userName.value == regUser) {
	
		if(passWord.value == uPass) {
			window.alert("login Successful");
	} else {
			window.alert("Incorrect username or password");
		}
	} 
	else {
		window.alert("Incorrect username or password");
	}


}