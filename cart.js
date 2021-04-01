var removeCartItemButtons = document.getElementsByClassName("remove-button");
console.log(removeCartItemButtons);
for (var i = 0; i < removeCartItemButtons.length; i++) {
	var button = removeCartItemButtons[i];
	button.addEventListener("click", function(event) {
		var buttonClicked = event.target;
		buttonClicked.parentElement.parentElement.remove();
		updateCartTotal()
	})
}
function updateCartTotal(){
	var cartItemContainer = document.getElementsByClassName("cart-items")[0];
	var cartRows = cartItemContainer.getElementsByClassName("first-cart-row");
	var total = 0;
	for (var i = 0; i < cartRows.length; i++) {
		var cartRow = cartRows[i];
		var priceElement = cartRow.getElementsByClassName("cart-price")[0];
		console.log(typeof priceElement)
		var quantityElement = cartRow.getElementsByClassName("cart-quantity-input")[0];
		var price = parseFloat(priceElement.innerText.replace("$",""));
		console.log(price)
		var quantity = quantityElement.value;
		total = total + (price * quantity);
		console.log(total)
	}
	//document.getElementsByClassName("cart-total-price")[0].innerText = total;
}