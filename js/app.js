console.log(`Simon Says Game`);


const game = { // Start of Game Object

    player1Sequence: [],

    cpuSequence: [],

    currentLevel: 0,

    highestLevel: 0,

    randomNumber: 0,

    generateRanNum: function() {
        this.randomNumber = (Math.floor(Math.random() * 4) + 1);

    },

    playSequence: function() {
    	this.generateRanNum();
        this.cpuSequence.push(this.randomNumber);
        this.flashButton(this.cpuSequence);
        this.nextLevel();
        this.player1Sequence = [];
    },

    // Flashes the button on screen.
    flashButton: function(n) {
        if (n === 1) {
            $(`.yellow`).addClass('flash-button')
            setTimeout(() => {
                $(`.yellow`).removeClass('flash-button')
            }, 175)
        } else if (n === 2) {
            $(`.red`).addClass('flash-button')
            setTimeout(() => {
                $(`.red`).removeClass('flash-button')
            }, 175)
        } else if (n === 3) {
            $(`.green`).addClass('flash-button')
            setTimeout(() => {
                $(`.green`).removeClass('flash-button')
            }, 175)
        } else if (n === 4) {
            $(`.blue`).addClass('flash-button')
            setTimeout(() => {
                $(`.blue`).removeClass('flash-button')
            }, 175)
        }

    },

    showPrevMoves: function() {
    	// Somehow show the previous moves the cpu played so the player1 can follow the sequence
    },


    // If player succeeds in following the sequence, this function will change the current level and if applicable the highest level on the DOM
    nextLevel: function() {
        this.currentLevel++;
        $(".current-level").text(`Current Level: ${this.currentLevel}`);

        if (this.currentLevel >= this.highestLevel) {
            this.highestLevel = this.currentLevel;
            $(".highest-level").text(`Highest Level Achieved: ${this.highestLevel}`);
        }
    },

    // Checks sequences beteween cpuSequence and player1Sequence
    compareSequence: function(Arr) {
        if (this.player1Sequence[Arr] === this.cpuSequence[Arr]) {

            if (this.cpuSequence.length === this.player1Sequence.length) {
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
        this.cpuSequence = [];
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
    game.player1Sequence.push(1);
    game.flashButton(1);
    game.compareSequence(game.player1Sequence.length);
})

$(`.red`).on(`click`, () => {
    console.log('The red button is working!');
    game.player1Sequence.push(2);
    game.flashButton(2);
    game.compareSequence(game.player1Sequence.length);
})

$(`.green`).on(`click`, () => {
    console.log('The green button is working!');
    game.player1Sequence.push(3);
    game.flashButton(3);
    game.compareSequence(game.player1Sequence.length)
})

$(`.blue`).on(`click`, () => {
    console.log(`The blue button is working!`);
    game.player1Sequence.push(4);
    game.flashButton(4);
    game.compareSequence(game.player1Sequence.length)
})