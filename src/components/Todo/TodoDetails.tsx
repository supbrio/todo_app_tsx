import { FC, useEffect, useState } from "react";
import todoModel from "../../models/todo/todoModel";
import DUMMY_TODO from "../../dev-data/DUMMY_TODO.json";
import { useParams } from "react-router";
import { todoTimeStamp } from "../../hooks/todoTimeStamp";

const TodoDetails: FC = () => {
  const [todo, setTodo] = useState<todoModel>();
  const { todoId } = useParams();
  useEffect(() => {
    const foundTodo = DUMMY_TODO.find(
      (todo: todoModel) => todo.id === Number(todoId)
    );
    setTodo(foundTodo);
  }, [todoId]);

  return (
    <>
      <p>{todo?.date ? todoTimeStamp(todo?.date) : null}</p>
      <p>{todo?.title}</p>
      <p>{todo?.description}</p>
    </>
  );
};

export default TodoDetails;
