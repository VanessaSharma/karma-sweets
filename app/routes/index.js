import Ember from 'ember';

var products = [{
  name: "Mint Chocolate Delight Cookies",
  type: "Cookies",
  description: "One dozen delicious and light cookies with chunks of dark chocolate and a touch of mint.",
  shopName: "Annie's Bakery",
  specialDiet: "Gluten Free",
  price: 12,
  image: "http://www.crazyforcrust.com/wp-content/uploads/2014/12/Mint-Chip-Chocolate-Chip-Cookies-5-of-7w.jpg"
}, {
  name: "Taste of Rose Cupcakes",
  type: "Cupcakes",
  description: " One dozen delicate rose water infused cupcakes with strawberry frosting.",
  shopName: "Shelby's Pantry",
  specialDiet: "Vegetarian",
  price: 24,
  image: "http://img15.hostingpics.net/pics/907644cup.jpg"
}, {
  name: "Butter Croissant",
  type: "Pastries",
  description: "Traditional butter croissant",
  shopName: "Bake and Flake",
  specialDiet: "Vegetarian",
  price: 2.50,
  image: "http://www.m5zn.com/newuploads/2015/11/12/jpg//5746789efaf6667.jpg"
}];

export default Ember.Route.extend({
  model() {
    return products;
  }
});
