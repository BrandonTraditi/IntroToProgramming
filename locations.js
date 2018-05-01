//location constructor
function UserLocation(locationName,description,item,hasBeenVisited, lIndex){
	this.locName = locationName;
	this.description = description;
	this.item = item;
	this.visited = hasBeenVisited;
	this.index = lIndex;
}
//item constructor 
function Item(itemName, itemDescription){
	this.itemName = itemName;
	this.itemdescription = itemDescription;
}

UserLocation.prototype.toString = function(){
	return this.locName;
};
//item operators
var Key = new Item("Key", "Key not used for anything");
var Notebook = new Item("Notebook", "What is the school color and a wild animal?");
var Basketball = new Item("Basketball", "Basketball at the McCann Center");
var SecurityKey = new Item("SecurityKey", "Key used to solve final riddle!");
var locations = new Array();


//location operators
var center = new UserLocation("Center", "At the center of campus you can go any way and explore!", null, false, 0);
locations.push(center);
var lowellThomas = new UserLocation("Lowell Thomas", "You are at Lowell Thomas!", null, false, 1);
locations.push(lowellThomas);
var dysonCenter = new UserLocation("Dyson Center", "You have made it to Dyson! There seems to be a Notebook on the ground", Notebook, false, 2);
locations.push(dysonCenter);
var fontaine = new UserLocation("Fontaine", "You have made it to Fontaine!", null, false, 3);
locations.push(fontaine);
var donnellyHall = new UserLocation("Donnelly Hall", "You're at Donnelly Hall! Sneak by the security guards before they see you!", SecurityKey, false, 4);
locations.push(donnellyHall);
var tenney = new UserLocation("Tenney", "You have made it into the stadium!", null, false, 5);
locations.push(tenney);
var mccannCenter = new UserLocation("McCann Center", "You're at the McCann Center! Watch out for the basketball game going on!", Basketball, false, 6);
locations.push(mccannCenter);
var champ = new UserLocation("Champ Hall", "You have made it to Champ Hall, see what else is around!", Key, false, 7);
locations.push(champ);
var midrise = new UserLocation("Midrise", "You have made it to Midrise!", null, false, 8);
locations.push(midrise);
var boathouse = new UserLocation("Boat House", "There seems to be a riddle on the wall but you need to use a special key to get in and solve it!", null, false, 9);
locations.push(boathouse);


var breadCrumbTrail = [];


var map = [
// Center=0, lowellThomas=1, dysonCenter=2, fontaine=3, 
// donnellyHall=4, tenney=5, mccannCenter=6, champ=7,
// midrise=8, boathouse=9
// NORTH, SOUTH, EAST, WEST
    [ locations[1], locations[6], locations[4], locations[7]],// from center
	[ locations[2], locations[0], null, null],// from lowellThomas
	[ locations[3], locations[1], null, null],// from  dysonCenter
	[ null, locations[2], null, null],// from fontaine
	[ null, locations[5], null, locations[0]],// from donnellyHall
	[ locations[4], null, null, null],// from tenney
	[ locations[0], null, null, null],// from mccannCenter
	[ locations[8], null, locations[0], locations[9]],// from champ
	[ null, locations[7], null, null],// from midrise
	[ null, null, locations[7], null]// from boathouse
];
function Navigation(startingLocation,direction){
	console.log(startingLocation.index)
	var location = map [startingLocation.index][direction];
	if (location === null){
		location = startingLocation;
		var message = "You cannot go in that direction at this location!";
		display(message);
	}
	else {
		playerInfo(player, location);
	}
}
function playerInfo(player, place){
	var message;
	//set players location 
	player.location = place;
	player.Trail.push(player.location.locName);
	//display the description
	if (player.location.visited === false){
		player.location.visited = true;
		player.pointsEarned = player.pointsEarned + 5;
		message = player.location.description;
	}
	else{
		message = "Welcome back to " + player.location.locName;
	}
	display(message);
	lastMoves();
	showScore();
}