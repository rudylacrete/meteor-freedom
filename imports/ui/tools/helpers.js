import { Template } from 'meteor/templating';
import moment from 'moment';

Template.registerHelper('formatDate', (date) => {
  return moment(date).fromNow();
});