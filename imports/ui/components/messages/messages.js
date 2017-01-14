import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

import './message.html';
import './messages.html';

Template.messages.helpers({
  messages() {
    return Session.get('messages');
  }
});