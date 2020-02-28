import {FETCH_CAPTIONS, FETCH_TAGS, ADDING_TAG_TO_CAPTION_START,ADDING_TAG_TO_CAPTION_FAILURE,ADDING_TAG_TO_CAPTION_SUCCESS} from "./types";

export const fetchCaptionsAction = (captions)=>({
  type: FETCH_CAPTIONS,
  payload: captions
})
export const fetchTagsAction = (tags)=>({
  type: FETCH_TAGS,
  payload: tags
})

export const addingTagToCaptionStart = (bool)=>({
  type: ADDING_TAG_TO_CAPTION_START,
  payload: bool
})
export const addingTagToCaptionSuccess = (bool)=>({
  type: ADDING_TAG_TO_CAPTION_SUCCESS,
  payload: bool
})
export const addingTagToCaptionFailure = (bool)=>({
    type: ADDING_TAG_TO_CAPTION_FAILURE,
    payload: bool
  })