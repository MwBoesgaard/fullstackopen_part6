import { createSlice } from "@reduxjs/toolkit";

let setTimeoutId

const notificationSlice = createSlice({
  name: "notification",
  initialState: null,
  reducers: {
    addNotification(state, action) {
      return (state = action.payload);
    },
    removeNotification(state, action) {
      return (state = null);
    },
  },
});

export const setNotification = (content, timeout) => {
  return async dispatch => {
    dispatch(addNotification(content));
    if (setTimeoutId) {
      clearTimeout(setTimeoutId)
    }
    setTimeoutId = setTimeout(() => {
      dispatch(removeNotification())
    }, timeout)
  };
};

export const {
  addNotification,
  removeNotification
} = notificationSlice.actions;
export default notificationSlice.reducer;
