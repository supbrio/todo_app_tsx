import { FC, FormEvent, useEffect, useState } from "react";
import { todoModel } from "../../models/todo/todoModel";
import styles from "./TodoDetails.module.css";
import { useParams } from "react-router";
import { todoTimeStamp } from "../../hooks/todoTimeStamp";
import { useAppDispatch, useAppSelector } from "../../hooks/appTypes";
import { editTodo } from "../../features/todo-slice";
import { useInput } from "../../hooks/useInput";

const TodoDetails: FC = () => {
  const dispatch = useAppDispatch();
  const [todo, setTodo] = useState<todoModel>();
  const { todos } = useAppSelector((state) => state.todos);
  const { todoId } = useParams();
  const {
    inputError: titleError,
    inputValue: titleValue,
    inputChangeHandler: titleChangeHandler,
  } = useInput("Title");

  const {
    inputError: descriptionError,
    inputValue: descriptionValue,
    inputChangeHandler: descriptionChangeHandler,
  } = useInput("Description");

  const editSubmitTodoHandler = (e: FormEvent) => {
    e.preventDefault();
    if (!titleError && !descriptionError && todo) {
      dispatch(
        editTodo({
          id: Number(todo.id),
          title: titleValue,
          description: descriptionValue,
        })
      );
    }
  };

  useEffect(() => {
    const foundTodo = todos.find(
      (todo: todoModel) => todo.id === Number(todoId)
    );
    setTodo(foundTodo);
    if (foundTodo) {
      descriptionChangeHandler(foundTodo.description);
      titleChangeHandler(foundTodo.title);
    }
  }, [todoId]);

  return (
    <form className={styles["todo-details"]} onSubmit={editSubmitTodoHandler}>
      <div className={styles["form-item"]}>
        <p>Date: {todo?.date ? todoTimeStamp(todo?.date) : null}</p>
      </div>
      <div className={styles["form-item"]}>
        <p>{titleError ?? titleError}</p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          value={titleValue}
          onChange={(e) => titleChangeHandler(e.target.value)}
        />
      </div>
      <div className={styles["form-item"]}>
        <label htmlFor="description">Description</label>
        <input
          id="description"
          value={descriptionValue}
          onChange={(e) => descriptionChangeHandler(e.target.value)}
        />
      </div>
      <div className={styles["form-item"]}>
        <button type="submit" className={styles["button-modify"]}>
          Save!
        </button>
      </div>
    </form>
  );
};

export default TodoDetails;
