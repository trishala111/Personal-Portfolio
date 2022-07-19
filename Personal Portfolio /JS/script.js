	//function for form validationof contact form		
	function sent() {
	    var name = document.forms["msgform"]["name"].value;
	    var email = document.forms["msgform"]["e-mail"].value;
	    var message = document.forms["msgform"]["message"].value;
	    if (name == "" || email == "" || message == "") {
	        alert("Please fill all boxes.Do not leave it empty!!");
	        event.preventDefault();
	    } else {
	        alert("Your message has been sent!!")
	    }
	}