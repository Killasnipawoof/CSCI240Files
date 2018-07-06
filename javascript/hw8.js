function winName(){

var person = {}
person.name = "Walter White"
function sayName(){
	alert(person.name);
	}
alert(window.name);
sayName();
window.sayName()

}

function winOpen(){
	window.open("practice/hw8frame1.html", "topFrame");
}

function popWin(){//Works if the user doesnt interact with it
var blocked = false;

try {
	var techWin = window.open("http://www.t3chmast3r.com", "_blank");
	if (techWin == null){
		blocked = true;
	}
} catch (ex){
	blocked = true;
}

if (blocked){
	alert("The popup was blocked!");
}
}

function timeAlert(){
	setTimeout(function(){//Timeout delays the message being shown
		alert("Hello, world!");
	}, 1000)
}

function actWin(){
confirm("Do you like JavaScript?");
if(confirm("Do you like JavaScript?")) {
	alert("JavaScript is hard, but fun and challeging isn`t it?");
} else {
	alert("That's too bad, JavaScript is essential for all modern websites.");
}
}

function args(){
function getQueryStringArgs(){
	
	//Get query string without the initial ?
	var qs = (location.search.length > 0 ? location.search.substring(1) : ""),
	
		//Object to hold data
		args = {},

		//Get individual items
		items = qs.length ? qs.split("&") : [],
		item = null,
		name = null,
		value = null,

		//used in for loop
		i = 0;
		len = items.length;

	//assign each item onto the args object
	for (i = 0; i < len; i++){
		item = items[i].split("=");
		name = decodeURIComponent(item[0]);
		value = decodeURIComponent(item[1]);

		if (name.length) {
			args[name] = value;
		}
	}
	
	return args;
}
}

function plugFinder(){
	function hasFlash(){
		var result = hasPlugin("Flash");
		if (!result){
			result = hasIEPlugin("ShockwaveFlash.ShockwaveFlash");
		}
		return result;
	}

	function hasQuickTime(){
		var result = hasPlugin("Quicktime");
		if(!result){
			result = hasIEPlugin("QuickTime.QuickTime");
		}
		return result;
	}

	//detect flash
	alert(hasFlash());
	//detect quicktime
	alert(hasQuickTime());
}

function browserIdentifier(){ //Unreliable, as most browsers will say mozilla
	var bz = navigator.appCodeName;
	alert(bz);
}

function fullBrowsName(){
	var fbz = navigator.appName;
	alert(fbz)
}

function getCompInfo(){
	var cpu = navigator.cpuClass;
	var jav = navigator.javaEnabled();
	var onl = navigator.OnLine;
	var os = navigator.oscpu;
	var plat = navigator.platform;
	var vend = navigator.vendor;
	var user = navigator.userAgent;
	var ext = navigator.vendorSub;

	alert("CPU: " + cpu + "\nOS: " + os + "\nPlatform: " + plat + "\nJava Enabled?: " + javMessage());

	function javMessage(){
		if(jav = false){
			return "No"
		} else
			return "Yes"
		}
}  

function inputField(){
	
	var str = prompt("Please enter something: ");
	
	if (name != null){
		alert("Thank you for you input of: " + str);
	
	}else {
		alert("Please enter something in the text field.");
	
	}
}

