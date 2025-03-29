import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { ArrowLeft, Save } from "lucide-react";

// Função auxiliar para formatar CPF no padrão xxx.xxx.xxx-xx
const formatCPF = (value) => {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  return digits
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
};

// Função auxiliar para formatar telefone no padrão: +{countryCode} (XX) XXXXX-XXXX
const formatPhone = (input) => {
  const digits = input.replace(/\D/g, "");
  if (!digits) return "";
  let countryCode, areaCode, firstPart, secondPart;
  if (digits.length > 11) {
    countryCode = digits.slice(0, digits.length - 11);
    if (countryCode.length > 3) countryCode = countryCode.slice(0, 3);
    const remaining = digits.slice(digits.length - 11);
    areaCode = remaining.slice(0, 2);
    firstPart = remaining.slice(2, 7);
    secondPart = remaining.slice(7, 11);
  } else {
    countryCode = "55";
    areaCode = digits.slice(0, 2);
    firstPart = digits.slice(2, 7);
    secondPart = digits.slice(7, 11);
  }
  let formatted = `+${countryCode}`;
  if (areaCode) formatted += ` (${areaCode})`;
  if (firstPart) {
    formatted += ` ${firstPart}`;
    if (firstPart.length === 5 && secondPart) {
      formatted += `-${secondPart}`;
    }
  }
  return formatted;
};

const UsuarioEditar = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    cpf: "",
    birthday: "",
    phoneNumber: "",
    email: "",
    userType: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    console.log("Token recuperado do localStorage:", storedToken);
    if (storedToken) {
      setToken(storedToken);
      fetchUsuario(storedToken);
    } else {
      console.log("Token não encontrado, redirecionando para login");
      toast.error("Token não encontrado. Faça login novamente.");
      navigate("/login");
    }
  }, [id, navigate]);

  const fetchUsuario = async (token) => {
    try {
      console.log("Buscando usuário com ID:", id);
      const response = await fetch(`http://localhost:8080/user/get/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error(`Erro ao buscar usuário: ${response.status}`);
      }
      const data = await response.json();
      console.log("Dados do usuário recebidos:", data);
      setFormData({
        name: data.name || "",
        cpf: data.cpf || "",
        birthday: data.birthday ? data.birthday.split("T")[0] : "",
        phoneNumber: data.phoneNumber || "",
        email: data.email || "",
        userType: data.userType || "",
        password: data.password || "",
        confirmPassword: data.password || "",
      });
    } catch (error) {
      console.error("Erro ao buscar usuário:", error.message);
      toast.error("Erro ao carregar dados do usuário");
    } finally {
      setLoading(false);
      console.log("Carregamento concluído, loading:", false);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    let formattedValue = value;
    if (id === "cpf") {
      formattedValue = formatCPF(value);
    }
    // Para telefone, a formatação é aplicada no onBlur
    setFormData((prevData) => ({ ...prevData, [id]: formattedValue }));
  };

  const handlePhoneBlur = () => {
    setFormData((prevData) => ({
      ...prevData,
      phoneNumber: formatPhone(formData.phoneNumber),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Enviando formulário com dados:", formData);
    
    // Verifica se as senhas são iguais
    if (formData.password !== formData.confirmPassword) {
      toast.error("A senha e a confirmação não coincidem!");
      return;
    }
    
    try {
      const response = await fetch(`http://localhost:8080/user/update/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        const errorText = await response.text();
        console.error("Resposta do servidor:", errorText);
        throw new Error(`Erro ao atualizar usuário: ${response.status} - ${errorText}`);
      }
      console.log("Usuário atualizado com sucesso");
      toast.success("Usuário atualizado com sucesso!");
      navigate("/user");
    } catch (error) {
      console.error("Erro ao atualizar usuário:", error.message);
      toast.error("Erro ao atualizar usuário: " + error.message);
    }
  };

  if (loading) return <p className="p-6">Carregando usuário...</p>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-indigo-600">Editar Usuário</h1>
        <div className="flex gap-4">
          <button
            type="submit"
            form="usuario-form"
            className="flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-white font-medium hover:bg-green-700"
          >
            <Save className="w-4 h-4" /> Salvar
          </button>
          <a
            href="/user"
            className="flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
          >
            <ArrowLeft className="w-4 h-4" /> Voltar
          </a>
        </div>
      </div>
      <form id="usuario-form" onSubmit={handleSubmit} className="rounded-xl bg-white p-4 ring-3 ring-indigo-50 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Nome
            </label>
            <input
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600"
              required
            />
          </div>
          <div>
            <label htmlFor="cpf" className="block text-sm font-medium text-gray-700">
              CPF
            </label>
            <input
              id="cpf"
              value={formData.cpf}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600"
            />
          </div>
          <div>
            <label htmlFor="birthday" className="block text-sm font-medium text-gray-700">
              Nascimento
            </label>
            <input
              type="date"
              id="birthday"
              value={formData.birthday}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600"
            />
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
              Telefone
            </label>
            <input
              id="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              onBlur={handlePhoneBlur}
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600"
              placeholder="+000 (00) 00000-0000"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600"
              required
            />
          </div>
          <div>
            <label htmlFor="userType" className="block text-sm font-medium text-gray-700">
              Tipo de Usuário
            </label>
            <select
              id="userType"
              value={formData.userType}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600"
            >
              <option value="">Selecione</option>
              <option value="ADMIN">ADMIN</option>
              <option value="USER">USER</option>
            </select>
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Senha
            </label>
            <input
              id="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600"
              required
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirmar Senha
            </label>
            <input
              id="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600"
              required
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default UsuarioEditar;
