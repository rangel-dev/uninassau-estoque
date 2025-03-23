import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../services/authService';

const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErro('');

    if (senha !== confirmarSenha) {
      setErro('As senhas não coincidem.');
      return;
    }

    try {
      await register({ nome, email, senha });
      alert('Usuário cadastrado com sucesso!');
      navigate('/login');
    } catch (err) {
      console.error(err);
      setErro(err.message || 'Erro ao cadastrar usuário.');
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-white text-gray-900">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-12 w-auto" src="https://aluno.uninassau.edu.br/Aluno/img/uninassau3.svg?29968" alt="UNINASSAU" />
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6 mt-12" onSubmit={handleSubmit}>
          {erro && <p className="text-red-500 text-sm text-center">{erro}</p>}

          <div>
            <label htmlFor="nome" className="block text-sm font-medium">Nome</label>
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
              className="mt-2 block w-full rounded-md px-3 py-1.5 outline outline-1 outline-gray-300 focus:outline-2 focus:outline-[#0056B0] sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-2 block w-full rounded-md px-3 py-1.5 outline outline-1 outline-gray-300 focus:outline-2 focus:outline-[#0056B0] sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="senha" className="block text-sm font-medium">Senha</label>
            <input
              type="password"
              id="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
              className="mt-2 block w-full rounded-md px-3 py-1.5 outline outline-1 outline-gray-300 focus:outline-2 focus:outline-[#0056B0] sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="confirmarSenha" className="block text-sm font-medium">Confirmar Senha</label>
            <input
              type="password"
              id="confirmarSenha"
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
              required
              className="mt-2 block w-full rounded-md px-3 py-1.5 outline outline-1 outline-gray-300 focus:outline-2 focus:outline-[#0056B0] sm:text-sm"
            />
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

export default Cadastro;
