export interface IFood {
  id: string;
  calories: number;
  carbs: number;
  fats: number;
  pro: number;
  name: string;
}
export interface IUpdateMeals {
  type: string;
  date?: string;
  food?: [IFood, number];
  mealIdx?: number;
  servings?: number;
}

export interface IState {
  date: string;
  mealNames: string[];
  meals: [IFood, number][][];
  allFoods: IFood[];
}
