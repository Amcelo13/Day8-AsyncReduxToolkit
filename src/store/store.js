import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "../features/Users/user.slice";
import postReducer from "../features/Album/post.slice";
import commentsReducer from "../features/Comments/comments.slice";

import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
  
  //blacklist means it will not be persisted
  blacklist: [ "comments"],
};


const rootReducer = combineReducers({
  users: userReducer,
  posts: postReducer,
  comments: commentsReducer,
});

const mypersistReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: mypersistReducer,
  middleware: [thunk],
});

export default store;
export const persistor = persistStore(store);
