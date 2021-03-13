export const GET_PAIRS = "GET_PAIRS";
export const ADD_PAIR = "ADD_PAIR";
export const REMOVE_PAIR = "REMOVE_PAIR";

import { getPairs as pairsInDb, insertPair, removeItem } from "../../helpers/db";

export const getPairs = () => {
  return async (dispatch) => {
    const dbResult = await pairsInDb();
    dispatch({ type: GET_PAIRS, payload: dbResult.rows._array });
  };
};

export const addPair = (pair) => {
  return async (dispatch) => {
    const result = insertPair(pair);
    const newPair = {
      id: result.insertId,
      pair: pair,
    };
    dispatch({ type: ADD_PAIR, payload: newPair });
  };
};

export const removePair = (pair) => {
  return async (dispatch) => {
    const res = removeItem(pair.pair);
    console.log(pair.pair);
    dispatch({ type: REMOVE_PAIR, payload: pair });
  };
};
