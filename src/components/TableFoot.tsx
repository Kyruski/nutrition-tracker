import * as React from "react";
import { IFood } from "../../index";

interface IProps {
  total: IFood;
  keysArray: String[];
}

function TableFoot({ total, keysArray }: IProps): JSX.Element {
  return (
    <tfoot>
      <tr>
        {keysArray.map(
          (item: String | any, idx: Number): JSX.Element => (
            <td key={`${total.name}-${item}-${idx}`}>{total[item]}</td>
          )
        )}
      </tr>
    </tfoot>
  );
}

export default TableFoot;
