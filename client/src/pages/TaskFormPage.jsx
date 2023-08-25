import {useForm} from "react-hook-form"
import {createTask} from "../api/tasks.api" 
import {useNavigate, useParams} from "react-router-dom"


const TaskFormPage = () => {

  const {register, handleSubmit, formState: {errors}} = useForm()

  const navigate = useNavigate()
  const params = useParams()

  const onSubmit = handleSubmit(async data => {
    await createTask(data)
    navigate("/tasks")
  })

 


  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="title" {...register("title", {required: true})}/>
        {errors.title && <span>Error de titulo</span>}
        <textarea rows="3" placeholder="description" {...register("description", {required: true})}></textarea>
        {errors.description && <span>Error de Descripcion</span>}
        <button>Guardar</button>

        {
          params.id &&
          <button>Eliminar</button>
        }
        
      </form>
    </div>
  )
}

export default TaskFormPage