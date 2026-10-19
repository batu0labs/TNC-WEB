# Bafko — Görev Yönetimi

Bafko, görevleri tek bir çalışma alanında oluşturmayı, takip etmeyi ve tamamlandı olarak işaretlemeyi sağlayan modern ve responsive bir görev yönetimi uygulamasıdır.

## Özellikler

- Genel bakış ekranında toplam, tamamlanan ve devam eden görev istatistikleri
- Yeni görev oluşturma ve mevcut görevleri düzenleme
- Görevleri tamamlandı olarak işaretleme veya silme
- Başlık ve açıklama üzerinden görev arama
- Kategori, öncelik ve son tarih bilgileri ekleme
- Tüm görevleri ayrı bir görünümde listeleme
- Verilerin tarayıcı `localStorage` alanında saklanması
- Masaüstü ve mobil ekranlar için responsive tasarım

## Kullanılan teknolojiler

- React
- Vite
- React DOM
- JavaScript (ES Modules)
- CSS
- Google Fonts: DM Sans ve Plus Jakarta Sans

## Gereksinimler

- Node.js 18 veya üzeri
- npm

## Kurulum

Projeyi klonladıktan veya indirdikten sonra proje klasöründe şu komutları çalıştırın:

```bash
npm install
```

## Geliştirme sunucusunu başlatma

```bash
npm run dev
```

Vite, uygulamanın adresini terminalde gösterecektir. Varsayılan olarak uygulama genellikle `http://localhost:5173` adresinde açılır.

## Üretim derlemesi

```bash
npm run build
```

Oluşturulan üretim dosyalarını yerel olarak önizlemek için:

```bash
npm run preview
```

## Proje yapısı

```text
.
├── index.html
├── package.json
├── vite.config.js
└── src
    ├── App.jsx                 # Uygulama durumu ve ana akış
    ├── main.jsx                # React giriş noktası
    ├── styles.css              # Genel ve responsive stiller
    ├── Components
    │   ├── Icons.jsx            # Tekrar kullanılabilir ikonlar
    │   ├── Sidebar.jsx          # Sol menü ve çalışma alanı bilgisi
    │   ├── TaskCard.jsx         # Görev kartı
    │   └── TaskForm.jsx         # Görev oluşturma/düzenleme formu
    ├── Interfaces
    │   └── task.js              # Görev modeli, kategoriler ve öncelikler
    └── Pages
        ├── Dashboard.jsx        # Genel bakış ekranı
        └── Tasks.jsx            # Tüm görevler ekranı
```

## Veri saklama

Uygulama herhangi bir backend veya veritabanı kullanmaz. Görevler, tarayıcının `localStorage` alanında `bafko-tasks` anahtarıyla saklanır. Bu nedenle veriler aynı tarayıcı ve cihaz içinde korunur; farklı cihazlar arasında senkronize edilmez.

Tarayıcı depolamasını temizlemek görevleri de siler.

## Kullanım

1. Sol menüden **Yeni görev ekle** veya sayfadaki **Yeni görev** butonunu seçin.
2. Görev adı, açıklama, kategori, öncelik ve son tarih bilgilerini girin.
3. Görevi tamamlamak için görev kartındaki daire simgesine tıklayın.
4. Kartın üzerine gelerek düzenleme veya silme seçeneklerini kullanın.
5. Arama alanıyla başlık ya da açıklama içinde filtreleme yapın.

## Lisans

Bu proje özel kullanım için hazırlanmıştır.
