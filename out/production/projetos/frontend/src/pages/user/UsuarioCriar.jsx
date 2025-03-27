import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../services/userService";
import { ArrowLeft, Save } from "lucide-react";
import { toast } from "react-toastify";

const UsuarioCriar = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    cpf: "",
    birthday: "",
    phoneNumber: "",
    email: "",
    password: "",
    userType: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password) {
      toast.warn("Por favor, preencha todos os campos obrigatórios");
      return;
    }

    try {
      const rawCpf = formData.cpf.replace(/\D/g, "");
      const formattedCpf = rawCpf.replace(
        /(\d{3})(\d{3})(\d{3})(\d{2})/,
        "$1.$2.$3-$4"
      );
      const rawCpf = formData.cpf.replace(/\D/g, "");
      const formattedCpf = rawCpf.replace(
        /(\d{3})(\d{3})(\d{3})(\d{2})/,
        "$1.$2.$3-$4"
      );

      const userData = {
        name: formData.name,
        cpf: formattedCpf,
        birthday: formData.birthday || null,
        phoneNumber: formData.phoneNumber,
        email: formData.email,
        password: formData.password,
        userType: formData.userType || "admin",
      };

      await createUser(userData);
      toast.success("Usuário criado com sucesso!");
      navigate("/UsuarioIndex");
    } catch (error) {
      console.error("Erro detalhado:", error);
      toast.error(error.response?.data?.message || "Erro ao cadastrar usuário");
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-indigo-600">Novo Usuário</h1>
        <div className="flex gap-4">
          <button
            type="submit"
            form="usuario-form"
            className="flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-white font-medium hover:bg-green-700 transition"
          >
            <Save className="w-4 h-4" />
            Salvar
          </button>
          <a
            href="/UsuarioIndex"
            className="flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </a>
        </div>
      </div>

      <form
        id="usuario-form"
        onSubmit={handleSubmit}
        className="space-y-10 bg-white shadow-xl rounded-2xl p-8"
      >
        {/* Dados Pessoais */}
        <div>
          <h2 className="text-lg font-medium text-indigo-500 mb-4">
            Dados Pessoais
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <InputField
              id="name"
              label="Nome"
              value={formData.name}
              onChange={handleChange}
              placeholder="Insira o nome"
            />
            <InputField
              id="cpf"
              label="CPF"
              value={formData.cpf}
              onChange={handleChange}
              placeholder="Insira o CPF"
            />
            <InputField
              id="birthday"
              label="Data de Nascimento"
              type="date"
              value={formData.birthday}
              onChange={handleChange}
            />
            <InputField
              id="phoneNumber"
              label="Contato"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="(__) ____-____"
            />
          </div>
        </div>

        {/* Informações de Acesso */}
        <div>
          <h2 className="text-lg font-medium text-indigo-500 mb-4">
            Informações de Acesso
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <InputField
              id="email"
              label="Email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Insira o email"
            />
            <InputField
              id="password"
              label="Senha"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Insira a senha"
            />
            <InputField
              id="userType"
              label="Papel"
              value={formData.userType}
              onChange={handleChange}
              placeholder="admin ou client"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

// Componente reutilizável para inputs
const InputField = ({
  id,
  label,
  type = "text",
  value,
  onChange,
  placeholder = "",
}) => (
  <div className="w-full">
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
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

export default UsuarioCriar;
