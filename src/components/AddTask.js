import React, {useState} from 'react'

const AddTask = (props) => {
  const [newTask, setNewTask] = useState('');
  
  const handleNewTask = (e) => {
      setNewTask(e.target.value);
  }
  const handleSubmit = (e) => {
        e.preventDefault();
        if(newTask==='')
            alert('Please enter a new task')
        else
        {
            props.passToRoot(newTask);
            setNewTask('');
        }
  }

  return (
    <div className="add-task" style={{backgroundColor: 'lightyellow', padding:'3%', margin:'0% 15% 0% 15%'}}>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="What to do?" value={newTask} onChange={handleNewTask}/>
            <button type="submit" style={{cursor: 'pointer'}} onClick={handleSubmit}>Add New Task</button>
        </form>
    </div>
  )
}

export default AddTask