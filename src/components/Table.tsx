import * as React from "react";
import TableHead from "./TableHead";
import ModifiedFoodRow from "../containers/ModifyFoodRow";
import { IFood } from "../../index";
import TableFoot from "./TableFoot";

interface IProps {
  meal: String;
  foods: [IFood, Number][];
  total: IFood;
}

function Table({ meal, foods, total }: IProps): JSX.Element {
  const keysArray = ["name", "calories", "carbs", "fats", "pro"]; //Array of important keys to map through for the table in order
  const headers = [
    //Headers for the Table Head
    [meal, ""],
    ["Calories", "kcal"],
    ["Carbs", "g"],
    ["Fat", "g"],
    ["Pro", "g"]
  ];
  return (
    <table id={`table-${meal}`} className="meal-table">
      <TableHead headers={headers} />
      {foods.map(
        (food: [IFood, Number], idx: Number): JSX.Element => (
          <ModifiedFoodRow
            food={food}
            keysArray={keysArray}
            key={`${headers[0]}-${food[0].name}-${idx}`}
          />
        )
      )}
      <TableFoot total={total} keysArray={keysArray} />
    </table>
  );
}

export default Table;
