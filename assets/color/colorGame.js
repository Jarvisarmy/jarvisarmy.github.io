var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);
var pickedColor = chooseColor();
var numberOfSquares = 6;



var squares = document.querySelectorAll(".square");
var messageDisplay = document.getElementById("messageDisplay");
var colorDisplay = document.getElementById("colorDisplay");
var title = document.querySelector("h1");
var newGame = document.getElementById("newGame");
var easyMode = document.getElementById("easyMode");
var hardMode = document.getElementById("hardMode");
colorDisplay.textContent = pickedColor;

newGame.addEventListener("click", function(){
	colors = generateRandomColors(numberOfSquares);
	pickedColor = chooseColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	};
	title.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "New Game!";
})
easyMode.addEventListener("click", function(){
	easyMode.classList.add("selected");
	hardMode.classList.remove("selected");
	numberOfSquares = 3;
	colors = generateRandomColors(numberOfSquares);
	pickedColor = chooseColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < colors.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	};
	for (var i = colors.length; i < 6; i++) {
		squares[i].style.display = "none";
	};
	title.style.backgroundColor = "#steelblue";
	messageDisplay.textContent = "Easy Mode";
})

hardMode.addEventListener("click", function(){
	hardMode.classList.add("selected");
	easyMode.classList.remove("selected");
	numberOfSquares = 6;
	colors = generateRandomColors(numberOfSquares);
	pickedColor = chooseColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < colors.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	};
	title.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "Hard Mode";
})




for (var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];
};


for (var i = 0; i < squares.length; i++) {
	squares[i].addEventListener("click", function(){
		if (this.style.backgroundColor === pickedColor) {
			squares.forEach(function(color){
				color.style.backgroundColor = pickedColor;
			})
			title.style.backgroundColor = pickedColor;
			messageDisplay.textContent = "Correct!";

		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Wrong Color";
		}
	})
}
function chooseColor() {
	var index = Math.floor(Math.random() * colors.length);
	return colors[index];
}

function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function generateRandomColors(num) {
	var colors = [];
	for (var i = 0; i < num; i++) {
		colors[i] = randomColor();
	}
	return colors;
}	
