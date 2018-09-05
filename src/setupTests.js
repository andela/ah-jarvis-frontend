import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import jestMock from 'jest-fetch-mock';

global.fetch = jestMock;

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = localStorageMock;

configure({ adapter: new Adapter() });
