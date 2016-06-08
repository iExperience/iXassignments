function phoneValidator(phoneNum) {
	var numSplit = phoneNum.split("-");
	if(numSplit.length === 3 && numSplit[0].length === 3 && numSplit[1].length === 3 && numSplit[2].length === 4) {
		for(var i = 0; i < phoneNum.length; i++) {
			if(phoneNum[i] != "-") {
				if(phoneNum[i] < 0 || phoneNum[i] > 9) {
					return false
				}
			}
		}
		return true;
	}
	else
		return false;
}

function validatePhone() {
	var phoneNum = $("#phone").val();
	var phoneVal = false;
	var numSplit = phoneNum.split("-");
	if(numSplit.length === 3 && numSplit[0].length === 3 && numSplit[1].length === 3 && numSplit[2].length === 4) {
		for(var i = 0; i < phoneNum.length; i++) {
			if(phoneNum[i] != "-") {
				if(phoneNum[i] < 0 || phoneNum[i] > 9) {
					phoneVal = false
				}
			}
		}
		phoneVal = true;
	}
	else
		phoneVal = false;
	if(!phoneVal) {
		$("#phone-error-message").html("Your phone number does not follow the format XXX-XXX-XXXX.");
		$("#phone-error-message").css("color", "red");
	}
	else {
		$("#phone-error-message").html("Valid phone number.");
		$("#phone-error-message").css("color", "green");
	}
}

function validateEmail() {
	var email = $("#email").val();
	var emailVal = false;
	if(email.indexOf("@") > 0) {
		var user = email.split("@")[0];
		if(user.length > 0 && email.split("@")[1].length > 0) {
			var ending = email.split("@")[1];
			if(ending.indexOf(".") > 0) {
				var domain = ending.split(".")[0];
				var com = ending.split(".")[1];
				if(domain.length > 0 && com.length > 0) {
					emailVal = true;
				} 
			}
		}
	}
	if(!emailVal) {
		$("#email-error-message").html("Your email does not follow the right format.");
		$("#email-error-message").css("color", "red");
	}
	else {
		$("#email-error-message").html("Valid email.");
		$("#email-error-message").css("color", "green");
	}
}

$(document).ready(function() {
	$("#submit-btn").click(function(e) {
		validatePhone();
		validateEmail();
	});
});

