import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';
import { addMessage } from '/imports/api/messages/methods.js';

import './footer.html';

Template.footer.events({
  'keydown input'(event, tpl) {
    if(event.keyCode == 13) {
      let msg = event.currentTarget.value;
      tpl.$(event.currentTarget).val("");
      addMessage.call({message: msg, channel: Session.get('selectedChannel')}, function(error) {
        if(error) alert(error.message);
      });
    }
  }
});