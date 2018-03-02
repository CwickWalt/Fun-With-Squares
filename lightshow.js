//variables
var squares = document.querySelectorAll(".square");
//make all squares clickable
//for loop with a closure to ensure that the function is called during the loop and not after.

for(var i = 0; i < squares.length; i++) {
	(function(q) {
		squares[i].addEventListener("click", function() {
			//squares[q].classList.toggle("purple");
			showStart();

		});
	})(i);
}

// Functions
function showStart() {
	var i = 0;
	var id = setInterval(lightShow1, 750);
	var animationContainer = document.getElementById("animate");
	
	function lightShow1() {
		if(i <= 8 && i % 2 == 0) {
			squares[i].classList.toggle("purple");
			i+=2;
		}else if(i > 8 && i % 2 == 0) {
			toggleAll();
			i = 1;
		}else if(i <= 7 && i % 2 == 1) {
			squares[i].classList.toggle("purple");
			i+=2;
		}else if(i > 7 && i % 2 == 1) {
			toggleAll();
			i=0;
		}else {
			return;
		}
	}
}

function toggleAll() {
	squares[0].classList.toggle("purple");
	squares[1].classList.toggle("purple");
	squares[2].classList.toggle("purple");
	squares[3].classList.toggle("purple");
	squares[4].classList.toggle("purple");
	squares[5].classList.toggle("purple");
	squares[6].classList.toggle("purple");
	squares[7].classList.toggle("purple");
	squares[8].classList.toggle("purple");
}