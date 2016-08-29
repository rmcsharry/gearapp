import Ember from 'ember';

export default Ember.Component.extend({
    //objectToDelete: null,
    
    actions: {
        submitConfirm() {
            // trigger action on calling parent
            this.get('onConfirm') (this.get('objectToDelete'));
        },
    },

    // checkIsItemDirty() {
    //     if (this.get('argument').get('isValid')) {
    //         alert ('valid');
    //     }
    // }
});
