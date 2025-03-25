import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from '../../services/userService';

const UsuarioCriar = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    cpf: "",
    birthday: "",
    phoneNumber: "",
    email: "",
    password: "",
    userType: "admin",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    if (!formData.name || !formData.email || !formData.password) {
      alert('Por favor, preencha todos os campos obrigatórios');
      return;
    }

    try {

      const rawCpf = formData.cpf.replace(/\D/g, '');
      const formattedCpf = rawCpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');


      const userData = {
        name: formData.name,
        cpf: formattedCpf,
        birthday: formData.birthday || null,
        phoneNumber: formData.phoneNumber,
        email: formData.email,
        password: formData.password,
        userType: formData.userType || 'admin'
      };

      await createUser(userData);
      alert("Usuário criado com sucesso!");
      navigate("/UsuarioIndex");
    } catch (error) {
      console.error("Erro detalhado:", error);
      alert(error.response?.data?.message || "Erro ao cadastrar usuário");
    }
  };

  return (
      <div className="flex flex-col gap-8 p-4">
        <div className="flex items-center gap-4">
          <h1 className="text-lg font-medium">NOVO USUÁRIO</h1>
          <button
              type="submit"
              form="usuario-form"
              className="inline-block min-w-[120px] px-6 py-3 text-center rounded-sm border border-green-600 bg-green-600 text-sm font-medium text-white hover:bg-transparent hover:text-green-600"
          >
            Salvar
          </button>
          <a
              className="inline-block min-w-[120px] px-6 py-3 text-center rounded-sm border border-red-600 bg-red-600 text-sm font-medium text-white hover:bg-transparent hover:text-red-600"
              href="/UsuarioIndex"
          >
            Voltar
          </a>
        </div>

        <form
            id="usuario-form"
            onSubmit={handleSubmit}
            className="flex flex-col gap-8"
        >
          {/* Dados Pessoais */}
          <div className="relative">
            <div className="absolute -top-3 left-4 bg-indigo-600 text-white text-sm font-medium px-3 py-1 rounded-sm">
              Dados Pessoais
            </div>
            <div className="rounded-xl bg-white p-4 ring-3 ring-indigo-50 sm:p-6 lg:p-8">
              <div className="flex flex-wrap gap-6">
                <div className="w-64">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Nome
                  </label>
                  <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-indigo-600"
                      placeholder="Insira o nome"
                  />
                </div>
                <div className="w-64">
                  <label htmlFor="cpf" className="block text-sm font-medium text-gray-700">
                    CPF
                  </label>
                  <input
                      type="text"
                      id="cpf"
                      value={formData.cpf}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-indigo-600"
                      placeholder="Insira o CPF"
                  />
                </div>
                <div className="w-48">
                  <label htmlFor="birthdate" className="block text-sm font-medium text-gray-700">
                    Nascimento
                  </label>
                  <input
                      type="date"
                      id="birthday"
                      value={formData.birthdate}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-indigo-600"
                  />
                </div>
                <div className="w-64">
                  <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                    Contato
                  </label>
                  <input
                      type="text"
                      id="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-indigo-600"
                      placeholder="(__)_____-____"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Informações do usuário */}
          <div className="relative">
            <div className="absolute -top-3 left-4 bg-indigo-600 text-white text-sm font-medium px-3 py-1 rounded-sm">
              Informações
            </div>
            <div className="rounded-xl bg-white p-4 ring-3 ring-indigo-50 sm:p-6 lg:p-8">
              <div className="flex flex-wrap gap-6">
                <div className="w-64">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-indigo-600"
                      placeholder="Insira o Email"
                  />
                </div>
                <div className="w-64">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Senha
                  </label>
                  <input
                      type="password"
                      id="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-indigo-600"
                      placeholder="Insira a senha"
                  />
                </div>
                <div className="w-64">
                  <label htmlFor="userType" className="block text-sm font-medium text-gray-700">
                    Papel
                  </label>
                  <input
                      type="text"
                      id="userType"
                      value={formData.userType}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-indigo-600"
                      placeholder="admin ou client"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
  );
};

export default UsuarioCriar;
