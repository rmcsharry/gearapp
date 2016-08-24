import Ember from 'ember';

export default Ember.Route.extend({
    
    model: function() {
        return Ember.RSVP.hash({
            product: this.store.createRecord('product'),
            categories: this.store.findAll('category'),
            manufacturers: this.store.findAll('manufacturer')
        });
    },
 
    actions: {

        saveProduct(newProduct) {
            newProduct.save().then(() => this.transitionTo('products'));
        },

        willTransition() {
            // rollback will remove the record from the store
            this.controller.get('model.product').rollbackAttributes();
        }
    }
});
