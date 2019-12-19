import { Action } from "redux";

export const increment: Function = (): Action => {
  return { type: "INCREMENT" };
};
export const decrement: Function = (): Action => {
  return { type: "DECREMENT" };
};
