import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Messages = new Meteor.Collection('messages');

Messages.schema = new SimpleSchema({
  _id: { type: String, regEx: SimpleSchema.RegEx.Id, optional: true},
  message: { type: String},
  channel: { type: String},
  userId: { type: String, regEx: SimpleSchema.RegEx.Id},
  createdAt: {
    type: Date,
    denyUpdate: true,
    autoValue: function() {
      if (this.isInsert) {
        return new Date();
      } else if (this.isUpsert) {
        return {$setOnInsert: new Date()};
      } else {
        this.unset();  // Prevent user from supplying their own value
      }
    }
  }
});

Messages.attachSchema(Messages.schema);