import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { ArrowLeft, Save } from "lucide-react";
import api from "../../services/api";
import { updateSupplier } from "../../services/supplierService";

const FornecedoresEditar = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    socialname: "",
    cnpj: "",
    cep: "",
    categoryId: "",
  });

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    console.log("Token recuperado do localStorage:", storedToken);
    if (!storedToken) {
      console.log("Token não encontrado, redirecionando para login");
      toast.error("Token não encontrado. Faça login novamente.");
      navigate("/login");
      return;
    }

    setToken(storedToken);

    // Verifica se os dados do fornecedor foram passados via state
    const fornecedor = location.state?.fornecedor;
    if (fornecedor) {
      console.log("Dados do fornecedor recebidos via state:", fornecedor);
      setFormData({
        socialname: fornecedor.socialname || "",
        cnpj: fornecedor.cnpj || "",
        cep: fornecedor.cep || "",
        categoryId: fornecedor.category?.id || "",
      });
      setLoading(false);
    } else {
      console.log("Dados do fornecedor não encontrados no state");
      toast.error(
        "Não foi possível carregar os dados do fornecedor. Acesse a página de edição a partir da lista de fornecedores."
      );
      navigate("/fornecedores");
      return;
    }

    fetchCategories(storedToken);
  }, [id, navigate, location.state]);

  const fetchCategories = async (token) => {
    try {
      const response = await api.get("/categories", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Categorias recebidas:", response.data);
      setCategories(response.data);
    } catch (error) {
      console.error("Erro ao carregar categorias:", error);
      toast.error("Erro ao carregar categorias");
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    console.log(`Alterando campo ${id} para: ${value}`);
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Enviando formulário com dados:", formData);

    const rawCnpj = formData.cnpj.replace(/\D/g, "");
    const rawCep = formData.cep.replace(/\D/g, "");

    if (
      !formData.socialname ||
      !formData.cnpj ||
      !formData.cep ||
      !formData.categoryId
    ) {
      toast.warn("Por favor, preencha todos os campos obrigatórios");
      return;
    }

    if (rawCnpj.length !== 14) {
      toast.warn("CNPJ deve conter 14 dígitos");
      return;
    }

    if (rawCep.length !== 8) {
      toast.warn("CEP deve conter 8 dígitos");
      return;
    }

    try {
      const formattedCnpj = rawCnpj.replace(
        /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
        "$1.$2.$3/$4-$5"
      );
      const formattedCep = rawCep.replace(/(\d{5})(\d{3})/, "$1-$2");

      const supplierData = {
        socialname: formData.socialname,
        cnpj: formattedCnpj,
        cep: formattedCep,
        category: { id: formData.categoryId },
      };

      await updateSupplier(id, supplierData);
      console.log("Fornecedor atualizado com sucesso");
      toast.success("Fornecedor atualizado com sucesso!");
      navigate("/fornecedores");
    } catch (error) {
      console.error("Erro ao atualizar fornecedor:", error.message);
      let errorMessage = "Erro ao atualizar fornecedor";
      if (error.response?.status === 403) {
        errorMessage =
          "Acesso negado: você não tem permissão para atualizar este fornecedor.";
      } else if (error.response?.status === 404) {
        errorMessage = "Fornecedor não encontrado.";
      }
      toast.error(errorMessage);
    }
  };

  if (loading) return <p className="p-6">Carregando fornecedor...</p>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-indigo-600">
          Editar Fornecedor
        </h1>
        <div className="flex gap-4">
          <button
            type="submit"
            form="fornecedor-form"
            className="flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-white font-medium hover:bg-green-700"
          >
            <Save className="w-4 h-4" /> Salvar
          </button>
          <a
            href="/fornecedores"
            className="flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </a>
        </div>
      </div>

      <form
        id="fornecedor-form"
        onSubmit={handleSubmit}
        className="rounded-xl bg-white p-4 ring-3 ring-indigo-50 sm:p-6 lg:p-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="socialname"
              className="block text-sm font-medium text-gray-700"
            >
              Razão Social
            </label>
            <input
              id="socialname"
              value={formData.socialname}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600"
              required
            />
          </div>
          <div>
            <label
              htmlFor="cnpj"
              className="block text-sm font-medium text-gray-700"
            >
              CNPJ
            </label>
            <input
              id="cnpj"
              value={formData.cnpj}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600"
              required
            />
          </div>
          <div>
            <label
              htmlFor="cep"
              className="block text-sm font-medium text-gray-700"
            >
              CEP
            </label>
            <input
              id="cep"
              value={formData.cep}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600"
              required
            />
          </div>
          <div>
            <label
              htmlFor="categoryId"
              className="block text-sm font-medium text-gray-700"
            >
              Categoria
            </label>
            <select
              id="categoryId"
              value={formData.categoryId}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600"
              required
            >
              <option value="">Selecione uma categoria</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.nameCategory}
                </option>
              ))}
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FornecedoresEditar;