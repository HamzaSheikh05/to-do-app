import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { AddTask } from "./components/AddTask";
import { DisplayTask } from "./components/DisplayTask";

function App() {
  const [listTask, setListTask] = useState([]);
  return (
    <div className="App">
      <Header />
      <AddTask listTask={listTask} setListTask={setListTask} />
      <DisplayTask listTask={listTask} setListTask={setListTask} />
    </div>
  );
}

export default App;
