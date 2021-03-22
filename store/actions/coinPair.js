export const GET_PAIRS = "GET_PAIRS";
export const ADD_PAIR = "ADD_PAIR";
export const REMOVE_PAIR = "REMOVE_PAIR";
export const CHANNEL_ID = "CHANNEL_ID";
export const UPDATE_PRICE = "UPDATE_PRICE";

import { getPairs as pairsInDb, insertPair, removeItem } from "../../helpers/db";

export const getPairs = () => {
  return async (dispatch) => {
    const dbResult = await pairsInDb();
    dispatch({ type: GET_PAIRS, payload: dbResult.rows._array });
  };
};

export const addPair = (pair) => {
  return async (dispatch) => {
    const result = await insertPair(pair);
    const newPair = {
      id: result.insertId,
      pair: pair,
    };
    dispatch({ type: ADD_PAIR, payload: newPair });
  };
};

export const removePair = (pair) => {
  return async (dispatch) => {
    removeItem(pair.pair);
    dispatch({ type: REMOVE_PAIR, payload: pair });
  };
};

export const channelId = (obj) => {
  return async (dispatch) => {
    dispatch({ type: CHANNEL_ID, payload: obj });
  };
};

export const updatePrice = (arr) => {
  return async (dispatch) => {
    dispatch({ type: UPDATE_PRICE, payload: arr });
  };
};
