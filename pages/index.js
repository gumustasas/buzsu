import { Droplet, ShoppingCart, Search, Menu } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased text-gray-900">
      {/* Üst Menü - Koçtaş Mavisi */}
      <nav className="bg-[#0056b3] text-white p-4 flex justify-between items-center shadow-lg sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <Menu className="md:hidden" />
          <span className="text-2xl font-black tracking-tighter">suaritmafiltresi.com</span>
        </div>
        <div className="hidden md:flex gap-8 font-bold text-sm uppercase">
          <span className="hover:text-orange-400 cursor-pointer transition">Filtreler</span>
          <span className="hover:text-orange-400 cursor-pointer transition">Endüstriyel Sistemler</span>
          <span className="hover:text-orange-400 cursor-pointer transition">B2B Bayi Paneli</span>
        </div>
        <div className="flex gap-5">
          <Search className="cursor-pointer hover:text-orange-400" />
          <ShoppingCart className="cursor-pointer hover:text-orange-400" />
        </div>
      </nav>

      {/* Hero Alanı */}
      <header className="py-24 text-center bg-white border-b px-4 flex flex-col items-center">
        <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 tracking-tight">Pure Water, Pure Future.</h2>
        <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto font-medium">
          Türkiye'nin En Büyük Su Arıtma Filtre Stok Merkezi. <br className="hidden md:block" /> 
          Güney Kore ve Çin'den Doğrudan İthalat, TAREKS Onaylı Kalite.
        </p>
        <button className="bg-[#FF6600] text-white px-14 py-5 rounded-md font-black text-xl shadow-2xl hover:bg-orange-600 transition-all transform hover:scale-105 active:scale-95">
          ÜRÜN KATALOĞUNU İNCELE
        </button>
      </header>

      {/* Bilgi Kartları */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 p-12">
        <div className="bg-white p-8 rounded-xl shadow-md border-t-8 border-[#0056b3] hover:shadow-2xl transition duration-300">
          <div className="text-[#0056b3] mb-6"><Droplet size={48} /></div>
          <h3 className="font-extrabold text-2xl mb-4">G. Kore Teknolojisi</h3>
          <p className="text-gray-600 leading-relaxed font-medium">Yüksek kir tutma kapasiteli orijinal Spun ve Sediment filtreler ile suyunuz hep saf kalsın.</p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-md border-t-8 border-[#0056b3] hover:shadow-2xl transition duration-300">
          <div className="text-[#0056b3] mb-6"><Droplet size={48} /></div>
          <h3 className="font-extrabold text-2xl mb-4">Global Lojistik</h3>
          <p className="text-gray-600 leading-relaxed font-medium">GTIP 8421.99 ve TAREKS onaylı süreçlerle profesyonel ithalat ve anında sevkiyat.</p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-md border-t-8 border-[#0056b3] hover:shadow-2xl transition duration-300">
          <div className="text-[#0056b3] mb-6"><Droplet size={48} /></div>
          <h3 className="font-extrabold text-2xl mb-4">B2B Özel Fiyat</h3>
          <p className="text-gray-600 leading-relaxed font-medium">Muhammet Gümüştaş A.Ş. güvencesiyle bayilere özel toptan fiyatlar ve sınırsız stok.</p>
        </div>
      </div>

      <footer className="bg-gray-900 text-white py-12 text-center mt-20 border-t-4 border-orange-500">
        <p className="font-bold text-lg mb-2">suaritmafiltresi.com</p>
        <p className="text-gray-400 text-sm">© 2026 Tüm Hakları Saklıdır. Bir Buzsu ve Muhammet Gümüştaş A.Ş. İştirakidir.</p>
      </footer>
    </div>
  );
}
