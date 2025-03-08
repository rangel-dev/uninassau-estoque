import React from 'react';

const Table = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow rounded-lg overflow-hidden">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nome</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Categoria</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantidade</th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((item) => (
            <tr key={item.id} className="hover:bg-gray-100 transition-colors duration-200">
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.nome}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.categoria}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.quantidade}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 mr-2">
                  Editar
                </button>
                <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300">
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
