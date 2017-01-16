import { Meteor } from 'meteor/meteor';
import { Messages } from './messages.js';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const addMessage = new ValidatedMethod({
  name: 'messages.add',
  validate: new SimpleSchema({
    message: {type: String},
    channel: {type: String}
  }).validator(),
  run({message, channel}) {
    const userId = this.userId;
    if(!userId)
      throw new Meteor.Error('addMessage.unauthorized', 'Method can\'t be called by anonymous user');
    return Messages.insert({userId, message, channel});
  }
});