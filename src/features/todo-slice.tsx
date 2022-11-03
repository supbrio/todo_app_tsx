import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  newTodoModel,
  todoModel,
  editTodoModel,
} from "../models/todo/todoModel";

interface TodosState {
  todos: todoModel[];
}

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
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<newTodoModel>) => {
      const { title, description } = action.payload;
      const maxId = Math.max(...state.todos.map((todo: todoModel) => todo.id));

      state.todos = state.todos.concat([
        {
          id: maxId + 1,
          title,
          description,
          date: new Date(Date.now()).toISOString(),
          done: false,
        },
      ]);
    },
    changeDoneState: (state, action: PayloadAction<number>) => {
      const todoToChange = state.todos.find(
        (todo: todoModel) => todo.id === action.payload
      );
      if (todoToChange) {
        todoToChange.done = !todoToChange?.done;
      }
    },
    editTodo: (state, action: PayloadAction<editTodoModel>) => {
      const { id, title, description } = action.payload;
      const todoToEdit = state.todos.find((todo: todoModel) => todo.id === id);
      if (todoToEdit) {
        todoToEdit.title = title;
        todoToEdit.description = description;
      }
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter(
        (todo: todoModel) => todo.id !== action.payload
      );
    },
  },
});

export const { addTodo, changeDoneState, editTodo, removeTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
