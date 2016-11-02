import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(product) {
      if(confirm('Are you sure want to delete this product?🍰')) {
        this.sendAction('destroyProduct', product);
      }
    }
  }
});
