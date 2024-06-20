import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Электронные Торги",
  description: "Электронные Торги",
  // other metadata
};

const EBiddingPage = () => {
  return (
    <>
      <section className="pb-[60px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="mb-8 text-3xl font-bold leading-tight text-primary dark:text-primary sm:text-4xl sm:leading-tight">
                  Электронные Торги
                </h2>

                <div>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Предлагаем Вам получить Электронную подпись для участия в
                    аукционах на электронных торговых площадках. Мы работаем
                    только с лучшими и проверенными Удостоверяющими центрами
                    страны, осуществляем свою деятельность на основании лицензий
                    ФСБ. Обладаем достаточными техническими и трудовыми
                    ресурсами для выдачи и обслуживания наших электронных
                    подписей. Электронная подпись, выданная ООО «ИнтерСвязь» -
                    Ваше эффективное участие в аукционах на электронных торговых
                    площадках:
                  </p>
                  <h3 className="font-xl mb-4 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    1. Федеральные торговые площадки:
                  </h3>
                  <ul className="mb-10 list-inside list-disc text-body-color dark:text-body-color-dark">
                    <li className="mb-2 text-base font-medium text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                      Сбербанк-АСТ (sberbank-ast.ru)
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                      Росэлторг (roseltorg.ru)
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                      РТС-тендер (rts-tender.ru)
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                      Национальная электронная площадка (etp-ets.ru)
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                      Заказ РФ (zakazrf.ru)
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                      РАД Госзакупки (lot-online.ru)
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                      ЭТП ГПБ Электронная торговая площадка Газпромбанка
                      (etpgpb.ru)
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                      ЭТП ТЭК-Торг (tektorg.ru)
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
                    2. Группа площадок, b2b-center.ru –ОАО «Центр развития
                    экономики»
                  </h3>

                  <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    3. ЭЦП для электронных площадок, относящиеся к Ассоциации
                    Электронных Торговых Площадок http://aetp.ru/
                  </h3>

                  <h3 className="font-xl mb-4 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    4. Торговые площадки по банкротству:
                  </h3>

                  <ul className="mb-10 list-inside list-disc text-body-color dark:text-body-color-dark">
                    <li className="mb-2 text-base font-medium text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                      Межрегиональная Электронная Торговая Система (МЭТС).
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                      Центр дистанционных торгов (ЦДТ).
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                      Российский аукционный дом (РАД).
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                      Альфалот.
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                      Новые информационные сервисы (НИС).
                    </li>
                  </ul>

                  <h3 className="font-xl mb-4 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    5. Заказ электронной подписи для любой отдельной торговой
                    площадки на Ваш выбор:
                  </h3>

                  <ul className="mb-10 list-inside list-disc text-body-color dark:text-body-color-dark">
                    <li className="mb-2 text-base font-medium text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                      Система информационной поддержки конкурентных закупок "ТЗС
                      Электра"
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                      Ю-Тендер
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                      Сибирская Торговая Площадка
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                      Центр Реализации
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                      Система закупок продукции для государственных и
                      муниципальных нужд Ростовской области "Рефери".
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                      Межрегиональная электронная торговая система (МЭТС)
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                      Мета-инвест
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                      Площадка Eltrade
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                      Площадка АктивТорг
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                      Площадка UralBidIn
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                      Электронная торговая площадка Премьер
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                      Единая Торговая Электронная Площадка
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                      Электронная площадка Бизнес Лот
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                      Аукционы Сибири
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                      Аукционный Тендерный Центр уточняйте цену у наших
                      менеджеров
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                      I-APEX
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                      RUSSIA Online
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                      Центр Дистанционных Торгов
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                      А-коста
                    </li>
                  </ul>

                  <p className="mb-4 text-base font-medium leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Возможность получения банковской гарантии на сумму до 50
                    миллионов рублей в этот же день.
                  </p>

                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Для участия в электронных аукционах и торгах Вы можете
                    получить сертификат электронной подписи, обратившись в ООО
                    «ИнтерСвязь» по телефонам (4912) 76-39-42, (4912) 99-37-07
                    или по электронной почте: intersvaz@bk.ru
                  </p>

                  <h3 className="font-xl mb-4 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Преимущества электронных аукционов:
                  </h3>
                  <ul className="mb-10 list-inside list-disc text-body-color dark:text-body-color-dark">
                    <li className="mb-2 text-base font-medium text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                      Короткие сроки проведения процедур
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                      Прозрачность и открытость процесса закупок
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                      Честная конкуренция, исключающая неценовые методы ведения
                      борьбы
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                      Равные права всех поставщиков товаров, работ и услуг
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                      Участие в торгах возможно из любой точки страны, не выходя
                      из своего офиса
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                      Высокий уровень безопасности и защиты, применение средств
                      электронной цифровой подписи
                    </li>
                  </ul>

                  <h3 className="font-xl mb-4 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Для организации рабочего места необходимо:
                  </h3>
                  <ul className="mb-10 list-inside list-disc text-body-color dark:text-body-color-dark">
                    <li className="mb-2 text-base font-medium text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                      Сертификат ключа подписи (стоимость определяется в
                      зависимости от Группы и политик ЭТП)
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                      Сертифицированный USB-носитель (rutoken, rutoken 3.0,
                      jacarta)
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                      Средства криптографической защиты информации
                      «КриптоПроCSP»
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                      Регистрация и настройки на конкретных площадках
                    </li>
                  </ul>

                  <h3 className="font-xl mb-4 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Сопровождение торгов
                  </h3>
                  <p className="mb-4 text-base font-medium leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Сопровождение электронных торгов - это услуги по организации
                    участия в аукционах, тендерах, конкурсах, начиная моментом
                    поиска тендера и заканчивая моментом заключения контракта.
                  </p>
                  <p className="mb-4 text-base font-medium leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Мы поможем Вам "от А до Я":
                  </p>
                  <ul className="mb-10 list-inside list-disc text-body-color dark:text-body-color-dark">
                    <li className="mb-2 text-base font-medium text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                      найдем подходящий электронный аукцион
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                      выдадим электронную подпись и зарегистрируем Вас на
                      торговой площадке.
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                      поможем составить конкурсную документацию, подготовим
                      заявку на участие в аукционе и разместим ее на электронной
                      торговой площадке, проконтролируем, что она подана
                      корректно.Произведем обеспечение заявки для участия в
                      торгах.
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                      Проведем вместе с Вами электронные торги. Поможем
                      корректно подать ценовые предложения в ходе электронного
                      аукциона и научим работать в аукционном зале ЭТП.
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color dark:text-body-color-dark sm:text-lg lg:text-base xl:text-lg">
                      Поможем подписать контракт на ЭТП, разместим документы об
                      обеспечении, составим протокол разногласий.
                    </li>
                  </ul>
                  <p className="mb-0 text-base font-medium leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Цены на наши услуги Вас приятно удивят.
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

export default EBiddingPage;
