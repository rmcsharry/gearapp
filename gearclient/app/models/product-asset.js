import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  url: DS.attr('string'),
  mimeType: DS.attr('string'),
  product: DS.belongsTo('product', { async: true }),
});
