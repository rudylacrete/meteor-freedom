import { Meteor } from 'meteor/meteor';
import { Channels } from '/imports/api/channels/channels.js';

Meteor.publish('channels', () => {
  return Channels.find();
});