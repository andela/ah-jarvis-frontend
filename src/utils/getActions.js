const findAction = (store, type) => store.getActions().find(action => action.type === type);

const getAction = (store, type) => {
  const action = findAction(store, type);
  if (action) return Promise.resolve(action);

  return new Promise((resolve) => {
    store.subscribe(() => {
      const actions = findAction(store, type);
      if (actions) resolve(actions);
    });
  });
};

export default getAction;
