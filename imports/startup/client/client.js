import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Session } from 'meteor/session';
import { Tracker } from 'meteor/tracker';

import '/imports/startup/common.js';

import "/imports/ui/stylesheets/global.css";

import "/imports/ui/tools/helpers.js";
import "/imports/ui/layouts/main.js";

import { GENERAL_CHANNEL_NAME } from '/imports/api/channels/channels.js';

Session.setDefault('selectedChannel', GENERAL_CHANNEL_NAME);
Tracker.autorun(() => {
  Meteor.subscribe('messages', Session.get('selectedChannel'));
});
Meteor.subscribe('usernames');
Meteor.subscribe('channels');


Accounts.ui.config({
    passwordSignupFields: 'USERNAME_AND_EMAIL'
});