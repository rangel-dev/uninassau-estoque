import React, { useState, useEffect } from "react";
import { uploadPlanilha, getAllProducts, deleteProduct } from "../../services/productService"; // Adiciona deleteProduct
import { FaEdit } from "react-icons/fa"; // Ícone de edição

const EstoqueIndex = () => {
  const [products, setProducts] = useState([]); // Estado para armazenar os produtos
  const [loading, setLoading] = useState(true); // Estado para gerenciar o carregamento
  const [file, setFile] = useState(null); // Estado para armazenar o arquivo selecionado

  // Função para buscar produtos do backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getAllProducts(); // Busca os produtos
        console.log("Produtos recebidos do backend:", data);
        setProducts(data);
      } catch (error) {
        console.error("Erro ao carregar os produtos:", error);
        alert("Ocorreu um erro ao carregar os produtos.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Função para lidar com a exclusão de um produto
  const handleDelete = async (id) => {
    const confirmacao = window.confirm("Tem certeza de que deseja deletar este produto?");
    if (!confirmacao) return;

    try {
      await deleteProduct(id); // Chama a API para excluir o produto
      alert("Produto deletado com sucesso!");

      // Atualiza a lista de produtos após a exclusão
      setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
    } catch (error) {
      console.error("Erro ao deletar produto:", error);
      alert("Erro ao deletar o produto. Tente novamente.");
    }
  };

  // Função para lidar com a seleção de arquivo
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  // Função para realizar o upload
  const handleUpload = async () => {
    try {
      if (file) {
        const response = await uploadPlanilha(file);
        console.log("Upload realizado com sucesso:", response);
        alert("Upload realizado com sucesso!");
      } else {
        alert("Por favor, selecione um arquivo antes de fazer o upload.");
      }
    } catch (error) {
      console.error("Erro ao enviar a planilha:", error);
      alert("Ocorreu um erro ao enviar a planilha. Verifique o console para mais detalhes.");
    }
  };

  // Exibe mensagem de carregamento
  if (loading) {
    return <p>Carregando produtos...</p>;
  }

  const formatarData = (data) => {
    if (!data) return "Sem data"; // Trata valores nulos ou indefinidos
    try {
      const parsedDate = new Date(data);
      if (!isNaN(parsedDate.getTime())) {
        return parsedDate.toLocaleDateString("pt-BR");
      }
      const [year, month, day] = data.split("-");
      if (year && month && day) {
        return `${day}/${month}/${year}`;
      }
      return "Data inválida";
    } catch (error) {
      console.error("Erro ao formatar data:", error);
      return "Data inválida";
    }
  };

  return (
    <div>
      <div className="flex items-center gap-4">
        <h1 className="text-lg font-medium">GERENCIAR ESTOQUE</h1>
        <a
          className="inline-block min-w-[120px] px-6 py-3 text-center rounded-sm border border-indigo-600 bg-indigo-600 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden"
          href="/estoque/criar"
        >
          Adicionar Item
        </a>
        <a
          className="inline-block min-w-[120px] px-6 py-3 text-center rounded-sm border border-red-600 bg-red-600 text-sm font-medium text-white hover:bg-transparent hover:text-red-600 focus:ring-3 focus:outline-hidden"
          href="/dashboard"
        >
          Voltar
        </a>
      </div>

      <div className="mt-4">
        <h2 className="text-lg font-medium">Upload de Planilha</h2>
        <div className="flex items-center gap-2 mt-2">
          <input
            type="file"
            onChange={handleFileChange}
            className="border border-gray-300 px-4 py-2 rounded-sm focus:ring-2 focus:ring-indigo-600"
          />
          <button
            onClick={handleUpload}
            className="px-4 py-2 text-white bg-green-600 rounded-sm hover:bg-green-700 focus:ring-2 focus:ring-green-600"
          >
            Upload
          </button>
        </div>
      </div>

      <div className="mt-12">
        <div className="overflow-x-auto rounded-lg shadow">
          <table className="min-w-full divide-y divide-gray-200 bg-white text-sm">
            <thead className="bg-blue-600">
              <tr>
                <th className="px-4 py-2 font-medium text-left text-white">Nome do Item</th>
                <th className="px-4 py-2 font-medium text-left text-white">Quantidade</th>
                <th className="px-4 py-2 font-medium text-left text-white">Categoria</th>
                <th className="px-4 py-2 font-medium text-left text-white">Data de Entrada</th>
                <th className="px-4 py-2 font-medium text-left text-white">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-100">
                  <td className="px-4 py-2 font-medium text-gray-900">{product.name}</td>
                  <td className="px-4 py-2 text-gray-700">{product.quantity}</td>
                  <td className="px-4 py-2 text-gray-700">
                    {product.category ? product.category.nameCategory : "Sem categoria"}
                  </td>
                  <td className="px-4 py-2 text-gray-700">{formatarData(product.dataCompra)}</td>
                  <td className="px-4 py-2 text-gray-700">
                    <a
                      href={`/estoque/editar/${product.id}`}
                      className="inline-block px-2 py-1 text-white bg-blue-600 rounded-sm hover:bg-blue-700 focus:ring-2 focus:ring-blue-600"
                    >
                      <FaEdit />
                    </a>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="ml-2 px-2 py-1 text-white bg-red-600 rounded-sm hover:bg-red-700 focus:ring-2 focus:ring-red-600"
                    >
                      Deletar
                    </button>
                  </td>
                </tr>
              ))}
              {products.length === 0 && (
                <tr>
                  <td colSpan="5" className="px-4 py-2 text-center text-gray-500">
                    Nenhum produto encontrado.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EstoqueIndex;
