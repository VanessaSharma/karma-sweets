import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(product) {
      if(confirm('Are you sure you want to delete this product?🍰')) {
        this.sendAction('destroyProduct', product);
      }
    },
    saveReview(params){
    this.sendAction('saveReview', params);
  },
    destroyReview(review) {
      this.sendAction('destroyReview', review);
    },
    update(review, params) {
      this.sendAction('update', review, params);
    }
  }
});
