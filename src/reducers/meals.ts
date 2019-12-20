//@ts-nocheck
import { IFood, IUpdateMeals } from "../../index";
import * as monthLog from "../../db.json";

export default (
  //@ts-ignore
  state: [IFood, Number][][] = monthLog["2019-12-01"].meals, //normally I wouldn't have it hard coded to use a json file like this,
  action: IUpdateMeals //as this would require use of Redux Sagas and a backend server.
): number => {
  switch (action.type) {
    case "UPDATE_MEALS":
      return monthLog[action.date].meals;
    default:
      return state;
  }
};
