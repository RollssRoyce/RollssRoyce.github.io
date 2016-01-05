document.getElementById('clickme').onclick = getValues

function getValues () {
	// 1. Get your imput
	var hometown = document.getElementById('hometown').value;
	var partner = document.getElementById('partner').value;
	var numKids = document.getElementById('numKids').value;
	var jobTitle = document.getElementById('jobTitle').value;


// 2. run your function logic
var fortuneStr = "You will be a " + jobTitle + "living in " + hometown + "married to " + partner + "with " + numKids + "kids."

// 3. Get your Output
document.getElementById('output').innerHTML = fortuneStr

}

