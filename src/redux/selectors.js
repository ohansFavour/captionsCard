import { createSelector } from "reselect";
import { denormalizeObject } from "../custom-functions/custom-functions";

const selectCaptions = state =>
  denormalizeObject(state.captionReducer.captions);
const selectTags = state => state.tagReducer.tags;
const selectAddingTagToCaption = state=> state.apiLoadingReducer.addingTagToCaption;

export const selectCaptionsLoading = createSelector(
  [selectCaptions],
  captions => !!!captions
);
export const selectCaptionsArray = createSelector([selectCaptions], captions =>
  captions ? captions : []
);
export const selectTagsLoading = createSelector(
  [selectTags],
  tags => !!!tags
);
export const selectTagsArray = createSelector([selectTags], tags =>
  tags ? tags : []
);
export const selectAdddingTagToCaptionBoolean = createSelector(
  [selectAddingTagToCaption],
  bool => bool
)



