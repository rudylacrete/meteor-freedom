import { FlowRouter } from 'meteor/kadira:flow-router';
import { Session } from 'meteor/session';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { GENERAL_CHANNEL_NAME } from '/imports/api/channels/channels.js';

BlazeLayout.setRoot('body');

FlowRouter.route('/', {
  action() {
    FlowRouter.go(`/channel/${GENERAL_CHANNEL_NAME}`);
  }
});

FlowRouter.route('/channel/:name', {
  action(params, queryParams) {
    Session.set('selectedChannel', params.name);
    BlazeLayout.render("mainLayout", {main: "messages"});
  }
});