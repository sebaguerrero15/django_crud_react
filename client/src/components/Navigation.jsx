import {Link} from 'react-router-dom'

export default function Navigation() {
  return (
    <div className='flex justify-between py-3'>
        <Link to="/">
        <h1 className='font-bold text-3xl mb-4'>Task App</h1>
        </Link>
        <button className='bg-orange-600 rounded-lg px-3 py-2 font-bold hover:bg-orange-500'>

        <Link to="/tasks-create">Create Task</Link>
        </button>
    </div>
  )
}


