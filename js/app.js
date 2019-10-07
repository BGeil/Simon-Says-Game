console.log(`Simon Says Game`);


const game = { // Start of Game Object

	player1Seq: [],

	cpuSeq: [],

	currentLevel: 0,

	highestLevel: 0,

	randomNumber: 0,

	generateRanNum: function() {
		 this.randomNumber = (Math.floor(Math.random() * 4) + 1);
		 
	},

	playSequence: function () {
		this.cpuSeq.push(this.randomNumber);
		this.flashButton(this.cpuSeq);
		this.nextLevel();
		this.player1Seq = [];
	},

	// Flashes the button on screen.
	flashButton: function(n) {
		if (n === 1) {
			$(`.yellow`).addClass('flash-button')
			setTimeout(() => {
				$(`.yellow`).removeClass('flash-button')	
			}, 1000)
		} else if (n === 2) {
			$(`.red`).addClass('flash-button')
			setTimeout(() => {
				$(`.red`).removeClass('flash-button')	
			}, 1000)
		} else if (n === 3) {
			$(`.green`).addClass('flash-button')
			setTimeout(() => {
				$(`.green`).removeClass('flash-button')	
			}, 1000)
		} else if (n === 4) {
			$(`.blue`).addClass('flash-button')
			setTimeout(() => {
				$(`.blue`).removeClass('flash-button')	
			}, 1000)
		}
			
	},



	// If player succeeds in following the sequence, this function will change the current level and if applicable the highest level on the DOM
	nextLevel: function () {
    this.currentLevel++;
    $(".current-level").text(`Current Level: ${this.currentLevel}`);

	    if (this.currentLevel >= this.highestLevel) {
	    	this.highestLevel = this.currentLevel;
	    	$(".highest-level").text(`Highest Level Achieved: ${this.highestLevel}`);
	    } 
	 },

 	// Checks sequences beteween cpuSeq and player1Seq
	compareArr: function(indexOfArr) {
	    if (this.player1Seq[indexOfArr] === this.cpuSeq[indexOfArr]) {

	        if (this.cpuSeq.length === this.player1Seq.length) {
	            setTimeout(function() {
	                game.playSequence();
	            }, 1000);
	        }
	    } else {
	        this.gameOver();
	    }
	},


	gameOver: function() {
		console.log("You lost! The game is over!");
		this.currentLevel = 0;
		$(".current-level").text(`Current Level: ${this.currentLevel}`);
		this.cpuSeq = [];
	}

} // End of Game Object


// Start Game button
$(`.start-game-button`).on('click', () => {
	console.log(`The start button is working`);
	game.playSequence();
	
})


// Color Buttons ---- Cod Is definitely not DRY, but should work.
$(`.yellow`).on(`click`, () => {
	console.log(`The yellow button is working!`);
	game.player1Seq.push(1);
	game.flashButton(1);
	game.compareArr(game.player1Seq.length);
})

$(`.red`).on(`click`, () => {
	console.log('The red button is working!');
	game.player1Seq.push(2);
	game.flashButton(2);
	game.compareArr(game.player1Seq.length);
})

$(`.green`).on(`click`, () => {
	console.log('The green button is working!');
	game.player1Seq.push(3);
	game.flashButton(3);	
	game.compareArr(game.player1Seq.length)
})

$(`.blue`).on(`click`, () => {
	console.log(`The blue button is working!`);
	game.player1Seq.push(4);
	game.flashButton(4);
	game.compareArr(game.player1Seq.length)
})

