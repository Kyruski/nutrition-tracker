import * as React from "react";
import TableHead from "./TableHead";
import TableRow from "../containers/TableRow";
import { IFood } from "../../index";
import TableFoot from "./TableFoot";

interface IProps {
  meal: string;
  foods: [IFood, number][];
  total: IFood;
}

function Table({ meal, foods, total }: IProps): JSX.Element {
  const keysArray: string[] = ["name", "calories", "carbs", "fats", "pro"]; //Array of important keys to map through for the table in order
  const headers: string[][] = [
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
      {!!foods
        ? foods.map(
            (food: [IFood, number], idx: number): JSX.Element => (
              <TableRow
                food={food}
                keysArray={keysArray}
                key={`${headers[0]}-${food[0].name}-${idx}`}
              />
            )
          )
        : null}
      <TableFoot total={total} keysArray={keysArray} />
    </table>
  );
}

export default Table;
