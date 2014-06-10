App.IndexView = Ember.View.extend({

    didInsertElement: function() {
        this.$().find( '.puzzle-input' ).focus();
    }
});