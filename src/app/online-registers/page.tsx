import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Online Кассы и ОФД",
  description: "Online Кассы и ОФД",
  // other metadata
};

const OnlineRegistersPage = () => {
  return (
    <>
      <section className="pb-[60px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  Online Кассы и ОФД
                </h2>

                <div>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    {`Согласно новой редакции Федерального Закона номер 54 все
                    предприниматели и организации будут должны перейти на новый
                    тип кассовых аппаратов ("онлайн-кассы"), которые отправляют
                    данные о продажах в Федеральную Налоговую Службу и на ОФД в
                    режиме онлайн. Работают с фискальными накопителями нового
                    образца «ФН-1.1М», который может принимать от онлайн-кассы
                    коды маркировки товаров, самостоятельно проверять
                    достоверность кода маркировки и передавать сведения с
                    полученными результатами в ГИС мт.`}
                  </p>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Для того, чтобы работать по-новому, организации или
                    индивидуальному предпринимателю необходимо:
                  </p>
                  <ul className="mb-10 list-inside list-disc text-body-color">
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Приобрести квалифицированную электронную подпись
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Приобрести онлайн-кассу
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Приобрести фискальный накопитель нового образца
                    </li>

                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Поставить ее на учет в ФНС
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Заключить договор с ОФД
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Настроить необходимое оборудование и программное
                      обеспечение для работы
                    </li>
                  </ul>

                  <div className="mb-10 w-full overflow-hidden rounded">
                    <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                      <Image
                        src="/images/blog/blog-details-02.jpg"
                        alt="image"
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                  </div>

                  <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Что мы можем предложить
                  </h3>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Поставить Вам ONLINE кассу на Ваш выбор:
                  </p>
                  <ul className="mb-10 list-inside list-disc text-body-color">
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Средство криптографической защиты информации
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Носитель Рутокен
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Настройка электронной подписи на Ваше рабочее место
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-8/12"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OnlineRegistersPage;
