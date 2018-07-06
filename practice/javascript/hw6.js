function obj_cons(){
	var person = new Object(); //Instatnitates a new object using the object constructor
	person.name = "Thomas Hohnke";
	person.age = 20;
	alert("My name is " + person.name + "and my age is " + person.age);
}

function displayInfo(){
	var args = {
		name : "Thomas Hohnke",
		age : 20
	};

	var output = "";

	if (typeof args.name == "string"){
   		output += "Name: " + args.name + "\n";
	}
	if (typeof args.name == "number"){
   		output += "Age: " + args.age + "\n";
	}	
	alert (output);
}

function arrType(){
	//var colors = new Array();//Instantiates an array
	var colors = ["Red","Blue","Yellow"];
	alert(colors);
	alert("The length of the array is " + colors.length);
}


function colorAppend(){
	var colors = ["Red", "Blue", "Yellow"];
	colors[colors.length] = "Orange"; //Adds Orange to position 3
	colors[colors.length] = "Purple"; //Adds Purple to position 4
	colors[colors.length] = "Green";//Adds Green to position 5
	alert(colors);
}

function colorJoin(){
	var colors = ["Red", "Blue", "Yellow"];
	alert(colors.join(",")); //Displays as Red,Blue,Yellow
	alert(colors.join("||")); //Displays as Red||Blue||Yellow
}

function pie(){
	var pi = Math.PI;
	alert (pi);
}

function slicer(){
	var colors = ["Red","Blue","Yellow","Orange","Purple","Green"];
	var primColors = colors.slice(0,3); //Reads from element 0 to element 2
	var secColors = colors.slice(3,6); //Reads from element 3 to element 5
	alert("The six traditional painting colors are " + colors + ".");
	alert("The primary colors are " + primColors +  ".");
	alert("The secondary colors are " + secColors + ".");
}

function curDate(){
	var now = new Date();
	alert(now);
}

function birthDay(){
	bd = new Date("July 10, 1995");
	alert("I was born on " + bd);
}

function birthDayTime(){
	bdt = new Date(Date.UTC("Fri Mar 25 2015 10:00:00 UTC+0500 (EST)"));
	alert("I was born on " + bdt);
}

function lotto(){
	var winNums = [Math.floor(Math.random() * 60 + 1), Math.floor(Math.random() * 60 + 1), Math.floor(Math.random() * 60 + 1), Math.floor(Math.random() * 60 + 1), Math.floor(Math.random() * 60 + 1), Math.floor(Math.random() * 60 + 1)];
	alert("The winning numbers are " + winNums);
}

function geom(){
var num = 168;
var num2 = -168;
alert("The sine of " + num + " is " + Math.sin(num)); 
alert("The cosine of " + num + " is " + Math.cos(num));
alert("The tangent of " + num + " is " + Math.tan(num));
}


