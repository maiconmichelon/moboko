import { Meteor } from 'meteor/meteor';
import '../imports/api/banheiros.js';
import { Banheiros } from '../imports/api/banheiros.js';


 Meteor.startup(function () {
   if (Banheiros.find().count() == 0) {
     Banheiros.insert({ nome: "B1", status: 0, ordem: 1, sexo:"m" });
     Banheiros.insert({ nome: "B2", status: 0, ordem: 2, sexo:"m" });
     Banheiros.insert({ nome: "VIP", status: 0, ordem: 3, sexo:"m" });
     Banheiros.insert({ nome: "FEM", status: 0, ordem: 4, sexo:"f" });
   }
 });
