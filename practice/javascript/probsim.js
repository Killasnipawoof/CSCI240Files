function flipCoin(){
	var coinToss = Math.floor(Math.random() * 2);
	if(coinToss == 0)
	{
		alert("Flip result is Heads");
	}else {
		alert("Flip result is Tails");
	}
}

function rollDie(){

	var dieRoll = Math.floor(Math.random() * 6) + 1;
	alert("You rolled a " + dieRoll);
}

function roll20Die(){
	
	var dieRoll20 = Math.floor(Math.random() * 20) + 1;
	alert("You rolled a " + dieRoll20);
}
 
function roll30Die(){

	var dieRoll30 = Math.floor(Math.random() * 30) + 1;
	alert("You rolled a " + dieRoll30);
}

function rollDieTally(){

	var rollDie1 = Math.floor(Math.random() * 6) + 1;
	var rollDie2 = Math.floor(Math.random() * 6) + 1;
	var addDice = rollDie1 + rollDie2;

	alert("You rolled a " + rollDie1 + " and a " + rollDie2 + " your total is: " + addDice);

	if(rollDie1 == rollDie2)
	{
		alert("Doubles!");
	}
}

function tripleCoin(){

	var coin1 = Math.floor(Math.random() * 2);
	var coin2 = Math.floor(Math.random() * 2);
	var coin3 = Math.floor(Math.random() * 2);
	
	if(coin1 == 0)
	{
		alert("1'st Flip is Heads");
	}else {
		alert("1'st Flip is Tails");
	}
	if (coin2 == 0)
	{
		alert("2'nd Flip is Heads");
	}else {
		alert("2'nd Flip is Tails");
	}
	if (coin3 == 0)
	{
		alert("3'rd flip is Heads");
	}else { 
		alert("3'rd flip is Tails");
	}

}
