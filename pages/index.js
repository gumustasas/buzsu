import Link from "next/link";

export default function Home() {
  const products = [
    {
      id: 1,
      name: "Buzsu 6 Aşamalı Filtre Seti",
      price: 1699,
      image: "https://picsum.photos/400/300?random=11",
    },
    {
      id: 2,
      name: "LG Chem 5 Filtre",
      price: 1299,
      image: "https://picsum.photos/400/300?random=12",
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* HEADER */}
      <header className="bg-white p-4 shadow flex justify-between items-center">
        <h1 className="text-orange-500 text-2xl font-bold">BUZSU</h1>

        <input
          className="border p-2 rounded w-1/2"
          placeholder="Ürün ara..."
        />

        <div>🛒</div>
      </header>

      {/* BANNER */}
      <div className="bg-orange-500 text-white text-center py-3 font-semibold">
        %10 İndirim Fırsatı!
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 gap-4 p-4">

        {products.map((p) => (
          <Link key={p.id} href={`/product/${p.id}`}>

            <div className="bg-white rounded shadow flex flex-col h-full">

              {/* RESİM ALANI */}
              <div className="h-40 flex items-center justify-center bg-gray-100 rounded-t">
                <img
                  src={p.image}
                  className="max-h-full object-contain"
                />
              </div>

              {/* İÇERİK */}
              <div className="p-3 flex flex-col flex-grow">

                <h2 className="font-bold min-h-[48px]">
                  {p.name}
                </h2>

                <p className="text-orange-500 font-bold text-lg mt-2">
                  {p.price} TL
                </p>

                {/* BUTON HER ZAMAN ALTA SABİT */}
                <button className="bg-orange-500 text-white w-full py-2 mt-auto rounded">
                  Sepete Ekle
                </button>

              </div>

            </div>

          </Link>
        ))}

      </div>
    </div>
  );
}