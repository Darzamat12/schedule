import { DATA } from "./actionTypes";

export const SET_DATA = (content: string) => ({
    type: DATA,
    payload: {
      content,
    }
});