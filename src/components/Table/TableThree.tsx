const licences = [
  {
    name: "ИП",
    light: "4000",
    base: "5700",
  },
  {
    name: "УСН",
    light: "5500",
    base: "7300",
  },
  {
    name: "ОСНО",
    light: "7400",
    base: "10800",
  },
  {
    name: "БЮДЖЕТ",
    light: "5500",
    base: "6500",
  },
];

export default function TableThree() {
  return (
    <div className="">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6  text-body-color dark:text-body-color-dark">
            Основные направления:
          </h1>
          <p className="mt-2 text-sm  text-body-color dark:text-body-color-dark">
            {`Подключение и стоимость услуг по направлению "Электронная
            отчетность" 62 - Рязанская область.`}
          </p>
        </div>
      </div>
      <div className="mt-4 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300 dark:divide-gray-900">
                <thead className="bg-blue-9 dark:bg-blue-2">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 dark:text-white sm:pl-6"
                    >
                      Лицензия
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900 dark:text-white"
                    >
                      Легкая
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pr-8 text-right text-sm font-semibold text-gray-900 dark:text-white"
                    >
                      Базовая
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white  dark:divide-gray-800 dark:bg-dark">
                  {licences.map((licence) => (
                    <tr key={licence.name}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium  text-body-color dark:text-body-color-dark sm:pl-6">
                        {licence.name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-center text-sm  text-body-color dark:text-body-color-dark">
                        {licence.light}
                      </td>
                      <td className="whitespace-nowrap py-4 pr-8 text-right text-sm  text-body-color dark:text-body-color-dark">
                        {licence.base}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
