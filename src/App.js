import "./App.css";
import { Header } from "./components/Header";
import { AddTask } from "./components/AddTask";
import { DisplayTask } from "./components/DisplayTask";

function App() {
  return (
    <div className="App">
      <Header />
      <AddTask />
      <DisplayTask />
    </div>
  );
}

export default App;
