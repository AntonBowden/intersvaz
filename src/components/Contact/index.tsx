const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 ">
            <div
              className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Как нас найти
              </h2>

              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad5ccafe7aecfe4c6ac6f16a758ab1e18162a0a2965c06c0f6c69ea60d0d50e59&amp;source=constructor"
                width="100%"
                height="600"
                object-fit="contain"
              ></iframe>
              <div className="py-16 md:py-20 lg:py-20">
                <div className="max-w-[600px]">
                  <div className="mb-9">
                    <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                      Адрес:
                    </h3>
                    <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                      г.Рязань ,ул.Дзержинского д.14а ,3 этаж офисы №2 и №3
                    </p>
                  </div>
                  <div className="mb-9">
                    <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                      Телефон/Факс:
                    </h3>
                    <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                      (4912) 76-39-42, 99-37-07
                    </p>
                  </div>
                  <div className="mb-1">
                    <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                      E-mail:
                    </h3>
                    <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                      intersvaz@bk.ru
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
