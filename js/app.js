console.log(`Simon Says Game`);


const game = { // Start of Game Object

    player1Sequence: [],

    cpuSequence: [],

    currentLevel: 1,

    highestLevel: 0,

    randomNumber: 0,

    isGameRunning: true,

    match: true,

    audioButtons: 
    [
     new Audio(`./Button-Sounds/yellow.mp3`),
     new Audio(`./Button-Sounds/red.mp3`),
     new Audio(`./Button-Sounds/blue.mp3`),
     new Audio(`./Button-Sounds/green.mp3`),
    ],


    // Plays color in sequence on cpu's turn
    playSequence: function(arr) {

        counter = 0;
        
        const flash = (index) => {
            if (index === arr.length) {

                return;
            } else {
                const buttonNumber = arr[index]
                $(`#` + arr[index]).addClass('flash-button')
                this.audioButtons[buttonNumber].play()
                

                setTimeout(() => {

                    $(`#` + arr[index]).removeClass('flash-button')
                    setTimeout(() => {
                        flash(index + 1);
                    }, 250)
                }, 500)
            }
        }
        flash(counter);
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
        this.player1Sequence = [];

        // add one to sequence
        this.randomNumber = (Math.floor(Math.random() * 3) + 1);
        this.cpuSequence.push(this.randomNumber);
        this.playSequence(this.cpuSequence);
    },



    // Pushes number to the player's array, shows color on corresponding button, and compares arrays.
    pushButton: function(num) {

        // Pushes number to player array
        this.player1Sequence.push(num);

        // Flashes Button based on color press
        $(`#` + num).addClass('flash-button')  
        this.audioButtons[num].play()

        this.compareSequence();
    },

    // Removes color on corresponding button
    releaseButton: function(num) {
        $(`#` + num).removeClass('flash-button')
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
            if (this.player1Sequence.length === this.cpuSequence.length) {
                setTimeout(() => {
                    this.nextLevel();
                }, 750)
            }
        }

        // Else the game is over and the gameOver function runs.    
        else {
            this.gameOver();
        }
    },

    // This functions runs when the player fails to follow the sequence
    gameOver: function() {
        this.showModal(`gameOverModal`);
        this.resetGame();
        $(`.start-game-button`).text(`Try Again`);
    },

    // This functions when the player beats level 20
    playerWins: function() {
        this.showModal(`winModal`);
        this.resetGame();
    },

    // Resets The Game
    resetGame: function() {

        // Clears all colors on buttons on reset
        setTimeout(() => {
	        for (let i = 0; i < $(`.flash-button`).length; i++) {
	            $(`.flash-button`).removeClass(`flash-button`);
	        }
        }, 250)
        

        // The Following Resets All Game Variables and Arrays
        this.currentLevel = 0;
        $(".current-level").text(`${this.currentLevel}`);
        this.cpuSequence = [];
        this.player1Sequence = [];
        this.match = true;
        this.isGameRunning = false;

    },
    // Shows modal if player win/lose
    showModal: function(modal) {
        $(`#` + modal).css(`display`, `block`)

    },
    // Removes modal when player clicks on "x" to close modal
    removeModal: function() {
        $(`#gameOverModal`).css(`display`, `none`)
        $(`#winModal`).css(`display`, `none`)
    }

} // End of Game Object


// Start Game button
$(`.start-game-button`).on('click', () => {
    game.nextLevel();
})

// Color Buttons
$(`.button`).on(`mousedown`, (e) => {
	const numberThing = parseInt($(e.target).attr(`id`));
	game.pushButton(numberThing);
})

$(`.button`).on(`mouseup`, (e) => {
	const numberThing = parseInt($(e.target).attr(`id`));
	game.releaseButton(numberThing);
})

// Closes the Modal
$(`.closeModal`).on(`click`, () => {
    game.removeModal();
})