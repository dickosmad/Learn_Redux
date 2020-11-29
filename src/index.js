import React from "react";
import { render } from "react-dom";
import thunk from "redux-thunk";
import Counter from "./Counter";
import "./index.css";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import usersReducers from "./usersReducer";
import counterReducer from "./counterReducer";

// const initialState = { count: 0 };

// function reducer(state = initialState, action) {
//   console.log("reducer", state, action);
//   switch (action.type) {
//     case "INCREMENT":
//       return {
//         count: state.count + 1
//       };
//     case "DECREMENT":
//       return {
//         count: state.count - 1
//       };
//     case "RESET":
//       return {
//         count: 0
//       };
//     default:
//       return state;
//   }
// }
const rootReducer = combineReducers({
  reducer: counterReducer,
  users: usersReducers
});
const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

render(<App />, document.getElementById("root"));
