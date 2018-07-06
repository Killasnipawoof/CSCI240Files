function getTitle(){
	
	var originalTitle = document.title;
	alert(document.title);
}

function changeTitle(){
	var originalTitle = document.title;
	document.title = "Title Changed!";
}
 
function getURL(){
	
	var url = document.URL;
	var domain = document.domain;
	var referrer = document.referrer;
	
	alert("Document URL is " + url + "\n" + "Document Domain is " + domain + "\n" + "Document Referrer is " + referrer + "\n");

}

function viewDivID(){
	
	var div = document.getElementById("divtastic");
	alert("Specified div's details:\n" + "ID: " + div.id + "\n" + "Class Name" + div.className + "\n" + "Title: "+ div.title + "\n" + "Language: " + div.lang + "\n" + "Directory: " + div.dir);

}

