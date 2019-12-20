//@ts-nocheck
import { Action } from "redux";
export default (
  state: String[] = ["Breakfast", "Lunch", "Dinner"],
  action: Action
): number => {
  switch (action.type) {
    case "UPDATE_MEAL_NAMES":
      return action.payload;
    default:
      return state;
  }
};
