/** COLOR CHANGE JS CODE **/

//Detects input change from colorChange form
document.getElementById("colorChange").addEventListener("change", function() {
	//NORMAL COLOR PALETTE
	if (document.getElementById("normal").checked) {
		document.body.style.backgroundColor="#00001f";
		document.body.style.color="ffe2e2";
		
		// Styles Gradient Background Image color along the Header and Nav elements
		let header = document.getElementsByTagName("header")[0];
		header.style.backgroundImage="linear-gradient(rgba(0, 41, 117, 1), rgba(0, 41, 117, 0.6), rgba(0, 41, 117, 0.4))";
		let navBckgd = document.getElementsByTagName("nav")[0];
		navBckgd.style.backgroundImage="linear-gradient(rgba(0, 41, 117, 0.4), rgba(0, 41, 117, 0.2), rgba(0, 41, 117, 0))";
		
		// Styles the color of padding around the Nav links.
		let linkPadding = document.querySelectorAll("#navBar a");
		for (let i = 0; i < linkPadding.length; i++) {
			linkPadding[i].style.backgroundColor="#001e57";
		}
		
		// Styles Anchor elements' colors for normal and hover occurences
		let anchors = document.getElementsByTagName("a");
		for (let i = 0; i < anchors.length; i++) {
			anchors[i].style.color="#ff7878";
			//mouse not on link
			anchors[i].addEventListener("mouseout", function() {
				this.style.color="#ff7878";
			});
			//mouse hovering on link
			anchors[i].addEventListener("mouseover", function() {
				this.style.color="#ffe2e2";
			});
			
		}
		
		// Styles the colors for Input and TextArea elements
		let inputs = document.querySelectorAll(".inputs input, textarea");
		for (let i = 0; i < inputs.length; i++) {
			inputs[i].style.backgroundColor="#00001f";
			inputs[i].style.color="#ff7878";
			inputs[i].style.border="2px solid #ff7878";
		}
		
		// Styles the colors for button elements
		let buttons = document.querySelectorAll("#centering button");
		for (let i = 0; i < buttons.length; i++) {
			buttons[i].style.backgroundColor="#00001f";
			buttons[i].style.color="#ff7878";
			buttons[i].style.border="2px solid #ff7878";
		}
	}
	//FIRST ALTERED COLOR PALETTE
	else if (document.getElementById("altOne").checked) {
		document.body.style.backgroundColor="#562c2c";
		document.body.style.color="f2542d";
		
		// Styles Gradient Background Image color along the Header and Nav elements
		let header = document.getElementsByTagName("header")[0];
		header.style.backgroundImage="linear-gradient(rgba(14, 149, 148, 1), rgba(14, 149, 148, 0.6), rgba(14, 149, 148, 0.4))";
		let navBckgd = document.getElementsByTagName("nav")[0];
		navBckgd.style.backgroundImage="linear-gradient(rgba(14, 149, 148, 0.4), rgba(14, 149, 148, 0.2), rgba(14, 149, 148, 0))";
		
		// Styles the color of padding around the Nav links.
		let linkPadding = document.querySelectorAll("#navBar a");
		for (let i = 0; i < linkPadding.length; i++) {
			linkPadding[i].style.backgroundColor="#127475";
		}
		
		// Styles Anchor elements' colors for normal and hover occurences
		let anchors = document.getElementsByTagName("a");
		for (let i = 0; i < anchors.length; i++) {
			anchors[i].style.color="#F5DF7E";
			//mouse not on link
			anchors[i].addEventListener("mouseout", function() {
				this.style.color="#F5DF7E";
			});
			//mouse hovering over link
			anchors[i].addEventListener("mouseover", function() {
				this.style.color="#f2542d";
			});
			
		}
		
		// Styles the colors for Input and TextArea elements
		let inputs = document.querySelectorAll(".inputs input, textarea");
		for (let i = 0; i < inputs.length; i++) {
			inputs[i].style.backgroundColor="#562c2c";
			inputs[i].style.color="#F5DF7E";
			inputs[i].style.border="2px solid #F5DF7E";
		}
		
		// Styles the colors for button elements
		let buttons = document.querySelectorAll("#centering button");
		for (let i = 0; i < buttons.length; i++) {
			buttons[i].style.backgroundColor="#562c2c";
			buttons[i].style.color="#F5DF7E";
			buttons[i].style.border="2px solid #F5DF7E";
		}
	}
	//SECOND ALTERED COLOR PALETTE
	else if (document.getElementById("altTwo").checked) {
		document.body.style.backgroundColor="#3a3335";
		document.body.style.color="fdf0f5";
		
		// Styles Gradient Background Image color along the Header and Nav elements
		let header = document.getElementsByTagName("header")[0];
		header.style.backgroundImage="linear-gradient(rgba(175, 56, 0, 1), rgba(175, 56, 0, 0.6), rgba(175, 56, 0, 0.4))";
		let navBckgd = document.getElementsByTagName("nav")[0];
		navBckgd.style.backgroundImage="linear-gradient(rgba(175, 56, 0, 0.4), rgba(175, 56, 0, 0.2), rgba(175, 56, 0, 0))";
		
		// Styles the color of padding around the Nav links.
		let linkPadding = document.querySelectorAll("#navBar a");
		for (let i = 0; i < linkPadding.length; i++) {
			linkPadding[i].style.backgroundColor="#fe621d";
		}
		
		// Styles Anchor elements' colors for normal and hover occurences
		let anchors = document.getElementsByTagName("a");
		for (let i = 0; i < anchors.length; i++) {
			anchors[i].style.color="#92E5FF";
			//mouse not on link
			anchors[i].addEventListener("mouseout", function() {
				this.style.color="#92E5FF";
			});
			//mouse hovering over link
			anchors[i].addEventListener("mouseover", function() {
				this.style.color="#fdf0f5";
			});
			
		}
		
		// Styles the colors for Input and TextArea elements
		let inputs = document.querySelectorAll(".inputs input, textarea");
		for (let i = 0; i < inputs.length; i++) {
			inputs[i].style.backgroundColor="#3a3335";
			inputs[i].style.color="#92E5FF";
			inputs[i].style.border="2px solid #92E5FF";
		}
		
		// Styles the colors for button elements
		let buttons = document.querySelectorAll("#centering button");
		for (let i = 0; i < buttons.length; i++) {
			buttons[i].style.backgroundColor="#3a3335";
			buttons[i].style.color="#92E5FF";
			buttons[i].style.border="2px solid #92E5FF";
		}
	}
});


