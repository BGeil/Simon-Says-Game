console.log(`Simon Says Game`);


const game = { // Start of Game Object

	player1: [],

	cpu: [],

	currentLevel: 0,

	highestLevel: 0,

	randomNumber: 0,

	generateRanNum: function() {
		 this.randomNumber = (Math.floor(Math.random() * 4) + 1);
		 
	},

	playSequence: function () {
		this.cpu.push(this.randomNumber);
		this.flashButton(this.cpu);
		this.nextLevel();
		this.player1 = [];
	},


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



	

	// gameOver: function() {

	// }

} // End of Game Object


// Start Game button
$(`.start-game-button`).on('click', () => {
	console.log(`The start button is working`);
	game.playSequence();
	
})


// Color Buttons ---- Cod Is definitely not DRY, but should work.
$(`.yellow`).on(`click`, () => {
	console.log(`The yellow button is working!`);
	game.player1.push(1);
	game.flashButton(1);
	game.compareArr(game.player1.length);
})

$(`.red`).on(`click`, () => {
	console.log('The red button is working!');
	game.player1.push(2);
	game.flashButton(2);
	game.compareArr(game.player1.length);
})

$(`.green`).on(`click`, () => {
	console.log('The green button is working!');
	game.player1.push(3);
	game.flashButton(3);	
	game.compareArr(game.player1.length)
})

$(`.blue`).on(`click`, () => {
	console.log(`The blue button is working!`);
	game.player1.push(4);
	game.flashButton(4);
	game.compareArr(game.player1.length)
})

