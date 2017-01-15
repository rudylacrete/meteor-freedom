import '/imports/startup/common.js';

import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import "/imports/ui/stylesheets/global.css";

import "/imports/ui/tools/helpers.js";
import "/imports/ui/layouts/main.js";

import { GENERAL_CHANNEL_NAME } from '/imports/api/channels/channels.js';
Meteor.subscribe('messages', GENERAL_CHANNEL_NAME);
Meteor.subscribe('usernames');
Meteor.subscribe('channels');

Accounts.ui.config({
    passwordSignupFields: 'USERNAME_AND_EMAIL'
});