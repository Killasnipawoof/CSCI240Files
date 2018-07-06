function testOL() {
	
	var array = [1,2,3,4,5];
	
	alert(overLimit (array, 2)); //Returns true
	alert(overLimit(array, 6)); //Returns false
}

function overLimit(arr, limit) {
	
	var result = arr.some(function(item, index, array) {
		return item > limit;
	});
	
	return result;
}

function testGA() {
	
	alert(getASCII("Hello!"));
}

function getASCII(str) {
	
	var arr = str.split("");
	
	var result = arr.map(function(item, index, array) {
		return item.charCodeAt();
	});
	
	return result
}

function testp() {
	
	function Player() {
		this.username = undefined;
		this.topScore = 0;
		this.currentGame = "Not Playing";
	}
	
	Player.prototype = {
		getTopScore : function() {
			return this.topScore;
		}
	};

	/* Test the Player type */
	
	var player1 = new Player();
	player1.username = "Thomas";
	player1.topScore = 1000;
	player1.currentGame = "Super Smash Bros.";
	alert(player1.username);
	
	var player2 = newPlayer();
	player2.topScore = 200;
	
	alert(player1.getTopScore());
	alert(player2.getTopScore());
	
}

function testGame() {
	
	var game = {
		_title: undefined,
		title: undefined,
		numPlayers: undefined
	};
	Object.defineProperty(game, "title", {
		set: function(str) {
			this._title = str;
			if (str.length > 0)
				this.numPlayers = 0;
			
		},
		
		get: function() {
			return this._title;
		}
	});

	/* Test the game object */
	
	alert(game.numPlayers); //undefined
	game.title = "Game 1";
	alert(game.title); // "Game 1"
	alert(game.numPlayers); // 0
	game.numPlayers = 3;
	alert(game.numPlayers); //3
}

