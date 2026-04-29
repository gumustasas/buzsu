import { useRouter } from 'next/router'

export default function Product() {
  const router = useRouter()
  const { id } = router.query

  const products = [
    {
      id: 1,
      name: "Buzsu 6 Aşamalı Filtre Seti",
      price: 1699,
      image: "https://images.unsplash.com/photo-1581091215367-59ab6b7b9d7b",
      rating: 4.5,
      reviews: 12,
      cargo: "Kargo Bedava",
      description: "Yüksek performanslı filtre sistemi."
    },
    {
      id: 2,
      name: "LG Chem 5 Filtre",
      price: 1299,
      image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db",
      rating: 4.3,
      reviews: 8,
      cargo: "Kargo Bedava",
      description: "Kaliteli LG Chem filtre seti."
    }
  ]

  const product = products.find(p => p.id == id)

  if (!product) {
    return <div className="p-4">Yükleniyor...</div>
  }

  return (
    <div className="bg-gray-100 min-h-screen p-4">

      {/* RESİM */}
      <img
        src={product.image}
        className="w-full h-64 object-cover rounded bg-gray-200"
        onError={(e) => {
          e.currentTarget.src =
            "https://images.unsplash.com/photo-1581091215367-59ab6b7b9d7b"
        }}
      />

      {/* BAŞLIK */}
      <h1 className="text-xl font-bold mt-3">
        {product.name}
      </h1>

      {/* PUAN */}
      <div className="text-yellow-500 mt-1">
        ⭐ {product.rating} ({product.reviews})
      </div>

      {/* FİYAT */}
      <p className="text-orange-600 text-xl font-bold mt-2">
        {product.price} TL
      </p>

      {/* KARGO */}
      <p className="text-green-600">
        {product.cargo}
      </p>

      {/* BUTON */}
      <button className="bg-orange-500 text-white w-full mt-4 p-3 rounded">
        Sepete Ekle
      </button>

      {/* AÇIKLAMA */}
      <h2 className="mt-4 font-bold">Ürün Açıklaması</h2>
      <p>{product.description}</p>

    </div>
  )
}