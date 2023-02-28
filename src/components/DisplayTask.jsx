import React from "react";

export const DisplayTask = () => {
  const tasks = [
    { id: 1, name: "Task 1", time: "2:09:02 AM 28/02/2023" },
    { id: 2, name: "Task 2", time: "3:00:02 AM 28/02/2023" },
    { id: 3, name: "Task 3", time: "4:00:02 AM 28/02/2023" },
    { id: 4, name: "Task 4", time: "5:09:02 AM 28/02/2023" },
    { id: 5, name: "Task 5", time: "7:10:02 AM 28/02/2023" },
  ];
  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">0</span>
        </div>
        <button className="clearAll">Delete All</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li>
            <p>
              <span className="name">{task.name}</span>
              <span className="time">{task.time}</span>
            </p>
            <i class="bi bi-pencil-square"></i>
            <i class="bi bi-trash"></i>
          </li>
        ))}
      </ul>
    </section>
  );
};
