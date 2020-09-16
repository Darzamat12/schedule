import { VISIBLE_COLUMN_TITLES } from "./actionTypes";

export const setVisibleColumnTitles = (columnArray: any) => {
    return {
      type: VISIBLE_COLUMN_TITLES,
      payload: columnArray,
    }
  };
