import React from "react";

export const DisplayTask = ({ listTask, setListTask, task, setTask }) => {
  const handleEdit = (id) => {
    const individualTask = listTask.find((todo) => todo.id === id);
    setTask(individualTask);
  };

  const handleDelete = (id) => {
    const newTaskList = listTask.filter((todo) => todo.id !== id);
    setListTask(newTaskList);
  };

  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">{listTask.length}</span>
        </div>
        <button onClick={() => setListTask([])} className="clearAll">
          Delete All
        </button>
      </div>
      <ul>
        {listTask.map((todo) => (
          <li key={todo.id}>
            <p>
              <span className="name">{todo.name}</span>
              <span className="time">{todo.time}</span>
            </p>
            <i
              onClick={() => handleEdit(todo.id)}
              className="bi bi-pencil-square"
            ></i>
            <i
              onClick={() => handleDelete(todo.id)}
              className="bi bi-trash"
            ></i>
          </li>
        ))}
      </ul>
    </section>
  );
};
