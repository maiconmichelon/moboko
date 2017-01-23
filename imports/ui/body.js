import { Template } from 'meteor/templating';

import { Banheiros } from '../api/banheiros.js';
 
import './body.html';
 
Template.body.helpers({
  banheiros() {
    return Banheiros.find({});
  },
});