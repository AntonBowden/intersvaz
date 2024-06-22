import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Лицензии",
  description: "Лицензии",
  // other metadata
};

const licenses = [
  {
    id: 1,
    imageSrc: "/images/license/1.jpg",
  },
  {
    id: 2,
    imageSrc: "/images/license/2.jpg",
  },
  {
    id: 3,
    imageSrc: "/images/license/3.jpg",
  },
  {
    id: 4,
    imageSrc: "/images/license/4.jpg",
  },
  {
    id: 5,
    imageSrc: "/images/license/5.jpg",
    imageAlt: "",
  },
];

const LicensePage = () => {
  return (
    <>
      <section className="pb-[60px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  Лицензии
                </h2>

                <div>
                  <div className="mx-auto max-w-2xl p-4  sm:p-6  lg:max-w-7xl lg:px-8">
                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                      {licenses.map((product) => (
                        <div key={product.id}>
                          <Link href={product.imageSrc}>
                            <Image
                              width={300}
                              height={200}
                              src={product.imageSrc}
                              alt={product.imageAlt}
                              className="object-fill object-center hover:opacity-75"
                            />
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LicensePage;
