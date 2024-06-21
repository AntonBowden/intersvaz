/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import Image from "next/image";
const products = [
  {
    id: 1,
    name: "Фискальный регистратор ATOЛ 30Ф",
    price: "$48",
    imageSrc: "/images/products/atol-30f.webp",
    imageAlt: "Фискальный регистратор ATOЛ 30Ф",
  },
  {
    id: 2,
    name: "Автономная касса АТОЛ 91Ф",
    price: "$35",
    imageSrc: "/images/products/atol-91f.webp",
    imageAlt: "Автономная касса АТОЛ 91Ф",
  },
  {
    id: 3,
    name: "Эвотор 7.2",
    price: "$89",
    imageSrc: "/images/products/evotor-72.webp",
    imageAlt: "Эвотор 7.2",
  },
  {
    id: 4,
    name: "Эвотор 7.3",
    price: "$35",
    imageSrc: "/images/products/evotor-73.webp",
    imageAlt: "Эвотор 7.3",
  },
  {
    id: 5,
    name: "Эвотор Power",
    price: "$35",
    imageSrc: "/images/products/evotor-power.webp",
    imageAlt: "Эвотор Power",
  },
];

export default function ProductList() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-blue-9">
                <Image
                  width={200}
                  height={200}
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="object-fill object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
