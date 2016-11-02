import Ember from 'ember';

export default Ember.Component.extend({
  addNewReview: false,
  actions: {
    reviewFormShow() {
      this.set('addNewReview', true);
    },
    saveReview() {
     var params = {
       customer: this.get('customer'),
       rating: this.get('rating'),
       content: this.get('content'),
       product: this.get('product')
     };
     this.set('addNewReview', false);
     this.sendAction('saveReview', params);
   }
  }
});
