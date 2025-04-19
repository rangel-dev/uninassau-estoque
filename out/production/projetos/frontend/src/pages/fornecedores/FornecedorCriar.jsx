import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createSupplier } from "../../services/supplierService";
import { ArrowLeft, Save } from "lucide-react";
import { toast } from "react-toastify";
import api from "../../services/api";

const FornecedoresCriar = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    socialname: "",
    cnpj: "",
    cep: "",
    categoryId: "",
  });
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const token = localStorage.getItem("token");
      console.log("Token usado para categorias:", token);
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
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handleSubmit chamado");

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

      const token = localStorage.getItem("token");
      console.log("Token usado para criar fornecedor:", token);
      console.log("Dados enviados para o backend:", supplierData);
      const response = await createSupplier(supplierData);
      console.log("Resposta do backend:", response);
      toast.success("Fornecedor criado com sucesso!");
      navigate("/Fornecedores"); // Ajustado para /Fornecedores
    } catch (error) {
      console.error("Erro detalhado:", error);
      console.error("Resposta do erro:", error.response);
      toast.error(
        error.response?.data?.message || "Erro ao cadastrar fornecedor"
      );
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-indigo-600">
          Novo Fornecedor
        </h1>
        <div className="flex gap-4">
          <button
            type="submit"
            form="fornecedor-form"
            className="flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-white font-medium hover:bg-green-700 transition"
          >
            <Save className="w-4 h-4" />
            Salvar
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
        className="space-y-10 bg-white shadow-xl rounded-2xl p-8"
      >
        <div>
          <h2 className="text-lg font-medium text-indigo-500 mb-4">
            Dados do Fornecedor
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <InputField
              id="socialname"
              label="Razão Social"
              value={formData.socialname}
              onChange={handleChange}
              placeholder="Insira a razão social"
            />
            <InputField
              id="cnpj"
              label="CNPJ"
              value={formData.cnpj}
              onChange={handleChange}
              placeholder="XX.XXX.XXX/XXXX-XX"
            />
            <InputField
              id="cep"
              label="CEP"
              value={formData.cep}
              onChange={handleChange}
              placeholder="XXXXX-XXX"
            />
            <div className="w-full">
              <label
                htmlFor="categoryId"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Categoria
              </label>
              <select
                id="categoryId"
                value={formData.categoryId}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 p-2.5 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
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
        </div>
      </form>
    </div>
  );
};

const InputField = ({
  id,
  label,
  type = "text",
  value,
  onChange,
  placeholder = "",
}) => (
  <div className="w-full">
    <label
      htmlFor={id}
      className="block text-sm font-medium text-gray-700 mb-1"
    >
      {label}
    </label>
    <input
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full rounded-lg border border-gray-300 p-2.5 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
    />
  </div>
);

export default FornecedoresCriar;
