// Initializes the `weekly_spread` service on path `/weekly-spread`
const createService = require('feathers-nedb');
const createModel = require('../../models/weekly_spread.model');
const hooks = require('./weekly_spread.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/weekly-spread', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('weekly-spread');

  service.hooks(hooks);
};
