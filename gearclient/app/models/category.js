import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  totalGrams: DS.attr('number'),
  products: DS.hasMany('product')
});
