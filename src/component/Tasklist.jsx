import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CreateNewTask, fetchAllTask } from "../store/TaskReducer";

const Tasklist = () => {
  const dispatch = useDispatch();
  const { task, taskInput, loading } = useSelector((state) => state.task);

  //Get task from input feild.
  const onChangeInput = (value) => {
    dispatch({ type: "CHANGE_TASK", payload: value });
  };

  // Save task by save button.
  const onSave = () => {
    // const task = {
    //   id: new Date().getUTCMilliseconds(),
    //   title: taskInput,
    // };
    // dispatch({ type: "CREATE_TASK", payload: task });
    // onChangeInput("");

    dispatch(CreateNewTask(taskInput));
    onChangeInput("");
  };

  useEffect(() => {
    dispatch(fetchAllTask());
  }, []);

  console.log("Loading", loading);

  return (
    <div>
      <h4>Tasks</h4>

      <input
        value={taskInput}
        onChange={(e) => onChangeInput(e.target.value)}
      />

      <button onClick={() => onSave()}>Save</button>

      {loading ? (
        <h1>Loading plz w8.........</h1>
      ) : (
        <ul>
          {task.map((task, index) => (
            <li key={index}> {task.title} </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Tasklist;
