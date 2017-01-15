import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { Messages } from '/imports/api/messages/messages.js';

import './message.html';
import './messages.html';

Template.messages.onCreated(function() {
  this.autorun(() => {
    this.subscribe('messages', Session.get('selectedChannel'));
  });
});

Template.messages.helpers({
  messages() {
    return Messages.find();
  }
});