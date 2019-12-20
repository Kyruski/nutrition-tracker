import { combineReducers } from "redux";
import date from "./date";
import mealNames from "./mealNames";
import meals from "./meals";
import allFoods from "./allFoods";

export default combineReducers({
  date,
  mealNames,
  meals,
  allFoods
});
