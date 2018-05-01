//Brandon Traditi, CMPT 120, 12/11/2015 
//Version 1.0
var player = {
		location: center, 
		pointsEarned: 0, 
		Inventory: items, 
		Trail: breadCrumbTrail 
}; 
var North = 0;
var South = 1;
var East = 2;
var West = 3;
var items = new Array();

function Go(direction){
	console.log(player.location);
	console.log(direction);
	Navigation(player.location, direction);
}

//beginning of each position
function display(info){
	document.getElementById("text").innerHTML = info;
}
function goButton (){
	var input; 
	input = document.getElementById("input").value;
	
	if (input === "N" || input === "n"){
		goNorth();
	}
	else if (input === "S" || input === "s"){
		goSouth();
	}
	else if (input === "E" || input === "e"){
		goEast();
	}
	else if (input === "W" || input === "w"){
		goWest();
	}
	else if (input === "T" || input === "t"){
		take();
	}
	else if (input === "H" || input === "h"){
		help();
	}
	else if (input === "E" || input === "e"){
		examine();
	}
	else if (input === "U" || input === "u"){
		use();
	}
	else{
		document.getElementById("error").innerHTML = "The Input is incorrect. Try an input like N,S,E, or W";
	}
}
function enableButtons(){
	document.getElementById("North").disabled=false;
	document.getElementById("south").disabled=false;
	document.getElementById("East").disabled=false;
	document.getElementById("West").disabled=false;
}
function score(location){
	if(location.visited === true){
		player.pointsEarned += 5;
		UserLocation.hasBeenVisited = false;
		showScore(player.pointsEarned);
	}
}
function showScore(description){
	document.getElementById("score").innerHTML = description;
}

function take(){
	var message;
	if (player.location.item !== null) {
		items.push(player.location.item.itemName);
	}
	myItem();
	player.location.item = null;
}
function myItem(){
	if (items.length === 0){
		message = "You dont have any items"
	}
	else{
		message ="You have these items right now: " + items.join(", ");
	}
	document.getElementById("Inventory").innerHTML = message;
}
function previous(){
	var message = "Your previous locations were: " + breadCrumbTrail;
	
}
function lastMoves(){
	if (player.Trail.length < 5){
		document.getElementById("previousMoves").innerHTML ="These are your last five moves: " + player.Trail.join(", ");
	}
	else{
		var five = player.Trail.slice(player.Trail.length - 5);
		document.getElementById("previousMoves").innerHTML ="These are your last five moves: " + five.join(", ");
		}
}
function help(){
	var message = "Try using keys such as N,S,E,W,T,I,H, or P"
	display(message);
}
function examine(){
	var message = "There is a" + items + ".";
	display(message);
}
function use(){
	var message 
	if(donnellyHall.item === null && player.location.index === 9){
		message = prompt("What is Marist's Mascot?");
		while (message != "Red Foxes"){
			message = prompt("What is Marist's Mascot?");
		}
		alert("You Win!");
	}
}