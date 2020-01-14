function showModal() {
	$('#modal').animate({
		display: 'block',
		opacity: 'toggle',
		transition: '3s ease-in-out'
	});
}

function hideModal(event) {
	let modal = document.getElementById('modal');
	modal.style.display = 'none';
}


function handleContentClick(event){
	event.stopPropagation();
}


$('.slider__item').on('click', event => {
	$('#modal__image').attr('src', event.target.parentNode.getElementsByTagName('img')[0].src);
	console.log(event.target.parentNode.getElementsByTagName('img')[0].src);
	showModal();
});
