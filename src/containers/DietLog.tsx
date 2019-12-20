//@ts-nocheck
import * as React from "react";
import { connect } from "react-redux";
import { Dispatch, Action } from "redux";
import { IFood } from "../../index";
import Table from "../components/Table";

interface IProps {
  meals: [IFood, Number][][];
  mealNames: String[];
}

function DietLog({ meals, mealNames }: IProps): JSX.Element {
  return (
    <>
      {meals.map((meal: [IFood, Number][], idx: Number) => (
        <Table
          meal={mealNames[idx]}
          foods={meal}
          key={`table-${meal}-${idx}`}
        />
      ))}
    </>
  );
}

function mapStateToProps(state: any) {
  return {
    mealNames: state.mealNames,
    meals: state.meals
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(DietLog);
