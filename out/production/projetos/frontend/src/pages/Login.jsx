import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/authService';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login({ email, password });
      navigate('/'); // redireciona para a home ou dashboard
    } catch (error) {
      console.error(error);
      alert('Erro ao fazer login. Verifique suas credenciais.');
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-white text-gray-900">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-12 w-auto" src="https://aluno.uninassau.edu.br/Aluno/img/uninassau3.svg?29968" alt="Your Company" />
      </div>

      <div className="mt-30 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">Endereço de Email</label>
            <div className="mt-2">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                required
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-[#0056B0] sm:text-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium">Senha</label>
            </div>
            <div className="mt-2">
              <input
                type="password"
                name="password"
                id="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-[#0056B0] sm:text-sm"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="text-sm">
                <a href="/esquecisenha" className="font-semibold text-[#0056B0] hover:text-[#003C6D]">Esqueceu a senha?</a>
              </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-[#26396F] px-3 py-1.5 text-sm font-semibold text-white shadow-xs hover:bg-[#003C6D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#003C6D]"
            >
              Entrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
