import * as React from "react";

interface IProps {
  date: String;
}

function Date({ date }: IProps): JSX.Element {
  return (
    <div id="date-div-container">
      <div id="left-arrow" className="arrow-div">{`❮`}</div>
      <div id="date-div">{date}</div>
      <div id="right-arrow" className="arrow-div">{`❯`}</div>
    </div>
  );
}

export default Date;
