import * as React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../actions";
import { Dispatch, Action } from "redux";

interface IProps {
  count: Number;
  inc: () => Action;
  dec: () => Action;
}

function Counter({ count, inc, dec }: IProps): JSX.Element {
  return (
    <>
      Counter is at {count}.<button onClick={inc}>Increment</button>
      <button onClick={dec}>Decrement</button>
    </>
  );
}

function mapStateToProps(state: any) {
  return {
    count: state.count
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    inc: () => dispatch(increment()),
    dec: () => dispatch(decrement())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
