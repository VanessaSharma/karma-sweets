import Ember from 'ember';

export default Ember.Component.extend({
  updateReviewForm: false,
  actions: {
    updateReviewForm() {
      this.set('updateReviewForm', true);
    },
    update(review) {
      var params = {
        customer: this.get('customer'),
        rating: this.get('rating'),
        content: this.get('content')
      };
      this.set('updateReviewForm', false);
      this.sendAction('update', review, params);
    }
  }
});
