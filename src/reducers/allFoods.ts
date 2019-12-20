//@ts-nocheck
import { IFood, IUpdateMeals } from "../../index";
import * as allFoods from "../../foods.json";

export default (
  //@ts-ignore
  state: IFood[] = allFoods,
  action: IUpdateMeals
): number => {
  return state;
};
