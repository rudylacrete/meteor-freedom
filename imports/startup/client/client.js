import '/imports/startup/common.js';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import "/imports/ui/stylesheets/global.css";

import "/imports/ui/tools/helpers.js";
import "/imports/ui/layouts/main.js";

Meteor.subscribe('messages');
Meteor.subscribe('usernames');

Accounts.ui.config({
    passwordSignupFields: 'USERNAME_AND_EMAIL'
});