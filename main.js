//set up for score tracking.

var counter = 0;

var score = 0;

//set functions to show popped bubbles.

var pop1 = function () {
	$('#unpopped1').removeClass("gradient1").addClass("white");
}

var pop2 = function () {
	$('#unpopped2').removeClass("gradient1").addClass("white");
}

var pop3 = function () {
	$('#unpopped3').removeClass("gradient1").addClass("white");
}

var pop4 = function () {
	$('#unpopped4').removeClass("gradient1").addClass("white");
}

//Reset images and pattern

var resetImage = function () {
	$('.unpopped').removeClass("white").addClass("gradient1");;
}

var resetGame = function(){
	resetImage();
	counter = 0;
	userPattern = [];
	pattern = _.shuffle([pop1, pop2, pop3, pop4]);
	patternImageGenerator();
}

//Generate pattern
var pattern = _.shuffle([pop1, pop2, pop3, pop4]);

//calliing function to start the game

patternImageGenerator();

//Display the image based on random sequence created.

function patternImageGenerator(){
	setTimeout(pattern[0], 1000);
	setTimeout(pattern[1], 2000);
	setTimeout(pattern[2], 3000);
	setTimeout(pattern[3], 4000);
	setTimeout(resetImage, 5000);
}


//Retagging of pattern array as functions cannot be checked for equality.

function retagPattern() {
	for (i=0; i<pattern.length; i++)
	{
		if (pattern[i]===pop1){
			pattern[i]="one";
		}
		else if (pattern[i]===pop2){
			pattern[i]="two";
		}
		else if (pattern[i]===pop3){
			pattern[i]="three";
		}
		else if (pattern[i]===pop4){
			pattern[i]="four";
		}
		else {pattern[i]===[]}
	}
}


//Set up counter count; call functions related to tagging; and checking for wins.

function activitiesToRun () {
	counter++;
	retagPattern();
	checkWin();
}

//Listen to user's input

$("#unpopped1").click(function (){
	$('#unpopped1').removeClass("gradient1").addClass("white");
	$("body").addClass("gradient1");
	one();
	activitiesToRun();
});

$("#unpopped2").click(function (){
	$('#unpopped2').removeClass("gradient1").addClass("white");
	$("body").addClass("gradient1");
	two();
	activitiesToRun();
});

$("#unpopped3").click(function (){
	$('#unpopped3').removeClass("gradient1").addClass("white");
	$("body").addClass("gradient1");
	three();
	activitiesToRun();
});

$("#unpopped4").click(function (){
	$('#unpopped4').removeClass("gradient1").addClass("white");
	$("body").addClass("gradient1");
	four();
	activitiesToRun();

});

//capture user's inputs into userPattern array when clicked.

var userPattern = [];

var one = function(){
	userPattern.push("one");
};

var two = function(){
	userPattern.push("two");
};

var three = function(){
	userPattern.push("three");
};

var four = function(){
	userPattern.push("four");
};

//check wins and prints message pop-up depending on correct patterns.

var checkWin = function(){
	if(counter===1){
		if(pattern[0]===userPattern[0]){
			score +=10;
			$("#popupmessage").text("Not bad...");
			$("#scoretracker").text(score);
		}
		else {
			$("#popupmessage").text("....You can't even get one right...");
			resetGame();
		}
	}
	if(counter===2){
		if(pattern[1]===userPattern[1]){
			score+=10;
			$("#popupmessage").text("Keep it up");
			$("#scoretracker").text(score);
		}
		else {
			$("#popupmessage").text("...Train up before you try again!");
			resetGame();
		}
	}
	if (counter===3){
		if(pattern[2]===userPattern[2]){
			score+=10;
			$("#popupmessage").text("Awesome! One more to go!");
			$("#scoretracker").text(score);
		}
		else {
			$("#popupmessage").text("Do better next time");
			resetGame();
		}
	}
	if (counter===4){
		if(pattern[3]===userPattern[3]){
			score+=20;
			$("#popupmessage").text("Terrific! You've got great memory! Let's do this again.");
			$("#scoretracker").text(score);
			resetGame();
		}
		else {
			$("#popupmessage").text("You almost got it. You may just get it right on the next attempt!");
			resetGame();
		}
	}
}		

