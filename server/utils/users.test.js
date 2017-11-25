const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Mike',
      room: 'Node Course'
    }, {
      id: '2',
      name: 'Gen',
      room: 'React Course'
    }, {
      id: '31',
      name: 'Eric',
      room: 'Node Course'
    }];
  });

  it('should add a new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Xianchu',
      room: 'Doctor'
    };
    var resUser = users.addUser(user.id, user.name, user.room);
    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    var id = '1';
    var user = users.removeUser(id);

    expect(users.users).toEqual([{
      id: '2',
      name: 'Gen',
      room: 'React Course'
    }, {
      id: '31',
      name: 'Eric',
      room: 'Node Course'
    }]);

    expect(user.id).toBe(id);
  });

  it('should not remove user', () => {
    var id = '5';
    var user = users.removeUser(id);

    expect(users.users.length).toBe(3);

    expect(user).toNotExist();
  });

  it('should find user', () => {
    var id = '1';
    var user = users.getUser(id);

    expect(user).toEqual({
      id: '1',
      name: 'Mike',
      room: 'Node Course'
    });
  });

  it('should not find user', () => {
    var id = '5';
    var user = users.getUser(id);

    expect(user).toNotExist();
  });

  it('should return names for node course', () => {
    var userList = users.getUserList('Node Course');

    expect(userList).toEqual(['Mike','Eric']);
  });

  it('should return names for react course', () => {
    var userList = users.getUserList('React Course');

    expect(userList).toEqual(['Gen']);
  });
});
