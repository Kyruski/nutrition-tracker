//@ts-nocheck
import { IFood, IUpdateMeals } from "../../index";
import * as monthLog from "../../db.json";

export default (
  //@ts-ignore
  state: [IFood, number][][] = monthLog["2019-12-01"].meals, //normally I wouldn't have it hard coded to use a json file like this,
  action: IUpdateMeals //as this would require use of Redux Sagas and a backend server.
): number => {
  let newState: [IFood, number][][];
  switch (action.type) {
    case "UPDATE_MEALS":
      return monthLog[action.date].meals;
    case "REMOVE_FOOD":
      //THIS DOES NOT REMOVE FROM THE DATABASE. This just changes it on your render, but when you move to the next day and back
      //it will be in it's original state since grabbing new days grabs from db.json
      newState = [...state];
      for (let i = 0; i < state.length; i++) {
        for (let j = 0; j < state[i].length; j++) {
          if (JSON.stringify(state[i][j]) === JSON.stringify(action.food)) {
            newState[i].splice(j, 1);
          }
        }
      }
      return newState;
    case "ADD_FOOD":
      newState = [...state];
      newState[action.mealIdx].push([action.food, action.servings]);
      return newState;
    default:
      return state;
  }
};
