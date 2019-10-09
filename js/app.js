console.log(`Simon Says Game`);


const game = { // Start of Game Object

    player1Sequence: [],

    cpuSequence: [],

    currentLevel: 1,

    highestLevel: 0,

    randomNumber: 0,

    isGameRunning: true,

    match: true,



    // Plays color in sequence on cpu's turn
    playSequence: function(arr) {

        counter = 0;
        flash(counter);

        function flash(index) {
            if (index === arr.length) {

                return;
            } else {
                $(`#` + arr[index]).addClass('flash-button')

                setTimeout(() => {

                    $(`#` + arr[index]).removeClass('flash-button')
                    setTimeout(() => {
                        flash(index + 1);
                    }, 250)
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
        this.player1Sequence = [];

        // add one to sequence
        this.randomNumber = (Math.floor(Math.random() * 4) + 1);
        this.cpuSequence.push(this.randomNumber);
        this.playSequence(this.cpuSequence);
    },



    // Pushes number to the player's array, shows color on corresponding button, and compares arrays.
    pushButton: function(num) {

        // Pushes number to player array
        this.player1Sequence.push(num);

        // Flashes Button based on color press
        $(`#` + num).addClass('flash-button')

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

// Yellow Button
$(`#1`).on(`mousedown`, () => {
    game.pushButton(1);
})
$(`#1`).on(`mouseup`, () => {
    game.releaseButton(1);
})


// Red Button
$(`#2`).on(`mousedown`, () => {
    game.pushButton(2)
})

$(`#2`).on(`mouseup`, () => {
    game.releaseButton(2);
})


// Blue Button
$(`#3`).on(`mousedown`, () => {
    game.pushButton(3)
})
$(`#3`).on(`mouseup`, () => {

    game.releaseButton(3);
})


// Green Button
$(`#4`).on(`mousedown`, () => {
    game.pushButton(4)
})
$(`#4`).on(`mouseup`, () => {
    game.releaseButton(4);
})


// Closes the Modal
$(`.closeModal`).on(`click`, () => {
    game.removeModal();
})