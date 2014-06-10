App.LetterController = Ember.Controller.extend({

    letterClass: function() {

        var val = this.get( 'content' );

        console.log( 'LETTER [', val, ']' );
        if ( val === ' ' ) {
            return 'letter-space';
        } else {
            return 'letter-' + val.toLowerCase();
        }
    }.property( 'content' ),

    isSpace: function() {
        return this.get( 'content' ) === ' ';
    }.property( 'content' )
});