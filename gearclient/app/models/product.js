import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  weightValue: DS.attr('number'),
  weightUnit: DS.attr('string'),
  isShared: DS.attr('boolean'),
  sharedCapacity: DS.attr('number'),
  productAssets: DS.hasMany('productAsset'),
  category: DS.belongsTo('category', { async: true }),
  manufacturer: DS.belongsTo('manufacturer', { async: true }),
  isShareable: Ember.computed.equal('isShared', true),
  isValid: Ember.computed.and('name', 'category.id')
});
