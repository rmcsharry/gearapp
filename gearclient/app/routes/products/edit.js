import Ember from 'ember';

export default Ember.Route.extend({

    model: function(params) {
        return Ember.RSVP.hash({
            product: this.store.findRecord('product', params.product_id),
            categories: this.store.findAll('category'),
            manufacturers: this.store.findAll('manufacturer')            
        });
    },    

    actions: {

        saveProduct(newProduct) {
            newProduct.save().then(() => this.transitionTo('products'));
        },

        willTransition(transition) {

            let model = this.controller.get('model');

            if (model.product.get('hasDirtyAttributes')) {
                let confirmation = confirm('Changes not saved. Abandon the mod?');

                if (confirmation) {
                    model.rollbackAttributes();
                } else {
                    transition.abort();
                }
            }
        }
    }
});
