//Cooresponds with hw3.html

function hw(){
	alert("Hello, World");}

function addMe(){
	alert(10+10);}

function loopAlert(){
var i = 0;
while (i < 10){
	i++;
	alert(i)}
} 

function numString(){
var num = 10;
var message = "Hello, World!";
var unsign;
var bool = false;
var empty = null;
alert("10 is a " + typeof num);
alert("Any text is of the type" + typeof message);
alert("Any variable not signed to a datatype is of the type " + typeof unsign);
alert("True and False variables are of the type " + typeof bool);
alert("Any null values are declared as an " + typeof empty);
}

function toExp(){
var dec = 7.1245;
alert(dec.toExponential(2));
alert(dec.toExponential(4));
alert(dec.toExponential(5));
}

function dateTime(){
var dt = new Date();
alert(dt);
}

function annoy(){//Just a Joke, this loop doesn't have an update statement, therefore it will keep alerting the user until blocked.
var x = 10
var i
for(i = 0; i < 100;){
alert("Please enter credit card info to continue gift recievement");}
}
 
function carTypes(){
var cars = ["Bugatti", "Lambroghini", "Ferrari"];
alert(cars);}

function bool(){
var x = 1
var y = 2
if (x != y){
var boolVal = false;
alert("1 is not equal to 2");
alert("or the Boolean Value is " + boolVal.toString());}}


