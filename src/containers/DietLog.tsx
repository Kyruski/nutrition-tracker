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
  let mealsTotal: IFood[] = [];
  // let mealTotal: IFood = {
  //   id: "",
  //   calories: 0,
  //   carbs: 0,
  //   fats: 0,
  //   pro: 0,
  //   name: "Total"
  // };

  const parseTotals = () => {
    //quick function to get totals for the day and the meal. Day total currently unused
    for (let meal of meals) {
      let iFood = {
        id: "",
        calories: 0,
        carbs: 0,
        fats: 0,
        pro: 0,
        name: "Total"
      };
      for (let food of meal) {
        //We multiply by food[1] for the number of servings
        iFood.calories += food[0].calories * food[1];
        iFood.carbs += food[0].carbs * food[1];
        iFood.fats += food[0].fats * food[1];
        iFood.pro += food[0].pro * food[1];
        // mealTotal.calories += food[0].calories * food[1];
        // mealTotal.carbs += food[0].carbs * food[1];
        // mealTotal.fats += food[0].fats * food[1];
        // mealTotal.pro += food[0].pro * food[1];
      }
      mealsTotal.push(iFood);
    }
  };

  parseTotals();

  return (
    <>
      {meals.map((meal: [IFood, Number][], idx: Number) => (
        <Table
          meal={mealNames[idx]}
          foods={meal}
          total={mealsTotal[idx]}
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
