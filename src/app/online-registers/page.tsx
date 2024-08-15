import Image from "next/image";
import ProductList from "@/components/ProductList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Online Кассы и ОФД",
  description: "Online Кассы и ОФД",
  keywords:
    "ИнтерСвязь, Рязань, Электронная подпись, СБИС, Электронные торги, Online кассы",
};

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

const OnlineRegistersPage = () => {
  return (
    <>
      <section className="pb-[60px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="mb-8 text-3xl font-bold leading-tight text-primary sm:text-4xl sm:leading-tight">
                  Online Кассы и ОФД
                </h2>

                <div>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    {`Согласно новой редакции Федерального Закона номер 54 все
                    предприниматели и организации будут должны перейти на новый
                    тип кассовых аппаратов ("онлайн-кассы"), которые отправляют
                    данные о продажах в Федеральную Налоговую Службу и на ОФД в
                    режиме онлайн. Работают с фискальными накопителями нового
                    образца, который может принимать от онлайн-кассы
                    коды маркировки товаров, самостоятельно проверять
                    достоверность кода маркировки и передавать сведения с
                    полученными результатами в ГИС мт.`}
                  </p>

                  <div className="relative mb-10 w-full overflow-hidden rounded">
                    <Image
                      src="/images/info/online-register.jpg"
                      alt="image"
                      width="1000"
                      height="800"
                      className="object-fit object-center"
                    />
                  </div>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Для того, чтобы работать по-новому, организации или
                    индивидуальному предпринимателю необходимо:
                  </p>
                  <ul className="mb-10 list-inside list-disc text-body-color dark:text-body-color-dark">
                    <li className="mb-2 text-base font-medium text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                      Приобрести квалифицированную электронную подпись
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                      Приобрести онлайн-кассу
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                      Приобрести фискальный накопитель нового образца
                    </li>

                    <li className="mb-2 text-base font-medium text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                      Поставить ее на учет в ФНС
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                      Заключить договор с ОФД
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                      Настроить необходимое оборудование и программное
                      обеспечение для работы
                    </li>
                  </ul>
                  <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Что мы можем предложить
                  </h3>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    1. Поставить Вам Online кассу на Ваш выбор:
                  </p>
                  <ProductList products={products} />

                  <p className="my-10 text-base font-medium leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    2. Поставить и настроить квалифицированную цифровую подпись
                    и средства криптографической защиты информации.
                  </p>

                  <p className="my-10 text-base font-medium leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    3. Подключить к оператору Фискальных Данных (ОФД).
                  </p>
                  <div className="relative mb-10 w-full overflow-hidden rounded">
                    <Image
                      src="/images/info/ofd.jpg"
                      alt="image"
                      width="1000"
                      height="800"
                      className="object-fit object-center"
                    />
                  </div>
                  <p className="my-10 text-base font-medium leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    4. Настроим Online кассу.
                  </p>
                  <p className="my-10 text-base font-medium leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    5. При необходимости подключить кассу к товароучетной
                    системе СБИС РОЗНИЦА
                  </p>
                  <p className="my-10 text-base font-medium leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    6. Если Вы занимаетесь продажей алкогольной продукции:
                  </p>
                  <p className="my-10 text-base font-medium leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    a. Поможем настроить УТМ модуль, если Ваша касса автономная
                  </p>
                  <p className="my-10 text-base font-medium leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    б. Подключим к системе ЕГАИС через наш портал, если у Вас
                    фискальный регистратор
                  </p>

                  <div className="relative mb-10 w-full overflow-hidden rounded">
                    <Image
                      src="/images/info/egais.png"
                      alt="image"
                      width="1000"
                      height="800"
                      className="object-fit object-center"
                    />
                  </div>
                  <p className="my-10 text-base font-medium leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    в. Поставим и настроим сканер штрикода
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OnlineRegistersPage;
