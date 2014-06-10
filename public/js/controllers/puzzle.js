App.PuzzleController = Ember.Controller.extend({
    content: '',

    wordContent: function() {
        var contentBlocks = this.get( 'content' ).split( ' ' );
        var mappedValues = contentBlocks.map( function( item, index, enumeration ) {
            return item.split( '' );
        });

        return mappedValues;
    }.property( 'content', 'content.@each' )
});