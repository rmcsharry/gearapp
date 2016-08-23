import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('categories', function() {
    this.route('new');
    this.route('edit', { path: '/:category_id/edit'});
  });
  this.route('category', { path: 'categories/:category_id'} );

  this.route('manufacturers');

  this.route('products', function() {
    this.route('new');
    this.route('edit', { path: '/:product_id/edit'});
  });

  this.route('productAssets');
});

export default Router;
