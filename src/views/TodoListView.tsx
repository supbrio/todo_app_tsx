import { FC, useEffect } from "react";
import TodoList from "../components/Todo/TodoList";
import { fetchTodos } from "../features/todos/todoApiCalls";
import { useAppDispatch, useAppSelector } from "../hooks/appTypes";

const TodoListView: FC = () => {
  const dispatch = useAppDispatch();
  const { loadingNew } = useAppSelector((state) => state.todos);

  useEffect(() => {
    if (!loadingNew) {
      dispatch(fetchTodos());
    }
  }, [loadingNew]);

  return <TodoList />;
};

export default TodoListView;
