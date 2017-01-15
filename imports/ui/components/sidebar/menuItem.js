import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

import './menuItem.html';

Template.menuItem.helpers({
  isActive() {
    return this.channel.name == Session.get('selectedChannel');
  },
  menuLink() {
    return '/channel/' + encodeURIComponent(this.channel.name);
  }
})