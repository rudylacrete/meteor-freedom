import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

import './menuItem.html';

Template.menuItem.events({
  'click .channel'() {
    Session.set('selectedChannel', this.channel.name);
  }
});

Template.menuItem.helpers({
  isActive() {
    return this.channel.name == Session.get('selectedChannel');
  }
})