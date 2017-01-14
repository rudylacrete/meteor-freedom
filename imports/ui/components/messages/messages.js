import { Template } from 'meteor/templating';

import './message.html';
import './messages.html';

Template.messages.helpers({
  messages() {
    return [
      {
        username: "Rudy",
        createdAt: "1:13 AM",
        message: "Un simple test"
      },
      {
        username: "DSI",
        createdAt: "1:15 AM",
        message: "Uool ça fonctionne"
      }
    ];
  }
});