import { Action } from "redux";
import { IFood, IUpdateMeals } from "../../index";
import * as monthLog from "../../db.json";

export default (
  //@ts-ignore
  state: [IFood, Number][][] = monthLog["2019-12-01"].meals,
  action: IUpdateMeals
): number => {
  switch (action.type) {
    case "UPDATE_MEALS":
      return monthLog[action.date].meals;
    default:
      return state;
  }
};
