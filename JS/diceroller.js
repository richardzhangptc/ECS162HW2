var diceButtons = document.querySelectorAll('.dice_buttons button');


for (var i = 0; i < diceButtons.length; i++) {

	var button = diceButtons[i];
	button.addEventListener('click', handleButtonClick);

}


function handleButtonClick() {
  var diceNum = parseInt(this.id.slice(1));
	var result = Math.floor(Math.random() * diceNum) + 1;
	document.getElementById('result').textContent = result;
}