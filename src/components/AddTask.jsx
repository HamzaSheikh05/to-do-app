import React from "react";

export const AddTask = () => {
  return (
    <section className="addTask">
      <form>
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
