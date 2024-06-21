import TableThree from "@/components/Table/TableThree";
import TableTwo from "@/components/Table/TableTwo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Цены",
  description: "Цены",
  // other metadata
};

const corporate = [
  {
    item: "1-5 абонентов",
    price: "10000",
  },
  {
    item: "5-9 абоненов",
    price: "16000",
  },
  {
    item: "10-25 абоненов",
    price: "30000",
  },
  {
    item: "26-50 абоненов",
    price: "40000",
  },
  {
    item: "50-100 абоненов",
    price: "70000",
  },
];

const electronic = [
  {
    item: "200",
    price: "1500",
  },
  {
    item: "500",
    price: "3300",
  },
  {
    item: "1200",
    price: "6000",
  },
  {
    item: "3000",
    price: "13500",
  },
  {
    item: "5000",
    price: "20000",
  },
];

const international = [
  {
    item: "Росприроднадзор (отчётность в Росприроднадзор)",
    price: "1200",
  },
  {
    item: "ФСРАР (алкогольные декларации)",
    price: "2000",
  },
  {
    item: "ЕГАИС (крепкий алкоголь, вино, пиво)",
    price: "2200",
  },
  {
    item: "МЕРКУРИЙ (мясо, рыба, птица, молочка)",
    price: "2200",
  },
  {
    item: "МАРКИРОВКА (текстиль, табак, шины, мед. препараты)",
    price: "2200",
  },
  {
    item: "МВД (миграционная служба)",
    price: "7000",
  },
];

const sbis = [
  { item: "15 месяцев", price: "3000" },
  { item: "36 месяцев", price: "6000" },
];

const cryptoPro = [
  { item: "Годовая лицензия", price: "2500" },
  { item: "Бессрочная лицензия", price: "3500" },
];

const cryptoArm = [
  { item: "Годовая лицензия", price: "2500" },
  { item: "Бессрочная лицензия", price: "3500" },
];

const extra = [
  {
    item: "Настройка и установка электронной подписи на одном Вашем компьютере",
    price: "1500",
  },
  { item: "Регистрация и настройка рабочего места на порталах", price: "1500" },
  { item: "Выезд специалиста (по договорённости)", price: "1800" },
];

const tokens = [
  { item: "Rutoken Lite", price: "1800" },
  { item: "Rutoken 3.0", price: "2500" },
];

const PricingPage = () => {
  return (
    <>
      <section className="pb-[60px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="mb-8 text-3xl font-bold leading-tight text-primary sm:text-4xl sm:leading-tight">
                  Услуги и Цены
                </h2>

                <TableThree />
                <TableTwo
                  heading=""
                  subheading='Подключение к тарифу "Корпоративная лицензия"'
                  columnOneHeading="Количество"
                  columnTwoHeading="Цена"
                  data={corporate}
                />
                <TableTwo
                  heading=""
                  subheading='Подключение и стоимость услуг по направлению "Электронный документооборот" 62 - Рязанская область.'
                  columnOneHeading="Документов в год"
                  columnTwoHeading="Цена для одной компании"
                  data={electronic}
                />

                <TableTwo
                  heading=""
                  subheading="Подключение к товарным системам (Пятёрочка, Магнит и прочие)"
                  columnOneHeading="Обмен с госсистемами:"
                  columnTwoHeading="Цена"
                  data={international}
                />

                <TableTwo
                  heading=""
                  subheading="Подключение к оператору фискальных данных СБИС"
                  columnOneHeading="Срок"
                  columnTwoHeading="Цена"
                  data={sbis}
                />

                <TableTwo
                  heading="Дополнительное программое обеспечение:"
                  subheading="Лицензия на ПО КриптоПро CSP 4.0 и КриптоПро CSP 5.0"
                  columnOneHeading="Срок"
                  columnTwoHeading="Цена"
                  data={cryptoPro}
                />
                <TableTwo
                  heading=""
                  subheading="ПО КриптоАРМ Стандарт"
                  columnOneHeading="Срок"
                  columnTwoHeading="Цена"
                  data={cryptoArm}
                />

                <TableTwo
                  heading="Дополнительные услуги"
                  subheading=""
                  columnOneHeading="Услуга"
                  columnTwoHeading="Цена"
                  data={extra}
                />
                <TableTwo
                  heading=""
                  subheading="В наличии всегда есть защищенные носители Rutoken и Rutoken 3.0"
                  columnOneHeading="Наименование"
                  columnTwoHeading="Цена"
                  data={tokens}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingPage;
