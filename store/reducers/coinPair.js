import { GET_PAIRS, ADD_PAIR } from "../actions/coinPair";

const initialState = {
  pairs: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PAIRS:
      return {
        ...initialState,
        pairs: action.payload,
      };
  }
  return state;
};
