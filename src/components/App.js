import { useState } from "react";
import React from "react";
import './../styles/App.css';

const App = () => {
  const [tasks,onclick] = useState([])
    const [data,setData] = useState({
        task:""
    })
    const onInput = (e) => {
        const { value, name } = e.target;
        setData((prev) => ({ ...prev, [name]: value }));
    };
    const onAdd = () =>{
        if(data.task.trim()){
            onclick((prevTask) => [
                ...prevTask,
                {
                    ...data,
                    id:Date.now(),
                    task: data.task,
                },
            ]);
            setData({task:""});
        }
    }
    const onDel = (id) =>{
        onclick((prevTask)=>prevTask.filter((tasks)=>tasks.id !== id));
    }
  return (
    <div>
        {/* Do not remove the main div */}
        <h5>To Do List</h5>
        <div className="inp-btn">
            <input
            className="input" 
            type="text" 
            onChange={onInput}
            name="task" 
            value={data.task}
            placeholder="Enter your task"
            />
            <button onClick={onAdd} className="addBtn">Add Todo</button>
        </div>
        <div>
            <ul>
                {tasks.map((task)=>(
                    <li id={task.id}>
                        {task.task}
                        <button className="del" onClick={()=> onDel(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default App
