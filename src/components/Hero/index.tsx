import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="bg-radial-light dark:bg-radial-dark dark:from-blue-1 dark:to-blue-4 from-blue-8  to-blue-6 relative z-10 overflow-hidden via-slate-100 pb-16 pt-[120px] dark:via-slate-900 md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  {`Электронная подпись, СБИС, Электронные торги, Online кассы`}
                </h1>
                <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                  {`Электронная подпись/ СБИС/ Электронные торги/ Online кассы`}
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="/order"
                    className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    Оставить заявку
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20 dark:bg-[linear-gradient(to_right,#002159_1px,transparent_1px),linear-gradient(to_bottom,#002159_1px,transparent_1px)]"></div>
      </section>
    </>
  );
};

export default Hero;
