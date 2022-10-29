import React, { useEffect, useState } from 'react'
import '../styles/TaskList.css'
import Task from './Task'
import TaskForm from './TaskForm'
import { v4 as uuidv4 } from 'uuid';
//import axios from 'axios'

const TaskList = () => {

  //const arrayList = [{id:1, titulo:'hacer las compras'}, {id:2, titulo:'salir a correr'}, {id:3, titulo: 'ir a buscar a Abril al cole'}, {id:4, titulo:'empezar el challenge TP2 de Skill Factory'}] 
  //const arrayList = [];

  const [taskList, setTaskList] = useState([])

  const agregarTarea = (id, titulo, detalle, completo)=>{
    setTaskList(oldList =>[...oldList, {id, titulo, detalle, completo}])
  }

  const quitarTarea = (id)=>{
    setTaskList(oldList => oldList.filter(task => task.id !== id))
  }

  const modificarCompleto = (id, completo)=>{
    //console.log(completo)
    const taskCompleto = taskList.filter(task => task.id === id)
    setTaskList(oldList => oldList.filter(task => task.id !== id))
    if(completo){
      taskCompleto[0].completo = false
      setTaskList(oldList =>[...oldList, ...taskCompleto])
    }else{
      taskCompleto[0].completo = true
      setTaskList(oldList =>[...taskCompleto, ...oldList])
    }
  }

 /*  try {  
  useEffect(()=>{
      getTaskList();
    },[])

    const getTaskList = async ()=>{
      setTaskList([...arrayList])
    }
    } catch (error) {
        console.log(error)
    } */

  return (
    <div className='taskList__container'>
      {/* {console.log('TaskList: ',taskList)} */}
      <TaskForm 
        agregarTarea = {agregarTarea}
        id = {uuidv4()}
      />
      {taskList.length === 0 ? (<h1 className='taskList__container-previo'>Genere su listado de tareas</h1>) : 
      (
      <div>
        {taskList.map((task,index)=>{
          //console.log(task)
          return(
            <Task
              key = {index}
              id = {task.id}
              titulo = {task.titulo}
              detalle = {task.detalle}
              completo = {task.completo}
              quitarTarea = {()=>quitarTarea(task.id)}
              modificarCompleto = {()=>modificarCompleto(task.id, task.completo)}
            />
          )
        })}
      </div>
      )}
      
    </div>
  )
}

export default TaskList