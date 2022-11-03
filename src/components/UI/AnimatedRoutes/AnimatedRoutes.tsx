import { FC } from "react";
import { Routes, Route } from "react-router";
import HomeView from "../../../views/HomeView";
import TodoListView from "../../../views/TodoListView";
import TodoView from "../../../views/TodoView";
import NewTodoView from "../../../views/NewTodoView";
import SettingsView from "../../../views/SettingsView";

const AnimatedRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/todos" element={<TodoListView />} />
      <Route path="/todos/:todoId" element={<TodoView />} />
      <Route path="/newtodo" element={<NewTodoView />} />
      <Route path="/settings" element={<SettingsView />} />
    </Routes>
  );
};

export default AnimatedRoutes;
