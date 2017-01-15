import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Session } from 'meteor/session';

import '/imports/startup/common.js';

import "/imports/ui/stylesheets/global.css";

import "/imports/ui/tools/helpers.js";
import "/imports/ui/layouts/main.js";

import "./router.js";

import { GENERAL_CHANNEL_NAME } from '/imports/api/channels/channels.js';

Session.setDefault('selectedChannel', GENERAL_CHANNEL_NAME);
Meteor.subscribe('usernames');
Meteor.subscribe('channels');


Accounts.ui.config({
    passwordSignupFields: 'USERNAME_AND_EMAIL'
});