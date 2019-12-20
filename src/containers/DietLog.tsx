//@ts-nocheck
import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IFood } from "../../index";
import Table from "../components/Table";
import { addFood } from "../actions";
import AddFoods from "../components/AddFoods";

interface IProps {
  meals: [IFood, number][][];
  mealNames: string[];
  allFoods: IFood[];
  add: Function;
}

function DietLog({ meals, mealNames, allFoods, add }: IProps): JSX.Element {
  let mealsTotal: IFood[] = [];
  let mealTotal: IFood = {
    id: "",
    calories: 0,
    carbs: 0,
    fats: 0,
    pro: 0,
    name: "Day's Total"
  };

  const parseTotals = (): void => {
    //quick function to get totals for the day and the meal.
    for (let meal of meals) {
      let iFood: IFood = {
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
        mealTotal.calories += food[0].calories * food[1];
        mealTotal.carbs += food[0].carbs * food[1];
        mealTotal.fats += food[0].fats * food[1];
        mealTotal.pro += food[0].pro * food[1];
      }
      mealsTotal.push(iFood);
    }
  };

  parseTotals();

  return (
    <div id="diet-log">
      {meals.map(
        (meal: [IFood, number][], idx: number): JSX.Element => (
          <Table
            meal={mealNames[idx]}
            foods={meal}
            total={mealsTotal[idx]}
            key={`table-${meal}-${idx}`}
          />
        )
      )}
      <Table meal={""} foods={undefined} total={mealTotal} />
      <br />
      <div id="add-foods-div">Add foods</div>
      <AddFoods allFoods={allFoods} add={add} mealNames={mealNames} />
    </div>
  );
}

function mapStateToProps(state: any) {
  return {
    mealNames: state.mealNames,
    meals: state.meals,
    allFoods: state.allFoods
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    add: (food, mealIdx, servings) => dispatch(addFood(food, mealIdx, servings))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DietLog);
