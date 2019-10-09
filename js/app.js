console.log(`Simon Says Game`);


const game = { // Start of Game Object

    player1Sequence: [],

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

    pushButton: function(num) {
		// Pushes number to player array
    	this.player1Sequence.push(num);

    	// Flashes Button based on color press
		$(`#` + num).addClass('flash-button')
			setTimeout(() => {
				$(`#` + num).removeClass('flash-button')	
			}, 250)    	

		// Checks if player array length is equal to cpu array length
    	if (this.player1Sequence.length === this.cpuSequence.length) {
    		this.compareSequence();
    	}
    },






    // Checks sequences beteween cpu Sequence and player Sequence.  
    compareSequence: function() {
        for (let i = 0; i < this.player1Sequence.length; i++) {
            if (this.player1Sequence[i] !== this.cpuSequence[i]) {
                this.match = false;
            }
        }
        // If the player is successful, playSequence runs again
        if (this.match === true) {
            this.nextLevel();
        // Else the game is over and the gameOver function runs.    
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

    // Resets The Game
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
$(`#1`).on(`click`, () => {
    game.pushButton(1);
})

// Red Button
$(`#2`).on(`click`, () => {
    game.pushButton(2) 
})
// Blue Button
$(`#3`).on(`click`, () => {
    game.pushButton(3)  
})
// Green Button
$(`#4`).on(`click`, () => {
    game.pushButton(4)
    
})