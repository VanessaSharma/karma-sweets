import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  type: DS.attr(),
  description: DS.attr(),
  shopName: DS.attr(),
  specialDiet: DS.attr(),
  price: DS.attr(),
  image: DS.attr(),
  reviews: DS.hasMany('review', {async: true})
});
