import {Link} from 'react-router-dom'

export default function Navigation() {
  return (
    <div>
        <Link to="/">
        <h1>Task App</h1>
        </Link>
        
        <Link to="/tasks-create">Create Task</Link>
    </div>
  )
}


