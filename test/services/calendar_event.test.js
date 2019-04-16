const app = require('../../src/app');

describe('\'calendar_event\' service', () => {
  it('registered the service', () => {
    const service = app.service('calendar-event');
    expect(service).toBeTruthy();
  });
});
