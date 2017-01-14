import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import "/imports/ui/stylesheets/global.css";

import "/imports/ui/tools/helpers.js";
import "/imports/ui/layouts/main.js";

Meteor.subscribe('messages');

Accounts.ui.config({
    passwordSignupFields: 'USERNAME_AND_EMAIL'
});