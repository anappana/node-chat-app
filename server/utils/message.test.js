const expect = require('expect');

const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'Admin', text = 'Welcome';
    var message = generateMessage(from, text);
    expect(message).toInclude({from,text});
    expect(message.createdAt).toBeA('number');
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Admin';
    var latitude = 1, longitude = 2;
    var message = generateLocationMessage(from, latitude, longitude);
    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({
      from,
      url: `https://www.google.com/maps?q=${latitude},${longitude}`
    });
  });
});
