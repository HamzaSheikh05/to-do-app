import React from "react";

export const AddTask = ({ listTask, setListTask }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const dateTime = new Date();
    const newEntry = {
      id: dateTime.getTime(),
      name: e.target.task.value,
      time: `${dateTime.toLocaleTimeString()} ${dateTime.toLocaleDateString()}`,
    };
    setListTask([...listTask, newEntry]);

    //clear after adding the task
    e.target.task.value = "";
  };
  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          autoComplete="off"
          placeholder="Add Task"
          maxLength="30"
        />
        <button type="submit">Add Task</button>
      </form>
    </section>
  );
};
