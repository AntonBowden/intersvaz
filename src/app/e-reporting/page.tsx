import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Электронная отчетность",
  description: "Электронная отчетность",
  keywords:
    "ИнтерСвязь, Рязань, Электронная отчетность, Электронная подпись, СБИС, Электронные торги, Online кассы",
};

const EReportingPage = () => {
  return (
    <>
      <section className="pb-[60px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="mb-8 text-3xl font-bold leading-tight text-primary sm:text-4xl sm:leading-tight">
                  Электронная отчетность
                </h2>

                <div>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    {`ООО "ИнтерСвязь" представляет Вам программный комплекс
                    «СБИС++ Электронная отчетность», который позволяет
                    организовать электронный защищенный и юридически значимый
                    документооборот с различными контролирующими органами:`}
                  </p>
                  <ul className="mb-10 list-inside list-disc text-body-color dark:text-body-color-dark">
                    <li className="mb-2 text-base font-medium text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                      Федеральной налоговой службой
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                      Социальным фондом России (СФР)
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                      Федеральной службой государственной статистики
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                      Россалкогольрегулированием (ФСРАР)
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                      ЕГАИС
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                      Росприроднадзором
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                      Таможней
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                      Честным знаком (маркировка)
                    </li>
                  </ul>

                  <div className="mb-10 w-full overflow-hidden rounded">
                    <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                      <Image
                        src="/images/info/reporting.jpg"
                        alt="image"
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                  </div>

                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    «СБИС++ Электронная отчетность» - это универсальный
                    инструмент, позволяющий создать отчет, проконтролировать его
                    на наличие ошибок и затем уже отправить его по
                    телекоммуникационным каналам связи.
                  </p>

                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Система СБИС++ включает:
                  </p>

                  <ul className="mb-10 list-inside list-disc text-body-color dark:text-body-color-dark">
                    <li className="mb-2 text-base font-medium text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                      ЭТО ЕДИНАЯ СИСТЕМА, с помощью которой Вы подготовите и
                      сдадите бухгалтерские и налоговые отчеты в ФНС, документы
                      в СФР и Росстат и сформируете отчеты в ЕГАИС, ФСРАР,
                      Честный знак и др.
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                      ЭТО ИНТУИТИВНО ПОНЯТНАЯ СИСТЕМА, не требующая
                      дополнительного обучения. Удобный рабочий стол и календарь
                      налогоплательщика эффективно организуют Вашу работу. Все
                      отчеты имеют привычный вид. Подготовка и отправка отчетов
                      – это всего несколько шагов и пара минут, при этом система
                      сама подсказывает, какие шаги нужно делать. СБИС совместим
                      с любыми бухгалтерскими программами.
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                      ЭТО БОЛЬШЕ, ЧЕМ ОТЧЕТНОСТЬ. Используя систему, Вы
                      оперативно делаете сверку расчетов по налогам с ФНС и ПФ.
                      Получаете сведения из ЕГРЮЛ и информационные рассылки из
                      государственных органов.
                    </li>

                    <li className="mb-2 text-base font-medium text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                      ЭТО ВАШ ЛИЧНЫЙ КОНСУЛЬТАНТ. Система поможет заполнить
                      любой отчет и проверит его перед отправкой. У Вас всегда
                      под рукой все необходимые документы – законы, кодексы,
                      ПБУ, Инструкции и т. д.
                    </li>

                    <li className="mb-2 text-base font-medium text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                      ЭТО ВАШ ЛИЧНЫЙ АУДИТОР. Система проведет камеральную
                      проверку отчетов, оценит риск налоговой проверки, выполнит
                      финансовый анализ деятельности Вашего предприятия.
                    </li>

                    <li className="mb-2 text-base font-medium text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                      СИСТЕМА для ЭЛЕКТРОННОГО ДОКУМЕНТООБОРОТА. Система
                      позволит вам наладить электронный документооборот с вашими
                      контрагентами. Вы сможете контролировать внутреннюю
                      отчетность ваших филиалов и ускорить бизнес процессы в
                      вашей организации.
                    </li>
                  </ul>

                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    ООО ИнтерСвязь оказывает услуги по подключению к Програмному
                    Комплексу СБИС++ Электронная отчетность на основании
                    партнерского договора с законным Правообладателем программы{" "}
                    <Link
                      href="http://ereport.sbis.ru/"
                      className=" text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      {`ООО "Компания Тензор"`}
                    </Link>
                    . Оцените все возможности системы СБИС++. Это быстро, просто
                    и надежно.
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

export default EReportingPage;
