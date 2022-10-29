import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useDispatch, useSelector } from 'react-redux'
import { addTasks, editTasck } from '../features/tasks/tasksSlice.js'
import { useNavigate, useParams } from 'react-router-dom'; //se usa para poder cambiar de pagina
import { useEffect, useState } from 'react';



const TaskForm = () => {
  const dispach = useDispatch()
  const navigate = useNavigate()
  const params = useParams()
  const tasks = useSelector(state => state.tasks)

  const [task, setTask] = useState({
    titulo: '',
    descripcion: ''
  })

  useEffect(()=>{
    if(params.id){
      setTask(tasks.find((task) => task.id === params.id))
    }
  },[])

  const handleChange = e => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e)=>{
    e.preventDefault()

    if (params.id){
      dispach(editTasck(task))
    }else{
      dispach(addTasks({
        ...task,
        id: uuidv4(),
        completo: false
      }))
    }

    navigate('/')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Titulo</label>
      <input
        type="text"
        name="titulo"
        placeholder="Nombre"
        onChange={handleChange}
        value = {task.titulo}
      />

      <label>Descripción</label>
      <textarea
        type="text"
        name="descripcion"
        placeholder="Describa la tarea"
        onChange={handleChange}
        value = {task.descripcion}
      />

      <button>save</button>
    </form>
  );
}

export default TaskForm