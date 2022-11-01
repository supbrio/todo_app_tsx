import { FC } from "react";
import Container from "../UI/Container/Container";
import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css";
import todoModel from "../../models/todo/todoModel";
import { useNavigate } from "react-router";
import { useAppSelector } from "../../hooks/appTypes";

const TodoList: FC = () => {
  const navigate = useNavigate();
  const { todos } = useAppSelector((state) => state.todos);
  const openTodoHandler = (id: number) => {
    navigate(`/todos/${id}`);
  };

  return (
    <Container className={styles["todo-list"]}>
      {todos
        // ?.sort((a: todoModel, b: todoModel) =>
        //   new Date(a.date) < new Date(b.date) ? 1 : -1
        // )
        .map((todo: todoModel) => (
          <TodoItem key={todo.id} todo={todo} onOpenTodo={openTodoHandler} />
        ))}
    </Container>
  );
};

export default TodoList;
