import { useSelector } from "react-redux";
import "./App.css";
import Counter from "./component/Counter";
import Tasklist from "./component/Tasklist";

function App() {
  const { task } = useSelector((state) => state.task);
  // console.log("tasks from app", tasks);
  return (
    <div className="App">
      <h1>Total Task: {task.length}</h1>
      <Counter></Counter>
      <br />
      <Tasklist></Tasklist>
    </div>
  );
}

export default App;
