import { Template } from 'meteor/templating';

import './footer.html';

Template.footer.events({
  'keydown input'(event, tpl) {
    if(event.keyCode == 13){
      let msg = event.currentTarget.value;
      tpl.$(event.currentTarget).val("");
      console.log("Saisie: " + msg);
    }
  }
});