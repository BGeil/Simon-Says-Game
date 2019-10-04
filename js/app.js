console.log(`Simon Says Game`);















const game = {

	player1: [],

	sequence: [],

	ranNum: function() {
		const randomNumber = (Math.floor(Math.random() * 4) + 1);;
	},




	// flashButton: function(n) {
	// 	if (n === 1) {
	// 		$(`.yellow`).addClass(`flash-button`).removeClass(`flash-button`);
	// 	} else if (n === 2) {
	// 		$(`.red`).addClass(`flash-button`).removeClass(`flash-button`);
	// 	} else if (n === 3) {
	// 		$(`.green`).addClass(`flash-button`).removeClass(`flash-button`);
	// 	} else if (n === 4) {
	// 		$(`.blue`).addClass(`flash-button`).removeClass(`flash-button`);
	// 	}
	// 		//n.push(this.sequence);
	// },

	// addNextColor()

	// playSequence: function () {

	// },



}



$(`.start-game-button`).on('click', () => {
	console.log(`The start button is working`);
	
})

$(`.yellow`).on(`click`, () => {
	console.log(`The yellow button is working!`);
	flashButton(1);
})

$(`.red`).on(`click`, () => {
	console.log('The red button is working!');
	flashButton(2);
})

$(`.green`).on(`click`, () => {
	console.log('The green button is working!');
	flashButton(3);	
})

$(`.blue`).on(`click`, () => {
	console.log(`The blue button is working!`);
	flashButton(4);
})

