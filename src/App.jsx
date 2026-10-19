import { useEffect, useState } from 'react'
import { Sidebar } from './Components/Sidebar'
import { TaskForm } from './Components/TaskForm'
import { Dashboard } from './Pages/Dashboard'
import { Tasks } from './Pages/Tasks'
import { initialTasks, TASK_STORAGE_KEY } from './Interfaces/task'
import './styles.css'

function App() {
  const [tasks, setTasks] = useState(() => { try { return JSON.parse(localStorage.getItem(TASK_STORAGE_KEY)) || initialTasks } catch { return initialTasks } })
  const [view, setView] = useState('overview'); const [search, setSearch] = useState(''); const [modal, setModal] = useState(null)
  useEffect(() => localStorage.setItem(TASK_STORAGE_KEY, JSON.stringify(tasks)), [tasks])
  const save = (task) => { setTasks(current => modal?.task ? current.map(x => x.id === modal.task.id ? { ...x, ...task } : x) : [{ ...task, id: crypto.randomUUID(), completed: false }, ...current]); setModal(null) }
  const remove = (id) => { if (window.confirm('Bu görevi silmek istediğinize emin misiniz?')) setTasks(current => current.filter(x => x.id !== id)) }
  const props = { tasks, onAdd: () => setModal({}), onToggle: id => setTasks(c => c.map(t => t.id === id ? { ...t, completed: !t.completed } : t)), onEdit: task => setModal({ task }), onDelete: remove, search, setSearch, onViewAll: () => setView('tasks') }
  return <div className="app-shell"><Sidebar activeView={view} setActiveView={setView} onAdd={props.onAdd}/>{view === 'overview' ? <Dashboard {...props}/> : <Tasks {...props}/>} {modal && <TaskForm task={modal.task} onSave={save} onClose={() => setModal(null)}/>}</div>
}
export default App
