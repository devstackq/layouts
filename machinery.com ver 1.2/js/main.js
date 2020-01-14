var cart = {}; //cart 
function init() {
    //read file json
    $.getJSON("good.json", goodsOut);
}

function goodsOut(data) {
    // onload in page
    console.log(data); 
    var out='';
    for (var key in data) {
        // out +='<div class="cart">';
        // out +='<p class="name">'+data[key].name+'</p>';
        // out += '<img src="images/'+data[key].img+'" alt="">';
        // out +='<div class="cost">'+data[key].cost+'</div>';
        // out +='<button class="add-to-cart">Купить</button>';
        // out +='</div>';
        //---------
        out +='<div class="cart">';
        out +=`<p class="name">${data[key].name}</p>`;
        out +=`<img src="images/${data[key].img}" alt="">`;
        out +=`<b class="cost">${data[key].cost}</b>`;
        out +=`<button class="add-to-cart" data-id="${key}"> <a href="cart.html" target="_blank"> Add basket</a></button>`;
        out +=`<div class="description">${data[key].description}</div>`;       
        out +='</div>';
    }
    $('.goods-out').html(out);
    $('.add-to-cart').on('click', addToCart);
}
function addToCart(){
//add product in cart
var id = $(this).attr('data-id');
// console.log(id);
if(cart[id] == undefined) {
    cart[id] = 1; // if cart not product, then = 1

}
else{
    cart[id]++; // if have this product, then ++
}
showCart();
saveCart();
}

function saveCart() {
    //save to cart
    localStorage.setItem('cart', JSON.stringify(cart)); //cart in string
}
// dispay cart
function showCart() {
    //show displa cart
    var out = '';
    for(var key in cart){
        out+= key +'----'+ cart[key];
    }

    $('.mini-cart').html(out);
}

function loadCart(){
    //check  if have local storage
    if(localStorage.getItem('cart')){
        cart = JSON.parse(localStorage.getItem('cart'));
    }
    showCart();
}
$(document).ready(function() {
    init();
});
