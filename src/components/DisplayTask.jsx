import React from "react";

export const DisplayTask = () => {
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
        <li>
          <p>
            <span className="name">Task A</span>
            <span className="time">2:09:02 AM 28/02/2023</span>
          </p>
          <i class="bi bi-pencil-square"></i>
          <i class="bi bi-trash"></i>
        </li>
      </ul>
    </section>
  );
};
