const app = require('../../src/app');

describe('\'weekly_spread\' service', () => {
  it('registered the service', () => {
    const service = app.service('weekly-spread');
    expect(service).toBeTruthy();
  });
});
