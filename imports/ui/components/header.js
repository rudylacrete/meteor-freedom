import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

import './header.html';

Template.header.helpers({
  channelName() {
    return Session.get('selectedChannel');
  }
})