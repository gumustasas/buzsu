import { useRouter } from "next/router";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const products = [
    {
      id: 1,
      name: "Buzsu 6 Aşamalı Filtre Seti",
      price: 1699,
      image: "https://picsum.photos/600/400?random=1",
      description: "Yüksek performanslı filtre sistemi.",
    },
    {
      id: 2,
      name: "LG Chem 5 Filtre",
      price: 1299,
      image: "https://picsum.photos/600/400?random=2",
      description: "Uzun ömürlü kaliteli filtre.",
    }
  ];

  const product = products.find(p => p.id == id);

  if (!product) return <div className="p-4">Yükleniyor...</div>;

  return (
    <div className="bg-gray-100 min-h-screen p-4">

      <img
        src={product.image}
        className="w-full rounded"
      />

      <h1 className="text-xl font-bold mt-3">
        {product.name}
      </h1>

      <p className="text-orange-500 text-2xl font-bold">
        {product.price} TL
      </p>

      <button className="bg-orange-500 text-white w-full py-3 rounded mt-3">
        Sepete Ekle
      </button>

      <h2 className="mt-4 font-bold">
        Ürün Açıklaması
      </h2>

      <p>{product.description}</p>

    </div>
  );
}