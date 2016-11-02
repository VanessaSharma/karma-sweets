import DS from 'ember-data';

export default DS.Model.extend({
  customer: DS.attr(),
  rating: DS.attr(),
  content: DS.attr()
});
