import { configureStore, combineReducers } from "@reduxjs/toolkit";
import notificationReducer from "./reducers/notificationReducer";
import anectdoteReducer from "./reducers/anecdoteReducer";
import filterReducer from "./reducers/filterReducer";


const store = configureStore({
  reducer: combineReducers({
    anecdote: anectdoteReducer,
    notification: notificationReducer,
    filter: filterReducer
  })
});

  
export default store