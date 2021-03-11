export const GET_PAIRS = "GET_PAIRS";
export const ADD_PAIR = "ADD_PAIR";

import { getPairs as pairsInDb, insertPair } from "../../helpers/db";

export const getPairs = () => {
  return async (dispatch) => {
    const dbResult = await pairsInDb();
    dispatch({ type: GET_PAIRS, payload: dbResult.rows._array });
  };
};

export const addPair = (pair) => {
  return async (dispatch) => {
    try {
      await insertPair(pair);
      dispatch({ type: ADD_PAIR });
    } catch (err) {
      throw err;
    }
  };
};
