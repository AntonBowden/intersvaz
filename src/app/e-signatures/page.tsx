import Image from "next/image";
import Order from "@/components/Order";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Электронные Подписи",
  description: "Электронные Подписи для физических лиц",
  keywords:
    "ИнтерСвязь, Рязань, Электронная подпись, СБИС, Электронные торги, Online кассы",
};

const ESignaturesPage = () => {
  return (
    <>
      <section className="pb-[60px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="mb-8 text-3xl font-bold leading-tight text-primary sm:text-4xl sm:leading-tight">
                  Электронные подписи для физических лиц
                </h2>

                <div>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Для получения электронной подписи потребуется:
                  </p>
                  <ul className="mb-10 list-inside list-disc text-body-color dark:text-body-color-dark">
                    <li className="mb-2 text-base font-medium text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                      Паспорт Гражданина, желающего получить электронную подпись
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                      СНИЛС
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                      email и номер телефона
                    </li>
                  </ul>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    * Выдача осуществляется на защищенный носитель
                  </p>
                  <div className="mb-10 w-full overflow-hidden rounded">
                    <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                      <Image
                        src="/images/info/signature.webp"
                        alt="image"
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                  </div>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    При необходимости дополнительно приобретаются:
                  </p>
                  <ul className="mb-10 list-inside list-disc text-body-color dark:text-body-color-dark">
                    <li className="mb-2 text-base font-medium text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                      Средство криптографической защиты информации
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                      Носитель Рутокен
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                      Настройка электронной подписи на Ваше рабочее место
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-8/12">
              <Order />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ESignaturesPage;
