$(document).ready(function() {



$('#clickme').click(getValues)

function getValues () {
	// 1. Get your imput
	var hometown = $('#hometown').val();
	var partner = $('#partner').val();
	var numKids = $('#numKids').val();
	var jobTitle = $('#jobTitle').val();


// 2. run your function logic
var fortuneStr = "You will be a " + jobTitle + "living in " + hometown + "married to " + partner + "with " + numKids + "kids."

// 3. Get your Output
$('#output').text(fortuneStr)

})

