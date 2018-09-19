import validate from './validateInput';

describe('Validate Input', () => {
  it('should return null if username is valid', () => {
    const value = 'user';
    expect(validate('username', value)).toEqual('');
  });

  it('should return null if email is valid', () => {
    const value = 'user@mail.com';
    expect(validate('email', value)).toEqual('');
  });

  it('should return null if password is valid', () => {
    const value = 'User123!';
    expect(validate('password', value)).toEqual('');
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

  it('should return message if bio less than 6 words', () => {
    expect(validate('bio', '')).toEqual('Bio should be at least 6 words');
  });

  it('should return message if bio more than 150 words', () => {
    const value = 'Playing a starring role is a glorious onslaught of Korean beauty products, with the K-Beauty market now valued at over $13 billion, and $7.2 billion of which is from facial skin care alone. Serums, acids, oils, cushion compacts, CC creams, BB creams, masks that bubble on your face, masks to sleep in, volcanic clay, and snail slime are seeing improbably explosive popularity, and they’ve done so with accessible pricing and cute packaging that has grown women reaching for panda face masks.What people don’t see is the amount of government support and PR that drives interest. Jude Chao, director of marketing for BeautyTap and somewhat of an oracle on K-Beauty (who also happens to have excellent skin) believes in empowering the masses with education on K-Beauty ingredients. (Her blog, Fifty Shades of Snail, is a solid starting point if you’re overwhelmed by the 12,000 active brands on the market, the proliferation of which Chao believes is no coincidence.';
    expect(validate('bio', value)).toEqual('Bio should not exceed 150 words');
  });

  it('should return message if confirm password does not match password', () => {
    expect(validate('confirmPass', { password: 'Pass123!', confirmPass: 'Pass' })).toEqual(
      'Input should match the password',
    );
  });

  it('should return message if password is missing', () => {
    expect(validate('confirmPass', { password: '', confirmPass: 'Pass' })).toEqual(
      'Password is missing',
    );
  });

  it('should return null by default', () => {
    expect(validate('', '')).toEqual('');
  });
});
