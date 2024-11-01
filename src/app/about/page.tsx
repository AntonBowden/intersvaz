import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ИнтерСвязь | О нас",
  description: "ИнтерСвязь | О нас",
  keywords:
    "ИнтерСвязь, Рязань, Электронная подпись, СБИС, Электронные торги, Online кассы",
};

const AboutPage = () => {
  return (
    <>
      <section className="pb-[60px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="mb-8 text-3xl font-bold leading-tight text-primary sm:text-4xl sm:leading-tight">
                  О нас
                </h2>

                <div>
                  <p className="mb-10 text-base leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    {`ООО "ИнтерСвязь" работает на рынке IT технологий начиная с
                    2008 года.`}{" "}
                    <Link
                      href="/license"
                      className="underline hover:text-primary"
                    >
                      Имеет все необходимые лицензии ФСБ
                    </Link>{" "}
                    и проходит своевременные проверки на осуществление
                    разработки, производства, распространения шифровальных
                    (криптографических) средств, защищённых информационных и
                    телекоммуникационных систем, выполнения работ, оказания
                    услуг в области шифрования информации, а также технического
                    обслуживания.
                  </p>

                  <div className="mb-10 w-full overflow-hidden rounded">
                    <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                      <Image
                        src="/images/info/about.jpg"
                        alt="image"
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                  </div>

                  <p className="mb-10 text-base  leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    {`Наши специалисты имеют соответствующие дипломы о
                    профессиональной подготовке и переподготовке. ООО
                    "ИнтерСвязь" является лицензированной точкой выдачи УКЭП
                    (Усиленной Квалифицированной Электронной Подписи) по всей
                    России. Являемся партнером ООО "Компания Тензор"
                    разработчиком системы СБИС, включенной в реестр доверенных
                    операторов ЭДО. Программное обеспечение`}{" "}
                    <Link
                      href="https://sbis.ru/about/license"
                      className="underline hover:text-primary"
                    >
                      СБИС
                    </Link>
                    {` `}
                    зарегистрировано в реестре программ для ЭВМ No2015610086 от
                    12.01.2015 года. Кроме того являемся официальными партнёрами
                    удостоверяющего центра{" "}
                    <Link
                      href="https://uc-itcom.ru/sertifikaty-i-licenzii"
                      className="underline hover:text-primary"
                    >
                      IT COM
                    </Link>
                    {` `}и СберБанка России.
                  </p>

                  <p className="mb-10 text-base leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    {`ООО "ИнтерСвязь" специализируется на внедрении и
                    обслуживании высокотехнологичного программного обеспечения
                    CБИС++ Электронная отчетность и документооборот. Помогаем в
                    решениях вопросов по работе на гос площадках для отдельных
                    видов бизеса: Маркировка, ЕГАИС, Меркурий, ГИИС ДМДК и пр.
                    Проводим регистрацию и работу на торговых площадках,
                    помогаем с ведением государственных закупок и иных торговых
                    процедур. Работаем с контрольно-кассовой техникой в рамках
                    54-ФЗ , производим настройку и регистрацию в государственных
                    органах. Осуществляем разработку решений в области
                    криптографии, настройку работы с СКЗИ. Поможем наладить Ваш
                    внутренний и внешний электронный документооборот.`}
                  </p>

                  <p className="mb-10 text-base leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Среди наших клиентов есть государственные и муниципальные
                    учреждения, заводы, КНП, а также большое количество
                    предприятий малого и среднего бизнеса.
                  </p>

                  <p className="mb-10 text-base leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Будем рады видеть среди них и Вас!
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

export default AboutPage;
