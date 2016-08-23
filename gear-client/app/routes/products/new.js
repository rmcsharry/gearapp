import Ember from 'ember';

export default Ember.Route.extend({
    categories: ["one","two"],
    model() {
        return this.store.createRecord('product');
    },
 
    actions: {

        saveProduct(newProduct) {
            newProduct.save().then(() => this.transitionTo('products'));
        },

        willTransition() {
            // rollback will remove the record from the store
            this.controller.get('model').rollbackAttributes();
        },

        chooseCategory() {
            alert('choose');
        }
    }
});
