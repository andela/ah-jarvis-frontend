import capitalize from './capitalize';
import getCurrentUser from './auth';

describe('Utils tests', () => {
  it('should capitalize first character of every word', () => {
    expect(capitalize('hello world')).toBe('Hello World');
    expect(capitalize('test')).toBe('Test');
  });

  it('should return user from the localStorage', () => {
    expect(getCurrentUser()).toBe(null);
  });
});