// FORM VALIDATION	
function validate() {
	let errorBox = document.getElementById("errorBox");// Gets error box for displaying errors
	
	document.getElementById("submit").addEventListener("click", function validate (event) {
		//Grabs Input values
		const fName = document.getElementById("fName").value;
		const lName = document.getElementById("lName").value;
		const phone = document.getElementById("phone").value;
		let year = "nada";
		if (document.getElementById("first").checked) {
			year = "first";
		} else if (document.getElementById("second").checked) {
			year = "second";
		} else if (document.getElementById("third").checked) {
			year = "third";
		} else if (document.getElementById("fourth").checked) {
			year = "fourth";
		} else if (document.getElementById("not").checked) {
			year = "not";
		}
		const desc = document.getElementById("describe").value;
		
		// Gets individual error message lines within error box
		let error1 = document.getElementById("error1");
		let error2 = document.getElementById("error2");
		let error3 = document.getElementById("error3");
		let error4 = document.getElementById("error4");
		let error5 = document.getElementById("error5");
		let error = false;// Used to change background color of error box
		
		// If first name is not filled in, output error message, change error box color, and prevent default. Else, remove error message.
		if (!fName) {
			error1.innerHTML="You need to input a First Name";
			error = true;
			event.preventDefault();
		} else {
			error1.innerHTML="";
		}
		// If last name is not filled in, output error message, change error box color, and prevent default. Else, remove error message.
		if (!lName) {
			error2.innerHTML="You need to input a Last Name";
			error = true;
			event.preventDefault();
		} else {
			error2.innerHTML="";
		}
		// If phone number is not 10 digits, output error message, change error box color, and prevent default. Else, remove error message.
		if (phone.length != 10) {
			error3.innerHTML="Your phone number needs to have 10 digits.";
			error = true;
			event.preventDefault();
		} else {
			error3.innerHTML="";
		}
		// If year is not picked, output error message, change error box color, and prevent default. Else, remove error message.
		if (year=="nada") {
			error4.innerHTML="You need to select an option for the Uni Years";
			error = true;
			event.preventDefault();
		} else {
			error4.innerHTML="";
		}
		// If name is not filled in, output error message, change error box color, and prevent default. Else, remove error message.
		if (!desc) {
			error5.innerHTML="You need to input something into the description field";
			error = true;
			event.preventDefault();
		} else {
			error5.innerHTML="";
		}
		// If all of the form is valid, change error box background to blend in
		if ((fName) && (lName) && (phone.length == 10) && (year != "nada") && (desc)) {
			error = false;
		}
		// If form is not valid, change error box background to white and its text to red
		if (error) {
			errorBox.style.backgroundColor="red";
			errorBox.style.color="white";
		}
	});
	
}


//Muahahahaha
document.getElementById("muahahahaha").addEventListener("click", function () {
	//Will make you hate my website
	let headers = document.querySelectorAll("h1, h2, h3");
	for (let i = 0; i < headers.length; i++) {
		headers[i].style.fontFamily="cursive";
	}
	document.body.style.fontFamily="cursive";
	
	//A warning
	window.alert("This is in retribution for that question in test 3 that used a Comic Sans font >:)");
});

//Notification
document.getElementById("notif").addEventListener("click", function () {
	window.alert("Thanks For Visiting My Website!");//Thanks!
});


document.addEventListener("DOMContentLoaded", function () {
	validate();
});
