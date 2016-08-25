import Ember from 'ember';

export default Ember.Route.extend({

    model: function(params) {
        return Ember.RSVP.hash({
            product: this.store.findRecord('product', params.product_id),
            categories: this.store.findAll('category'),
            manufacturers: this.store.findAll('manufacturer')            
        });
    },

    setupController: function (controller, model) {
        this._super(controller, model);

        controller.set('formTitle', 'Mod this piece of gear');
        controller.set('saveLabel', 'Mod this gear');
    },

    renderTemplate() {
        this.render('products/product-page');
    },    

    actions: {

        saveProduct(newProduct) {
            newProduct.save().then(() => this.transitionTo('products'));
        },

        willTransition(transition) {

            let product = this.controller.get('model.product');

            if (product.get('hasDirtyAttributes')) {
                let confirmation = confirm('Changes not saved. Abandon your operation?');

                if (confirmation) {
                    product.rollbackAttributes();
                } else {
                    transition.abort();
                }
            }
        }
    }
});
