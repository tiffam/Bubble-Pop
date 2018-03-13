var counter = 0;

var score = 0;

//set functions to show popped bubbles.

var pop1 = function () {
	$('#popped1').css("z-index", 10);
}

var pop2 = function () {
	$('#popped2').css("z-index", 10);
}

var pop3 = function () {
	$('#popped3').css("z-index", 10);
}

var pop4 = function () {
	$('#popped4').css("z-index", 10);
}

//function to reset images and counter and pattern

var resetImage = function () {
	$('#popped1').css("z-index", 3);
	$('#popped2').css("z-index", 3);
	$('#popped3').css("z-index", 3);
	$('#popped4').css("z-index", 3);
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
	$('#popped1').css("z-index", 10);
	counter++;
	console.log(counter);
	one();
	retagPattern();
	checkWin();


});
$("#unpopbubble2").click(function (){
	$('#popped2').css("z-index", 10);
	counter++;
	console.log(counter);
	two();
	retagPattern();
	checkWin();

});
$("#unpopbubble3").click(function (){
	$('#popped3').css("z-index", 10);
	counter++;
	console.log(counter);
	three();
	retagPattern();
	checkWin();

});
$("#unpopbubble4").click(function (){
	$('#popped4').css("z-index", 10);
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
			console.log("index0", "Keep it up");
			score +=10;
			$("#scoretracker").text(score);
			console.log("score", score);
		}
		else {
			console.log("counter1", "Do better next time");
			resetGame();
		}
	}
	if(counter===2){
		if(pattern[1]===userPattern[1]){
			console.log("index0", "Keep it up");
			score +=10;
			$("#scoretracker").text(score);
			console.log("score", score);
		}
		else {
			console.log("counter2", "Do better next time");
			resetGame();
		}
	}

	if (counter===3){
		if(pattern[2]===userPattern[2]){
			console.log("index0", "Keep it up");
			score +=10;
			$("#scoretracker").text(score);
			console.log("score", score);
		}
		else {
			console.log("counter3", "Do better next time");
			resetGame();
		}
	}
	if (counter===4){
		if(pattern[3]===userPattern[3]){
			console.log("counter4", "You got it right! Let's play another round!");
			score +=20;
			$("#scoretracker").text(score);
			console.log("score", score);
			resetGame();

		}
		else {
			console.log("Index0", "Do better next time");
			resetGame();
		}
	}
}		





// if()
// }

// function gamePlay () {
// 	if(pattern[0]===userPattern[0]){
// 		console.log("index0", "Keep it up");}
// 		else {console.log("Index0", "Do better next time");}
// 		gamePlay1();
// 	}

// var gamePlay1 = function() {
// 	if( pattern[1]===userPattern[1]||userPattern[1]===undefined){
// 		return console.log("index1", "Keep it up");}
// 		else {console.log("Index1", "Do better next time");}
// 		gamePlay2();
// 	}

// var gamePlay2 = function() {
// 	if( pattern[2]===userPattern[2]||userPattern[2]===undefined){
// 		console.log("Index2", "Keep it up");}
// 		else {console.log("Index2", "Do better next time");}
// 		gamePlay3();
// 	}

// var gamePlay3 = function() {
// 	if(userPattern[3]===undefined){
// 		console.log("index3", "Keep Going");
// 	}
// 	else if(pattern[3]===userPattern[3]){
// 		console.log("You win!");}
// 	else {console.log("Index3", "Do better next time");}
// 	}



// 	if(pattern[1]!==userPattern[1]||userPattern[1]===undefined){
// 		return console.log("Really? You can get this wrong?");
// 	}
// 	if (pattern[2]!==userPattern[2]||userPattern[1]===undefined){
// 		return console.log("Really? You can get this wrong?");
// 	}
// 	if (pattern[3]!==userPattern[3]){
// 		return console.log("Really? You can get this wrong?")
// 	}
// }

// var gamePlay1 = function (){
// 	if (pattern[0]!== userPattern[0]){
// 		return console.log("Really? You can get this wrong?");
// 	}
// }

// var gamePlay2 = function (){
// 	if (pattern[1]!== userPattern[1]){
// 		return console.log("You have a lousy memory!");
// 	}
// }

// var gamePlay3 = function (){
// 	if (pattern[2]!== userPattern[2]){
// 		return console.log("You have a lousy memory!");
// 	}
// }

