import { FC } from "react";
import styles from "./NewTodo.module.css";
import Container from "../UI/Container/Container";
import { useInput } from "../../hooks/useInput";

const NewTodo: FC = () => {
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

  const newTodoSubmitHandler = (e: any) => {
    e.preventDefault();

    if (descriptionValue === "" || titleValue === "") {
      return;
    }

    console.log({
      title: titleValue,
      description: descriptionValue,
    });
  };

  return (
    <Container className={styles["new-todo"]}>
      <form onSubmit={newTodoSubmitHandler}>
        <div className={styles["form-input-item"]}>
          <p className={styles.error}>{titleError ?? ""}</p>
          <input
            type="text"
            placeholder="Title"
            onChange={(e) => titleChangeHandler(e.target.value)}
            value={titleValue}
          />
        </div>
        <div className={styles["form-input-item"]}>
          <p className={styles.error}>{descriptionError ?? ""}</p>
          <input
            type="text"
            placeholder="Description"
            onChange={(e) => descriptionChangeHandler(e.target.value)}
            value={descriptionValue}
          />
        </div>
        <button type="submit">Add Todo</button>
      </form>
    </Container>
  );
};

export default NewTodo;
