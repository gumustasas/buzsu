import React from 'react';

const UrunSayfasi = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      {/* Üst Bar / Navigasyon */}
      <header className="border-b sticky top-0 bg-white z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="text-2xl font-black text-orange-600 tracking-tighter">BUZSU</div>
          <div className="hidden md:flex flex-1 mx-10">
            <div className="relative w-full">
              <input type="text" placeholder="Ürün, kategori veya marka ara..." className="w-full border rounded-md py-2 px-4 bg-gray-100" />
            </div>
          </div>
          <div className="flex space-x-6 text-sm font-medium">
            <span>Giriş Yap</span>
            <span className="relative">🛒 Sepetim</span>
          </div>
        </div>
      </header>

      {/* Breadcrumb (Yol Haritası) - SEO İçin Kritik */}
      <nav className="max-w-7xl mx-auto px-4 py-3 text-xs text-gray-500">
        Ana Sayfa {'>'} Su Arıtma Filtreleri {'>'} 6 Aşamalı Filtre Setleri
      </nav>

      {/* Ürün Ana Alanı */}
      <main className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Sol Kolon: Ürün Görseli */}
        <div className="border rounded-xl p-4 flex items-center justify-center bg-gray-50">
          <img 
            src="https://www.buzsu.com.tr/naturalsnet-6-asama-su-aritma-cihazi-filtresi-buzsu-753-P-ORG.jpg" 
            alt="Buzsu Naturalsnet 6 Aşama Filtre Seti" 
            className="max-h-[500px] object-contain"
          />
        </div>

        {/* Sağ Kolon: Satın Alma Alanı */}
        <div className="flex flex-col">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Buzsu Naturalsnet 6 Aşama Germany Kraft Membranlı 80 GPD
          </h1>
          <div className="flex items-center space-x-2 mb-6">
            <div className="flex text-orange-400 text-lg">★★★★★</div>
            <span className="text-sm text-gray-500">(12 Değerlendirme)</span>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border-2 border-orange-50">
            <div className="text-3xl font-black text-gray-900 mb-1">1.699 TL</div>
            <div className="text-sm text-green-600 font-bold mb-6">Kargo Bedava</div>
            
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-extrabold py-4 rounded-lg text-xl transition-all shadow-lg">
              Sepete Ekle
            </button>
          </div>

          <div className="mt-8 border-t pt-6 space-y-4">
            <div className="flex items-center space-x-3">
              <span className="text-xl">✅</span>
              <p className="text-sm"><strong>NSF Sertifikalı Bileşenler:</strong> Sağlığınız için dünya standartlarında onaylı filtreler.</p>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-xl">🚀</span>
              <p className="text-sm"><strong>Aynı Gün Kargo:</strong> Saat 16:00'ya kadar verilen siparişlerde hızlı sevkiyat.</p>
            </div>
          </div>
        </div>
      </main>

      {/* Ürün Detay ve Açıklama Alanı (SEO Buradan Beslenir) */}
      <section className="max-w-7xl mx-auto px-4 py-12 border-t mt-12">
        <h2 className="text-xl font-bold mb-6 border-b-2 border-orange-500 inline-block pb-1">Ürün Açıklaması</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 leading-relaxed">
          <div className="col-span-2">
            <p className="mb-4">
              <strong>Buzsu Naturalsnet 6 Aşama</strong> filtre seti, evsel su arıtma cihazlarınız için en yüksek performansı sunmak üzere tasarlanmıştır. 
              İçerisinde yer alan <strong>Germany Kraft Membran (80 GPD)</strong> sayesinde suyunuzdaki kireç, ağır metal ve bakterileri %99 oranında temizler.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
              <li>1. Aşama: 5 Mikron Sediment Filtre (Çamur ve Pas Tutucu)</li>
              <li>2. Aşama: Granül Aktif Karbon Filtre (Klor ve Koku Giderici)</li>
              <li>3. Aşama: Blok Karbon Filtre (Hassas Tat Düzenleyici)</li>
              <li>4. Aşama: 80 GPD Germany Kraft Membran (Ana Arıtma Ünitesi)</li>
              <li>5. Aşama: Post Karbon Tatlandırıcı (Hindistan Cevizi Kabuğu Özlü)</li>
              <li>6. Aşama: Mineral/Alkali Filtre (Vücut Direncini Artıran pH Dengesi)</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg text-sm">
            <h3 className="font-bold mb-4">Teknik Özellikler</h3>
            <p className="mb-2"><strong>GTIP Kodu:</strong> 8421.99.90.00.14</p>
            <p className="mb-2"><strong>Sertifikalar:</strong> NSF, ISO 9001</p>
            <p className="mb-2"><strong>Uyum:</strong> Tüm Kapalı Kasa Cihazlar</p>
            <p><strong>Marka:</strong> Buzsu / Naturalsnet</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm opacity-50">© 2026 Buzsu Arıtma Sistemleri - Muhammet Gümüştaş A.Ş. İştirakidir.</p>
        </div>
      </footer>
    </div>
  );
};

export default UrunSayfasi;
