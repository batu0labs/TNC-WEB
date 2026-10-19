export const TASK_STORAGE_KEY = 'bafko-gorevleri'

export const initialTasks = [
  { id: '1', title: 'Proje gereksinimlerini incele', description: 'Uygulama kapsamını ve teslim adımlarını netleştir.', category: 'Planlama', priority: 'Yüksek', dueDate: '2026-10-20', completed: true },
  { id: '2', title: 'Ana sayfa tasarımını tamamla', description: 'Dashboard kartlarını ve görev listesini oluştur.', category: 'Tasarım', priority: 'Orta', dueDate: '2026-10-22', completed: false },
  { id: '3', title: 'LocalStorage bağlantısını test et', description: 'Görevlerin tarayıcı kapatıldığında korunmasını doğrula.', category: 'Geliştirme', priority: 'Düşük', dueDate: '2026-10-25', completed: false }
]

export const categories = ['Planlama', 'Tasarım', 'Geliştirme', 'Pazarlama']
export const priorities = ['Düşük', 'Orta', 'Yüksek']
