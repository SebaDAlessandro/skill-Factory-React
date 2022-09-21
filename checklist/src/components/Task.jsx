import React, { useEffect, useState } from 'react'
import '../styles/Task.css'

const Task = ({id, titulo, detalle, completo, quitarTarea, modificarCompleto}) => {

/*   const [complete, setComplete] = useState(completo)
 */

/*   const modificarCompleto = ()=>{
    completo ? completo = false : completo = true;
    setComplete(completo)
  } */
/* 
  try {    
    useEffect(()=>{
      console.log('Estado copleto: ',complete)
    },[complete])
  } catch (error) {
    console.log(error)
  } */

  return (
    <div className='task__container'>
      <div className={completo?'task__completo-true':'task__completo-false'}>
        <h3 className='task__title'>Titulo: {titulo}</h3>
        <h3 className='task__detalle'>Detalle: {detalle}</h3>
      </div>
      <div className='task__btn-container'>
        <div className='task__btn-complete' onClick={modificarCompleto}><span className="material-symbols-outlined">done</span></div>
        <div className='task__btn-delete' onClick={quitarTarea}><span className="material-symbols-outlined">delete</span></div>
      </div>
    </div>
  )
}

export default Task