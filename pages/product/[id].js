import { useRouter } from 'next/router'
import { products } from '../../lib/data'

export default function Product() {
  const router = useRouter()
  const { id } = router.query

  // Ürünü bul
  const product = products.find(p => p.id == id)

  // Sayfa ilk açıldığında id gelmeyebilir
  if (!product) {
    return <div className="p-4">Yükleniyor...</div>
  }

  return (
    <div className="bg-gray-100 min-h-screen p-4">

      {/* ÜRÜN GÖRSEL */}
      <img
        src={product.image}
        className="w-full rounded"
      />

      {/* ÜRÜN ADI */}
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