// var gamePlay4 = function (){
// 	if (pattern[3]!== userPattern[3]){
// 		console.log("You won! Brilliant!");
// 	} else {
// 		return console.log("Just a little bit more and you could have won! Better luck next time.");
// 	}
// }
// var gamePlay = function () {
// 	if (pattern[0]===userPattern[0])
// 		{return console.log("index0", pattern[0], userPattern[0]);
// 	}	
// 	else if (pattern[0]!==userPattern[0]){
// 		return console.log("You have a lousy memory!");
// 	}
// 	else if (pattern[1]===userPattern[1]){
// 		return console.log("index1", pattern[1], userPattern[1]);
// 	}
// 	else if (pattern[1]!==userPattern[1]){
// 		return console.log("How about some tonic to build up your brain?");
// 	}
// 	else if (pattern[2]===userPattern[2]){
// 		return console.log("index2", pattern[2], userPattern[2]);
// 	}
// 	else if (pattern[2]!==userPattern[2]){
// 		return console.log("Really? You can get this wrong?");
// 	}
// 	else if (pattern[3]===userPattern[3]){
// 		return console.log("index3", pattern[3], userPattern[3]);
// 	}
// 	else if (pattern[3]===userPattern[3]){
// 		return console.log("Really? You can get this wrong?");
// 	}
// }





// 		return console.log("You have bad memory");

// 	}
// 	if (pattern[1]!==userPattern[1]){
// 		console.log("index1", pattern[1], userPattern[1]);
// 		return console.log("How about some tonic to build up your brain?");

// 	}
// 	if (pattern[2]!==userPattern[2]){
// 		console.log("index2", pattern[2], userPattern[2]);
// 		return console.log("Really? You can get this wrong?");
// 	}
// 	if (pattern[3]!==userPattern[3]){
// 		console.log("index3", pattern[3], userPattern[3]);
// 		return console.log("You almost got it right! Better luck next time!");
// 	}
// }



	//$('#popped2').click(userPattern.push(pop2));
	//console.log(userPattern);
	//$('#popped3').click(userPattern.push(pop3));
	//console.log(userPattern);
	//$('#popped4').click(userPattern.push(pop4));
	//console.log(userPattern);

//check user's inputs against pattern


// function displayPattern1 (){
// 	console.log("pattern", pattern);
// 	pattern.forEach(function(){
// 		if(pattern[0]==="popped1") {
// 			setTimeout(pop1(), 2000);	
// 			newPattern.push("popped1");
// 			console.log("pop1", newPattern);
// 		}
// 		else if (pattern[0]==="popped2"){
// 			setTimeout(pop2(), 2000);
// 			newPattern.push("popped2");
// 			console.log("pop2", newPattern);
// 		}
// 		else if (pattern[0]==="popped3"){
// 			setTimeout(pop3(), 2000);
// 			newPattern.push("popped3");
// 			console.log("pop3", newPattern);
// 		}
// 		else if (pattern[0]==="popped4"){
// 			setTimeout(pop4(), 2000);
// 			newPattern.push("popped4");
// 			console.log("pop4", newPattern);
// 		}

// 		else if (pattern[1]==="popped1") {
// 			setTimeout(pop1(), 5000);	
// 			newPattern.push("popped1");
// 			console.log("pop1", newPattern);
// 		}
// 		else if (pattern[1]==="popped2"){
// 			setTimeout(pop2(), 5000);
// 			newPattern.push("popped2");
// 			console.log("pop2", newPattern);
// 		}
// 		else if (pattern[1]==="popped3"){
// 			setTimeout(pop3(), 5000);
// 			newPattern.push("popped3");
// 			console.log("pop3", newPattern);
// 		}
// 		else if (pattern[1]==="popped4"){
// 			setTimeout(pop4(), 5000);
// 			newPattern.push("popped4");
// 			console.log("pop4", newPattern);
// 		}
// 		else if(pattern[2]==="popped1") {
// 			setTimeout(pop1(), 10000);	
// 			newPattern.push("popped1");
// 			console.log("pop1", newPattern);
// 		}
// 		else if (pattern[2]==="popped2"){
// 			setTimeout(pop2(), 10000);
// 			newPattern.push("popped2");
// 			console.log("pop2", newPattern);
// 		}
// 		else if (pattern[2]==="popped3"){
// 			setTimeout(pop3(), 10000);
// 			newPattern.push("popped3");
// 			console.log("pop3", newPattern);
// 		}
// 		else if (pattern[2]==="popped4"){
// 			setTimeout(pop4(), 15000);
// 			newPattern.push("popped4");
// 			console.log("pop4", newPattern);
// 		}
// 		else if(pattern[3]==="popped1") {
// 			setTimeout(pop1(), 15000);	
// 			newPattern.push("popped1");
// 			console.log("pop1", newPattern);
// 		}
// 		else if (pattern[3]==="popped2"){
// 			setTimeout(pop2(), 15000);
// 			newPattern.push("popped2");
// 			console.log("pop2", newPattern);
// 		}
// 		else if (pattern[3]==="popped3"){
// 			setTimeout(pop3(), 15000);
// 			newPattern.push("popped3");
// 			console.log("pop3", newPattern);
// 		}
// 		else if (pattern[3]==="popped4"){
// 			setTimeout(pop4(), 15000);
// 			newPattern.push("popped4");
// 			console.log("pop4", newPattern);
// 		}
// 		else if(pattern[4]==="popped1") {
// 			setTimeout(pop1(), 20000);	
// 			newPattern.push("popped1");
// 			console.log("pop1", newPattern);
// 		}
// 		else if (pattern[4]==="popped2"){
// 			setTimeout(pop2(), 20000);
// 			newPattern.push("popped2");
// 			console.log("pop2", newPattern);
// 		}
// 		else if (pattern[4]==="popped3"){
// 			setTimeout(pop3(), 20000);
// 			newPattern.push("popped3");
// 			console.log("pop3", newPattern);
// 		}
// 		else if (pattern[4]==="popped4"){
// 			setTimeout(pop4(), 20000);
// 			newPattern.push("popped4");
// 			console.log("pop4", newPattern);
// 		}
// 	})
// }







