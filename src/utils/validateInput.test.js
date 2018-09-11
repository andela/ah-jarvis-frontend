import validate from './validateInput';

describe('Validate Input', () => {
  it('should return null if username is valid', () => {
    const value = 'user';
    expect(validate('username', value)).toEqual(null);
  });

  it('should return null if email is valid', () => {
    const value = 'user@mail.com';
    expect(validate('email', value)).toEqual(null);
  });

  it('should return null if password is valid', () => {
    const value = 'User123!';
    expect(validate('password', value)).toEqual(null);
  });

  it('should return message if username is invalid', () => {
    expect(validate('username', '')).toEqual('Username should have at least 3 letters');
  });

  it('should return message if email is invalid', () => {
    expect(validate('email', '')).toEqual('Email should have the format user@mail.com');
  });

  it('should return message if password is invalid', () => {
    expect(validate('password', '')).toEqual(
      'Password should contain capital letters, numbers and special characters e.g. @,#,!',
    );
  });

  it('should return null by default', () => {
    expect(validate('', '')).toEqual(null);
  });
});
