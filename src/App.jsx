import { useSelector } from "react-redux";
import "./App.css";
import Counter from "./component/Counter";

function App() {
  const tasks = useSelector((state) => state.task.tasks);
  // console.log("tasks from app", tasks);
  return (
    <div className="App">
      <h1>Total Task: {tasks.length}</h1>
      <Counter></Counter>
    </div>
  );
}

export default App;
