import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { todoModel } from "../../models/todo/todoModels";

export const fetchTodos = createAsyncThunk(
  "todos/todoApiCalls/fetchTodos",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.get<todoModel[]>("http://127.0.0.1:8000/todos/");
      console.log(res.data);
      return res.data;
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);

export const addTodo = createAsyncThunk(
  "todos/todoApiCalls/addTodo",
  async (data: any, { rejectWithValue }) => {
    try {
      const { title, description } = data;
      const res = await axios.post<todoModel>("http://127.0.0.1:8000/todos/", {
        title,
        description,
      });
      return res.data;
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);

export const editTodo = createAsyncThunk(
  "todos/todoApiCalls/editTodo",
  async (data: any, { rejectWithValue }) => {
    try {
      const { id, title, description } = data;
      const res = await axios.post<todoModel>(
        `http://127.0.0.1:8000/todos/${id}`,
        { title, description }
      );
      return res.data;
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);

export const changeDoneState = createAsyncThunk(
  "todos/todoApiCalls/changeDoneState",
  async (data: number, { rejectWithValue }) => {
    try {
      const res = await axios.put<todoModel>(
        `http://127.0.0.1:8000/todos/${data}`
      );
      return res.data;
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);

export const removeTodo = createAsyncThunk(
  "todos/todoApiCalls/removeTodo",
  async (data: number, { rejectWithValue }) => {
    try {
      const res = await axios.delete<todoModel>(
        `http://127.0.0.1:8000/todos/${data}`
      );
      return res.data;
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);
