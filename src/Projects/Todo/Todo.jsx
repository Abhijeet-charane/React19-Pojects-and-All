import { useState } from "react";
import "./Todo.css";
import { TodoDate } from "./TodoDate";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import {
  getLocalStorageTodoData,
  setLocalStorageTodoData,
} from "./TodoLocalstorage";

export const Todo = () => {
  const [task, setTask] = useState(() => getLocalStorageTodoData());

  const handleFormSubmit = (inputValue) => {
    const { id, content, cheaked } = inputValue;

    //  to cheak input field is empty or not
    if (!content) return;

    // to cheak data has already existing or not
    // if (task.includes(inputValue)) return;
    const ifTodoContentMatched = task.find(
      (curTask) => curTask.content === content
    );
    if (ifTodoContentMatched) return;

    setTask((prevTask) => [...prevTask, { id, content, cheaked }]);
  };

  // todo Add Data to local storage
  setLocalStorageTodoData(task);

  //handle delete todo function
  const handleDeleteTodo = (value) => {
    const updatedTask = task.filter((curTask) => curTask.content !== value);
    setTask(updatedTask);
  };

  // todo handleClearTodoData functionallity

  const handleClearTodoData = () => {
    setTask([]);
  };

  // todo handleCheakedTodo functionality
  const handleCheakedTodo = (content) => {
    const updatedTask = task.map((curTask) => {
      if (curTask.content === content) {
        return { ...curTask, cheaked: !curTask.cheaked };
      } else {
        return curTask;
      }
    });
    setTask(updatedTask);
  };

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <TodoDate />
      </header>
      <TodoForm onAddTodo={handleFormSubmit} />
      <section className="myUnOrdList">
        <ul>
          {task.map((curTask) => {
            return (
              <TodoList
                key={curTask.id}
                data={curTask.content}
                cheaked={curTask.cheaked}
                onHandleDeleteTodo={handleDeleteTodo}
                onHandleCheakedTodo={handleCheakedTodo}
              />
            );
          })}
        </ul>
      </section>
      <section>
        <button className="clear-btn" onClick={handleClearTodoData}>
          Clear All
        </button>
      </section>
    </section>
  );
};
