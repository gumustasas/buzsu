import Link from 'next/link'

export default function Home() {
  const products = [
    {
      id: 1,
      name: "Buzsu 6 Aşamalı Filtre Seti",
      price: 1699,
      image: "https://via.placeholder.com/300x300"
    },
    {
      id: 2,
      name: "LG Chem 5 Filtre",
      price: 1299,
      image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db"
    }
  ]

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* HEADER */}
      <header className="bg-white p-3 flex justify-between items-center shadow">
        <h1 className="text-orange-500 text-xl font-bold">BUZSU</h1>

        <input
          className="border p-2 rounded w-1/2"
          placeholder="Ürün ara..."
        />

        <Link href="/cart">
          <div className="text-xl cursor-pointer">🛒</div>
        </Link>
      </header>

      {/* BANNER */}
      <div className="bg-orange-500 text-white text-center p-2 font-semibold">
        %10 İndirim Fırsatı!
      </div>

      {/* ÜRÜNLER */}
      <div className="grid grid-cols-2 gap-4 p-4 items-stretch">

        {products.map((p) => (
          <Link key={p.id} href={`/product/${p.id}`}>
            <div className="bg-white p-3 rounded shadow cursor-pointer flex flex-col justify-between h-full">

              {/* RESİM */}
              <img
                src={p.image}
                className="w-full h-40 object-cover rounded bg-gray-200"
              />

              {/* İÇERİK */}
              <div>
                <h3 className="mt-2 font-semibold min-h-[48px]">
                  {p.name}
                </h3>

                <p className="text-orange-600 font-bold">
                  {p.price} TL
                </p>
              </div>

              {/* BUTON */}
              <button className="bg-orange-500 text-white w-full mt-2 p-2 rounded">
                Sepete Ekle
              </button>

            </div>
          </Link>
        ))}

      </div>

    </div>
  )
}