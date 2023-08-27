import { useEffect } from "react"
import {useForm} from "react-hook-form"
import {createTask, deleteTask, updateTask, getTask} from "../api/tasks.api" 
import {useNavigate, useParams} from "react-router-dom"
import {toast} from "react-hot-toast"


const TaskFormPage = () => {

  const {register, handleSubmit, setValue, formState: {errors}} = useForm()

  const navigate = useNavigate()
  const params = useParams()

  const onSubmit = handleSubmit(async data => {
    if(params.id) {
      await updateTask(params.id, data)
      toast.success("Tarea Actualizada", {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "#fff"
        }
      })
    } else {
      await createTask(data)
      toast.success("Tarea Creada", {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "#fff"
        }
      })
    }
    navigate("/tasks")
  })


  useEffect(() => {
    async function loadTask() {
      if(params.id) {
        const res = await getTask(params.id)
        setValue('title', res.data.title)
        setValue('description', res.data.description)
      }
    }
    loadTask()
  }, [])
 
  return (
    <div className="max-w-xl mx-auto">
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="title" className="bg-zinc-700 p-3- rounded-lg block w-full mb-3" {...register("title", {required: true})}/>
        {errors.title && <span>Error de titulo</span>}
        
        <textarea rows="3" placeholder="description" className="bg-zinc-700 p-3- rounded-lg block w-full mb-3" {...register("description", {required: true})}></textarea>
        {errors.description && <span>Error de Descripcion</span>}
        
        <button className="bg-indigo-500 p-3 rounded-lg block w-full mb-3 hover:bg-indigo-700 font-bold uppercase">Guardar</button>

        {
          params.id &&
          <button className="bg-red-500 p-3 rounded-lg block w-full mb-3 hover:bg-red-700 font-bold uppercase" onClick={async () => {
            const acepted = window.confirm("Estas seguro ?")
            if(acepted) {
              await deleteTask(params.id)
              toast.success("Tarea Eliminada", {
                position: "bottom-right",
                style: {
                  background: "#101010",
                  color: "#fff"
                }
              })
            }
            navigate("/tasks")
          }}>Eliminar</button>
        }
        
      </form>
    </div>
  )
}

export default TaskFormPage