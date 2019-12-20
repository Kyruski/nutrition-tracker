//@ts-nocheck
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import Date from "./containers/Date";
import DietLog from "./containers/DietLog";

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Date />
      <DietLog />
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
