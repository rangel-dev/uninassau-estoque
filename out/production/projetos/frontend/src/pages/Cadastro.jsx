import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../services/userService';

const Cadastro = () => {
  const [form, setForm] = useState({
    name: '',
    cpf: '',
    birthday: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: '',
  });

  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErro('');

    if (form.password !== form.confirmPassword) {
      setErro('As senhas não coincidem.');
      return;
    }

    try {
      const payload = {
        name: form.name,
        cpf: form.cpf,
        birthday: form.birthday,
        phoneNumber: form.phoneNumber,
        email: form.email,
        password: form.password,
        userType: form.userType
      };

      await createUser(payload);
      alert('Usuário cadastrado com sucesso!');
      navigate('/login');
    } catch (err) {
      console.error(err);
      setErro(err.response?.data?.message || 'Erro ao cadastrar usuário.');
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-white text-gray-900">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-12 w-auto"
          src="https://aluno.uninassau.edu.br/Aluno/img/uninassau3.svg?29968"
          alt="UNINASSAU"
        />
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6 mt-12" onSubmit={handleSubmit}>
          {erro && <p className="text-red-500 text-sm text-center">{erro}</p>}

          <InputField label="Nome" name="name" value={form.name} onChange={handleChange} />
          <InputField label="CPF" name="cpf" value={form.cpf} onChange={handleChange} />
          <InputField label="Data de Nascimento" name="birthday" type="date" value={form.birthday} onChange={handleChange} />
          <InputField label="Telefone" name="phoneNumber" value={form.phoneNumber} onChange={handleChange} />
          <InputField label="Email" name="email" type="email" value={form.email} onChange={handleChange} />
          <InputField label="Senha" name="password" type="password" value={form.password} onChange={handleChange} />
          <InputField label="Confirmar Senha" name="confirmPassword" type="password" value={form.confirmPassword} onChange={handleChange} />

          <div>
            <label htmlFor="userType" className="block text-sm font-medium">Tipo de Usuário</label>
            <select
              id="userType"
              name="userType"
              value={form.userType}
              onChange={handleChange}
              required
              className="mt-2 block w-full rounded-md px-3 py-1.5 outline outline-1 outline-gray-300 focus:outline-2 focus:outline-[#0056B0] sm:text-sm"
            >
              <option value="client">Cliente</option>
              <option value="admin">Administrador</option>
            </select>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-[#26396F] px-3 py-1.5 text-sm font-semibold text-white hover:bg-[#003C6D]"
            >
              Cadastrar
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Já tem uma conta?
          <a href="/login" className="font-semibold text-[#0056B0] hover:text-[#003C6D] ml-1">
            Faça login aqui
          </a>
        </p>
      </div>
    </div>
  );
};

const InputField = ({ label, name, type = "text", value, onChange }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium">{label}</label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required
      className="mt-2 block w-full rounded-md px-3 py-1.5 outline outline-1 outline-gray-300 focus:outline-2 focus:outline-[#0056B0] sm:text-sm"
    />
  </div>
);

export default Cadastro;
