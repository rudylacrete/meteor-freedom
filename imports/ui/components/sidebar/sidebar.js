import { Template } from 'meteor/templating';
import { Channels } from '/imports/api/channels/channels.js';

import './menuItem.html';
import './sidebar.html';

Template.sidebar.helpers({
  channels() {
    return Channels.find();
  }
})