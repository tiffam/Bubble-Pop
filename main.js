//set up for score tracking.

var counter = 0;
var level = 0;
var score = 0;
var userPattern = [];

//set functions to show popped bubbles.

function switchColor(pattern) {
	$(pattern).removeClass("gradient1").addClass("white");
}

//Reset all the popped white bubbles to color bubbles.

function resetImage() {
	$('.pop').removeClass("white").addClass("gradient1");
}

// Create audio file.

var audio = new Audio('Large Bubble.mp3');

//Generate new random pattern. I'm using functions as the items in the array so that I can call the functions later.

var pattern = _.shuffle([pop1, pop2, pop3, pop4, pop5, pop6, pop7, pop8]);

//select first 4 sequence for pattern.

pattern = _.sample(pattern, 4);

//Display the image based on random sequence created.

function patternGenerator() {
	$('.overlay').removeClass("nocover").addClass("cover");

	setTimeout(function() { switchColor(pattern[0]) }, 1500);
	setTimeout(function() { switchColor(pattern[1]) }, 2500);
	setTimeout(function() { switchColor(pattern[2]) }, 3500);
	setTimeout(function() { switchColor(pattern[3]) }, 4500);

	setTimeout(resetImage, 5500);
	setTimeout(removeCover, 5500);
}

//calling function to start the game

patternGenerator();

//Created a transparent cover to prevent user from tapping the buttons while waiting for pattern to be displayed.
function cover (){
	$('.overlay').removeClass("nocover").addClass("cover");
}

function removeCover(){
	$('.overlay').removeClass("cover").addClass("nocover");
}

//Listen to user's input. Grouped in under function to ensure user is not able 
// to tap on the buttons when it is running.

$("#pop1").on("click", function () { activitiesToRun("#pop1", pop1); });

$("#pop2").on("click", function () { activitiesToRun("#pop2", pop2); });

$("#pop3").on("click", function () { activitiesToRun("#pop3", pop3); });

$("#pop4").on("click", function () { activitiesToRun("#pop4", pop4); });

$("#pop5").on("click", function () { activitiesToRun("#pop5", pop5); });

$("#pop6").on("click", function () { activitiesToRun("#pop6", pop6); });

$("#pop7").on("click", function () { activitiesToRun("#pop7", pop7); });

$("#pop8").on("click", function () { activitiesToRun("#pop8", pop8); });

//Set up counter count, bubbles sound effect and tracking patterns & check wins.

function activitiesToRun (item, num) {

	$(item).removeClass("gradient1").addClass("white");
	audio.load();
	audio.play();
	counter++;
	userPattern.push(num); //capture user's inputs into userPattern array when clicked.
	checkWin();
}

//check wins and prints message pop-up depending on correct patterns.

function checkWin() {
	for (let i = 0; i < userPattern.length; i++) {
		if (pattern[i]!==userPattern[i]) {
			$("#popupmessage").text("In the middle of every difficulty lies opportunity");
			score -=20
			resetGame();
		}
		if (counter === i+1 && pattern[i] === userPattern[i]) {
			score +=10;
			cheers();
			levelling();
		}
		$("#scoretracker").text(score);
	}
}

function cheers() {
		if(counter === 1 && pattern[0] === userPattern[0]){
			$("#popupmessage").text("Good");
		}
		if(counter === 2 && pattern[1] === userPattern[1]){
			$("#popupmessage").text("Better");
		}
		if(counter===3 && pattern[2] === userPattern[2]){
			$("#popupmessage").text("Best!");
		}
		if(counter === 4 && pattern[3] === userPattern[3]){
			$("#popupmessage").text("Join these phrases and you get 'Good, Better, Best. Never let it rest. Let's do this again.");
			level++;
			resetGame();
		}
	}
	
//Message display at different levels plus confetti shower when levelling up.
//Game ends when player reaches negative score.

function levelling () {
	// if (score === 20){
		if (score <= 0) {
			$("#level").text("There is no failure except in no longer trying. Refresh to replay");
			$(".pop").addClass("theend");
		};

		if (score === 150) {
			$("#level").text("Level up to confirmed Popper!");
			$(".coneffects").addClass("confetti");
		};
		if (score === 200) {
			$(".coneffects").removeClass("confetti");
		};
		if (score === 300) {
			$("#level").text("Perserve to reach Popper Expert status!");
		};
		if (score === 1000) {
			$("#level").text("Level up to Popper Expert! You are among our top poppers. Stay on track to get into our game league");
			$(".coneffects").addClass("confetti");
		};
		if (score === 1100) {
			$(".coneffects").removeClass("confetti");
		};
		if (score === 1500) {
			$("#level").text("You are a member of our League of Poppers!");
			$("body").removeClass("gradient1"); //background changes to white. Game continues.
			$(".coneffects").addClass("confetti");
		};
	}

//resets game while keeping score intact. 

function resetGame(){
	resetImage();
	counter = 0;
	userPattern = [];
	pattern = _.shuffle([pop1, pop2, pop3, pop4, pop5, pop6, pop7, pop8]);
	patternGenerator();
}
