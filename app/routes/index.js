import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return  Ember.RSVP.hash({
      products: this.store.findAll('product'),
      reviews: this.store.findAll('review')
    });
  },
  actions: {
    saveProduct3(params) {
      var newProduct = this.store.createRecord('product', params);
      newProduct.save();
      this.transitionTo('index');
  },
  saveReview(params) {
    var newReview = this.store.createRecord('review', params);
    newReview.save();
    this.transitionTo('index');
  },
  update(product, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          product.set(key,params[key]);
    }
  });
  product.save();
  this.transitionTo('index');
},
    destroyProduct(product) {
      product.destroyRecord();
      this.transitionTo('index');
    }
  }
});
  
