console.log(`Simon Says Game`);


const game = {

	player1: [],

	sequence: [],

	currentStreak: null,

	highStreak: null,

	randomNumber: 0,

	generateRanNum: function() {
		 this.randomNumber = (Math.floor(Math.random() * 4) + 1);
		 
	},


	flashButton: function(n) {
		if (n === 1) {
			$(`.yellow`).addClass('flash-button')
			setTimeout(() => {
				$(`.yellow`).removeClass('flash-button')	
			}, 75)
		} else if (n === 2) {
			$(`.red`).addClass('flash-button')
			setTimeout(() => {
				$(`.red`).removeClass('flash-button')	
			}, 75)
		} else if (n === 3) {
			$(`.green`).addClass('flash-button')
			setTimeout(() => {
				$(`.green`).removeClass('flash-button')	
			}, 75)
		} else if (n === 4) {
			$(`.blue`).addClass('flash-button')
			setTimeout(() => {
				$(`.blue`).removeClass('flash-button')	
			}, 75)
		}
			
	},


	playSequence: function () {

		},



	// addNextColor()

	// playSequence: function () {

	// },



}



$(`.start-game-button`).on('click', () => {
	console.log(`The start button is working`);
	
})

$(`.yellow`).on(`click`, () => {
	console.log(`The yellow button is working!`);
	game.flashButton(1);
})

$(`.red`).on(`click`, () => {
	console.log('The red button is working!');
	game.flashButton(2);
})

$(`.green`).on(`click`, () => {
	console.log('The green button is working!');
	game.flashButton(3);	
})

$(`.blue`).on(`click`, () => {
	console.log(`The blue button is working!`);
	game.flashButton(4);
})

