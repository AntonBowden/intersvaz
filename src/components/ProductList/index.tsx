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

export default function ProductList({ products }) {
  return (
    <div className="mx-auto max-w-2xl p-4  sm:p-6  lg:max-w-7xl lg:px-8">
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
            <h3 className="mt-4 text-sm text-body-color dark:text-body-color-dark">
              {product.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
