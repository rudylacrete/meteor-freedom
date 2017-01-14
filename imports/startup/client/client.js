import { Meteor } from 'meteor/meteor';
import "/imports/ui/stylesheets/global.css";

import "/imports/ui/layouts/main.js";

Meteor.subscribe('messages');