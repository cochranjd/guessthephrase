App.IndexController = Ember.Controller.extend({
    needs: [ 'puzzle' ],

    gameIsActive: false,

    guesses: '',
    registeredGuesses: [],

    puzzleValue: '',

    generateNewPuzzle: function() {
        this.set( 'puzzleValue', this.get( 'userInput' ));
        this.set( 'userInput', '' );

        this.set( 'guesses', '' );
        this.set( 'registeredGuesses', [] );
        this.set( 'controllers.puzzle.content', this.get( 'puzzleValue' ));
        this.set( 'gameIsActive', true );

        /* This is nasty, but quick */
        $( '.guessed-letters' ).focus();
    },

    newGuess: function() {
        var guessedLetters = this.get( 'guesses' ).split( '' );

        /* This is a very dirty fix so that people erasing their guess text doesn't break things - I know this leads to alot of duplicate checking */
        this.set( 'registeredGuesses', this.get( 'registeredGuesses' ).concat( guessedLetters ));

        var regGuesses = this.get( 'registeredGuesses' ).toArray();

        for ( var i=0, l=regGuesses.length; i<l; i++ ) {
            var letterClass = '.letter-' + regGuesses[i].toLowerCase();

            $( letterClass ).animate({
                opacity: 0
            }, 500 );
        }
    }.observes( 'guesses' ),

    lettersRemain: function() {
        var regGuesses = this.get( 'registeredGuesses' ).toArray();
        var initialPuzzleValue = this.get( 'puzzleValue' ).toLowerCase();

        var remainingLetters = initialPuzzleValue;

        remainingLetters = remainingLetters.replace(/ /g, '' );

        for ( var i=0, l = regGuesses.length; i<l; i++ ) {
            var re = new RegExp( regGuesses[i].toLowerCase(), 'g' );
            remainingLetters = remainingLetters.replace( re, '' );
        }

        if ( remainingLetters.length === 0 ) {
            /* This shouldn't be here, but I'm doing this quickly */
            $( '.puzzle-input' ).focus();
        }

        return remainingLetters.length !== 0;
    }.property( 'registeredGuesses', 'userInput' ),
});