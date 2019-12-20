//@ts-nocheck
import * as React from "react";
import { IFood } from "../..";

interface IProps {
  allFoods: IFood[];
  add: Function;
  mealNames: string[];
}

function AddFoods({ allFoods, add, mealNames }: IProps): JSX.Element {
  const onButtonClick = (e: React.MouseEvent): void => {
    e.preventDefault();
    let foodDropdown: HTMLSelectElement = document.getElementById(
      "foods-dropdown"
    );
    let mealDropdown: HTMLSelectElement = document.getElementById(
      "meals-dropdown"
    );
    let servingsInput: HTMLInputElement = document.getElementById(
      "servings-input"
    );
    let servings: number = Number(servingsInput.value);
    let selectedFood: number = foodDropdown.selectedIndex - 1; //subtracting 1 since the 0th index on the dropdown is the blank space
    let selectedMeal: number = mealDropdown.selectedIndex - 1;
    if (selectedFood >= 0 && selectedMeal >= 0 && servings > 0) {
      add(allFoods[selectedFood], selectedMeal, servings);
      foodDropdown.selectedIndex = 0;
      mealDropdown.selectedIndex = 0;
      servingsInput.value = "";
    }
  };

  return (
    <form>
      Food:{" "}
      <select id="foods-dropdown" defaultValue="DEFAULT">
        <option value="DEFAULT"></option>
        {allFoods.map(
          (food: IFood, idx: number): JSX.Element => (
            <option value={food.name} key={`${food.name}-${idx}`}>
              {food.name}
            </option>
          )
        )}
      </select>
      <br />
      Meal:{" "}
      <select id="meals-dropdown" defaultValue="DEFAULT">
        <option value="DEFAULT"></option>
        {mealNames.map(
          (meal: string, idx: number): JSX.Element => (
            <option value={meal} key={`${meal}-${idx}`}>
              {meal}
            </option>
          )
        )}
      </select>
      <br />
      Servings: <input id="servings-input" type="text" maxLength={1}></input>
      <br />
      <button onClick={(e: React.MouseEvent): void => onButtonClick(e)}>
        Add
      </button>
    </form>
  );
}

export default AddFoods;
