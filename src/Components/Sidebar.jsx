import { Icon } from './Icons'

export function Sidebar({ activeView, setActiveView, onAdd }) {
  return <aside className="sidebar">
    <div className="brand"><span className="brand-mark">b</span><span>Bafko</span></div>
    <div className="workspace"><span className="workspace-avatar">B</span><div><strong>Bafko Workspace</strong><small>Kişisel alan</small></div></div>
    <nav>
      <p className="nav-label">MENÜ</p>
      <button className={activeView === 'overview' ? 'nav-item active' : 'nav-item'} onClick={() => setActiveView('overview')}><Icon name="grid"/> Genel Bakış</button>
      <button className={activeView === 'tasks' ? 'nav-item active' : 'nav-item'} onClick={() => setActiveView('tasks')}><Icon name="list"/> Tüm Görevler</button>
    </nav>
    <div className="sidebar-bottom"><button className="new-task" onClick={onAdd}><Icon name="plus"/> Yeni görev ekle</button><div className="mini-profile"><span className="profile-avatar">B</span><div><strong>Batuhan</strong><small>Ücretsiz plan</small></div></div></div>
  </aside>
}
