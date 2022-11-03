import { FC } from "react";
import styles from "./NewTodo.module.css";
import Container from "../UI/Container/Container";
import { useInput } from "../../hooks/useInput";
import { useAppDispatch } from "../../hooks/appTypes";
import { addTodo } from "../../features/todo-slice";

const NewTodo: FC = () => {
  const dispatch = useAppDispatch();
  const {
    inputError: titleError,
    inputValue: titleValue,
    inputChangeHandler: titleChangeHandler,
    setInputValue: setTitleValue,
    setInputError: setTitleError,
  } = useInput("Title");

  const {
    inputError: descriptionError,
    inputValue: descriptionValue,
    inputChangeHandler: descriptionChangeHandler,
    setInputValue: setDescriptionValue,
    setInputError: setDescriptionError,
  } = useInput("Description");

  const newTodoSubmitHandler = (e: any) => {
    e.preventDefault();

    if (descriptionValue === "" || titleValue === "") {
      titleValue === ""
        ? setTitleError("Title field cannot be empty!")
        : setTitleError(null);
      descriptionValue === ""
        ? setDescriptionError("Description field cannot be empty!")
        : setDescriptionError(null);
      return;
    }
    dispatch(
      addTodo({
        title: titleValue,
        description: descriptionValue,
      })
    );
    setTitleValue("");
    setDescriptionValue("");
    setTitleError(null);
    setDescriptionError(null);
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
