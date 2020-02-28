import {
  ADDING_TAG_TO_CAPTION_START,
  ADDING_TAG_TO_CAPTION_FAILURE,
  ADDING_TAG_TO_CAPTION_SUCCESS
} from "./types";

const INITIAL_STATE = {
  addingTagToCaption: false
};

const apiLoadingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADDING_TAG_TO_CAPTION_START:
      return {
        ...state,
        addingTagToCaption: action.payload
      };
      case ADDING_TAG_TO_CAPTION_FAILURE:
      return {
        ...state,
        addingTagToCaption: action.payload
      };
      case ADDING_TAG_TO_CAPTION_SUCCESS:
      return {
        ...state,
        addingTagToCaption: action.payload
      };
    default:
      return state;
  }
};
export default apiLoadingReducer;
