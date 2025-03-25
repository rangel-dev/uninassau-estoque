import React from 'react';

const EsqueciSenha = () => {
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-white text-gray-900">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-12 w-auto" src="https://aluno.uninassau.edu.br/Aluno/img/uninassau3.svg?29968" alt="UNINASSAU" />
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <p className="mt-2 text-center text-sm text-gray-600">
          Digite seu endereço de e-mail e enviaremos um link para redefinir sua senha.
        </p>
        <form className="space-y-6 mt-12" action="#" method="POST">
          <div>
            <label htmlFor="email" className="block text-sm font-medium">Endereço de Email</label>
            <div className="mt-2">
              <input type="email" name="email" id="email" autoComplete="email" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#0056B0] sm:text-sm" />
            </div>
          </div>

          <div>
            <button type="submit" className="flex w-full justify-center rounded-md bg-[#003C6D] px-3 py-1.5 text-sm font-semibold text-white shadow-xs hover:bg-[#00254d] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#003C6D]">Enviar</button>
          </div>
        </form>

        <div className="mt-10 flex justify-center items-center space-x-4 text-sm text-gray-500">
          <span>Lembrou da senha?</span>
          <a href="/login" className="font-semibold text-[#0056B0] hover:text-[#003C6D]">Faça login aqui</a>
        </div>
      </div>
    </div>
  );
};

export default EsqueciSenha;
