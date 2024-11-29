import { MdCheck, MdDeleteForever } from "react-icons/md";
export const TodoList = ({
  data,
  cheaked,
  onHandleCheakedTodo,
  onHandleDeleteTodo,
}) => {
  return (
    <li className="todo-item">
      <span className={cheaked ? "checkList" : "notCheckList"}>{data}</span>
      <button className="check-btn" onClick={() => onHandleCheakedTodo(data)}>
        <MdCheck />
      </button>
      <button className="delete-btn" onClick={() => onHandleDeleteTodo(data)}>
        <MdDeleteForever />
      </button>
    </li>
  );
};
