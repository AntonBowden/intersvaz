export default function TableTwo({
  heading,
  subheading,
  columnOneHeading,
  columnTwoHeading,
  data,
}) {
  return (
    <div className="mt-10">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          {heading && (
            <h1 className="text-base font-semibold leading-6 text-gray-900">
              {heading}
            </h1>
          )}
          <p className="mt-2 text-sm text-gray-700">{subheading}</p>
        </div>
      </div>
      <div className="mt-4 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-blue-100">
                  <tr>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      {columnOneHeading}
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pr-8 text-right text-sm font-semibold text-gray-900"
                    >
                      {columnTwoHeading}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {data.map((item) => (
                    <tr key={item.item}>
                      <td className="whitespace-nowrap py-4 pl-4 text-sm font-medium text-gray-900 sm:pl-6">
                        {item.item}
                      </td>
                      <td className="whitespace-nowrap py-4 pr-8 text-right text-sm text-gray-500">
                        {item.price}
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
