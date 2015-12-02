$(document).ready(function (){
// start with second because 1 is already being desplaid 


//	$('#first').click(function (){
//		$('#bigimage').attr('src', 'img/1.jpg')
//	})
//
//	$('#second').click(function (){
//		$('#bigimage').attr('src', 'img/2.jpg') // attr = 'src', 'img/2.jpg' go get left, find Id then go find the attribute then change what is in side of the attribute 
//	})
//
//	$('#third').click(function (){
//		$('#bigimage').attr('src', 'img/3.jpg')
//	})
//
//	$('#fourth').click(function (){
//		$('#bigimage').attr('src', 'img/4.jpg')
//	})
//
//})

// NEW CONCEPT// 

$('.thumb').click(function() {
	var imgSrc = $(this).attr('src') //Then apply 
	
	$('#bigimage').attr('src', imgSrc)

})

// This = what you click on
// so Click on "This/image" the source will arrtibute the image you click to the bigpicture
















	