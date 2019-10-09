console.log(`Simon Says Game`);


const game = { // Start of Game Object

    player1Sequence: [2, 1, 3, 4, 1],

    cpuSequence: [],

    currentLevel: 1,

    highestLevel: 0,

    randomNumber: 0,

    isGameRunning: true,

    match: true,



    // this runs when the start button is clicked
    playSequence: function(arr) {

    	counter = 0;

    	flash(counter);
	    
	    function flash(index) {

	       	if(index === arr.length) {
	       		console.log("return statement is running in flash function");
	       		return;
	       	}
	       	else {

	       		console.log("else statement is running in flash function");

		        $(`#`+ arr[index]).addClass('flash-button')

		        setTimeout(() => {
		            $(`#` + arr[index]).removeClass('flash-button')
		        	flash(index + 1);     	  
		        }, 500)
	       	}
	    }
    },



    


    // If player succeeds in following the sequence, this function will change the current level and if applicable the highest level on the DOM
    nextLevel: function() {

        $(".current-level").text(`${this.currentLevel}`);
        if (this.currentLevel >= this.highestLevel) {
            if (this.highestLevel > 19) {
                this.playerWins();
            } else {
                this.highestLevel = this.currentLevel;
                $(".highest-level").text(`${this.highestLevel}`);
            }
        }
        this.currentLevel++;
        player1Sequence = [];

        // add one to sequence
        this.randomNumber = (Math.floor(Math.random() * 4) + 1);
        this.cpuSequence.push(this.randomNumber);
        this.playSequence(this.cpuSequence);

        console.log("The cpuSequence is: ");
        console.log(this.cpuSequence);
    },



    // Checks to see if the lengths of both arrays are equal, if true run compareSequence

    checkLength: function() {
    	if (this.player1Sequence.length === this.cpuSequence.length) {
    		this.compareSequence();
    	}
    },






    // Checks sequences beteween cpu Sequence and player Sequence. If the player is successful, playSequence runs again, else the gameOver function runs.
    compareSequence: function() {
        for (let i = 0; i < this.player1Sequence.length; i++) {
            if (this.player1Sequence[i] !== this.cpuSequence[i]) {
                this.match = false;
            }
        }
        if (this.match === true) {
            this.nextLevel();
        } else if (this.match === false) {
            this.gameOver();
        }
    },







    // This functions runs when the player fails to follow the sequence
    gameOver: function() {
        console.log("You lost! The game is over!");
        this.resetGame();
    },

    // This functions when the player beats level 20
    playerWins: function() {
        this.resetGame();
        console.log(`Congratulations! You Win!`);
    },

    // Resets The Gasme
    resetGame: function() {
        this.currentLevel = 0;
        $(".current-level").text(`${this.currentLevel}`);
        this.cpuSequence = [];
        this.player1Sequence = [];
        this.match = true;
        this.isGameRunning = false;
    }

} // End of Game Object







// Start Game button
$(`.start-game-button`).on('click', () => {
    console.log(`The start button is working`);
   	game.nextLevel();
    
})


// Color Buttons ---- Code Is definitely not DRY, but should work.

// Yellow Button
$(`.yellow`).on(`click`, () => {
    console.log(`The yellow button is working!`);
    game.player1Sequence.push(1);

    console.log(`The player pushed 1 into the player1Sequence array`);
    console.log(game.player1Sequence);

    
    game.checkLength();
   
})

// Red Button
$(`.red`).on(`click`, () => {
    console.log('The red button is working!');
    
    game.player1Sequence.push(2);

    console.log(`The player pushed 2 into the player1Sequence array`);
    console.log(game.player1Sequence);

    game.checkLength();
    
})

// Blue Button
$(`.blue`).on(`click`, () => {
    console.log(`The blue button is working!`);
    game.player1Sequence.push(3);


    console.log(`The player pushed 3 into  the player1Sequence array`);
    console.log(game.player1Sequence);

 
    game.checkLength();
    
})

// Green Button
$(`.green`).on(`click`, () => {
    console.log('The green button is working!');
    game.player1Sequence.push(4);


    console.log(`The player pushed 4 into  the player1Sequence array`);
    console.log(game.player1Sequence);

    game.checkLength();
    
})