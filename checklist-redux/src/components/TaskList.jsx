import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteTask } from '../features/tasks/tasksSlice'
import { Link } from 'react-router-dom'


const TaskList = () => {
  const tasks = useSelector((state)=> state.tasks)
  const dispatch = useDispatch()
  const handleDelete = (id)=>{
    dispatch(
      deleteTask(id)
    )
  }

  return (
    <>
      <header>
        <h2>Task: {tasks.length}</h2>
        <Link to={'/create-task'}>Agregar Tarea</Link>
      </header>
      {tasks.length>0 ? tasks.map(({ id, titulo, descripcion, completo })=>{
        return(
          <div key={id}>
            <h3>{titulo}</h3>
            <p>{descripcion}</p>
            <button onClick={()=>handleDelete(id)}>delete</button>
            <Link to={`/edit-task/${id}`}>edit</Link>
          </div>
        )
      }):(<h2>Carga tu lista de pendientes</h2>)}
    </>
  )
}

export default TaskList