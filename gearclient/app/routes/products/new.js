import Ember from 'ember';

export default Ember.Route.extend({
    
    model: function() {
        return Ember.RSVP.hash({
            product: this.store.createRecord('product'),
            categories: this.store.findAll('category'),
            manufacturers: this.store.findAll('manufacturer')
        });
    },

    setupController: function (controller, model) {
        this._super(controller, model);

        controller.set('formTitle', 'Add a new piece of gear');
        controller.set('saveLabel', 'CREATE');
    },

    renderTemplate() {
        this.render('products/product-page');
    },
 
    actions: {

        saveProduct(newProduct) {
            if (newProduct.get('isValid')) {
                newProduct.save().then(() => this.transitionTo('products'));
            }
            else {
                alert("Not valid - please provide a name and manufacturer.");
            }
        },

        willTransition() {
            // rollback will remove the record from the store
            this.controller.get('model.product').rollbackAttributes();
        }
    }
});
