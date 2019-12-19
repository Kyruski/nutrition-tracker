import * as React from "react";

import TableRow from "../components/TableRow";
import { IFood } from "../../index";

interface IProps {
  food: [IFood, Number];
}

function ModifyFoodRow({ food }: IProps): JSX.Element {
  const keysArray = ["name", "calories", "carbs", "fats", "pro"];
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
