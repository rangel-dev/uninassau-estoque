import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { ArrowLeft, Save } from "lucide-react";
import api from "../../services/api";

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
    if (!storedToken) {
      toast.error("Token não encontrado. Faça login novamente.");
      navigate("/login");
      return;
    }

    setToken(storedToken);


    const loadSupplierData = async () => {
      try {

        const fornecedor = location.state?.fornecedor;
        if (fornecedor) {
          setFormData({
            socialname: fornecedor.socialname,
            cnpj: fornecedor.cnpj,
            cep: fornecedor.cep,
            categoryId: fornecedor.category?.id,
          });
        } else {

          const response = await api.get(`/suppliers/get/${id}`, {
            headers: {
              Authorization: `Bearer ${storedToken}`,
            },
          });
          const fornecedorFromApi = response.data;
          setFormData({
            socialname: fornecedorFromApi.socialname,
            cnpj: fornecedorFromApi.cnpj,
            cep: fornecedorFromApi.cep,
            categoryId: fornecedorFromApi.category?.id,
          });
        }


        const categoriesResponse = await api.get("/categories", {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        });
        setCategories(categoriesResponse.data);

        setLoading(false);
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
        toast.error("Erro ao carregar dados do fornecedor");
        navigate("/fornecedores");
      }
    };

    loadSupplierData();
  }, [id, navigate, location.state]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.socialname || !formData.cnpj || !formData.cep || !formData.categoryId) {
      toast.warn("Por favor, preencha todos os campos obrigatórios");
      return;
    }

    try {
      const supplierData = {
        socialname: formData.socialname,
        cnpj: formData.cnpj,
        cep: formData.cep,
        category: { id: formData.categoryId },
      };

      const response = await api.put(`/suppliers/update/${id}`, supplierData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Fornecedor atualizado com sucesso!");
      navigate("/fornecedores");
    } catch (error) {
      console.error("Erro ao atualizar fornecedor:", error);
      let errorMessage = "Erro ao atualizar fornecedor";

      if (error.response) {
        if (error.response.status === 403) {
          errorMessage = "Acesso negado: você não tem permissão para atualizar este fornecedor.";
        } else if (error.response.status === 404) {
          errorMessage = "Fornecedor não encontrado.";
        } else if (error.response.data?.error) {
          errorMessage = error.response.data.error;
        }
      }

      toast.error(errorMessage);
    }
  };

  if (loading) return <p className="p-6">Carregando fornecedor...</p>;

  return (
      <div className="max-w-6xl mx-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-indigo-600">Editar Fornecedor</h1>
          <div className="flex gap-4">
            <button
                type="submit"
                form="fornecedor-form"
                className="flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-white font-medium hover:bg-green-700"
            >
              <Save className="w-4 h-4" /> Salvar
            </button>
            <button
                onClick={() => navigate("/fornecedores")}
                className="flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </button>
          </div>
        </div>

        <form
            id="fornecedor-form"
            onSubmit={handleSubmit}
            className="rounded-xl bg-white p-4 ring-3 ring-indigo-50 sm:p-6 lg:p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {}
            <div>
              <label htmlFor="socialname" className="block text-sm font-medium text-gray-700">
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
              <label htmlFor="cnpj" className="block text-sm font-medium text-gray-700">
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
              <label htmlFor="cep" className="block text-sm font-medium text-gray-700">
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
              <label htmlFor="categoryId" className="block text-sm font-medium text-gray-700">
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