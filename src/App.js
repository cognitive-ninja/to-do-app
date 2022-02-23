import {useState} from 'react'
import './App.css';
import AddTask from './components/AddTask';
import AllTasks from './components/AllTasks';
function App() {
  const [allTasks, setAllTasks] = useState('');
  
  const fetchNewTask = (task) => {
    setAllTasks((prevTasks) => {
      return [task, ...prevTasks];
    })
  }

  const removeTask = (taskIdx) => {
    console.log(taskIdx)
    const newAllTasks = allTasks.filter((currTask, currTaskId) => {
      return taskIdx*1 !== currTaskId;
    })
    console.log(newAllTasks)
    // console.log(allTasks)
    setAllTasks(newAllTasks);
  }

  return (
    <div className="App">
        <header>
            <h1>Todomatic</h1>
        </header>
        <AddTask passToRoot={fetchNewTask}/>
        <AllTasks allTasks={allTasks} removeTask={removeTask}/>          
    </div>
  );
}

export default App;
