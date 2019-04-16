const todos = require('./todos/todos.service.js');
const notes = require('./notes/notes.service.js');
const lists = require('./lists/lists.service.js');
const weeklySpread = require('./weekly_spread/weekly_spread.service.js');
const calendarEvent = require('./calendar_event/calendar_event.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(todos);
  app.configure(notes);
  app.configure(lists);
  app.configure(weeklySpread);
  app.configure(calendarEvent);
};
