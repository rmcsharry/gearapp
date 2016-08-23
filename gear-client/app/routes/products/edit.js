import Ember from 'ember';

export default Ember.Route.extend({

    model(params) {
        return this.store.findRecord('product', params.product_id);
    },

    actions: {

        saveProduct(newProduct) {
            newProduct.save().then(() => this.transitionTo('products'));
        },

        willTransition(transition) {

            let model = this.controller.get('model');

            if (model.get('hasDirtyAttributes')) {
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