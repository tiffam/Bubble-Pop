var counter = 0;

var score = 0;

//set functions to show popped bubbles.

var pop1 = function () {
	$('#unpopbubble1').removeClass("gradient1").addClass("grey");
}

var pop2 = function () {
	$('#unpopbubble2').removeClass("gradient1").addClass("grey");
}

var pop3 = function () {
	$('#unpopbubble3').removeClass("gradient1").addClass("grey");
}

var pop4 = function () {
	$('#unpopbubble4').removeClass("gradient1").addClass("grey");
}

//function to reset images and counter and pattern

var resetImage = function () {
	$('#unpopbubble1').removeClass("grey").addClass("gradient1");;
	$('#unpopbubble2').removeClass("grey").addClass("gradient1");;
	$('#unpopbubble3').removeClass("grey").addClass("gradient1");;
	$('#unpopbubble4').removeClass("grey").addClass("gradient1");;
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

//Create pattern with sequence.

function patternImageGenerator(){
	setTimeout(pattern[0], 1000);
	setTimeout(pattern[1], 2000);
	setTimeout(pattern[2], 3000);
	setTimeout(pattern[3], 4000);
	setTimeout(resetImage, 5000);
}

patternImageGenerator();

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

//create array to save user's inputs

//show user's input as clicked



$("#unpopbubble1").click(function (){
	$('#unpopbubble1').removeClass("gradient1").addClass("grey");;
	counter++;
	console.log(counter);
	one();
	retagPattern();
	checkWin();


});
$("#unpopbubble2").click(function (){
	$('#unpopbubble2').removeClass("gradient1").addClass("grey");;
	counter++;
	console.log(counter);
	two();
	retagPattern();
	checkWin();

});
$("#unpopbubble3").click(function (){
	$('#unpopbubble3').removeClass("gradient1").addClass("grey");;
	counter++;
	console.log(counter);
	three();
	retagPattern();
	checkWin();

});
$("#unpopbubble4").click(function (){
	$('#unpopbubble4').removeClass("gradient1").addClass("grey");;
	counter++;
	console.log(counter);
	four();
	retagPattern();
	checkWin();

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

//check wins

var checkWin = function(){
	if(counter===1){
		if(pattern[0]===userPattern[0]){
			$("#popupmessage").text("Not bad...");
			score +=10;
			$("#scoretracker").text(score);
			console.log("score", score);
		}
		else {
			$("#popupmessage").text("Can't believe this....");
			resetGame();
		}
	}
	if(counter===2){
		if(pattern[1]===userPattern[1]){
			$("#popupmessage").text("Keep it up");
			score +=10;
			$("#scoretracker").text(score);
			console.log("score", score);
		}
		else {
			$("#popupmessage").text("...Train up before you try again!");
			resetGame();
		}
	}

	if (counter===3){
		if(pattern[2]===userPattern[2]){
			$("#popupmessage").text("Awesome! One more to go!");
			score +=10;
			$("#scoretracker").text(score);
			console.log("score", score);
		}
		else {
			$("#popupmessage").text("Do better next time");
			resetGame();
		}
	}
	if (counter===4){
		if(pattern[3]===userPattern[3]){
			$("#popupmessage").text("Terrific! You've got great memory! How about another round?");
			score +=20;
			$("#scoretracker").text(score);
			console.log("score", score);
			resetGame();

		}
		else {
			$("#popupmessage").text("You almost got it. Try again and you may just get it right!");
			resetGame();
		}
	}
}		
