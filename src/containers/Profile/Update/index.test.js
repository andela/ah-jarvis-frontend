import { shallow } from 'enzyme';
import React from 'react';
import configureStore from 'redux-mock-store';
import ConnectedUpdate from './index';

// describe("<Update />", () => {
//   const initialState = {
//     payload: "",
//     success: false,
//     failure: false,
//     errors: null,
//     isFetching: false
//   };
//   const mockStore = configureStore();
//   let wrapper;
//   let store;
//   beforeEach(() => {
//     // creates the store with any initial state or middleware needed
//     store = mockStore(initialState);
//     wrapper = shallow(<ConnectedUpdate store={store} />);
//   });

//   it("renders Update component successfully", () => {
//     expect(wrapper.length).toEqual(1);
//   });
// });
