import {
  FETCH_USER_REQUEST,
  FETCH_USER_FAILURE,
  FETCH_USER_SUCCESS,
  RESET_USER,
  REMOVE_USER
} from "./usersActions";

// 1 - Whenever you want to change the state you will change it in the reducer.

const initialState = {
  users: [],
  loading: false,
  error: null
};

export default function userReducer(state = initialState, action) {
  console.log("action", action);
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_USER_SUCCESS:
      console.log("payload", action.payload.user);
      return {
        ...state,
        loading: false,
        users: [...state.users, action.payload.user]
      };
    case FETCH_USER_FAILURE:
      // The request failed. It's done. So set loading to "false".
      // Save the error, so we can display it somewhere.
      // Since it failed, we don't have items to display anymore, so set `items` empty.
      //
      // This is all up to you and your app though:
      // maybe you want to keep the items around!
      // Do whatever seems right for your use case.
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        users: []
      };
    case RESET_USER:
      return {
        ...state,
        users: []
      };
    case REMOVE_USER:
      return {
        ...state,
        users: state.users.slice(0, -1)
      };

    default:
      // ALWAYS have a default case in a reducer
      return state;
  }
}
