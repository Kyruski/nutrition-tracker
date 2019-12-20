import * as React from "react";
import { IFood } from "../../index";

interface IProps {
  total: IFood;
  keysArray: string[];
}

function TableFoot({ total, keysArray }: IProps): JSX.Element {
  return (
    <tfoot>
      <tr>
        {keysArray.map(
          (item: string, idx: number): JSX.Element => (
            <td key={`${total.name}-${item}-${idx}`}>{total[item]}</td>
          )
        )}
      </tr>
    </tfoot>
  );
}

export default TableFoot;
