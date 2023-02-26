import { configureStore, combineReducers } from "@reduxjs/toolkit";
import  questionReducer  from "./question_reducer";
import  resultReducer  from "./result-reducer";

const rootReducer = combineReducers({
  question: questionReducer,
  result: resultReducer,
});

// Create a redux Store
export default configureStore({ reducer: rootReducer });
