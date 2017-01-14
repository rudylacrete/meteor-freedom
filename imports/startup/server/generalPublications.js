import { Meteor } from 'meteor/meteor';

Meteor.publish('usernames', function() {
  return Meteor.users.find({}, {fields: {username: 1, _id: 1}});
});