import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Скачать",
  description: "Скачать програмное обеспечение",
  // other metadata
};

const DownloadPage = () => {
  return (
    <>
      <section className="min-h-[800px] pb-[60px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                Скачать
              </h2>

              <p className="mb-10 text-base font-medium leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                Уважаемые посетители и гости нашего сайта в данном разделе Вы
                можете скачать:
              </p>

              <ul className="mb-10 list-inside list-disc text-body-color dark:text-body-color-dark">
                <li className="mb-2 text-base font-medium text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                  <Link href="https://sbis.ru/download?tab=ereport&innerTab=ereport25">
                    Продукты СБИС
                  </Link>
                </li>

                <li className="mb-2 text-base font-medium text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                  <Link href="https://cryptopro.ru/products/csp">
                    Средства Криптозащиты КриптоПро 4.0 и КриптоПро 5.0
                  </Link>
                </li>
                <li className="mb-2 text-base font-medium text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                  <Link href="https://anydesk.com/ru/downloads">
                    Программы удаленной технической поддержки AnyDesk
                  </Link>
                </li>
                <li className="mb-2 text-base font-medium text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                  <Link href="https://sbis.ru/download?tab=support&innerTab=default">
                    СБИС удалённый помощник
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DownloadPage;
