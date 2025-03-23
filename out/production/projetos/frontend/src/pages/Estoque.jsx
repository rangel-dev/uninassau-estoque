import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../services/productService';

const Estoque = () => {
  const [produtos, setProdutos] = useState([]);
  const [erro, setErro] = useState('');

  useEffect(() => {
    async function fetchProdutos() {
      try {
        const data = await getAllProducts();
        setProdutos(data);
      } catch (err) {
        console.error(err);
        setErro('Erro ao carregar os produtos.');
      }
    }

    fetchProdutos();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Estoque</h1>

      {erro && <p className="text-red-500">{erro}</p>}

      <div className="overflow-x-auto">
        <table className="min-w-full border text-sm">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 border">ID</th>
              <th className="px-4 py-2 border">Nome</th>
              <th className="px-4 py-2 border">SKU</th>
              <th className="px-4 py-2 border">Preço</th>
            </tr>
          </thead>
          <tbody>
            {produtos.map((produto) => (
              <tr key={produto.id} className="bg-white hover:bg-gray-100">
                <td className="border px-4 py-2">{produto.id}</td>
                <td className="border px-4 py-2">{produto.nome}</td>
                <td className="border px-4 py-2">{produto.sku}</td>
                <td className="border px-4 py-2">R$ {produto.preco?.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Estoque;
