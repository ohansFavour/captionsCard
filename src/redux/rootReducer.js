import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import captionReducer from "./captionsReducer";
import tagReducer from "./tagsReducer";
import apiLoadingReducer from "./apiLoadingReducer";

const persistConfig = {
  key: "root",
  storage
};

const rootReducer = combineReducers({
  captionReducer,
  tagReducer,
  apiLoadingReducer
});
export default persistReducer(persistConfig, rootReducer);
