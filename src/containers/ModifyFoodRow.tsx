import * as React from "react";

import TableRow from "../components/TableRow";
import { IFood } from "../../index";

interface IProps {
  food: [IFood, Number];
  keysArray: String[];
}

function ModifyFoodRow({ food, keysArray }: IProps): JSX.Element {
  const [foodItem, servings] = food;
  const modifiedFoods: IFood = {
    id: foodItem.id,
    name: foodItem.name,
    // @ts-ignore
    calories: foodItem.calories * servings,
    // @ts-ignore
    carbs: foodItem.carbs * servings,
    // @ts-ignore
    fats: foodItem.fats * servings,
    // @ts-ignore
    pro: foodItem.pro * servings
  };

  return <TableRow food={modifiedFoods} keysArray={keysArray} />;
}

export default ModifyFoodRow;
