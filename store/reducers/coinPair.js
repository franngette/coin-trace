import { GET_PAIRS, ADD_PAIR, REMOVE_PAIR, CHANNEL_ID, UPDATE_PRICE } from "../actions/coinPair";

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
      const pairs = state.pairs;
      pairs.push(action.payload);
      return {
        ...state,
        pairs: pairs,
      };
    case REMOVE_PAIR:
      const newPairs = state.pairs.filter((item) => item !== action.payload);
      return {
        ...state,
        pairs: newPairs,
      };
    case CHANNEL_ID:
      let arrayForChan = [...state.pairs];
      const indexForChan = arrayForChan.findIndex((el) => el.pair.toUpperCase() === action.payload.pair);
      arrayForChan[indexForChan].chanId = action.payload.chanId;
      return {
        ...state,
        pairs: arrayForChan,
      };

    case UPDATE_PRICE:
      let arrayForPrice = [...state.pairs];
      const indexForPrice = arrayForPrice.findIndex((el) => el.chanId === action.payload[0]);
      //console.log(action.payload[1][6])
      arrayForPrice[indexForPrice].prices = action.payload[1];
      //console.log(arrayForPrice, indexForPrice, 'ARRAY')
      return {
        ...state,
        pairs: arrayForPrice,
      };
    /* state.pairs[pairIndex].chanId = action.payload.chanId;
      console.log(pairIndex, "pair index ", state.pairs); */
  }
  return state;
};
