import Ember from 'ember';

export default Ember.Route.extend({
    // this is for testing, normally we get the data from the store
    model: function() {
        return this.get('modelTestData');
    },

    setupController: function(controller, model) {
        this._super(controller, model);
        controller.set('mymodel', model);
    },

    modelTestData: [{
        name: 'gear',
        colorByPoint: true,
        data: [
            {y: 10, name: 'Test1'},
            {y: 12, name: 'Test2'},
            {y: 40, name: 'Test3'}
            ]
    }],
 
});
