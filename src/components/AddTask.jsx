import React from "react";

export const AddTask = ({ listTask, setListTask, task, setTask }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.id) {
      const newDate = new Date();
      const updatedTask = listTask.map((todo) =>
        todo.id === task.id
          ? {
              id: task.id,
              name: task.name,
              time: `${newDate.toLocaleTimeString()} ${newDate.toLocaleDateString()}`,
            }
          : todo
      );
      setListTask(updatedTask);
    } else {
      const dateTime = new Date();
      const newEntry = {
        id: dateTime.getTime(),
        name: e.target.task.value,
        time: `${dateTime.toLocaleTimeString()} ${dateTime.toLocaleDateString()}`,
      };
      setListTask([...listTask, newEntry]);

      //clear after adding the task
      e.target.task.value = "";
    }
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
          value={task.name}
          onChange={(e) => setTask({ ...task, name: e.target.value })}
        />
        <button type="submit">Add Task</button>
      </form>
    </section>
  );
};
