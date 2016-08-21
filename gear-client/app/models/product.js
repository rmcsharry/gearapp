import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  weight: DS.attr('number'),
  weightType: DS.attr('string'),
  is_shared: DS.attr('boolean'),
  shared_capacity: DS.attr('number'),
  productAssets: DS.hasMany('productAsset')
});
