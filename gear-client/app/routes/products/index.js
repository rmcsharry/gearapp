import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.findAll('product');
    },

    actions: {

        deleteProduct(product) {
            let confirmation = confirm(product.get('name').toString() + ' will be vaporized. Are you sure?');

            if (confirmation) {
                product.destroyRecord();
            }
        }
    }
});
