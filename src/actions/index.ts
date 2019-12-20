import { Action } from "redux";
import { IUpdateMeals } from "../../index";

export const nextDay: Function = (): Action => {
  return { type: "NEXT_DAY" };
};
export const prevDay: Function = (): Action => {
  return { type: "PREV_DAY" };
};
export const updateMealNames: Function = (): Action => {
  return { type: "UPDATE_MEAL_NAMES" };
};
export const updateMeals: Function = (date): IUpdateMeals => {
  return { type: "UPDATE_MEALS", date };
};
export const removeFood: Function = (food): IUpdateMeals => {
  return { type: "REMOVE_FOOD", food };
};
export const addFood: Function = (food, mealIdx, servings): IUpdateMeals => {
  return { type: "ADD_FOOD", food, mealIdx, servings };
};
