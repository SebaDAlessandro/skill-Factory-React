import React from 'react'
import '../styles/TaskForm.css'
import { useForm } from "react-hook-form";
import { useState } from 'react';
import { useEffect } from 'react';

const TaskForm = ({agregarTarea, id}) => {

  const { register, handleSubmit, watch, formState: {errors} } = useForm({defaultValues:{taskTitulo:"", taskDetalle:""}});
  
  watch()

  const [titulo, setTitulo] = useState('')
  useEffect(()=>{

  },[titulo])

   
  const onSubmit = (data, e) => {
    //console.log('data: ',data.taskTitulo)
    let completo = false;
    setTitulo(data.titulo)
    agregarTarea(id, titulo, data.taskDetalle, completo)
    setTitulo('')
        
    // limpiar campos
    e.target.reset()
    //IMPORTANTE! como limpiamos los datos de la cache? ---> se usa el .focus()? ---> donde?
  };

  return (
    <form className='form__container' onSubmit={handleSubmit(onSubmit)}>
      <div className='form__input-container'>
        <div className='form__input'>
          <input {...register('taskTitulo', { required: '* El campo Titulo es requerido' })}
              placeholder='Ingrese un titulo'
              className='form__input-display-titulo'
              
          />
          <input {...register('taskDetalle', { required: '* El campo Detalle es requerido' })}
              placeholder='Detalle de la tarea'
              className='form__input-display-detalle'
              
          />
        </div>
        <button className='form__input-btn' type="submit">Agregar</button>
      </div>
      <div className='form__error-container'>
        {errors.taskTitulo && <span className='form__error'>{errors.taskTitulo.message}</span>}
        {errors.taskDetalle && <span className='form__error'>{errors.taskDetalle.message}</span>}
      </div>

    </form>
  )
}

export default TaskForm