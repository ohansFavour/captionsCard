import Axios from "axios";

import {
  fetchCaptionsAction,
  fetchTagsAction,
  addingTagToCaptionStart,
  addingTagToCaptionFailure,
  addingTagToCaptionSuccess
} from "./actions";
import { normalizeArray } from "../custom-functions/custom-functions";

export const fetchCaptions = () => {
  return async dispatch => {
    await Axios.get(
      "https://capcards-api.herokuapp.com/v1.0/api/caption/"
    ).then(response => {
      const captions = response.data.data.captions;
      const normalizedCaptions = normalizeArray(captions);
      dispatch(fetchCaptionsAction(normalizedCaptions));
    });
  };
};

export const fetchTags = () => {
  return async dispatch => {
    await Axios.get("https://capcards-api.herokuapp.com/v1.0/api/tag/").then(
      response => {
        const tags = response.data.data.tags;
        dispatch(fetchTagsAction(tags));
      }
    );
  };
};

export const addTagToCaption = (captionId, tagId) => {
  return async dispatch => {
    dispatch(addingTagToCaptionStart(true));
    await Axios({
      method: "post",
      url: "https://capcards-api.herokuapp.com/v1.0/api/caption/add-tag",
      data: {
        captionId: captionId,
        tagId: tagId
      },
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(() => {
        dispatch(addingTagToCaptionSuccess(false));
      })
      .catch(error => {
        dispatch(addingTagToCaptionFailure(false));
      });
  };
};
export const createNewTag = tag => {
  return async dispatch => {
    await Axios({
      method: "post",
      url: "https://capcards-api.herokuapp.com/v1.0/api/tag/",
      data: {
        tag: tag
      },
      headers: {
        "Content-Type": "application/json"
      }
    }).then(() => {
      dispatch(fetchTags());
    });
  };
};

export const createNewCaption = caption => {
  return async dispatch => {
    await Axios({
      method: "post",
      url: "https://capcards-api.herokuapp.com/v1.0/api/caption/",
      data: {
        caption: caption
      },
      headers: {
        "Content-Type": "application/json"
      }
    });
  };
};

export const createNewCaptionWithTags = (caption, tags) => {
  return async dispatch => {
    await Axios({
      method: "post",
      url: "https://capcards-api.herokuapp.com/v1.0/api/caption/multi",
      data: {
        caption: caption,
        tags: tags
      },
      headers: {
        "Content-Type": "application/json"
      }
    });
  };
};

export const getCaptionsWithTag = tagId => {
  return async dispatch => {
    await Axios({
      method: "get",
      url: `https://capcards-api.herokuapp.com/v1.0/api/caption/withTag?tagId=${tagId}`
    })
  }
};

export const getCaptionsWithTags = (array) => {
  return async dispatch => {
    await Axios({
      method: "post",
      url: "https://capcards-api.herokuapp.com/v1.0/api/tag/array",
      data: {
        tags: array
      },
      headers: {
        "Content-Type": "application/json"
      }
    });
  };
};
