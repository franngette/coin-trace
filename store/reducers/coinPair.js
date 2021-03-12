import { GET_PAIRS, ADD_PAIR } from "../actions/coinPair";

const initialState = {
  pairs: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PAIRS:
      return {
        ...state,
        pairs: action.payload,
      };
    case ADD_PAIR:
        const test = state.pairs
        test.push(action.payload)
      return {
        ...state,
        pairs: test
      };
  }
  return state;
};
