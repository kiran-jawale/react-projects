import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: JSON.parse(localStorage.getItem("users")) || [],
  loggedInUser: JSON.parse(localStorage.getItem("loggedInUser")) || null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.loggedInUser = action.payload;
      localStorage.setItem("loggedInUser", JSON.stringify(action.payload));
    },
    logoutUser: (state) => {
      state.loggedInUser = null;
      localStorage.removeItem("loggedInUser");
    },
    registerUser: (state, action) => {
      state.users.push(action.payload);
      localStorage.setItem("users", JSON.stringify(state.users));
      state.loggedInUser = action.payload;
      localStorage.setItem("loggedInUser", JSON.stringify(action.payload));
    },
    updateUserTasks: (state, action) => {
      const { username, tasks } = action.payload;
      const userIndex = state.users.findIndex(
        (user) => user.username === username
      );
      if (userIndex !== -1) {
        state.users[userIndex].tasks = tasks;
        localStorage.setItem("users", JSON.stringify(state.users));
      }
    },
    recoverPassword: (state, action) => {
      const { username, favoriteColor, fourDigitNumber } = action.payload;
      const user = state.users.find((user) => user.username === username);
      if (
        user &&
        user.favoriteColor === favoriteColor &&
        user.fourDigitNumber === fourDigitNumber
      ) {
        return { password: user.password };
      } else {
        return { error: "Invalid credentials" };
      }
    },
    updateUserTaskStatus: (state, action) => {
      const { task, username } = action.payload;
      const userIndex = state.users.findIndex(
        (user) => user.username === username
      );
      if (userIndex !== -1) {
        const taskIndex = state.users[userIndex].tasks.findIndex(
          (t) => t.name === task.name
        );
        if (taskIndex !== -1) {
          state.users[userIndex].tasks[taskIndex].status = !task.status;
          localStorage.setItem("users", JSON.stringify(state.users));
        }
      }
    },
    recoverPassword: (state, action) => {
      const { username, favoriteColor, fourDigitNumber } = action.payload;
      const user = state.users.find((user) => user.username === username);
      if (
        user &&
        user.favoriteColor === favoriteColor &&
        user.fourDigitNumber === fourDigitNumber
      ) {
        return { password: user.password };
      } else {
        return { error: "Invalid credentials" };
      }
    },
    updateTask: (state, action) => {
      const { username, task } = action.payload;
      const userIndex = state.users.findIndex(
        (user) => user.username === username
      );
      if (userIndex !== -1) {
        const taskIndex = state.users[userIndex].tasks.findIndex(
          (t) => t.id === task.id
        );
        if (taskIndex !== -1) {
          state.users[userIndex].tasks[taskIndex] = task;
          localStorage.setItem("users", JSON.stringify(state.users));
        }
      }
    },
    deleteTask: (state, action) => {
      const { username, taskId } = action.payload;
      const userIndex = state.users.findIndex(
        (user) => user.username === username
      );
      if (userIndex !== -1) {
        state.users[userIndex].tasks = state.users[userIndex].tasks.filter(
          (task) => task.id !== taskId
        );
        localStorage.setItem("users", JSON.stringify(state.users));
      }
    },
  },
});

export const {
  loginUser,
  updateTask,
  deleteTask,
  logoutUser,
  registerUser,
  updateUserTasks,
  recoverPassword,
  updateUserTaskStatus,
} = userSlice.actions;
export default userSlice.reducer;
