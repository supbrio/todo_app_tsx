import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { todoModel } from "../../models/todo/todoModels";
import {
  fetchTodos,
  addTodo,
  editTodo,
  changeDoneState,
  removeTodo,
} from "./todoApiCalls";

interface TodosState {
  loading: boolean;
  loadingNew: boolean;
  error: null | any;
  todos: todoModel[];
}

const initialState: TodosState = {
  loading: false,
  loadingNew: false,
  error: null,
  todos: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
        state.error = null;
        state.loading = false;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(addTodo.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
      })
      .addCase(addTodo.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(editTodo.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editTodo.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
      })
      .addCase(editTodo.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(changeDoneState.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(changeDoneState.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
      })
      .addCase(changeDoneState.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(removeTodo.pending, (state, action) => {
        state.loading = true;
        state.loadingNew = true;
        state.error = null;
      })
      .addCase(removeTodo.fulfilled, (state, action) => {
        state.error = null;
        state.loadingNew = false;
        state.loading = false;
      })
      .addCase(removeTodo.rejected, (state, action) => {
        state.error = action.payload;
        state.loadingNew = false;
        state.loading = false;
      });
  },
});

export default todoSlice.reducer;
