import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Банковская Гарантия",
  description: "Банковская Гарантия",
  // other metadata
};

const BankGuaranteePage = () => {
  return (
    <>
      <section className="pb-[60px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="mb-8 text-3xl font-bold leading-tight text-primary sm:text-4xl sm:leading-tight">
                  Банковская Гарантия
                </h2>
                <p className="mb-10 text-base font-medium leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  Уважаемые клиенты и посетители! Сообщаем Вам, что ООО
                  "ИнтерСвязь" на данный момент может обеспечить выпуск
                  банковских гарантий по 44-ФЗ, 223-ФЗ, 615-ФЗ до 50 млн. рублей
                  в СберБанке. Срок действия гарантии: от 1 дня до 37 месяцев,
                  при этом залог и поручительство не требуется. Для обеспечения
                  большего срока может понадобиться залог, поручительство и
                  анализ финансового положения компании.
                </p>

                <p className="mb-10 text-base font-medium leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  Средний срок принятия решения в банке — 2 часа. Понадобится
                  только паспорт, если вы уже клиент СберБизнеса.
                </p>
                <div className="mb-10 w-full overflow-hidden rounded">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                    <Image
                      src="/images/info/bank.jpg"
                      alt="image"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                </div>
                <p className="mb-10 text-base font-medium leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  Банковская гарантия— один из способов обеспечения исполнения
                  обязательств, при котором банк, иное кредитное учреждение,
                  страховая организация или иная коммерческая организация
                  (гарант) выдает по просьбе должника (принципала) письменное
                  обязательство уплатить кредитору (бенефициару) денежную сумму
                  при предоставлении им требования об её уплате.
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
        </div>
      </section>
    </>
  );
};

export default BankGuaranteePage;
