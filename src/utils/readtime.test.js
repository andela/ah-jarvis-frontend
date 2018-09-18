import readTime from './readtime';
import editorstate from './editorstate';

describe('ReadTime ', () => {
  it('Should return a value. ', () => {
    const value = readTime(editorstate);
    expect(value).toBe(0);
  });
});
