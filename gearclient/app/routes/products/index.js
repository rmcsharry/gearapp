import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.findAll('product');
    },

    // need to do this until routeable components are available
    setupController(controller) {
        this._super(...arguments);
        controller.set('productIndexRoute', this);
    },
    
    actions: {
        deleteProduct(product) {
            product.destroyRecord();
        }
    }
});
