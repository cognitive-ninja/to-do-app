// import { useState } from 'react'

const AllTasks = (props) => {

    // const [removeTaskId, setRemoveTaskId] = useState();
    const handleComplete = (e) => {
        props.removeTask(e.target.id);
    }
  return (
    <div style={{backgroundColor: '#ffd9cc', padding:'3%', margin:'0% 15% 0% 15%'}}>
        <div style={{textAlign: 'left', margin:'0% 30% 0% 30%'}}>
        {
            props.allTasks.length < 1  ? <p>No tasks Added</p> :
            <>
              <p><i>Click on the task to delete it</i></p>
              <ul>{props.allTasks.map(
                (item, index) => <li key={index} id={index} onClick={handleComplete} style={{cursor: 'pointer'}}>{item}</li>
                )}</ul>
            </>
        }
        </div>
    </div>
  )
}

export default AllTasks;