
$(document).ready(function () {
// click event on each of the boxes
//javacript is responding to events - doing something and then putting them back into the funtion
 
 var total = 0;
 // add 10 event

 $('#a10').click(add10)

 function add10 (){ //add10 to the value of total
 	total = total + 10
 	$('#out').text(total) // what is currently inside of the element. if we dont put anything inside of the element. Text is how we get or set text values. so what ever you put in the paenthasies is what the result will be.
 }

$('#a20').click(add20)

function add20 () {
	total = total + 20
	 $('#out').text(total)
}

$('#a30').click(add30)

function add30 () {
	total = total + 30
	 $('#out').text(total)
}

//not sure what to do with colors



$('#red').click(red)

function changeColor () {
	total = total
	 $('#red').text(total)
}



//



// also figuring out the clear

$('#out').click(clearZero)

function out () {
	total = total - total
	 $('#out').text(total)
}








function add30 () {
	total = total + 30
	 $('#out').text(total)
}

 $('#n10').click(add10)

 function add10 (){ //add10 to the value of total
 	total = total - 10
 	$('#out').text(total) // what is currently inside of the element. if we dont put anything inside of the element. Text is how we get or set text values. so what ever you put in the paenthasies is what the result will be.
 }

$('#n20').click(add20)

function add20 () {
	total = total - 20
	 $('#out').text(total)
}

$('#n30').click(add30)

function add30 () {
	total = total - 30
	 $('#out').text(total)
}



	
})