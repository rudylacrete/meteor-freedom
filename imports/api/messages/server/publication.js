import { Meteor } from 'meteor/meteor';
import { Messages } from '../messages.js';

Meteor.publish('messages', function(channelName) {
  return Messages.find({channel: channelName});
})