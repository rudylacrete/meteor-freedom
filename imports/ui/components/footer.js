import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { GENERAL_CHANNEL_NAME } from '/imports/api/channels/channels.js';

import './footer.html';

Template.footer.events({
  'keydown input'(event, tpl) {
    if(event.keyCode == 13) {
      let msg = event.currentTarget.value;
      tpl.$(event.currentTarget).val("");
      Meteor.call('addMessage', msg, GENERAL_CHANNEL_NAME, function(error) {
        if(error) alert(error.message);
      });
    }
  }
});