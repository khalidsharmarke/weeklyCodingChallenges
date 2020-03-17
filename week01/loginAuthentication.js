const accountName = `admin`;
const accountPassword = `TheMaster`;
let userName = prompt(`Enter user name`);
let userPassword;

if (userName != accountName){
	if(userName.length == 0){
		alert(`Cancelled`);
		return
	}else {
		alert(`I don't know you`);
		return
	}
}else {
	userPassword = prompt(`Enter password`)
	if(userPassword != accountPassword){
		if(userPassword.length == 0){
			alert(`Cancelled`);
			return
		}else {
			alert(`Wrong password`);
			return
		}
	}else {
		alert(`Welcome.`)
	}
}