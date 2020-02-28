import { FETCH_CAPTIONS } from "./types";

const INITIAL_STATE = {
  captions: null
};

const captionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_CAPTIONS:
      return {
        ...state,
        captions: action.payload
      }
    default:
      return state;
  }
};
export default captionsReducer;