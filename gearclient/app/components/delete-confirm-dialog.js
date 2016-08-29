import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        submitConfirm() {
            // trigger action on calling parent
            this.get('onConfirm') (this.get('objectToDelete'));
        },
    },
});
