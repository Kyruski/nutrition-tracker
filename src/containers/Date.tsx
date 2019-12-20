import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { nextDay, prevDay, updateMeals } from "../actions/index";

interface IProps {
  date: String;
  next: Function;
  prev: Function;
  updateDate: Function;
}

const { useEffect } = React;

function Date({ date, next, prev, updateDate }: IProps): JSX.Element {
  const day = Number(date.split("-")[2]);

  useEffect(() => {
    updateDate(date);
  }, [date]);

  return (
    <div id="date-div-container">
      <div
        id="left-arrow"
        className="arrow-div"
        onClick={() => (day > 1 ? prev() : () => {})}
      >{`❮`}</div>
      <div id="date-div">{date}</div>
      <div
        id="right-arrow"
        className="arrow-div"
        onClick={() => (day < 31 ? next() : () => {})}
      >{`❯`}</div>
    </div>
  );
}

function mapStateToProps(state: any) {
  return {
    date: state.date
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    next: () => dispatch(nextDay()),
    prev: () => dispatch(prevDay()),
    updateDate: date => dispatch(updateMeals(date))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Date);
