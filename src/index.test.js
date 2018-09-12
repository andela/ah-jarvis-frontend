import configStore from './store';

describe('Store', () => {
  it('should return initalState', () => {
    const state = configStore().getState();
    expect(state.createArticle.errors).toBe(null);
  });
});
