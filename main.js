//set up for score tracking.

var counter = 0;

var level = 0;

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

var pop5 = function () {
	$('#unpopped5').removeClass("gradient1").addClass("white");
}

var pop6 = function () {
	$('#unpopped6').removeClass("gradient1").addClass("white");
}

var pop7 = function () {
	$('#unpopped7').removeClass("gradient1").addClass("white");
}

var pop8 = function () {
	$('#unpopped8').removeClass("gradient1").addClass("white");
}

//Reset all the popped white bubbles to color bubbles.

var resetImage = function () {
	$('.unpopped').removeClass("white").addClass("gradient1");
}

// Create audio file.

var audio = new Audio('Large Bubble.mp3');

//Generate new random pattern. I'm using functions as the items in the array so that I can call the functions later.

var pattern = _.shuffle([pop1, pop2, pop3, pop4, pop5, pop6, pop7, pop8]);

//select first 4 sequence for pattern.

pattern = _.sample(pattern, 4);

//Display the image based on random sequence created.

function patternImageGenerator(){
	$('.overlay').removeClass("nocover").addClass("cover");
	setTimeout(pattern[0], 1500);
	setTimeout(pattern[1], 2500);
	setTimeout(pattern[2], 3500);
	setTimeout(pattern[3], 4500);
	setTimeout(resetImage, 5500);
	setTimeout(removeCover, 5500);

}

//calling function to start the game

patternImageGenerator();

//Created a transparent cover to prevent user from tapping the buttons while waiting for pattern to be displayed.
function cover (){
	$('.overlay').removeClass("nocover").addClass("cover");
}

function removeCover(){
	$('.overlay').removeClass("cover").addClass("nocover");
}

//Retagging of pattern array as functions cannot be checked for equality.

function retagPattern() {
	for (var i=0; i<pattern.length; i++)
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
		else if (pattern[i]===pop5){
			pattern[i]="five";
		}
		else if (pattern[i]===pop6){
			pattern[i]="six";
		}
		else if (pattern[i]===pop7){
			pattern[i]="seven";
		}
		else if (pattern[i]===pop8){
			pattern[i]="eight";
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

//Listen to user's input. Grouped in under function to ensure user is not able 
// to tap on the buttons when it is running.

$("#unpopped1").on("click", function (){
	$('#unpopped1').removeClass("gradient1").addClass("white");
	$("body").addClass("gradient1");
	audio.load();
	audio.play();
	one();
	activitiesToRun();
	console.log("1", counter);
});

$("#unpopped2").on("click", function (){
	$('#unpopped2').removeClass("gradient1").addClass("white");
	$("body").addClass("gradient1");
	audio.load();
	audio.play();
	two();
	activitiesToRun();
	console.log("2", counter);
});

$("#unpopped3").on("click", function (){
	$('#unpopped3').removeClass("gradient1").addClass("white");
	$("body").addClass("gradient1");
	audio.load();
	audio.play();
	three();
	activitiesToRun();
	console.log("3", counter);
});

$("#unpopped4").on("click", function (){
	$('#unpopped4').removeClass("gradient1").addClass("white");
	$("body").addClass("gradient1");
	audio.load();
	audio.play();
	four();
	activitiesToRun();
	console.log("4", counter);
});

$("#unpopped5").on("click", function (){
	$('#unpopped5').removeClass("gradient1").addClass("white");
	$("body").addClass("gradient1");
	audio.load();
	audio.play();
	five();
	activitiesToRun();
	console.log("5", counter);
});

$("#unpopped6").on("click", function (){
	$('#unpopped6').removeClass("gradient1").addClass("white");
	$("body").addClass("gradient1");
	audio.load();
	audio.play();
	six();
	activitiesToRun();
	console.log("6", counter);
});

$("#unpopped7").on("click", function (){
	$('#unpopped7').removeClass("gradient1").addClass("white");
	$("body").addClass("gradient1");
	audio.load();
	audio.play();
	seven();
	activitiesToRun();
	console.log("7", counter);
});

$("#unpopped8").on("click", function (){
	$('#unpopped8').removeClass("gradient1").addClass("white");
	$("body").addClass("gradient1");
	audio.load();
	audio.play();
	eight();
	activitiesToRun();
	console.log("8", counter);
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

var five = function(){
	userPattern.push("five");
};

var six = function(){
	userPattern.push("six");
};

var seven = function(){
	userPattern.push("seven");
};

var eight = function(){
	userPattern.push("eight");
};



//check wins and prints message pop-up depending on correct patterns.

var checkWin = function(){
	if(counter===1){
		if(pattern[0]===userPattern[0]){
			score +=10;
			levelling();
			$("#popupmessage").text("Good");
			$("#scoretracker").text(score);
		}
		else {
			$("#popupmessage").text("In the middle of every difficulty lies opportunity");
			score -=20
			levelling();
			$("#scoretracker").text(score);
			resetGame();
		}
	}
	if(counter===2){
		if(pattern[1]===userPattern[1]){
			score+=10;
			levelling();
			$("#popupmessage").text("Better");
			$("#scoretracker").text(score);
		}
		else {
			$("#popupmessage").text("Press on - nothing can take the place of persistence");
			score -=20
			$("#scoretracker").text(score);
			resetGame();
		}
	}
	if (counter===3){
		if(pattern[2]===userPattern[2]){
			score+=10;
			levelling();
			$("#popupmessage").text("Best!");
			$("#scoretracker").text(score);
		}
		else {
			$("#popupmessage").text("Try Again. Fail again. Fail better");
			score -=20
			$("#scoretracker").text(score);
			resetGame();
		}
	}

	if (counter===4){
		if(pattern[3]===userPattern[3]){
			score+=20;
			levelling();
			$("#popupmessage").text("Join these phrases and you get 'Good, Better, Best. Never let it rest. Let's do this again.");
			$("#scoretracker").text(score);
			level++;
			resetGame();
		}
		else {
			$("body").click(function(event) {
				event.stopImmediatePropagation();})
			$("#popupmessage").text("Failure is simply the opportunity to begin again, this time more intelligently");
			score -=20
			$("#scoretracker").text(score);
			resetGame();
		}
	}
}		

//Message display at different levels plus confetti shower when levelling up.
//Game ends when player reaches negative score.

function levelling () {
	// if (score === 20){
		
		if(score<=0){
		$("#level").text("There is no failure except in no longer trying. Refresh to replay");
		$(".unpopped").addClass("theend");
		};

		if(score ===150){
			$("#level").text("Level up to confirmed Popper!");
			$(".coneffects").addClass("confetti");
		};
		if(score ===200){
			$(".coneffects").removeClass("confetti");
		};
		if(score ===300){
			$("#level").text("Perserve to reach Popper Expert status!");
		};
		if(score ===1000){
			$("#level").text("Level up to Popper Expert! You are among our top poppers. Stay on track to get into our game league");
			$(".coneffects").addClass("confetti");
		};
		if(score ===1100){
			$(".coneffects").removeClass("confetti");
		};
		if(score === 1500){
			$("#level").text("You are a member of our League of Poppers!");
			$("body").removeClass("gradient1");
			$(".coneffects").addClass("confetti");

		};

	}


//resets game while keeping score intact. 

var resetGame = function(){
	resetImage();
	counter = 0;
	userPattern = [];
	pattern = _.shuffle([pop1, pop2, pop3, pop4, pop5, pop6, pop7, pop8]);
	patternImageGenerator();
}
