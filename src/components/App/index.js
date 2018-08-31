import React from "react";
import { Provider } from "react-redux";

import "./index.css";
import configStore from "../../store";
import ExampleContainer from "../../containers/ExampleContainer";

const store = configStore();

const App = () => (
  <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Welcome to Authors' Haven</h1>
        <ExampleContainer />
      </header>
    </div>
  </Provider>
);

export default App;
