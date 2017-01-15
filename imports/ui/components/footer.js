import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';

import './footer.html';

Template.footer.events({
  'keydown input'(event, tpl) {
    if(event.keyCode == 13) {
      let msg = event.currentTarget.value;
      tpl.$(event.currentTarget).val("");
      Meteor.call('addMessage', msg, Session.get('selectedChannel'), function(error) {
        if(error) alert(error.message);
      });
    }
  }
});