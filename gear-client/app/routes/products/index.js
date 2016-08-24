import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.findAll('product');
    },

    actions: {

        deleteProduct(product) {
            let msg = null;
            if (product.get('name')) {
                msg = product.get('name').toString();
            }
            else {
                msg = 'It';
            };
            let confirmation = confirm(msg + ' will be vaporized. Are you sure?');
            
            if (confirmation) {
                product.destroyRecord();
            }
        }
    }
});
