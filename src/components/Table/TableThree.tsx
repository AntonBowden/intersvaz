const licences = [
  {
    name: "ИП",
    light: "3300",
    base: "4300",
  },
  {
    name: "УСН",
    light: "4300",
    base: "6000",
  },
  {
    name: "ОСНО",
    light: "5900",
    base: "8000",
  },
  {
    name: "БЮДЖЕТ",
    light: "4300",
    base: "6000",
  },
];

export default function TableThree() {
  return (
    <div className="">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Основные направления:
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            {`Подключение и стоимость услуг по направлению "Электронная
            отчетность" 62 - Рязанская область.`}
          </p>
        </div>
      </div>
      <div className="mt-4 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-blue-9">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Лицензия
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                    >
                      Легкая
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pr-8 text-right text-sm font-semibold text-gray-900"
                    >
                      Базовая
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {licences.map((licence) => (
                    <tr key={licence.name}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {licence.name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-500">
                        {licence.light}
                      </td>
                      <td className="whitespace-nowrap py-4 pr-8 text-right text-sm text-gray-500">
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
