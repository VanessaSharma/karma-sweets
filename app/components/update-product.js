import Ember from 'ember';

export default Ember.Component.extend({
  updateProductForm: false,
  actions: {
    updateProductForm() {
      this.set('updateProductForm', true);
    },

    update(product) {
      var params = {
        name: this.get('name'),
        type: this.get('type'),
        description: this.get('description'),
        shopName: this.get('shopName'),
        specialDiet: this.get('specialDiet'),
        price: this.get('price'),
        image: this.get('image'),
      };
      this.set('updateProductForm', false);
      this.sendAction('update', product, params);
    }
  }
});
