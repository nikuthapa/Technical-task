//Code for login form validation in JavaScript.

var email = document.forms['form']['email'];
var password = document.forms['form']['password'];

var error1 = document.getElementById('error1');
var error2 = document.getElementById('error2');

email.addEventListener('textInput', email_Verification);
password.addEventListener('textInput', password_Verification);

function validation(){
	if (email.value.length < 10){
		email.style.border = "1px solid red";
		error1.style.display = "block";
		email.focus();
		return false;
	}
		
	if (password.value.length < 7){
		password.style.border = "1px solid red";
		error2.style.display = "block";
		password.focus();
		return false;
	}
}


function email_Verification(){
	if (email.value.length >=9) {
		email.style.border = "1px solid silver";
		error1.style.display = "none";
		return true;
	}

}
function password_Verification(){
	if (password.value.length >=6 ) {
		password.style.border = "1px solid silver";
		error2.style.display = "none";
		return true;

	}
}
