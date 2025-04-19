import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login, getTokenPayload } from "../services/authService";
import useAuthRedirect from "../hooks/useAuthRedirect";
import { Mail, Lock } from "lucide-react";

const Login = () => {
  useAuthRedirect();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await login({ email, password });

      if (response && response.token) {
        localStorage.setItem("token", response.token);

        const payload = getTokenPayload();
        if (payload?.sub) {
          localStorage.setItem("userEmail", payload.sub);
        }

        navigate("/dashboard");
      }
    } catch (err) {
      console.error(err);
      setError("Credenciais inválidas. Verifique seu e-mail e senha.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md space-y-6 bg-white p-8 rounded-xl shadow-lg">
        <div className="text-center">
          <img
            className="mx-auto h-12 w-auto"
            src="https://aluno.uninassau.edu.br/Aluno/img/uninassau3.svg?29968"
            alt="Uninassau"
          />
          <h2 className="mt-6 text-2xl font-bold text-gray-900">
            Acesse sua conta
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Endereço de Email
            </label>
            <div className="mt-1 relative">
              <Mail className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 block w-full rounded-md border border-gray-300 shadow-sm py-2 px-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0056B0] sm:text-sm"
                placeholder="seuemail@exemplo.com"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Senha
            </label>
            <div className="mt-1 relative">
              <Lock className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 block w-full rounded-md border border-gray-300 shadow-sm py-2 px-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0056B0] sm:text-sm"
                placeholder="********"
              />
            </div>
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex w-full justify-center rounded-md bg-[#26396F] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#003C6D] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#003C6D] transition"
            >
              {isSubmitting ? "Entrando..." : "Entrar"}
            </button>
          </div>

          <div className="text-center">
            <a
              href="/esquecisenha"
              className="text-sm font-medium text-[#0056B0] hover:text-[#003C6D]"
            >
              Esqueceu a senha?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
