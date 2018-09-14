import readTime from './readtime';
import testData from './testData';

describe('ReadTime ', () => {
  it('Should return a value. ', () => {
    const value = readTime(testData.testBlock.body);
    expect(value).toBe(1);
  });
});
