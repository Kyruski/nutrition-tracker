import * as React from "react";
import { IFood } from "../../index";

interface IProps {
  food: IFood;
  keysArray: String[];
}

function TableRow({ food, keysArray }: IProps): JSX.Element {
  return (
    <tbody>
      <tr>
        {keysArray.map(
          (item: String | any, idx: Number): JSX.Element => (
            <td key={`${food.name}-${item}-${idx}`}>{food[item]}</td>
          )
        )}
      </tr>
    </tbody>
  );
}

export default TableRow;
