import { Template } from 'meteor/templating';
import { Messages } from '/imports/api/messages/messages.js';

import './message.html';
import './messages.html';

Template.messages.helpers({
  messages() {
    return Messages.find();
  }
});