import Ember from 'ember';

export default Ember.Component.extend({
  addNewProduct: false,
  actions: {
    productFormShow() {
      this.set('addNewProduct', true);
    },

    saveProduct1() {
      var params = {
        name: this.get('name'),
        type: this.get('type'),
        description: this.get('description'),
        shopName: this.get('shopName'),
        specialDiet: this.get('specialDiet'),
        price: this.get('price'),
        image: this.get('image'),
      };
      this.set('addNewProduct', false);
      this.sendAction('saveProduct2', params);
    }
  }
});
