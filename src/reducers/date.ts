//@ts-nocheck
import { Action } from "redux";
export default (state: string = "2019-12-01", action: Action): number => {
  let splitString = state.split("-");
  let day = Number(splitString[2]);
  switch (action.type) {
    case "NEXT_DAY":
      day++;
      return day < 10 ? `2019-12-0${day}` : `2019-12-${day}`;
    case "PREV_DAY":
      day--;
      return day < 10 ? `2019-12-0${day}` : `2019-12-${day}`;
    default:
      return state;
  }
};
