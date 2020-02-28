import { FETCH_TAGS } from "./types";

const INITIAL_STATE = {
  tags: null
};

const tagsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_TAGS:
      return {
        ...state,
        tags: action.payload
      }
    default:
      return state;
  }
};
export default tagsReducer;