import { Meteor } from 'meteor/meteor';
import { GENERAL_CHANNEL_NAME, Channels } from '/imports/api/channels/channels.js';


Meteor.startup(() => {
  let generalChannel = Channels.findOne({name: GENERAL_CHANNEL_NAME});
  if(!generalChannel) {
    Channels.insert({name: GENERAL_CHANNEL_NAME});
  }
});