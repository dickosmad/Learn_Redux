export const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

export const fetchUserBegin = () => ({
  type: FETCH_USER_REQUEST
});
export const fetchUserSuccess = (user) => {
  console.log("user action", user);
  return {
    type: FETCH_USER_SUCCESS,
    payload: { user }
  };
};
export const fetchUserFailure = (err) => ({
  type: FETCH_USER_FAILURE,
  payload: {
    err
  }
});
