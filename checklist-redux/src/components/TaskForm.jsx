import React from 'react'
import { useSelector } from 'react-redux'
const TaskForm = () => {
  const state = useSelector((state) => state)
  console.log('Estado: ',state)
  return (
    <div>TaskForm</div>
  )
}

export default TaskForm