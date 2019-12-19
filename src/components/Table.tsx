import * as React from "react";
import TableHead from "./TableHead";
import ModifiedFoodRow from "../containers/ModifyFoodRow";
import { IFood } from "../../index";

interface IProps {
  meal: String;
  foods: [IFood, Number][];
}

function Table({ meal, foods }: IProps): JSX.Element {
  const headers = [
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
        (food, idx): JSX.Element => (
          <ModifiedFoodRow
            food={food}
            key={`${headers[0]}-${food[0].name}-${idx}`}
          />
        )
      )}
    </table>
  );
}

export default Table;
