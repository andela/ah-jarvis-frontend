// Actions -> informs reducers the state that should be uodated in the store
import { GREET } from './constants';

const sayHi = () => ({
  type: GREET,
});

export default sayHi;
