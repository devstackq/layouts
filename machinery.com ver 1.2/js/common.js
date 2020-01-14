$(function( ({
	$('.nav a, .topb').mPS2id-highlight(){
		offset: 50
	}
});

// 			let sliderImages = document.querySelectorAll('.slide'),
// 			arrowLeft = document.querySelector('#arrow-left'),
// 			arrowRight = document.querySelector('#arrow-right'),
// 			current = 0;
// //clear images
// function reset() {
// 	for(let i=0; i < sliderImages.length; i++){
// 		sliderImages[i].style.display  = 'none';
// 	}
// }
// 	//init slider
// 	function startSlide(){
// 		reset();
// 		sliderImages[0].style.display = 'block';
// 	}

// 	//show previus
// 	function slideLeft(){
// 		reset();
// 		sliderImages[current -1].style.display='block';
// 		current--;
// 	}
// 		//left arrow click
// 		arrowLeft.addEventListener('click', function(){
// 			if(current === 0) {
// 				current	= sliderImages.length;
// 			}
// 			slideLeft();
// 		});

// //show next
// function slideRight() {
// 	reset();
// 	sliderImages[current + 1].style.display='block';
// 	current++;
// }
// //right arrow click

// arrowRight.addEventListener('click', function(){
// 	if(current === sliderImages.length - 1) {
// 		current = -1;
// 	}
// 	slideRight();
// });

// startSlide();

// $(document).ready(function() {
// 	$(".popup").magnificPopup();
// });


// $('#form').submit(function() {
// 	$.ajax({
// 		type: 'POST',
// 		url: 'mail.php',
// 		data: $(this).serialize()
// 	}).done(function(){
// alert('Thanks for join!');
// setTimeout(function(){
// $.magnificPopup.close();
// },1500);

// 	});
// 	return false;
// });


// function toggle_visibility(id) {
// 	var e = document.getElementById('form');
// 	if(e.style.display =='block')
// 		e.style.display = 'none';
// 	else
// 		e.style.display = 'block'
// }




