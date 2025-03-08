import React from 'react';

const Table = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead className="ltr:text-left rtl:text-right">
          <tr>
            <th className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">ID</th>
            <th className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">Nome</th>
            <th className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">Categoria</th>
            <th className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">Quantidade</th>
            <th className="px-4 py-2 font-medium whitespace-nowrap"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((item) => (
            <tr key={item.id} className="hover:bg-gray-100 transition-colors duration-200">
              <td className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">{item.id}</td>
              <td className="px-4 py-2 whitespace-nowrap text-gray-700">{item.nome}</td>
              <td className="px-4 py-2 whitespace-nowrap text-gray-700">{item.categoria}</td>
              <td className="px-4 py-2 whitespace-nowrap text-gray-700">{item.quantidade}</td>
              <td className="px-4 py-2 whitespace-nowrap">
                <button className="inline-block rounded-sm bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700 mr-2">
                  Editar
                </button>
                <button className="inline-block rounded-sm bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-red-700">
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
