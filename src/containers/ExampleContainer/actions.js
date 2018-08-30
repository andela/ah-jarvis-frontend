// Actions -> informs reducers the state that should be uodated in the store
import { GREET } from './constants';

export const sayHi = () => ({
  type: GREET,
});
