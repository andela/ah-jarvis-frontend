import editorState from './editorstate';

describe('Editor state', () => {
  it('should be an object with property type', () => {
    expect(editorState.blocks[0].type).toBe('header-two');
  });
});
