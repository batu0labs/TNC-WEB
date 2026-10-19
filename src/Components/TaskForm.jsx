import { useEffect, useState } from 'react'
import { categories, priorities } from '../Interfaces/task'
import { Icon } from './Icons'

const empty = { title: '', description: '', category: 'Geliştirme', priority: 'Orta', dueDate: '' }
export function TaskForm({ task, onSave, onClose }) {
  const [form, setForm] = useState(task ? { ...task } : empty)
  useEffect(() => setForm(task ? { ...task } : empty), [task])
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const submit = (e) => { e.preventDefault(); if (form.title.trim()) onSave({ ...form, title: form.title.trim(), description: form.description.trim() }) }
  return <div className="modal-backdrop" onMouseDown={(e) => e.target === e.currentTarget && onClose()}><form className="modal" onSubmit={submit}>
    <div className="modal-head"><div><span className="eyebrow">{task ? 'GÖREVİ DÜZENLE' : 'YENİ GÖREV'}</span><h2>{task ? 'Görevi güncelle' : 'Yeni görev oluştur'}</h2></div><button type="button" className="close-btn" onClick={onClose}>×</button></div>
    <label>Görev adı<input autoFocus name="title" value={form.title} onChange={update} placeholder="Örn. Sunum hazırlığını tamamla" required /></label>
    <label>Açıklama<textarea name="description" value={form.description} onChange={update} placeholder="Görev hakkında kısa bir not..." rows="3" /></label>
    <div className="form-grid"><label>Kategori<select name="category" value={form.category} onChange={update}>{categories.map(x => <option key={x}>{x}</option>)}</select></label><label>Öncelik<select name="priority" value={form.priority} onChange={update}>{priorities.map(x => <option key={x}>{x}</option>)}</select></label></div>
    <label>Son tarih<div className="input-icon"><Icon name="calendar" size={17}/><input type="date" name="dueDate" value={form.dueDate || ''} onChange={update}/></div></label>
    <div className="modal-actions"><button type="button" className="button secondary" onClick={onClose}>Vazgeç</button><button className="button primary" type="submit">{task ? 'Değişiklikleri kaydet' : 'Görevi oluştur'} <Icon name="arrow" size={17}/></button></div>
  </form></div>
}
