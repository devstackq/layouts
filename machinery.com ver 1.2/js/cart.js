var cart = {};
function loadCart(){
    //check  if have local storage
    if(localStorage.getItem('cart')) {
    	cart = JSON.parse(localStorage.getItem('cart'));
    	if (!isEmpty(cart)) {
    		$('.main-cart').html('Cart empty!');
    	}else{
    		showCart();
    	}
    }
    else{
    	$('.main-cart').html('Cart empty');
    }
  }
  function showCart(){
  	if (!isEmpty(cart)) {
  		$('.main-cart').html('Cart empty!');
  	}else{
  		$.getJSON('good.json', function(data){
  			var goods = data;
  			var out = '';
  			for (var id in cart)	{
  				out += `<button data-id="${id}" class="del-goods">delete cart</button>`;
  				out += `<img src="images/${goods[id].img}">`;
  				out += `<h2> ${goods[id].name   }</h2> `;
  				out += ` <p class="cost">Quantity: ${cart[id] }</p>`;
  				out += `<button data-id="${id}" class="plus-goods">add</button>`;
  				out += `<button data-id="${id}" class="minus-goods">remove</button>`;
  				out += `<p class="price">${cart[id]*goods[id].cost}$</p>` ;
  				out += ` </br>`;
  			}
      
  			$('.main-cart').html(out);
  			$('.del-goods').on('click', delGoods)
  			$('.plus-goods').on('click', plusGoods)
  			$('.minus-goods').on('click', minusGoods)
  		});
  	}
  }
function delGoods (){  	//dlete product in cart
	var id = $(this).attr('data-id');
	delete cart[id];
	saveCart();
	showCart();
}

function plusGoods(){
	var id = $(this).attr('data-id');
	cart[id]++;
	saveCart();
	showCart();
}
function minusGoods(){
	var id = $(this).attr('data-id');
	if (cart[id]==1){
		delete cart[id];
	}else{
		cart[id]--;
	}
	saveCart();
	showCart();
}
function saveCart() {
    //save to cart
    localStorage.setItem('cart', JSON.stringify(cart)); //cart in string
  }
  function isEmpty(object) {
  	//check cart is empt?
  	for(var key in object)
  		if(object.hasOwnProperty(key)) return true;
  	return false;
  }

  function sendEmail() {
  	var ename = $('#ename').val();
  	var email = $('#email').val();
  	var phone = $('#phone').val();
  	if(ename != '' && email != '' && phone != ''){
  		if(isEmpty(cart)){
  			$.post(
  				"core/mail.php",
  				{
  					"ename" : ename,
  					"email" : email,
  					"phone" : phone,
  					"cart" : cart
  				},
  				function(data){
  					// console.log(data);
            if (data == 1){
              alert('Order send');
            }else{
              alert('Try order!')
            }
          }
          );

  		}else
  		alert('cart empty');
  	}else{
  		alert('fill in the fields');
  	}

  }
  
  $(document).ready(function(){
  	loadCart();

  	$('.send-email').on('click', sendEmail); // send letter with order
  });
