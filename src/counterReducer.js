import { INCREMENT, DECREMENT, RESET } from "./counterActions";

const initialState = { count: 0 };

export default function reducer(state = initialState, action) {
  // console.log("reducer", state, action);
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1
      };
    case "RESET":
      return {
        ...state,
        count: 0,
        users: []
      };
    default:
      return state;
  }
}
