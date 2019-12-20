import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IFood, IState } from "../../index";
import { removeFood } from "../actions/index";

interface IProps {
  food: [IFood, number];
  keysArray: string[];
  remove?: Function;
}

function TableRow({ food, keysArray, remove }: IProps): JSX.Element {
  const [foodItem, servings]: [IFood, number] = food;
  const modifiedFoods: IFood = {
    id: foodItem.id,
    name: foodItem.name,
    calories: foodItem.calories * servings,
    carbs: foodItem.carbs * servings,
    fats: foodItem.fats * servings,
    pro: foodItem.pro * servings
  };

  const deleteFood = (food: [IFood, number], e: React.MouseEvent): void => {
    e.preventDefault();
    remove(food);
  };

  return (
    <tbody>
      <tr>
        {keysArray.map(
          (item: string, idx: number): JSX.Element => (
            <td key={`${modifiedFoods.name}-${item}-${idx}`}>
              {modifiedFoods[item]}
            </td>
          )
        )}
        <td>
          <button
            onClick={(e: React.MouseEvent): void => {
              deleteFood(food, e);
            }}
          >
            x
          </button>
        </td>
      </tr>
    </tbody>
  );
}

function mapStateToProps(state: IState, ownProps: IProps) {
  return ownProps;
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    remove: food => dispatch(removeFood(food))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TableRow);
