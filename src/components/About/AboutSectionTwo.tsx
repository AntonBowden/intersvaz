import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[2/3] max-w-[600px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-building-small.jpg"
                alt="about image"
                fill
                className="drop-shadow-three dark:drop-shadow-none"
              />
              {/* <Image
                src="/images/about/about-image-2.svg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/about-image-2-dark.svg"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              /> */}
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Дипломированные специалисты
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  {`Наши специалисты имеют соответствующие дипломы о профессиональной подготове и переподготовке. ООО "ИнтерСвязь" является лицензированной точкой выдаче УКЭП (Усиленной Квалифицированной Электронной Подписи) по всей России. Являемся партнером ООО "Компания Тензор" https://sbis.ru/contacts/62-ryazanskaya-oblast?tab=clients, разработчиком системы СБИС, включенной в реестр доверенных операторов ЭДО. Программное обеспечение Сбис зарегестрировано в реестре Российского ПО Рег.№ 332 от 08.04.2016 года. https://sbis.ru/about/license. Кроме того являемся официальными партнёрами удостоверяющего центра IT COM https://uc-itcom.ru/sertifikaty-i-licenzii и СБЕРБАНКА России.`}
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Специализация
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  {`ООО "ИнтерСвязь" специализируется на внедрении и обслуживании высокотехнологичного программного обеспечения CБИС++ Электронная отчетность и документооборот. Работаем с ведущими торговыми площадками страны, в том числе и для гособоронзаказа АСТ ГОЗ. Проводим регистрацию на торговых площадках, помогаем в введении государственных закупок и иных торговых процедур. Осуществляем разработку решений в области криптографии, настройку работы с СКЗИ. Помогаем в решениях вопросов по работе на гос площадках для отдельных видов бизеса: Маркировка, ЕГАИС, Меркурий, ГИИС ДМДК и пр. Поможем наладить Ваш внутренний и внешний электронный документооборот. Работаем с контрольно-кассавой техникой в рамках 54-ФЗ , производим настройку и регистрацию в государственных органах.`}
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Наши клиенты
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  {`По данным направлениям мы обслуживаем более 4000 постоянных клиентов, среди которых есть государственные и муниципальные учреждения, заводы, а также большое количество предприятий малого и среднего бизнеса. При наличии необходимых документов, мы можем выдать Вам электронную подпись в течение часа.`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
