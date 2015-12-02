$(document).ready(function () {
// click event on each of the boxes
//javacript is responding to events - doing something and then putting them back into the funtion
 
 var total = 0;
 // add 10 event

//Note to Stas - origionally the below was the equasion that we worked on in class. However instead of .text the correct is .html can you please explain why to me?
// $('#a10').click(add10)
//function add10 (){ //add10 to the value of total
// 	total = total + 10
// 	$('#out').text(total) // what is currently inside of the element. if we dont put anything inside of the element. Text is how we get or set text values. so what ever you put in the paenthasies is what the result will be.


	$("#a10").click(function(){
		total = total + 10;
		$("#out").html(total);
	});
	$("#a20").click(function(){
		total = total + 20;
		$("#out").html(total);	
	});
	$("#a30").click(function(){
		total = total + 30;
		$("#out").html(total);	
	});
	$("#n10").click(function(){
		total = total - 10;
		$("#out").html(total);	
	});
	$("#n20").click(function(){
		total = total - 20;
		$("#out").html(total);	
	});
	$("#n30").click(function(){
		total = total - 30;
		$("#out").html(total);	
	});



$("#red").click(function(){
		$("#out").css("background-color", "red");
	});

$("#blue").click(function(){
		$("#out").css("background-color", "blue");
	});

$("#out").click(function(){
		$("#out").css("background-color", "white");
	});


});
