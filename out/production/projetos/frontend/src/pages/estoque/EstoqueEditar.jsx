import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Para pegar o ID do produto e redirecionar
import { getProductById, updateProduct } from "../../services/productService"; // Serviços para buscar e atualizar produto

const EstoqueEditar = () => {
  const { id } = useParams(); // Obtém o ID do produto da URL
  const navigate = useNavigate(); // Para redirecionar após a edição

  const [formData, setFormData] = useState({
    nome: "",
    quantidade: "",
    categoriaId: "",
    supplierId: "",
    dataCompra: "",
    dataValidade: "",
    price: "",
  });

  const [loading, setLoading] = useState(true); // Controla o carregamento dos dados

  // Função para buscar o produto pelo ID
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const product = await getProductById(id); // Busca o produto pelo ID
        if (!product) throw new Error("Produto não encontrado.");

        // Preenche o formulário com os dados do produto
        setFormData({
          nome: product.name || "",
          quantidade: product.quantity || "",
          categoriaId: product.category?.id || "", // Tratando caso `category` seja undefined
          supplierId: product.supplier?.id || "", // Tratando caso `supplier` seja undefined
          dataCompra: product.dataCompra || "",
          dataValidade: product.dataValidade || "",
          price: product.price || "",
        });
      } catch (error) {
        console.error("Erro ao buscar produto:", error);
        alert("Erro ao carregar os dados do produto.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  // Função para lidar com mudanças nos campos do formulário
  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Função para enviar as alterações ao backend
  const handleSubmit = async (event) => {
    event.preventDefault(); // Previne o comportamento padrão do formulário
    try {
      await updateProduct(id, {
        name: formData.nome,
        quantity: parseInt(formData.quantidade),
        categoryId: parseInt(formData.categoriaId),
        supplierId: parseInt(formData.supplierId),
        dataCompra: formData.dataCompra,
        dataValidade: formData.dataValidade,
        price: parseFloat(formData.price),
      });

      alert("Produto atualizado com sucesso!");
      // Redirecionar para página de estoque
      navigate("/estoqueindex");
    } catch (error) {
      console.error("Erro ao atualizar produto:", error);
      alert("Erro ao atualizar produto. Verifique os campos e tente novamente.");
    }
  };

  // Exibe mensagem de carregamento
  if (loading) {
    return <p>Carregando dados do produto...</p>;
  }

  return (
    <div className="flex flex-col gap-8 p-4">
      {/* Cabeçalho com título e botões */}
      <div className="flex items-center gap-4">
        <h1 className="text-lg font-medium">EDITAR PRODUTO</h1>

        {/* Botão de Voltar */}
        <a
          className="inline-block min-w-[120px] px-6 py-3 text-center rounded-sm border border-red-600 bg-red-600 text-sm font-medium text-white hover:bg-transparent hover:text-red-600 focus:ring-3 focus:outline-hidden"
          href="/estoqueindex"
        >
          Voltar
        </a>
      </div>

      {/* Formulário para Editar Produto */}
      <form
        className="rounded-xl bg-white p-4 ring-3 ring-indigo-50 sm:p-6 lg:p-8"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-wrap gap-6">
          {/* Campo Nome do Produto */}
          <div className="w-64">
            <label htmlFor="nome" className="block text-sm font-medium text-gray-700">
              Nome do Produto
            </label>
            <input
              type="text"
              id="nome"
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600"
              value={formData.nome}
              onChange={handleChange}
            />
          </div>

          {/* Campo Quantidade */}
          <div className="w-64">
            <label htmlFor="quantidade" className="block text-sm font-medium text-gray-700">
              Quantidade
            </label>
            <input
              type="number"
              id="quantidade"
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600"
              value={formData.quantidade}
              onChange={handleChange}
            />
          </div>

          {/* Campo ID da Categoria */}
          <div className="w-64">
            <label htmlFor="categoriaId" className="block text-sm font-medium text-gray-700">
              ID da Categoria
            </label>
            <input
              type="number"
              id="categoriaId"
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600"
              value={formData.categoriaId}
              onChange={handleChange}
            />
          </div>

          {/* Campo ID do Fornecedor */}
          <div className="w-64">
            <label htmlFor="supplierId" className="block text-sm font-medium text-gray-700">
              ID do Fornecedor
            </label>
            <input
              type="number"
              id="supplierId"
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600"
              value={formData.supplierId}
              onChange={handleChange}
            />
          </div>

          {/* Campo Data de Compra */}
          <div className="w-64">
            <label htmlFor="dataCompra" className="block text-sm font-medium text-gray-700">
              Data de Compra
            </label>
            <input
              type="date"
              id="dataCompra"
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600"
              value={formData.dataCompra}
              onChange={handleChange}
            />
          </div>

          {/* Campo Data de Validade */}
          <div className="w-64">
            <label htmlFor="dataValidade" className="block text-sm font-medium text-gray-700">
              Data de Validade
            </label>
            <input
              type="date"
              id="dataValidade"
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600"
              value={formData.dataValidade}
              onChange={handleChange}
            />
          </div>

          {/* Campo Preço */}
          <div className="w-64">
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">
              Preço
            </label>
            <input
              type="number"
              id="price"
              step="0.01"
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600"
              value={formData.price}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Botão de Salvar */}
        <button
          type="submit"
          className="mt-4 px-6 py-3 text-center rounded-sm border border-green-600 bg-green-600 text-sm font-medium text-white hover:bg-transparent hover:text-green-600 focus:ring-3 focus:outline-hidden"
        >
          Salvar Alterações
        </button>
      </form>
    </div>
  );
};

export default EstoqueEditar;
