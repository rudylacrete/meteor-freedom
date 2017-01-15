import { Meteor } from 'meteor/meteor';
import { LADILAFE_CHANNEL_NAME, GENERAL_CHANNEL_NAME, Channels } from '/imports/api/channels/channels.js';


Meteor.startup(() => {
  const generalChannel = Channels.findOne({name: GENERAL_CHANNEL_NAME});
  if(!generalChannel) {
    Channels.insert({name: GENERAL_CHANNEL_NAME});
  }
  const ladilafeChannel = Channels.findOne({name: LADILAFE_CHANNEL_NAME});
  if(!ladilafeChannel) {
    Channels.insert({name: LADILAFE_CHANNEL_NAME});
  }
});