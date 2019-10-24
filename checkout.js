
function myFunction2() {
	document.getElementById("feedback").innerHTML = "it works!";
}

/item quantity/
function addQuant() {
	var x = document.getElementById("itemQuant").value;
	x = Number(x)+1;
	document.getElementById("itemQuant").value = x;
	return x;
}

function minusQuant() {
	var x = document.getElementById("itemQuant").value;
	x = Number(x)-1;
	if (x<1) {
		x = 1
	}
	document.getElementById("itemQuant").value = x;
	return x;
}

/*
function addQuant2() {
	var x = document.getElementById("itemQuant2").value;
	x = Number(x)+1;
	document.getElementById("itemQuant2").value = x;
}

function minusQuant2() {
	var x = document.getElementById("itemQuant2").value;
	x = Number(x)-1;
	if (x<1) {
		x = 1
	}
	document.getElementById("itemQuant2").value = x;
}

function addQuant3() {
	var x = document.getElementById("itemQuant3").value;
	x = Number(x)+1;
	document.getElementById("itemQuant3").value = x;
}

function minusQuant3() {
	var x = document.getElementById("itemQuant3").value;
	x = Number(x)-1;
	if (x<1) {
		x = 1
	}
	document.getElementById("itemQuant3").value = x;
}*/

function onload() {
    var cartItem = JSON.parse(localStorage.getItem("pillow"));
    
	if (localStorage.getItem("pillow") === null) {
	    cartItem = [];
	  } else {
	    cartItem = JSON.parse(localStorage.getItem("pillow"));
	  }
}

function onClick() {
	console.log(cartItem);
}
