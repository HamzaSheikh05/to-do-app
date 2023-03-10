import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { AddTask } from "./components/AddTask";
import { DisplayTask } from "./components/DisplayTask";

function App() {
  const [listTask, setListTask] = useState(
    JSON.parse(localStorage.getItem("listTask")) || []
  );
  const [task, setTask] = useState({});

  useEffect(() => {
    localStorage.setItem("listTask", JSON.stringify(listTask));
  }, [listTask]);

  return (
    <div className="App">
      <Header />
      <AddTask
        listTask={listTask}
        setListTask={setListTask}
        task={task}
        setTask={setTask}
      />
      <DisplayTask
        listTask={listTask}
        setListTask={setListTask}
        task={task}
        setTask={setTask}
      />
    </div>
  );
}

export default App;
