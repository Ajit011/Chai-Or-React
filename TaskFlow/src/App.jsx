import { useState } from "react";

function App() {

  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);


  const addTask = () => {

    if(task.trim() === "") return;

    const newTask = {
      id: Date.now(),
      title: task,
      completed: false
    };


    setTasks([...tasks, newTask]);

    setTask("");
  };

  const deleteTask = (id) => {

  const updatedTasks = tasks.filter((item)=>{
    return item.id !== id;
  });

  setTasks(updatedTasks);

};


  return (
    <div>

      <h1>Todo App</h1>

      <input
        type="text"
        placeholder="Enter Task"
        value={task}
        onChange={(e)=>setTask(e.target.value)}
      />

      <button onClick={addTask}>
        Add
      </button>


            <div>
        {
          tasks.map((item)=>(
            <div key={item.id}>

              <h3>
                {item.title}
              </h3>

              <button onClick={()=>deleteTask(item.id)}>
                Delete
              </button>

            </div>
          ))
        }
      </div>

    </div>
  )
}

export default App;