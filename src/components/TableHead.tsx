import * as React from "react";

interface IProps {
  headers: string[][];
}

function TableHead({ headers }: IProps): JSX.Element {
  return (
    <thead>
      <tr>
        {headers.map(
          (item: string[], idx: number): JSX.Element => (
            <th key={`${headers[0][0]}-${idx}`}>
              {item[0]}
              <div className="table-head-subtitle">{item[1]}</div>
            </th>
          )
        )}
      </tr>
    </thead>
  );
}

export default TableHead;
