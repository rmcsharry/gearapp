import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.findAll('category')
            .then( function(categories) {
                let data =[];
                data = categories.map(category => {
                    return {
                        y: category.get('totalGrams'),
                        name: category.get('name')
                        }
                    });
                return [{name: 'gear', colorByPoint: true, data}];
            })
        },   
});