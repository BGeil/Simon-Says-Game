console.log(`Simon Says Game`);


const game = { // Start of Game Object

    player1Sequence: [],

    cpuSequence: [],

    currentLevel: 0,

    highestLevel: 0,

    randomNumber: 0,

    isGameRunning: true,

    // generates a random number
    generateRanNum: function() {
        this.randomNumber = (Math.floor(Math.random() * 4) + 1);

    },


    // this runs when the start button is clicked
    playSequence: function() {
        this.generateRanNum();

        console.log(`The random number gets generate:`);
        console.log(this.randomNumber);

        this.cpuSequence.push(this.randomNumber);
        console.log(`The random number is getting pushed into the cpu sequence`);
        console.log(this.cpuSequence);

      

        this.flashButton(this.randomNumber); // Hard coded, need to refactor this.

        console.log(`This is the player sequence:`);
        console.log(this.player1Sequence);
       
      
        this.nextLevel();


        
    },



    // Flashes the button on screen.
    flashButton: function(n) {
        if (n === 1) {
            $(`.yellow`).addClass('flash-button')
            setTimeout(() => {
                $(`.yellow`).removeClass('flash-button')
            }, 500)
        } else if (n === 2) {
            $(`.red`).addClass('flash-button')
            setTimeout(() => {
                $(`.red`).removeClass('flash-button')
            }, 500)
        } else if (n === 3) {
            $(`.blue`).addClass('flash-button')
            setTimeout(() => {
                $(`.blue`).removeClass('flash-button')
            }, 500)
        } else if (n === 4) {
            $(`.green`).addClass('flash-button')
            setTimeout(() => {
                $(`.green`).removeClass('flash-button')
            }, 500)
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
            if (this.highestLevel === 20) {
            	this.playerWins();
            }
        }
    },




    // Checks sequences beteween cpu Sequence and player Sequence. If the player is successful, playSequence runs again, else the gameOver function runs.
    compareSequence: function(Arr) {

    for (let i = 0; i < this.player1Sequence.length; i++) {

        if (this.player1Sequence[i] === this.cpuSequence[i]) { // kinda working as intended up to level 2, then skips level 3?????

            if (this.cpuSequence.length === this.player1Sequence.length) {
                setTimeout(function() {
                    game.playSequence();
                }, 1000);
            }
        } else {
            this.gameOver();
        }
     }
},

    // This functions runs when the player fails to follow the sequence
    gameOver: function() {
        console.log("You lost! The game is over!");
        this.currentLevel = 0;
        $(".current-level").text(`Current Level: ${this.currentLevel}`);
        this.cpuSequence = [];
        this.player1Sequence = [];
        this.isGameRunning = false;
    },

    playerWins: function() {
    	console.log(`Congratulations! You Win!`);
    	$(".current-level").text(`Current Level: ${this.currentLevel}`);
    	this.currentLevel = 0;
    	this.cpuSequence = [];
        this.player1Sequence = [];
        this.isGameRunning = false;
    }

} // End of Game Object


// Start Game button
$(`.start-game-button`).on('click', () => {
    console.log(`The start button is working`);
    game.playSequence();




})


// Color Buttons ---- Code Is definitely not DRY, but should work.
$(`.yellow`).on(`click`, () => {
    console.log(`The yellow button is working!`);
    game.player1Sequence.push(1);

    console.log(`The player pushed 1 into the player1Sequence array`);
    console.log(game.player1Sequence);

    game.flashButton(1);
    game.compareSequence(game.player1Sequence);
})

$(`.red`).on(`click`, () => {
    console.log('The red button is working!');
    game.player1Sequence.push(2);

    console.log(`The player pushed 2 into  the player1Sequence array`);
    console.log(game.player1Sequence);


    game.flashButton(2);
    game.compareSequence(game.player1Sequence);
})


$(`.blue`).on(`click`, () => {
    console.log(`The blue button is working!`);
    game.player1Sequence.push(3);


    console.log(`The player pushed 3 into  the player1Sequence array`);
    console.log(game.player1Sequence);

    game.flashButton(3);
    game.compareSequence(game.player1Sequence)
})

$(`.green`).on(`click`, () => {
    console.log('The green button is working!');
    game.player1Sequence.push(4);


    console.log(`The player pushed 4 into  the player1Sequence array`);
    console.log(game.player1Sequence);

    game.flashButton(4);
    game.compareSequence(game.player1Sequence)
})