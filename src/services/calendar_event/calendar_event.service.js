// Initializes the `calendar_event` service on path `/calendar-event`
const createService = require('feathers-nedb');
const createModel = require('../../models/calendar_event.model');
const hooks = require('./calendar_event.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/calendar-event', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('calendar-event');

  service.hooks(hooks);
};
