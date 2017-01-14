import { Template } from 'meteor/templating';
import { Messages } from '/imports/api/messages/messages.js';

import './footer.html';

Template.footer.events({
  'keydown input'(event, tpl) {
    if(event.keyCode == 13){
      let msg = event.currentTarget.value;
      tpl.$(event.currentTarget).val("");
      console.log("Saisie: " + msg);
      let msgs = Session.get('messages') || [];
      Messages.insert({username: "Rudy", createdAt:"1:13 AM", message: msg});
    }
  }
});