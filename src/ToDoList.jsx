import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([
    "Eat breakfast",
    "Take a shower",
    "Study 4-5 hrs",
  ]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((tasks) => [...tasks, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    
    const updateTasks = tasks.filter(( _ , i) => 
    i !== index); 
    setTasks(updateTasks);
  }

  function moveTaskUp(index) {

    if(index > 0){
      const updateTasks =[...tasks];
      [updateTasks[index] , updateTasks[index-1]] =
      [updateTasks[index-1] , updateTasks[index]] ;
      setTasks(updateTasks);
    }
  }

  function moveTaskDown(index) {
    if(index < tasks.length - 1){
      const updateTasks =[...tasks];
      [updateTasks[index] , updateTasks[index+1]] =
      [updateTasks[index+1] , updateTasks[index]] ;
      setTasks(updateTasks);
    }
  }

  return (
    <div className="to-do-list">

      {/* <u><h1>To-Do-List</h1></u> */}
      <h1>To-Do-List</h1>

      <div className="">
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
        />

        <button className="add-btn" onClick={addTask}>
          Add
        </button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <li key="index">
            <span className="text">{task}</span>

            <button className="delete-btn" onClick={() => deleteTask(index)}>
              Delete
            </button>

            <button className="move-btn" onClick={() => moveTaskUp(index)}>
              ☝️
            </button>

            <button className="move-btn" onClick={() => moveTaskDown(index)}>
              👇
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
