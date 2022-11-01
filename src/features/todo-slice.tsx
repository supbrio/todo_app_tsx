import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import todoModel from "../models/todo/todoModel";

// Define a type for the slice state
interface TodosState {
  todos: todoModel[];
}

// Define the initial state using that type
const initialState: TodosState = {
  todos: [
    {
      id: 1,
      title: "Shopping",
      description: "Buy beer",
      date: "2022-10-28T13:42:08.533Z",
      done: false,
    },
    {
      id: 2,
      title: "Shopping",
      description: "Sell noodles",
      date: "2022-10-28T15:42:08.533Z",
      done: false,
    },
    {
      id: 3,
      title: "Coding",
      description: "Create Todo app",
      date: "2022-10-28T16:42:08.533Z",
      done: false,
    },
    {
      id: 4,
      title: "Exercise",
      description: "Go to gym",
      date: "2022-10-28T18:42:08.533Z",
      done: false,
    },
  ],
};

export const todoSlice = createSlice({
  name: "todos",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    changeDoneState: (state, action: PayloadAction<number>) => {
      const todoToChange = state.todos.find(
        (todo: todoModel) => todo.id === action.payload
      );
      if (todoToChange) {
        todoToChange.done = !todoToChange?.done;
      }
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter(
        (todo: todoModel) => todo.id !== action.payload
      );
    },
  },
});

export const { changeDoneState, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
