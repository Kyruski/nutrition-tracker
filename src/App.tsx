//@ts-nocheck
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import Table from "./components/Table";
import { IFood } from "..";
import * as singleDay from "../singleDay.json";
import Date from "./containers/Date";
import DietLog from "./containers/DietLog";

const { useState } = React;

function App(): JSX.Element {
  const [foodsList, changeFoodsList]: [[IFood, Number][][], any] = useState(
    singleDay.meals
  );
  const [date, changeDate]: [String, any] = useState(singleDay.date);
  const [mealNames, changeMealNames]: [String[], any] = useState(
    singleDay.mealNames
  );
  return (
    <Provider store={store}>
      <Date date={date} />
      <DietLog foodsList={foodsList} mealNames={mealNames} />
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
