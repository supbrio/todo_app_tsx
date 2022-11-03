import { FC } from "react";
import styles from "./TodoItem.module.css";
import { todoModel } from "../../models/todo/todoModels";
import { todoTimeStamp } from "../../hooks/todoTimeStamp";
import { useAppDispatch } from "../../hooks/appTypes";
import { changeDoneState, removeTodo } from "../../features/todo-slice";

interface TodoItemProps {
  todo: todoModel;
  onOpenTodo: (id: number) => void;
}

const TodoItem: FC<TodoItemProps> = ({ todo, onOpenTodo }) => {
  const dispatch = useAppDispatch();

  const todoDoneHandler = () => {
    dispatch(changeDoneState(todo.id));
  };

  const removeTodoHandler = () => {
    var answer = window.confirm("Save data?");
    if (answer) {
      dispatch(removeTodo(todo.id));
    }
    return;
  };

  return (
    <div className={styles.todo}>
      <div className={`${styles["todo-text"]} ${todo.done ? styles.done : ""}`}>
        <p>{todoTimeStamp(todo.date)}</p>
        <h4 className={todo.done ? styles.done : ""}>{todo.title}</h4>
        <p className={todo.done ? styles.done : ""}>{todo.description}</p>
        <button className={styles.edit} onClick={() => onOpenTodo(todo.id)}>
          edit
        </button>
      </div>
      <div className={styles["todo-actions"]}>
        <button
          className={`${styles.check} ${todo.done ? styles.done : ""}`}
          onClick={todoDoneHandler}
        >
          &#10004;
        </button>
        <button className={styles.remove} onClick={removeTodoHandler}>
          &#935;
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
