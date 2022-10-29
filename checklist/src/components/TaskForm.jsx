import React from 'react'
import '../styles/TaskForm.css'
import { useForm } from "react-hook-form";


const TaskForm = ({agregarTarea, id}) => {

  const { register, handleSubmit, watch, formState: {errors} } = useForm();
  
  watch()

  const onSubmit = (data, e) => {
    //console.log('data: ',data.taskTitulo)
    let completo = false;
    agregarTarea(id, data.taskTitulo, data.taskDetalle, completo)
        
    // limpiar campos
    e.target.reset()
    //IMPORTANTE! como limpiamos los datos de la cache? ---> donde?
    // como hago para que luego de cada carga se vuelva a cargar el input con la barra "|"
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