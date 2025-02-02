import { combineReducers } from "@reduxjs/toolkit";

const appReducer = combineReducers({
  clinic: clinicReducer,
});

const reducer = (state, action) => appReducer(state, action);

export default reducer;
