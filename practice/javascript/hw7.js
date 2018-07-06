function writeName(){
	var person = {};
	Object.defineProperty(person, "name", {
		writable: true,
		value: "Nick"
	})		
	
	alert("Before overwrite, the name is: " + person.name);
	person.name = "Sam";
	alert("After overwrite, the name is: " + person.name);
}

function getEdit(){
var book = { //Object book is created with 2 properties, _year and edition
	_year: 2004,
	edition: 1
};

Object.defineProperty(book, "year", {
	get: function(){
		return this._year;
	},
	set: function(newValue){
	
		if(newValue > 2004) {
		   this._year = newValue;
		   this.edition += newValue - 2004;
		}
	}
});

book.year = 2005;
alert("For a book released in 2004, the 2005 book edition would be " +  book.edition); 
}

function dat(){
var assignment = {
	title: undefined,
	date: undefined
};

Object.defineProperty(assignment, "date",{
	get: function() { return this.date;},
	
	set: function(value){
		var today = new Date();
		alert("Setting Date");
		this.date = today;
		if (value != today){
			this.title = "Invalid";
		}
	}
});

var d = new Date();
d.setDate(13);
d.setMonth(0);
d.setFullYear(2016);
alert(d)

assign.title = "test";
alert(assign.title);

assign.date = d;
alert(assign.title);
}
function dat(){
var assignment = {
	_date: undefined,
	title: undefined,
	date: undefined
};

Object.defineProperty(assignment, "date",{
	get: function(){ return this._date; },
	
	set: function(value){
		this._date = value;
		var curDate = new Date();
		alert("Setting Date");
		if (value < curDate){
			this.title = "Invalid";
		}
	}
});

var d = new Date();
d.setDate(13);
d.setMonth(0);
d.setFullYear(2016);
alert(d);

assign.title = "test"
alert(assign.title);

assign.date = d;
alert(assign.title);
alert(assign.date);

} 

function winAge(){
var age = 20;
function sayAge(){	
	alert(this.age);
}

alert(window.age);
sayAge();
window.sayAge();

}



