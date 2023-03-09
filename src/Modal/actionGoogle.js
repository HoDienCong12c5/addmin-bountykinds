
import {
  dialogflow,
  Image,
} from 'actions-on-google'
import io from 'socket.io-client';

const socket = io();

const app = dialogflow();

app.intent('Default Welcome Intent', (conv) => {
  conv.ask('Hi! How can I help you today?');
});

app.intent('User Message', (conv, { message }) => {
  socket.emit('message', message);
  conv.close('Thanks for your message!');
});

socket.on('message', (data) => {
  app.fulfillment().send(`You said: ${data}`);
});

export default app;
