var removeCartItemButtons = document.getElementsByClassName("remove-button");
console.log(removeCartItemButtons);
for (var i = -1; i < removeCartItemButtons.length; i++) {
	var button = removeCartItemButtons[i];
	button.addEventListener("click", function() {
		console.log('clicked')
	})

}