function addText(){
	
	var div = document.getElementById("div1");
	div.appendChild(text);
}


function changeItemText(){
	
	var list = document.getElementById("list");
	var items = list.getElementsByTagName("li");

	for (var i = 0; i < items.length; i++){
		items[i].firstChild.nodeValue = "Choice" + (i + 1); //items[i] = li, firstChild = textnode, .nodeValue = text
	}
}

function addImage(){
	
	var image = document.createElement("img");
	img.src = "images/kitty.jpg";
	img.width = 50;
	img.height = 50;
	var list = document.getElementById("list");
	var next = list.nextSibling;
	var parent = list.parentNode;
	parent.insertBefore(image, next);
}

function addImageSimple{
		
	var list = document.getElementById("list");
	list.insertAdjacentHTML("afterend", <img src = "/images/kitty.jpg"
	height=/"50"/" width="50/">");
}


~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~

