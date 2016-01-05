$ (document).ready(function) () {

	$('.box').css('background-color', 'pink')
	$('.box').text('I am a box!')

	$('#box-one').click(increaseBoxOne)
	$('#box-two').click(increaseBoxTwo) // declairing a click event. so it expects a function to run

function increaseBoxOne () {
		$("#box-one")
		.css({
				'height': '500px',
				'width': '500px'
			})
	}
function increaseBoxTwo () {
		$("#box-two").css({'height': '500px', 'width': '500px'})
	}
})

//this is what will happen as a result of the function ie increase box one




}

