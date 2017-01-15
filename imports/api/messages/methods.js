import { Meteor } from 'meteor/meteor';
import { Messages } from './messages.js';

Meteor.methods({
  addMessage(message, channel) {
    const userId = this.userId;
    if(!this.userId)
      throw new Meteor.Error('addMessage.unauthorized', 'Method can\'t be called by anonymous user');
    return Messages.insert({userId, message, createdAt: new Date(), channel});
  }
});