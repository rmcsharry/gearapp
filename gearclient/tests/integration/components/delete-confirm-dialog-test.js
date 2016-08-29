import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('delete-confirm-dialog', 'Integration | Component | delete confirm dialog', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{delete-confirm-dialog}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#delete-confirm-dialog}}
      template block text
    {{/delete-confirm-dialog}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
