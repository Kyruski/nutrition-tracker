//@ts-nocheck
import * as React from "react";
// import { connect } from "react-redux";
// import { Dispatch, Action } from "redux";
import { IFood } from "../../index";
import Table from "../components/Table";

interface IProps {
  foodsList: [IFood, Number][][];
  mealNames: String[];
}

function DietLog({ foodsList, mealNames }: IProps): JSX.Element {
  return (
    <>
      {foodsList.map((meal: [IFood, Number][], idx: Number) => (
        <Table meal={mealNames[idx]} foods={meal} />
      ))}
    </>
  );
}

export default DietLog;

// function mapStateToProps(state: any) {
//   return {
//     count: state.count
//   };
// }

// function mapDispatchToProps(dispatch: Dispatch) {
//   return {
//     inc: () => dispatch(increment()),
//     dec: () => dispatch(decrement())
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