// function displayPattern(){
// 		console.log("pattern", pattern);
// 		for (index=0; index<=pattern.length; index++){
// 		if(pattern[index]==="popped1") {
// 		pop1();	
// 		newPattern.push("popped1");
// 		console.log("pop1", newPattern);
// 		}
// 		else if (pattern[index]==="popped2"){
// 		pop2();
// 		newPattern.push("popped2");
// 		console.log("pop2", newPattern);
// 		}
// 		else if (pattern[index]==="popped3"){
// 		pop3();
// 		newPattern.push("popped3");
// 		console.log("pop3", newPattern);
// 		}
// 		else if (pattern[index]==="popped4"){
// 		pop4();
// 		newPattern.push("popped4");
// 		console.log("pop4", newPattern);
// 		}

// // 	}
// // }


// displayPattern1();




// setInterval(pop1, 1000);


// setInterval("alert('Hello')", 1000);

// document.querySelect('#popped1').append
// var popped2 = $('#popped2');
// var popped3 = $('#popped3');
// var popped3 = $('#popped4');

// popped1.css("z-index", 10);
// popped2.css("z-index", 10);
// popped3.css("z-index", 10);
// popped4.css("z-index", 10);



	// if(element===popped1) {
	// 	$('#popped1').css("z-index", 10);
	// 	console.log("activate 1");
	// }
	// else if (element===popped2){
	// 	// $('#popped2').css("z-index", 10);
	// 	console.log("activate 2");
	// }
	// else if (pattern[item]===popped3){
	// 	// $('#popped3').css("z-index", 10);
	// 	console.log("activate 3");
	// }
	// else {
	// 	// $('#popped4').css("z-index", 10);
	// 	console.log("activate 4");
	// }
	// (

// var patternDisplay = function (item) {
// 	console.log(pattern);
// 	if(pattern[item]===popped1){
// 		// $('#popped1').css("z-index", 10);
// 		console.log("activate 1");
// 	}
// 	else if (pattern[item]===popped2){
// 		// $('#popped2').css("z-index", 10);
// 		console.log("activate 2");
// 	}
// 	else if (pattern[item]===popped3){
// 		// $('#popped3').css("z-index", 10);
// 		console.log("activate 3");
// 	}
// 	else {
// 		// $('#popped4').css("z-index", 10);
// 		console.log("activate 4");
// 	}

// 	}

// console.log("patternDisplay(0)", patternDisplay(0));
// console.log("patternDisplay(1)", patternDisplay(1));
// console.log("patternDisplay(2)", patternDisplay(2));
// console.log("patternDisplay(3)", patternDisplay(3));
// setInterval(pattern[0], 2000);
// setInterval(pattern[1], 4000);
// setInterval(pattern[2], 6000);
// setInterval(pattern[3], 8000);


// var patternGenerator = pattern.forEach (function(element){
// 	console.log(selectAndChange(element));
// 		selectAndChange(element);
// }
// );


// function selectAndChange() {
// 	for (var i = 0; i<pattern.length; i++) 
// 	{
// 		if(pattern[i] === popped1){
// 			popped1 = $('#popped1').css("z-index", 10);
// 		}
// 		else if (pattern[i]===popped2){
// 			popped2 = $('#popped2').css("z-index", 10);
// 		}
// 		else if (pattern[i]===popped3){
// 			popped3 = $('#popped3').css("z-index", 10);
// 		}
// 		else {popped4 = $('#popped4').css("z-index", 10);
// 	}
// }
// }





// patternGenerator();


	// )


// //how to use numbers to run the game?



