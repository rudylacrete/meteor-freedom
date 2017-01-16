import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Channels = new Meteor.Collection('channels');
export const GENERAL_CHANNEL_NAME = "general";
export const LADILAFE_CHANNEL_NAME = "ladi lafé";

Channels.schema = new SimpleSchema({
  _id: { type: String, regEx: SimpleSchema.RegEx.Id, optional: true},
  name: { type: String }
});

Channels.attachSchema(Channels.schema);