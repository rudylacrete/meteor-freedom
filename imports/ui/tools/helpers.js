import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import moment from 'moment';

Template.registerHelper('formatDate', (date) => {
  return moment(date).fromNow();
});

Template.registerHelper('usernameFromId', (id) => {
  const user = Meteor.users.findOne({_id: id});
  if(user)
    return user.username ? user.username : 'Anonyme';
  return 'Anonyme';
});