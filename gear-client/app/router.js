import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('categories', function() {
    this.route('edit');
  });
  this.route('category', {path: 'categories/:category_id'});
  this.route('manufacturers');
  this.route('products', function() {
    this.route('new');
  });
  this.route('productAssets');
});

export default Router;
