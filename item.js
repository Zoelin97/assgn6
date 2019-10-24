

function pillow(quantity, color, fill){
	this.quantity = quantity;
	this.color = color;
	this.fill = fill;
}

/item quantity/
function addQuant() {
	var x = document.getElementById("itemQuant").value;
	x = Number(x)+1;
	document.getElementById("itemQuant").value = x;
	calcPrice();
}

function minusQuant() {
	var x = document.getElementById("itemQuant").value;
	x = Number(x)-1;
	if (x<1) {
		x = 1
	}
	document.getElementById("itemQuant").value = x;
	calcPrice();
}

function calcPrice(){
	var price = 18;
	var Quant = document.getElementById("itemQuant").value;
	price = Number(Quant) * price;
	document.getElementById("total-price").value = "$" + price;
}

function dropDown() {
	document.getElementById("myColor").classList.toggle("show");
}
/*
window.onclick = function(event) {
	var cartItem;
  
  if (cartItem === null) {
    cartItem = true;
  } else {
    cartItem = JSON.parse(localStorage.getItem("pillow"));
  }
	localStorage.setItem("pillow", JSON.stringify(cartItem));
	console.log(cartItem);
}


/*change picture by colorselection*/
function gotoPage(select){
	var x = document.getElementById('selectColor').value;
	if (x === "aa"){
	document.getElementById('pillowImage').src = 'grey.jpg'
} else if (x==="bb") {
	document.getElementById('pillowImage').src = 'pink.jpg'
} else if (x==="cc") {
	document.getElementById('pillowImage').src = 'orange.jpg'
} else if (x==="dd") {
	document.getElementById('pillowImage').src = 'purple.jpg'
}
    /*window.location = select.value;*/
}

function onload() {
    localStorage.setItem("addedItem", JSON.stringify(pillow));
  
}
 
/*store color into object*/
function pushColor(){
	pillow.color = document.getElementById("selectColor").value;
	console.log(pillow.color);

}

function pushQuant(){
	pillow.quantity = document.getElementById("itemQuant").value;
	console.log(pillow.quantity);
}

function onClick() {
	document.getElementById('shopcart').src = 'cart2.png'
	document.getElementById("cart").innerHTML = "ADDED!";
	var cartItem;
  
	  if (localStorage.getItem("pillow") === null) {
	    cartItem = [];
	  } else {
	    cartItem = JSON.parse(localStorage.getItem("pillow"));
	  }

	  cartItem.push(new pillow(document.getElementById("itemQuant").value, document.getElementById("selectColor").value, document.getElementById("selectColor").value));
		localStorage.setItem("pillow", JSON.stringify(cartItem));
		console.log(cartItem);
}