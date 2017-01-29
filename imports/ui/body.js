import { Template } from 'meteor/templating';

import { Banheiros } from '../api/banheiros.js';
 
import './body.html';
 
Template.body.helpers({
  banheiros() {
    return Banheiros.find({}, { sort: { ordem: 1 } });
  },
});

Template.body.events({
  'click .formButtonfront'(event) {

    const target = event.target;

    var estado = target.value;
    if (++estado > 2)
    	estado = 0;

    Banheiros.update(this._id, {
      $set: { status: estado},
    });
  },
});