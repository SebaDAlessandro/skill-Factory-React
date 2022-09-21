import React from 'react'
import { useSelector } from 'react-redux'

const TaskList = () => {
  const state = useSelector((state) => state)
  console.log('Estado: ',state)
  const tasks = useSelector((state)=> state.tasks)
  console.log('Tareas: ',tasks)
  return (
    <div>TaskList</div>
  )
}

export default TaskList