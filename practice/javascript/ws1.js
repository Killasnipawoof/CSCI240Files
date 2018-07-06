function button1(){

	var b = document.getElementById("b1");
	var arr = getAdjacentSiblings(b);

	for (var i = 0; i < arr.length; i++){
		alert(arr[i].nodeType);
	}
}

function getAdjacentSiblings(elm){

	var lc = elm.previousSibling;
	var rc = elm.nextSibling;
	var arr = new Array();
	arr[0] = lc;
	arr[1] = rc;
	return arr;
}

function button2(){
	
	changeId("b1", "newId");
	var button = document.getElementById("newId");
	var text = button.childNodes[0]; //Get's the 0'th child
	alert("Id Changed! " + text.nodeValue);
}


function changeId(id1, id2){

	var button = document.getElementById(id1); //button = node id
	button.id = id2; //id = property
}

function button3(){
	
	addButton();	
	
}

function addButton(){

	var b = document.createElement("b4");
	var txt = document.createTextNode("New Button ");
	b.appendChild(txt)
	document.body.appendChild(b);
}
	



