import { Template } from 'meteor/templating';
import { Messages } from '/imports/api/messages/messages.js';

import './footer.html';

Template.footer.events({
  'keydown input'(event, tpl) {
    if(event.keyCode == 13) {
      let msg = event.currentTarget.value;
      let user = Meteor.user();
      let date = new Date();
      tpl.$(event.currentTarget).val("");
      if(!user)
        return alert("You have to be connected to post messages");
      Messages.insert({username: user.username, createdAt:date, message: msg});
    }
  }
});