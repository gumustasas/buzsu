import React from 'react';

export default function SuAritmaSitesi() {
  const urunler = [
    {
      id: 1,
      isim: "Alkalix Premium 5'li Filtre Seti",
      ozellik: "NSF Sertifikalı - Yüksek pH",
      fiyat: "1.850 TL",
      eskiFiyat: "2.150 TL",
      rozet: "En Çok Satan",
      uyumluluk: "Tüm Kapalı Kasa Cihazlara Uyumludur"
    },
    {
      id: 2,
      isim: "Puretech Yakut 5'li Filtre Seti",
      ozellik: "NSF/ANSI Standartlı Kapalı Kasa",
      fiyat: "1.299 TL",
      eskiFiyat: "1.499 TL",
      rozet: "%15 İndirim",
      uyumluluk: "12 İnç İnline Bağlantı"
    },
    {
      id: 3,
      isim: "Alkalix Detoks Etkili 5'li Set",
      ozellik: "NSF Onaylı Antioksidan Filtre",
      fiyat: "1.950 TL",
      eskiFiyat: "2.250 TL",
      rozet: "Yeni Ürün",
      uyumluluk: "Mineral ve pH Dengeleyici"
    },
    {
      id: 4,
      isim: "Puretech Gold 5'li Filtre Seti",
      ozellik: "NSF Onaylı Ekonomik Seri",
      fiyat: "990 TL",
      eskiFiyat: "1.150 TL",
      rozet: "Fiyat/Performans",
      uyumluluk: "Standart 5 Aşama Değişim Seti"
    }
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb', fontFamily: 'sans-serif', color: '#111827' }}>
      {/* Header */}
      <header style={{ backgroundColor: 'white', borderBottom: '1px solid #e5e7eb', padding: '15px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#2563eb' }}>BUZSU</div>
          <div style={{ color: '#6b7280', fontWeight: '600' }}>0552 789 69 05</div>
        </div>
      </header>

      {/* Hero */}
      <section style={{ backgroundColor: '#2563eb', color: 'white', padding: '40px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '28px', marginBottom: '10px' }}>NSF Sertifikalı Su Arıtma Filtreleri</h1>
        <p style={{ fontSize: '16px', opacity: 0.9 }}>Buzsu güvencesiyle sağlıklı su. Orijinal Alkalix ve Puretech setleri.</p>
      </section>

      {/* Ürünler */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '30px 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          {urunler.map((urun) => (
            <div key={urun.id} style={{ backgroundColor: 'white', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '15px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ backgroundColor: '#f3f4f6', height: '150px', borderRadius: '4px', marginBottom: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9ca3af', fontWeight: 'bold' }}>
                {urun.rozet}
              </div>
              <p style={{ fontSize: '10px', color: '#2563eb', fontWeight: 'bold', margin: '0' }}>NSF ONAYLI</p>
              <h3 style={{ fontSize: '18px', fontWeight: 'bold', margin: '10px 0', height: '45px', overflow: 'hidden' }}>{urun.isim}</h3>
              <p style={{ fontSize: '13px', color: '#6b7280', marginBottom: '15px' }}>{urun.uyumluluk}</p>
              <div style={{ marginTop: 'auto' }}>
                <div style={{ marginBottom: '15px' }}>
                  <span style={{ fontSize: '22px', fontWeight: '800', color: '#1d4ed8', marginRight: '10px' }}>{urun.fiyat}</span>
                  <span style={{ fontSize: '14px', color: '#9ca3af', textDecoration: 'line-through' }}>{urun.eskiFiyat}</span>
                </div>
                <button style={{ width: '100%', backgroundColor: '#2563eb', color: 'white', border: 'none', padding: '12px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>
                  Hemen İncele
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Bilgi */}
      <footer style={{ backgroundColor: '#f3f4f6', padding: '40px 20px', textAlign: 'center', marginTop: '40px' }}>
        <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>Neden NSF Sertifikalı Filtreler?</p>
        <p style={{ fontSize: '14px', color: '#4b5563', maxWidth: '600px', margin: '0 auto' }}>
          Sağlıklı yaşam için pH dengesi yüksek ve mineral zengini su önemlidir. Buzsu güvencesiyle 8421.99 GTIP kodlu orijinal parçalar.
        </p>
        <p style={{ fontSize: '12px', color: '#9ca3af', marginTop: '20px' }}>© 2026 Buzsu Arıtma - Muhammet Gümüştaş A.Ş. İştirakidir.</p>
      </footer>
    </div>
  );
}
